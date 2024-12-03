import React from 'react';

    const images = [
      {
        src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
        alt: 'Celebration cake',
        className: 'col-span-1 row-span-1'
      },
      {
        src: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390',
        alt: 'Chocolate cake',
        className: 'col-span-1 row-span-1'
      },
      {
        src: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729',
        alt: 'Birthday cake',
        className: 'col-span-1 row-span-1'
      },
      {
        src: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63',
        alt: 'Cupcakes',
        className: 'col-span-1 row-span-1'
      },
      {
        src: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63',
        alt: 'Special cake',
        className: 'col-span-1 row-span-2'
      }
    ];

    export default function CelebraSection() {
      return (
        <div className="py-12 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Celebra con Alegría
            </h2>
            <div className="grid grid-cols-3 gap-4 h-[600px]">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg ${image.className}`}
                >
                  <img
                    src={`${image.src}?auto=format&fit=crop&w=800&q=80`}
                    alt={image.alt}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
