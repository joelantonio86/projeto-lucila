import acupunturaImg from '../assets/highlights/acupuntura.png'
import auriculopunturaImg from '../assets/highlights/auriculopuntura.png'
import auriculoterapiaImg from '../assets/highlights/auriculoterapia.png'
import constelacaoImg from '../assets/highlights/constelacao.png'
import floraisImg from '../assets/highlights/florais.png'
import reikiImg from '../assets/highlights/reiki.png'
import tuinaImg from '../assets/highlights/tuina.png'

export type Therapy = {
  id: string
  name: string
  summary: string
  image: string
  imageAlt: string
  highlights?: string[]
}

export const therapies: Therapy[] = [
  {
    id: 'constelacao',
    name: 'Constelação Familiar Sistêmica',
    summary:
      'Terapia breve que amplia o olhar sobre o sistema familiar, identifica lealdades e ciclos repetidos e favorece caminhos de solução com mais leveza. Atendimento presencial e online — abordagem de foco atual.',
    image: constelacaoImg,
    imageAlt:
      'Representação de Constelação Familiar com bonecos coloridos dispostos em círculo, simbolizando relações sistêmicas',
  },
  {
    id: 'acupuntura',
    name: 'Acupuntura',
    summary:
      'Técnica milenar chinesa para prevenção e tratamento de desconfortos físicos e psicossomáticos — como ansiedade, estresse e insônia — favorecendo o equilíbrio do corpo e da mente.',
    image: acupunturaImg,
    imageAlt: 'Destaque de Acupuntura',
  },
  {
    id: 'auriculopuntura',
    name: 'Auriculopuntura',
    summary:
      'Acupuntura no pavilhão auricular com microagulhas, atuando sobre o organismo por meio do microsistema da orelha para reequilíbrio físico e emocional.',
    image: auriculopunturaImg,
    imageAlt: 'Destaque de Auriculopuntura',
  },
  {
    id: 'auriculoterapia',
    name: 'Auriculoterapia',
    summary:
      'Estimulação de pontos auriculares com sementes, cristais ou Stiper, promovendo tratamento do corpo e da mente a partir desse microsistema.',
    image: auriculoterapiaImg,
    imageAlt: 'Destaque de Auriculoterapia',
  },
  {
    id: 'tuina',
    name: 'Tui Ná',
    summary:
      'Massagem terapêutica chinesa voltada ao bem-estar, ao relaxamento muscular e à reintegração entre corpo, mente e espírito.',
    image: tuinaImg,
    imageAlt: 'Destaque de Tui Ná',
  },
  {
    id: 'reiki',
    name: 'Reiki',
    summary:
      'Prática de reposição e equilíbrio energético pela canalização do Ki, com efeitos sobre os planos físico, mental, emocional e espiritual. Atendimento presencial ou a distância.',
    image: reikiImg,
    imageAlt: 'Destaque de Reiki',
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
    image: floraisImg,
    imageAlt: 'Destaque de Terapia Floral',
  },
]

export const credentials = [
  'Constelação Familiar Sistêmica',
  'Pós-graduação em Acupuntura',
  'Auriculopuntura e Auriculoterapia',
  'Tui Ná, Reiki e Terapia Floral',
]

export const insight = {
  title: 'Corpo e emoção caminham juntos',
  text: 'O corpo muitas vezes expressa o que ainda não encontramos palavras para dizer. Sintomas físicos podem ter origem emocional — e é nesse olhar integrativo que o cuidado se torna mais completo.',
}

export const quote = {
  text: 'A imaginação é a metade da doença; a tranquilidade é a metade do remédio; e a paciência é o começo da cura.',
}

export const aboutText =
  'Atendimento em terapias sistêmicas e integrativas, com escuta atenta, ética profissional e foco no reequilíbrio de corpo, mente e emoções.'

export const location = 'Juiz de Fora — MG'

export const instagramUrl =
  'https://www.instagram.com/lusouza.terapias.holisticas/'

export const whatsappPhone = '5532991604867'
export const whatsappDisplay = '(32) 99160-4867'
export const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
  'Olá, Lucila! Gostaria de saber mais sobre o atendimento.',
)}`
