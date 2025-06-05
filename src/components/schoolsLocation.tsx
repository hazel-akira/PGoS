import React, { useState } from 'react';

const schoolLocations = [
  {
    name: 'Pioneer Junior Academy',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4026722416047!2d37.16022407568769!3d-0.827042335298128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a50ca5860f35%3A0xb479dcc48ea204c1!2sSt.Paul%20Thomas%20Academy!5e0!3m2!1sen!2ske!4v1749118421265!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',

  },
    {
    name: 'Pioneer School High',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4016685228353!2d37.159820983649325!3d-0.828040333123034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a50c74d53417%3A0xff10395f6befaa0!2sPioneer%20School!5e0!3m2!1sen!2ske!4v1749118335234!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    },
  {
    name: 'Pioneer Girls High',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255305.511232065!2d36.81561652290203!3d-1.049807510088898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4dd45f575959%3A0xc96943478f1f6fa4!2sPioneer%20Girls%20School!5e0!3m2!1sen!2ske!4v1749117557595!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
  
      },
  {
    name: 'St Paul Thomas Academy',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4026722416047!2d37.16022407568769!3d-0.827042335298128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a50ca5860f35%3A0xb479dcc48ea204c1!2sSt.Paul%20Thomas%20Academy!5e0!3m2!1sen!2ske!4v1749118421265!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',

    },
  {
    name: 'Pioneer Girls Junior Academy',
    mapUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.178710649898!2d37.08363257568863!3d-1.0259457353984986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f1f03162239%3A0x91c97faef3f2aff1!2sPioneer%20Girls%20Junior%20Academy!5e0!3m2!1sen!2ske!4v1749118225353!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  },

   ];

const SchoolLocationTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-">
        Find Our Schools
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {schoolLocations.map((school, index) => (
          <button
            key={school.name}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-full border transition ${
              activeIndex === index
                ? 'bg-orange-600 text-white border-orange-600'
                : 'bg-white text-[#02032d] border-orange-600 hover:bg-orange-100'
            }`}
          >
            {school.name}
          </button>
        ))}
      </div>

      <div className="aspect-video w-full max-w-5xl mx-auto shadow-lg border rounded-lg overflow-hidden">
        <iframe
          src={schoolLocations[activeIndex].mapUrl}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default SchoolLocationTabs;
