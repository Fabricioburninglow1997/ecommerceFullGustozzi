import React from 'react';

    export default function Hero() {
      return (
        <div className="relative bg-purple-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center justify-between">
              <div className="w-1/2">
                <h1 className="text-6xl font-bold text-purple-700 mb-6">
                  LLÉNATE DE<br />
                  <span className="text-yellow-400">ALEGRÍA</span>
                </h1>
                <button className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-colors">
                  Ver más
                </button>
              </div>
              <div className="w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
                  alt="Delicious cakes"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
