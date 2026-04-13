import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

    if (wishlistItems.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold text-slate-800 mb-6">My Wishlist</h1>
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">Your wishlist is empty</p>
                    <Link to="/" className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-slate-800">My Wishlist</h1>
                <button
                    onClick={clearWishlist}
                    className="text-red-600 hover:text-red-700 font-medium"
                >
                    Clear Wishlist
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistItems.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                            {item.image ? (
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-gray-400">No Image</span>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-slate-800 mb-2">{item.name}</h3>
                            <p className="text-gray-500 mb-4">${item.price?.toFixed(2)}</p>
                            <div className="flex gap-2">
                                <button className="flex-1 bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors">
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => removeFromWishlist(item.id)}
                                    className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                    aria-label="Remove from wishlist"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
