// src/components/SplashScreen.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/images/pgos_logo.png"; // Replace with actual logo path

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [animateLine, setAnimateLine] = useState(false);

  useEffect(() => {
    setAnimateLine(true);

    const timer = setTimeout(() => {
      setAnimateLine(false);
    }, 2000); // Time to show the open animation

    const navigateTimer = setTimeout(() => {
      navigate("/home"); // Adjust route as needed
    }, 4000); // Navigate after animation

    return () => {
      clearTimeout(timer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white transition-all duration-1000">
      <img src={logo} alt="School Logo" className="w-40 h-40 mb-8" />
      <div className="relative w-64 h-1 bg-gray-300 overflow-hidden">
        <div
          className={`absolute h-full bg-blue-600 transition-all duration-2000 ease-in-out ${
            animateLine ? "w-full" : "w-0"
          }`}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
