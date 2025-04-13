
import { cn } from '@/lib/utils';

interface StatCardProps {
  number: string;
  label: string;
  className?: string;
}

const StatCard = ({ number, label, className }: StatCardProps) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105", className)}>
      <div className="text-4xl font-bold text-ocean-600 mb-2">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

export default StatCard;
