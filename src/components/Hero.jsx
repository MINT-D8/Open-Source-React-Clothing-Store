import React from 'react';
import { motion } from 'framer-motion';
import { Feather, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-6 md:grid-cols-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-black aspect-square" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="mb-12"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] mb-12 pixel-border shadow-none"
          >
            <Feather size={12} strokeWidth={3} />
            COLLECTION 2026
          </motion.div>

          <h1 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.85] mb-8 select-none">
            shop<br />
            <span className="text-gray-100 outline-text">feather</span>
          </h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-500 max-w-xl mx-auto mb-16 font-medium leading-relaxed uppercase tracking-tight"
          >
            A curated study in <span className="text-black font-black">minimalism</span> and pixel-perfect aesthetics.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={() => document.getElementById('new-arrivals')?.scrollIntoView({ behavior: 'smooth' })}
              className="pixel-button text-lg font-black uppercase tracking-widest px-12 py-5 flex items-center gap-4 group"
            >
              Shop Now
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <Link
              to="/?category=Apparel"
              className="text-sm font-black uppercase tracking-widest border-b-4 border-black pb-1 hover:pb-2 transition-all"
            >
              Explore Apparel
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">Discover</span>
          <ChevronDown size={18} className="text-gray-300" />
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .outline-text {
          -webkit-text-stroke: 1px black;
          color: white;
        }
      `}} />
    </section>
  );
};

export default Hero;
