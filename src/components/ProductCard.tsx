
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Truck } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  linkUrl: string;
  featured?: boolean;
  ukAvailable?: boolean;
}

const ProductCard = ({
  title,
  description,
  image,
  price,
  rating,
  linkUrl,
  featured = false,
  ukAvailable = false,
}: ProductCardProps) => {
  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {featured && (
          <Badge className="absolute top-2 right-2 bg-ocean-600">
            Featured
          </Badge>
        )}
      </div>
      
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
            />
          ))}
          <span className="ml-1 text-xs text-gray-600">({rating.toFixed(1)})</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        <div className="mt-auto">
          {ukAvailable && (
            <div className="flex items-center text-sm text-teal-600 mb-3">
              <Truck size={16} className="mr-1" />
              <span>Available in UK</span>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">{price}</span>
            <a 
              href={linkUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Buy ${title}`}
            >
              <Button className="bg-ocean-600 hover:bg-ocean-700">
                Buy Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
