import React from 'react';
import { FaBookOpen, FaFileAlt } from 'react-icons/fa';

export default function OrientacoesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <FaBookOpen className="text-3xl" />
            Orientações
          </h1>
          <p className="text-xl text-blue-100">
            Procedimentos internos e orientações do departamento
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Procedimentos e Normativas</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-green-600 pl-6 py-2">
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-green-600 text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Manual de Procedimentos Internos
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Orientações sobre fluxos e procedimentos internos do Departamento de Trabalho e Renda Prisional.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-6 py-2">
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-green-600 text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Orientações para Empresas Parceiras
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Diretrizes e requisitos para empresas interessadas em estabelecer parcerias laborais.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-6 py-2">
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-green-600 text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Normas de Segurança no Trabalho
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Normas e procedimentos de segurança aplicáveis às atividades laborais no sistema prisional.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-6 py-2">
              <div className="flex items-start gap-3">
                <FaFileAlt className="text-green-600 text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Processo de Seleção de Presos
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Critérios e etapas do processo de seleção de internos para vagas de trabalho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
