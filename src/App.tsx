import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SplashScreen from './components/SplashScreen/SplashScreen';
import CustomCursor from './components/CustomCursor/CustomCursor';
import { useSplash } from './context/SplashContext';
import Home from './pages/Home/Home';

const About = lazy(() => import('./pages/About/About'));
const Products = lazy(() => import('./pages/Products/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails'));
const Quality = lazy(() => import('./pages/Quality/Quality'));
const Manufacturing = lazy(() => import('./pages/Manufacturing/Manufacturing'));
const Research = lazy(() => import('./pages/Research/Research'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] py-20">
      <div className="w-8 h-8 rounded-full border-2 border-teal-500/20 border-t-teal-500 animate-spin" />
    </div>
  );
}

export default function App() {
  const { isSplashActive, completeSplash } = useSplash();

  return (
    <>
      <AnimatePresence mode="wait">
        {isSplashActive && <SplashScreen onComplete={completeSplash} />}
      </AnimatePresence>

      <CustomCursor />

      <div className="flex flex-col min-h-screen selection:bg-teal-500 selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/quality" element={<Quality />} />
                <Route path="/capabilities" element={<Manufacturing />} />
                <Route path="/infrastructure" element={<Navigate to="/capabilities" replace />} />
                <Route path="/research" element={<Research />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}
