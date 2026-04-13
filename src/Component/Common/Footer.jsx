import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-gray-300 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Logo and Description */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-6">
                        ELECTRO.
                    </h1>
                    <p className="text-gray-700 leading-relaxed max-w-5xl mb-3">
                        We are a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                    </p>
                    <button className="text-gray-700 hover:text-gray-900 transition-colors">
                        Read More
                    </button>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Tel */}
                    <div className="flex items-start gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 flex-shrink-0 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <div>
                            <p className="text-sm text-gray-300 mb-1">Tel</p>
                            <p className="text-white font-medium">310-437-2766</p>
                        </div>
                    </div>

                    {/* Mail */}
                    <div className="flex items-start gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 flex-shrink-0 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <div>
                            <p className="text-sm text-gray-300 mb-1">Mail</p>
                            <p className="text-white font-medium">unreal@outlook.com</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 flex-shrink-0 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <div>
                            <p className="text-sm text-gray-300 mb-1">Address</p>
                            <p className="text-white font-medium">706 Campfire Ave. Meriden,<br />CT 06450</p>
                        </div>
                    </div>

                    {/* Fax */}
                    <div className="flex items-start gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 flex-shrink-0 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                            />
                        </svg>
                        <div>
                            <p className="text-sm text-gray-300 mb-1">Fax</p>
                            <p className="text-white font-medium">+1-000-0000</p>
                        </div>
                    </div>
                </div>

                {/* Newsletter and Links */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Newsletter</h3>
                        <p className="text-gray-300 mb-8">
                            Be the first one to know about discounts, offers and events
                        </p>

                        {/* Email Input */}
                        <form className="flex gap-0 mb-8">
                            <div className="flex-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-gray-100 text-gray-900 pl-12 pr-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-gray-900 text-white px-6 py-3 rounded-r-md hover:bg-gray-800 transition-colors font-medium"
                            >
                                Submit
                            </button>
                        </form>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-6">
                            {/* Facebook */}
                            <button className="text-white hover:text-gray-300 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </button>

                            {/* X (Twitter) */}
                            <button className="text-white hover:text-gray-300 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </button>

                            {/* Instagram */}
                            <button className="text-white hover:text-gray-300 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </button>

                            {/* LinkedIn */}
                            <button className="text-white hover:text-gray-300 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {/* About */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">ABOUT</h4>
                            <ul className="space-y-4">
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        About us
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        Blog
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        Careers
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        Jobs
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        In Press
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">SUPPORT</h4>
                            <ul className="space-y-4">
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        Contact us
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        Online Chat
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        Whatsapp
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        Telegram
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        Ticketing
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">FAQ</h4>
                            <ul className="space-y-4">
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        Account
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        Manage Deliveries
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        Orders
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        Payments
                                    </button>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-white transition-colors">
                                        Returns
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-8">
                        <button className="text-gray-300 hover:text-white transition-colors">
                            Privacy policy
                        </button>
                        <button className="text-gray-300 hover:text-white transition-colors">
                            Sitemap
                        </button>
                        <button className="text-gray-300 hover:text-white transition-colors">
                            Terms of Use
                        </button>
                    </div>
                    <p className="text-gray-300 text-sm">
                        © 2000-2021, All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
