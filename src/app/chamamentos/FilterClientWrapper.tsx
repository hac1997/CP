// src/app/chamamentos/FilterClientWrapper.tsx
"use client"

import { useState, useMemo } from 'react'
import { FilterBar } from '@/components/ui/FilterBar'
import { EditalCard } from '@/components/ui/EditalCard'
import { SectionBannerTitle, SectionBannerTitleProps } from '@/components/ui/SectionBannerTitle'
import { filterEditais, sortEditaisByStatus, EditalComAno } from '@/services/editalService'
import { Inbox } from 'lucide-react'

interface Props {
  readonly editais: EditalComAno[]
  readonly regionais: string[]
  readonly unidades: string[]
  readonly tipos: string[]
  readonly anos: number[]
}

export function FilterClientWrapper({ editais: initialEditais, regionais, unidades, tipos, anos }: Props) {
  const [filters, setFilters] = useState({
    regional: '',
    unidadePrisional: '',
    tipo: '',
    ano: '',
    status: '',
  })

  const filtered = useMemo(() => {
    if (!initialEditais || initialEditais.length === 0) return []

    let result = filterEditais(initialEditais, {
      regional: filters.regional,
      unidadePrisional: filters.unidadePrisional,
      tipo: filters.tipo,
      ano: filters.ano,
    })

    if (filters.status) {
      if (filters.status === 'aberto') {
        result = result.filter(e => ['aberto', 'prorrogado'].includes(e.status))
      } else if (filters.status === 'emAndamento') {
        result = result.filter(e => e.status === 'fechado')
      } else {
        result = result.filter(e => e.status === filters.status)
      }
    }

    return sortEditaisByStatus(result)
  }, [initialEditais, filters])

  const proximos = filtered.filter(e => e.status === 'proximo')
  const abertos = filtered.filter(e => ['aberto', 'prorrogado'].includes(e.status))
  const emAndamento = filtered.filter(e => e.status === 'fechado')
  const concluidos = filtered.filter(e => e.status === 'concluido')

  const hasActiveFilters = Object.values(filters).some(v => v !== '')

  const handleClearFilters = () => {
    setFilters({
      regional: '',
      unidadePrisional: '',
      tipo: '',
      ano: '',
      status: '',
    })
  }

  return (
    <div className="space-y-8">
      <div className="bg-white backdrop-blur-sm border border-blue-200 rounded-2xl shadow-xl p-6 transition-all hover:shadow-2xl">
        <FilterBar
          regionais={regionais}
          unidades={unidades}
          tipos={tipos}
          anos={anos}
          selectedRegional={filters.regional}
          selectedUnidade={filters.unidadePrisional}
          selectedTipo={filters.tipo}
          selectedAno={filters.ano}
          selectedStatus={filters.status}
          onRegionalChange={(v) => setFilters(prev => ({ ...prev, regional: v }))}
          onUnidadeChange={(v) => setFilters(prev => ({ ...prev, unidadePrisional: v }))}
          onTipoChange={(v) => setFilters(prev => ({ ...prev, tipo: v }))}
          onAnoChange={(v) => setFilters(prev => ({ ...prev, ano: v }))}
          onStatusChange={(v) => setFilters(prev => ({ ...prev, status: v }))}
          onClearFilters={handleClearFilters}
        />
      </div>

      {filtered.length === 0 ? (
        <EmptyState hasActiveFilters={hasActiveFilters} onClearFilters={handleClearFilters} />
      ) : (
        <div className="[&>section]:mb-0 [&>section:not(:last-child)]:mb-10">
          <EditalSection title="Próximos" editais={proximos} variant="default" />
          <EditalSection
            title="Inscrições Abertas"
            subtitle="Inclui prorrogados"
            count={abertos.length}
            editais={abertos}
            variant="solid"
          />
          <EditalSection title="Em Andamento" editais={emAndamento} variant="default" />
          <EditalSection title="Concluídos" editais={concluidos} variant="default" />
        </div>
      )}
    </div>
  )
}

function EditalSection({
  title,
  subtitle,
  count,
  editais,
  variant = 'default',
}: Readonly<SectionBannerTitleProps & { editais: EditalComAno[] }>) {

  if (editais.length === 0) return null

  return (
    <section className="flex flex-col gap-6 mb-0">
      <SectionBannerTitle title={title} subtitle={subtitle} count={count} variant={variant} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {editais.map((edital) => (
          <EditalCard
            key={`${edital.titulo}-${edital.dataPublicacao}-${edital.unidadesPrisionais}`}
            edital={edital}
          />
        ))}
      </div>
    </section>
  )
}
interface EmptyStateProps {
  readonly hasActiveFilters: boolean
  readonly onClearFilters: () => void
}

function EmptyState({ hasActiveFilters, onClearFilters }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 bg-white rounded-2xl shadow-xl border border-gray-200">
      <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
        <Inbox className="w-10 h-10 text-blue-600" aria-hidden="true" />
      </div>
      <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-3 text-center">
        {hasActiveFilters ? 'Nenhum resultado encontrado' : 'Nenhum chamamento disponível'}
      </h3>
      <p className="font-montserrat text-base text-gray-600 text-center max-w-md mb-6">
        {hasActiveFilters
          ? 'Não encontramos chamamentos com esses filtros. Tente ajustar os critérios.'
          : 'Não há chamamentos cadastrados no momento.'}
      </p>
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg font-montserrat"
        >
          Limpar Filtros
        </button>
      )}
    </div>
  )
}

