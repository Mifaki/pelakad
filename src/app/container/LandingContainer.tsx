import React from 'react';
import HeroSection from './section/HeroSection';
import TopNavbar from '~/shared/container/navigation/TopNavbar';

const LandingContainer = () => {
  return (
    <>
      <TopNavbar />
      <HeroSection />
    </>
  );
};

export default LandingContainer;
