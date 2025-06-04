import React from 'react';

const steps = [
  {
    number: 1,
    icon: '🎓', // You can replace with an <img> if you have custom icons
    label: 'Choose a course',
  },
  {
    number: 2,
    icon: '📑',
    label: 'Scan and Share Academic Certificates',
  },
  {
    number: 3,
    icon: '✏️',
    label: 'Book interview',
  },
  {
    number: 4,
    icon: '📕',
    label: 'Entrance Exam',
  },
  {
    number: 5,
    icon: '💳',
    label: 'Fee Payment',
  },
];

const EnrollmentStepper: React.FC = () => {
  return (
    <div className="w-full bg-[#f7f7f7] py-8 flex justify-center">
      <div className="flex flex-row flex-wrap justify-center gap-8 w-full max-w-5xl">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center w-32">
            <div className="relative mb-2">
              <span className="absolute -top-3 -left-3 bg-[#c9a030] text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm z-10">
                {step.number}
              </span>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                <span className="text-3xl">{step.icon}</span>
              </div>
            </div>
            <div className="text-center text-sm mt-2 font-medium text-gray-800">
              {step.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrollmentStepper; 