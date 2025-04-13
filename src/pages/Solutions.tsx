
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { Filter, Sliders, ArrowUpDown } from 'lucide-react';
import { useState } from 'react';

// Simulated product data - expanded version
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
    },
    {
      id: 10,
      title: "HydroClean Pitcher Filter",
      description: "Convenient pitcher with advanced filtration for clean, refreshing water.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$39.99",
      rating: 4.4,
      linkUrl: "#"
    },
    {
      id: 11,
      title: "NanoFilter Bottle",
      description: "Portable water bottle with built-in filter for on-the-go hydration.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$34.99",
      rating: 4.3,
      linkUrl: "#"
    },
    {
      id: 12,
      title: "UltraPure RO System",
      description: "Under-sink reverse osmosis system for maximum contaminant removal.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$249.99",
      rating: 4.7,
      linkUrl: "#",
      featured: true
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
    },
    {
      id: 13,
      title: "SustainWrap Food Storage",
      description: "Reusable beeswax wraps to replace plastic cling film.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$18.99",
      rating: 4.6,
      linkUrl: "#"
    },
    {
      id: 14,
      title: "BambooLife Kitchen Set",
      description: "Sustainable bamboo kitchenware to replace plastic utensils.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$42.99",
      rating: 4.5,
      linkUrl: "#"
    },
    {
      id: 15,
      title: "EcoStorage Container Set",
      description: "Glass food storage containers with bamboo lids.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$36.99",
      rating: 4.8,
      linkUrl: "#",
      featured: true
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
    },
    {
      id: 16,
      title: "ZeroWaste Shampoo Bar",
      description: "Solid shampoo that eliminates plastic bottles from your routine.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$12.99",
      rating: 4.5,
      linkUrl: "#"
    },
    {
      id: 17,
      title: "PureClean Dental Floss",
      description: "Biodegradable dental floss in a glass container.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$8.99",
      rating: 4.3,
      linkUrl: "#"
    },
    {
      id: 18,
      title: "EcoSkin Face Scrub",
      description: "Natural exfoliant with biodegradable ingredients instead of microbeads.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      price: "$22.99",
      rating: 4.8,
      linkUrl: "#",
      featured: true
    }
  ]
};

const Solutions = () => {
  const [currentTab, setCurrentTab] = useState("waterFilters");
  const [sortOrder, setSortOrder] = useState("featured");
  
  // Sort products based on the selected order
  const getSortedProducts = (category: keyof typeof products) => {
    const productList = [...products[category]];
    
    switch(sortOrder) {
      case "priceAsc":
        return productList.sort((a, b) => 
          parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
      case "priceDesc":
        return productList.sort((a, b) => 
          parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
      case "rating":
        return productList.sort((a, b) => b.rating - a.rating);
      case "featured":
      default:
        return productList.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="bg-teal-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Microplastic Solutions</h1>
              <p className="text-xl text-teal-100">
                Practical products and technologies to reduce your exposure to microplastics
              </p>
            </div>
          </div>
        </div>
        
        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Why Use Microplastic-Filtering Products?</h2>
              <p className="text-gray-700 mb-4">
                With microplastics found in our water, food, and air, using specialized products can help reduce your exposure and environmental impact. Our curated selection represents some of the most effective solutions available.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Affiliate Disclosure:</strong> As an Amazon Associate and affiliate for other companies, we earn from qualifying purchases. This helps support our educational content while providing you with vetted product recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter and Sort Controls */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <Tabs defaultValue="waterFilters" className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger 
                    value="waterFilters" 
                    onClick={() => setCurrentTab("waterFilters")}
                  >
                    Water Filters
                  </TabsTrigger>
                  <TabsTrigger 
                    value="homeItems" 
                    onClick={() => setCurrentTab("homeItems")}
                  >
                    Home Items
                  </TabsTrigger>
                  <TabsTrigger 
                    value="personalCare" 
                    onClick={() => setCurrentTab("personalCare")}
                  >
                    Personal Care
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              
              <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm border border-gray-200">
                <ArrowUpDown size={16} className="text-gray-500" />
                <select
                  className="text-sm bg-transparent border-none focus:outline-none"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
            
            {/* Category Description */}
            <div className="mb-8">
              {currentTab === "waterFilters" && (
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Water Filtration Solutions</h3>
                  <p className="text-gray-700">
                    Water filters designed to remove microplastics use various technologies including activated carbon, reverse osmosis, and ultrafiltration. These systems can remove particles as small as 0.001 microns, effectively eliminating microplastics from your drinking water.
                  </p>
                </div>
              )}
              
              {currentTab === "homeItems" && (
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Home Products</h3>
                  <p className="text-gray-700">
                    These products help prevent microplastics from entering the environment or from contaminating your home. From laundry solutions that catch synthetic fibers to plastic-free alternatives for common household items.
                  </p>
                </div>
              )}
              
              {currentTab === "personalCare" && (
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Care Products</h3>
                  <p className="text-gray-700">
                    Many conventional personal care products contain microplastics as ingredients or come in plastic packaging. These alternatives are both better for your health and the environment.
                  </p>
                </div>
              )}
            </div>
            
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentTab === "waterFilters" && getSortedProducts("waterFilters").map(product => (
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
              
              {currentTab === "homeItems" && getSortedProducts("homeItems").map(product => (
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
              
              {currentTab === "personalCare" && getSortedProducts("personalCare").map(product => (
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
          </div>
        </section>
        
        {/* DIY Solutions */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">DIY and Low-Cost Solutions</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Not all microplastic solutions require purchasing specialty products. Here are some affordable approaches.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-teal-700">Reduce Single-Use Plastics</h3>
                <p className="text-gray-700 mb-4">
                  One of the most effective ways to combat microplastics is to prevent larger plastics from entering the environment in the first place.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Use reusable shopping bags</li>
                  <li>Avoid products with excessive packaging</li>
                  <li>Choose glass or metal containers over plastic</li>
                  <li>Carry a reusable water bottle and coffee cup</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-teal-700">Clothing Care</h3>
                <p className="text-gray-700 mb-4">
                  Synthetic clothing is a major source of microplastic pollution. These tips can help reduce fiber shedding:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Wash synthetic clothing less frequently</li>
                  <li>Use cold water and gentle cycles</li>
                  <li>Fill your washing machine to capacity</li>
                  <li>Air dry when possible</li>
                  <li>Use a homemade filter bag (pillowcase)</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-teal-700">Water Filtration Hacks</h3>
                <p className="text-gray-700 mb-4">
                  While specialized filters are most effective, these options can help:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Use a coffee filter for basic water filtration</li>
                  <li>Let tap water settle before drinking</li>
                  <li>Consider a used/refurbished water filter</li>
                  <li>Make your own charcoal filter</li>
                  <li>Look for community filter sharing programs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Future Technologies */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Emerging Technologies</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Research is continuously advancing new solutions to the microplastic crisis. Here are some promising developments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-ocean-700">Bacterial Enzymes</h3>
                <p className="text-gray-700">
                  Scientists have discovered bacteria capable of breaking down PET plastic. Engineered enzymes based on these bacteria could potentially help degrade microplastics in the environment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-ocean-700">Magnetic Removal</h3>
                <p className="text-gray-700">
                  Research is exploring the use of magnetic nanoparticles that can attach to microplastics, allowing them to be removed from water using magnetic fields.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-ocean-700">Sound Wave Filtration</h3>
                <p className="text-gray-700">
                  Acoustic waves can be used to separate microplastics from water by creating pressure fields that move particles to collection points.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-ocean-700">Sustainable Bioplastics</h3>
                <p className="text-gray-700">
                  Next-generation bioplastics are being developed that fully biodegrade in natural environments, eliminating the risk of persistent microplastic formation.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <NewsletterSignup />
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;
