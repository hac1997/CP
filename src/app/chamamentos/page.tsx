// app/chamamentos/page.tsx
import { FilterClientWrapper } from "./FilterClientWrapper"
import { fetchEditaisFromSheets, getUniqueValues } from "@/services/editalService"
import { EditalComAno } from "@/services/editalService"

export default async function ChamamentosPage() {
  const editais: EditalComAno[] = await fetchEditaisFromSheets()
  const regionais = getUniqueValues(editais, "regional") as string[]
  const unidades = getUniqueValues(editais, "unidadesPrisionais") as string[]
  const tipos = getUniqueValues(editais, "tipoChamamento") as string[]
  const anos = getUniqueValues(editais, "ano") as number[]

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <header className="border-b-4 border-green-700 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Chamamentos Públicos
          </h1>
          <p className="text-lg text-gray-600">
            Acompanhe os editais e chamamentos públicos disponíveis
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <FilterClientWrapper
          editais={editais}
          regionais={regionais}
          unidades={unidades}
          tipos={tipos}
          anos={anos}
        />
      </section>
    </main>
  )
}