export interface Product {
  id: number;
  name: string;
  genericName: string;
  category: string;
  description: string;
  image?: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  /** URL or imported asset path for the doctor's photo */
  image: string;
}