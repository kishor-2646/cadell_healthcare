import React, { useState } from 'react';
import { SectionHeader } from '../../ui/SectionHeader';
import styles from './AppointmentSection.module.css';

export const AppointmentSection: React.FC = () => {
  const [form, setForm] = useState({ dept: '', doctor: '', date: '', time: '', name: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className={`${styles.section} section-pad`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <SectionHeader
              eyebrow="Book Now"
              title="Make an Appointment"
              subtitle="Schedule a consultation with our specialists. We're available to serve you across all healthcare departments."
            />
            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <strong>Mon – Fri</strong>
                <span>08:30 – 18:00</span>
              </div>
              <div className={styles.infoCard}>
                <strong>Sat – Sun</strong>
                <span>10:00 – 17:00</span>
              </div>
            </div>
          </div>

          <div className={styles.form}>
            <div className={styles.row}>
              <select name="dept" value={form.dept} onChange={handleChange} className={styles.input}>
                <option value="">Choose Department</option>
                <option>Cardiology</option>
                <option>Diabetology</option>
                <option>Gastroenterology</option>
                <option>Endocrinology</option>
              </select>
              <select name="doctor" value={form.doctor} onChange={handleChange} className={styles.input}>
                <option value="">Select Doctor</option>
                <option>Dr. Ramesh Kumar</option>
                <option>Dr. Priya Nair</option>
              </select>
            </div>
            <div className={styles.row}>
              <input type="date" name="date" value={form.date} onChange={handleChange} className={styles.input} placeholder="dd/mm/yyyy" />
              <input type="time" name="time" value={form.time} onChange={handleChange} className={styles.input} placeholder="Time" />
            </div>
            <div className={styles.row}>
              <input type="text" name="name" value={form.name} onChange={handleChange} className={styles.input} placeholder="Full Name" />
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={styles.input} placeholder="Phone Number" />
            </div>
            <textarea name="message" value={form.message} onChange={handleChange} className={`${styles.input} ${styles.textarea}`} placeholder="Your Message" rows={4} />
            <button type="submit" className={styles.submit}>Make Appointment →</button>
          </div>
        </div>
      </div>
    </section>
  );
};
