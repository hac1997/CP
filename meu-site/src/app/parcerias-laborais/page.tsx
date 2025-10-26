import React from 'react';
import { FaHandshake, FaCheckCircle, FaGavel, FaBriefcase, FaClipboardList, FaIndustry } from 'react-icons/fa';

export default function ParceriasLaboraisPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaHandshake className="text-green-600" />
            O que são as Parcerias Laborais
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            As Parcerias Laborais são acordos firmados entre a Secretaria de Estado da Justiça e Reintegração Social e parceiros públicos ou privados interessados em utilizar a mão de obra prisional em atividades dentro ou fora das unidades penais.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Atualmente, o Estado possui cerca de <strong>200 Termos de Parceria Laboral ativos</strong>, sendo 150 com empresas privadas e outros 50 com municípios, empresas públicas e OSCs.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Os presos atuam em diversas atividades, como limpeza urbana, produção de móveis e estofados, montagem de eletrônicos e eletrodomésticos, confecção têxtil, fabricação de EPIs, componentes plásticos, ferragens, panificação e até construção de embarcações.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaIndustry className="text-green-600" />
            O Trabalho no Sistema Prisional Catarinense
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            O trabalho no sistema prisional catarinense caracteriza-se pela sua natureza profissional, abrangendo diversas indústrias e linhas de produção, com destaque para o setor têxtil, embora também sejam fabricados uma ampla variedade de produtos.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Produtos Fabricados:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-800">Fogões</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-800">Ventiladores</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-800">Fornos</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-800">Chuveiros</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-800">Motores elétricos</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-800">Liquidificadores</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-800">Fechaduras magnéticas</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-800">Telefones</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-800">Estofados</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-800">Embarcações</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaBriefcase className="text-green-600" />
            Sobre o Trabalho do Preso
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              A Lei de Execuções Penais, em seu art. 31, impõe a <strong>obrigatoriedade de trabalho para condenados a penas privativas de liberdade</strong>, de acordo com suas aptidões e capacidade, diferenciando-se da situação do preso provisório, para quem a atividade laboral não é compulsória e está restrita ao ambiente carcerário.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sua jornada de trabalho é estabelecida entre <strong>6 e 8 horas</strong>, com repouso remunerado aos domingos e feriados.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A inclusão do preso no ambiente profissional não apenas atende a requisitos legais, mas desempenha um papel fundamental na <strong>ressocialização</strong>, oportunizando qualificação e experiência para a preparação do indivíduo após o cumprimento de sua pena, quando posto em liberdade, numa perspectiva educativa e produtiva do trabalho no contexto prisional.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Assim, temos que as parcerias são de interesse do próprio preso, pois além de adquirirem uma profissão, têm no trabalho uma fonte de renda para si e suas famílias, além de terem <strong>um dia de remição de pena a cada três dias trabalhados</strong>.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaCheckCircle className="text-green-600" />
            Vantagens da Parceria
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            A principal vantagem da mão de obra carcerária é o <strong>baixo custo</strong>, pois não há vínculo empregatício formal entre empresas e presos. Isso elimina encargos sociais obrigatórios na contratação pelo setor privado, como:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border-l-4 border-green-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Encargos Eliminados</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>FGTS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Aviso prévio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Indenizações</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Férias</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Auxílio-doença</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>13º salário</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Contribuição previdenciária</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefícios para os Presos</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Adquirem uma profissão</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Fonte de renda para si e suas famílias</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Um dia de remição de pena a cada três dias trabalhados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Qualificação profissional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Preparação para reinserção no mercado</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
            <p className="text-gray-800">
              <strong>Economia adicional:</strong> Empresas com oficinas dentro das unidades penais também economizam em custos com <strong>aluguel e IPTU</strong>, já que os espaços são disponibilizados aos parceiros privados durante a vigência da Parceria Laboral para a implantação de oficinas de trabalho.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaClipboardList className="text-green-600" />
            Me Interessei, Quero Participar! Como Proceder?
          </h2>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              As Parcerias Laborais com o Sistema Prisional Catarinense são formalizadas por meio dos <strong>Termos de Parceria Laboral</strong> celebrados após o lançamento dos <strong>Editais de Processo Público de Seleção</strong> (também chamados de Chamamentos Públicos).
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6">
              <p className="text-gray-800 text-lg mb-4">
                Os interessados em celebrar uma Parceria Laboral com o Estado deverão se inscrever nos certames. Todos os Editais são publicados no site da Secretaria de Justiça e Reintegração Social de Santa Catarina.
              </p>
              <p className="text-gray-800 text-lg font-semibold">
                Para mais informações, acessar a página <a href="/chamamentos" className="text-green-700 hover:text-green-800 underline">Chamamentos Públicos</a>
              </p>
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
              O trabalho prisional é regulamentado pela <strong>Lei de Execuções Penais (Lei nº 7.210/1984)</strong>, especificamente no <strong>art. 31</strong>, que estabelece a obrigatoriedade do trabalho para condenados a penas privativas de liberdade.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A lei define os direitos e deveres dos internos, bem como as condições para o trabalho no sistema prisional, incluindo jornada de trabalho de 6 a 8 horas e repouso remunerado aos domingos e feriados.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Mais Informações</h2>
          <p className="text-green-100 mb-6">
            Para mais detalhes sobre como participar do programa de parcerias laborais ou se tornar uma empresa parceira, acesse a página de chamamentos públicos.
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
