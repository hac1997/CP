import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

export default function LegislacaoPage() {
  // Array de objetos contendo as informações de cada legislação
  const legislacoes = [
    {
      titulo: 'Constituição Federal de 1988 (CF/88)',
      descricao: 'A Carta Magna do Brasil, que estabelece os direitos e deveres fundamentais, sendo a base de todo o ordenamento jurídico.',
      link: 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm',
      linkTexto: 'Acessar Constituição →',
    },
    {
      titulo: 'Lei de Execução Penal - Lei nº 7.210/1984',
      descricao: 'Institui a Lei de Execução Penal e estabelece normas sobre o trabalho prisional (consideradas as suas alterações posteriores).',
      link: 'https://www.planalto.gov.br/ccivil_03/leis/l7210.htm',
      linkTexto: 'Acessar Lei →',
    },
    {
      titulo: 'Resolução CNPCP nº 03/2009',
      descricao: 'Dispõe sobre as Diretrizes Nacionais sobre o Trabalho no âmbito do Sistema Prisional.',
      link: 'https://www.gov.br/depen/pt-br/composicao/cnpcp/resolucoes/2009/resolucao-no-03-de-15-de-julho-de-2009.pdf',
      linkTexto: 'Acessar Resolução →',
    },
    {
      titulo: 'Lei Complementar Estadual nº 809/2022',
      descricao: 'Dispõe sobre os Fundos Rotativos do Sistema Penal do Estado e a celebração de parcerias de incentivo à atividade laboral no sistema prisional.',
      link: '#', // Inserir link da lei, se disponível
      linkTexto: 'Informação da Lei',
    },
    {
      titulo: 'Lei Complementar Estadual nº 529/2011',
      descricao: 'Trata do Regimento Interno dos Estabelecimentos Penais do Estado de Santa Catarina.',
      link: 'https://leis.alesc.sc.gov.br/html/2011/529_2011_lei_complementar.html', // Exemplo de link
      linkTexto: 'Acessar Lei →',
    },
    {
      titulo: 'Lei Estadual nº 18.513/2023',
      descricao: 'Dispõe sobre a política de trabalho e renda no sistema prisional de Santa Catarina.',
      link: 'http://leis.alesc.sc.gov.br/html/2023/18513_2023_lei.html',
      linkTexto: 'Acessar Lei →',
    },
    {
      titulo: 'Lei Estadual nº 18.011/2020',
      descricao: 'Institui a Política Estadual de Incentivo à Reinserção Social de Apenados e Egressos do Sistema Prisional.',
      link: 'http://leis.alesc.sc.gov.br/html/2020/18011_2020_lei.html', // Exemplo de link
      linkTexto: 'Acessar Lei →',
    },
    {
      titulo: 'Lei Federal nº 13.019/2014 (MROSC)',
      descricao: 'Aplicada supletiva e subsidiariamente aos procedimentos de parcerias com organizações da sociedade civil (MROSC).',
      link: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l13019.htm',
      linkTexto: 'Acessar Lei →',
    },
    {
      titulo: 'Lei Federal nº 14.133/2021 (Nova Lei de Licitações)',
      descricao: 'Aplicada subsidiariamente aos Termos de Parceria Laboral.',
      link: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm',
      linkTexto: 'Acessar Lei →',
    },
  ];

  return (
    <main className=" bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Base Legal e Legislações Aplicáveis</h2>

          <div className="space-y-6">
            {legislacoes.map((lei, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 py-2">
                <div className="flex items-start gap-3">
                  <FaFileAlt className="text-blue-600 text-xl mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {lei.titulo}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {lei.descricao}
                    </p>
                    <a
                      href={lei.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {lei.linkTexto}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}