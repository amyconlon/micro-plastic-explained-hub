
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50" id="water-filters">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Water Filters for Microplastic Removal</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're curating a selection of the most effective water filters and solutions to help reduce microplastic exposure in your drinking water.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4 mb-6">
            <AlertCircle className="h-6 w-6 text-ocean-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comprehensive Water Filter Reviews Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                Our team of water quality experts is carefully testing and researching the most effective water filters for microplastic removal. We're analyzing filtration technologies including:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">Types of Effective Filtration</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span><strong>Reverse Osmosis Systems</strong> - Can remove particles as small as 0.0001 microns</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span><strong>Activated Carbon Filters</strong> - Effective for many microplastics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span><strong>Ultrafiltration Membranes</strong> - Removes particles down to 0.01 microns</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span><strong>Nanofiltration Technology</strong> - Advanced removal capabilities</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4">What We're Testing For</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span><strong>Filtration Efficiency</strong> - Percentage of microplastics removed</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span><strong>Filter Lifespan</strong> - How long before replacement is needed</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span><strong>Flow Rate & Capacity</strong> - Practical everyday usage</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span><strong>Installation & Maintenance</strong> - Ease of use for UK homes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-6">
            <h4 className="font-medium text-blue-700 mb-2">Why Use Water Filters for Microplastics?</h4>
            <p className="text-blue-600 text-sm">
              Studies have found microplastics in 94% of tap water samples in the UK. The right water filter can significantly reduce your exposure to these potentially harmful particles, improving water taste and quality while protecting your health.
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to be the first to receive our comprehensive water filter recommendations when they're published.
            </p>
            <Link to="/solutions">
              <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
                Explore Preliminary Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
