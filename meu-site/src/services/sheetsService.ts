import { Edital } from '@/types/edital';

export async function fetchEditaisFromSheets(): Promise<Edital[]> {
  try {
    const response = await fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQt4DJGqv4o5u_II0Y1HrZ9XweHOKLR3Uvok-g1RSdId9y8JYs-iTJx_vXqV9xifCI4IUTDygs5NQPP/pub?output=csv'
    );

    if (!response.ok) {
      throw new Error('Falha ao buscar dados da planilha');
    }

    const csvText = await response.text();
    const editais = parseCSVToEditais(csvText);

    return editais;
  } catch (error) {
    console.error('Erro ao buscar editais:', error);
    return [];
  }
}

function parseCSVToEditais(csvText: string): Edital[] {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',').map(h => h.trim());

  const editais: Edital[] = [];

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;

    const values = parseCSVLine(lines[i]);

    if (values.length < headers.length) continue;

    const edital: Edital = {
      titulo: values[0] || '',
      descricao: values[1] || '',
      link: values[2] || '',
      dataPublicacao: values[3] || '',
      dataEncerramentoPropostas: values[4] || '',
      regional: values[5] || '',
      tipoChamamento: values[6] || '',
      tags: values[7] ? values[7].split('|').map(tag => tag.trim()) : [],
      status: determineStatus(values[4])
    };

    editais.push(edital);
  }

  return editais;
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

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

function determineStatus(dataEncerramento: string): 'proximo' | 'aberto' | 'fechado' | 'encerrado' | 'prorrogado' {
  if (!dataEncerramento) return 'aberto';

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const parts = dataEncerramento.split('/');
  if (parts.length !== 3) return 'aberto';

  const endDate = new Date(
    parseInt(parts[2]),
    parseInt(parts[1]) - 1,
    parseInt(parts[0])
  );

  const diffDays = Math.floor((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return 'fechado';
  if (diffDays > 7) return 'proximo';
  return 'aberto';
}

export function filterEditais(
  editais: Edital[],
  filters: { regional?: string; unidadePrisional?: string; tipo?: string }
): Edital[] {
  return editais.filter(edital => {
    if (filters.regional && edital.regional !== filters.regional) {
      return false;
    }

    if (filters.unidadePrisional && !edital.tags.includes(filters.unidadePrisional)) {
      return false;
    }

    if (filters.tipo && edital.tipoChamamento !== filters.tipo) {
      return false;
    }

    return true;
  });
}

export function sortEditaisByStatus(editais: Edital[]): Edital[] {
  const statusOrder = { proximo: 0, aberto: 1, emencerrado: 2 };

  return [...editais].sort((a, b) => {
    const statusDiff = statusOrder[a.status] - statusOrder[b.status];
    if (statusDiff !== 0) return statusDiff;

    const dateA = parseDate(a.dataPublicacao);
    const dateB = parseDate(b.dataPublicacao);
    return dateB.getTime() - dateA.getTime();
  });
}

function parseDate(dateString: string): Date {
  const parts = dateString.split('/');
  if (parts.length !== 3) return new Date();

  return new Date(
    parseInt(parts[2]),
    parseInt(parts[1]) - 1,
    parseInt(parts[0])
  );
}

export function getUniqueValues(editais: Edital[], field: 'regional' | 'tipoChamamento' | 'tags'): string[] {
  if (field === 'tags') {
    const allTags = editais.flatMap(e => e.tags);
    return Array.from(new Set(allTags)).sort();
  }

  const values = editais.map(e => e[field]).filter(Boolean);
  return Array.from(new Set(values)).sort();
}
