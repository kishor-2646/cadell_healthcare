import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ProductGrid } from '../components/sections/products/ProductsContent';

const ProductsPage: React.FC = () => (
  <>
    <PageHero eyebrow="All Department" title="Product's Department" />
    <ProductGrid />
  </>
);

export default ProductsPage;
