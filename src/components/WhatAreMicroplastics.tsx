
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Droplet, 
  ShoppingBag, 
  Car, 
  Shirt, 
  ArrowRight 
} from 'lucide-react';

const MicroplasticSourceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="rounded-full bg-ocean-100 w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-ocean-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const WhatAreMicroplastics = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Microplastics?</h2>
            <p className="text-gray-700 mb-4">
              Microplastics are tiny plastic particles less than 5mm in length. They come from various sources and have become ubiquitous in our environment.
            </p>
            <p className="text-gray-700 mb-4">
              These particles are either manufactured at this small size (primary microplastics) or result from the breakdown of larger plastic items (secondary microplastics).
            </p>
            <p className="text-gray-700 mb-6">
              Research has shown that microplastics can absorb harmful chemicals and potentially release them in our bodies, posing significant health concerns.
            </p>
            <Link to="/about">
              <Button className="bg-ocean-600 hover:bg-ocean-700">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MicroplasticSourceCard 
              icon={Droplet}
              title="Synthetic Fibers"
              description="Tiny fibers from synthetic clothing released during washing and drying cycles."
            />
            <MicroplasticSourceCard 
              icon={ShoppingBag}
              title="Plastic Breakdown"
              description="Larger plastic items breaking down over time into smaller and smaller particles."
            />
            <MicroplasticSourceCard 
              icon={Car}
              title="Tire Wear"
              description="Vehicle tires shed microplastic particles that wash into waterways."
            />
            <MicroplasticSourceCard 
              icon={Shirt}
              title="Microbeads"
              description="Tiny plastic beads found in some cosmetics and personal care products."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAreMicroplastics;
