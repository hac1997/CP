import React from "react";
import {
  FaHandshake,
  FaCheckCircle,
  FaBriefcase,
  FaClipboardList,
} from "react-icons/fa";

export default function ParceriasLaboraisPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100">
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {/* Introdução */}
        <div className="bg-white rounded-2xl shadow-lg p-10 transition hover:shadow-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 flex items-center gap-4">
            <FaHandshake className="text-green-600 text-4xl" />
            O que são as Parcerias Laborais
          </h2>
          <div className="text-gray-700 leading-relaxed text-lg space-y-4">
            <p>
              As <strong>Parcerias Laborais</strong> são acordos firmados entre a
              Secretaria de Estado da Justiça e Reintegração Social e parceiros
              públicos ou privados interessados em utilizar a mão de obra
              prisional em atividades dentro ou fora das unidades penais.
            </p>
            <p>
              Atualmente, o Estado possui cerca de{" "}
              <strong>200 Termos de Parceria Laboral ativos</strong>, sendo 150
              com empresas privadas e 50 com municípios, empresas públicas e
              OSCs.
            </p>
            <p>
              Os presos atuam em diversas atividades, como limpeza urbana,
              produção de móveis, montagem de eletrônicos, confecção têxtil,
              fabricação de EPIs, panificação e até construção de embarcações.
            </p>
            <p>
              O trabalho no sistema prisional catarinense caracteriza-se por sua
              natureza profissional, abrangendo diversas indústrias e linhas de
              produção, com destaque para o setor têxtil.
            </p>
          </div>
        </div>

        {/* Sobre o Trabalho */}
        <div className="bg-white rounded-2xl shadow-lg p-10 transition hover:shadow-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 flex items-center gap-4">
            <FaBriefcase className="text-green-600 text-4xl" />
            Sobre o Trabalho do Preso
          </h2>
          <div className="text-gray-700 leading-relaxed text-lg space-y-4">
            <p>
              A Lei de Execuções Penais, em seu art. 31, impõe a{" "}
              <strong>
                obrigatoriedade de trabalho para condenados a penas privativas
                de liberdade</strong>, de acordo com suas aptidões e capacidade, diferenciando-se da
              situação do preso provisório, para quem a atividade laboral não é
              compulsória.
            </p>
            <p>
              A jornada de trabalho é estabelecida entre{" "}
              <strong>6 e 8 horas</strong>, com repouso remunerado aos domingos
              e feriados.
            </p>
            <p>
              A inclusão do preso no ambiente profissional cumpre papel
              essencial na{" "}
              <strong>ressocialização e qualificação profissional</strong>,
              preparando-o para o retorno à sociedade.
            </p>
            <p>
              Além disso, o trabalho é vantajoso ao próprio preso: gera renda
              para sua família e garante{" "}
              <strong>um dia de remição de pena a cada três dias trabalhados</strong>.
            </p>
          </div>
        </div>

        {/* Vantagens */}
        <div className="bg-white rounded-2xl shadow-lg p-10 transition hover:shadow-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 flex items-center gap-4">
            <FaCheckCircle className="text-green-600 text-4xl" />
            Vantagens da Parceria
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            A principal vantagem da mão de obra carcerária é o{" "}
            <strong>baixo custo</strong>, pois não há vínculo empregatício
            formal entre empresas e presos. Assim, são eliminados encargos
            trabalhistas e previdenciários obrigatórios.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="border-l-4 border-green-600 pl-6 py-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Encargos Eliminados
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "FGTS",
                  "Aviso prévio",
                  "Indenizações",
                  "Férias",
                  "Auxílio-doença",
                  "13º salário",
                  "Contribuição previdenciária",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-green-600 font-bold text-xl">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Benefícios para os Presos
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Adquirem uma profissão",
                  "Fonte de renda para si e suas famílias",
                  "Um dia de remição de pena a cada três dias trabalhados",
                  "Qualificação profissional",
                  "Preparação para reinserção no mercado",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold text-xl">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg mt-8">
            Empresas com oficinas dentro das unidades penais também economizam
            em custos com <strong>aluguel e IPTU</strong>, já que os espaços são
            disponibilizados gratuitamente durante a vigência da Parceria
            Laboral.
          </p>
        </div>

        {/* Como Participar */}
        <div className="bg-white rounded-2xl shadow-lg p-10 transition hover:shadow-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 flex items-center gap-4">
            <FaClipboardList className="text-green-600 text-4xl" />
            Me interessei! Como participar?
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            As Parcerias Laborais com o Sistema Prisional Catarinense são
            formalizadas por meio dos{" "}
            <strong>Termos de Parceria Laboral</strong>, celebrados após o
            lançamento dos{" "}
            <strong>Editais de Processo Público de Seleção</strong>.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-md">
            <p className="text-gray-800 text-lg mb-4">
              Os interessados devem se inscrever nos certames publicados no site
              da Secretaria de Justiça e Reintegração Social de Santa Catarina.
            </p>
            <p className="text-gray-800 text-lg font-semibold">
              Para mais informações, acesse a página{" "}
              <a
                href="/chamamentos"
                className="text-green-700 hover:text-green-800 underline font-bold"
              >
                Chamamentos Públicos
              </a>.
            </p>
          </div>
        </div>


      </section>
    </main>
  );
}
