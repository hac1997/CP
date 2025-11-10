// components/ui/SectionBannerTitle.tsx
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const bannerVariants = cva(
  'sticky z-10 backdrop-blur-2xl border rounded-2xl ' +
  'transition-all duration-500 ease-in-out ' +
  'shadow-[0_8px_32px_-8px_rgba(0,0,0,0.25)] ' +
  'hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.35)]',
  {
    variants: {
      size: {
        default: 'top-16 md:top-32 py-5',
        compact: 'top-12 md:top-20 py-3',
      },
      variant: {
        glass:
          'bg-gradient-to-br from-white/20 via-white/10 to-white/5 ' +
          'dark:from-neutral-800/30 dark:via-neutral-900/30 dark:to-neutral-950/20 ' +
          'border-white/40 dark:border-neutral-700/50',
        solid:
          'bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800',
        gradient:
          'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 ' +
          'text-white border-transparent shadow-lg ' +
          'hover:brightness-105',
      },
    },
    defaultVariants: { size: 'default', variant: 'glass' },
  }
)


export interface SectionBannerTitleProps {
  title: string
  className?: string
  subtitle?: string
  count?: number
  variant?: 'glass' | 'solid' | 'default' | 'gradient'
  size?: 'default' | 'compact'
}

export function SectionBannerTitle({
  title,
  subtitle,
  count,
  variant,
  size,
  className,
}: SectionBannerTitleProps) {
  return (
    <header className={cn(bannerVariants({ variant: variant === 'default' ? 'glass' : variant, size }), className)}>
      <div className="relative max-w-7xl mx-auto px-6 text-center overflow-hidden">
        {/* textura de pontos sutil */}
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:22px_22px]" />

        {/* borda interior com brilho leve */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/20 dark:border-neutral-700/30 shadow-[inset_0_0_20px_rgba(255,255,255,0.08)]" />

        <div className="relative animate-[fadeIn_0.6s_ease-in-out]">
          <h2 className="font-montserrat text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 drop-shadow-sm">
            {title}
            {count !== undefined && (
              <span className="ml-2 text-base font-medium text-neutral-500 dark:text-neutral-400">
                ({count})
              </span>
            )}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-montserrat">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </header>
  )
}
