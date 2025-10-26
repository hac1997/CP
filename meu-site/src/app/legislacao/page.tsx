import React from 'react';
import { FaGavel, FaFileAlt } from 'react-icons/fa';

export default function LegislacaoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <FaGavel className="text-3xl" />
            Legislação
          </h1>
          <p className="text-xl text-blue-100">
            Acesse as legislações relacionadas ao trabalho prisional
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Legislações Aplicáveis</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-blue-600 text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Lei de Execução Penal - Lei nº 7.210/1984
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Institui a Lei de Execução Penal e estabelece normas sobre o trabalho prisional.
                  </p>
                  <a
                    href="https://www.planalto.gov.br/ccivil_03/leis/l7210.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Acessar Lei →
                  </a>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-blue-600 text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Resolução CNPCP nº 03/2009
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Dispõe sobre as Diretrizes Nacionais sobre o Trabalho no âmbito do Sistema Prisional.
                  </p>
                  <a
                    href="https://www.gov.br/depen/pt-br/composicao/cnpcp/resolucoes/2009/resolucao-no-03-de-15-de-julho-de-2009.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Acessar Resolução →
                  </a>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-blue-600 text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Lei Estadual nº 18.513/2023
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Dispõe sobre a política de trabalho e renda no sistema prisional de Santa Catarina.
                  </p>
                  <a
                    href="http://leis.alesc.sc.gov.br/html/2023/18513_2023_lei.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Acessar Lei →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
