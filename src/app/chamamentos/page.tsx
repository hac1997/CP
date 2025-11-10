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
    <main className="min-h-screen font-montserrat">
      <header className="border-b-4 border-green-700 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 flex items-center gap-3 font-montserrat">
            Editais de Processos Públicos de Seleção
          </h1>
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
