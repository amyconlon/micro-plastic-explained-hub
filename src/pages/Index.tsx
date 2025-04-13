
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import WhatAreMicroplastics from '@/components/WhatAreMicroplastics';
import FeaturedProducts from '@/components/FeaturedProducts';
import NewsletterSignup from '@/components/NewsletterSignup';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <WhatAreMicroplastics />
        <FeaturedProducts />
        <NewsletterSignup />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
