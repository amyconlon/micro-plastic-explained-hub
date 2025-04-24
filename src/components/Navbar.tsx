import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="MicroPlasticInfo Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-gray-900">MicroPlastic<span className="text-ocean-600">Info</span></span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-ocean-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-ocean-600 transition-colors">
              About Microplastics
            </Link>
            <Link to="/impact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-ocean-600 transition-colors">
              Environmental Impact
            </Link>
            <Link to="/solutions" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-ocean-600 transition-colors">
              Solutions
            </Link>
            <Link to="/resources" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-ocean-600 transition-colors">
              Resources
            </Link>
            <Link to="/solutions">
              <Button variant="default" className="ml-4 bg-ocean-600 hover:bg-ocean-700">
                Shop Solutions
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-ocean-600 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            About Microplastics
          </Link>
          <Link 
            to="/impact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Environmental Impact
          </Link>
          <Link 
            to="/solutions" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Solutions
          </Link>
          <Link 
            to="/resources" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </Link>
          <Link 
            to="/solutions" 
            className="block px-3 py-2 rounded-md text-base font-medium bg-ocean-600 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop Solutions
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
