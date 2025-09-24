import { useState, useEffect } from 'react';
import { Camera, Video, Award, CheckCircle, Upload, ArrowLeft, Phone, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';

interface EnrollmentData {
  course: string;
  price: number;
  originalPrice: number;
  duration: string;
  studentName: string;
  email: string;
  phone: string;
  experience: string;
  preferredMode: string;
}

const PaymentConfirmation = () => {
  const [enrollmentData, setEnrollmentData] = useState<EnrollmentData | null>(null);
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Toast state
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success' as 'success' | 'error'
  });
  
  const navigate = useNavigate();

  // Helper function to show toast
  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 5000);
  };

  useEffect(() => {
    const data = localStorage.getItem('enrollmentData');
    if (data) {
      setEnrollmentData(JSON.parse(data));
    } else {
      // Redirect back if no enrollment data
      window.location.href = '/courses';
    }
  }, []);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setPaymentProof(file);
        showToast('Payment proof uploaded successfully!', 'success');
      } else {
        showToast('Please upload an image file (JPG, PNG, etc.)', 'error');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setPaymentProof(file);
        showToast('Payment proof uploaded successfully!', 'success');
      } else {
        showToast('Please upload an image file (JPG, PNG, etc.)', 'error');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentProof || !enrollmentData) {
      showToast('Please upload payment proof before submitting', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare enrollment data for email
      const emailPayload = {
        studentName: enrollmentData.studentName,
        email: enrollmentData.email,
        phone: enrollmentData.phone,
        preferredMode: enrollmentData.preferredMode,
        course: enrollmentData.course,
        experience: enrollmentData.experience || 'Not specified',
        originalPrice: enrollmentData.originalPrice,
        price: enrollmentData.price,
        discount: Math.round(((enrollmentData.originalPrice - enrollmentData.price) / enrollmentData.originalPrice) * 100),
        duration: enrollmentData.duration,
        timestamp: new Date().toISOString(),
      };

      // Send email via Netlify function
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      const result = await response.json();

      if (result.success) {
        showToast('Enrollment submitted successfully! Check your email for confirmation.', 'success');
        
        // Wait a moment for the toast to be visible, then show success screen
        setTimeout(() => {
          setShowSuccess(true);
          localStorage.removeItem('enrollmentData');
        }, 2000);
      } else {
        throw new Error(result.error || 'Failed to submit enrollment');
      }
    } catch (error) {
      console.error('Enrollment submission error:', error);
      showToast('Failed to submit enrollment. Please try again or contact support.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!enrollmentData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading enrollment details...</p>
        </div>
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full text-center">
          <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Enrollment Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for enrolling in the {enrollmentData.course} course. We've received your payment proof and will verify it within 24 hours.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-blue-700">
              <strong>Next Steps:</strong><br />
              • You'll receive a confirmation email within 24 hours<br />
              • Course materials will be shared 1 day before start<br />
              • WhatsApp group link will be provided
            </p>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </button>
            <button
              onClick={() => window.location.href = '/courses'}
              className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse More Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-5 bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
                onClick={() => navigate(-1)} // go back
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Course</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Complete Your Enrollment</h1>
            <div className="flex items-center space-x-2 text-blue-600">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+977 986-2282235</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Payment Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-4">
                  <Upload className="w-12 h-12 text-blue-600 mx-auto" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Complete Payment</h2>
                <p className="text-gray-600">Scan QR code and upload payment proof</p>
              </div>

              {/* QR Code Section */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 mb-8 text-center">
                <h3 className="text-lg font-bold text-blue-800 mb-4">Pay via QR Code</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-4 inline-block">
                  <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-black/10 rounded-lg mb-2 mx-auto">                  <img src='./esewa.jpg' />
</div>
                      <p className="text-sm text-gray-600">QR Code</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-blue-800">Prasad Info Tech</p>
                  <p className="text-blue-700">eSewa: 9862282235</p>
                  <p className="text-blue-700">Khalti: 9862282235</p>
                  <p className="text-blue-700">Amount: ₹{enrollmentData.price.toLocaleString()}</p>
                </div>
              </div>

              {/* Upload Section */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Upload Payment Screenshot *
                  </label>
                  
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragActive 
                        ? 'border-blue-500 bg-blue-50' 
                        : paymentProof 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-300 hover:border-blue-400'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      required
                    />
                    
                    {paymentProof ? (
                      <div className="space-y-4">
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                        <div>
                          <p className="font-semibold text-green-700">{paymentProof.name}</p>
                          <p className="text-sm text-gray-500">
                            {(paymentProof.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setPaymentProof(null)}
                          className="inline-flex items-center text-red-600 hover:text-red-700"
                        >
                          <X className="w-4 h-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                        <div>
                          <p className="text-lg font-semibold text-gray-700">
                            Drop your screenshot here
                          </p>
                          <p className="text-sm text-gray-500">
                            or click to browse (PNG, JPG, JPEG)
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Make sure the payment amount matches exactly: ₹{enrollmentData.price.toLocaleString()}</li>
                    <li>• Include transaction ID in the screenshot</li>
                    <li>• Payment will be verified within 24 hours</li>
                    <li>• Course starts after payment confirmation</li>
                  </ul>
                </div>

                <button
                  type="submit"
                  disabled={!paymentProof || isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none disabled:shadow-md"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    'Complete Enrollment'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Course Details Sidebar */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-full w-20 h-20 mx-auto mb-4">
                  {enrollmentData.course.includes('AI') ? (
                    <Video className="w-12 h-12 text-blue-600 mx-auto" />
                  ) : (
                    <Camera className="w-12 h-12 text-blue-600 mx-auto" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Enrollment Summary</h3>
                <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-6">
                {/* Student Details */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-4">Student Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-semibold text-gray-800">{enrollmentData.studentName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-semibold text-gray-800">{enrollmentData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-semibold text-gray-800">{enrollmentData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-semibold text-gray-800 capitalize">{enrollmentData.preferredMode}</span>
                    </div>
                  </div>
                </div>

                {/* Course Details */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4">Course Details</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-gray-800">{enrollmentData.course} Course</h5>
                      <p className="text-sm text-gray-600">{enrollmentData.duration} intensive program</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <div className="font-semibold text-gray-800">{enrollmentData.duration}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Level:</span>
                        <div className="font-semibold text-gray-800 capitalize">{enrollmentData.experience}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 mb-4">Payment Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Original Price:</span>
                      <span className="text-gray-500 line-through">₹{enrollmentData.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount:</span>
                      <span className="text-green-600 font-semibold">
                        -₹{(enrollmentData.originalPrice - enrollmentData.price).toLocaleString()}
                      </span>
                    </div>
                    <div className="border-t border-green-300 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-800">Total Amount:</span>
                        <span className="text-2xl font-bold text-green-600">₹{enrollmentData.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What's Included */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    What's Included
                  </h4>
                  <div className="space-y-2">
                    {[
                      'Complete course materials',
                      'Live interactive sessions',
                      'Practical assignments',
                      'Certificate of completion',
                      '30-day post-course support',
                      'Community access'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support */}
                <div className="bg-blue-600 p-6 rounded-lg text-white text-center">
                  <h4 className="font-bold mb-2">Need Help?</h4>
                  <p className="text-sm text-blue-100 mb-4">Contact us for any assistance</p>
                  <a
                    href="tel:+977 986-2282235"
                    className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ show: false, message: '', type: 'success' })}
      />
    </div>
  );
};

export default PaymentConfirmation;