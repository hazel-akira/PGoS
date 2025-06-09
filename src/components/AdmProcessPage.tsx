import React from 'react';
import { Link } from 'react-router-dom';
import HeroAdm from './HeroAdm';

const levels = [
  'Pre-primary',
  'Primary',
  'High School',
  'A-Levels',
];

const helpfulLinks = [
  { label: 'Admission Fees', href: '#' },
  { label: 'Enrollment Checklist', href: '#' },
  { label: 'Student Health Forms', href: '#' },
  { label: 'Financial Aid', href: '#' },
];

const AdmProcessPage: React.FC = () => {
  return (
    <>
      
        <HeroAdm />
      
      <div className="bg-[#f7f9fb] dark:bg-gray-500 min-h-screen py-10 px-2 md:px-0">
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-400 rounded-xl shadow p-6 md:p-12 flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl  font-bold text-[#0e013d] mb-2">Our Enrolment Process</h1>
            <p className="text-[#1a237e] mb-6">
              Pioneer Group of Schools welcomes, celebrates, and nurtures all who join our community. We are committed to providing a supportive environment where every child is seen, heard, and empowered to thrive. Our enrolment process is designed to be clear and supportive for every family.
            </p>
           
            <hr className="my-6 border-t border-gray-300" />

            {/* Step 1 */}
            <h2 className="text-xl font-bold dark:text-[#0e013d] mb-2 mt-8">Step 1: Application</h2>
            <div className="mb-4">
              <div className="font-semibold mb-1">Applying For...</div>
              <ul className="list-disc pl-6 space-y-1">
                {levels.map((level) => (
                  <li key={level}>{level}</li>
                ))}
              </ul>
            </div>

            {/* Step 2 */}
            <h2 className="text-xl font-bold text-[#d32f2f] mb-2 mt-8">Step 2: Acceptance and Enrolment</h2>
            <p className="mb-4">
              Once your application is reviewed by our admissions team, you may be invited for an interview or assessment. If offered admission, please confirm your enrolment by submitting your enrolment contract and tuition deposit by the date indicated on your acceptance letter.
            </p>

            {/* Helpful Info */}
            <div className="mt-8">
              <div className="font-semibold mb-2">Helpful Information</div>
              <ul className="list-disc pl-6 space-y-1">
                {helpfulLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-blue-700 hover:underline">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className=" bg-[#0e013d] text-white rounded-lg p-6 flex flex-col items-center">
              <div className="mb-2 text-center">
                Pioneer Group of Schools uses a simple online process for admissions and enrolment. Click below to create an account, start your application, and view the admissions checklist.
              </div>
              <a
                href="https://enquireto.pioneergroupofschools.co.ke/Account/Login/Register?returnUrl=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-8 py-3 bg-[#ffbc04] text-[#0e013d] font-bold rounded hover:bg-[#ffd966] transition"
              >
                Begin Application
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <div className="bg-[#f7f9fb] border-l-4 border-[#ffbc04] p-4 rounded-lg shadow text-[#0e013d] flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[#d32f2f] text-2xl">♥</span>
                <span className="font-bold">Non-Discrimination Policy</span>
              </div>
              <div className="text-sm">
                Pioneer Group of Schools admits students of any race, color, nationality, and ethnic origin to all the rights, privileges, programs, and activities generally accorded or made available to students at the school. We do not discriminate on the basis of race, color, or ethnic origin in administration of our educational policies, admissions policies, or any school-administered programs.
              </div>
            </div>
            <img
              src="/images/admissions.png"
              alt="Pioneer students"
              className="rounded-lg shadow object-cover w-full h-48 md:h-64"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmProcessPage; 