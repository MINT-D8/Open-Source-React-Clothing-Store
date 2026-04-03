import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronLeft, Feather, Plus, Minus, CheckCircle, Star, Share2, Heart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0]);
      window.scrollTo(0, 0);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!product) return null;

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      addToCart({ 
        ...product, 
        quantity, 
        selectedSize, 
        selectedColor: product.colors[selectedColor].name,
        image: product.images[0] // Ensure we pass the image for the cart
      });
      setIsAdding(false);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="flex justify-between items-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] hover:text-gray-400 transition-colors"
          >
            <ChevronLeft size={14} strokeWidth={3} />
            Back to Collection
          </Link>
          <div className="flex gap-4">
            <button className="p-3 border-2 border-gray-100 pixel-border bg-white hover:bg-black hover:text-white transition-all shadow-none">
              <Share2 size={16} strokeWidth={3} />
            </button>
            <button className="p-3 border-2 border-gray-100 pixel-border bg-white hover:bg-black hover:text-white transition-all shadow-none">
              <Heart size={16} strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Image Gallery */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-6">
            <div className="col-span-2 flex flex-col gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-[3/4] border-2 transition-all pixel-border shadow-none p-0 overflow-hidden ${
                    selectedImage === idx ? 'border-black' : 'border-gray-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover grayscale" alt="" />
                </button>
              ))}
            </div>
            <div className="col-span-10">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="aspect-[3/4] border-4 border-black pixel-border p-0 shadow-none overflow-hidden bg-accent"
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
                  <Feather size={12} />
                  {product.category}
                </div>
                <div className="flex items-center gap-1">
                  <Star size={12} className="fill-black" />
                  <span className="text-xs font-black">{product.rating}</span>
                  <span className="text-[10px] text-gray-300 font-bold ml-1">(124 REVIEWS)</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                {product.name}
              </h1>
              <p className="text-4xl font-black text-black uppercase tracking-tighter">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="text-lg text-gray-500 font-medium leading-relaxed uppercase tracking-tight">
              {product.description}
            </p>

            {/* Color Selector */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
                Color: {product.colors[selectedColor].name}
              </span>
              <div className="flex gap-3">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={`w-10 h-10 border-2 transition-all pixel-border shadow-none ${
                      selectedColor === idx ? 'border-black scale-110' : 'border-gray-100'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
                  Size: {selectedSize}
                </span>
                <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[60px] h-12 flex items-center justify-center border-2 text-xs font-black uppercase transition-all pixel-border shadow-none ${
                      selectedSize === size 
                        ? 'bg-black text-white border-black' 
                        : 'bg-white text-black border-gray-100 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col gap-6 pt-6 border-t-2 border-gray-100">
              <div className="flex items-center gap-6">
                <div className="flex items-center border-2 border-black pixel-border bg-white shadow-none h-14">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  >
                    <Minus size={16} strokeWidth={3} />
                  </button>
                  <span className="w-12 text-center text-lg font-black">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  >
                    <Plus size={16} strokeWidth={3} />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="flex-1 pixel-button h-14 text-sm font-black uppercase tracking-widest flex items-center justify-center gap-4 group relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {isAdding ? (
                      <motion.div
                        key="adding"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-3"
                      >
                        Adding... <CheckCircle size={18} strokeWidth={3} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="add"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-3"
                      >
                        Add to Bag <ShoppingBag size={18} strokeWidth={3} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="p-4 border-2 border-gray-50 pixel-border bg-gray-50/30 shadow-none">
                <h4 className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Material</h4>
                <p className="text-[10px] font-black uppercase tracking-widest">100% Organic Cotton</p>
              </div>
              <div className="p-4 border-2 border-gray-50 pixel-border bg-gray-50/30 shadow-none">
                <h4 className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Shipping</h4>
                <p className="text-[10px] font-black uppercase tracking-widest">Free Express</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
