import React, { useState } from 'react';
    import { Search, ShoppingCart, User, CakeSlice, Store } from 'lucide-react';
    import { useCart } from '../context/CartContext';
    import CartModal from './CartModal';
    import ProductsModal from './ProductsModal';

    export default function Header() {
      const { items } = useCart();
      const [isCartOpen, setIsCartOpen] = useState(false);
      const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);
      const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
      
      return (
        <>
          <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CakeSlice className="h-8 w-8 text-purple-700" />
                  <span className="ml-2 text-2xl font-bold text-purple-700">Gustozzi</span>
                </div>
                
                <div className="flex-1 max-w-lg mx-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Busca productos"
                      className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <button className="text-gray-700 hover:text-purple-700">
                    <User className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={() => setIsProductsModalOpen(true)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-purple-700"
                  >
                    <Store className="h-6 w-6" />
                    <span className="text-sm font-medium">Productos</span>
                  </button>
                  <button 
                    className="relative text-gray-700 hover:text-purple-700"
                    onClick={() => setIsCartOpen(true)}
                  >
                    <ShoppingCart className="h-6 w-6" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </header>

          <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <ProductsModal isOpen={isProductsModalOpen} onClose={() => setIsProductsModalOpen(false)} />
        </>
      );
    }
