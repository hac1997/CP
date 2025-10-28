"use client";

import React, { useEffect, useState } from 'react';
import { FaBullhorn, FaFilter } from 'react-icons/fa'; // Mantido, mas FaBullhorn será para o título
import { Edital } from '@/types/edital';
import { EditalCard } from '@/components/ui/EditalCard';
import { FilterBar } from '@/components/ui/FilterBar';
import {
  fetchEditaisFromSheets,
  filterEditais,
  sortEditaisByStatus,
  getUniqueValues
} from '@/services/sheetsService';
import { SectionBannerTitle } from '@/components/ui/SectionBannerTitle';

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
        setUnidades(getUniqueValues(data, 'unidadesPrisionais'));
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
  const abertosOuProrrogadosEditais = filteredEditais.filter(e => e.status === 'aberto' || e.status === 'prorrogado');
  const emAndamentoEditais = filteredEditais.filter(e => e.status === 'fechado');
  const concluidosEditais = filteredEditais.filter(e => e.status === 'concluido');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-16">
      {/* Banner/Título da Página */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white py-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]">          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            Chamamentos Públicos
          </h1>
          <p className="text-base md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Acompanhe os chamamentos públicos abertos, próximos e encerrados pelo departamento.
          </p>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 py-8">
        {loading ? (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg font-medium">Carregando editais...</p>
          </div>
        ) : error ? (
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-red-500 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-red-900 mb-2">Erro ao Carregar Editais</h3>
                <p className="text-red-700 mb-4">{error}</p>
                <button
                  onClick={loadEditais}
                  className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all hover:shadow-md font-medium"
                >
                  Tentar Novamente
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Seção de Filtros + Contador */}
            <div className="mb-10 p-6 bg-white shadow-lg rounded-2xl border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                {/* Título com ícone */}
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaFilter className="text-blue-600" />
                  </div>
                  Filtrar Chamamentos
                </h2>

                {/* Contador de Editais */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-base">{filteredEditais.length}</span>
                  </div>
                  <p className="text-gray-700 font-medium text-sm sm:text-base">
                    {filteredEditais.length === 1 ? 'Edital encontrado' : 'Editais encontrados'}
                    {(selectedRegional || selectedUnidade || selectedTipo) && (
                      <span className="ml-2 inline-block text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200 font-medium">
                        Filtrado
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* FilterBar */}
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
            {/* Próximos Editais */}
            {proximosEditais.length > 0 && (
              // Adicionamos 'z-10' na section para definir um contexto de empilhamento.
              // O próximo header (abertos) terá z-20.
              <section className="mb-0 relative">
                <SectionBannerTitle title="Próximos Chamamentos" stickyTop="top-32" zIndex={20} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6 max-w-7xl mx-auto">
                  {proximosEditais.map((edital, index) => (
                    <EditalCard key={index} edital={edital} />
                  ))}
                </div>
              </section>
            )}


            {/* Abertos ou Prorrogados */}
            {abertosOuProrrogadosEditais.length > 0 && (
              // Z-index maior para garantir que ele passe por cima do 'Proximos' (z-10)
              <section className="mb-0 relative">
                <SectionBannerTitle title="Chamamentos Abertos" stickyTop="top-32" zIndex={30} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {abertosOuProrrogadosEditais.map((edital, index) => (
                    <EditalCard key={index} edital={edital} />
                  ))}
                </div>
              </section>
            )}

            {emAndamentoEditais.length > 0 && (
              <section className="mb-0 relative">
                <SectionBannerTitle title="Chamamentos em Andamento" stickyTop="top-32" zIndex={40} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-6 max-w-7xl mx-auto">
                  {emAndamentoEditais.map((edital, index) => (
                    <EditalCard key={index} edital={edital} />
                  ))}
                </div>
              </section>
            )}

            {/* Concluídos */}
            {concluidosEditais.length > 0 && (
              <section className="mb-0 relative">
                <SectionBannerTitle title="Chamamentos Finalizados" stickyTop="top-32" zIndex={50} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {concluidosEditais.map((edital, index) => (
                    <EditalCard key={index} edital={edital} />
                  ))}
                </div>
              </section>
            )}

            {/* Nenhum Edital Encontrado */}
            {filteredEditais.length === 0 && !loading && !error && (
              <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaBullhorn className="text-5xl text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Nenhum chamamento encontrado</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Não há chamamentos que correspondam aos filtros selecionados.
                </p>
                {(selectedRegional || selectedUnidade || selectedTipo) && (
                  <button
                    onClick={handleClearFilters}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg font-medium"
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