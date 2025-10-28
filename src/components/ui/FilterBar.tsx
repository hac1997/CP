"use client";

import React from 'react';

interface FilterBarProps {
  regionais: string[];
  unidades: string[];
  tipos: string[];
  selectedRegional: string;
  selectedUnidade: string;
  selectedTipo: string;
  onRegionalChange: (value: string) => void;
  onUnidadeChange: (value: string) => void;
  onTipoChange: (value: string) => void;
  onClearFilters: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  regionais,
  unidades,
  tipos,
  selectedRegional,
  selectedUnidade,
  selectedTipo,
  onRegionalChange,
  onUnidadeChange,
  onTipoChange,
  onClearFilters
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <label htmlFor="regional" className="block text-sm font-semibold text-gray-700 mb-2">
          Regional
        </label>
        <select
          id="regional"
          value={selectedRegional}
          onChange={(e) => onRegionalChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 transition-all hover:bg-white"
        >
          <option value="">Todas as Regionais</option>
          {regionais.map(regional => (
            <option key={regional} value={regional}>{regional}</option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label htmlFor="unidade" className="block text-sm font-semibold text-gray-700 mb-2">
          Unidade Prisional
        </label>
        <select
          id="unidade"
          value={selectedUnidade}
          onChange={(e) => onUnidadeChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 transition-all hover:bg-white"
        >
          <option value="">Todas as Unidades</option>
          {unidades.map(unidade => (
            <option key={unidade} value={unidade}>{unidade}</option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label htmlFor="tipo" className="block text-sm font-semibold text-gray-700 mb-2">
          Tipo de Chamamento
        </label>
        <select
          id="tipo"
          value={selectedTipo}
          onChange={(e) => onTipoChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 transition-all hover:bg-white"
        >
          <option value="">Todos os Tipos</option>
          {tipos.map(tipo => (
            <option key={tipo} value={tipo}>{tipo}</option>
          ))}
        </select>
      </div>

      <div className="flex items-end">
        <button
          onClick={onClearFilters}
          className="px-6 py-3 bg-linear-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 font-semibold whitespace-nowrap shadow-sm hover:shadow-md"
        >
          Limpar
        </button>
      </div>
    </div>
  );
};
