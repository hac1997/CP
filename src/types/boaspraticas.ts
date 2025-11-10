export type SectionType = '1' | '2' | '3' | '4'

export interface BoasPraticasSection {
  tipo: SectionType
  titulo: string
  texto: string
  imagens: string[]
}
