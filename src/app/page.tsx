import { NavigationCard } from '@/components/ui/NavigationCard'
import { FaHandshake, FaGavel, FaBookOpen, FaBullhorn, FaAward } from 'react-icons/fa'
import { HeroCarousel } from '@/components/HeroCarousel'

export const revalidate = 86400 // 24h

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NavigationCard
            title="Legislação"
            description="Acesse as legislações relacionadas ao trabalho prisional e reintegração social."
            href="/legislacao"
            icon={<FaGavel aria-hidden="true" />}
            ariaLabel="Acessar página de Legislação"
          />
          <NavigationCard
            title="Orientações"
            description="Consulte orientações e procedimentos internos do departamento."
            href="/orientacoes"
            icon={<FaBookOpen aria-hidden="true" />}
            ariaLabel="Acessar página de Orientações"
          />
          <NavigationCard
            title="Parcerias Laborais"
            description="Conheça o programa de parcerias laborais e como participar."
            href="/parcerias-laborais"
            icon={<FaHandshake aria-hidden="true" />}
            ariaLabel="Acessar página de Parcerias Laborais"
          />
          <NavigationCard
            title="Boas Práticas"
            description="Conheça projetos sociais, oficinas próprias e iniciativas do departamento."
            href="/boas-praticas"
            icon={<FaAward aria-hidden="true" />}
            ariaLabel="Acessar página de Boas Práticas"
          />
          <NavigationCard
            title="Chamamentos Públicos"
            description="Acompanhe os chamamentos públicos abertos, próximos e encerrados."
            href="/chamamentos"
            icon={<FaBullhorn aria-hidden="true" />}
            ariaLabel="Acessar página de Chamamentos Públicos"
          />
          <NavigationCard
            title="Dispensas"
            description="Veja as possibilidades de celebração por meio de dispensas de chamamento público."
            href="/dispensas"
            icon={<FaBullhorn aria-hidden="true" />}
            ariaLabel="Acessar página de Dispensas"
          />
        </div>
      </section>
    </>
  )
}