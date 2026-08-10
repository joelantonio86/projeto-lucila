import { quote } from '../data/therapies'
import { useRevealScope } from '../hooks/useRevealScope'

export function Reflection() {
  const sectionRef = useRevealScope<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      className="section reflection"
      aria-labelledby="reflexao-title"
    >
      <div className="section__inner reflection__inner" data-reveal>
        <p className="eyebrow" id="reflexao-title">
          Reflexão
        </p>
        <blockquote>
          <p>“{quote.text}”</p>
        </blockquote>
      </div>
    </section>
  )
}
