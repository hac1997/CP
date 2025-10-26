import React from 'react';
import { Edital } from '@/types/edital';

interface EditalCardProps {
  edital: Edital;
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

export const EditalCard: React.FC<EditalCardProps> = ({ edital }) => {
  const config = statusConfig[edital.status] || statusConfig.aberto;

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 ${config.borderColor}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 flex-1">{edital.titulo}</h3>
        <span className={`${config.bgColor} ${config.textColor} px-3 py-1 rounded-full text-sm font-medium ml-4`}>
          {config.label}
        </span>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">{edital.descricao}</p>

      <div className="space-y-2 mb-4 text-sm">
        <div className="flex gap-2">
          <span className="font-semibold text-gray-700">Regional:</span>
          <span className="text-gray-600">{edital.regional}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-gray-700">Tipo:</span>
          <span className="text-gray-600">{edital.tipoChamamento}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-gray-700">Publicação:</span>
          <span className="text-gray-600">{edital.dataPublicacao}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold text-gray-700">Encerramento:</span>
          <span className="text-gray-600">{edital.dataEncerramentoPropostas}</span>
        </div>
      </div>

      {edital.unidadesPrisionais.length > 0 && (
        <div className="mb-4">
          <span className="font-semibold text-gray-700 text-sm block mb-2">Unidades Prisionais:</span>
          <div className="flex flex-wrap gap-2">
            {edital.unidadesPrisionais.map((unidade, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
              >
                {unidade}
              </span>
            ))}
          </div>
        </div>
      )}

      {edital.link && (
        <a
          href={edital.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
        >
          Ver Edital
        </a>
      )}
    </div>
  );
};
