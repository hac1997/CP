import React from 'react';
import Link from 'next/link';

interface NavigationCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export const NavigationCard: React.FC<NavigationCardProps> = ({
  title,
  description,
  href,
  icon
}) => {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full border border-gray-200 hover:border-blue-500 cursor-pointer">
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
