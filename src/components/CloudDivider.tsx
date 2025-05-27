import React from 'react';

interface CloudDividerProps {
  flip?: boolean;
  fillColor?: string;
}

const CloudDivider: React.FC<CloudDividerProps> = ({ flip = false, fillColor = '#f8f4f4' }) => {
  return (
    <div className={`overflow-hidden w-full leading-[0] ${flip ? 'rotate-180' : ''}`}>
      <svg
        className="relative block w-full h-[100px]"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill={fillColor}
          d="
            M0,64
            C120,88,240,88,360,64
            C400,56,440,48,480,48
            C520,48,560,56,600,64
            C680,80,760,80,840,64
            C880,56,920,48,960,48
            C1000,48,1040,56,1080,64
            C1200,88,1320,88,1440,64
            V100
            H0
            Z"
        />
      </svg>
    </div>
  );
};

export default CloudDivider;
