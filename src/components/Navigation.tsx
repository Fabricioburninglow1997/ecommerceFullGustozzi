import React, { useState } from 'react';
    import { Gift, Cake, Cookie, Coffee, Contact, Store, Megaphone } from 'lucide-react';
    import ProductsModal from './ProductsModal';
    import PromotionsModal from './PromotionsModal';

    const categories = [
      { name: 'Productos', icon: Store, isSpecial: true },
      { name: 'Panettoncitos', icon: Gift },
      { name: 'Mini Tortas', icon: Cake },
      { name: 'Detalles', icon: Gift },
      { name: 'Tortas', icon: Cake },
      { name: 'Porciones', icon: Cake },
      { name: 'Muffins', icon: Coffee },
      { name: 'Cookies', icon: Cookie },
      { name: 'Brownies', icon: Cookie },
      { name: 'Salados', icon: Cookie },
      { name: 'Contacto', icon: Contact, isSpecial: true }
    ];

    export default function Navigation() {
      const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);
      const [isPromotionsModalOpen, setIsPromotionsModalOpen] = useState(false);

      const handleCategoryClick = (category: string) => {
        if (category === 'Productos') {
          setIsProductsModalOpen(true);
        }
      };

      return (
        <>
          <nav className="bg-purple-700 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between space-x-4 py-3">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.name}
                      onClick={() => handleCategoryClick(category.name)}
                      className={`flex flex-col items-center group hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors ${
                        category.isSpecial ? 'bg-purple-800' : ''
                      }`}
                    >
                      <Icon className="h-5 w-5 mb-1" />
                      <span className="text-sm whitespace-nowrap">{category.name}</span>
                    </button>
                  );
                })}
                <button
                  onClick={() => setIsPromotionsModalOpen(true)}
                  className="flex flex-col items-center group hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors bg-purple-800"
                >
                  <Megaphone className="h-5 w-5 mb-1" />
                  <span className="text-sm whitespace-nowrap">Promociones</span>
                </button>
              </div>
            </div>
          </nav>

          <ProductsModal isOpen={isProductsModalOpen} onClose={() => setIsProductsModalOpen(false)} />
          <PromotionsModal isOpen={isPromotionsModalOpen} onClose={() => setIsPromotionsModalOpen(false)} />
        </>
      );
    }
