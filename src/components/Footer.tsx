import React from 'react';
    import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

    export default function Footer() {
      return (
        <footer className="bg-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Sobre Nosotros</h3>
                <p className="text-purple-200">
                  Gustozzi es tu destino para los mejores postres y celebraciones especiales.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-purple-200 hover:text-white">Productos</a></li>
                  <li><a href="#" className="text-purple-200 hover:text-white">Promociones</a></li>
                  <li><a href="#" className="text-purple-200 hover:text-white">Locales</a></li>
                  <li><a href="#" className="text-purple-200 hover:text-white">Contacto</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                <div className="space-y-2">
                  <p className="flex items-center text-purple-200">
                    <Phone className="h-5 w-5 mr-2" />
                    +51 999 999 999
                  </p>
                  <p className="flex items-center text-purple-200">
                    <Mail className="h-5 w-5 mr-2" />
                    contacto@gustozzi.com
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-purple-200 hover:text-white">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-purple-200 hover:text-white">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-purple-200 hover:text-white">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-800 text-center text-purple-200">
              <p>&copy; 2024 Gustozzi. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      );
    }
