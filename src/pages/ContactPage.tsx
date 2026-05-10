import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ContactCards, ContactForm } from '../components/sections/contact/ContactContent';
import contactHero from '../assets/contact-hero.png';

const ContactPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="Contact Us"
      title="Get In Touch"
      backgroundImage={contactHero}
    />
    <ContactCards />
    <ContactForm />
  </>
);

export default ContactPage;