// components/HeroCarousel.tsx
"use client";

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/images/hero-1.jpg', alt: 'Preso trabalhando' },
  { src: '/images/hero-2.jpg', alt: 'Preso trabalhando' },
  { src: '/images/hero-3.jpg', alt: 'Preso trabalhando' },
  { src: '/images/hero-4.jpg', alt: 'Preso trabalhando' },
  { src: '/images/hero-5.jpg', alt: 'Preso trabalhando' },
  { src: '/images/hero-6.jpg', alt: 'Preso trabalhando' },
  { src: '/images/hero-7.jpg', alt: 'Preso trabalhando' },
  { src: '/images/hero-8.jpg', alt: 'Preso trabalhando' },
  { src: '/images/hero-9.jpg', alt: 'Preso trabalhando' },
  { src: '/images/hero-10.jpg', alt: 'Preso trabalhando' }
]

const ITEMS_PER_VIEW = 3;
const MAX_SLIDES = images.length - ITEMS_PER_VIEW  +1;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % MAX_SLIDES)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // A função goTo é ajustada para garantir que o índice não exceda o limite de slides
  const goTo = (index: number) => {
    setCurrent(Math.min(Math.max(0, index), MAX_SLIDES - 1))
  }

  // Avança para o próximo slide (próxima imagem)
  const next = () => {
    setCurrent((prev) => (prev + 1) % MAX_SLIDES)
  }

  // Volta para o slide anterior (imagem anterior)
  const prev = () => {
    setCurrent((prev) => (prev - 1 + MAX_SLIDES) % MAX_SLIDES)
  }

  // Calcula o valor do translateX
  // Cada item tem 1/3 da largura do container, então o movimento é de -100/3 * current %
  const translateXValue = `-${(30 / ITEMS_PER_VIEW) * current}%`;

  return (
    <section
      className="relative h-[5vh] min-h-[280px] overflow-hidden"
      aria-label="Carrossel de imagens institucionais"
      role="region"
    >
      <div className="absolute inset-0">
        {/* Container para o movimento. Sua largura é o número total de itens * 1/3 de uma tela */}
        <div
          className="flex h-full transition-transform duration-1000"
          style={{
            width: `${images.length * (100 / ITEMS_PER_VIEW)}%`,
            transform: `translateX(${translateXValue})`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              className="relative h-full w-[33.3333%]" // Tailwind w-1/3 não funciona para o container dinâmico
              aria-hidden={i < current || i >= current + ITEMS_PER_VIEW}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i < ITEMS_PER_VIEW} // prioridade apenas para as 3 primeiras
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw" // 33vw para telas maiores que mobile
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-0 scale-150 rounded-full bg-white/20 blur-xl" />
            <Image
              src="/images/PP-COLORIDO-PNG.png"
              alt="Logo Polícia Penal"
              width={70}
              height={62}
              className="relative drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Departamento de Polícia Penal
        </h1>
        <p className="mt-2 text-lg font-medium md:text-xl">
          Coordenadoria de Trabalho e Renda
        </p>
      </div>

      {/* Controles */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Imagem anterior"
        disabled={current === 0} // Desabilita se estiver no início
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Próxima imagem"
        disabled={current === MAX_SLIDES - 1} // Desabilita se estiver no fim
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores - Ajustados para representar os slides (grupos de 3) */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {/* Gera um indicador para cada slide possível (MAX_SLIDES) */}
        {Array.from({ length: MAX_SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full transition ${i === current ? 'bg-white' : 'bg-white/50'
              }`}
            aria-label={`Ir para o slide ${i + 1} (imagens ${i + 1} a ${i + ITEMS_PER_VIEW})`}
            aria-current={i === current}
          />
        ))}
      </div>
    </section>
  )
}