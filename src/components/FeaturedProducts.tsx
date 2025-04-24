
import React from 'react';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Solutions</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          We're curating a selection of the most effective products to help reduce microplastic exposure.
        </p>
        <div className="bg-white shadow-md rounded-lg p-8 max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h3>
          <p className="text-gray-600 mb-6">
            Our team is carefully researching and selecting the best microplastic reduction products for you.
            Check back soon for our comprehensive product recommendations.
          </p>
          <p className="text-sm text-gray-500 italic">
            Stay tuned for solutions that make a real difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
