import { FaBullhorn, FaSearch, FaFacebookF, FaLaptopCode, FaPalette, FaRegEdit } from 'react-icons/fa';

import PartnersSection from "./PartnerList";


const IntroSection: React.FC = () => {
    
const services = [
  {
    icon: <FaBullhorn className="text-blue-600 text-3xl" />,
    title: 'Social Media Marketing',
    description: 'Connect and grow your audience across Facebook, Instagram, TikTok, and more.',
  },
  {
    icon: <FaSearch className="text-blue-600 text-3xl" />,
    title: 'SEO & Local SEO',
    description: 'Rank higher on Google and get found by people who matter most — your local customers.',
  },
  {
    icon: <FaFacebookF className="text-blue-600 text-3xl" />,
    title: 'Facebook Ads & Paid Campaigns',
    description: 'Get more leads and sales through optimized advertising campaigns.',
  },
  {
    icon: <FaLaptopCode className="text-blue-600 text-3xl" />,
    title: 'Web Design & Development',
    description: 'Build fast, modern, and mobile-friendly websites that turn visitors into customers.',
  },
  {
    icon: <FaPalette className="text-blue-600 text-3xl" />,
    title: 'Branding & Design',
    description: 'Craft a consistent, memorable brand that builds trust and recognition.',
  },
  {
    icon: <FaRegEdit className="text-blue-600 text-3xl" />,
    title: 'Content & Blog Writing',
    description: 'Tell your story and nurture your audience with impactful content and strategic blog posts.',
  },
];

    return(<div>
        <section className="bg-white py-16 px-4 md:px-8 lg:px-20" id="what-we-do">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">🚀 What We Do</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          We’re not just another digital marketing agency — we’re your digital growth partner.
          From building your brand to growing your customer base, we combine strategy, creativity, and technology to deliver results that matter.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 border border-blue-100 rounded-2xl shadow hover:shadow-lg transition duration-300 bg-white text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
           <div className="p-6">
      {/* <AutoScrollSlider imageUrls={partnerList} speed={40} /> */}
      <PartnersSection/>
    </div>
        </div>)
}

export default IntroSection;