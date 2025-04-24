
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
  "name": "Microplastic Information Hub - Water Filters and Solutions",
  "description": "Comprehensive information about microplastics in water and effective water filter solutions to remove them.",
  "url": "https://microplastic-information-hub.com",
  "speakable": {
    "@type": "SpeakableSpecification",
    "xpath": [
      "/html/head/title",
      "//h1",
      "//h2",
      "//section[@class='py-16']/div/div/p"
    ]
  },
  "mainEntity": {
    "@type": "Article",
    "headline": "Understanding and Removing Microplastics with Water Filters",
    "description": "Learn about the impact of microplastics and discover effective water filter solutions.",
    "image": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    "author": {
      "@type": "Organization",
      "name": "Microplastic Information Center",
      "url": "https://microplastic-information-hub.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Microplastic Information Center",
      "logo": {
        "@type": "ImageObject",
        "url": "https://microplastic-information-hub.com/logo.png"
      }
    },
    "datePublished": "2023-04-22",
    "dateModified": "2025-04-24"
  },
  "offers": {
    "@type": "AggregateOffer",
    "name": "Water Filters for Microplastic Removal",
    "category": "Water Purification Products",
    "lowPrice": "19.99",
    "highPrice": "269.99",
    "offerCount": "12",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://microplastic-information-hub.com"
      }
    ]
  }
};

// FAQ Schema for common microplastic questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are microplastics and why are they dangerous?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Microplastics are tiny plastic particles less than 5mm in length. They pose health risks as they can absorb harmful chemicals and potentially release them in our bodies, affecting hormonal balance, immune system, and organ functions."
      }
    },
    {
      "@type": "Question",
      "name": "Can water filters remove microplastics from drinking water?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, specific types of water filters can effectively remove microplastics from drinking water. Look for filters with activated carbon, reverse osmosis, or ultrafiltration technologies that can filter particles as small as 0.001 microns."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best water filters for removing microplastics in the UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best water filters for microplastic removal in the UK include reverse osmosis systems, advanced carbon filtration systems, and ultrafiltration units. Popular options include PureFlow™ Advanced Water Filter, AquaGuard Home System, and UltraPure RO System."
      }
    }
  ]
};

const Index = () => {
  // Improve page loading speed and search engine optimization
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

    // Add semantic HTML attributes to improve accessibility and SEO
    document.documentElement.lang = 'en';
  }, []);

  return (
    <>
      <Helmet>
        <title>Microplastic Information Hub | Best Water Filters & Solutions for Microplastic Pollution</title>
        <meta name="description" content="Discover top-rated water filters that remove microplastics. Expert information about microplastic pollution, health impacts, and effective filtration solutions available in the UK." />
        <script type="application/ld+json">
          {JSON.stringify(homePageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <link rel="canonical" href="https://microplastic-information-hub.com" />
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
