import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SpecialtiesSection.module.css';

const specialties = [
  {
    id: 'cardiology',
    number: '01',
    title: 'Cardiology',
    description: 'Advanced cardiac solutions for comprehensive heart health management and prevention.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'diabetology',
    number: '02',
    title: 'Diabetology',
    description: 'Complete diabetes care with innovative pharmaceutical interventions and monitoring.',
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'endocrinology',
    number: '03',
    title: 'Endocrinology',
    description: 'Hormonal balance solutions and thyroid management through precise therapeutics.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'gastroenterology',
    number: '04',
    title: 'Gastroenterology',
    description: 'Digestive health formulations grounded in the latest clinical research.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80',
  },
];

export const SpecialtiesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.dot} />
              <span>Our Specialties</span>
            </div>
            <h2 className={styles.heading}>
              What We Specialize In
            </h2>
          </div>
          <Link to="/products" className={styles.viewAll}>
            View All Products <span>→</span>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {specialties.map((item) => (
            <Link to="/products" key={item.id} className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.cardImg} />
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <span className={styles.cardNumber}>{item.number}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};