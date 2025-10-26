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
    <main className="min-h-screen bg-gray-100 pb-16"> {/* Fundo mais claro e padding inferior */}
      {/* Banner/Título da Página */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white py-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 drop-shadow-lg">
            Chamamentos Públicos
          </h1>
          <p className="text-base md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Acompanhe os chamamentos públicos abertos, próximos e encerrados pelo departamento.
          </p>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 py-4"> {/* Removi o py-12 para ajustar o espaçamento após o banner */}
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
            {/* Seção de Filtros */}
            <div className="mb-10 p-6 bg-white shadow-sm rounded-lg"> {/* Card para os filtros */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaFilter className="text-blue-600" />
                Filtrar Chamamentos
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

            {/* Total de Editais */}
            <div className="mb-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-md">
              <p className="text-gray-700">
                <strong>Total de editais encontrados:</strong> {filteredEditais.length}
                {(selectedRegional || selectedUnidade || selectedTipo) && ' (filtrados)'}
              </p>
            </div>

            {/* Próximos Editais */}
            {proximosEditais.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-3 border-blue-200">Próximos Chamamentos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> {/* Ajuste aqui para até 4 colunas */}
                  {proximosEditais.map((edital, index) => (
                    <EditalCard key={index} edital={edital} />
                  ))}
                </div>
              </div>
            )}

            {/* Editais Abertos ou Prorrogados */}
            {abertosOuProrrogadosEditais.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-3 border-green-200">Chamamentos Abertos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {abertosOuProrrogadosEditais.map((edital, index) => (
                    <EditalCard key={index} edital={edital} />
                  ))}
                </div>
              </div>
            )}

            {/* Editais em Andamento (Fechados) */}
            {emAndamentoEditais.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-3 border-yellow-200">Chamamentos em Andamento</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {emAndamentoEditais.map((edital, index) => (
                    <EditalCard key={index} edital={edital} />
                  ))}
                </div>
              </div>
            )}

            {/* Editais Concluídos */}
            {concluidosEditais.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-3 border-gray-300">Chamamentos Finalizados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {concluidosEditais.map((edital, index) => (
                    <EditalCard key={index} edital={edital} />
                  ))}
                </div>
              </div>
            )}

            {/* Nenhum Edital Encontrado */}
            {filteredEditais.length === 0 && !loading && !error && (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <FaBullhorn className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nenhum chamamento encontrado</h3>
                <p className="text-gray-600">
                  Não há chamamentos que correspondam aos filtros selecionados.
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