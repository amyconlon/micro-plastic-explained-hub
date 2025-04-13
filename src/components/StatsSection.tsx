
import StatCard from './StatCard';

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">The Scale of the Problem</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Microplastics have become a global crisis affecting our environment and health.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            number="8M" 
            label="Metric tons of plastic enter our oceans annually"
          />
          <StatCard 
            number="5.25T" 
            label="Plastic particles are floating in the oceans"
            className="bg-ocean-50"
          />
          <StatCard 
            number="83%" 
            label="Of tap water samples contain plastic particles"
            className="bg-ocean-50"
          />
          <StatCard 
            number="90%" 
            label="Of table salt brands contain microplastics"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
