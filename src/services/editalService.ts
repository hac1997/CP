// src/services/editalService.ts
import { Edital } from '@/types/edital';
import { parseCSVLine } from '@/lib/csvUtils';

export type EditalComAno = Edital & { ano: number };

const URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5fLkEGvYwDWreyCq0xLorJ0NbuqR1oFAQC76LBrkJY6ZR7RAKRRVVLQWa0CWgJRgrfdSJNX2iqkaG/pub?gid=0&single=true&output=csv';

export async function fetchEditaisFromSheets(): Promise<EditalComAno[]> {
  try {
    const res = await fetch(URL);
    if (!res.ok) return [];
    const csv = await res.text();
    return parseCSVToEditais(csv);
  } catch {
    return [];
  }
}

export function parseCSVToEditais(csvText: string): EditalComAno[] {
  const lines = csvText.split('\n');
  const editais: EditalComAno[] = [];

  for (const line of lines.slice(1)) {
    if (!line.trim()) continue;
    const values = parseCSVLine(line);
    if (values.length < 10) continue;

    const dataPub = values[3] || '';
    const ano = extractYear(dataPub);
    const status = normalizeStatus(values[9]);

    editais.push({
      titulo: values[0] || '',
      descricao: values[1] || '',
      link: values[2] || '',
      dataPublicacao: dataPub,
      dataEncerramentoPropostas: values[4] || '',
      dataFinalizacaoEdital: values[5] || '',
      regional: values[6] || '',
      tipoChamamento: values[7] || '',
      unidadesPrisionais: values[8] ? values[8].split(',').map(u => u.trim()) : [],
      status,
      ano,
    });
  }
  return editais;
}

function extractYear(date: string): number {
  const match = date.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : new Date().getFullYear();
}

function normalizeStatus(status: string): Edital['status'] {
  const s = status.toLowerCase().trim();
  return ['proximo', 'aberto', 'fechado', 'concluido', 'prorrogado'].includes(s)
    ? s as Edital['status']
    : 'aberto';
}

export function filterEditais(
  editais: EditalComAno[],
  filters: { regional?: string; unidadePrisional?: string; tipo?: string; ano?: string }
): EditalComAno[] {
  return editais.filter(e => {
    if (filters.regional && e.regional !== filters.regional) return false;
    if (filters.unidadePrisional && !e.unidadesPrisionais.includes(filters.unidadePrisional)) return false;
    if (filters.tipo && e.tipoChamamento !== filters.tipo) return false;
    if (filters.ano && e.ano.toString() !== filters.ano) return false;
    return true;
  });
}

export function sortEditaisByStatus(editais: EditalComAno[]): EditalComAno[] {
  const order: Record<string, number> = { proximo: 0, aberto: 1, prorrogado: 2, fechado: 3, concluido: 4 };
  return [...editais].sort((a, b) => {
    const diff = order[a.status] - order[b.status];
    if (diff !== 0) return diff;
    return new Date(b.dataPublicacao.split('/').reverse().join('-')).getTime() -
           new Date(a.dataPublicacao.split('/').reverse().join('-')).getTime();
  });
}

export function getUniqueValues(
  editais: EditalComAno[],
  field: 'regional' | 'tipoChamamento' | 'unidadesPrisionais' | 'ano'
): string[] | number[] {
  if (field === 'unidadesPrisionais') {
    return Array.from(new Set(editais.flatMap(e => e.unidadesPrisionais))).sort((a, b) => a.localeCompare(b));
  }
  if (field === 'ano') {
    return Array.from(new Set(editais.map(e => e.ano))).sort((a, b) => b - a);
  }
  return Array.from(new Set(editais.map(e => e[field]).filter(Boolean) as string[])).sort((a, b) => a.localeCompare(b));
}