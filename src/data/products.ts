import type { Product } from '../types';

export const products: Product[] = [
  { id: 1, name: 'ONTEL-AM',      genericName: 'Telmisartan and Amlodipine Tablets',        category: 'Cardiology',       image: undefined, description: 'Combination therapy for hypertension management. Available in 20mg/5mg and 40mg/5mg strengths.' },
  { id: 2, name: 'VILAPIL-50',    genericName: 'Vildagliptin Tablets',                       category: 'Diabetology',      image: undefined, description: 'DPP-4 inhibitor for type 2 diabetes. Helps control blood sugar levels effectively.' },
  { id: 3, name: 'VILAPIL-M',     genericName: 'Vildagliptin & Metformin Tablets',           category: 'Diabetology',      image: undefined, description: 'Fixed dose combination for improved glycaemic control in type 2 diabetes.' },
  { id: 4, name: 'PANTODELL-DSR', genericName: 'Pantoprazole & Domperidone Capsules',        category: 'Gastroenterology', image: undefined, description: 'Proton pump inhibitor + prokinetic agent for acid-related GI disorders.' },
  { id: 5, name: 'PHARMA-AZ',     genericName: 'Amoxycillin and Potassium Clavulanate',      category: 'Antibiotics',      image: undefined, description: 'Broad spectrum antibiotic for bacterial infections across multiple organ systems.' },
  { id: 6, name: 'FITPRO-40',     genericName: 'Pantoprazole Gastro-Resistant Tablets',      category: 'Gastroenterology', image: undefined, description: 'Delayed release formulation for GERD, peptic ulcers, and Zollinger-Ellison syndrome.' },
  { id: 7, name: 'ONTEL-H',       genericName: 'Olmesartan Medoxomil & Hydrochlorothiazide', category: 'Cardiology',       image: undefined, description: 'ARB + diuretic combination for the management of essential hypertension.' },
  { id: 8, name: 'PHARMA-MET',    genericName: 'Metformin Hydrochloride Tablets',            category: 'Diabetology',      image: undefined, description: 'First-line oral antidiabetic agent for type 2 diabetes mellitus management.' },
];

export const categories = ['All', 'Cardiology', 'Diabetology', 'Gastroenterology', 'Antibiotics'];