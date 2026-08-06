import reikiImg from '../assets/posts/reiki.png'
import dicaImg from '../assets/posts/dica.png'
import somatizacaoImg from '../assets/posts/somatizacao.png'
import { instagramUrl } from '../data/therapies'

const posts = [
  {
    src: reikiImg,
    alt: 'Publicação sobre Reiki e limpeza energética',
    label: 'Reiki',
  },
  {
    src: dicaImg,
    alt: 'Dica de bem-estar para dores de cabeça',
    label: 'Orientação',
  },
  {
    src: somatizacaoImg,
    alt: 'Conteúdo sobre somatização e emoções',
    label: 'Saúde emocional',
  },
]

export function InstagramPreview() {
  return (
    <section
      className="section instagram-preview"
      aria-labelledby="instagram-title"
    >
      <div className="section__inner">
        <p className="eyebrow">Conteúdo</p>
        <h2 id="instagram-title">Acompanhe no Instagram</h2>
        <p className="section__lead">
          Orientações, reflexões e informações sobre terapias integrativas no
          perfil{' '}
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            @lusouza.terapias.holisticas
          </a>
          .
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
