import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';

const ProductGrid = ({ category, limit, filter }) => {
  let displayedProducts = products;

  if (category) {
    displayedProducts = displayedProducts.filter((product) => product.category === category);
  }

  if (filter) {
    displayedProducts = displayedProducts.filter(filter);
  }

  if (limit) {
    displayedProducts = displayedProducts.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
      {displayedProducts.map((product, idx) => (
        <ProductCard key={product.id} product={product} />
      ))}

      {displayedProducts.length === 0 && (
        <div className="col-span-full text-center py-20 border-4 border-dashed border-gray-100 pixel-border shadow-none">
          <p className="text-xl font-bold uppercase tracking-widest text-gray-300">
            No items found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
