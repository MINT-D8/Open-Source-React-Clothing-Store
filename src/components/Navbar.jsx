import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Feather, ShoppingBag, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs) => twMerge(clsx(inputs));

const Navbar = () => {
  const { setIsCartOpen, cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop All', path: '/' },
    { name: 'Apparel', path: '/?category=Apparel' },
    { name: 'Accessories', path: '/?category=Accessories' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' && !location.search;
    return location.pathname + location.search === path;
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b-2',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-4 border-black' 
          : 'bg-transparent py-8 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group z-50"
        >
          <div className="p-2 bg-black text-white pixel-border group-hover:bg-white group-hover:text-black transition-all duration-300">
            <Feather size={20} strokeWidth={3} />
          </div>
          <span className="text-2xl font-black uppercase tracking-tighter hidden sm:block">
            shopfeather
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group py-2",
                isActive(link.path) ? "text-black" : "text-gray-400 hover:text-black"
              )}
            >
              {link.name}
              <motion.span 
                initial={false}
                animate={{ width: isActive(link.path) ? '100%' : '0%' }}
                className="absolute -bottom-1 left-0 h-[2px] bg-black transition-all" 
              />
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 z-50">
          <Link
            to="/admin"
            className="p-3 hover:bg-black hover:text-white transition-all pixel-border bg-white hidden sm:flex"
          >
            <User size={18} strokeWidth={3} />
          </Link>
          
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-3 hover:bg-black hover:text-white transition-all pixel-border bg-white"
          >
            <ShoppingBag size={18} strokeWidth={3} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-2 bg-black text-white text-[8px] font-black w-6 h-6 flex items-center justify-center pixel-border border-white shadow-none"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 hover:bg-black hover:text-white transition-all pixel-border bg-white"
          >
            {isMobileMenuOpen ? <X size={18} strokeWidth={3} /> : <Menu size={18} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-center items-center p-12 gap-12"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "text-4xl font-black uppercase tracking-tighter",
                      isActive(link.path) ? "text-black" : "text-gray-300"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full h-[2px] bg-black" 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/admin"
                className="flex items-center gap-3 text-sm font-black uppercase tracking-widest"
              >
                <User size={20} strokeWidth={3} />
                Account Login
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
