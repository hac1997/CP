// src/services/orientacaoService.ts
import { Orientacao } from '@/types/orientacao';
import { parseCSVLine, splitCSVLines } from '@/lib/csvUtils';

const URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5fLkEGvYwDWreyCq0xLorJ0NbuqR1oFAQC76LBrkJY6ZR7RAKRRVVLQWa0CWgJRgrfdSJNX2iqkaG/pub?gid=2139950206&single=true&output=csv';

export async function fetchOrientacoesFromSheets(): Promise<Orientacao[]> {
  try {
    const res = await fetch(URL);
    if (!res.ok) return [];
    const csv = await res.text();
    return parseCSVToOrientacoes(csv);
  } catch {
    return [];
  }
}

export function parseCSVToOrientacoes(csvText: string): Orientacao[] {
  const lines = splitCSVLines(csvText);
  return lines.slice(1).map(line => {
    const values = parseCSVLine(line);
    if (values.length < 4) return null;
    return {
      titulo: values[0] || '',
      descricao: values[1] || '',
      linkTexto: values[2] || '',
      link: values[3] || ''
    };
  }).filter(Boolean) as Orientacao[];
}