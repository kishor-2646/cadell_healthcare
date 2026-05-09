import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { AboutStory, MissionVision, Testimonials } from '../components/sections/about/AboutContent';

const AboutPage: React.FC = () => (
  <>
    <PageHero eyebrow="About Us" title="About Us" />
    <AboutStory />
    <MissionVision />
    <Testimonials />
  </>
);

export default AboutPage;
