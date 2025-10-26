export interface Edital {
  titulo: string;
  descricao: string;
  link: string;
  dataPublicacao: string;
  dataEncerramentoPropostas: string;
  regional: string;
  tipoChamamento: string;
  tags: string[];
  status: 'proximo' | 'aberto' | 'fechado' | 'concluido' | 'prorrogado';
}

export interface EditalFilters {
  regional?: string;
  unidadePrisional?: string;
  tipo?: string;
}
