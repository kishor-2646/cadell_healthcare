import type { NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Products', path: '/products',
    children: [
      { label: 'Cardiology', path: '/products?cat=cardiology' },
      { label: 'Diabetology', path: '/products?cat=diabetology' },
      { label: 'Gastroenterology', path: '/products?cat=gastroenterology' },
    ]
  },
  { label: 'Contact', path: '/contact' },
  { label: 'Login', path: '/login' },
];
