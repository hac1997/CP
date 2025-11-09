// components/ui/SectionBannerTitle.tsx
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const bannerVariants = cva(
  'sticky top-0 z-10 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 text-white py-4 shadow-md',
  {
    variants: {
      size: {
        default: 'top-16 md:top-32',
      },
    },
    defaultVariants: { size: 'default' },
  }
)


export interface SectionBannerTitleProps {
  title: string;
  className?: string
  subtitle?: string;
  count?: number;
  variant?: 'default' | 'gradient' | 'solid';
}

export function SectionBannerTitle({ title, className }: SectionBannerTitleProps) {
  return (
    <header className={cn(bannerVariants(), className)}>
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:20px_20px]" />
        <h2 className="relative text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>
      </div>
    </header>
  )
}