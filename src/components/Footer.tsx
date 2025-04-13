
import { Link } from 'react-router-dom';
import { Droplet, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <Droplet className="h-8 w-8 text-ocean-400" />
              <span className="ml-2 text-xl font-bold">MicroPlastic<span className="text-ocean-400">Info</span></span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Raising awareness about microplastics and providing solutions for a cleaner world.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-ocean-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean-400 transition-colors">
                <span className="sr-only">Email</span>
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Learn</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-ocean-400 transition-colors">
                  About Microplastics
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-400 hover:text-ocean-400 transition-colors">
                  Environmental Impact
                </Link>
              </li>
              <li>
                <Link to="/health" className="text-gray-400 hover:text-ocean-400 transition-colors">
                  Health Concerns
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-ocean-400 transition-colors">
                  Latest Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-ocean-400 transition-colors">
                  Water Filters
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-ocean-400 transition-colors">
                  Plastic Alternatives
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-ocean-400 transition-colors">
                  Clean-up Technologies
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-ocean-400 transition-colors">
                  Sustainable Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-ocean-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-ocean-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-ocean-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/affiliate" className="text-gray-400 hover:text-ocean-400 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} MicroPlasticInfo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
