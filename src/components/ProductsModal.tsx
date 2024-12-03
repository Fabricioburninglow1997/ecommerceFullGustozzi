import React, { useState } from 'react';
    import { X, Search, ShoppingCart } from 'lucide-react';
    import { products } from '../data/products';
    import { useCart } from '../context/CartContext';

    const categories = [
      'Panettoncitos',
      'Mini Tortas',
      'Detalles',
      'Tortas',
      'Porciones',
      'Muffins',
      'Cookies',
      'Brownies',
      'Salados'
    ];

    export default function ProductsModal({ 
      isOpen, 
      onClose 
    }: { 
      isOpen: boolean; 
      onClose: () => void;
    }) {
      const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
      const [searchTerm, setSearchTerm] = useState('');
      const { addToCart } = useCart();

      if (!isOpen) return null;

      const toggleCategory = (category: string) => {
        setSelectedCategories(current =>
          current.includes(category)
            ? current.filter(c => c !== category)
            : [...current, category]
        );
      };

      const filteredProducts = Object.values(products)
        .flat()
        .filter(product => {
          const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
          return matchesSearch && matchesCategory;
        });

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Productos</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {/* Filtros */}
                <div className="col-span-1 bg-gray-50 p-4 rounded-lg">
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Buscar productos"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                      />
                      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <h3 className="font-semibold mb-2">Categorías</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="rounded text-purple-600"
                        />
                        <span>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Productos */}
                <div className="col-span-3 overflow-y-auto max-h-[70vh]">
                  <div className="grid grid-cols-3 gap-4">
                    {filteredProducts.map(product => (
                      <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900">{product.name}</h3>
                          <p className="text-sm text-gray-500">{product.category}</p>
                          <p className="text-purple-700 font-bold mt-2">
                            S/. {product.price.toFixed(2)}
                          </p>
                          <button
                            onClick={() => addToCart(product)}
                            className="mt-4 w-full flex items-center justify-center space-x-2 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
                          >
                            <ShoppingCart className="h-4 w-4" />
                            <span>Agregar al carrito</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
