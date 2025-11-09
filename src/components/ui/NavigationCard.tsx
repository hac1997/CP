import React from 'react';
import Link from 'next/link';

interface NavigationCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  ariaLabel?: string
}

export const NavigationCard: React.FC<NavigationCardProps> = ({
  title,
  description,
  href,
  icon,
  
}) => {
  return (
    <Link href={href} className="block h-full">
      <div
        className="
          bg-white rounded-lg shadow-md p-6 
          border border-gray-200 
          cursor-pointer h-full
           transition-transform duration-600 ease-out
          hover:shadow-xl hover:-translate-y-1 hover:border-blue-500
        "
      >
        <div className="flex items-start gap-4">
          {icon && (
            <div className="text-blue-600 text-3xl shrink-0 mt-1">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};