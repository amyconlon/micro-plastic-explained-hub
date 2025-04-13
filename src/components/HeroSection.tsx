
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import WaveAnimation from './WaveAnimation';

const HeroSection = () => {
  return (
    <div className="hero-wave relative min-h-[90vh] flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Understand and Combat the Invisible Threat of Microplastics
            </h1>
            <p className="text-lg opacity-90 mb-8">
              Microplastics are everywhere - in our water, food, and even the air we breathe. 
              Learn about their impact and discover effective solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <Button size="lg" className="bg-white text-ocean-700 hover:bg-gray-100">
                  Learn More
                </Button>
              </Link>
              <Link to="/solutions">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="relative animate-float">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Ocean water with microplastic pollution" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
                <p className="text-sm font-medium text-gray-900">
                  "Microplastics are being found in nearly every environment on Earth, from the deepest oceans to the highest mountains."
                </p>
                <p className="text-xs text-gray-500 mt-2">- Environmental Science Journal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaveAnimation />
    </div>
  );
};

export default HeroSection;
