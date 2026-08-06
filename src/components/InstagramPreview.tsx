import reikiBeneficiosImg from '../assets/posts/reiki-beneficios.png'
import reikiAntesDepoisImg from '../assets/posts/reiki-antes-depois.png'
import citacaoBudaImg from '../assets/posts/citacao-buda.png'
import { instagramUrl } from '../data/therapies'

const posts = [
  {
    src: reikiBeneficiosImg,
    alt: 'Post com benefícios do Reiki',
    label: 'Benefícios',
  },
  {
    src: reikiAntesDepoisImg,
    alt: 'Ilustração humorística antes e depois do Reiki',
    label: 'Reiki',
  },
  {
    src: citacaoBudaImg,
    alt: 'Citação inspiradora com imagem de Buda',
    label: 'Reflexão',
  },
]

export function InstagramPreview() {
  return (
    <section
      className="section instagram-preview"
      aria-labelledby="instagram-title"
    >
      <div className="section__inner">
        <p className="eyebrow">No Instagram</p>
        <h2 id="instagram-title">Conteúdos que acolhem</h2>
        <p className="section__lead">
          Dicas, reflexões e terapias no dia a dia. Acompanhe e fale comigo por
          lá.
        </p>

        <div className="post-mosaic">
          {posts.map((post) => (
            <a
              key={post.label}
              className="post-tile"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={post.src} alt={post.alt} loading="lazy" />
              <span>{post.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
