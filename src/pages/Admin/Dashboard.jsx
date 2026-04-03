import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  TrendingUp, 
  Users, 
  Settings, 
  Plus, 
  Feather, 
  Search, 
  ArrowUpRight, 
  MoreVertical,
  Edit,
  Trash2
} from 'lucide-react';
import { products } from '../../data/products';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const stats = [
    { name: 'Total Revenue', value: '$12,450.00', icon: TrendingUp, change: '+12.5%', color: 'bg-black text-white' },
    { name: 'Active Orders', value: '48', icon: Package, change: '+5', color: 'bg-white text-black border-2 border-black pixel-border' },
    { name: 'Total Customers', value: '1,240', icon: Users, change: '+84', color: 'bg-white text-black border-2 border-black pixel-border' },
    { name: 'Platform Fee (5%)', value: '-$622.50', icon: Settings, change: 'Automated', color: 'bg-gray-100 text-gray-500 border-2 border-gray-200 pixel-border' },
  ];

  return (
    <div className="min-h-screen bg-white pb-24 px-6 pt-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b-4 border-black pb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">
              <Feather size={12} strokeWidth={3} />
              Seller Administration
            </div>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Seller <span className="text-gray-100 outline-text">Dash</span>
            </h1>
          </div>
          <button className="pixel-button py-5 px-10 text-lg font-black uppercase tracking-widest flex items-center gap-4 group">
            Add Product <Plus size={20} strokeWidth={4} />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 ${stat.color} shadow-none flex flex-col gap-6`}
            >
              <div className="flex justify-between items-center">
                <stat.icon size={24} strokeWidth={3} />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{stat.change}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">{stat.name}</span>
                <span className="text-3xl font-black tracking-tighter">{stat.value}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Management Section */}
        <div className="flex flex-col gap-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Inventory Management</h2>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input 
                type="text" 
                placeholder="SEARCH INVENTORY..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pl-12 border-2 border-black pixel-border shadow-none focus:bg-gray-50 outline-none uppercase text-xs font-bold" 
              />
            </div>
          </div>

          <div className="overflow-x-auto border-4 border-black pixel-border shadow-none bg-white">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-4 border-black bg-black text-white">
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest">Product Details</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-center">Price</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-center">Status</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-center">Inventory</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr key={product.id} className="border-b-2 border-gray-100 hover:bg-gray-50 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-16 bg-accent border-2 border-black pixel-border p-0 shadow-none overflow-hidden">
                          <img src={product.images[0]} className="w-full h-full object-cover grayscale" alt="" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-black uppercase tracking-tight">{product.name}</span>
                          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{product.category}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-center text-sm font-black">${product.price.toFixed(2)}</td>
                    <td className="p-6 text-center">
                      <span className="px-3 py-1 bg-black text-white text-[8px] font-black uppercase tracking-widest pixel-border border-black shadow-none">Active</span>
                    </td>
                    <td className="p-6 text-center text-sm font-black">128 UNITS</td>
                    <td className="p-6 text-right">
                      <div className="flex justify-end gap-3">
                        <button className="p-2 border-2 border-black pixel-border bg-white hover:bg-black hover:text-white transition-all shadow-none">
                          <Edit size={16} strokeWidth={3} />
                        </button>
                        <button className="p-2 border-2 border-black pixel-border bg-white hover:bg-black hover:text-white transition-all shadow-none">
                          <Trash2 size={16} strokeWidth={3} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .outline-text {
          -webkit-text-stroke: 1px black;
          color: white;
        }
      `}} />
    </div>
  );
};

export default Dashboard;
