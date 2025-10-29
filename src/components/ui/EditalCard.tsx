import React from 'react';
import { Edital } from '@/types/edital';

interface EditalCardProps {
  edital: Edital;
}

interface CardContentProps {
  edital: Edital;
  config: {
    bgColor: string;
    textColor: string;
    borderColor: string;
    label: string;
  };
}

const statusConfig: Record<string, { label: string; bgColor: string; textColor: string; borderColor: string }> = {
  proximo: {
    label: 'Próximo',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-800',
    borderColor: 'border-blue-300'
  },
  aberto: {
    label: 'Aberto',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
    borderColor: 'border-green-300'
  },
  prorrogado: {
    label: 'Prorrogado',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
    borderColor: 'border-green-300'
  },
  fechado: {
    label: 'Em Andamento',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-800',
    borderColor: 'border-yellow-300'
  },
  concluido: {
    label: 'Finalizado',
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-800',
    borderColor: 'border-gray-300'
  }
};

const CardContent: React.FC<CardContentProps> = ({ edital, config }) => (
  <>
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-gray-900 flex-1 pr-3">{edital.titulo}</h3>
      <span className={`${config.bgColor} ${config.textColor} px-3 py-1 rounded-full text-xs font-semibold ml-2 whitespace-nowrap shrink-0`}>
        {config.label}
      </span>
    </div>

    <p className="text-gray-600 mb-5 leading-relaxed text-sm line-clamp-3">{edital.descricao}</p>

    <div className="space-y-3 mb-5">
      <div className="flex items-center gap-2 text-sm">
        <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-gray-700 font-medium truncate">{edital.regional}</span>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="text-gray-700 font-medium truncate">{edital.tipoChamamento}</span>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <div className="flex flex-col">
          <span className="text-gray-500 text-xs">Publicado: {edital.dataPublicacao}</span>
          {edital.dataEncerramentoPropostas && (
            <span className="text-gray-500 text-xs">Encerra: {edital.dataEncerramentoPropostas}</span>
          )}
        </div>
      </div>
    </div>

    {edital.unidadesPrisionais.length > 0 && (
      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-start gap-2 mb-2">
          <svg className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <div className="flex-1">
            <span className="text-xs font-semibold text-gray-700 block mb-2">Unidades Prisionais:</span>
            <div className="flex flex-wrap gap-1.5">
              {edital.unidadesPrisionais.map(unidade => (
                <span
                  key={unidade}
                  className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-xs font-medium border border-blue-200"
                >
                  {unidade}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);

export const EditalCard: React.FC<EditalCardProps> = ({ edital }) => {
  const config = statusConfig[edital.status] || statusConfig.aberto;

  if (edital.link) {
    return (
      <a
        href={edital.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block mb-5 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border-l-4 ${config.borderColor} hover:scale-[1.02] hover:z-[0] cursor-pointer`}
      >
        <CardContent edital={edital} config={config} />
      </a>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 border-l-4 z-[-1]${config.borderColor}`}>
      <CardContent edital={edital} config={config} />
    </div>
  );
};