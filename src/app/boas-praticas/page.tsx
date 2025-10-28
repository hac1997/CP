import React from 'react';
import { FaAward, FaCog, FaHeart, FaHammer, FaSeedling } from 'react-icons/fa';

export default function BoasPraticasPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaCog className="text-blue-600" />
            Fundo Rotativo - PROCAP
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            O Programa de Capacitação Profissional e Implementação de Oficinas Permanentes (PROCAP) é uma
            iniciativa que visa promover a qualificação profissional e a geração de renda no sistema prisional
            através da implementação de oficinas produtivas.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Como Funciona</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O fundo rotativo do PROCAP funciona como um capital de giro destinado à aquisição de matéria-prima
              e equipamentos para as oficinas. Os recursos são reinvestidos continuamente, garantindo a
              sustentabilidade das atividades produtivas.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Investimento inicial em equipamentos e matéria-prima</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Produção realizada pelos internos capacitados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Comercialização dos produtos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Reinvestimento dos recursos no programa</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Objetivos</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Qualificação profissional dos internos</li>
                <li>Geração de renda através do trabalho</li>
                <li>Desenvolvimento de habilidades produtivas</li>
                <li>Sustentabilidade financeira das oficinas</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Benefícios</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Remição da pena pelo trabalho</li>
                <li>Remuneração aos internos participantes</li>
                <li>Preparação para o mercado de trabalho</li>
                <li>Redução da ociosidade no sistema prisional</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaCog className="text-green-600" />
            Oficinas Próprias
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            As oficinas próprias são espaços produtivos instalados dentro das unidades prisionais, onde os
            internos desenvolvem atividades de produção, manufatura e prestação de serviços.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h4 className="font-bold text-blue-900 mb-3 text-lg">Marcenaria</h4>
              <p className="text-gray-700 text-sm">
                Produção de móveis e artefatos de madeira com qualidade e acabamento profissional.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h4 className="font-bold text-green-900 mb-3 text-lg">Serralheria</h4>
              <p className="text-gray-700 text-sm">
                Fabricação de estruturas metálicas, portões e peças em metal.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
              <h4 className="font-bold text-yellow-900 mb-3 text-lg">Costura</h4>
              <p className="text-gray-700 text-sm">
                Confecção de uniformes, roupas e produtos têxteis diversos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
              <h4 className="font-bold text-red-900 mb-3 text-lg">Artesanato</h4>
              <p className="text-gray-700 text-sm">
                Produção de peças artesanais e trabalhos manuais diferenciados.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-3 text-lg">Panificação</h4>
              <p className="text-gray-700 text-sm">
                Produção de pães, bolos e produtos de confeitaria.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Reciclagem</h4>
              <p className="text-gray-700 text-sm">
                Coleta, triagem e processamento de materiais recicláveis.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaHeart className="text-red-600" />
            Projetos Sociais
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Além das atividades produtivas, o departamento desenvolve diversos projetos sociais que visam a
            reintegração social dos internos através de ações que transcendem o trabalho, promovendo cidadania,
            cultura e desenvolvimento pessoal.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualificação Profissional</h3>
              <p className="text-gray-700 leading-relaxed">
                Cursos de capacitação em diversas áreas profissionais, preparando os internos para o mercado
                de trabalho após o cumprimento da pena.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Educação</h3>
              <p className="text-gray-700 leading-relaxed">
                Programas de alfabetização e escolarização, incluindo ensino fundamental, médio e preparação
                para o ENEM.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Esporte e Cultura</h3>
              <p className="text-gray-700 leading-relaxed">
                Atividades esportivas, culturais e artísticas que promovem a socialização e o desenvolvimento
                de habilidades interpessoais.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6 py-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Apoio às Famílias</h3>
              <p className="text-gray-700 leading-relaxed">
                Programas de apoio e orientação às famílias dos internos, fortalecendo vínculos e facilitando
                a reinserção social.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaHammer className="text-yellow-600" />
            Marcenaria da Palhoça
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            A Marcenaria da Palhoça é um projeto referência em produção de móveis dentro do sistema prisional
            de Santa Catarina. Localizada na Unidade Prisional de Palhoça, a oficina conta com equipamentos
            modernos e produz móveis de alta qualidade.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Destaques</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Produção de móveis sob medida para órgãos públicos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Capacitação profissional de internos em marcenaria</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Produtos com certificação de qualidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>Contribuição para a sustentabilidade da unidade</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Produtos</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Mesas e cadeiras</li>
                <li>Armários e estantes</li>
                <li>Móveis de escritório</li>
                <li>Portas e janelas</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-3">Capacidade</h4>
              <ul className="space-y-2 text-gray-700">
                <li>20 internos trabalhando simultaneamente</li>
                <li>Produção mensal média de 50 peças</li>
                <li>Atendimento a diversos órgãos públicos</li>
                <li>Projetos personalizados</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaSeedling className="text-green-600" />
            Horta de Itapema
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            A Horta de Itapema é um projeto de agricultura sustentável desenvolvido na Unidade Prisional de
            Itapema, onde os internos cultivam hortaliças e legumes de forma orgânica, contribuindo para a
            alimentação da unidade e desenvolvendo habilidades em agricultura.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Características</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Cultivo orgânico sem uso de agrotóxicos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Produção de hortaliças e legumes frescos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Abastecimento da cozinha da unidade prisional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>Capacitação em técnicas de agricultura sustentável</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15</div>
              <p className="text-gray-700">Internos Trabalhando</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2.500m²</div>
              <p className="text-gray-700">Área Cultivada</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
              <p className="text-gray-700">Variedades de Hortaliças</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
