import React, { useState } from "react";

const faqs = [
  {
    question: "What is Digital Marketing?",
    answer:
      "Digital marketing is the strategic process of promoting your brand, products, or services using digital channels such as search engines, social media, email, and websites to engage targeted audiences, generate leads, and drive measurable business growth.",
  },

  {
    question: "What is Facebook Boosting?",
    answer: "Facebook Boosting is a paid advertising feature that allows you to promote your Facebook posts to reach a wider audience beyond your organic followers. When you boost a post, you can target specific demographics, interests, and locations, making it an effective way to increase post engagement, brand visibility, and website traffic.",
    },
  {
    question: "What are the key Digital Marketing channels?",
    answer:
      "Important digital marketing channels include SEO (Search Engine Optimization), SEM (Search Engine Marketing), Social Media Marketing (Facebook, Instagram, TikTok), Email Marketing, Content Marketing, Influencer Marketing, Paid Advertising (Google Ads, Facebook Ads), and Affiliate Marketing.",
  },
  {
    question: "Why is Digital Marketing important for my business?",
    answer:
      "With over 70% of consumers spending significant time online, digital marketing offers cost-effective ways to reach highly targeted customers, boost brand awareness, and increase sales. Having a strong digital presence can set your business apart in today's competitive market.",
  },
  {
    question: "How much does Digital Marketing cost?",
    answer:
      "Costs vary based on your goals, target audience, channels selected, campaign complexity, and geographic reach. At Prasad Info Tech, we tailor solutions to maximize your ROI within your budget.",
  },
  {
    question: "Which Digital Marketing services does Prasad Info Tech offer?",
    answer:
      "We specialize in SEO, Social Media Marketing, Paid Ads, Content Creation, Web Design & Development, Email Marketing, Branding, and Online Reputation Management — all customized for Nepal’s unique market.",
  },
  {
    question: "How can I get started with Prasad Info Tech?",
    answer:
      "Simply contact us via phone, email, or our website form. We’ll discuss your business needs, analyze your current digital footprint, and create a personalized strategy to help you grow.",
  },
];

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-500 last:border-none">
      <button
        type="button"
        className="w-full flex justify-between items-center py-4 text-left text-black font-semibold hover:text-blue-600 transition-colors"
        onClick={onClick}
      >
        <span>{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 text-blue-600 text-sm leading-relaxed transition-opacity duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-white py-12 pb-8 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          <span className="text-blue-600">FAQs</span>
        </h2>

        <div className="bg-white rounded-lg shadow-lg divide-y divide-blue-700">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
