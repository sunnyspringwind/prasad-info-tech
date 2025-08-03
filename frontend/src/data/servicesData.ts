// import src imgs
import fb1 from "./../assets/img/fbmarketing1.webp";
import fb2 from "./../assets/img/fbmarketingtypes.webp";
import insta1 from "./../assets/img/instamkting.webp";
import insta2 from "./../assets/img/instamkting strats.png";
import seo1 from "./../assets/img/seo.webp";
import seo2 from "./../assets/img/seosteps.png";
import design1 from "./../assets/img/graphicdesign.webp";
import design2 from "./../assets/img/gdesign.webp";
import webdev1 from "./../assets/img/webdev.webp";
import webdev2 from "./../assets/img/webdev2.png";
import mbdev1 from "./../assets/img/mobileappdev.webp";
import mbdev2 from "./../assets/img/mobile app dev.webp";
import influence1 from "./../assets/img/influemarketing.png";
import influence2 from "./../assets/img/influencermkting.webp";
import ppc1 from "./../assets/img/ppc.webp";
import ppc2 from "./../assets/img/ppcsteps.webp";
import soft1 from "./../assets/img/softdev.webp";
import soft2 from "./../assets/img/softdevmethod.webp";
import brand1 from "./../assets/img/brand1.avif";
import brand2 from "./../assets/img/brand2.webp";




// data/servicesData.ts
export type ServiceItem = {
  catTitle: string
  label: string;
  href: string;
  img1: string;          // Hero imae
  img2?: string;         // Optional second image (could be a workflow, results, ortestimonia)
  desc1: string;         // Short description (for cards or previews)
  desc2: string;         // Longer overview (used on full service page)
  features?: string[];   // Bullet points or key deliverables
  priceRange?: string;   // E.g., "Starting from NPR 10,000" or "$500 - $1500"
  duration?: string;     // Estimated delivery time: "1-2 weeks", "Ongoing", etc.
  technologies?: string[]; // For dev services: e.g., ["React", "Flutter", "Laravel"]
  benefits?: string[];   // Client benefits: e.g., ["Increased engagement", "Faster load times"]
  faqs?: { q: string; a: string }[];  // Optional FAQs
  testimonials?: string[]; // Optional quotes from clients
  cta?: string;           // Call-to-action text, e.g., "Get a Free Quote"
};


export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export const servicesData: ServiceItem[] = [
  {
    catTitle: "Social Media",
    label: "Facebook Marketing",
    href: "/services/social/facebook",
    img1: fb1,
    img2: fb2,
    desc1: "Maximize brand visibility with data-driven Facebook ad campaigns.",
    desc2: "We help you build awareness, generate leads, and grow your business on Facebook through strategic ads, content, and retargeting techniques.",
    features: [
      "Ad campaign setup and targeting",
      "Conversion tracking & optimization", 
      "Page management & content scheduling"
    ],
    priceRange: "Starts from NPR 15,000/month",
    duration: "Ongoing",
    benefits: [
      "Increased reach & engagement",
      "Better ROI with retargeting",
      "Brand credibility and trust"
    ],
    cta: "Start Your Facebook Growth",
  },
  {
    catTitle: "Social Media",
    label: "Instagram Marketing",
    href: "/services/social/instagram", 
    img1: insta1,
    img2: insta2,
    desc1: "Grow your audience through targeted Instagram strategies.",
    desc2: "We focus on visual storytelling, reel optimization, hashtag strategy, and influencer outreach to boost your Instagram presence.",
    features: [
      "Hashtag & content strategy",
      "Influencer collaboration setup",
      "Instagram Ads & reel production"
    ],
    priceRange: "Starts from NPR 12,000/month",
    duration: "Ongoing",
    benefits: [
      "Higher brand visibility",
      "Increased followers & engagement", 
      "Visual content that resonates"
    ],
    cta: "Get an Insta Plan",
  },
  {
    catTitle: "Social Media",
    label: "PPC Marketing",
    href: "/services/social/ppc",
    img1: ppc1,
    img2: ppc2,
    desc1: "Drive instant traffic and leads with targeted PPC campaigns.",
    desc2: "Our PPC experts create and optimize pay-per-click campaigns across Google, Facebook, and LinkedIn to maximize your ROI.",
    features: [
      "Keyword research & ad copywriting",
      "Landing page optimization",
      "Bid management & ROI tracking"
    ],
    priceRange: "Starts from NPR 25,000/month",
    duration: "Ongoing",
    benefits: [
      "Immediate targeted traffic",
      "Measurable ROI & analytics",
      "Flexible budget control"
    ],
    cta: "Start PPC Campaign",
  },
  {
    catTitle: "Social Media", 
    label: "Influencer Marketing",
    href: "/services/social/influencer",
    img1: influence1,
    img2: influence2,
    desc1: "Boost trust and sales with curated influencer partnerships.",
    desc2: "We connect your brand with niche influencers to create authentic promotions that build trust and drive conversions.",
    features: [
      "Influencer discovery & negotiation",
      "Campaign strategy & execution",
      "Performance tracking & reporting"
    ],
    priceRange: "Starts from NPR 20,000/campaign",
    duration: "1-3 weeks per campaign",
    benefits: [
      "Trust-building through social proof",
      "Increased engagement & shares",
      "Access to targeted audiences"
    ],
    cta: "Find Your Influencer",
  },
  {
    catTitle: "SEO",
    label: "SEO Service",
    href: "/services/seo",
    img1: seo1,
    img2: seo2,
    desc1: "Rank higher on Google and drive more organic traffic.",
    desc2: "Our SEO service improves your website's visibility on search engines using technical audits, content optimization, backlink strategies, and local SEO techniques.",
    features: [
      "Keyword research & on-page SEO",
      "Technical audits & speed improvements",
      "Backlink building & content strategy"
    ],
    priceRange: "NPR 18,000 – 60,000/month",
    duration: "2-6 months for results",
    benefits: [
      "Increased website traffic",
      "Higher rankings & authority",
      "Long-term organic growth"
    ],
    cta: "Boost Your Google Rank",
  },
  {
    catTitle: "Software Development",
    label: "Website Development",
    href: "/services/dev/web",
    img1: webdev1, 
    img2: webdev2,
    desc1: "Modern websites that convert and perform.",
    desc2: "We build fast, secure, and SEO-friendly websites tailored to your business using modern tech like React, Next.js, and WordPress.",
    features: [
      "Custom design & responsive layout",
      "CMS integration or static builds",
      "Contact forms, blogs, booking & more"
    ],
    priceRange: "NPR 25,000 – 150,000",
    duration: "2–4 weeks",
    technologies: ["React", "Next.js", "Tailwind", "WordPress"],
    benefits: [
      "Faster page loads & higher conversions",
      "SEO-friendly structure",
      "Unique brand identity online"
    ],
    cta: "Build Your Website Today",
  },
  {
    catTitle: "Software Development",
    label: "Mobile App Development",
    href: "/services/dev/mobile",
    img1: mbdev1,
    img2: mbdev2,
    desc1: "Launch mobile apps that users love to use.",
    desc2: "We develop cross-platform mobile apps using Flutter or native stacks that offer a smooth UX and backend scalability.",
    features: [
      "Android & iOS compatible apps",
      "UI/UX design and prototyping",
      "Push notifications & analytics"
    ],
    priceRange: "NPR 60,000 – 250,000",
    duration: "4–8 weeks",
    technologies: ["Flutter", "Firebase", "React Native"],
    benefits: [
      "Reach customers on-the-go",
      "Engaging app design", 
      "Easy scalability & support"
    ],
    cta: "Start App Project",
  },
  {
    catTitle: "Software Development",
    label: "Software Solutions",
    href: "/services/dev/software",
    img1: soft1,
    img2: soft2,
    desc1: "Tailored software that fits your business process.",
    desc2: "We build enterprise-grade custom software such as ERP systems, inventory tools, CRM, and automation platforms to streamline your operations.",
    features: [
      "Business analysis & workflow mapping",
      "Cloud-ready architecture",
      "User role management & data security"
    ],
    priceRange: "Project-based pricing",
    duration: "4–12 weeks",
    technologies: [".NET", "Node.js", "PostgreSQL", "Docker"],
    benefits: [
      "Boost internal efficiency",
      "Automate repetitive tasks",
      "Secure and scalable"
    ],
    cta: "Request a Demo",
  },
  {
    catTitle: "Graphic Design",
    label: "Logo Design",
    href: "/services/design/logo",
    img1: design1,
    img2: design2, 
    desc1: "Memorable logos that define your brand identity.",
    desc2: "Our team crafts versatile, modern logos tailored to your brand values and audience—perfect for print, web, and digital campaigns.",
    features: [
      "3-5 unique logo concepts",
      "Full rights & file formats",
      "Revisions until satisfaction"
    ],
    priceRange: "NPR 5,000 – 20,000",
    duration: "3–7 days",
    benefits: [
      "Stronger brand recognition",
      "Professional and timeless look",
      "Consistency across platforms"
    ],
    cta: "Design My Logo",
  },
  {
    catTitle: "Graphic Design",
    label: "Branding Kit",
    href: "/services/design/branding",
    img1: brand1,
    img2: brand2,
    desc1: "A full suite of visuals that make your brand stand out.",
    desc2: "We provide brand style guides, typography, color palettes, business cards, social media templates, and more.",
    features: [
      "Brand guidelines PDF",
      "Social media and print-ready assets", 
      "Typography, color scheme, icon set"
    ],
    priceRange: "NPR 12,000 – 40,000",
    duration: "1–2 weeks",
    benefits: [
      "Consistent look across platforms",
      "Professional and polished presence",
      "Time-saving ready-to-use assets"
    ],
    cta: "Get a Brand Identity",
  },
];
