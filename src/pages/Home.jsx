import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Carousel from '../components/Carousel';
import { motion } from 'framer-motion';
import { Feather, ArrowRight, Star, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { products, collections } from '../data/products';

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

  const newArrivals = products.filter(p => p.isNewArrival);
  const bestSellers = products.filter(p => p.isBestSeller);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      <Hero />

      {/* New Arrivals Section */}
      <section id="new-arrivals" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-6"
            >
              <div className="w-16 h-[2px] bg-black" />
              Latest Drop
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
              New <span className="text-gray-100 outline-text">Arrivals</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium uppercase tracking-tight">
              Fresh pieces for the modern minimal aesthetic.
            </p>
          </div>
          <Link
            to="/?category=Apparel"
            className="text-sm font-black uppercase tracking-widest border-b-4 border-black pb-1 hover:pb-2 transition-all flex items-center gap-3"
          >
            See All <ArrowRight size={16} />
          </Link>
        </div>
        <ProductGrid limit={3} filter={p => p.isNewArrival} />
      </section>

      {/* Featured Carousel */}
      <Carousel />

      {/* Collections Grid */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-300 block mb-6">
              Curated Selection
            </span>
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              Shop by <span className="text-gray-100 outline-text">Series</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, idx) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative aspect-[4/5] overflow-hidden border-2 border-black pixel-border p-0 shadow-none hover:shadow-none bg-white cursor-pointer"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-8 right-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-2 leading-tight">
                    {collection.name}
                  </h3>
                  <p className="text-xs text-gray-300 font-bold uppercase tracking-widest mb-6">
                    {collection.description}
                  </p>
                  <button className="pixel-button bg-white text-black border-white shadow-none hover:bg-black hover:text-white hover:border-black py-3 px-6 text-[10px] font-black uppercase tracking-widest">
                    Explore
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white overflow-hidden border-t-2 border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 mb-6"
            >
              <div className="w-16 h-[2px] bg-black" />
              Crowd Favorites
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
              Best <span className="text-gray-100 outline-text">Sellers</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium uppercase tracking-tight">
              Our community's most loved minimal essentials.
            </p>
          </div>
        </div>
        <ProductGrid limit={3} filter={p => p.isBestSeller} />
      </section>

      {/* Brand Story / Ethos Section */}
      <section className="py-40 px-6 bg-black text-white overflow-hidden relative">
        <div className="absolute top-20 right-20 opacity-10 rotate-12">
          <Feather size={300} strokeWidth={1} />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-black uppercase tracking-[0.6em] text-gray-500 block mb-12">
              Our Philosophy
            </span>
            <h2 className="text-5xl md:text-[6rem] font-black uppercase tracking-tighter leading-[0.9] mb-16 select-none">
              Less is more.<br />
              Pixel by <span className="text-gray-700">pixel.</span>
            </h2>
            <p className="text-xl md:text-3xl text-gray-400 font-medium uppercase tracking-tight leading-relaxed mb-20">
              We started shopfeather with a single goal: to craft clothing that disappears into your life, leaving only comfort and confidence behind. Every thread is chosen, every pixel is aligned.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center gap-6 group">
                <div className="p-6 border-2 border-gray-800 pixel-border bg-transparent group-hover:bg-white group-hover:text-black transition-all shadow-none">
                  <Truck size={32} strokeWidth={2.5} />
                </div>
                <h4 className="text-lg font-black uppercase tracking-widest">Global Shipping</h4>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Free for orders over $150</p>
              </div>
              <div className="flex flex-col items-center gap-6 group">
                <div className="p-6 border-2 border-gray-800 pixel-border bg-transparent group-hover:bg-white group-hover:text-black transition-all shadow-none">
                  <ShieldCheck size={32} strokeWidth={2.5} />
                </div>
                <h4 className="text-lg font-black uppercase tracking-widest">Secure Checkout</h4>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Stripe & PayPal protected</p>
              </div>
              <div className="flex flex-col items-center gap-6 group">
                <div className="p-6 border-2 border-gray-800 pixel-border bg-transparent group-hover:bg-white group-hover:text-black transition-all shadow-none">
                  <RefreshCw size={32} strokeWidth={2.5} />
                </div>
                <h4 className="text-lg font-black uppercase tracking-widest">30-Day Returns</h4>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">No questions asked</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .outline-text {
          -webkit-text-stroke: 1px black;
          color: white;
        }
      `}} />
    </motion.main>
  );
};

export default Home;
