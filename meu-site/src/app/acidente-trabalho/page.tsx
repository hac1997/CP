import React from 'react';
import { FaExclamationTriangle, FaPhoneAlt, FaFileAlt } from 'react-icons/fa';

export default function AcidenteTrabalhoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <FaExclamationTriangle className="text-3xl" />
            Acidente de Trabalho
          </h1>
          <p className="text-xl text-red-100">
            Informações e procedimentos em caso de acidente de trabalho
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
            <div className="flex items-start gap-3">
              <FaExclamationTriangle className="text-red-600 text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-bold text-red-900 mb-2">Contato de Emergência</h3>
                <p className="text-red-800 mb-2">
                  Em caso de acidente de trabalho, entre em contato imediatamente:
                </p>
                <div className="flex items-center gap-2 text-red-900 font-semibold">
                  <FaPhoneAlt />
                  <a href="tel:+554836645806" className="hover:underline">
                    (48) 3664-5806
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Procedimentos</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Atendimento Imediato</h3>
              <p className="text-gray-600 leading-relaxed">
                Prestar os primeiros socorros à vítima e acionar o serviço médico da unidade prisional.
                Em casos graves, solicitar imediatamente atendimento médico externo.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Comunicação</h3>
              <p className="text-gray-600 leading-relaxed">
                Comunicar imediatamente o acidente ao Departamento de Trabalho e Renda Prisional e à direção
                da unidade prisional. A empresa parceira também deve ser informada nos casos de parceria laboral.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Documentação</h3>
              <p className="text-gray-600 leading-relaxed">
                Elaborar relatório detalhado do acidente, incluindo data, hora, local, circunstâncias,
                testemunhas e providências adotadas. Fotografar o local, se possível.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Investigação</h3>
              <p className="text-gray-600 leading-relaxed">
                O acidente será investigado para identificar causas e implementar medidas preventivas.
                A colaboração de todos os envolvidos é fundamental.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Acompanhamento</h3>
              <p className="text-gray-600 leading-relaxed">
                O interno acidentado receberá acompanhamento médico e assistencial até sua completa recuperação.
                Os direitos previdenciários serão garantidos conforme legislação vigente.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Documentos Necessários</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <FaFileAlt className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Relatório do Acidente</h4>
                <p className="text-sm text-gray-600">Descrição detalhada do ocorrido</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <FaFileAlt className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Atestado Médico</h4>
                <p className="text-sm text-gray-600">Laudo do atendimento médico</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <FaFileAlt className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Comunicação de Acidente</h4>
                <p className="text-sm text-gray-600">Formulário oficial preenchido</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <FaFileAlt className="text-blue-600 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Registro Fotográfico</h4>
                <p className="text-sm text-gray-600">Fotos do local, se aplicável</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
