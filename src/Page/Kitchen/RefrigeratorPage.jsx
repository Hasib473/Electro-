import React from 'react';
import SubcategoryPage from '../../Component/Common/SubcategoryPage';

const refrigeratorProducts = [
  { id: 1, name: 'SAMSUNG 253L DOUBLE DOOR REFRIGERATOR', originalPrice: 500, price: 450, rating: 4.8, reviews: 234, discount: 10, image: '/placeholder-fridge1.png' },
  { id: 2, name: 'LG 260L FROST FREE REFRIGERATOR', originalPrice: 600, price: 540, rating: 4.7, reviews: 189, discount: 10, image: '/placeholder-fridge2.png' },
  { id: 3, name: 'WHIRLPOOL 198L DIRECT COOL SINGLE DOOR', originalPrice: 350, price: 315, rating: 4.6, reviews: 312, discount: 10, image: '/placeholder-fridge3.png' },
  { id: 4, name: 'HAIER 218L 3 STAR FROST FREE', originalPrice: 420, price: 378, rating: 4.5, reviews: 156, discount: 10, image: '/placeholder-fridge4.png' },
  { id: 5, name: 'SAMSUNG 280L CONVERTIBLE 5 IN 1', originalPrice: 700, price: 630, rating: 4.9, reviews: 98, discount: 10, image: '/placeholder-fridge5.png' },
  { id: 6, name: 'LG 687L SIDE BY SIDE DOOR COOLING', originalPrice: 1500, price: 1350, rating: 4.8, reviews: 76, discount: 10, image: '/placeholder-fridge6.png' },
  { id: 7, name: 'WHIRLPOOL 265L FRENCH DOOR REFRIGERATOR', originalPrice: 900, price: 810, rating: 4.7, reviews: 145, discount: 10, image: '/placeholder-fridge7.png' },
  { id: 8, name: 'PANASONIC 182L DIRECT COOL', originalPrice: 300, price: 270, rating: 4.5, reviews: 267, discount: 10, image: '/placeholder-fridge8.png' },
];

const defaultFilters = {
  price: { min: '', max: '' },
  category: { 'Single Door': false, 'Double Door': false, 'French Door': false, 'Side by Side': false },
  brand: { samsung: false, lg: false, whirlpool: false, haier: false, panasonic: false },
};

const RefrigeratorPage = () => {
  return (
    <SubcategoryPage
      title="Refrigerator"
      breadcrumb="Refrigerator"
      products={refrigeratorProducts}
      filters={defaultFilters}
    />
  );
};

export default RefrigeratorPage;
