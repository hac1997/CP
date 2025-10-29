import { Legislacao } from '@/types/legislacao';

const LEGISLACAO_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5fLkEGvYwDWreyCq0xLorJ0NbuqR1oFAQC76LBrkJY6ZR7RAKRRVVLQWa0CWgJRgrfdSJNX2iqkaG/pub?gid=6959380&single=true&output=csv';

export async function fetchLegislacoesFromSheets(): Promise<Legislacao[]> {
  try {
    const response = await fetch(LEGISLACAO_SHEET_URL);

    if (!response.ok) {
      throw new Error('Falha ao buscar dados da planilha');
    }

    const csvText = await response.text();
    return parseCSVToLegislacoes(csvText);
  } catch (error) {
    console.error('Erro ao buscar legislações:', error);
    return [];
  }
}

function splitCSVLines(csvText: string): string[] {
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

function parseCSVLine(line: string): string[] {
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

export function parseCSVToLegislacoes(csvText: string): Legislacao[] {
  const lines = splitCSVLines(csvText);
  const legislacoes: Legislacao[] = [];

  for (const line of lines.slice(1)) {
    if (!line.trim()) continue;

    const values = parseCSVLine(line);
    if (values.length < 4) continue;

    const legislacao: Legislacao = {
      titulo: values[0] || '',
      descricao: values[1] || '',
      linkTexto: values[2] || '',
      link: values[3] || ''
    };

    legislacoes.push(legislacao);
  }

  return legislacoes;
}
