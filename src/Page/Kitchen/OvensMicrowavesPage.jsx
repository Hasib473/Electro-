import React from 'react';
import SubcategoryPage from '../../Component/Common/SubcategoryPage';

const ovensMicrowavesProducts = [
  { id: 1, name: 'SAMSUNG 28L SOLO MICROWAVE OVEN', originalPrice: 200, price: 180, rating: 4.6, reviews: 178, discount: 10, image: '/placeholder-microwave1.png' },
  { id: 2, name: 'LG 32L CONVECTION MICROWAVE OVEN', originalPrice: 350, price: 315, rating: 4.7, reviews: 234, discount: 10, image: '/placeholder-microwave2.png' },
  { id: 3, name: 'PANASONIC 20L SOLO MICROWAVE', originalPrice: 150, price: 135, rating: 4.5, reviews: 312, discount: 10, image: '/placeholder-microwave3.png' },
  { id: 4, name: 'WHIRLPOOL 25L GRILL MICROWAVE OVEN', originalPrice: 280, price: 252, rating: 4.6, reviews: 156, discount: 10, image: '/placeholder-microwave4.png' },
  { id: 5, name: 'SAMSUNG 60L BUILT-IN ELECTRIC OVEN', originalPrice: 800, price: 720, rating: 4.8, reviews: 89, discount: 10, image: '/placeholder-oven1.png' },
  { id: 6, name: 'BOSCH 71L COMPACT BUILT-IN OVEN', originalPrice: 950, price: 855, rating: 4.9, reviews: 67, discount: 10, image: '/placeholder-oven2.png' },
  { id: 7, name: 'LG 42L CONVECTION MICROWAVE OVEN', originalPrice: 450, price: 405, rating: 4.7, reviews: 145, discount: 10, image: '/placeholder-microwave5.png' },
  { id: 8, name: 'IFB 30L CONVECTION MICROWAVE', originalPrice: 320, price: 288, rating: 4.6, reviews: 198, discount: 10, image: '/placeholder-microwave6.png' },
];

const defaultFilters = {
  price: { min: '', max: '' },
  category: { 'Solo Microwave': false, 'Grill Microwave': false, 'Convection Microwave': false, 'Built-in Oven': false },
  brand: { samsung: false, lg: false, panasonic: false, whirlpool: false, bosch: false, ifb: false },
};

const OvensMicrowavesPage = () => {
  return (
    <SubcategoryPage
      title="Ovens & Microwaves"
      breadcrumb="Ovens & Microwaves"
      products={ovensMicrowavesProducts}
      filters={defaultFilters}
    />
  );
};

export default OvensMicrowavesPage;
