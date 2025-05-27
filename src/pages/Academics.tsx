import React from 'react';
import HeroAcademics from '../components/HeroAcademics';
import AcademicPhilosophy from '../components/AcademicPhilosophy';
import Curriculum from '../components/Curriculum';
import UniquePrograms from '../components/UniquePrograms';
import AcademicAchievements from '../components/AcademicAchievements';
import AcademicFacaulty from '../components/AcademicFacaulty';

const Academics = () => {
  return (
    <div>
      <HeroAcademics />
      <AcademicPhilosophy />
      <Curriculum />
      <UniquePrograms />
      <AcademicAchievements />
      <AcademicFacaulty />
    </div>
  );
};

export default Academics;
