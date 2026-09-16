import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SplashScreen from './components/SplashScreen/SplashScreen';
import CustomCursor from './components/CustomCursor/CustomCursor';
import { useSplash } from './context/SplashContext';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Quality from './pages/Quality/Quality';
import Manufacturing from './pages/Manufacturing/Manufacturing';
import Infrastructure from './pages/Infrastructure/Infrastructure';
import Research from './pages/Research/Research';
import Contact from './pages/Contact/Contact';

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
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/capabilities" element={<Manufacturing />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/research" element={<Research />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}
