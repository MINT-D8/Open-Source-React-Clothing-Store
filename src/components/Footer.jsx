import React from 'react';
import { Link } from 'react-router-dom';
import { Feather, Twitter, Instagram, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-24">
        {/* Brand */}
        <div className="max-w-xs flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="p-1 bg-white text-black pixel-border border-white shadow-none">
              <Feather size={24} strokeWidth={2.5} />
            </div>
            <span className="text-3xl font-black uppercase tracking-tighter">shopfeather</span>
          </div>
          <p className="text-gray-400 font-medium leading-relaxed">
            Crafting minimal essentials for the modern aesthetic. Quality over quantity, always.
          </p>
          <div className="flex gap-4">
            {[Twitter, Instagram, Mail, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 bg-white text-black pixel-border border-white hover:bg-black hover:text-white transition-colors shadow-none"
              >
                <Icon size={18} strokeWidth={2.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24 flex-1">
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500">Shop</h4>
            <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-gray-400 transition-colors">All Products</a>
              <a href="#" className="hover:text-gray-400 transition-colors">New Arrivals</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Bestsellers</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Sale</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500">Info</h4>
            <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-gray-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Shipping</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Returns</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex flex-col gap-6 col-span-2 sm:col-span-1">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400">Join our mailing list for updates and offers.</p>
              <div className="flex border-2 border-white pixel-border shadow-none overflow-hidden">
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="bg-transparent text-white px-4 py-3 flex-1 outline-none text-xs font-bold uppercase tracking-widest"
                />
                <button className="bg-white text-black px-4 font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-xs font-black uppercase tracking-widest text-gray-500">
          © 2026 SHOPFEATHER. ALL RIGHTS RESERVED.
        </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
          <Link to="/admin" className="hover:text-white transition-colors">Seller Portal</Link>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
