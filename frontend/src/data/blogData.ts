export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  content: string; // full blog content (HTML or Markdown)
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    slug: "facebook-boosting-nepal",
    title: "🚀 Grow Your Business Online with Facebook Ads & Boosting",
    excerpt:
      "Is your business struggling to grow online? Learn how Prasad Info Tech helps businesses in Nepal boost their visibility with expert Facebook Ads campaigns.",
    imageUrl: "https://digitalseba.com.bd/storagee/2024/07/facebook-ads-paid-campaign-page-ads-promote-page-boost.webp",
    category: "Digital Marketing",
    date: "August 23, 2025",
    author: "Prasad Info Tech",
    readTime: "6 min read",
    content: `
      <h2>Why Facebook Boosting Matters</h2>
      <p>Is your business not growing as expected? Are you struggling to attract new customers, increase sales, or build your brand presence online?</p>
      <p>At Prasad Info Tech, we specialize in Facebook Ads & Boosting to help your business gain visibility on the platforms where your customers spend the most time — Facebook & Instagram.</p>

      <h3>Why Facebook Boosting with Us?</h3>
      <ul>
        <li>80% of people in Nepal use Facebook/Instagram actively</li>
        <li>Your customers are already scrolling — we help your business appear to them</li>
        <li>Cost-effective, smart targeting, measurable results</li>
        <li>No fake likes or risky shortcuts</li>
        <li>Tailored strategies for your business goals</li>
      </ul>

      <h3>Who Can Benefit?</h3>
      <p>We support a wide range of businesses including:</p>
      <ul>
        <li>🏪 Shops & Local Stores (grocery, clothing, electronics, beauty, gifts, hardware)</li>
        <li>🌐 Online Stores & E-commerce (boutiques, resellers, delivery services)</li>
        <li>🎓 Education & Training (schools, consultancies, coaching centers)</li>
        <li>🍽 Restaurants & Cafes</li>
        <li>💼 Job & Manpower Services</li>
        <li>🏥 Clinics & Wellness Centers</li>
        <li>🏗 Real Estate & Construction</li>
        <li>🚗 Auto & Vehicle Services</li>
        <li>📷 Media & Drone Services</li>
        <li>🛍 Fashion, Jewelry & Personal Brands</li>
        <li>🏢 Hostels & Room Rentals</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <ul>
        <li>✅ 4+ Years of Experience</li>
        <li>✅ 500+ Businesses Successfully Promoted</li>
        <li>✅ Transparent Ads Monitoring & Reports</li>
        <li>✅ Affordable & Result-Driven Packages</li>
        <li>✅ 24/7 Support via Call, WhatsApp, Messenger</li>
      </ul>

      <h3>Special Offer</h3>
      <p>💸 Get <strong>20% OFF</strong> – Limited Time Only!</p>
      <p>📞 Call / WhatsApp Now: <strong>986-2282235</strong></p>
      <p>📍 Prasad Info Tech – Your Digital Growth Partner in Nepal</p>
    `
  },
  {
    id: 2,
    slug: "seo-tips-nepal",
    title: "Top 5 SEO Tips for Nepali Businesses in 2025",
    excerpt:
      "Want to rank higher on Google? Here are 5 actionable SEO strategies tailored for Nepali websites and businesses.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV5x2YHGept5bzZBHDtbfDWPDOLDPl6X06_Q&s",
    category: "SEO",
    date: "August 20, 2025",
    author: "Prasad Info Tech",
    readTime: "4 min read",
    content: `
      <h2>SEO in Nepal: Why It Matters</h2>
      <p>Most people in Nepal use Google to search for services, products, and businesses. If your business isn't ranking, you're losing potential customers.</p>

      <h3>5 Quick SEO Tips</h3>
      <ol>
        <li>Optimize your Google Business Profile</li>
        <li>Use Nepali keywords & localized content</li>
        <li>Speed up your website with proper hosting & caching</li>
        <li>Build backlinks from Nepali directories & media</li>
        <li>Post consistent blog updates (like this one!)</li>
      </ol>

      <p>SEO is a long-term investment, but with the right strategies, you can dominate search results in your niche.</p>
    `
  },
  {
    id: 3,
    slug: "graphic-design-trends",
    title: "🎨 Graphic Design Trends in Nepal for 2025",
    excerpt:
      "From bold typography to AI-assisted visuals — explore the design trends shaping Nepali brands this year.",
    imageUrl: "https://kritagyata.in/wp-content/uploads/2024/01/graphic-design-1500-x-900-picture-lpuf40e9jm621ews-1500x750.jpg",
    category: "Graphic Design",
    date: "August 18, 2025",
    author: "Prasad Info Tech",
    readTime: "5 min read",
    content: `
      <h2>Why Design Matters</h2>
      <p>First impressions count — and your brand visuals decide how customers perceive you.</p>
      <h3>Trends in 2025</h3>
      <ul>
        <li>Minimalist layouts with bold typography</li>
        <li>Vibrant gradients and 3D elements</li>
        <li>AI-generated design assets</li>
        <li>Interactive social media posts</li>
      </ul>
    `
  }
];

