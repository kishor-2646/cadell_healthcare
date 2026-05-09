import React from 'react';
import { HeroSection } from '../components/sections/home/HeroSection';
import { ServicesSection } from '../components/sections/home/ServicesSection';
import { ProductsPreview } from '../components/sections/home/ProductsPreview';
import { StatsSection } from '../components/sections/home/StatsSection';
import { AppointmentSection } from '../components/sections/home/AppointmentSection';

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <ServicesSection />
    <ProductsPreview />
    <StatsSection />
    <AppointmentSection />
  </>
);

export default HomePage;
