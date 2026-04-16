import React from 'react';
import SubcategoryPage from '../../Component/Common/SubcategoryPage';

const blendersMixersProducts = [
  { id: 1, name: 'VITAMIX E310 EXPLORIAN BLENDER', originalPrice: 400, price: 360, rating: 4.9, reviews: 312, discount: 10, image: '/placeholder-blender1.png' },
  { id: 2, name: 'NINJA PROFESSIONAL COUNTERTOP BLENDER', originalPrice: 150, price: 135, rating: 4.7, reviews: 456, discount: 10, image: '/placeholder-blender2.png' },
  { id: 3, name: 'KITCHENAID 5-SPEED DIAMOND BLENDER', originalPrice: 250, price: 225, rating: 4.6, reviews: 234, discount: 10, image: '/placeholder-blender3.png' },
  { id: 4, name: 'OSTER PRO 1200 BLENDER', originalPrice: 120, price: 108, rating: 4.5, reviews: 189, discount: 10, image: '/placeholder-blender4.png' },
  { id: 5, name: 'PHILIPS DAILY COLLECTION BLENDER', originalPrice: 80, price: 72, rating: 4.4, reviews: 378, discount: 10, image: '/placeholder-blender5.png' },
  { id: 6, name: 'MAGIC BULLET PERSONAL BLENDER', originalPrice: 60, price: 54, rating: 4.3, reviews: 567, discount: 10, image: '/placeholder-blender6.png' },
  { id: 7, name: 'BLENDTEC CLASSIC 575 BLENDER', originalPrice: 450, price: 405, rating: 4.8, reviews: 145, discount: 10, image: '/placeholder-blender7.png' },
  { id: 8, name: 'BRAUN MULTIMIX 9 HAND BLENDER', originalPrice: 100, price: 90, rating: 4.6, reviews: 298, discount: 10, image: '/placeholder-blender8.png' },
];

const defaultFilters = {
  price: { min: '', max: '' },
  category: { 'Countertop Blender': false, 'Personal Blender': false, 'Hand Blender': false, 'Immersion Blender': false },
  brand: { vitamix: false, ninja: false, kitchenaid: false, oster: false, philips: false, 'magic bullet': false, blendtec: false, braun: false },
};

const BlendersMixersPage = () => {
  return (
    <SubcategoryPage
      title="Blenders & Mixers"
      breadcrumb="Blenders & Mixers"
      products={blendersMixersProducts}
      filters={defaultFilters}
    />
  );
};

export default BlendersMixersPage;
