import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { AboutStory, MissionVision, Testimonials } from '../components/sections/about/AboutContent';
import aboutHero from '../assets/about-hero.png';

const AboutPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="About Us"
      title="About Us"
      backgroundImage={aboutHero}
    />
    <AboutStory />
    <MissionVision />
    <Testimonials />
  </>
);

export default AboutPage;