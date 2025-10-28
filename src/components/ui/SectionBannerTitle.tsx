import React from 'react';

interface SectionBannerTitleProps {
  title: string;
  className?: string;
  zIndex?: number;
}

export const SectionBannerTitle: React.FC<SectionBannerTitleProps> = ({
  title,
  className = '',
  zIndex = 20,
}) => {
  return (
    <header
      className={`
        sticky 
        top-18 md:top-21 lg:top-32 
        z-${zIndex} 
        bg-linear-to-br from-blue-800 via-blue-900 to-blue-950 
        text-white py-4 shadow-lg 
        overflow-hidden 
        border-b border-blue-700 
        transition-all duration-75 ease-out
        ${className}
      `}
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[20px_20px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-md">
          {title}
        </h2>
      </div>
    </header>
  );
};