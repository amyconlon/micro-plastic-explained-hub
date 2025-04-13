
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, FileText, Video, Globe, Download } from 'lucide-react';

const ResourceLink = ({ 
  title, 
  description, 
  url, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  url: string; 
  icon: React.ElementType;
}) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-100"
    >
      <div className="flex items-start">
        <div className="mr-4 flex-shrink-0 bg-ocean-100 rounded-full p-2">
          <Icon className="h-5 w-5 text-ocean-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center">
            {title}
            <ExternalLink className="ml-2 h-3 w-3 text-gray-400" />
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
};

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Additional Resources</h1>
              <p className="text-xl text-gray-300">
                Expand your knowledge with these helpful resources about microplastics
              </p>
            </div>
          </div>
        </div>
        
        {/* Educational Resources */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Educational Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResourceLink 
                title="NOAA Marine Debris Program" 
                description="Comprehensive educational material on microplastics from the National Oceanic and Atmospheric Administration."
                url="https://marinedebris.noaa.gov/discover-issue/trash-talk/what-are-microplastics"
                icon={Globe}
              />
              
              <ResourceLink 
                title="National Geographic Resource Library" 
                description="Articles and educational materials about microplastics for all age levels."
                url="https://education.nationalgeographic.org/resource/microplastics/"
                icon={BookOpen}
              />
              
              <ResourceLink 
                title="UN Environment Programme: Beat Plastic Pollution" 
                description="Global initiative to address plastic pollution with resources and action plans."
                url="https://www.unep.org/interactives/beat-plastic-pollution/"
                icon={Globe}
              />
              
              <ResourceLink 
                title="TED-Ed: The Nurdles' Quest for Ocean Domination" 
                description="Engaging video explaining how plastic microbeads (nurdles) are impacting ocean ecosystems."
                url="https://ed.ted.com/lessons/the-nurdles-quest-for-ocean-domination-kim-preshoff"
                icon={Video}
              />
            </div>
          </div>
        </section>
        
        {/* Scientific Research */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Scientific Research</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResourceLink 
                title="Science Direct: Microplastics in the Environment" 
                description="Collection of peer-reviewed scientific articles about microplastic pollution and its effects."
                url="https://www.sciencedirect.com/topics/earth-and-planetary-sciences/microplastic"
                icon={FileText}
              />
              
              <ResourceLink 
                title="World Health Organization: Microplastics in Drinking Water" 
                description="WHO's comprehensive report on current knowledge about microplastics in drinking water."
                url="https://www.who.int/publications/i/item/9789241516198"
                icon={Download}
              />
              
              <ResourceLink 
                title="PubMed: Health Effects of Microplastics" 
                description="Database of medical research studies on potential health impacts of microplastic exposure."
                url="https://pubmed.ncbi.nlm.nih.gov/?term=microplastics+health+effects"
                icon={FileText}
              />
              
              <ResourceLink 
                title="Environmental Science & Technology Journal" 
                description="Leading journal publishing cutting-edge research on environmental contaminants including microplastics."
                url="https://pubs.acs.org/journal/esthag"
                icon={BookOpen}
              />
            </div>
          </div>
        </section>
        
        {/* Organizations and Initiatives */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Organizations and Initiatives</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceLink 
                title="The Ocean Cleanup" 
                description="Nonprofit developing advanced technologies to rid the oceans of plastic."
                url="https://theoceancleanup.com/microplastics/"
                icon={Globe}
              />
              
              <ResourceLink 
                title="5 Gyres Institute" 
                description="Organization focused on plastic pollution research, education and solutions."
                url="https://www.5gyres.org/"
                icon={Globe}
              />
              
              <ResourceLink 
                title="Plastic Soup Foundation" 
                description="NGO working to stop plastic pollution at its source."
                url="https://www.plasticsoupfoundation.org/"
                icon={Globe}
              />
              
              <ResourceLink 
                title="Plastic Pollution Coalition" 
                description="Global alliance working toward a world free of plastic pollution."
                url="https://www.plasticpollutioncoalition.org/"
                icon={Globe}
              />
              
              <ResourceLink 
                title="Break Free From Plastic" 
                description="Global movement envisioning a future free from plastic pollution."
                url="https://www.breakfreefromplastic.org/"
                icon={Globe}
              />
              
              <ResourceLink 
                title="Surfrider Foundation" 
                description="Nonprofit organization dedicated to the protection and enjoyment of oceans, waves and beaches."
                url="https://www.surfrider.org/"
                icon={Globe}
              />
            </div>
          </div>
        </section>
        
        {/* Books and Documentaries */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Books and Documentaries</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Recommended Books</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <BookOpen className="h-5 w-5 mr-3 text-ocean-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Plastic Ocean</p>
                      <p className="text-sm text-gray-600">By Capt. Charles Moore - An explorer's journey into the alarming presence of plastics in the world's oceans.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <BookOpen className="h-5 w-5 mr-3 text-ocean-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Plastic Soup: An Atlas of Ocean Pollution</p>
                      <p className="text-sm text-gray-600">By Michiel Roscam Abbing - Visual journey through plastic pollution with scientific reports and case studies.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <BookOpen className="h-5 w-5 mr-3 text-ocean-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Plastic Free: How I Kicked the Plastic Habit</p>
                      <p className="text-sm text-gray-600">By Beth Terry - Personal journey with practical advice on reducing plastic use.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Documentaries</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <Video className="h-5 w-5 mr-3 text-ocean-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">A Plastic Ocean</p>
                      <p className="text-sm text-gray-600">Documentary revealing the causes and consequences of plastic pollution and introducing solutions.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Video className="h-5 w-5 mr-3 text-ocean-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">The Story of Plastic</p>
                      <p className="text-sm text-gray-600">Documentary examining the global plastic pollution crisis from extraction to disposal.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Video className="h-5 w-5 mr-3 text-ocean-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Microplastic Madness</p>
                      <p className="text-sm text-gray-600">Documentary following Brooklyn kids as they investigate plastic pollution in their community.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tools and Apps */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Digital Tools and Apps</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-3">Beat the Microbead</h3>
                <p className="text-gray-600 mb-4">
                  App that allows you to scan personal care products to check for microplastics.
                </p>
                <div className="flex space-x-2">
                  <Button className="bg-black text-white hover:bg-gray-800" size="sm">iOS</Button>
                  <Button className="bg-green-700 text-white hover:bg-green-800" size="sm">Android</Button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-3">My Little Plastic Footprint</h3>
                <p className="text-gray-600 mb-4">
                  App to help you track and reduce your plastic consumption with challenges and tips.
                </p>
                <div className="flex space-x-2">
                  <Button className="bg-black text-white hover:bg-gray-800" size="sm">iOS</Button>
                  <Button className="bg-green-700 text-white hover:bg-green-800" size="sm">Android</Button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-3">Marine Debris Tracker</h3>
                <p className="text-gray-600 mb-4">
                  Citizen science app for recording plastic pollution and contributing to research.
                </p>
                <div className="flex space-x-2">
                  <Button className="bg-black text-white hover:bg-gray-800" size="sm">iOS</Button>
                  <Button className="bg-green-700 text-white hover:bg-green-800" size="sm">Android</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-ocean-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Take Action Today</h2>
            <p className="text-xl text-ocean-100 mb-8 max-w-3xl mx-auto">
              Ready to reduce your exposure to microplastics and help protect the environment?
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/solutions">
                <Button size="lg" className="bg-white text-ocean-700 hover:bg-gray-100 w-full sm:w-auto">
                  Shop Solutions
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <NewsletterSignup />
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
