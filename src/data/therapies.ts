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
      'Técnica milenar chinesa que favorece a cura e a prevenção de desconfortos físicos e psicossomáticos, como ansiedade, estresse e insônia, reequilibrando corpo, mente e espírito.',
  },
  {
    id: 'auriculoterapia',
    name: 'Auriculoterapia',
    summary:
      'Acupuntura no pavilhão auricular com microagulhas, sementes, cristais ou Stiper, tratando corpo e mente por meio desse microsistema.',
  },
  {
    id: 'tuina',
    name: 'Tui Ná',
    summary:
      'Massagem terapêutica chinesa voltada ao bem-estar, ao relaxamento e à reintegração de corpo, mente e espírito.',
  },
  {
    id: 'constelacao',
    name: 'Constelação Familiar Sistêmica',
    summary:
      'Terapia breve que ajuda a olhar o próprio sistema familiar, reconhecer lealdades e ciclos repetidos, e encontrar caminhos de solução com mais leveza.',
  },
  {
    id: 'reiki',
    name: 'Reiki',
    summary:
      'Método de desbloqueio e reposição energética pela canalização do Ki, promovendo equilíbrio físico, mental, emocional e espiritual — presencial ou a distância.',
    highlights: [
      'Relaxamento profundo',
      'Alívio do estresse e da ansiedade',
      'Melhora e alívio de dores',
      'Paz mental',
      'Energiza e equilibra o corpo',
      'Fortalece o sistema imunológico',
    ],
  },
  {
    id: 'florais',
    name: 'Terapia Floral',
    summary:
      'Essências florais do Dr. Bach para estados emocionais e mentais em desequilíbrio. Removem bloqueios na raiz, sem efeitos colaterais, e podem complementar outros tratamentos.',
  },
]

export const insight = {
  title: 'Corpo e emoção caminham juntos',
  text: 'Nosso corpo expressa o que nem sempre conseguimos dizer de forma consciente. Os sintomas podem ser físicos, mas a origem muitas vezes é emocional — e é nesse olhar integrativo que o cuidado acontece.',
}

export const quote = {
  text: 'Tudo aquilo que você pensa, você cria; tudo aquilo que você sente, você atrai; e tudo aquilo que você acredita, torna-se realidade.',
}

export const aboutText =
  'Terapeuta integrativa com pós-graduação em Acupuntura, atuando também com auriculoterapia, Tui Ná, Constelação Familiar Sistêmica, Reiki e Terapia Floral. Um cuidado acolhedor para reequilibrar corpo, mente e emoções.'

export const instagramUrl =
  'https://www.instagram.com/lusouza.terapias.holisticas/'

export const whatsappPhone = '5532991604867'
export const whatsappDisplay = '(32) 99160-4867'
export const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
  'Olá Lucila! Gostaria de saber mais sobre as terapias.',
)}`
