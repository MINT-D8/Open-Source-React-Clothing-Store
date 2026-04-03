import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Feather, Lock, User, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    localStorage.setItem('shopfeather-auth', 'true');
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-10 border-4 border-black pixel-border bg-white shadow-none"
      >
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="p-4 bg-black text-white pixel-border border-black shadow-none">
            <Feather size={32} strokeWidth={3} />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter">Seller Portal</h2>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="SELLER@SHOPFEATHER.CC" 
                className="w-full p-4 pl-12 border-2 border-black pixel-border shadow-none focus:bg-gray-50 outline-none uppercase text-xs font-bold" 
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full p-4 pl-12 border-2 border-black pixel-border shadow-none focus:bg-gray-50 outline-none text-xs font-bold" 
              />
            </div>
          </div>

          <button 
            type="submit"
            className="pixel-button py-5 text-lg font-black uppercase tracking-widest flex items-center justify-center gap-4 group mt-4"
          >
            Login
            <ArrowRight size={20} strokeWidth={3} />
          </button>
        </form>

        <p className="mt-10 text-[10px] font-bold text-center text-gray-300 uppercase tracking-[0.2em]">
          Restricted access for authorized sellers only.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
