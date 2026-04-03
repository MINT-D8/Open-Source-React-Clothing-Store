import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, Feather, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white border-l-4 border-black z-[201] flex flex-col shadow-[20px_0px_60px_rgba(0,0,0,0.3)]"
          >
            {/* Header */}
            <div className="p-10 border-b-4 border-black flex justify-between items-center bg-black text-white">
              <div className="flex items-center gap-4">
                <ShoppingBag size={24} strokeWidth={3} />
                <h2 className="text-3xl font-black uppercase tracking-tighter leading-none pt-1">Your Bag</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-3 hover:bg-white/20 transition-all pixel-border border-white shadow-none"
              >
                <X size={20} strokeWidth={3} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-10 flex flex-col gap-10 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 opacity-20">
                  <Feather size={100} strokeWidth={1} />
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl font-black uppercase tracking-widest">Bag is empty</p>
                    <p className="text-xs font-bold uppercase tracking-[0.2em]">Start your collection today</p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="pixel-button-outline px-10 py-4 text-xs font-black uppercase tracking-widest"
                  >
                    Browse Shop
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} 
                    className="flex gap-8 items-start group"
                  >
                    {/* Item Image */}
                    <div className="w-28 h-36 bg-accent border-2 border-black pixel-border p-0 shadow-none flex-shrink-0 overflow-hidden relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-500" />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col gap-3 pt-1">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-black uppercase tracking-tight text-xl leading-none">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-gray-300 hover:text-black transition-colors"
                        >
                          <Trash2 size={16} strokeWidth={3} />
                        </button>
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                          Size: <span className="text-black">{item.selectedSize || 'N/A'}</span>
                        </p>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                          Color: <span className="text-black">{item.selectedColor || 'N/A'}</span>
                        </p>
                      </div>
                      
                      <div className="mt-4 flex justify-between items-end">
                        <div className="flex items-center border-2 border-black pixel-border bg-white shadow-none overflow-hidden h-10">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-10 h-full flex items-center justify-center hover:bg-black hover:text-white transition-colors border-r-2 border-black"
                          >
                            <Minus size={12} strokeWidth={4} />
                          </button>
                          <span className="w-10 text-center text-xs font-black">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-10 h-full flex items-center justify-center hover:bg-black hover:text-white transition-colors border-l-2 border-black"
                          >
                            <Plus size={12} strokeWidth={4} />
                          </button>
                        </div>
                        <p className="text-xl font-black tracking-tighter">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-10 border-t-4 border-black bg-gray-50">
                <div className="flex flex-col gap-6 mb-10">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Subtotal</span>
                    <span className="text-4xl font-black tracking-tighter">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-400 border-t border-gray-200 pt-4">
                    <span>Shipping</span>
                    <span className="text-black">Calculated at checkout</span>
                  </div>
                </div>
                
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full pixel-button pixel-button-active py-6 text-xl font-black uppercase tracking-widest flex items-center justify-center gap-4 group"
                >
                  Checkout
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight size={24} strokeWidth={3} />
                  </motion.div>
                </Link>
                
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
