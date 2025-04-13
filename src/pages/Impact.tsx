
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Impact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="bg-coral-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Environmental Impact</h1>
              <p className="text-xl text-coral-100">
                How microplastics are affecting our planet and its ecosystems
              </p>
            </div>
          </div>
        </div>
        
        {/* Ocean Impact */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">Ocean Ecosystems</h2>
                <p className="text-gray-700 mb-4">
                  Our oceans are bearing the brunt of microplastic pollution. Every year, an estimated 8 million metric tons of plastic enter our oceans, much of which eventually breaks down into microplastics.
                </p>
                <p className="text-gray-700 mb-4">
                  These tiny particles have been found in every corner of the marine environment – from the deepest ocean trenches to Arctic sea ice. Marine animals of all sizes, from plankton to whales, are now known to ingest microplastics.
                </p>
                <p className="text-gray-700">
                  The consequences include physical injuries, blocked digestive systems, reduced feeding capacity, and toxic exposure as microplastics often carry absorbed pollutants.
                </p>
              </div>
              <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Ocean with plastic pollution" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Soil and Freshwater */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Beyond Oceans</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-teal-700">Soil Contamination</h3>
                <p className="text-gray-700 mb-4">
                  While the focus has often been on marine environments, soil may contain even higher concentrations of microplastics.
                </p>
                <p className="text-gray-700 mb-4">
                  Sources include:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                  <li>Agricultural practices (plastic mulching, fertilizers containing sewage sludge)</li>
                  <li>Irrigation with contaminated water</li>
                  <li>Atmospheric deposition</li>
                  <li>Landfill leachate</li>
                </ul>
                <p className="text-gray-700">
                  Microplastics in soil can alter soil structure, water-holding capacity, and microbial communities, potentially affecting plant growth and agricultural productivity.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-ocean-700">Freshwater Systems</h3>
                <p className="text-gray-700 mb-4">
                  Rivers, lakes, and groundwater are increasingly contaminated with microplastics, affecting freshwater ecosystems.
                </p>
                <p className="text-gray-700 mb-4">
                  Key concerns include:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                  <li>Rivers act as major transport pathways, carrying microplastics from land to sea</li>
                  <li>Freshwater species ingest microplastics, similar to marine species</li>
                  <li>Microplastics have been found in drinking water sources worldwide</li>
                  <li>Wastewater treatment plants, while removing some microplastics, cannot capture all particles</li>
                </ul>
                <p className="text-gray-700">
                  Many of our drinking water sources are affected, raising concerns about human exposure through tap water.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Food Chain */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Fish and marine life" 
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Bioaccumulation and Food Chain</h2>
                <p className="text-gray-700 mb-4">
                  One of the most concerning aspects of microplastic pollution is their potential to move up the food chain through a process called trophic transfer.
                </p>
                <p className="text-gray-700 mb-4">
                  When small organisms like plankton and filter feeders ingest microplastics, these particles can be transferred to larger predators that consume them. Studies have documented microplastics at every level of marine food webs.
                </p>
                <p className="text-gray-700 mb-4">
                  This process may lead to increased concentration of both the plastic particles themselves and the toxic chemicals they carry as we move up the food chain.
                </p>
                <p className="text-gray-700">
                  Humans, as top predators in many food chains, are potentially exposed to concentrated levels of microplastics through the consumption of fish, shellfish, and other seafood.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Climate Connection */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center">The Climate Connection</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Microplastics and climate change are interlinked environmental crises, each exacerbating the effects of the other.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Emissions from Plastic Production</h3>
                <p className="text-gray-700">
                  Plastic production relies heavily on fossil fuels, both as raw material and energy source. The production and incineration of plastic contributes significantly to greenhouse gas emissions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Microplastics and Carbon Sequestration</h3>
                <p className="text-gray-700">
                  Emerging research suggests that microplastics may interfere with the ocean's ability to sequester carbon. Plankton, which play a crucial role in carbon capture, can be negatively affected by microplastic ingestion.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Weathering and Degradation</h3>
                <p className="text-gray-700">
                  Climate change factors like increased UV radiation and higher temperatures may accelerate the breakdown of larger plastics into microplastics, potentially worsening the problem.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Economic Impact */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Economic Consequences</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Beyond environmental and health concerns, microplastic pollution carries significant economic costs.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-3 text-coral-700">Fishing Industry</h3>
                  <p className="text-gray-700">
                    Declining fish stocks and contaminated seafood impact commercial fishing and aquaculture operations.
                  </p>
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-3 text-coral-700">Tourism</h3>
                  <p className="text-gray-700">
                    Polluted beaches and waterways reduce tourism appeal, affecting local economies that depend on visitors.
                  </p>
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-3 text-coral-700">Infrastructure</h3>
                  <p className="text-gray-700">
                    Microplastics can clog water filtration systems and damage infrastructure, increasing maintenance costs.
                  </p>
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-3 text-coral-700">Healthcare</h3>
                  <p className="text-gray-700">
                    Potential health impacts may lead to increased healthcare costs and reduced productivity.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  The UN Environment Programme estimates that marine plastic pollution costs the global economy at least $13 billion annually through impacts on tourism, fishing, and shipping industries, as well as cleanup costs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solutions CTA */}
        <section className="py-16 bg-coral-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Take Action Today</h2>
            <p className="text-xl text-coral-100 mb-8 max-w-3xl mx-auto">
              Understanding the impact is the first step. Now discover how you can be part of the solution through simple changes and effective products.
            </p>
            <Link to="/solutions">
              <Button size="lg" className="bg-white text-coral-700 hover:bg-gray-100">
                Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
        
        <NewsletterSignup />
      </main>
      
      <Footer />
    </div>
  );
};

export default Impact;
