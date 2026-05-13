import type { Testimonial } from '../types';

/**
 * To use local doctor images, replace each `image` URL with an imported asset:
 *   import doctor1 from '../assets/doctor1.jpg';
 * then set  image: doctor1
 */
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Partho Sarothi',
    role: 'Medical Practitioner',
    content:
      '[Company Name] provides exceptional quality products. The consistency and efficacy of their formulations have significantly improved patient outcomes in my practice.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop&crop=faces',
  },
  {
    id: 2,
    name: 'Dr. Ramesh Kumar',
    role: 'Cardiologist',
    content:
      'I have been prescribing [Company Name] products for over 5 years. Their commitment to WHO-GMP manufacturing standards gives me complete confidence in every prescription.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=700&fit=crop&crop=faces',
  },
  {
    id: 3,
    name: 'Dr. Priya Nair',
    role: 'Diabetologist',
    content:
      'The VILAPIL range has been a game-changer for my diabetic patients. Excellent bioavailability and minimal side effects make it a top choice.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=700&fit=crop&crop=faces',
  },
  {
    id: 4,
    name: 'Dr. Anil Sharma',
    role: 'General Physician',
    content:
      'Outstanding customer support and timely delivery. [Company Name] truly understands what healthcare professionals need in their day-to-day practice.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&h=700&fit=crop&crop=faces',
  },
];