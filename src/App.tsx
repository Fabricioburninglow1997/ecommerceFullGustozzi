import React from 'react';
    import { CartProvider } from './context/CartContext';
    import Header from './components/Header';
    import Navigation from './components/Navigation';
    import Hero from './components/Hero';
    import Features from './components/Features';
    import ProductSlider from './components/ProductSlider';
    import CelebraSection from './components/CelebraSection';
    import Footer from './components/Footer';
    import { products } from './data/products';

    // Combine all products into a single array
    const allProducts = Object.values(products).flat();

    // Select recommended products
    const recommendedProducts = [
      products.tortas[0],
      products.miniTortas[0],
      products.panettoncitos[0],
      products.cookies[0],
      products.brownies[0],
    ];

    // Select best sellers
    const bestSellers = [
      products.tortas[1],
      products.miniTortas[1],
      products.panettoncitos[1],
      products.muffins[0],
      products.porciones[0],
    ];

    function App() {
      return (
        <CartProvider>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <Navigation />
            <main>
              <Hero />
              <Features />
              <ProductSlider title="Recomendados" products={recommendedProducts} />
              <CelebraSection />
              <ProductSlider title="Más Vendidos" products={bestSellers} />
            </main>
            <Footer />
          </div>
        </CartProvider>
      );
    }

    export default App;
