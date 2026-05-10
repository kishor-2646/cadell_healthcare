import type { Product } from '../types';

export const products: Product[] = [
  { id: 1, name: 'ONTEL-AM',      genericName: 'Telmisartan and Amlodipine Tablets',        category: 'Cardiology',       image: '/src/assets/products/ontel-am.png',      description: 'Combination therapy for hypertension management. Available in 20mg/5mg and 40mg/5mg strengths.' },
  { id: 2, name: 'VILAPIL-50',    genericName: 'Vildagliptin Tablets',                       category: 'Diabetology',      image: '/src/assets/products/vilapil-50.png',    description: 'DPP-4 inhibitor for type 2 diabetes. Helps control blood sugar levels effectively.' },
  { id: 3, name: 'VILAPIL-M',     genericName: 'Vildagliptin & Metformin Tablets',           category: 'Diabetology',      image: '/src/assets/products/vilapil-m.png',     description: 'Fixed dose combination for improved glycaemic control in type 2 diabetes.' },
  { id: 4, name: 'PANTODELL-DSR', genericName: 'Pantoprazole & Domperidone Capsules',        category: 'Gastroenterology', image: '/src/assets/products/pantodell-dsr.png', description: 'Proton pump inhibitor + prokinetic agent for acid-related GI disorders.' },
  { id: 5, name: 'CADELL-AZ',     genericName: 'Amoxycillin and Potassium Clavulanate',      category: 'Antibiotics',      image: '/src/assets/products/cadell-az.png',     description: 'Broad spectrum antibiotic for bacterial infections across multiple organ systems.' },
  { id: 6, name: 'FITPRO-40',     genericName: 'Pantoprazole Gastro-Resistant Tablets',      category: 'Gastroenterology', image: '/src/assets/products/fitpro-40.png',     description: 'Delayed release formulation for GERD, peptic ulcers, and Zollinger-Ellison syndrome.' },
  { id: 7, name: 'ONTEL-H',       genericName: 'Olmesartan Medoxomil & Hydrochlorothiazide', category: 'Cardiology',       image: '/src/assets/products/ontel-h.png',       description: 'ARB + diuretic combination for the management of essential hypertension.' },
  { id: 8, name: 'CADELL-MET',    genericName: 'Metformin Hydrochloride Tablets',            category: 'Diabetology',      image: '/src/assets/products/cadell-met.png',    description: 'First-line oral antidiabetic agent for type 2 diabetes mellitus management.' },
];

export const categories = ['All', 'Cardiology', 'Diabetology', 'Gastroenterology', 'Antibiotics'];