import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { SectionHeader } from '../../ui/SectionHeader';
import styles from './ContactContent.module.css';

export const ContactCards: React.FC = () => {
  const cards = [
    {
      icon: <FiPhone size={28} />,
      title: 'Call Us',
      lines: ['Tel : +91 – 821 – 2970300', 'Mob : 90606 44409'],
    },
    {
      icon: <FiMail size={28} />,
      title: 'Email Us',
      lines: ['info@cadellhealthcare.com'],
    },
    {
      icon: <FiMapPin size={28} />,
      title: 'Our Offices',
      lines: [
        'Registered: No. C-69, Yadavagiri Industrial Estate, Mysore – 570 020',
        'Regional: No. 104, Kuvempu Marga, Annapurneshwari Layout, Bangalore – 560 056',
      ],
    },
  ];

  return (
    <section className={`${styles.cards} section-pad`}>
      <div className="container">
        <SectionHeader eyebrow="Contact Us" title="Get In Touch" subtitle="We're here to help. Reach us through any of the channels below." align="center" />
        <div className={styles.grid} style={{ marginTop: 48 }}>
          {cards.map((c, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{c.icon}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              {c.lines.map((l, j) => <p key={j} className={styles.line}>{l}</p>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', topic: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className={`${styles.formSection} section-pad`}>
      <div className="container">
        <SectionHeader eyebrow="Write to Us" title="Contact Us" subtitle="Fill out the form and we'll get back to you within 24 hours." align="center" />
        <div className={styles.formWrap}>
          {sent ? (
            <div className={styles.success}>
              <span>✓</span>
              <p>Thank you! We'll get back to you shortly.</p>
            </div>
          ) : (
            <>
              <div className={styles.row}>
                <input type="text" name="name" value={form.name} onChange={handleChange} className={styles.input} placeholder="Your Full Name" />
                <input type="email" name="email" value={form.email} onChange={handleChange} className={styles.input} placeholder="Your Email Address" />
              </div>
              <div className={styles.row}>
                <input type="text" name="topic" value={form.topic} onChange={handleChange} className={styles.input} placeholder="Your Query Topic" />
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={styles.input} placeholder="Your Phone Number" />
              </div>
              <textarea name="message" value={form.message} onChange={handleChange} className={`${styles.input} ${styles.textarea}`} placeholder="Your Message" rows={5} />
              <div className={styles.center}>
                <button className={styles.submit} onClick={() => setSent(true)}>Send Message →</button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
