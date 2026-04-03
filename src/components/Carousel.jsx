import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingBag, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const featured = products.filter(p => p.isFeatured);
  const [current, setCurrent] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featured.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [featured.length]);

  const next = () => setCurrent((prev) => (prev + 1) % featured.length);
  const prev = () => setCurrent((prev) => (prev - 1 + featured.length) % featured.length);

  const product = featured[current];

  return (
    <div className="relative w-full h-[600px] md:h-[800px] bg-white overflow-hidden border-y-4 border-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col md:flex-row"
        >
          {/* Product Image */}
          <div className="w-full md:w-1/2 h-full relative overflow-hidden bg-accent">
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
          </div>

          {/* Product Content */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-12 md:p-24 bg-white relative">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-300 mb-6 block">
                Featured Piece / 0{current + 1}
              </span>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
                {product.name}
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-md mb-12 uppercase tracking-tight">
                {product.description}
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <button
                  onClick={() => addToCart(product)}
                  className="pixel-button px-10 py-5 text-lg font-black uppercase tracking-widest flex items-center gap-4 group"
                >
                  Add to Bag
                  <ShoppingBag size={20} strokeWidth={3} />
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="text-sm font-black uppercase tracking-widest border-b-4 border-black pb-1 hover:pb-2 transition-all flex items-center gap-3"
                >
                  Details <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Pagination Controls */}
            <div className="absolute bottom-12 right-12 md:bottom-24 md:right-24 flex gap-4">
              <button
                onClick={prev}
                className="p-4 border-2 border-black pixel-border bg-white hover:bg-black hover:text-white transition-all shadow-none"
              >
                <ChevronLeft size={24} strokeWidth={3} />
              </button>
              <button
                onClick={next}
                className="p-4 border-2 border-black pixel-border bg-black text-white hover:bg-white hover:text-black transition-all shadow-none"
              >
                <ChevronRight size={24} strokeWidth={3} />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-12 flex gap-3">
        {featured.map((_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-500 ${
              i === current ? 'w-12 bg-black' : 'w-4 bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
