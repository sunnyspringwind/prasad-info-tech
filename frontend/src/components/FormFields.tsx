import React, { useState, type FormEvent } from "react";

export type FormDataType = {
  services: string[];
  fullname: string;
  mobile: string;
  email: string;
  message: string;
};

export type FormFieldsProps = {
  showServices?: boolean;
  typeLabel?: string;
  onClose?: () => void;
  contactSection?: boolean;
};

const servicesList = [
  "Advertising",
  "Website Development",
  "Content Marketing",
  "Social Media Marketing",
  "Search Engine Optimization",
  "Graphic/Logo Design",
];

const FormFields: React.FC<FormFieldsProps> = ({
  showServices = false,
  typeLabel,
  onClose,
  contactSection = false
}) => {
  const [formData, setFormData] = useState<FormDataType>({
    services: [],
    fullname: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (showServices && formData.services.length === 0) {
      setErrorMsg("Please select at least one service.");
      return;
    }
    setErrorMsg(null);
    console.log("Submitting form data:", formData);
    // submit_ajax_form(1, formData);
  };

  return (
    <>
      {errorMsg && (
        <div className="mb-4 rounded bg-red-600 px-4 py-2 text-white">
          {errorMsg}
        </div>
      )}
      <form onSubmit={submitForm} className="space-y-6">
        <div
          className={`grid grid-cols-1 ${
            showServices ? "md:grid-cols-3" : "md:grid-cols-2"
          } gap-8`}
        >
          {showServices && (
            <div className="flex flex-col space-y-4 text-blue-900">
              {servicesList.map((service) => (
                <label
                  key={service}
                  className="inline-flex items-center cursor-pointer"
                >
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
          )}

          {/* Personal Details */}
          <div className="space-y-4">
            <input
              type="text"
              name="fullname"
              placeholder="Enter Your Full Name*"
              required
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-blue-300 text-gray-900"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number*"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-blue-300 text-gray-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-blue-300 text-gray-900"
            />
            {showServices && !contactSection &&  (
              <div className="text-right pt-7 hidden md:block">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* Message and Submit */}
          <div className="flex flex-col justify-between space-y-4">
            <textarea
              name="message"
              placeholder="Project description*"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-blue-300 text-gray-900 resize-none"
            />
            <div className="text-center sm:text-right">
              {showServices && !contactSection  && (
                <button
                  type="button"
                  onClick={onClose}
                  className="md:hidden mr-4 bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition"
              >
                {typeLabel || "Get In Touch"}
              </button>
              {!showServices && (
                <button
                  type="button"
                  onClick={onClose}
                  className="ml-4 bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormFields;
