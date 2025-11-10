"use client";
import React, { useEffect, useState } from 'react';
import { FileText, BookOpen, RefreshCw } from 'lucide-react';

interface Orientacao {
  titulo: string;
  descricao: string;
  link: string;
  linkTexto: string;
}

const fetchOrientacoesFromSheets = async (): Promise<Orientacao[]> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  const mockData: Orientacao[] = [
    {
      titulo: "Normativa Interna nº 001/2024 - Uso de Equipamentos",
      descricao: "Estabelece diretrizes claras para a utilização e manutenção de equipamentos de segurança e informática nas unidades prisionais.",
      link: "#",
      linkTexto: "Acessar Documento Completo"
    },
    {
      titulo: "Diretriz 005 - Procedimentos de Revista",
      descricao: "Padronização dos procedimentos de revista em visitantes, servidores e áreas comuns, visando a segurança.",
      link: "#",
      linkTexto: "Ver Diretriz"
    },
    {
      titulo: "Guia Rápido de Atendimento Humanizado (RAH)",
      descricao: "Orientações sobre as melhores práticas de comunicação e tratamento para o público assistido e seus familiares.",
      link: "#",
      linkTexto: "Baixar Guia PDF"
    },
    {
      titulo: "Resolução Conjunta SEI nº 123 - Jornada de Trabalho",
      descricao: "Regulamenta as escalas de plantão, compensação de horas e limites de jornada para agentes e técnicos.",
      link: "#",
      linkTexto: "Ler Resolução"
    }
  ];
  return mockData;
};

export default function OrientacoesPage() {
  const [orientacoes, setOrientacoes] = useState<Orientacao[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadOrientacoes();
  }, []);

  const loadOrientacoes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchOrientacoesFromSheets();
      if (data.length === 0) {
        setError('Nenhuma orientação oficial encontrada na planilha.');
        setOrientacoes([]);
      } else {
        setOrientacoes(data);
      }
    } catch (err) {
      setError("Erro ao carregar orientações. Tente novamente mais tarde.");
      console.error('Erro ao carregar orientações:', err);
      setOrientacoes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <header className="border-b-4 border-green-700 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center gap-3">
            Diretrizes e Orientações Oficiais
          </h1>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="pb-4 mb-8 border-b border-gray-200">
          <h2 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
            <BookOpen className="text-green-700" />
            Consulta Rápida de Procedimentos
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nesta seção, você encontra as instruções detalhadas, procedimentos padrão, guias e resoluções internas para a execução das atividades diárias.
          </p>
        </div>

        {loading && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center border border-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-600 border-t-transparent mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Carregando orientações oficiais...</p>
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
                  onClick={loadOrientacoes}
                  className="mt-3 px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-semibold text-sm flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" /> Tentar Novamente
                </button>
              </div>
            </div>
          </div>
        )}

        {!loading && orientacoes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {orientacoes.map((orientacao) => (
              <div
                key={orientacao.titulo}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-l-4 border-green-700 p-5"
              >
                <div className="flex items-start gap-4">
                  <FileText className="text-green-700 text-2xl mt-1 flex-shrink-0" />
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 leading-snug">{orientacao.titulo}</h3>
                    <p className="text-gray-600 mt-2 text-sm">{orientacao.descricao}</p>
                    <a
                      href={orientacao.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-md text-sm font-medium hover:bg-green-800 transition duration-200 shadow-md"
                    >
                      {orientacao.linkTexto}
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

        {!loading && orientacoes.length === 0 && (
          <div className="bg-white rounded-lg shadow-md text-center py-12 border border-gray-100">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-4xl text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Nenhuma orientação disponível</h3>
            {error ? (
              <p className="text-gray-600 mt-2">Houve um erro no carregamento da fonte de dados: <strong>{error}</strong></p>
            ) : (
              <p className="text-gray-600 mt-2">Não há documentos de orientação disponíveis no momento para exibição.</p>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
