import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/sections/home/HeroSection';
import { ServicesSection } from '../components/sections/home/ServicesSection';
import { ProductsPreview } from '../components/sections/home/ProductsPreview';
import { StatsSection } from '../components/sections/home/StatsSection';
import { AppointmentSection } from '../components/sections/home/AppointmentSection';

const segments = ['Cardiology', 'Diabetology', 'Gastroenterology', 'Antibiotics'];

const HomePage: React.FC = () => (
  <>
    <HeroSection />

    {/* ── THERAPEUTIC SEGMENTS ── */}
    <section style={{ padding: '72px 0 60px', background: '#f4f6fb' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, color: 'var(--navy)', margin: '0 0 12px' }}>
            Therapeutic Segments We Serve
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '500px', lineHeight: 1.65 }}>
            We develop targeted pharmaceutical solutions across key healthcare areas.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {segments.map((name) => (
            <Link
              key={name}
              to="/products"
              style={{ background: '#fff', border: '1px solid #e4e8f0', borderRadius: '16px', padding: '32px 28px', textDecoration: 'none', display: 'block', transition: 'box-shadow 0.25s, border-color 0.25s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(10,22,60,0.10)'; (e.currentTarget as HTMLElement).style.borderColor = '#c9a84c66'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.borderColor = '#e4e8f0'; }}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px' }}>{name}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>View our {name.toLowerCase()} portfolio.</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <ServicesSection />
    <ProductsPreview />
    <StatsSection />
    <AppointmentSection />
  </>
);

export default HomePage;