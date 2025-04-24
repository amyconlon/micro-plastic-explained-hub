
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
    <section className="py-16 bg-white" id="about-microplastics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Microplastics in Drinking Water?</h2>
            <p className="text-gray-700 mb-4">
              Microplastics are tiny plastic particles less than 5mm in length that contaminate our drinking water. Studies show that tap water and bottled water both contain significant amounts of these harmful particles.
            </p>
            <p className="text-gray-700 mb-4">
              These particles come from various sources including the breakdown of larger plastic items (secondary microplastics) or are manufactured at this tiny size (primary microplastics like microbeads in cosmetics).
            </p>
            <p className="text-gray-700 mb-6">
              Research published in scientific journals has shown that microplastics can absorb harmful chemicals and potentially release them in our bodies, posing significant health concerns including hormonal disruption and inflammation.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">How Water Filters Remove Microplastics</h3>
            <p className="text-gray-700 mb-6">
              High-quality water filters with technologies like activated carbon, reverse osmosis, and ultrafiltration can effectively remove microplastics from your drinking water, providing clean, safe water for your family.
            </p>
            <Link to="/solutions">
              <Button className="bg-ocean-600 hover:bg-ocean-700">
                Explore Water Filter Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <MicroplasticSourceCard 
              icon={Droplet}
              title="Synthetic Fibers in Water"
              description="Tiny fibers from synthetic clothing released during washing cycles contaminate our water supply."
            />
            <MicroplasticSourceCard 
              icon={ShoppingBag}
              title="Plastic Breakdown in Water"
              description="Larger plastic items breaking down over time into microplastics that enter water sources."
            />
            <MicroplasticSourceCard 
              icon={Car}
              title="Road Runoff Contamination"
              description="Vehicle tires shed microplastic particles that wash into waterways and drinking water sources."
            />
            <MicroplasticSourceCard 
              icon={Shirt}
              title="Microbeads in Water Supply"
              description="Tiny plastic beads found in cosmetics and personal care products entering water treatment systems."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAreMicroplastics;
