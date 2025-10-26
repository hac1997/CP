import React from 'react';
import { FaHandshake, FaCheckCircle, FaGavel, FaBriefcase, FaUserCheck, FaClipboardList, FaBuilding } from 'react-icons/fa';

export default function ParceriasLaboraisPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <FaHandshake className="text-3xl" />
            Parcerias Laborais
          </h1>
          <p className="text-xl text-green-100">
            Programa de ressocialização através do trabalho prisional
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaHandshake className="text-green-600" />
            O que são Parcerias Laborais
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            As parcerias laborais são acordos entre o Estado de Santa Catarina e empresas públicas ou privadas
            que desejam oferecer oportunidades de trabalho a pessoas privadas de liberdade. Este programa visa
            a ressocialização dos internos através do trabalho, proporcionando qualificação profissional,
            remuneração e redução da pena através da remição.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            O trabalho prisional não apenas contribui para a reinserção social do interno, mas também beneficia
            a sociedade ao reduzir a reincidência criminal e preparar indivíduos para o retorno ao convívio social.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaCheckCircle className="text-green-600" />
            Vantagens
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Para as Empresas</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Responsabilidade social corporativa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Mão de obra qualificada e comprometida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Redução de custos operacionais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Incentivos fiscais previstos em lei</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Contribuição para a ressocialização</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Para os Internos</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Remição da pena pelo trabalho</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Remuneração e suporte financeiro à família</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Qualificação profissional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Desenvolvimento de habilidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Preparação para reinserção no mercado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaGavel className="text-green-600" />
            Legislação
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              O trabalho prisional é regulamentado pela <strong>Lei de Execução Penal (Lei nº 7.210/1984)</strong>,
              que estabelece os direitos e deveres dos internos, bem como as condições para o trabalho no
              sistema prisional.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Em Santa Catarina, a <strong>Lei Estadual nº 18.513/2023</strong> dispõe sobre a política de
              trabalho e renda no sistema prisional, estabelecendo diretrizes específicas para as parcerias laborais.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaBriefcase className="text-green-600" />
            Formas de Trabalho
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trabalho Interno</h3>
              <p className="text-gray-700">
                Atividades realizadas dentro das unidades prisionais, como produção, manufatura e serviços gerais.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trabalho Externo</h3>
              <p className="text-gray-700">
                Para internos em regime semiaberto ou progressão de regime, com atividades realizadas fora da unidade.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Serviços de Apoio</h3>
              <p className="text-gray-700">
                Atividades de manutenção, limpeza, cozinha e outras funções de apoio ao funcionamento da unidade.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaUserCheck className="text-green-600" />
            Como Ocorre a Seleção dos Presos
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Avaliação de Elegibilidade</h4>
                <p className="text-gray-700">
                  Análise do regime prisional, comportamento, tempo de pena cumprida e requisitos legais.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Perfil Profissional</h4>
                <p className="text-gray-700">
                  Avaliação das habilidades, experiência e adequação do interno às vagas disponíveis.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Entrevista e Seleção</h4>
                <p className="text-gray-700">
                  Processo seletivo conduzido pela empresa parceira com acompanhamento do departamento.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 text-green-800 rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Acompanhamento</h4>
                <p className="text-gray-700">
                  Monitoramento contínuo do desempenho e adaptação do interno à atividade laboral.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaClipboardList className="text-green-600" />
            Como Celebrar uma Parceria Laboral
          </h2>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-lg">
              Empresas interessadas em estabelecer parcerias laborais devem seguir os seguintes passos:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">1.</span>
                <p className="text-gray-800">
                  Entrar em contato com o Departamento de Trabalho e Renda Prisional através dos canais oficiais
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">2.</span>
                <p className="text-gray-800">
                  Apresentar proposta detalhando tipo de atividade, número de vagas, qualificações necessárias e local de trabalho
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">3.</span>
                <p className="text-gray-800">
                  Análise técnica da proposta pelo departamento
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">4.</span>
                <p className="text-gray-800">
                  Formalização através de convênio ou termo de cooperação
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">5.</span>
                <p className="text-gray-800">
                  Processo de seleção dos internos e início das atividades
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaBuilding className="text-green-600" />
            Lista de Empresas Parceiras
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Atualmente, contamos com 67 empresas parceiras que oferecem oportunidades de trabalho em diversos
            setores, incluindo:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900">Indústria</h4>
              <p className="text-sm text-gray-600">Manufatura e produção</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900">Serviços</h4>
              <p className="text-sm text-gray-600">Diversos segmentos</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900">Construção Civil</h4>
              <p className="text-sm text-gray-600">Obras e reformas</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900">Agricultura</h4>
              <p className="text-sm text-gray-600">Cultivo e manejo</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900">Reciclagem</h4>
              <p className="text-sm text-gray-600">Coleta e processamento</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900">Artesanato</h4>
              <p className="text-sm text-gray-600">Produção artesanal</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Mais Informações</h2>
          <p className="text-green-100 mb-6">
            Para mais detalhes sobre como participar do programa de parcerias laborais ou se tornar uma empresa
            parceira, acesse a página de chamamentos públicos.
          </p>
          <a
            href="/chamamentos"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-md font-semibold hover:bg-green-50 transition-colors duration-300"
          >
            Ver Chamamentos Públicos
          </a>
        </div>
      </section>
    </main>
  );
}
