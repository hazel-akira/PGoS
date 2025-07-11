import React, { useState } from 'react';
import { Mail, Send, Check, ChevronDown } from 'lucide-react';

interface ProspectusItem {
  id: string;
  name: string;
  description: string;
}

interface ProspectusRequest {
  email: string;
  selectedSchool: string;
  fullName: string;
}

const ProspectusRequestSection: React.FC = () => {
  const [selectedSchool, setSelectedSchool] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const schools: ProspectusItem[] = [
    {
      id: '1',
      name: 'Pioneer Girls Junior Academy',
      description: 'Early years secondary education for girls'
    },
    {
      id: '2',
      name: 'Pioneer Junior Academy',
      description: 'Early years secondary education for boys'
    },
    {
      id: '3',
      name: 'Pioneer Girls School',
      description: 'Senior Secondary education for girls'
    },
    {
      id: '4',
      name: 'Pioneer School',
      description: 'Senior Secondary education for boys'
    },
    {
      id: '5',
      name: 'St. Paul Thomas Academy',
      description: 'Early years primary education for boys'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedSchool || !email || !fullName) {
      return;
    }

    const request: ProspectusRequest = {
      email,
      selectedSchool,
      fullName
    };

    // In a real app, this would send the request to your backend
    console.log('Prospectus request submitted:', request);
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setFullName('');
      setSelectedSchool('');
    }, 3000);
  };

  const handleSchoolSelect = (school: ProspectusItem) => {
    setSelectedSchool(school.name);
    setIsDropdownOpen(false);
  };

  const selectedSchoolData = schools.find(school => school.name === selectedSchool);

  if (isSubmitted) {
    return (
      <div className="min-h-screen  bg-[url('/images/polkabackground.png')] bg-cover bg-center p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-4">
              Your request has been submitted successfully. 
            </p>
            <p className="text-sm text-gray-500">
              The prospectus for <strong>{selectedSchool}</strong> will be sent to your email shortly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[url('/images/polkabackground.png')] bg-cover bg-center p-8 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-800 bg-opacity-70"></div>
      <div className="w-full max-w-md z-10 relative">
        <div className="bg-orange-400 rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <Mail className="w-12 h-12 text-white mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">
              Request School Prospectus
            </h1>
            <p className="text-orange-100 text-sm">
              Get detailed information about our schools delivered to your inbox
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* School Selection */}
            <div className="space-y-2">
              <label className="block text-white text-sm font-medium">
                Select School *
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white rounded-lg p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div>
                    <span className="text-gray-800 font-medium">
                      {selectedSchool || 'Choose a school...'}
                    </span>
                    {selectedSchoolData && (
                      <p className="text-sm text-gray-500 mt-1">
                        {selectedSchoolData.description}
                      </p>
                    )}
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10 max-h-64 overflow-y-auto">
                    {schools.map((school) => (
                      <button
                        key={school.id}
                        type="button"
                        onClick={() => handleSchoolSelect(school)}
                        className="w-full p-4 text-left hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-medium text-gray-800">{school.name}</div>
                        <div className="text-sm text-gray-500 mt-1">{school.description}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-white text-sm font-medium">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-white rounded-lg p-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-white text-sm font-medium">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded-lg p-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!selectedSchool || !email || !fullName}
              className="w-full bg-white text-orange-500 font-semibold py-4 px-6 rounded-lg hover:bg-orange-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Request Prospectus</span>
            </button>
          </form>

          <p className="text-orange-100 text-xs text-center mt-4">
            We'll send the prospectus to your email within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProspectusRequestSection;