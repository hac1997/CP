// src/components/ui/EditalCard.tsx
import { Edital } from '@/types/edital'
import { MapPin, FileText, Calendar, Building2, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EditalCardProps {
  edital: Edital
}

const statusConfig = {
  proximo: { label: 'Próximo', color: 'border-l-gov-primary-500', pulse: true },
  aberto: { label: 'Aberto', color: 'border-l-gov-success-600', pulse: true },
  prorrogado: { label: 'Prorrogado', color: 'border-l-gov-success-500', pulse: false },
  fechado: { label: 'Em Andamento', color: 'border-l-gov-warning-600', pulse: false },
  concluido: { label: 'Finalizado', color: 'border-l-gov-neutral-400', pulse: false },
}

export function EditalCard({ edital }: EditalCardProps) {
  const config = statusConfig[edital.status] || statusConfig.aberto

  // Componente de Conteúdo do Card (Extraído para facilitar a leitura, mas deixado in-line)
  const cardContent = (
    <article
      className={cn(
        'relative rounded-2xl border-l-4 bg-white p-6 shadow-sm',
        'transition-all duration-200 ease-out',
        'hover:shadow-xl hover:-translate-y-1',
        config.color
      )}
    >
      <div className="space-y-4">
        {/* Cabeçalho */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-gov-neutral-900 line-clamp-2 transition-colors duration-200 group-hover:text-gov-warning-600">
            {edital.titulo}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            {config.pulse && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gov-success-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gov-success-500"></span>
              </span>
            )}
            <span className={cn(
              'px-3 py-1.5 rounded-full text-xs font-bold',
              edital.status === 'proximo' && 'bg-gov-primary-100 text-gov-primary-800',
              edital.status === 'aberto' && 'bg-gov-success-100 text-gov-success-800',
              edital.status === 'prorrogado' && 'bg-gov-success-50 text-gov-success-700',
              edital.status === 'fechado' && 'bg-gov-warning-100 text-gov-warning-800',
              edital.status === 'concluido' && 'bg-gov-neutral-100 text-gov-neutral-700',
            )}>
              {config.label}
            </span>
          </div>
        </div>

        {/* Descrição */}
        {edital.descricao && (
          <p className="text-sm text-gov-neutral-600 line-clamp-3">
            {edital.descricao}
          </p>
        )}

        {/* Infos */}
        <div className="space-y-2 text-sm">
          <InfoRow icon={<MapPin className="w-4 h-4" />} label="Regional" value={edital.regional} />
          <InfoRow icon={<FileText className="w-4 h-4" />} label="Tipo" value={edital.tipoChamamento} />
          <div className="flex items-start gap-2 text-gov-neutral-600">
            <Calendar className="w-4 h-4 text-gov-primary-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-xs">
              <div><strong>Publicado:</strong> {edital.dataPublicacao}</div>
              {edital.dataEncerramentoPropostas && (
                <div><strong>Encerra:</strong> <span className="text-gov-danger-600 font-medium">
                  {/* Assumindo que gov-danger-600 é a cor de perigo (vermelho) */}
                  {edital.dataEncerramentoPropostas}
                </span></div>
              )}
            </div>
          </div>
        </div>

        {/* Unidades */}
        {edital.unidadesPrisionais.length > 0 && (
          <div className="pt-4 border-t border-gov-neutral-200">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-gov-primary-600" />
              <p className="text-xs font-bold text-gov-neutral-700">
                Unidades ({edital.unidadesPrisionais.length})
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {edital.unidadesPrisionais.slice(0, 3).map(u => (
                <span key={u} className="px-2.5 py-1 text-xs font-medium text-gov-primary-700 bg-gov-primary-50 rounded-lg border border-gov-primary-200">
                  {u}
                </span>
              ))}
              {edital.unidadesPrisionais.length > 3 && (
                <span className="px-2.5 py-1 text-xs text-gov-neutral-600 bg-gov-neutral-100 rounded-lg">
                  +{edital.unidadesPrisionais.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Link */}
        {edital.link && (
          <div className="flex items-center gap-2 pt-4 border-t border-gov-neutral-200 text-gov-primary-600 transition-colors duration-200 group-hover:text-gov-warning-600">
            <span className="text-xs font-semibold">Ver detalhes</span>
            <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        )}
      </div>

      {/* Barra inferior */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gov-primary-500 to-gov-primary-600 w-0 group-hover:w-full transition-all duration-300 ease-out rounded-b-xl" />
    </article>
  )

  // O GROUP ESTÁ AQUI, NO <a>
  if (edital.link) {
    return (
      <a
        href={edital.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block focus:outline-none focus:ring-2 focus:ring-gov-primary-500 focus:ring-offset-2 rounded-2xl"
        aria-label={`Abrir edital "${edital.titulo}" em nova aba`}
      >
        {cardContent}
      </a>
    )
  }

  return <div className="group">{cardContent}</div>
}

// Componente auxiliar extraído/revisado
function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="text-gov-primary-600">{icon}</div>
      <div className="flex items-center gap-1.5">
        <span className="text-xs font-semibold text-gov-neutral-700">{label}:</span>
        {/* Adiciona transition-colors duration-200 para a suavidade na mudança de cor do texto */}
        <span className="text-gov-neutral-900 transition-colors duration-200 group-hover:text-gov-warning-600 truncate">
          {value}
        </span>
      </div>
    </div>
  )
}