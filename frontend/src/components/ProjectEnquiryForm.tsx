import React from "react";
import FormFields from "./FormFields";

type ProjectInquiryProps = {
  type: string;
  onClose: () => void;
  showServices: boolean;
};

const ProjectInquiryForm: React.FC<ProjectInquiryProps> = ({ type, onClose, showServices }) => {

  return (
    <section className="shadow-xl border-t-2 border-gray-100 bg-white text-blue-900 py-7 rounded-lg">
      <div className="container max-w-6xl mx-auto px-5">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h2 className="text-3xl font-bold">
            You're starting a <span className="text-blue-600">{type}</span> project.
          </h2>
        </div>
        <FormFields showServices={showServices} typeLabel={`Start Project`} onClose={onClose} />
      </div>
    </section>
  );
};

export const CustomTitleForm: React.FC<ProjectInquiryProps> = ({ type, onClose, showServices }) => {
  return (
    <section className="shadow-xl border-t-2 border-gray-100 bg-white text-blue-900 py-7 rounded-lg">
      <div className="container max-w-6xl mx-auto px-5">
        <div className="flex justify-between items-center mb-4 flex-wrap">
          <h2 className="text-3xl font-bold">
            <span className="text-blue-600">{type}</span>
          </h2>
        </div>
        <FormFields showServices={showServices} typeLabel={`Submit`} onClose={onClose} />
      </div>
    </section>
  );
};

export default ProjectInquiryForm;