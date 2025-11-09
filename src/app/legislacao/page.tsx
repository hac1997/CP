"use client";

import React, { useEffect, useState } from "react";
import { FaFileAlt, FaGavel, FaSyncAlt, FaInfoCircle } from "react-icons/fa";
import { Legislacao } from "@/types/legislacao";
import { fetchLegislacoesFromSheets } from "@/services/legislacaoService";
import { HeroCarousel } from "@/components/HeroCarousel";

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
        // Apenas define o erro, sem carregar exemplos.
        setError("Nenhuma legislação oficial encontrada na planilha.");
        setLegislacoes([]); 
      } else {
        setLegislacoes(data);
      }
    } catch (err) {
      setError("Erro ao carregar legislações. Tente novamente mais tarde.");
      console.error("Erro ao carregar legislações:", err);
      // Em caso de falha de conexão ou erro no fetch, define como array vazio.
      setLegislacoes([]); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-white border-b-4 border-green-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
            <FaGavel className="text-green-700 text-2xl hidden sm:block" />
            Base Legal e Legislações Aplicáveis 🏛️
          </h1>
        </div>
        <div className="h-1 bg-gradient-to-r from-green-600 to-green-800"></div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col lg:flex-row gap-8">
        <section className="flex-1 space-y-8">
          <div className="pb-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-green-700" />
                Finalidade da Consulta
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Este portal é um repositório centralizado para a consulta de leis, decretos, resoluções e portarias que regem o trabalho no Sistema Prisional e Socioeducativo de Santa Catarina. 
            </p>
          </div>
        </section>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-8">
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-700 pb-2">
            Documentos Oficiais
        </h2>

        {loading && (
          <div className="bg-gray-50 rounded-lg shadow-md p-12 text-center border border-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Carregando legislações oficiais...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 rounded-lg shadow-md border-l-4 border-red-500 p-6 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-red-900">Atenção - Erro de Carregamento</h3>
                <p className="text-red-700 mt-1">{error}</p>
                <button
                  onClick={loadLegislacoes}
                  className="mt-3 px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-semibold text-sm flex items-center gap-2"
                >
                  <FaSyncAlt /> Tentar Novamente Carregar Oficial
                </button>
              </div>
            </div>
          </div>
        )}

        {!loading && legislacoes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legislacoes.map((lei, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 border-l-4 border-green-700 p-5"
              >
                <div className="flex items-start gap-4">
                  <FaFileAlt className="text-green-700 text-2xl mt-1 flex-shrink-0" />
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 leading-snug">{lei.titulo}</h3>
                    <p className="text-gray-600 mt-2 text-sm">{lei.descricao}</p>
                    <a
                      href={lei.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-md text-sm font-medium hover:bg-green-800 transition duration-200 shadow-md"
                    >
                      {lei.linkTexto}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!loading && legislacoes.length === 0 && (
            <div className="bg-gray-50 rounded-lg shadow-md text-center py-12 border border-gray-100">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGavel className="text-4xl text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Nenhuma legislação oficial encontrada</h3>
              {error ? (
                <p className="text-gray-600 mt-2">Houve um erro no carregamento da fonte de dados: **{error}**</p>
              ) : (
                <p className="text-gray-600 mt-2">Não há documentos oficiais disponíveis no momento para exibição.</p>
              )}
            </div>
          )}

      </section>

    </main>
  );
}