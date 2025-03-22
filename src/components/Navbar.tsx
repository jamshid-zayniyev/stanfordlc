import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

// logo 
import logo from "../assets/logo.png"

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'home', path: '/' },
    { name: 'courses', path: '/courses' },
    { name: 'team', path: '/team' },
    { name: 'faq', path: '/faq' },
    { name: 'news', path: '/news' },
    { name: 'articles', path: '/articles' },
    { name: 'gallery', path: '/gallery' },
    { name: 'contact', path: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
    { code: 'uz', name: "O'zbek", flag: 'https://flagcdn.com/w40/uz.png' }
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src={logo}
                alt="Stanford Logo"
                className="h-12 w-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-primary-600 dark:text-primary-400 font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                } px-3 py-2 text-sm font-medium transition-colors relative group`}
              >
                {t(item.name)}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${
                  location.pathname === item.path ? 'scale-x-100' : ''
                }`}></span>
              </Link>
            ))}

            <div className="flex items-center space-x-4 ml-6 border-l pl-6 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`flex items-center space-x-1 p-2 rounded-md transition-colors ${
                      i18n.language === lang.code
                        ? 'bg-primary-100 dark:bg-primary-900'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <img
                      src={lang.flag}
                      alt={lang.name}
                      className="w-6 h-4 object-cover rounded"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-gray-700 dark:text-gray-300'
                } block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {t(item.name)}
              </Link>
            ))}
            <div className="flex items-center space-x-2 px-3 py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex items-center space-x-2 p-2 rounded-md ${
                    i18n.language === lang.code
                      ? 'bg-primary-100 dark:bg-primary-900'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    className="w-6 h-4 object-cover rounded"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {lang.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;