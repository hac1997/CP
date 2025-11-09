// src/app/chamamentos/FilterClientWrapper.tsx
"use client";

import { useState, useMemo } from 'react';
import { FilterBar } from '@/components/ui/FilterBar';
import { EditalCard } from '@/components/ui/EditalCard';
import { SectionBannerTitle, SectionBannerTitleProps } from '@/components/ui/SectionBannerTitle';
import { filterEditais, sortEditaisByStatus, EditalComAno } from '@/services/editalService';
import { Inbox } from 'lucide-react';



interface Props {
  editais: EditalComAno[];
  regionais: string[];
  unidades: string[];
  tipos: string[];
  anos: number[];
}

export function FilterClientWrapper({ editais: initialEditais, regionais, unidades, tipos, anos }: Props) {
  const [filters, setFilters] = useState({
    regional: '',
    unidadePrisional: '',
    tipo: '',
    ano: '',
  });

  const filtered = useMemo(() => {
    if (!initialEditais || initialEditais.length === 0) return [];
    return sortEditaisByStatus(filterEditais(initialEditais, filters));
  }, [initialEditais, filters]);

  const proximos = filtered.filter(e => e.status === 'proximo');
  const abertos = filtered.filter(e => ['aberto', 'prorrogado'].includes(e.status));
  const emAndamento = filtered.filter(e => e.status === 'fechado');
  const concluidos = filtered.filter(e => e.status === 'concluido');

  const hasActiveFilters = Object.values(filters).some(v => v !== '');

  const handleClearFilters = () => {
    setFilters({ regional: '', unidadePrisional: '', tipo: '', ano: '' });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg p-4 sm:p-5">
        <FilterBar
          regionais={regionais}
          unidades={unidades}
          tipos={tipos}
          anos={anos}
          selectedRegional={filters.regional}
          selectedUnidade={filters.unidadePrisional}
          selectedTipo={filters.tipo}
          selectedAno={filters.ano}
          onRegionalChange={(v) => setFilters(prev => ({ ...prev, regional: v }))}
          onUnidadeChange={(v) => setFilters(prev => ({ ...prev, unidadePrisional: v }))}
          onTipoChange={(v) => setFilters(prev => ({ ...prev, tipo: v }))}
          onAnoChange={(v) => setFilters(prev => ({ ...prev, ano: v }))}
          onClearFilters={handleClearFilters}
        />
      </div>

      {filtered.length === 0 ? (
        <EmptyState hasActiveFilters={hasActiveFilters} onClearFilters={handleClearFilters} />
      ) : (
        <>
          <EditalSection title="Próximos" editais={proximos} variant="gradient" />
          <EditalSection
            title="Abertos"
            subtitle="Inclui prorrogados"
            count={abertos.length}
            editais={abertos}
            variant="solid"
          />
          <EditalSection title="Em Andamento" editais={emAndamento} variant="default" />
          <EditalSection title="Concluídos" editais={concluidos} variant="default" />
        </>
      )}
    </div>
  );
}

function EditalSection({
  title,
  subtitle,
  count,
  editais,
  variant = 'default',
}: SectionBannerTitleProps & { editais: EditalComAno[] }) {
  if (editais.length === 0) return null;

  return (
    <section className="space-y-4">
      <SectionBannerTitle title={title} subtitle={subtitle} count={count} variant={variant} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6">
        {editais.map((edital) => (
          <EditalCard
            key={`${edital.titulo}-${edital.dataPublicacao}-${edital.unidadesPrisionais}`}
            edital={edital}
          />
        ))}
      </div>
    </section>
  );
}

function EmptyState({ hasActiveFilters, onClearFilters }: { hasActiveFilters: boolean; onClearFilters: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
        <Inbox className="w-8 h-8 text-gray-400" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
        {hasActiveFilters ? 'Nenhum resultado encontrado' : 'Nenhum chamamento disponível'}
      </h3>
      <p className="text-sm text-gray-600 text-center max-w-md mb-4">
        {hasActiveFilters
          ? 'Não encontramos chamamentos com esses filtros. Tente ajustar os critérios.'
          : 'Não há chamamentos cadastrados no momento.'
        }
      </p>
      {hasActiveFilters && (
        <button onClick={onClearFilters} className="btn-primary text-sm px-4 py-2">
          Limpar Filtros
        </button>
      )}
    </div>
  );
}