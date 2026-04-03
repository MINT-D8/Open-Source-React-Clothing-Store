import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { CreditCard, Truck, ShieldCheck, ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcessPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
      clearCart();
    }, 2500);
  };

  if (cart.length === 0 && step !== 3) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Your bag is empty</h2>
        <Link to="/" className="pixel-button px-10 py-4">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-24 px-6 pt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Checkout Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex flex-col gap-10"
                >
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Shipping <span className="text-gray-200">Info</span></h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                      <input type="email" placeholder="YOUR@EMAIL.COM" className="w-full p-4 border-2 border-black pixel-border shadow-none focus:bg-gray-50 outline-none uppercase text-xs font-bold" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                      <input type="tel" placeholder="+1 000 000 0000" className="w-full p-4 border-2 border-black pixel-border shadow-none focus:bg-gray-50 outline-none uppercase text-xs font-bold" />
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                      <input type="text" placeholder="ALEX PIXEL" className="w-full p-4 border-2 border-black pixel-border shadow-none focus:bg-gray-50 outline-none uppercase text-xs font-bold" />
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Shipping Address</label>
                      <input type="text" placeholder="123 MINIMAL STREET" className="w-full p-4 border-2 border-black pixel-border shadow-none focus:bg-gray-50 outline-none uppercase text-xs font-bold" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">City</label>
                      <input type="text" placeholder="PIXEL CITY" className="w-full p-4 border-2 border-black pixel-border shadow-none focus:bg-gray-50 outline-none uppercase text-xs font-bold" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Country</label>
                      <input type="text" placeholder="FEATHER LAND" className="w-full p-4 border-2 border-black pixel-border shadow-none focus:bg-gray-50 outline-none uppercase text-xs font-bold" />
                    </div>
                  </div>

                  <button 
                    onClick={() => setStep(2)}
                    className="pixel-button pixel-button-active py-6 text-xl font-black uppercase tracking-widest flex items-center justify-center gap-4 group mt-6"
                  >
                    Continue to Payment
                    <Truck size={24} strokeWidth={3} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex flex-col gap-10"
                >
                  <button onClick={() => setStep(1)} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-gray-400 transition-colors">
                    <ArrowLeft size={14} strokeWidth={3} /> Back to Shipping
                  </button>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Payment <span className="text-gray-200">Method</span></h2>
                  
                  <div className="p-8 border-4 border-black pixel-border bg-gray-50/50 flex flex-col gap-8 shadow-none">
                    <div className="flex justify-between items-center border-b-2 border-black pb-6">
                      <div className="flex items-center gap-4">
                        <CreditCard size={32} strokeWidth={2.5} />
                        <span className="text-lg font-black uppercase tracking-tighter">Credit or Debit Card</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-5 bg-black/10 rounded-sm" />
                        <div className="w-8 h-5 bg-black/10 rounded-sm" />
                        <div className="w-8 h-5 bg-black/10 rounded-sm" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="md:col-span-2 flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Card Number</label>
                        <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-4 border-2 border-black pixel-border shadow-none focus:bg-white outline-none text-xs font-bold" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Expiry Date</label>
                        <input type="text" placeholder="MM / YY" className="w-full p-4 border-2 border-black pixel-border shadow-none focus:bg-white outline-none text-xs font-bold" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">CVC</label>
                        <input type="text" placeholder="000" className="w-full p-4 border-2 border-black pixel-border shadow-none focus:bg-white outline-none text-xs font-bold" />
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white border-2 border-black pixel-border shadow-none">
                      <ShieldCheck size={20} className="flex-shrink-0" strokeWidth={3} />
                      <p className="text-[10px] font-bold text-gray-400 leading-relaxed uppercase tracking-widest">
                        Your transaction is secure and encrypted by Stripe. We never store your credit card details on our servers.
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={handleProcessPayment}
                    disabled={isProcessing}
                    className="pixel-button pixel-button-active py-6 text-xl font-black uppercase tracking-widest flex items-center justify-center gap-4 group mt-6"
                  >
                    {isProcessing ? (
                      <>Processing... <Loader2 size={24} strokeWidth={3} className="animate-spin" /></>
                    ) : (
                      <>Complete Purchase — ${cartTotal.toFixed(2)}</>
                    )}
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="success"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20 gap-10"
                >
                  <div className="w-32 h-32 bg-black text-white pixel-border border-black flex items-center justify-center shadow-none mb-4">
                    <CheckCircle2 size={64} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Order <span className="text-gray-200">Confirmed</span></h2>
                    <p className="text-xl text-gray-500 font-medium uppercase tracking-tight">Your minimal essentials are on the way.</p>
                  </div>
                  <p className="text-sm font-bold text-gray-300 uppercase tracking-widest">Order ID: #FEATHER-{Math.floor(Math.random() * 1000000)}</p>
                  <Link to="/" className="pixel-button px-12 py-5 text-lg font-black uppercase tracking-widest">Return to Shop</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar / Summary */}
          {step !== 3 && (
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="p-8 border-4 border-black pixel-border bg-gray-50 shadow-none">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-8 pb-4 border-b-2 border-black">Order Summary</h3>
                <div className="flex flex-col gap-6 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 items-center">
                      <div className="w-16 h-20 bg-white border-2 border-black pixel-border p-0 shadow-none flex-shrink-0 overflow-hidden">
                        <img src={item.image} className="w-full h-full object-cover grayscale" alt="" />
                      </div>
                      <div className="flex-1 flex flex-col gap-1">
                        <h4 className="text-xs font-black uppercase tracking-tight leading-tight">{item.name}</h4>
                        <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Size: {item.selectedSize} / Qty: {item.quantity}</p>
                        <p className="text-sm font-black">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t-2 border-black flex flex-col gap-4">
                  <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-gray-400">
                    <span>Shipping</span>
                    <span className="text-black">FREE</span>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <span className="text-xs font-black uppercase tracking-widest">Total</span>
                    <span className="text-3xl font-black tracking-tighter">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-2 border-dashed border-gray-200 pixel-border shadow-none">
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest leading-relaxed">
                  Every shopfeather order is packaged in 100% biodegradable materials. Less waste, more style.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
