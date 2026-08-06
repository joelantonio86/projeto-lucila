export type Therapy = {
  id: string
  name: string
  summary: string
  highlights?: string[]
}

export const therapies: Therapy[] = [
  {
    id: 'acupuntura',
    name: 'Acupuntura',
    summary:
      'Técnica milenar chinesa para prevenção e tratamento de desconfortos físicos e psicossomáticos — como ansiedade, estresse e insônia — favorecendo o equilíbrio do corpo e da mente.',
  },
  {
    id: 'auriculoterapia',
    name: 'Auriculoterapia',
    summary:
      'Estimulação de pontos no pavilhão auricular com microagulhas, sementes, cristais ou Stiper, atuando sobre o organismo por meio desse microsistema.',
  },
  {
    id: 'tuina',
    name: 'Tui Ná',
    summary:
      'Massagem terapêutica chinesa voltada ao bem-estar, ao relaxamento muscular e à reintegração entre corpo, mente e espírito.',
  },
  {
    id: 'constelacao',
    name: 'Constelação Familiar Sistêmica',
    summary:
      'Terapia breve que amplia o olhar sobre o sistema familiar, identifica lealdades e ciclos repetidos e favorece caminhos de solução com mais leveza.',
  },
  {
    id: 'reiki',
    name: 'Reiki',
    summary:
      'Prática de reposição e equilíbrio energético pela canalização do Ki, com efeitos sobre os planos físico, mental, emocional e espiritual. Atendimento presencial ou a distância.',
    highlights: [
      'Relaxamento profundo',
      'Alívio de estresse e ansiedade',
      'Apoio no alívio de dores',
      'Paz mental',
      'Equilíbrio e vitalidade',
      'Suporte ao sistema imunológico',
    ],
  },
  {
    id: 'florais',
    name: 'Terapia Floral',
    summary:
      'Essências florais do Dr. Bach para estados emocionais e mentais em desequilíbrio. Podem complementar outros tratamentos, sem efeitos colaterais, atuando na raiz dos bloqueios.',
  },
]

export const credentials = [
  'Pós-graduação em Acupuntura',
  'Auriculoterapia e Tui Ná',
  'Constelação Familiar Sistêmica',
  'Reiki e Terapia Floral',
]

export const insight = {
  title: 'Corpo e emoção caminham juntos',
  text: 'O corpo muitas vezes expressa o que ainda não encontramos palavras para dizer. Sintomas físicos podem ter origem emocional — e é nesse olhar integrativo que o cuidado se torna mais completo.',
}

export const quote = {
  text: 'A imaginação é a metade da doença; a tranquilidade é a metade do remédio; e a paciência é o começo da cura.',
}

export const aboutText =
  'Atendimento acolhedor em terapias sistêmicas e integrativas, com escuta atenta e foco no reequilíbrio de corpo, mente e emoções.'

export const location = 'Juiz de Fora — MG'

export const instagramUrl =
  'https://www.instagram.com/lusouza.terapias.holisticas/'

export const whatsappPhone = '5532991604867'
export const whatsappDisplay = '(32) 99160-4867'
export const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
  'Olá, Lucila! Gostaria de saber mais sobre o atendimento.',
)}`
