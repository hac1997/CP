"use client";

import { FaArrowRight } from "react-icons/fa";

export default function ParceriasLaboraisPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Cabeçalho */}
      <header className="border-b-4 border-green-700 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center gap-3">
            Parcerias Laborais
          </h1>

        </div>
      </header>

      {/* Conteúdo principal */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10 text-justify">
        {/* O que são */}
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            O que são as Parcerias Laborais
          </h2>
          <div className="border-b border-green-700 w-16 mb-4"></div>

          <p className="leading-relaxed mb-4">
            As <strong>Parcerias Laborais</strong> são acordos firmados entre a
            Secretaria de Estado da Justiça e Reintegração Social e parceiros
            públicos ou privados interessados em utilizar a mão de obra
            prisional em atividades dentro ou fora das unidades penais.
          </p>

          <p className="leading-relaxed mb-4">
            Atualmente, o Estado possui cerca de{" "}
            <strong>200 Termos de Parceria Laboral ativos</strong>, sendo 150
            com empresas privadas e 50 com municípios, empresas públicas e OSCs.
          </p>

          <p className="leading-relaxed mb-4">
            Os presos atuam em diversas atividades, como limpeza urbana,
            produção de móveis, montagem de eletrônicos, confecção têxtil,
            fabricação de EPIs, panificação e até construção de embarcações.
          </p>

          <p className="leading-relaxed">
            O trabalho no sistema prisional catarinense caracteriza-se por sua
            natureza profissional, abrangendo diversas indústrias e linhas de
            produção, com destaque para o setor têxtil.
          </p>
        </section>

        {/* Sobre o Trabalho do Preso */}
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            Sobre o Trabalho do Preso
          </h2>
          <div className="border-b border-green-700 w-16 mb-4"></div>

          <p className="leading-relaxed mb-4">
            A <strong>Lei de Execuções Penais</strong>, em seu art. 31, impõe a
            obrigatoriedade de trabalho para condenados a penas privativas de
            liberdade, de acordo com suas aptidões e capacidade,
            diferenciando-se da situação do preso provisório, para quem a
            atividade laboral não é compulsória.
          </p>

          <p className="leading-relaxed mb-4">
            A jornada de trabalho é estabelecida entre <strong>6 e 8 horas</strong>,
            com repouso remunerado aos domingos e feriados.
          </p>

          <p className="leading-relaxed mb-4">
            A inclusão do preso no ambiente profissional cumpre papel essencial
            na ressocialização e qualificação profissional, preparando-o para o
            retorno à sociedade.
          </p>

          <p className="leading-relaxed">
            Além disso, o trabalho é vantajoso ao próprio preso: gera{" "}
            <strong>renda para sua família</strong> e garante{" "}
            <strong>um dia de remição de pena a cada três dias trabalhados</strong>.
          </p>
        </section>

        {/* Vantagens */}
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            Vantagens da Parceria
          </h2>
          <div className="border-b border-green-700 w-16 mb-4"></div>

          <p className="leading-relaxed mb-4">
            A principal vantagem da mão de obra carcerária é o{" "}
            <strong>baixo custo</strong>, pois não há vínculo empregatício formal
            entre empresas e presos. Assim, são eliminados encargos trabalhistas
            e previdenciários obrigatórios.
          </p>

          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Encargos Eliminados
          </h3>
          <ul className="list-disc list-inside leading-relaxed mb-6 ml-4">
            <li>FGTS</li>
            <li>Aviso prévio</li>
            <li>Indenizações</li>
            <li>Férias</li>
            <li>Auxílio-doença</li>
            <li>13º salário</li>
            <li>Contribuição previdenciária</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Benefícios para os Presos
          </h3>
          <ul className="list-disc list-inside leading-relaxed ml-4 mb-6">
            <li>Adquirem uma profissão</li>
            <li>Fonte de renda para si e suas famílias</li>
            <li>Um dia de remição de pena a cada três dias trabalhados</li>
            <li>Qualificação profissional</li>
            <li>Preparação para reinserção no mercado</li>
          </ul>

          <p className="leading-relaxed">
            Empresas com oficinas dentro das unidades penais também economizam
            em custos com aluguel e IPTU, já que os espaços são disponibilizados
            gratuitamente durante a vigência da Parceria Laboral.
          </p>
        </section>

        {/* Como Participar */}
        <section>
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            Me interessei! Como participar?
          </h2>
          <div className="border-b border-green-700 w-16 mb-4"></div>

          <p className="leading-relaxed mb-4">
            As Parcerias Laborais com o Sistema Prisional Catarinense são
            formalizadas por meio dos{" "}
            <strong>Termos de Parceria Laboral</strong>, celebrados após o
            lançamento dos <strong>Editais de Processo Público de Seleção</strong>.
          </p>

          <p className="leading-relaxed mb-4">
            Os interessados devem se inscrever nos certames publicados no site
            da <strong>Secretaria de Justiça e Reintegração Social de Santa Catarina</strong>.
          </p>

          <p className="leading-relaxed flex items-center gap-2">
            <FaArrowRight className="text-green-700" />
            Para mais informações, acesse a página{" "}
            <a
              href="/chamamentos"
              className="text-green-700 font-semibold hover:underline"
            >
              Chamamentos Públicos
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
