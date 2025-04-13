
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Simulated product data
const products = {
  waterFilters: [
    {
      id: 1,
      title: "PureFlow™ Advanced Water Filter",
      description: "Removes 99.9% of microplastics and other contaminants from your drinking water.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$129.99",
      rating: 4.8,
      linkUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "AquaGuard Home System",
      description: "Whole-house filtration system protecting all water sources in your home.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$349.99",
      rating: 4.6,
      linkUrl: "#"
    },
    {
      id: 3,
      title: "TapPure™ Faucet Filter",
      description: "Easy-to-install faucet attachment with microplastic filtering technology.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$45.99",
      rating: 4.5,
      linkUrl: "#"
    }
  ],
  homeItems: [
    {
      id: 4,
      title: "MicroCatch™ Laundry Filter Bag",
      description: "Traps microfibers from synthetic clothing during washing cycles.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$24.99",
      rating: 4.7,
      linkUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "EcoBottle™ Glass Water Bottle",
      description: "Plastic-free reusable water bottle with silicone protective sleeve.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$32.99",
      rating: 4.9,
      linkUrl: "#"
    },
    {
      id: 6,
      title: "WashPure™ Washing Machine Filter",
      description: "Attachment for your washing machine to capture microplastics.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$79.99",
      rating: 4.4,
      linkUrl: "#"
    }
  ],
  personalCare: [
    {
      id: 7,
      title: "PureBody™ Plastic-Free Soap Set",
      description: "Handcrafted soap bars with no microplastic ingredients or packaging.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$18.99",
      rating: 4.9,
      linkUrl: "#",
      featured: true
    },
    {
      id: 8,
      title: "EcoSmile™ Bamboo Toothbrush Set",
      description: "Biodegradable toothbrushes with plant-based bristles.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$14.99",
      rating: 4.6,
      linkUrl: "#"
    },
    {
      id: 9,
      title: "NaturalGlow™ Plastic-Free Cosmetics",
      description: "Makeup collection free from microplastics and harmful chemicals.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$39.99",
      rating: 4.7,
      linkUrl: "#"
    }
  ]
};

const FeaturedProducts = () => {
  const [currentTab, setCurrentTab] = useState("waterFilters");

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Recommended Solutions</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Products we've researched and recommend to help reduce your exposure to microplastics.
          </p>
        </div>
        
        <Tabs defaultValue="waterFilters" className="w-full">
          <TabsList className="w-full flex justify-center mb-8">
            <TabsTrigger 
              value="waterFilters" 
              onClick={() => setCurrentTab("waterFilters")}
              className="px-6"
            >
              Water Filters
            </TabsTrigger>
            <TabsTrigger 
              value="homeItems" 
              onClick={() => setCurrentTab("homeItems")}
              className="px-6"
            >
              Home Items
            </TabsTrigger>
            <TabsTrigger 
              value="personalCare" 
              onClick={() => setCurrentTab("personalCare")}
              className="px-6"
            >
              Personal Care
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="waterFilters" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.waterFilters.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  linkUrl={product.linkUrl}
                  featured={product.featured}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="homeItems" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.homeItems.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  linkUrl={product.linkUrl}
                  featured={product.featured}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="personalCare" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.personalCare.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  linkUrl={product.linkUrl}
                  featured={product.featured}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <Link to="/solutions">
            <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700">
              View All Solutions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
