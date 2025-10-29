import { Orientacao } from '@/types/orientacao';
import { parseCSVLine } from './sheetsService';

const ORIENTACAO_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5fLkEGvYwDWreyCq0xLorJ0NbuqR1oFAQC76LBrkJY6ZR7RAKRRVVLQWa0CWgJRgrfdSJNX2iqkaG/pub?gid=2139950206&single=true&output=csv';

export async function fetchOrientacoesFromSheets(): Promise<Orientacao[]> {
  try {
    const response = await fetch(ORIENTACAO_SHEET_URL);

    if (!response.ok) {
      throw new Error('Falha ao buscar dados da planilha');
    }

    const csvText = await response.text();
    return parseCSVToOrientacoes(csvText);
  } catch (error) {
    console.error('Erro ao buscar orientações:', error);
    return [];
  }
}

export function parseCSVToOrientacoes(csvText: string): Orientacao[] {
  const lines = csvText.split('\n');
  const orientacoes: Orientacao[] = [];

  for (const line of lines.slice(1)) {
    if (!line.trim()) continue;

    const values = parseCSVLine(line);
    if (values.length < 4) continue;

    const orientacao: Orientacao = {
      titulo: values[0] || '',
      descricao: values[1] || '',
      linkTexto: values[2] || '',
      link: values[3] || ''
    };

    orientacoes.push(orientacao);
  }

  return orientacoes;
}
