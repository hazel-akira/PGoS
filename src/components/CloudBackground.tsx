// components/CloudBackground.tsx
import React from 'react';

const CloudBackground: React.FC = () => {
  return (
    <div className="fixed bg-blue-900 top-0 left-0 w-full h-full -z-10">
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="cloudPattern"
            x="0"
            y="0"
            width="300"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 60 
                 C20 80, 80 100, 100 60 
                 C120 40, 180 40, 200 60 
                 C220 90, 280 90, 300 60 
                 V120 H0 Z"
              fill="#e0f2ff"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cloudPattern)" />
      </svg>
    </div>
  );
};

export default CloudBackground;
