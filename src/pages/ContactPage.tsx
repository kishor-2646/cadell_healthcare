import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ContactCards, ContactForm } from '../components/sections/contact/ContactContent';

const ContactPage: React.FC = () => (
  <>
    <PageHero eyebrow="Contact Us" title="Get In Touch" />
    <ContactCards />
    <ContactForm />
  </>
);

export default ContactPage;
