"use client";

import React, { useEffect, useState } from 'react';
import { FaFileAlt, FaGavel } from 'react-icons/fa';
import { Legislacao } from '@/types/legislacao';
import { fetchLegislacoesFromSheets } from '@/services/legislacaoService';

export default function LegislacaoPage() {
  const [legislacoes, setLegislacoes] = useState<Legislacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadLegislacoes();
  }, []);

  const loadLegislacoes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchLegislacoesFromSheets();

      if (data.length === 0) {
        setError('Nenhuma legislação encontrada na planilha.');
      } else {
        setLegislacoes(data);
      }
    } catch (err) {
      setError('Erro ao carregar legislações. Tente novamente mais tarde.');
      console.error('Erro ao carregar legislações:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 pb-16">
      <section className="relative bg-linear-to-br from-blue-800 via-blue-900 to-blue-950 text-white py-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[20px_20px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            Legislação
          </h1>
          <p className="text-base md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Base legal e legislações aplicáveis.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        {loading && (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg font-medium">Carregando legislações...</p>
          </div>
        )}

        {error && (
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-red-500 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-red-900 mb-2">Erro ao Carregar Legislações</h3>
                <p className="text-red-700 mb-4">{error}</p>
                <button
                  onClick={loadLegislacoes}
                  className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all hover:shadow-md font-medium"
                >
                  Tentar Novamente
                </button>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Base Legal e Legislações Aplicáveis</h2>

            <div className="space-y-6">
              {legislacoes.map((lei, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6 py-2">
                  <div className="flex items-start gap-3">
                    <FaFileAlt className="text-blue-600 text-xl mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {lei.titulo}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {lei.descricao}
                      </p>
                      <a
                        href={lei.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-2 transition-colors"
                      >
                        {lei.linkTexto}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {legislacoes.length === 0 && !error && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaGavel className="text-5xl text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Nenhuma legislação encontrada</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Não há legislações disponíveis no momento.
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
