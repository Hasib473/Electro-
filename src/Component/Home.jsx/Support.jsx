import React from 'react';
import supportImage from '../../assets/supportimg.jpg';

const Support = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left - Image */}
                    <div className="flex justify-center">
                        <img
                            src={supportImage}
                            alt="Happy customers shopping online"
                            className="w-full max-w-md lg:max-w-lg h-auto rounded-lg object-cover"
                        />
                    </div>

                    {/* Right - Content */}
                    <div className=" lg:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                            EASY, QUICK, & HASSLE-FREE!
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Feature 1 */}
                            <div className="flex items-center gap-3">
                                <svg
                                    className="w-6 h-6 text-gray-700 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span className="text-gray-700">24/7 Support</span>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-center gap-3">
                                <svg
                                    className="w-6 h-6 text-gray-700 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                                <span className="text-gray-700">World wide Shipping</span>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-center gap-3">
                                <svg
                                    className="w-6 h-6 text-gray-700 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    />
                                </svg>
                                <span className="text-gray-700">30 Day Return Policy</span>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex items-center gap-3">
                                <svg
                                    className="w-6 h-6 text-gray-700 flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                                    />
                                </svg>
                                <span className="text-gray-700">Free Delivery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;