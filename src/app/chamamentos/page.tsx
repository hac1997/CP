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
    <section className="max-w-7xl mx-auto px-6 py-10">
      <FilterClientWrapper
        editais={editais}
        regionais={regionais}
        unidades={unidades}
        tipos={tipos}
        anos={anos}
      />
    </section>
  )
}