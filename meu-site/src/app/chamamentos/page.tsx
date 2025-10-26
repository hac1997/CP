"use client";

import React, { useEffect, useState } from 'react';
import { FaBullhorn, FaFilter } from 'react-icons/fa';
import { Edital } from '@/types/edital';
import { EditalCard } from '@/components/ui/EditalCard';
import { FilterBar } from '@/components/ui/FilterBar';
import {
  fetchEditaisFromSheets,
  filterEditais,
  sortEditaisByStatus,
  getUniqueValues
} from '@/services/sheetsService';

export default function ChamamentosPage() {
  const [editais, setEditais] = useState<Edital[]>([]);
  const [filteredEditais, setFilteredEditais] = useState<Edital[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [regionais, setRegionais] = useState<string[]>([]);
  const [unidades, setUnidades] = useState<string[]>([]);
  const [tipos, setTipos] = useState<string[]>([]);

  const [selectedRegional, setSelectedRegional] = useState('');
  const [selectedUnidade, setSelectedUnidade] = useState('');
  const [selectedTipo, setSelectedTipo] = useState('');

  useEffect(() => {
    loadEditais();
  }, []);

  useEffect(() => {
    if (editais.length > 0) {
      const filtered = filterEditais(editais, {
        regional: selectedRegional || undefined,
        unidadePrisional: selectedUnidade || undefined,
        tipo: selectedTipo || undefined
      });
      setFilteredEditais(sortEditaisByStatus(filtered));
    }
  }, [editais, selectedRegional, selectedUnidade, selectedTipo]);

  const loadEditais = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchEditaisFromSheets();

      if (data.length === 0) {
        setError('Nenhum edital encontrado na planilha.');
      } else {
        setEditais(data);
        setFilteredEditais(sortEditaisByStatus(data));
        setRegionais(getUniqueValues(data, 'regional'));
        setUnidades(getUniqueValues(data, 'tags'));
        setTipos(getUniqueValues(data, 'tipoChamamento'));
      }
    } catch (err) {
      setError('Erro ao carregar os editais. Tente novamente mais tarde.');
      console.error('Erro ao carregar editais:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClearFilters = () => {
    setSelectedRegional('');
    setSelectedUnidade('');
    setSelectedTipo('');
  };

  const proximosEditais = filteredEditais.filter(e => e.status === 'proximo');
  const abertosEditais = filteredEditais.filter(e => e.status === 'aberto');
  const fechadosEditais = filteredEditais.filter(e => e.status === 'fechado');

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <FaBullhorn className="text-3xl" />
            Chamamentos Públicos
          </h1>
          <p className="text-xl text-blue-100">
            Acompanhe os editais de chamamento público para parcerias laborais
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        {loading ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Carregando editais...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="text-red-600 text-2xl">⚠</div>
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">Erro ao Carregar Editais</h3>
                <p className="text-red-800">{error}</p>
                <button
                  onClick={loadEditais}
                  className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Tentar Novamente
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaFilter className="text-blue-600" />
                Filtros
              </h2>
              <FilterBar
                regionais={regionais}
                unidades={unidades}
                tipos={tipos}
                selectedRegional={selectedRegional}
                selectedUnidade={selectedUnidade}
                selectedTipo={selectedTipo}
                onRegionalChange={setSelectedRegional}
                onUnidadeChange={setSelectedUnidade}
                onTipoChange={setSelectedTipo}
                onClearFilters={handleClearFilters}
              />
            </div>

            <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 p-4">
              <p className="text-gray-700">
                <strong>Total de editais encontrados:</strong> {filteredEditais.length}
                {(selectedRegional || selectedUnidade || selectedTipo) && ' (filtrados)'}
              </p>
            </div>

            {proximosEditais.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Próximos</h2>
                <div className="grid grid-cols-1 gap-6">
                  {proximosEditais.map((edital, index) => (
                    <EditalCard key={index} edital={edital} />
                  ))}
                </div>
              </div>
            )}

            {abertosEditais.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Abertos</h2>
                <div className="grid grid-cols-1 gap-6">
                  {abertosEditais.map((edital, index) => (
                    <EditalCard key={index} edital={edital} />
                  ))}
                </div>
              </div>
            )}

            {fechadosEditais.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Fechados</h2>
                <div className="grid grid-cols-1 gap-6">
                  {fechadosEditais.map((edital, index) => (
                    <EditalCard key={index} edital={edital} />
                  ))}
                </div>
              </div>
            )}

            {filteredEditais.length === 0 && !loading && !error && (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <FaBullhorn className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nenhum edital encontrado</h3>
                <p className="text-gray-600">
                  Não há editais que correspondam aos filtros selecionados.
                </p>
                {(selectedRegional || selectedUnidade || selectedTipo) && (
                  <button
                    onClick={handleClearFilters}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Limpar Filtros
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
