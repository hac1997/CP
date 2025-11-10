"use client"

import { BoasPraticasSection as SectionType } from '@/types/boaspraticas'
import { ImageCarousel } from './ImageCarousel'

interface BoasPraticasSectionProps {
  section: SectionType
}

export function BoasPraticasSection({ section }: BoasPraticasSectionProps) {
  const { tipo, titulo, texto, imagens } = section

  const textoParagrafos = texto.split('\n\n').filter(p => p.trim())

  switch (tipo) {
    case '1':
      return <SectionType1 titulo={titulo} paragrafos={textoParagrafos} imagens={imagens} />
    case '2':
      return <SectionType2 titulo={titulo} paragrafos={textoParagrafos} imagens={imagens} />
    case '3':
      return <SectionType3 titulo={titulo} paragrafos={textoParagrafos} imagens={imagens} />
    case '4':
      return <SectionType4 titulo={titulo} paragrafos={textoParagrafos} imagens={imagens} />
    default:
      return null
  }
}

interface SectionProps {
  titulo: string
  paragrafos: string[]
  imagens: string[]
}

function SectionType1({ titulo, paragrafos, imagens }: SectionProps) {
  return (
    <section className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="aspect-video md:aspect-auto">
          <ImageCarousel images={imagens} className="h-full min-h-[250px]" />
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-green-50 to-white">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 border-b-4 border-green-700 pb-2 inline-block">
            {titulo}
          </h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            {paragrafos.map((paragrafo, idx) => (
              <p key={idx} className="text-justify">{paragrafo}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionType2({ titulo, paragrafos, imagens }: SectionProps) {
  return (
    <section className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-video md:aspect-[21/9]">
        {imagens.length > 0 ? (
          <img
            src={imagens[0]}
            alt={titulo}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Sem imagem</span>
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-white">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 border-b-4 border-green-700 pb-2 inline-block">
          {titulo}
        </h2>
        <div className="space-y-3 text-gray-700 leading-relaxed">
          {paragrafos.map((paragrafo, idx) => (
            <p key={idx} className="text-justify">{paragrafo}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionType3({ titulo, paragrafos, imagens }: SectionProps) {
  return (
    <section className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="order-2 md:order-1 p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 border-b-4 border-green-700 pb-2 inline-block">
            {titulo}
          </h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            {paragrafos.map((paragrafo, idx) => (
              <p key={idx} className="text-justify">{paragrafo}</p>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2 aspect-video md:aspect-auto">
          {imagens.length > 0 ? (
            <img
              src={imagens[0]}
              alt={titulo}
              className="w-full h-full object-cover min-h-[250px]"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center min-h-[250px]">
              <span className="text-gray-400">Sem imagem</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function SectionType4({ titulo, paragrafos, imagens }: SectionProps) {
  return (
    <section className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-amber-50 to-white">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4 border-b-4 border-green-700 pb-2 inline-block">
            {titulo}
          </h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            {paragrafos.map((paragrafo, idx) => (
              <p key={idx} className="text-justify">{paragrafo}</p>
            ))}
          </div>
        </div>

        <div className="aspect-video lg:aspect-auto">
          {imagens.length > 0 ? (
            <img
              src={imagens[0]}
              alt={titulo}
              className="w-full h-full object-cover min-h-[250px]"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center min-h-[250px]">
              <span className="text-gray-400">Sem imagem</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
