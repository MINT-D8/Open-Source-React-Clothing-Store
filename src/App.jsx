import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';

// Simple protected route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('shopfeather-auth') === 'true';
  return isAuthenticated ? children : <Navigate to="/admin" />;
};

function App() {
  return (
    <CartProvider>
      <Router>
        <MainLayout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<Login />} />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
            </Routes>
          </AnimatePresence>
        </MainLayout>
      </Router>
    </CartProvider>
  );
}

export default App;
