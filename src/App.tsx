import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Offset for fixed header: topbar(42) + mainbar(88) + navbar(44) = 174px */}
      <div style={{ marginTop: '174px' }}>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/products"    element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart"        element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
