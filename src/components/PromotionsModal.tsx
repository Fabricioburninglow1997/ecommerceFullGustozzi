import React, { useState, useEffect } from 'react';
    import { X } from 'lucide-react';

    interface Promotion {
      title: string;
      description: string;
      imageId: string;
      link: string;
      product: {
        id: string;
        name: string;
        price: number;
        image: string;
        category: string;
        description: string;
        composition: string;
      };
    }

    interface PromotionDetails {
      title: string;
      description: string;
      image: string;
      link: string;
      isOpen: boolean;
      product: Promotion['product'];
    }

    const PromotionsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
      const [promotions, setPromotions] = useState<Promotion[]>([]);
      const [images, setImages] = useState<Record<string, string>>({});
      const [showTimer, setShowTimer] = useState(false);
      const [selectedPromotion, setSelectedPromotion] = useState<PromotionDetails | null>(null);
      const [loading, setLoading] = useState(true); // Add loading state

      useEffect(() => {
        const fetchPromotions = async () => {
          try {
            const response = await fetch('/promotions.json');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setPromotions(data);
          } catch (error) {
            console.error('Error fetching promotions:', error);
          } finally {
            setLoading(false); // Set loading to false after fetching
          }
        };
        const fetchImages = async () => {
          try {
            const response = await fetch('/images.json');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setImages(data);
          } catch (error) {
            console.error('Error fetching images:', error);
          }
        };

        if (isOpen) {
          fetchPromotions();
          fetchImages();
          setShowTimer(true);
        } else {
          setShowTimer(false);
        }
      }, [isOpen]);

      useEffect(() => {
        let timer: NodeJS.Timeout;
        if (showTimer) {
          timer = setTimeout(onClose, 10000);
        }
        return () => clearTimeout(timer);
      }, [showTimer, onClose]);

      const openPromotionDetails = (promo: Promotion) => {
        setSelectedPromotion({ ...promo, image: images[promo.imageId] || 'https://via.placeholder.com/350x150', isOpen: true, product: promo.product });
      };

      const closePromotionDetails = () => {
        setSelectedPromotion(null);
      };

      if (!isOpen || loading) return <div>Loading...</div>; // Show loading indicator

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white border border-gray-300 rounded-lg w-full max-w-2xl p-6">
            <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Promociones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {promotions.map((promo) => (
                <div key={promo.title} className="mb-4 cursor-pointer" onClick={() => openPromotionDetails(promo)}>
                  <h3 className="text-lg font-semibold text-purple-700 mb-2">{promo.title}</h3>
                  <img src={images[promo.imageId] || 'https://via.placeholder.com/350x150'} alt={promo.title} className="w-full max-h-32 object-cover mb-2" />
                  <p className="text-gray-600">{promo.description}</p>
                  <a href={promo.link} className="text-purple-700 hover:underline">Learn More</a>
                </div>
              ))}
            </div>
          </div>
          {selectedPromotion && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white border border-gray-300 rounded-lg w-96 p-6">
                <button onClick={closePromotionDetails} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </button>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{selectedPromotion.title}</h2>
                <img src={selectedPromotion.image} alt={selectedPromotion.title} className="w-full max-h-48 object-cover mb-2" />
                <p className="text-gray-600">{selectedPromotion.description}</p>
                <p className="text-gray-600">{selectedPromotion.product.composition}</p>
                <a href={selectedPromotion.link} className="text-purple-700 hover:underline">Buy Now</a>
              </div>
            </div>
          )}
        </div>
      );
    };

    export default PromotionsModal;
