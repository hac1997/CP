import { BoasPraticasSection } from '@/types/boaspraticas'

const GOOGLE_SHEETS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTppBrYAHyNawUbM5a9MN6PQexFx-LWE-KNlTaSicw0r9p1pWfHqOiiycmocvL52zWW4iktgkn_Ny96/pub?gid=0&single=true&output=csv'

export async function fetchBoasPraticasFromSheets(): Promise<BoasPraticasSection[]> {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data from Google Sheets')
    }

    const csvText = await response.text()
    const lines = csvText.trim().split('\n')

    if (lines.length <= 1) {
      return []
    }

    const sections: BoasPraticasSection[] = []

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i]

      const fields: string[] = []
      let currentField = ''
      let insideQuotes = false

      for (let j = 0; j < line.length; j++) {
        const char = line[j]

        if (char === '"') {
          insideQuotes = !insideQuotes
        } else if (char === ',' && !insideQuotes) {
          fields.push(currentField.trim())
          currentField = ''
        } else {
          currentField += char
        }
      }
      fields.push(currentField.trim())

      if (fields.length >= 4) {
        const tipo = fields[0].trim() as '1' | '2' | '3' | '4'
        const titulo = fields[1].trim()
        const texto = fields[2].trim()
        const imagensRaw = fields[3].trim()

        const imagens = imagensRaw
          .split('\n')
          .map(url => url.trim())
          .filter(url => url.length > 0 && (url.startsWith('http://') || url.startsWith('https://')))

        if (['1', '2', '3', '4'].includes(tipo)) {
          sections.push({
            tipo,
            titulo,
            texto,
            imagens
          })
        }
      }
    }

    return sections
  } catch (error) {
    console.error('Error fetching boas praticas from Google Sheets:', error)
    return []
  }
}
