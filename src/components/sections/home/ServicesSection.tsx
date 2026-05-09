import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiPhone } from 'react-icons/fi';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import styles from './ServicesSection.module.css';

const services = [
  {
    icon: <FiCalendar size={28} />,
    tag: '24 Hours Service',
    title: 'Online Appointment',
    desc: 'Get all-time support for emergencies. We have introduced the principle of family medicine for comprehensive care.',
    cta: 'Make an Appointment',
    link: '/contact',
  },
  {
    icon: <FiClock size={28} />,
    tag: 'Timing Schedule',
    title: 'Working Hours',
    hours: [
      { days: 'Sun – Wed', time: '8:00 – 17:00' },
      { days: 'Thu – Fri', time: '9:00 – 17:00' },
      { days: 'Sat – Sun', time: '10:00 – 17:00' },
    ],
  },
  {
    icon: <FiPhone size={28} />,
    tag: 'Call Us',
    title: '+91 – 821 – 2970300',
    desc: 'Get all-time support for emergencies. Connect with us for any urgency and medical inquiries.',
    cta: 'Call Now',
    link: 'tel:+918212970300',
  },
];

export const ServicesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={`${styles.card} ${isVisible ? styles.visible : ''}`} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className={styles.icon}>{s.icon}</div>
              <span className={styles.tag}>{s.tag}</span>
              <h3 className={styles.title}>{s.title}</h3>
              {s.desc && <p className={styles.desc}>{s.desc}</p>}
              {s.hours && (
                <ul className={styles.hours}>
                  {s.hours.map((h, j) => (
                    <li key={j}><span>{h.days}</span><strong>{h.time}</strong></li>
                  ))}
                </ul>
              )}
              {s.cta && (
                <Link to={s.link!} className={styles.cta}>{s.cta} →</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
