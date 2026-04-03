import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, Feather, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  // Safety check for images array
  const mainImage = product.images?.[0] || product.image;
  const hoverImage = product.images?.[1] || mainImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden border-2 border-black pixel-card p-0 shadow-none hover:shadow-none transition-all duration-500 bg-white aspect-[3/4]">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {product.isNewArrival && (
            <div className="bg-black text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest pixel-border border-white shadow-none">
              New
            </div>
          )}
          {product.isBestSeller && (
            <div className="bg-white text-black px-3 py-1 text-[8px] font-black uppercase tracking-widest pixel-border border-black shadow-none">
              Best
            </div>
          )}
        </div>

        {/* Product Images */}
        <Link to={`/product/${product.id}`} className="block h-full w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={isHovered ? 'hover' : 'main'}
              src={isHovered ? hoverImage : mainImage}
              alt={product.name}
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{ opacity: 1, scale: isHovered ? 1.05 : 1 }}
              exit={{ opacity: 0.8 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0"
            />
          </AnimatePresence>
        </Link>

        {/* Action Overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Link
            to={`/product/${product.id}`}
            className="p-3 bg-white text-black pixel-border hover:bg-black hover:text-white transition-colors"
          >
            <Eye size={18} strokeWidth={3} />
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="p-3 bg-black text-white pixel-border hover:bg-white hover:text-black transition-colors"
          >
            <ShoppingBag size={18} strokeWidth={3} />
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 flex-grow">
        <div className="flex justify-between items-start gap-4">
          <Link
            to={`/product/${product.id}`}
            className="text-lg font-black uppercase tracking-tight group-hover:text-gray-500 transition-colors leading-tight"
          >
            {product.name}
          </Link>
          <span className="text-xl font-black text-black">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star size={10} className="fill-black" />
            <span className="text-[10px] font-black">{product.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
