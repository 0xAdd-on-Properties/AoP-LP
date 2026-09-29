import React from 'react';
import Hero from '../components/Hero';
import ScrollIndexRail from '../components/ScrollIndexRail';
import Doorways from '../components/Doorways';
import Features from '../components/Features';
import PropertyTypes from '../components/PropertyTypes';
import Services from '../components/Services';
import Marketplace from '../components/Marketplace';
import SustainableArchitecture from '../components/SustainableArchitecture';
import Vision from '../components/Vision';

const Home = () => {
  return (
    <>
      <Hero />
      <ScrollIndexRail />
      <Doorways />
      <Features />
      <PropertyTypes />
      <Services />
      <Marketplace />
      <SustainableArchitecture />
      <Vision />
    </>
  );
};

export default Home;