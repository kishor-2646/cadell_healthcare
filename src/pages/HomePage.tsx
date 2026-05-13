import React from 'react';
import { HeroSection } from '../components/sections/home/HeroSection';
import { SpecialtiesSection } from '../components/sections/home/SpecialtiesSection';
import { StatsSection } from '../components/sections/home/StatsSection';
import { ServicesSection } from '../components/sections/home/ServicesSection';
import { ProductsPreview } from '../components/sections/home/ProductsPreview';
import { AppointmentSection } from '../components/sections/home/AppointmentSection';

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <SpecialtiesSection />
    <StatsSection />
    <ServicesSection />
    <ProductsPreview />
    <AppointmentSection />
  </>
);

export default HomePage;