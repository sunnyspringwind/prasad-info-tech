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
// import mbdev1 from "./../assets/img/mobileappdev.webp";
// import mbdev2 from "./../assets/img/mobile app dev.webp";
import influence1 from "./../assets/img/influemarketing.png";
import influence2 from "./../assets/img/influencermkting.webp";
// import ppc1 from "./../assets/img/ppc.webp";
// import ppc2 from "./../assets/img/ppcsteps.webp";
import soft1 from "./../assets/img/softdev.webp";
import soft2 from "./../assets/img/softdevmethod.webp";
import brand1 from "./../assets/img/brand1.avif";
import brand2 from "./../assets/img/brand2.webp";




export type ServiceItem = {
  catTitle: string;
  label: string;
  slug?: string;            // Optional cleaner URL string
  href: string;
  img1: string;
  img2?: string;
  desc1: string;
  desc2: string;
  features: string[];
  priceRange?: string;
  duration?: string;
  technologies?: string[];
  benefits: string[];
  workProcess?:{step: number; title: string; desc: string; duration:string; deliverables: string[]}[];
  faqs?: { q: string; a: string }[];
  testimonials?: { quote: string; author?: string; role?: string }[];
  cta?: string;
  metaTitle?: string;       // For <title>
  metaDesc?: string;        // For <meta name="description">
  isFeatured?: boolean;     // Optional tag for homepage
  badge?: string;           // e.g., "Popular", "New"
  icon?: string;            // Optional icon ID or path
  urgencyMessage?: string;
};


export const servicesData: ServiceItem[] = [
  
// {
//   catTitle: "Social Media",
//   label: "PPC Marketing",
//   slug: "ppc-marketing",
//   href: "/services/ads/ppc",
//   img1: ppc1,
//   img2: ppc2,
//   desc1: "Maximize your ROI with high-converting pay-per-click campaigns.",
//   desc2: "Our PPC experts craft Google Ads and display campaigns that drive clicks, conversions, and measurable growth — with full budget control.",
//   features: [
//     "Keyword research & bidding strategy",
//     "Google & Bing Ads setup",
//     "Landing page optimization",
//     "A/B testing & performance tracking"
//   ],
//   priceRange: "Starts from NPR 15,000/month + ad spend",
//   duration: "2-4 weeks to full campaign launch",
//   technologies: ["Google Ads", "Google Analytics", "SEMrush", "Microsoft Ads", "Hotjar"],
//   benefits: [
//     "Immediate traffic boost",
//     "High intent lead generation",
//     "Full control over budget & targeting",
//     "Detailed ad performance insights"
//   ],
//   workProcess: [
//     {
//       step: 1,
//       title: "Research & Planning",
//       desc: "We identify your goals, target audience, and keywords to plan a cost-effective campaign.",
//       duration: "2-3 days",
//       deliverables: ["Ad goals & funnel", "Keyword map", "Ad copy suggestions"]
//     },
//     {
//       step: 2,
//       title: "Campaign Setup",
//       desc: "We configure the ad accounts, targeting, bidding, and conversion tracking across platforms.",
//       duration: "3-5 days",
//       deliverables: ["Live campaigns", "Conversion pixels", "Landing page recommendations"]
//     },
//     {
//       step: 3,
//       title: "Monitoring & Optimization",
//       desc: "Track, analyze, and refine campaigns based on CTR, CPC, and conversion rates.",
//       duration: "Weekly",
//       deliverables: ["Performance reports", "Optimized bids & audiences", "A/B test results"]
//     }
//   ],
//   faqs: [
//     {
//       q: "Do I need a large budget to run PPC campaigns?",
//       a: "No. We work with any budget and optimize for the best return on your investment, starting from just NPR 5,000 in ad spend."
//     },
//     {
//       q: "Can you help improve my existing Google Ads campaigns?",
//       a: "Yes, we offer audits and revamp underperforming PPC campaigns to increase efficiency and ROI."
//     }
//   ],
//   testimonials: [
//     {
//       quote: "Our sales jumped by 60% within the first month of PPC management!",
//       author: "Sujan Bista",
//       role: "Co-founder, GadgetHut"
//     },
//     {
//       quote: "Finally a team that understands both performance and budget control. Highly recommended.",
//       author: "Ritika Sharma",
//       role: "Digital Strategist"
//     }
//   ],
//   cta: "Launch My PPC Campaign",
//   metaTitle: "PPC Marketing in Nepal – Google Ads Services for ROI Boost",
//   metaDesc: "Drive instant traffic and sales with expert-managed PPC marketing campaigns. Starting at NPR 15,000/month + ad spend.",
//   isFeatured: true,
//   badge: "High ROI",
//   icon: "💰",
//   urgencyMessage: "Limited slots for ad account management this month!"
// }
// ,
{
  catTitle: "Social Media",
  label: "Facebook Boosting",
  slug: "facebook-marketing",
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
  // priceRange: "Starts from NPR 15,000/month",
  duration: "1-3 weeks per campaign",
  technologies: ["Facebook Ads", "Meta Business Suite", "Pixel", "Canva"],
  benefits: [
    "Increased reach & engagement",
    "Better ROI with retargeting",
    "Brand credibility and trust"
  ],
  workProcess: [
    {
      step: 1,
      title: "Business Analysis",
      desc: "Understand your business goals, target audience, and budget for tailored Facebook campaigns.",
      duration: "1-2 days",
      deliverables: ["Client brief", "Audience definition", "Campaign objectives"]
    },
    {
      step: 2,
      title: "Strategy & Setup",
      desc: "Plan and set up ad campaigns with custom audiences, creatives, and budgets.",
      duration: "2-3 days",
      deliverables: ["Ad creatives", "Audience targeting setup", "Campaign structure"]
    },
    {
      step: 3,
      title: "Launch & Monitor",
      desc: "Deploy campaigns and actively monitor KPIs for performance tuning.",
      duration: "Ongoing",
      deliverables: ["Live ads", "Performance dashboard", "Budget pacing"]
    },
    {
      step: 4,
      title: "Optimization & Reporting",
      desc: "Weekly optimizations with A/B testing and monthly performance reports.",
      duration: "Weekly & Monthly",
      deliverables: ["A/B test results", "Monthly report", "ROI analysis"]
    }
  ],
  faqs: [
    { q: "Do you manage everything?", a: "Yes, we handle everything from ad design to campaign optimization and reporting." },
    { q: "Can I set a budget cap?", a: "Absolutely, we can work within any monthly budget you define." }
  ],
  testimonials: [
    { quote: "We saw a 3x increase in leads after just 2 months!", author: "Nirajan Karki", role: "Real Estate Agent" }
  ],
  cta: "Start Your Facebook Growth",
  metaTitle: "Facebook Marketing in Nepal – Grow Visibility & ROI",
  metaDesc: "Professional Facebook ad campaigns for Nepal businesses. Build trust, drive traffic, and increase sales. Starting NPR 15,000/month.",
  isFeatured: true,
  badge: "Meta Partner",
  icon: "📘",
},

{
  catTitle: "Social Media",
  label: "Instagram Boosting",
  slug: "instagram-marketing",
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
  // priceRange: "Starts from NPR 12,000/month",
  duration: "1-3 weeks per campaign",
  technologies: ["Instagram Insights", "Meta Ads Manager", "Canva", "Reels Editor"],
  benefits: [
    "Higher brand visibility",
    "Increased followers & engagement",
    "Visual content that resonates"
  ],
  workProcess: [
    {
      step: 1,
      title: "Brand & Audience Research",
      desc: "We analyze your niche and audience behavior to form a winning strategy.",
      duration: "1-2 days",
      deliverables: ["Content calendar", "Visual direction", "Audience persona"]
    },
    {
      step: 2,
      title: "Strategy Execution",
      desc: "Launch hashtag campaigns, influencer partnerships, and story/reel schedules.",
      duration: "Ongoing",
      deliverables: ["Story & reel templates", "Influencer shortlist", "Ad sets"]
    },
    {
      step: 3,
      title: "Optimization & Analytics",
      desc: "Track performance, tweak hashtags, and refine visuals for maximum reach.",
      duration: "Weekly",
      deliverables: ["Engagement report", "Follower growth chart", "Strategy improvements"]
    }
  ],
  faqs: [
    { q: "Do you handle influencer coordination?", a: "Yes, we find, negotiate with, and brief relevant influencers for your campaigns." },
    { q: "What if my content isn't ready?", a: "No worries — we help with visuals, reels, and templates tailored to your brand." }
  ],
  testimonials: [
    { quote: "My Instagram exploded! Engagement doubled in 3 weeks!", author: "Pratiksha Joshi", role: "Fashion Blogger" }
  ],
  cta: "Get an Insta Plan",
  metaTitle: "Instagram Marketing in Nepal – Boost Followers & Engagement",
  metaDesc: "Grow your Instagram with targeted marketing, reels, and influencer partnerships. Starting NPR 12,000/month.",
  isFeatured: true,
  badge: "Trending",
  icon: "📸",
},

  {
    catTitle: "Social Media", 
    label: "Influencer Marketing",
    slug: "influencer-marketing",
    href: "/services/social/influencer",
    img1: influence1,
    img2: influence2,
    desc1: "Boost trust and sales with curated influencer partnerships.",
    desc2: "We connect your brand with niche influencers to create authentic promotions that build trust and drive conversions through strategic partnerships.",
    features: [
      "Influencer discovery & negotiation",
      "Campaign strategy & execution", 
      "Performance tracking & reporting",
      "Content creation guidance",
      "ROI optimization"
    ],
    // priceRange: "Starts from NPR 20,000/campaign",
    duration: "1-3 weeks per campaign",
    technologies: ["Instagram", "TikTok", "YouTube", "Facebook"],
    benefits: [
      "Trust-building through social proof",
      "Increased engagement & shares", 
      "Access to targeted audiences",
      "Authentic brand storytelling",
      "Higher conversion rates"
    ],
    workProcess: [
      {
        step: 1,
        title: "Discovery & Strategy",
        desc: "We analyze your brand, target audience, and goals to create a tailored influencer strategy.",
        duration: "1-2 days",
        deliverables: ["Brand analysis report", "Target audience insights", "Campaign strategy"]
      },
      {
        step: 2,
        title: "Influencer Research",
        desc: "Our team identifies and vets potential influencers that align with your brand values and audience.",
        duration: "2-3 days",
        deliverables: ["Influencer shortlist", "Audience analytics", "Engagement metrics"]
      },
      {
        step: 3,
        title: "Outreach & Negotiation",
        desc: "We handle all communications, negotiations, and contract agreements with selected influencers.",
        duration: "3-5 days",
        deliverables: ["Signed agreements", "Content guidelines", "Timeline schedule"]
      },
      {
        step: 4,
        title: "Campaign Execution",
        desc: "Monitor content creation, ensure brand alignment, and manage campaign launch across platforms.",
        duration: "1-2 weeks",
        deliverables: ["Content approval", "Campaign monitoring", "Real-time adjustments"]
      },
      {
        step: 5,
        title: "Analytics & Reporting",
        desc: "Comprehensive performance analysis with insights and recommendations for future campaigns.",
        duration: "2-3 days",
        deliverables: ["Performance report", "ROI analysis", "Optimization recommendations"]
      }
    ],
    faqs: [
      { q: "How do you find the right influencers?", a: "We use advanced analytics to match influencers with your target audience demographics, engagement rates, and brand values." },
      { q: "What's the typical ROI?", a: "Our clients typically see 3-5x ROI within the first campaign, with some achieving up to 10x returns." }
    ],
    testimonials: [
      { quote: "Our sales increased by 240% after their influencer campaign!", author: "Sarah Chen", role: "E-commerce Owner" }
    ],
    cta: "Find Your Influencer",
    metaTitle: "Influencer Marketing Services - Boost Your Brand Trust",
    metaDesc: "Connect with authentic influencers to drive sales and build trust. Professional influencer marketing campaigns starting from NPR 20,000.",
    isFeatured: true,
    badge: "Popular",
    icon: "👑",
    urgencyMessage: "free service"
  },


  
   {
    catTitle: "SEO",
    label: "SEO Optimization", 
    slug: "seo-optimization",
    href: "/services/seo",
    img1: seo1,
    img2: seo2,
    desc1: "Rank higher on Google and drive more organic traffic.",
    desc2: "Our proven SEO strategies improve your website's visibility using technical audits, content optimization, and authority building to dominate search results.",
    features: [
      "Comprehensive keyword research",
      "On-page & technical SEO optimization",
      "High-quality backlink building",
      "Content strategy & creation",
      "Local SEO optimization",
      "Competitor analysis"
    ],
    // priceRange: "NPR 18,000 – 60,000/month",
    duration: "2-6 months for results",
    technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Search Console"],
    benefits: [
      "Increased organic website traffic",
      "Higher search engine rankings",
      "Long-term sustainable growth",
      "Better user experience",
      "Reduced advertising costs"
    ],
    workProcess: [
      {
        step: 1,
        title: "SEO Audit & Analysis",
        desc: "Comprehensive website analysis to identify technical issues, content gaps, and optimization opportunities.",
        duration: "3-5 days",
        deliverables: ["Technical SEO audit", "Competitor analysis", "Keyword research report"]
      },
      {
        step: 2,
        title: "Strategy Development",
        desc: "Create a customized SEO roadmap based on audit findings and business objectives.",
        duration: "2-3 days",
        deliverables: ["SEO strategy document", "Content calendar", "Technical optimization plan"]
      },
      {
        step: 3,
        title: "On-Page Optimization",
        desc: "Optimize website structure, content, meta tags, and technical elements for search engines.",
        duration: "1-2 weeks",
        deliverables: ["Optimized pages", "Meta tag updates", "Site structure improvements"]
      },
      {
        step: 4,
        title: "Content & Link Building",
        desc: "Create high-quality content and build authoritative backlinks to boost domain authority.",
        duration: "Ongoing",
        deliverables: ["SEO content", "Quality backlinks", "Guest post placements"]
      },
      {
        step: 5,
        title: "Monitoring & Reporting",
        desc: "Track rankings, traffic, and conversions with detailed monthly reports and strategy adjustments.",
        duration: "Monthly",
        deliverables: ["Ranking reports", "Traffic analysis", "ROI metrics"]
      }
    ],
    faqs: [
      { q: "How long before I see results?", a: "Most clients see initial improvements in 2-3 months, with significant gains by month 6." },
      { q: "Do you guarantee first page rankings?", a: "While we can't guarantee specific positions, 95% of our clients achieve first page rankings for their target keywords." }
    ],
    testimonials: [
      { quote: "Organic traffic increased 400% in 6 months!", author: "Raj Kumar", role: "Restaurant Owner" }
    ],
    cta: "Boost Your Google Rank",
    metaTitle: "Professional SEO Services - Rank Higher on Google",
    metaDesc: "Expert SEO optimization to increase organic traffic and rankings. Proven results for Nepal businesses. Starting NPR 18,000/month.",
    isFeatured: true,
    badge: "Results Guaranteed",
    icon: "🚀",
  },
    {
    catTitle: "Software Development",
    label: "Website Development",
    slug: "website-development", 
    href: "/services/dev/web",
    img1: webdev1,
    img2: webdev2,
    desc1: "Modern websites that convert visitors into customers.",
    desc2: "We build lightning-fast, secure, and conversion-optimized websites using cutting-edge technology that drives business growth and user engagement.",
    features: [
      "Custom responsive design",
      "Advanced CMS integration",
      "E-commerce functionality", 
      "SEO-optimized structure",
      "Security & performance optimization",
      "Analytics & tracking setup"
    ],
    // priceRange: "NPR 25,000 – 150,000",
    duration: "2–4 weeks",
    technologies: ["React", "Express.js", "Tailwind CSS", "WordPress", "Node.js"],
    benefits: [
      "Faster page loads & higher conversions",
      "Mobile-first responsive design",
      "SEO-friendly architecture", 
      "Unique brand identity online",
      "Ongoing support & maintenance"
    ],
    workProcess: [
      {
        step: 1,
        title: "Discovery & Planning",
        desc: "Deep dive into your business goals, target audience, and technical requirements to create a detailed project roadmap.",
        duration: "2-3 days",
        deliverables: ["Project scope document", "Wireframes", "Technical specifications"]
      },
      {
        step: 2,
        title: "Design & Prototyping",
        desc: "Create stunning visual designs and interactive prototypes that reflect your brand and optimize user experience.",
        duration: "5-7 days",
        deliverables: ["UI/UX designs", "Interactive prototype", "Style guide"]
      },
      {
        step: 3,
        title: "Development & Integration",
        desc: "Build your website using modern technologies, integrate necessary features, and ensure cross-browser compatibility.",
        duration: "1-2 weeks",
        deliverables: ["Functional website", "CMS setup", "Third-party integrations"]
      },
      {
        step: 4,
        title: "Testing & Optimization",
        desc: "Rigorous testing for performance, security, and usability across all devices and browsers.",
        duration: "2-3 days",
        deliverables: ["QA testing report", "Performance optimization", "Security audit"]
      },
      {
        step: 5,
        title: "Launch & Support",
        desc: "Deploy your website and provide comprehensive training and ongoing support for seamless operations.",
        duration: "1-2 days + ongoing",
        deliverables: ["Live website", "Training materials", "Maintenance plan"]
      }
    ],
    faqs: [
      { q: "Do you provide ongoing support?", a: "Yes, we offer 6 months free support and affordable maintenance packages thereafter." },
      { q: "Can you redesign my existing website?", a: "Absolutely! We specialize in modernizing outdated websites while preserving your SEO rankings." }
    ],
    testimonials: [
      { quote: "Our new website increased conversions by 180%!", author: "Maya Shrestha", role: "Online Store Owner" }
    ],
    cta: "Build Your Website Today",
    metaTitle: "Professional Website Development - Modern, Fast & Secure",
    metaDesc: "Custom website development with React, Next.js & WordPress. Fast, secure, and conversion-focused. Starting NPR 25,000.",
    isFeatured: false,
    badge: "New",
    icon: "💻",
  },
  {
  catTitle: "Software Development",
  label: "Software Solutions",
  slug: "software-solutions",
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
  technologies: [".NET", "Node.js", "PostgreSQL", "Docker", "AWS"],
  benefits: [
    "Boost internal efficiency",
    "Automate repetitive tasks",
    "Secure and scalable"
  ],
  workProcess: [
    {
      step: 1,
      title: "Requirement Analysis",
      desc: "We assess your business challenges, current workflows, and technical needs.",
      duration: "1 week",
      deliverables: ["Requirements document", "Workflow diagrams", "Feature list"]
    },
    {
      step: 2,
      title: "System Design & Architecture",
      desc: "We design a scalable, modular architecture and finalize UI/UX wireframes.",
      duration: "1 week",
      deliverables: ["System blueprint", "Tech stack proposal", "UI mockups"]
    },
    {
      step: 3,
      title: "Development & Integration",
      desc: "Agile development cycles with regular updates and API integrations.",
      duration: "2–6 weeks",
      deliverables: ["Functional modules", "Admin panel", "Database schema"]
    },
    {
      step: 4,
      title: "Testing & Deployment",
      desc: "Rigorous QA, UAT, and cloud deployment with monitoring setup.",
      duration: "1–2 weeks",
      deliverables: ["Test reports", "Deployed system", "Support documents"]
    }
  ],
  faqs: [
    { q: "What types of software do you build?", a: "From ERP systems to CRM and workflow automation tools tailored to your business." },
    { q: "Is the software scalable?", a: "Yes, we build with modular and cloud-first architecture to support future growth." }
  ],
  testimonials: [
    { quote: "They built a full ERP system for our factory that cut manual tasks by 60%.", author: "Sujan Thapa", role: "Manufacturing Director" }
  ],
  cta: "Request a Demo",
  metaTitle: "Custom Software Solutions in Nepal - ERP, CRM, Automation",
  metaDesc: "Enterprise-grade software tailored to your business needs. ERP, CRM, inventory tools & automation platforms. Secure, scalable & cloud-ready.",
  isFeatured: true,
  badge: "Enterprise Ready",
  icon: "🛠️",
}
,
 {
  catTitle: "Graphic Design",
  label: "Logo Design",
  slug: "logo-design",
  href: "/services/design/logo",
  img1: design1,
  img2: design2,
  desc1: "Memorable logos that define your brand identity.",
  desc2: "Our team crafts versatile, modern logos tailored to your brand values and audience—perfect for print, web, and digital campaigns.",
  features: [
    "3–5 unique logo concepts",
    "Full rights & file formats",
    "Revisions until satisfaction"
  ],
  priceRange: "NPR 1,000",
  duration: "1–3 days",
  technologies: ["Illustrator", "Figma", "Photoshop"],
  benefits: [
    "Stronger brand recognition",
    "Professional and timeless look",
    "Consistency across platforms"
  ],
  workProcess: [
    {
      step: 1,
      title: "Creative Brief",
      desc: "We understand your business values, target audience, and visual preferences.",
      duration: "1 day",
      deliverables: ["Design questionnaire", "Mood board"]
    },
    {
      step: 2,
      title: "Concept Development",
      desc: "We create 3–5 unique logo concepts based on the brief.",
      duration: "2–3 days",
      deliverables: ["Logo concepts", "Color explorations", "Typography samples"]
    },
    {
      step: 3,
      title: "Revisions & Finalization",
      desc: "We revise the selected concept until you're satisfied and deliver the final files.",
      duration: "1–2 days",
      deliverables: ["Final logo pack", "Style guide", "Usage rights"]
    }
  ],
  faqs: [
    { q: "How many concepts will I receive?", a: "You'll get 3–5 initial logo concepts to choose from." },
    { q: "Do I own the logo?", a: "Yes, full ownership and source files are included." }
  ],
  testimonials: [
    { quote: "They nailed my brand's vibe perfectly! Loved all the concepts.", author: "Anuja Rai", role: "Boutique Owner" }
  ],
  cta: "Design My Logo",
  metaTitle: "Logo Design in Nepal – Custom, Modern, Timeless",
  metaDesc: "Custom logo designs that elevate your brand. Modern, timeless, and versatile with full rights. Starting NPR 5,000.",
  isFeatured: true,
  badge: "Top Seller",
  icon: "🎨",
},
 {
  catTitle: "Graphic Design",
  label: "Branding Kit",
  slug: "branding-kit",
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
  // priceRange: "NPR 12,000 – 40,000",
  duration: "1–2 weeks",
  technologies: ["Figma", "Adobe InDesign", "Canva"],
  benefits: [
    "Consistent look across platforms",
    "Professional and polished presence",
    "Time-saving ready-to-use assets"
  ],
  workProcess: [
    {
      step: 1,
      title: "Brand Discovery",
      desc: "We explore your business values, audience, and competitors.",
      duration: "2 days",
      deliverables: ["Brand audit", "Visual direction"]
    },
    {
      step: 2,
      title: "Kit Design",
      desc: "We design core branding materials—logo, fonts, colors, icons, and templates.",
      duration: "5–7 days",
      deliverables: ["Logo assets", "Color palette", "Social templates", "Business card design"]
    },
    {
      step: 3,
      title: "Guideline Delivery",
      desc: "Deliver a full brand book and asset pack ready for use.",
      duration: "1–2 days",
      deliverables: ["Brand guidelines PDF", "Source files", "Exported formats"]
    }
  ],
  faqs: [
    { q: "What's included in the branding kit?", a: "Everything from logos to fonts, colors, templates, icons, and a brand guideline." },
    { q: "Can I customize the assets later?", a: "Yes, you receive editable formats for future updates." }
  ],
  testimonials: [
    { quote: "Now my brand looks cohesive everywhere — print, web, socials!", author: "Bishal Kunwar", role: "Startup Founder" }
  ],
  cta: "Get a Brand Identity",
  metaTitle: "Branding Kit Services – Style Guide, Logo & More",
  metaDesc: "Complete brand identity kits with logos, colors, templates, and guidelines. Perfect for startups and rebrands. Starting NPR 12,000.",
  isFeatured: false,
  badge: "Identity Package",
  icon: "🧩",
}
,
];




