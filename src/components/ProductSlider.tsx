import React, { useState, useEffect } from 'react';
    import { ChevronLeft, ChevronRight } from 'lucide-react';
    import { Product } from '../types';
    import { useCart } from '../context/CartContext';

    interface ProductSliderProps {
      title: string;
      products: Product[];
    }

    export default function ProductSlider({ title, products }: ProductSliderProps) {
      const [currentIndex, setCurrentIndex] = useState(0);
      const { addToCart } = useCart();

      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentIndex((current) =>
            current === products.length - 4 ? 0 : current + 1
          );
        }, 5000);
        return () => clearInterval(timer);
      }, [products.length]);

      const slide = (direction: 'prev' | 'next') => {
        setCurrentIndex((current) => {
          if (direction === 'prev') {
            return current === 0 ? products.length - 4 : current - 1;
          }
          return current === products.length - 4 ? 0 : current + 1;
        });
      };

      return (
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
            <div className="relative">
              <button
                onClick={() => slide('prev')}
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
              >
                <ChevronLeft className="h-6 w-6 text-purple-700" />
              </button>
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / 4)}%)`,
                  }}
                >
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="w-1/4 flex-shrink-0 px-4"
                    >
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {product.name}
                          </h3>
                          <p className="text-purple-700 font-bold mt-2">
                            S/. {product.price.toFixed(2)}
                          </p>
                          <button
                            onClick={() => addToCart(product)}
                            className="mt-4 w-full bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors"
                          >
                            Agregar al carrito
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => slide('next')}
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
              >
                <ChevronRight className="h-6 w-6 text-purple-700" />
              </button>
            </div>
          </div>
        </div>
      );
    }
