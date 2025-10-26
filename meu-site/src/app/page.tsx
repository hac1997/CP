import React from 'react';
import { NavigationCard } from '@/components/ui/NavigationCard';
import { StatsCard } from '@/components/ui/StatsCard';
import { FaUsers, FaHandshake, FaBuilding, FaGavel, FaBookOpen, FaBullhorn, FaAward } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Departamento de Trabalho e Renda Prisional
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            SEJURI - Secretaria de Estado de Justiça e Reintegração Social
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Estatísticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StatsCard
            title="Presos Trabalhando"
            value="1.247"
            icon={<FaUsers />}
          />
          <StatsCard
            title="Parcerias Laborais"
            value="89"
            icon={<FaHandshake />}
          />
          <StatsCard
            title="Número de Empresas Parceiras"
            value="67"
            icon={<FaBuilding />}
          />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8">Acesso Rápido</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NavigationCard
            title="Legislação"
            description="Acesse as legislações relacionadas ao trabalho prisional e reintegração social."
            href="/legislacao"
            icon={<FaGavel />}
          />
          <NavigationCard
            title="Orientações"
            description="Consulte orientações e procedimentos internos do departamento."
            href="/orientacoes"
            icon={<FaBookOpen />}
          />
          <NavigationCard
            title="Acidente de Trabalho"
            description="Informações sobre procedimentos em caso de acidente de trabalho."
            href="/acidente-trabalho"
            icon={<FaUsers />}
          />
          <NavigationCard
            title="Parcerias Laborais"
            description="Conheça o programa de parcerias laborais e como participar."
            href="/parcerias-laborais"
            icon={<FaHandshake />}
          />
          <NavigationCard
            title="Boas Práticas"
            description="Conheça projetos sociais, oficinas próprias e iniciativas do departamento."
            href="/boas-praticas"
            icon={<FaAward />}
          />
          <NavigationCard
            title="Chamamentos Públicos"
            description="Acompanhe os chamamentos públicos abertos, próximos e encerrados."
            href="/chamamentos"
            icon={<FaBullhorn />}
          />
        </div>
      </section>
    </main>
  );
}
