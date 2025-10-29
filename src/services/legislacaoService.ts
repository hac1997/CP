import { Legislacao } from '@/types/legislacao';
import { parseCSVLine } from './sheetsService';

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

export function parseCSVToLegislacoes(csvText: string): Legislacao[] {
  const lines = csvText.split('\n');
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
