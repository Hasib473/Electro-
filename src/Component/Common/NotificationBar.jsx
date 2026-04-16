import React, { useState, useEffect, useRef } from 'react';

const NotificationBar = () => {
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('EN');

  const currencies = ['USD', 'EUR', 'GBP', 'BDT', 'INR'];
  const languages = ['EN', 'BN', 'AR', 'ES', 'FR'];

  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const currencyRef = useRef(null);
  const languageRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setShowCurrencyDropdown(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-gray-300 text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Center: Promotional Text */}
        <div className="flex-1 text-center">
          <p className="text-sm font-medium">
            Upto 25% off Every Friday 11:00 PM to 12:00 AM
          </p>
        </div>

        {/* Right: Currency and Language Selectors */}
        <div className="flex items-center gap-6">
          {/* Currency Selector */}
          <div className="relative" ref={currencyRef}>
            <button
              onClick={() => {
                setShowCurrencyDropdown(!showCurrencyDropdown);
                setShowLanguageDropdown(false);
              }}
              className="flex items-center gap-1 hover:text-white transition-colors duration-200 focus:outline-none"
            >
              <span className="font-medium">{currency}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${
                  showCurrencyDropdown ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Currency Dropdown */}
            {showCurrencyDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                <div className="py-1">
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrency(curr);
                        setShowCurrencyDropdown(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        currency === curr ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Language Selector */}
          <div className="relative" ref={languageRef}>
            <button
              onClick={() => {
                setShowLanguageDropdown(!showLanguageDropdown);
                setShowCurrencyDropdown(false);
              }}
              className="flex items-center gap-1 hover:text-white transition-colors duration-200 focus:outline-none"
            >
              <span className="font-medium">{language}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${
                  showLanguageDropdown ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Language Dropdown */}
            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setShowLanguageDropdown(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        language === lang ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
