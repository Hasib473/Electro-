import React from 'react';
import SubcategoryPage from '../../Component/Common/SubcategoryPage';

const cookersProducts = [
  { id: 1, name: 'INSTANT POT DUO 7-IN-1 ELECTRIC PRESSURE COOKER', originalPrice: 150, price: 135, rating: 4.8, reviews: 567, discount: 10, image: '/placeholder-cooker1.png' },
  { id: 2, name: 'CUISINART 6-QUART MULTICOOKER', originalPrice: 120, price: 108, rating: 4.6, reviews: 234, discount: 10, image: '/placeholder-cooker2.png' },
  { id: 3, name: 'BLACK+DECKER 6-CUP RICE COOKER', originalPrice: 60, price: 54, rating: 4.4, reviews: 389, discount: 10, image: '/placeholder-cooker3.png' },
  { id: 4, name: 'TIGER 5.5-CUP MICOM RICE COOKER', originalPrice: 200, price: 180, rating: 4.7, reviews: 178, discount: 10, image: '/placeholder-cooker4.png' },
  { id: 5, name: 'ZOJIRUSHI NEURO FUZZY RICE COOKER', originalPrice: 300, price: 270, rating: 4.9, reviews: 145, discount: 10, image: '/placeholder-cooker5.png' },
  { id: 6, name: 'NINJA FOODI 8-QUART PRESSURE COOKER', originalPrice: 350, price: 315, rating: 4.8, reviews: 267, discount: 10, image: '/placeholder-cooker6.png' },
  { id: 7, name: 'PHILIPS ALL-IN-ONE COOKER', originalPrice: 180, price: 162, rating: 4.5, reviews: 198, discount: 10, image: '/placeholder-cooker7.png' },
  { id: 8, name: 'PRESTO 06857 16-INCH ELECTRIC SKILLET', originalPrice: 100, price: 90, rating: 4.6, reviews: 312, discount: 10, image: '/placeholder-cooker8.png' },
];

const defaultFilters = {
  price: { min: '', max: '' },
  category: { 'Pressure Cooker': false, 'Rice Cooker': false, 'Slow Cooker': false, 'Multi Cooker': false },
  brand: { 'instant pot': false, cuisinart: false, 'black+decker': false, tiger: false, zojirushi: false, ninja: false, philips: false, presto: false },
};

const CookersPage = () => {
  return (
    <SubcategoryPage
      title="Cookers"
      breadcrumb="Cookers"
      products={cookersProducts}
      filters={defaultFilters}
    />
  );
};

export default CookersPage;
