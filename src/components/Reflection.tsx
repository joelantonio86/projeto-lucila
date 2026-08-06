import { quote } from '../data/therapies'

export function Reflection() {
  return (
    <section className="section reflection" aria-labelledby="reflexao-title">
      <div className="section__inner reflection__inner">
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
