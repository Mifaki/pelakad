import React from 'react';
import HeroSection from './section/HeroSection';
import TopNavbar from '~/shared/container/navigation/TopNavbar';
import ServiceSection from './section/ServiceSection';
import FormFlowSection from './section/FormFlowSection';

const LandingContainer = () => {
  return (
    <>
      <TopNavbar />
      <HeroSection />
      <ServiceSection />
      <FormFlowSection />
    </>
  );
};

export default LandingContainer;
