import React from 'react';
import SubcategoryPage from '../../Component/Common/SubcategoryPage';

const coffeeBeverageProducts = [
  { id: 1, name: 'KEURIG K-ELITE COFFEE MAKER', originalPrice: 200, price: 180, rating: 4.7, reviews: 345, discount: 10, image: '/placeholder-coffee1.png' },
  { id: 2, name: 'NESCAFÉ DOLCE GUSTO GENIO S', originalPrice: 150, price: 135, rating: 4.6, reviews: 234, discount: 10, image: '/placeholder-coffee2.png' },
  { id: 3, name: 'BREVILLE BARISTA EXPRESS ESPRESSO', originalPrice: 700, price: 630, rating: 4.9, reviews: 178, discount: 10, image: '/placeholder-coffee3.png' },
  { id: 4, name: 'DELONGHI MAGNIFICA S ESPRESSO MACHINE', originalPrice: 900, price: 810, rating: 4.8, reviews: 156, discount: 10, image: '/placeholder-coffee4.png' },
  { id: 5, name: 'NESPRESSO VERTUO NEXT COFFEE MAKER', originalPrice: 250, price: 225, rating: 4.7, reviews: 289, discount: 10, image: '/placeholder-coffee5.png' },
  { id: 6, name: 'MR. COFFEE 12-CUP COFFEE MAKER', originalPrice: 80, price: 72, rating: 4.4, reviews: 467, discount: 10, image: '/placeholder-coffee6.png' },
  { id: 7, name: 'CUISINART PERFEMP COFFEE CENTER', originalPrice: 180, price: 162, rating: 4.6, reviews: 198, discount: 10, image: '/placeholder-coffee7.png' },
  { id: 8, name: 'HAMILTON BEACH FLEXBREW DUO', originalPrice: 160, price: 144, rating: 4.5, reviews: 223, discount: 10, image: '/placeholder-coffee8.png' },
];

const defaultFilters = {
  price: { min: '', max: '' },
  category: { 'Drip Coffee Maker': false, 'Espresso Machine': false, 'Single Serve': false, 'French Press': false },
  brand: { keurig: false, nescafe: false, breville: false, delonghi: false, nespresso: false, 'mr. coffee': false, cuisinart: false, 'hamilton beach': false },
};

const CoffeeBeveragePage = () => {
  return (
    <SubcategoryPage
      title="Coffee & Beverage"
      breadcrumb="Coffee & Beverage"
      products={coffeeBeverageProducts}
      filters={defaultFilters}
    />
  );
};

export default CoffeeBeveragePage;
