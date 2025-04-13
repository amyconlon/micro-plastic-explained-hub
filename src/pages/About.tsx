
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="bg-ocean-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">About Microplastics</h1>
              <p className="text-xl text-ocean-100">
                Understanding the invisible threat to our environment and health
              </p>
            </div>
          </div>
        </div>
        
        {/* Definition and Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What Are Microplastics?</h2>
                <p className="text-gray-700 mb-4">
                  Microplastics are small plastic pieces less than five millimeters in length. They have become a significant environmental concern due to their widespread presence and potential harmful effects.
                </p>
                <p className="text-gray-700 mb-4">
                  These tiny particles can come from various sources and have been found in oceans, rivers, soil, air, drinking water, food, and even human bodies.
                </p>
                <p className="text-gray-700">
                  What makes microplastics particularly concerning is their ability to absorb harmful chemicals from the environment and potentially release these toxins when ingested by living organisms.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Microplastics in water" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Primary vs Secondary */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Types of Microplastics</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-ocean-700">Primary Microplastics</h3>
                <p className="text-gray-700 mb-4">
                  Primary microplastics are plastic particles that are manufactured to be small in size. They are often used in products like:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                  <li>Microbeads in personal care products (facial scrubs, toothpaste)</li>
                  <li>Pellets used in industrial manufacturing</li>
                  <li>Plastic powders in molding applications</li>
                  <li>Microfibers from synthetic textiles</li>
                </ul>
                <p className="text-gray-700">
                  Many countries have begun to ban microbeads in rinse-off cosmetic products due to their environmental impact.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-teal-700">Secondary Microplastics</h3>
                <p className="text-gray-700 mb-4">
                  Secondary microplastics result from the breakdown of larger plastic items. They form when larger plastics degrade due to:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                  <li>UV radiation (sunlight)</li>
                  <li>Physical abrasion (wind, waves)</li>
                  <li>Mechanical stress (crushing, grinding)</li>
                  <li>Chemical degradation (oxidation)</li>
                </ul>
                <p className="text-gray-700">
                  Common sources include plastic bags, bottles, packaging, and fishing gear that break down in the environment over time.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sources Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Common Sources of Microplastics</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Microplastics enter our environment through various pathways. Understanding these sources is key to reducing their impact.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Synthetic Textiles</h3>
                <p className="text-gray-700">
                  When washed, synthetic clothing (polyester, nylon, acrylic) releases thousands of microfibers. A single wash cycle can release up to 700,000 fibers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Tire Wear</h3>
                <p className="text-gray-700">
                  Vehicle tires shed plastic particles as they wear down. These particles are washed into drainage systems and waterways.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Plastic Waste</h3>
                <p className="text-gray-700">
                  Improperly disposed plastic items break down into smaller pieces over time, creating secondary microplastics.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Personal Care Products</h3>
                <p className="text-gray-700">
                  Microbeads in exfoliants, toothpastes, and some cosmetics are washed down drains and often pass through wastewater treatment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Industrial Processes</h3>
                <p className="text-gray-700">
                  Plastic pellets and powders used in manufacturing can be spilled during production, transport, or processing.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Paints and Coatings</h3>
                <p className="text-gray-700">
                  Many paints contain plastic polymers that can flake off surfaces over time, contributing to microplastic pollution.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Environmental and Health Impacts</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-coral-700">Environmental Impact</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 bg-coral-100 rounded-full p-2">
                      <div className="w-4 h-4 bg-coral-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium">Marine Life</p>
                      <p className="text-gray-600">Microplastics are ingested by marine organisms, causing physical harm, blocking digestive tracts, and reducing feeding capacity.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 bg-coral-100 rounded-full p-2">
                      <div className="w-4 h-4 bg-coral-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium">Food Chain</p>
                      <p className="text-gray-600">Plastics can transfer up the food chain as larger animals consume smaller ones, potentially affecting entire ecosystems.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 bg-coral-100 rounded-full p-2">
                      <div className="w-4 h-4 bg-coral-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium">Toxic Transfer</p>
                      <p className="text-gray-600">Microplastics can absorb and concentrate environmental pollutants, acting as vectors for harmful chemicals.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 bg-coral-100 rounded-full p-2">
                      <div className="w-4 h-4 bg-coral-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium">Soil Impact</p>
                      <p className="text-gray-600">Microplastics in soil can alter soil structure, water retention, and potentially affect plant growth and soil organisms.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-ocean-700">Health Concerns</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 bg-ocean-100 rounded-full p-2">
                      <div className="w-4 h-4 bg-ocean-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium">Human Exposure</p>
                      <p className="text-gray-600">Humans ingest microplastics through food, water, and even the air we breathe. Studies have found microplastics in human blood and organs.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 bg-ocean-100 rounded-full p-2">
                      <div className="w-4 h-4 bg-ocean-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium">Potential Toxicity</p>
                      <p className="text-gray-600">Microplastics may contain additives like phthalates, BPA, and flame retardants that could have endocrine-disrupting effects.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 bg-ocean-100 rounded-full p-2">
                      <div className="w-4 h-4 bg-ocean-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium">Immune Response</p>
                      <p className="text-gray-600">Some research suggests microplastics may trigger immune responses or inflammation in the body.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0 bg-ocean-100 rounded-full p-2">
                      <div className="w-4 h-4 bg-ocean-600 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-medium">Research Ongoing</p>
                      <p className="text-gray-600">The full extent of health impacts is still being studied, with research ongoing to better understand long-term effects.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solutions CTA */}
        <section className="py-16 bg-ocean-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Reduce Your Exposure?</h2>
            <p className="text-xl text-ocean-100 mb-8 max-w-3xl mx-auto">
              Now that you understand the problem, discover practical solutions to protect yourself and the environment from microplastics.
            </p>
            <Link to="/solutions">
              <Button size="lg" className="bg-white text-ocean-700 hover:bg-gray-100">
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

export default About;
