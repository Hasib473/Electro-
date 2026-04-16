import React from 'react';
import SubcategoryPage from '../../Component/Common/SubcategoryPage';

const breakfastMakersProducts = [
  { id: 1, name: 'HAMILTON BEACH 3-WAY BREAKFAST STATION', originalPrice: 150, price: 135, rating: 4.6, reviews: 234, discount: 10, image: '/placeholder-breakfast1.png' },
  { id: 2, name: 'CUISINART GRIDDLE & COFFEE MAKER COMBO', originalPrice: 200, price: 180, rating: 4.7, reviews: 178, discount: 10, image: '/placeholder-breakfast2.png' },
  { id: 3, name: 'BLACK+DECKER 3-IN-1 BREAKFAST CENTER', originalPrice: 120, price: 108, rating: 4.5, reviews: 312, discount: 10, image: '/placeholder-breakfast3.png' },
  { id: 4, name: 'OSTER TOASTER OVEN & GRIDDLE COMBO', originalPrice: 180, price: 162, rating: 4.6, reviews: 156, discount: 10, image: '/placeholder-breakfast4.png' },
  { id: 5, name: 'NINJA SPECIALTY COFFEE & BREAKFAST', originalPrice: 250, price: 225, rating: 4.8, reviews: 98, discount: 10, image: '/placeholder-breakfast5.png' },
  { id: 6, name: 'MUELLER 4-SLICE TOASTER & EGG COOKER', originalPrice: 100, price: 90, rating: 4.4, reviews: 267, discount: 10, image: '/placeholder-breakfast6.png' },
  { id: 7, name: 'DASH RAPID EGG COOKER & TOASTER SET', originalPrice: 80, price: 72, rating: 4.5, reviews: 198, discount: 10, image: '/placeholder-breakfast7.png' },
  { id: 8, name: 'KALORIK 5-IN-1 BREAKFAST MAKER', originalPrice: 170, price: 153, rating: 4.6, reviews: 145, discount: 10, image: '/placeholder-breakfast8.png' },
];

const defaultFilters = {
  price: { min: '', max: '' },
  category: { 'Breakfast Station': false, 'Griddle & Coffee': false, 'Toaster Combo': false, 'Egg Cooker': false },
  brand: { 'hamilton beach': false, cuisinart: false, 'black+decker': false, oster: false, ninja: false, mueller: false },
};

const BreakfastMakersPage = () => {
  return (
    <SubcategoryPage
      title="Breakfast Makers"
      breadcrumb="Breakfast Makers"
      products={breakfastMakersProducts}
      filters={defaultFilters}
    />
  );
};

export default BreakfastMakersPage;
