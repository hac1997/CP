"use client";

import React from 'react';
import { FaCog, FaHeart, FaHammer, FaSeedling } from 'react-icons/fa';

export default function BoasPraticasPage() {
  // Componente auxiliar para a linha de separação dos títulos h2
  const Separator = () => (
    <div className="border-b border-green-700 w-16 mb-4"></div>
  );

  // Componente auxiliar para padronizar o bloco de destaques
  interface HighlightBoxProps {
    children: React.ReactNode;
    title: string;
    iconClass: string;
    colorClass?: string;
    borderClass?: string;
  }

  const HighlightBox: React.FC<HighlightBoxProps> = ({
    children,
    title,
    iconClass,
    colorClass = '',
    borderClass = '',
  }) => (
    <div className={`p-6 rounded-lg ${colorClass} ${borderClass}`}>
      <h4 className={`font-bold ${iconClass} mb-3 text-lg`}>{title}</h4>
      <p className="text-gray-700 text-sm">{children}</p>
    </div>
  );

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Cabeçalho - Estilo da Página Parcerias Laborais */}
      <header className="border-b-4 border-green-700 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center gap-3">
            Boas Práticas
          </h1>
        </div>
      </header>

      {/* Conteúdo principal - Estilo da Página Parcerias Laborais */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10 text-justify">

        {/* Seção 1: Fundo Rotativo - PROCAP */}
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-3 flex items-center gap-2">
            <FaCog className="text-green-700" />
            Fundo Rotativo - PROCAP
          </h2>
          <Separator />

          <p className="leading-relaxed mb-4">
            O **Programa de Capacitação Profissional e Implementação de Oficinas Permanentes (PROCAP)** é uma
            iniciativa que visa promover a qualificação profissional e a geração de renda no sistema prisional
            através da implementação de oficinas produtivas.
          </p>

          <div className="bg-green-50 border-l-4 border-green-700 p-6 mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Como Funciona</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O fundo rotativo do PROCAP funciona como um capital de giro destinado à aquisição de matéria-prima
              e equipamentos para as oficinas. Os recursos são reinvestidos continuamente, garantindo a
              sustentabilidade das atividades produtivas.
            </p>
            <ul className="list-disc list-inside leading-relaxed ml-4">
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">•</span>
                <span>Investimento inicial em equipamentos e matéria-prima</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">•</span>
                <span>Produção realizada pelos internos capacitados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">•</span>
                <span>Comercialização dos produtos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">•</span>
                <span>Reinvestimento dos recursos no programa</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-700 mb-3">Objetivos</h4>
              <ul className="list-disc list-inside leading-relaxed ml-4">
                <li>Qualificação profissional dos internos</li>
                <li>Geração de renda através do trabalho</li>
                <li>Desenvolvimento de habilidades produtivas</li>
                <li>Sustentabilidade financeira das oficinas</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-700 mb-3">Benefícios</h4>
              <ul className="list-disc list-inside leading-relaxed ml-4">
                <li>Remição da pena pelo trabalho</li>
                <li>Remuneração aos internos participantes</li>
                <li>Preparação para o mercado de trabalho</li>
                <li>Redução da ociosidade no sistema prisional</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção 2: Oficinas Próprias */}
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-3 flex items-center gap-2">
            <FaHammer className="text-green-700" />
            Oficinas Próprias
          </h2>
          <Separator />

          <p className="leading-relaxed mb-6">
            As **oficinas próprias** são espaços produtivos instalados dentro das unidades prisionais, onde os
            internos desenvolvem atividades de produção, manufatura e prestação de serviços.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <HighlightBox
              title="Marcenaria"
              iconClass="text-blue-700"
              colorClass="bg-blue-50"
            >
              Produção de móveis e artefatos de madeira com qualidade e acabamento profissional.
            </HighlightBox>

            <HighlightBox
              title="Serralheria"
              iconClass="text-green-700"
              colorClass="bg-green-50"
            >
              Fabricação de estruturas metálicas, portões e peças em metal.
            </HighlightBox>

            <HighlightBox
              title="Costura"
              iconClass="text-gray-700"
              colorClass="bg-gray-100"
            >
              Confecção de uniformes, roupas e produtos têxteis diversos.
            </HighlightBox>

            <HighlightBox
              title="Artesanato"
              iconClass="text-gray-700"
              colorClass="bg-gray-100"
            >
              Produção de peças artesanais e trabalhos manuais diferenciados.
            </HighlightBox>

            <HighlightBox
              title="Panificação"
              iconClass="text-gray-700"
              colorClass="bg-gray-100"
            >
              Produção de pães, bolos e produtos de confeitaria.
            </HighlightBox>

            <HighlightBox
              title="Reciclagem"
              iconClass="text-gray-700"
              colorClass="bg-gray-100"
            >
              Coleta, triagem e processamento de materiais recicláveis.
            </HighlightBox>
          </div>
        </section>

        {/* Seção 3: Projetos Sociais */}
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-3 flex items-center gap-2">
            <FaHeart className="text-green-700" />
            Projetos Sociais
          </h2>
          <Separator />

          <p className="leading-relaxed mb-6">
            Além das atividades produtivas, o departamento desenvolve diversos **projetos sociais** que visam a
            reintegração social dos internos através de ações que transcendem o trabalho, promovendo cidadania,
            cultura e desenvolvimento pessoal.
          </p>

          <div className="space-y-6">
            {/* Padronizando bordas para a cor primária (verde-escuro) */}
            <div className="border-l-4 border-green-700 pl-6 py-2">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Qualificação Profissional</h3>
              <p className="leading-relaxed">
                Cursos de capacitação em diversas áreas profissionais, preparando os internos para o mercado
                de trabalho após o cumprimento da pena.
              </p>
            </div>

            <div className="border-l-4 border-green-700 pl-6 py-2">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Educação</h3>
              <p className="leading-relaxed">
                Programas de alfabetização e escolarização, incluindo ensino fundamental, médio e preparação
                para o ENEM.
              </p>
            </div>

            <div className="border-l-4 border-green-700 pl-6 py-2">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Esporte e Cultura</h3>
              <p className="leading-relaxed">
                Atividades esportivas, culturais e artísticas que promovem a socialização e o desenvolvimento
                de habilidades interpessoais.
              </p>
            </div>

            <div className="border-l-4 border-green-700 pl-6 py-2">
              <h3 className="text-xl font-semibold text-green-700 mb-2">Apoio às Famílias</h3>
              <p className="leading-relaxed">
                Programas de apoio e orientação às famílias dos internos, fortalecendo vínculos e facilitando
                a reinserção social.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 4: Marcenaria da Palhoça (Destaque) */}
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-3 flex items-center gap-2">
            <FaHammer className="text-green-700" />
            Marcenaria da Palhoça
          </h2>
          <Separator />

          <p className="leading-relaxed mb-6">
            A **Marcenaria da Palhoça** é um projeto referência em produção de móveis dentro do sistema prisional
            de Santa Catarina. Localizada na Unidade Prisional de Palhoça, a oficina conta com equipamentos
            modernos e produz móveis de alta qualidade.
          </p>

          <div className="bg-gray-100 border-l-4 border-green-700 p-6 mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Destaques</h3>
            <ul className="list-disc list-inside leading-relaxed ml-4">
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">•</span>
                <span>Produção de móveis sob medida para órgãos públicos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">•</span>
                <span>Capacitação profissional de internos em marcenaria</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">•</span>
                <span>Produtos com certificação de qualidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">•</span>
                <span>Contribuição para a sustentabilidade da unidade</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-700 mb-3">Produtos</h4>
              <ul className="list-disc list-inside leading-relaxed ml-4">
                <li>Mesas e cadeiras</li>
                <li>Armários e estantes</li>
                <li>Móveis de escritório</li>
                <li>Portas e janelas</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-700 mb-3">Capacidade</h4>
              <ul className="list-disc list-inside leading-relaxed ml-4">
                <li>20 internos trabalhando simultaneamente</li>
                <li>Produção mensal média de 50 peças</li>
                <li>Atendimento a diversos órgãos públicos</li>
                <li>Projetos personalizados</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção 5: Horta de Itapema (Destaque) */}
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-3 flex items-center gap-2">
            <FaSeedling className="text-green-700" />
            Horta de Itapema
          </h2>
          <Separator />

          <p className="leading-relaxed mb-6">
            A **Horta de Itapema** é um projeto de agricultura sustentável desenvolvido na Unidade Prisional de
            Itapema, onde os internos cultivam hortaliças e legumes de forma orgânica, contribuindo para a
            alimentação da unidade e desenvolvendo habilidades em agricultura.
          </p>

          <div className="bg-green-50 border-l-4 border-green-700 p-6 mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Características</h3>
            <ul className="list-disc list-inside leading-relaxed ml-4">
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">•</span>
                <span>Cultivo orgânico sem uso de agrotóxicos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">•</span>
                <span>Produção de hortaliças e legumes frescos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">•</span>
                <span>Abastecimento da cozinha da unidade prisional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-700 mt-1">•</span>
                <span>Capacitação em técnicas de agricultura sustentável</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-700 mb-2">15</div>
              <p className="text-gray-700">Internos Trabalhando</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-700 mb-2">2.500m²</div>
              <p className="text-gray-700">Área Cultivada</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-700 mb-2">30+</div>
              <p className="text-gray-700">Variedades de Hortaliças</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}