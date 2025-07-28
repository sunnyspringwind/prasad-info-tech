import React, { useState, type FormEvent } from "react";

const TalkToUsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    services: [] as string[],
    fullname: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const servicesList = [
    "Advertersing",
    "Website Development",
    "Content Marketing",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Email Marketing",
  ];

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      setErrorMsg("Please select at least one service.");
      return;
    }
    setErrorMsg(null);

    // Your AJAX submit logic here, e.g.:
    // submit_ajax_form(1, formData);
    console.log("Submitting form data:", formData);
  };

  return (
    <section id="HomeTalkToUs" className="bg-white text-blue-900 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Talk To Us</h2>
        {errorMsg && (
          <div className="mb-4 rounded bg-red-600 px-4 py-2 text-white">{errorMsg}</div>
        )}
        <form onSubmit={submitForm} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Services Checkboxes */}
            <div className="flex flex-col space-y-4 text-blue-900">
              {servicesList.map((service) => (
                <label key={service} className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                    className="form-checkbox h-5 w-5 text-yellow-400"
                  />
                  <span className="ml-2">{service}</span>
                </label>
              ))}
            </div>

            {/* Personal Details */}
            <div className="space-y-4">
              <input
                type="text"
                name="fullname"
                placeholder="Enter Your Full Name*"
                required
                value={formData.fullname}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-blue-300 text-gray-900 placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400
             transition-colors duration-300"
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number*"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-blue-300 text-gray-900 placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400
             transition-colors duration-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-blue-300 text-gray-900 placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400
             transition-colors duration-300"
              />
            </div>

            {/* Message and Submit */}
            <div className="flex flex-col justify-between space-y-4">
              <textarea
                name="message"
                placeholder="Your Message*"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-blue-300 text-gray-900 placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400
             transition-colors duration-300 resize-none"
              />
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TalkToUsForm;
