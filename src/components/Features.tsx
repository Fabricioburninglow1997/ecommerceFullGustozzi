import React from 'react';
    import { Truck, Store, Gift, MessageSquare } from 'lucide-react';

    const features = [
      {
        icon: Truck,
        title: 'Envíos con protocolos de seguridad',
        description: 'Entrega segura garantizada'
      },
      {
        icon: Store,
        title: 'Retiro en tienda GRATIS',
        description: 'Recoge tu pedido cuando prefieras'
      },
      {
        icon: Gift,
        title: 'Personaliza tu pedido',
        description: 'Hazlo único y especial'
      },
      {
        icon: MessageSquare,
        title: 'Canales de atención',
        description: 'Estamos aquí para ayudarte'
      }
    ];

    export default function Features() {
      return (
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex flex-col items-center text-center p-6 bg-purple-50 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <Icon className="h-10 w-10 text-purple-700 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
