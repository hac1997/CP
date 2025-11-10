// components/ui/FilterBar.tsx
"use client"

import { useState } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { X, Filter, ChevronDown, ChevronUp } from 'lucide-react'

const selectVariants = cva(
  'w-full px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg transition-all duration-200 appearance-none cursor-pointer ' +
  'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 ' +
  'disabled:opacity-50 disabled:cursor-not-allowed ' +
  'bg-[url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23525252\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")] bg-[length:1rem] bg-[center_right_0.5rem] bg-no-repeat pr-8'
)

const labelVariants = cva(
  'block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5'
)

interface FilterBarProps {
  regionais: string[]
  unidades: string[]
  tipos: string[]
  anos: number[]
  selectedRegional: string
  selectedUnidade: string
  selectedTipo: string
  selectedAno: string
  selectedStatus: string // NOVO
  onRegionalChange: (v: string) => void
  onUnidadeChange: (v: string) => void
  onTipoChange: (v: string) => void
  onAnoChange: (v: string) => void
  onStatusChange: (v: string) => void // NOVO
  onClearFilters: () => void
}

const statusOptions = [
  { value: '', label: 'Todos os status' },
  { value: 'proximo', label: 'Próximos' },
  { value: 'aberto', label: 'Abertos' },
  { value: 'emAndamento', label: 'Em Andamento' },
  { value: 'concluido', label: 'Concluídos' },
]

export function FilterBar(props: FilterBarProps) {
  const {
    regionais, unidades, tipos, anos,
    selectedRegional, selectedUnidade, selectedTipo, selectedAno, selectedStatus,
    onRegionalChange, onUnidadeChange, onTipoChange, onAnoChange, onStatusChange, onClearFilters
  } = props

  const [isExpanded, setIsExpanded] = useState(false)

  const hasActiveFilters = selectedRegional || selectedUnidade || selectedTipo || selectedAno || selectedStatus
  const activeFiltersCount = [selectedRegional, selectedUnidade, selectedTipo, selectedAno, selectedStatus].filter(Boolean).length

  return (
    <div className="space-y-3">
      {/* Header Compacto */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center justify-center w-9 h-9 bg-blue-100 rounded-lg shrink-0">
            <Filter className="w-4 h-4 text-blue-700" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-gray-900 truncate">Filtros</h3>
            {hasActiveFilters && (
              <p className="text-[11px] text-gray-600">
                {activeFiltersCount} ativo{activeFiltersCount > 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-700 bg-red-50 rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
              aria-label="Limpar todos os filtros"
            >
              <X className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Limpar</span>
            </button>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500",
              isExpanded
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            )}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Recolher filtros" : "Expandir filtros"}
          >
            <span>{isExpanded ? 'Ocultar' : 'Filtrar'}</span>
            {isExpanded ? (
              <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Grid de Filtros */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out overflow-hidden",
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pt-1 pb-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {/* Regional */}
              <FilterSelect
                id="regional"
                label="Regional"
                value={selectedRegional}
                onChange={onRegionalChange}
                options={regionais}
                placeholder="Todas"
                isActive={!!selectedRegional}
              />

              {/* Unidade */}
              <FilterSelect
                id="unidade"
                label="Unidade"
                value={selectedUnidade}
                onChange={onUnidadeChange}
                options={unidades}
                placeholder="Todas"
                isActive={!!selectedUnidade}
              />

              {/* Tipo */}
              <FilterSelect
                id="tipo"
                label="Tipo"
                value={selectedTipo}
                onChange={onTipoChange}
                options={tipos}
                placeholder="Todos"
                isActive={!!selectedTipo}
              />

              {/* Ano */}
              <FilterSelect
                id="ano"
                label="Ano"
                value={selectedAno}
                onChange={onAnoChange}
                options={anos.map(String)}
                placeholder="Todos"
                isActive={!!selectedAno}
              />

              {/* Status */}
              <FilterSelect
                id="status"
                label="Status"
                value={selectedStatus}
                onChange={onStatusChange}
                options={statusOptions.map(o => o.value)}
                displayOptions={statusOptions.map(o => o.label)}
                placeholder="Todos"
                isActive={!!selectedStatus}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Badges de Filtros Ativos */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-200">
          {selectedRegional && (
            <FilterBadge label="Regional" value={selectedRegional} onRemove={() => onRegionalChange('')} />
          )}
          {selectedUnidade && (
            <FilterBadge label="Unidade" value={selectedUnidade} onRemove={() => onUnidadeChange('')} />
          )}
          {selectedTipo && (
            <FilterBadge label="Tipo" value={selectedTipo} onRemove={() => onTipoChange('')} />
          )}
          {selectedAno && (
            <FilterBadge label="Ano" value={selectedAno} onRemove={() => onAnoChange('')} />
          )}
          {selectedStatus && (
            <FilterBadge
              label="Status"
              value={statusOptions.find(o => o.value === selectedStatus)?.label || selectedStatus}
              onRemove={() => onStatusChange('')}
            />
          )}
        </div>
      )}
    </div>
  )
}



interface FilterSelectProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  options: (string | number)[]
  displayOptions?: string[] // NOVO: para status com labels diferentes
  placeholder: string
  isActive?: boolean
}

function FilterSelect({ 
  id, label, value, onChange, options, displayOptions, placeholder, isActive 
}: FilterSelectProps) {
  return (
    <div>
      <label htmlFor={id} className={labelVariants()}>
        <span>{label}</span>
        {isActive && (
          <span className="inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-white bg-blue-600 rounded-full">
            1
          </span>
        )}
      </label>
      <select 
        id={id} 
        value={value} 
        onChange={e => onChange(e.target.value)} 
        className={cn(
          selectVariants(),
          isActive && "border-blue-500 ring-1 ring-blue-100"
        )}
        aria-label={`Filtrar por ${label.toLowerCase()}`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt, i) => (
          <option key={opt} value={opt}>
            {displayOptions ? displayOptions[i] : opt}
          </option>
        ))}
      </select>
    </div>
  )
}

interface FilterBadgeProps {
  label: string
  value: string
  onRemove: () => void
}

function FilterBadge({ label, value, onRemove }: FilterBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-900 rounded-lg border border-blue-200 text-xs font-medium shadow-sm hover:shadow-md transition-all">
      <span className="text-[11px] font-bold text-blue-700">{label}:</span>
      <span className="max-w-[120px] truncate">{value}</span>
      <button
        onClick={onRemove}
        className="hover:bg-blue-200 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={`Remover filtro ${label}: ${value}`}
      >
        <X className="w-3.5 h-3.5" aria-hidden="true" />
      </button>
    </div>
  )
}