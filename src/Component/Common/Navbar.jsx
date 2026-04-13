import React from 'react';
import CategoriesDropdown from './CategoriesDropdown';
import { Link, useNavigate } from 'react-router';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { getCartCount } = useCart();
    const { wishlistItems } = useWishlist();

    return (
        <header className="w-full bg-white border-b border-gray-200">
            {/* Top Row */}
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
                        <Link to="/">ELECTRO.</Link>
                    </h1>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-6">
                    {/* Search Icon */}
                    <button
                        type="button"
                        aria-label="Search"
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>

                    {/* Wishlist Icon */}
                    <button
                        type="button"
                        aria-label="Wishlist"
                        className="text-gray-400 hover:text-gray-600 transition-colors relative"
                        onClick={() => navigate('/wishlist')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                        {wishlistItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                {wishlistItems.length}
                            </span>
                        )}
                    </button>

                    {/* Cart Icon */}
                    <button
                        type="button"
                        aria-label="Shopping Cart"
                        className="text-gray-400 hover:text-gray-600 transition-colors relative"
                        onClick={() => navigate('/cart')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                        {getCartCount() > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                {getCartCount()}
                            </span>
                        )}
                    </button>

                    {/* User Icon */}
                    <button
                        type="button"
                        aria-label="User Account"
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Bottom Row - Navigation */}
            <nav className="max-w-7xl mx-auto px-6 py-3 bg-gray-100 flex justify-between items-center rounded-b-lg">
                <ul className="flex items-center gap-8">
                    <li>
                        <CategoriesDropdown />
                    </li>
                    <li>
                        <button
                            type="button"
                            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors font-medium text-sm uppercase tracking-wide"
                        >
                            Brand
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-700 transition-colors font-medium text-sm uppercase tracking-wide"
                        >
                            Giftcards
                        </button>
                    </li>
                </ul>

                <div>
                    <Link to="/login" className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
