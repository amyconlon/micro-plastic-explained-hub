
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import WhatAreMicroplastics from '@/components/WhatAreMicroplastics';
import FeaturedProducts from '@/components/FeaturedProducts';
import NewsletterSignup from '@/components/NewsletterSignup';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

// JSON-LD Structured Data for the home page
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Microplastic Information Hub",
  "description": "Comprehensive information about microplastics - their environmental impact, health risks, and effective solutions.",
  "url": "https://microplastic-information-hub.com",
  "mainEntity": {
    "@type": "Article",
    "headline": "Understanding and Combating the Invisible Threat of Microplastics",
    "description": "Learn about the impact of microplastics and discover effective solutions.",
    "image": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
  }
};

const Index = () => {
  // Improve page loading speed
  useEffect(() => {
    // Preload critical images
    const imageUrls = [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ];
    
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Microplastic Information Hub | Learn About Microplastic Pollution & Solutions</title>
        <meta name="description" content="Comprehensive information about microplastics - their environmental impact, health risks, and effective solutions. Find UK products to reduce microplastic exposure." />
        <script type="application/ld+json">
          {JSON.stringify(homePageSchema)}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <header>
          <Navbar />
        </header>
        
        <main className="flex-grow">
          <article>
            <HeroSection />
            <StatsSection />
            <WhatAreMicroplastics />
            <FeaturedProducts />
            <NewsletterSignup />
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
