// src/services/editalService.ts  (ou sheetsService.ts)
import { Edital } from '@/types/edital';

/**
 * Busca editais da planilha pública do Google Sheets
 */
export async function fetchEditaisFromSheets(): Promise<Edital[]> {
  try {
    const response = await fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5fLkEGvYwDWreyCq0xLorJ0NbuqR1oFAQC76LBrkJY6ZR7RAKRRVVLQWa0CWgJRgrfdSJNX2iqkaG/pub?output=csv'
    );

    if (!response.ok) {
      throw new Error('Falha ao buscar dados da planilha');
    }

    const csvText = await response.text();
    return parseCSVToEditais(csvText);
  } catch (error) {
    console.error('Erro ao buscar editais:', error);
    return [];
  }
}

/**
 * Converte CSV em array de Editais
 */
export function parseCSVToEditais(csvText: string): Edital[] {
  const lines = splitCSVLines(csvText);
  const editais: Edital[] = [];

  for (const line of lines.slice(1)) {
    if (!line.trim()) continue;

    const values = parseCSVLine(line);
    if (values.length < 10) continue;

    const statusValue = (values[9] || '').toLowerCase().trim();
    const validStatus = ['proximo', 'aberto', 'fechado', 'concluido', 'prorrogado'].includes(statusValue)
      ? statusValue as 'proximo' | 'aberto' | 'fechado' | 'concluido' | 'prorrogado'
      : 'aberto';

    const edital: Edital = {
      titulo: values[0] || '',
      descricao: values[1] || '',
      link: values[2] || '',
      dataPublicacao: values[3] || '',
      dataEncerramentoPropostas: values[4] || '',
      dataFinalizacaoEdital: values[5] || '',
      regional: values[6] || '',
      tipoChamamento: values[7] || '',
      unidadesPrisionais: values[8] ? values[8].split(',').map(u => u.trim()) : [],
      status: validStatus
    };

    editais.push(edital);
  }

  return editais;
}

/**
 * Divide o CSV em linhas, respeitando quebras de linha dentro de células com aspas
 */
export function splitCSVLines(csvText: string): string[] {
  const lines: string[] = [];
  let currentLine = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];

    if (char === '"') {
      inQuotes = !inQuotes;
      currentLine += char;
    } else if (char === '\n' && !inQuotes) {
      if (currentLine.trim()) {
        lines.push(currentLine);
      }
      currentLine = '';
    } else if (char === '\r') {
      continue;
    } else {
      currentLine += char;
    }
  }

  if (currentLine.trim()) {
    lines.push(currentLine);
  }

  return lines;
}

/**
 * Parser CSV robusto (suporta aspas e vírgulas internas)
 */
export function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (const char of line) {
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

/**
 * Filtra editais por critérios
 */
export function filterEditais(
  editais: Edital[],
  filters: { regional?: string; unidadePrisional?: string; tipo?: string }
): Edital[] {
  return editais.filter(edital => {
    if (filters.regional && edital.regional !== filters.regional) return false;
    if (filters.unidadePrisional && !edital.unidadesPrisionais.includes(filters.unidadePrisional)) return false;
    if (filters.tipo && edital.tipoChamamento !== filters.tipo) return false;
    return true;
  });
}

/**
 * Ordena editais por status e data
 */
export function sortEditaisByStatus(editais: Edital[]): Edital[] {
  const statusOrder: Record<string, number> = {
    proximo: 0,
    aberto: 1,
    prorrogado: 2,
    fechado: 3,
    concluido: 4
  };

  return [...editais].sort((a, b) => {
    const statusDiff = statusOrder[a.status] - statusOrder[b.status];
    if (statusDiff !== 0) return statusDiff;

    const dateA = parseDate(a.dataPublicacao);
    const dateB = parseDate(b.dataPublicacao);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Converte string DD/MM/AAAA → Date
 */
export function parseDate(dateString: string): Date {
  const parts = dateString.split('/');
  if (parts.length !== 3) return new Date();

  return new Date(
    Number.parseInt(parts[2], 10),
    Number.parseInt(parts[1], 10) - 1,
    Number.parseInt(parts[0], 10)
  );
}

/**
 * Extrai valores únicos de um campo
 */
export function getUniqueValues(
  editais: Edital[],
  field: 'regional' | 'tipoChamamento' | 'unidadesPrisionais'
): string[] {
  if (field === 'unidadesPrisionais') {
    const allUnidades = editais.flatMap(e => e.unidadesPrisionais);
    return Array.from(new Set(allUnidades)).sort((a, b) => a.localeCompare(b));
  }

  const values = editais.map(e => e[field]).filter(Boolean) as string[];
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}