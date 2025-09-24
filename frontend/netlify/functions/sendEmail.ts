import nodemailer from "nodemailer";
import { google } from "googleapis";
import SMTPTransport from "nodemailer/lib/smtp-transport";
// Use the newer Context type instead of Handler
interface NetlifyEvent {
  httpMethod: string;
  body: string | null;
}

type NetlifyResponse = {
  statusCode: number;
  body: string;
  headers?: Record<string, string>;
};

const jsonResponse = (body: object | string, statusCode: number) => {
  const json = typeof body === "string" ? body : JSON.stringify(body);

  return {
    statusCode,
    body: json,
    headers: {
      // "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
  };
};

const handler = async (event: NetlifyEvent): Promise<NetlifyResponse> => {
  if (event.httpMethod !== "POST") {
    return jsonResponse("Method Not Allowed", 405);
  }

  if (!event.body) {
    return jsonResponse("Missing request body", 400);
  }
  try {
    const enrollmentData = JSON.parse(event.body);
    const contactData = JSON.parse(event.body);
    // Destructure the enrollment data
    const {
      studentName,
      email,
      phone,
      preferredMode,
      course,
      experience,
      originalPrice,
      price,
      discount,
      duration,
      timestamp,
    } = enrollmentData;

    const { firstName, lastName, message } = contactData;

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID!,
      process.env.GOOGLE_CLIENT_SECRET!,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    // Enable automatic token refresh
    oauth2Client.on("tokens", (tokens) => {
      if (tokens.refresh_token) {
        // Store the new refresh token if provided
        console.log("New refresh token received");
      }
      if (tokens.access_token) {
        console.log("New access token received");
      }
    });

    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.USER_MAIL,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    } as SMTPTransport.Options);

    // Format the enrollment date
    const enrollmentDate = new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const enrollMailOptions = {
      from: process.env.USER_MAIL,
      to: process.env.USER_MAIL,
      replyTo: email,
      subject: `🎓 New Course Enrollment: ${course} - ${studentName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Course Enrollment Notification</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f8fafc;
            }
            .container {
              background: white;
              border-radius: 12px;
              padding: 30px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #2563eb, #3b82f6);
              color: white;
              padding: 25px;
              border-radius: 8px;
              text-align: center;
              margin-bottom: 25px;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            }
            .badge {
              background: #10b981;
              color: white;
              padding: 6px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              display: inline-block;
              margin-top: 8px;
            }
            .section {
              margin-bottom: 25px;
              padding: 20px;
              background: #f8fafc;
              border-radius: 8px;
              border-left: 4px solid #2563eb;
            }
            .section h2 {
              margin: 0 0 15px 0;
              color: #2563eb;
              font-size: 18px;
              font-weight: 600;
            }
            .info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 15px;
              margin-bottom: 15px;
            }
            .info-item {
              background: white;
              padding: 12px;
              border-radius: 6px;
              border: 1px solid #e5e7eb;
            }
            .info-label {
              font-weight: 600;
              color: #6b7280;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 4px;
            }
            .info-value {
              color: #111827;
              font-weight: 500;
            }
            .pricing {
              background: linear-gradient(135deg, #ecfdf5, #d1fae5);
              border: 1px solid #10b981;
              padding: 20px;
              border-radius: 8px;
              text-align: center;
            }
            .original-price {
              text-decoration: line-through;
              color: #6b7280;
              font-size: 16px;
            }
            .current-price {
              color: #10b981;
              font-size: 24px;
              font-weight: 700;
              margin: 5px 0;
            }
            .discount-badge {
              background: #ef4444;
              color: white;
              padding: 4px 8px;
              border-radius: 4px;
              font-size: 12px;
              font-weight: 600;
            }
            .payment-status {
              background: #fef3c7;
              border: 1px solid #f59e0b;
              padding: 15px;
              border-radius: 8px;
              text-align: center;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 14px;
            }
            .logo {
              font-weight: 700;
              color: #2563eb;
            }
            @media (max-width: 600px) {
              .info-grid {
                grid-template-columns: 1fr;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎓 New Course Enrollment</h1>
              <div class="badge">Enrollment Received</div>
            </div>

            <div class="section">
              <h2>👨‍🎓 Student Information</h2>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Full Name</div>
                  <div class="info-value">${studentName}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email Address</div>
                  <div class="info-value">${email}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Phone Number</div>
                  <div class="info-value">${phone}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Preferred Mode</div>
                  <div class="info-value">${
                    preferredMode === "online"
                      ? "💻 Online (Zoom)"
                      : "🏢 In-Person (Itahari)"
                  }</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Experience Level</div>
                  <div class="info-value">${experience || "Not specified"}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Enrollment Date</div>
                  <div class="info-value">${enrollmentDate}</div>
                </div>
              </div>
            </div>

            <div class="section">
              <h2>📚 Course Details</h2>
              <div class="info-item" style="margin-bottom: 15px;">
                <div class="info-label">Course Name</div>
                <div class="info-value" style="font-size: 18px; font-weight: 600; color: #2563eb;">${course}</div>
              </div>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Duration</div>
                  <div class="info-value">${duration}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Course Format</div>
                  <div class="info-value">Professional Training</div>
                </div>
              </div>
            </div>

            <div class="section">
              <h2>💰 Pricing Information</h2>
              <div class="pricing">
                <div class="original-price">Original Price: Rs. ${originalPrice.toLocaleString()}</div>
                <div class="current-price">Rs. ${price.toLocaleString()}</div>
                <div class="discount-badge">${discount}% Discount Applied</div>
                <div style="margin-top: 10px; color: #6b7280; font-size: 14px;">
                  You saved: Rs. ${(originalPrice - price).toLocaleString()}
                </div>
              </div>
            </div>

            <div class="payment-status">
              <strong>⏳ Payment Verification Pending</strong>
              <div style="margin-top: 8px; font-size: 14px;">
                Payment proof uploaded and will be verified within 24 hours.
              </div>
            </div>

            <div class="section">
              <h2>📋 Next Steps</h2>
              <div style="background: white; padding: 15px; border-radius: 6px;">
                <ol style="margin: 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">Verify payment proof submitted by student</li>
                  <li style="margin-bottom: 8px;">Send course access details and welcome email</li>
                  <li style="margin-bottom: 8px;">Add student to course communication group</li>
                  <li style="margin-bottom: 8px;">Schedule orientation session if needed</li>
                </ol>
              </div>
            </div>

            <div class="footer">
              <div class="logo">Prasad Info Tech</div>
              <div>Professional IT Training Institute</div>
              <div style="margin-top: 10px;">
                📞 +977 986-2282235 | 🌐 prasadinfotech.netlify.app
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const contactMailOptions = {
      from: process.env.USER_MAIL,
      to: process.env.USER_MAIL,
      replyTo: email,
      subject: `🎓 New Course Enrollment: ${course} - ${studentName}`,
      html: `
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Message:</strong><br/>${message}</p>
  `,
    };

    // Send admin notification email

  if (!message && !lastName && !firstName)
    await transporter.sendMail(enrollMailOptions);
  else
    await transporter.sendMail(contactMailOptions);

    // Send confirmation email to student
    // const studentMailOptions = {
    //   from: process.env.USER_MAIL,
    //   to: email,
    //   subject: `🎉 Enrollment Confirmation - ${course} | Prasad Info Tech`,
    //   html: `
    //     <!DOCTYPE html>
    //     <html>
    //     <head>
    //       <meta charset="utf-8">
    //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //       <title>Enrollment Confirmation</title>
    //       <style>
    //         body {
    //           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    //           line-height: 1.6;
    //           color: #333;
    //           max-width: 600px;
    //           margin: 0 auto;
    //           padding: 20px;
    //           background-color: #f8fafc;
    //         }
    //         .container {
    //           background: white;
    //           border-radius: 12px;
    //           padding: 30px;
    //           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    //         }
    //         .header {
    //           background: linear-gradient(135deg, #10b981, #059669);
    //           color: white;
    //           padding: 25px;
    //           border-radius: 8px;
    //           text-align: center;
    //           margin-bottom: 25px;
    //         }
    //         .header h1 {
    //           margin: 0;
    //           font-size: 24px;
    //           font-weight: 600;
    //         }
    //         .welcome-message {
    //           background: #ecfdf5;
    //           border: 1px solid #10b981;
    //           padding: 20px;
    //           border-radius: 8px;
    //           text-align: center;
    //           margin-bottom: 25px;
    //         }
    //         .section {
    //           margin-bottom: 25px;
    //           padding: 20px;
    //           background: #f8fafc;
    //           border-radius: 8px;
    //           border-left: 4px solid #10b981;
    //         }
    //         .section h2 {
    //           margin: 0 0 15px 0;
    //           color: #059669;
    //           font-size: 18px;
    //           font-weight: 600;
    //         }
    //         .info-item {
    //           background: white;
    //           padding: 12px;
    //           border-radius: 6px;
    //           border: 1px solid #e5e7eb;
    //           margin-bottom: 10px;
    //         }
    //         .info-label {
    //           font-weight: 600;
    //           color: #6b7280;
    //           font-size: 12px;
    //           text-transform: uppercase;
    //           letter-spacing: 0.5px;
    //           margin-bottom: 4px;
    //         }
    //         .info-value {
    //           color: #111827;
    //           font-weight: 500;
    //         }
    //         .next-steps {
    //           background: #fef3c7;
    //           border: 1px solid #f59e0b;
    //           padding: 20px;
    //           border-radius: 8px;
    //           margin: 20px 0;
    //         }
    //         .contact-info {
    //           background: #dbeafe;
    //           border: 1px solid #3b82f6;
    //           padding: 20px;
    //           border-radius: 8px;
    //           text-align: center;
    //         }
    //         .footer {
    //           text-align: center;
    //           margin-top: 30px;
    //           padding-top: 20px;
    //           border-top: 1px solid #e5e7eb;
    //           color: #6b7280;
    //           font-size: 14px;
    //         }
    //         .logo {
    //           font-weight: 700;
    //           color: #059669;
    //         }
    //       </style>
    //     </head>
    //     <body>
    //       <div class="container">
    //         <div class="header">
    //           <h1>🎉 Enrollment Confirmed!</h1>
    //           <div style="margin-top: 10px; font-size: 16px;">Welcome to Prasad Info Tech</div>
    //         </div>

    //         <div class="welcome-message">
    //           <h2 style="margin: 0 0 10px 0; color: #059669;">Dear ${studentName},</h2>
    //           <p style="margin: 0; font-size: 16px;">
    //             Thank you for enrolling in our <strong>${course}</strong>!
    //             We're excited to have you join our learning community.
    //           </p>
    //         </div>

    //         <div class="section">
    //           <h2>📋 Your Enrollment Details</h2>
    //           <div class="info-item">
    //             <div class="info-label">Course</div>
    //             <div class="info-value" style="font-size: 18px; font-weight: 600; color: #059669;">${course}</div>
    //           </div>
    //           <div class="info-item">
    //             <div class="info-label">Duration</div>
    //             <div class="info-value">${duration}</div>
    //           </div>
    //           <div class="info-item">
    //             <div class="info-label">Learning Mode</div>
    //             <div class="info-value">${preferredMode === 'online' ? '💻 Online (Zoom)' : '🏢 In-Person (Itahari)'}</div>
    //           </div>
    //           <div class="info-item">
    //             <div class="info-label">Total Investment</div>
    //             <div class="info-value">
    //               <span style="text-decoration: line-through; color: #6b7280;">Rs. ${originalPrice.toLocaleString()}</span>
    //               <span style="color: #059669; font-weight: 700; font-size: 18px; margin-left: 10px;">Rs. ${price.toLocaleString()}</span>
    //               <span style="background: #ef4444; color: white; padding: 2px 6px; border-radius: 4px; font-size: 12px; margin-left: 10px;">${discount}% OFF</span>
    //             </div>
    //           </div>
    //         </div>

    //         <div class="next-steps">
    //           <h3 style="margin: 0 0 15px 0; color: #92400e;">⏳ What Happens Next?</h3>
    //           <ol style="margin: 0; padding-left: 20px; color: #92400e;">
    //             <li style="margin-bottom: 8px;"><strong>Payment Verification:</strong> We'll verify your payment within 24 hours</li>
    //             <li style="margin-bottom: 8px;"><strong>Course Access:</strong> You'll receive login credentials and course materials</li>
    //             <li style="margin-bottom: 8px;"><strong>Welcome Call:</strong> Our team will contact you to schedule orientation</li>
    //             <li><strong>Course Start:</strong> We'll notify you about the official course start date</li>
    //           </ol>
    //         </div>

    //         <div class="section">
    //           <h2>🎯 What You'll Learn</h2>
    //           <div style="background: white; padding: 15px; border-radius: 6px;">
    //             <ul style="margin: 0; padding-left: 20px;">
    //               <li style="margin-bottom: 8px;">Professional ${course.toLowerCase()} techniques and strategies</li>
    //               <li style="margin-bottom: 8px;">Industry-standard tools and software</li>
    //               <li style="margin-bottom: 8px;">Hands-on practical projects</li>
    //               <li style="margin-bottom: 8px;">Portfolio development guidance</li>
    //               <li>Certificate of completion</li>
    //             </ul>
    //           </div>
    //         </div>

    //         <div class="contact-info">
    //           <h3 style="margin: 0 0 15px 0; color: #1e40af;">📞 Need Help?</h3>
    //           <p style="margin: 0 0 10px 0;">Our support team is here to assist you!</p>
    //           <div style="font-weight: 600;">
    //             📱 Phone: +977 986-2282235<br>
    //             📧 Email: prasadinfotechinquiry@gmail.com<br>
    //             🌐 Website: prasadinfotech.netlify.app
    //           </div>
    //         </div>

    //         <div class="footer">
    //           <div class="logo">Prasad Info Tech</div>
    //           <div>Empowering Careers Through Technology</div>
    //           <div style="margin-top: 15px; font-size: 12px;">
    //             This is an automated confirmation email. Please do not reply to this email.
    //           </div>
    //         </div>
    //       </div>
    //     </body>
    //     </html>
    //   `,
    // };

    // await transporter.sendMail(studentMailOptions);
    const jres = jsonResponse(
      {
        success: true,
        message:
          "Enrollment verification sent successfully! We'll confirm your registration shortly.",
      },
      200
    );
    return jres;
  } catch (error) {
    console.error("Error sending enrollment emails:", error);
    return jsonResponse(
      {
        success: false,
        error:
          "Failed to send enrollment emails. Please try again or contact support.",
      },
      400
    );
  }
};

export { handler };
