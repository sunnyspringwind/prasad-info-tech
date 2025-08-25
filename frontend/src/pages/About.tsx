import { FaBullseye, FaHandshake, FaLightbulb, FaRocket } from "react-icons/fa";
import ceoImage from "../assets/img/ceo.webp";

const AboutPage = () => {
  return (
    <>
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/4 text-center lg:text-left">
              <h1 className="text-4xl text-center font-bold mb-4">
                About Prasad Info Tech
              </h1>
              <section className="max-w-4xl mx-auto px-4 py-12">
                <p className="text-lg mb-10 text-gray-700 text-center leading-relaxed">
                  We're a forward-thinking digital marketing and software
                  development agency committed to driving real growth for
                  businesses in Nepal and beyond.
                </p>

                <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">
                    About Our CEO
                  </h2>
  <div className="lg:w-1/2 block lg:hidden">
              <img
                src={ceoImage}
                alt="CEO of Prasad Info Tech"
                className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg border-4 border-blue-100"
              />
              <div className="text-center mt-4">
                <h3 className="font-semibold text-xl">Pawan Dhakal</h3>
                <p className="text-gray-600">Founder & Software Developer</p>
              </div>
            </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    At the helm of Prasad Info Tech is{" "}
                    <span className="font-semibold">Mr.Pawan Dhakal</span>, a
                    forward-thinking entrepreneur with a clear vision for
                    helping businesses thrive in the digital era. With a strong
                    focus on performance-driven digital marketing, he has guided
                    Prasad Info Tech to become a trusted partner for brands
                    seeking impactful online growth.
                  </p>

                  <div className="my-8 border-l-4 border-blue-900 pl-6 italic text-gray-600 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="absolute -top-3 -left-3 w-8 h-8 text-blue-900 opacity-20"
                    >
                      <path d="M9 11H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4v6a6 6 0 0 1-6 6H4v-2h1a4 4 0 0 0 4-4v-1zm10 0h-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4v6a6 6 0 0 1-6 6h-1v-2h1a4 4 0 0 0 4-4v-1z" />
                    </svg>
                    <p>
                      “Social media isn’t just about reach—it’s about creating
                      meaningful connections that drive real business results.”
                    </p>
                    <span className="block mt-2 font-semibold text-blue-900">
                      — Pawan Dhakal, Founder of Prasad Info Tech
                    </span>
                  </div>
                </div>
              </section>
            </div>
            {/* Ceo image */}
            <div className="lg:w-1/2 hidden lg:block">
              <img
                src={ceoImage}
                alt="CEO of Prasad Info Tech"
                className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg border-4 border-blue-100"
              />
              <div className="text-center mt-4">
                <h3 className="font-semibold text-xl">Pawan Dhakal</h3>
                <p className="text-gray-600">Founder & Software Developer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 px-4 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prasad Info Tech blends creativity with code, marketing with
              meaning. Whether it’s crafting conversion-driven websites or
              building data-powered campaigns, we believe in delivering
              measurable value and tangible results to our clients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team is a carefully curated group of strategists, designers,
              developers, and marketers, united by a shared vision: to help
              businesses grow in the digital landscape. Every project is
              approached with precision, creativity, and a deep understanding of
              audience behavior, ensuring that campaigns are not just seen, but
              remembered.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Prasad Info Tech, collaboration drives innovation. By combining
              diverse skills and perspectives, we transform ideas into impactful
              solutions that drive engagement, increase conversions, and elevate
              brands to new heights.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://www.anshikamedia.com/wp-content/uploads/2023/12/our-team.png"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section className="bg-blue-100 py-16 px-4 lg:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">Our Vision & Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <FaBullseye className="text-4xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Vision</h3>
              <p className="text-sm text-gray-600">
                To become Nepal’s most trusted partner in digital innovation and
                marketing transformation.
              </p>
            </div>
            <div>
              <FaHandshake className="text-4xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Integrity</h3>
              <p className="text-sm text-gray-600">
                We believe in transparency, honesty, and delivering what we
                promise.
              </p>
            </div>
            <div>
              <FaLightbulb className="text-4xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Innovation</h3>
              <p className="text-sm text-gray-600">
                We use cutting-edge tech to stay ahead of the curve and help
                clients do the same.
              </p>
            </div>
            <div>
              <FaRocket className="text-4xl text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Impact</h3>
              <p className="text-sm text-gray-600">
                Everything we do is designed to drive measurable results and
                business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Snapshot */}
        <section className="py-16 px-4 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold">What We Do</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              From SEO and Instagram marketing to ERP development and
              automation, we offer scalable solutions tailored for growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-white shadow-md p-6 rounded-xl border hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">Digital Marketing</h3>
              <p className="text-sm text-gray-600">
                SEO, social media, PPC, and influencer strategies that convert.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl border hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">Software Development</h3>
              <p className="text-sm text-gray-600">
                Custom platforms, ERPs, CRMs, and process automation tools.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl border hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">Design & Branding</h3>
              <p className="text-sm text-gray-600">
                Elegant visuals and brand identities that tell your story right.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-900 text-white py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Build Something Great
          </h2>
          <p className="mb-6 max-w-xl mx-auto">
            Join dozens of businesses who trust Prasad Info Tech to elevate
            their digital presence. Tell us about your project.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
