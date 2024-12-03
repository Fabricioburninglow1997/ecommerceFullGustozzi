import { Product } from '../types';

    export const products: Record<string, Product[]> = {
      panettoncitos: [
        {
          id: 'p1',
          name: 'Panettoncito Clásico',
          price: 15.90,
          image: 'https://images.unsplash.com/photo-1606913084603-3e7702b01627?auto=format&fit=crop&w=800&q=80',
          category: 'Panettoncitos',
          description: 'Mini panetón con frutas confitadas'
        },
        {
          id: 'p2',
          name: 'Panettoncito Chocolate',
          price: 17.90,
          image: 'https://images.unsplash.com/photo-1607365134825-1b8dc70fd03f?auto=format&fit=crop&w=800&q=80',
          category: 'Panettoncitos',
          description: 'Mini panetón con chispas de chocolate'
        }
      ],
      miniTortas: [
        {
          id: 'm1',
          name: 'Mini Torta Chocolate',
          price: 25.90,
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
          category: 'Mini Tortas',
          description: 'Mini torta de chocolate con ganache'
        },
        {
          id: 'm2',
          name: 'Mini Red Velvet',
          price: 27.90,
          image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=800&q=80',
          category: 'Mini Tortas',
          description: 'Mini torta red velvet con frosting'
        }
      ],
      tortas: [
        {
          id: 't1',
          name: 'Torta Tres Leches',
          price: 89.90,
          image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80',
          category: 'Tortas',
          description: 'Torta tres leches clásica'
        },
        {
          id: 't2',
          name: 'Torta de Chocolate',
          price: 95.90,
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
          category: 'Tortas',
          description: 'Torta de chocolate premium'
        }
      ],
      porciones: [
        {
          id: 'po1',
          name: 'Porción Tres Leches',
          price: 12.90,
          image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80',
          category: 'Porciones',
          description: 'Porción individual de tres leches'
        }
      ],
      muffins: [
        {
          id: 'mu1',
          name: 'Muffin Arándanos',
          price: 8.90,
          image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80',
          category: 'Muffins',
          description: 'Muffin con arándanos frescos'
        }
      ],
      cookies: [
        {
          id: 'c1',
          name: 'Cookie Chocolate',
          price: 6.90,
          image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80',
          category: 'Cookies',
          description: 'Cookie con chispas de chocolate'
        }
      ],
      brownies: [
        {
          id: 'b1',
          name: 'Brownie Clásico',
          price: 7.90,
          image: 'https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?auto=format&fit=crop&w=800&q=80',
          category: 'Brownies',
          description: 'Brownie húmedo con nueces'
        }
      ],
      salados: [
        {
          id: 's1',
          name: 'Empanada de Pollo',
          price: 8.90,
          image: 'https://images.unsplash.com/photo-1628824851012-3f3109b4d115?auto=format&fit=crop&w=800&q=80',
          category: 'Salados',
          description: 'Empanada horneada de pollo'
        }
      ]
    };
