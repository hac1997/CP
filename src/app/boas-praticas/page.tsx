import { fetchBoasPraticasFromSheets } from '@/services/boaspraticasService'
import { BoasPraticasSection } from '@/components/ui/BoasPraticasSection'

export default async function BoasPraticasPage() {
  const sections = await fetchBoasPraticasFromSheets()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b-4 border-green-700 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Boas Práticas
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Conheça as iniciativas e projetos desenvolvidos pelo departamento
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {sections.length > 0 ? (
            sections.map((section, index) => (
              <BoasPraticasSection key={index} section={section} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhuma seção disponível no momento.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
