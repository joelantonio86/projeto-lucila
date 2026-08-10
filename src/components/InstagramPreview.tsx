import { instagramUrl } from '../data/therapies'
import { useRevealScope } from '../hooks/useRevealScope'

export function InstagramPreview() {
  const sectionRef = useRevealScope<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      className="section instagram-cta"
      aria-labelledby="instagram-title"
    >
      <div className="instagram-cta__inner" data-reveal>
        <p className="eyebrow">Instagram</p>
        <h2 id="instagram-title">Conteúdo e orientações</h2>
        <p>
          Acompanhe informações sobre terapias integrativas e o dia a dia do
          atendimento.
        </p>
        <a
          className="instagram-cta__link"
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          @lusouza.terapias.holisticas
        </a>
      </div>
    </section>
  )
}
