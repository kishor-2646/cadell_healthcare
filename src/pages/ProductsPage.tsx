import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ProductGrid } from '../components/sections/products/ProductsContent';
import productsHero from '../assets/products-hero.png';

const ProductsPage: React.FC = () => (
  <>
    <PageHero
      eyebrow="All Department"
      title="Product's Department"
      backgroundImage={productsHero}
    />
    <ProductGrid />
  </>
);

export default ProductsPage;