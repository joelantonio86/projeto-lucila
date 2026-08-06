import { aboutText, insight } from '../data/therapies'

export function About() {
  return (
    <section className="section about" id="sobre" aria-labelledby="sobre-title">
      <div className="section__inner about__grid">
        <div>
          <p className="eyebrow">Sobre</p>
          <h2 id="sobre-title">Presença, escuta e equilíbrio</h2>
          <p className="about__text">{aboutText}</p>
        </div>

        <aside className="insight" aria-label={insight.title}>
          <p className="eyebrow">Olhar integrativo</p>
          <h3>{insight.title}</h3>
          <p>{insight.text}</p>
        </aside>
      </div>
    </section>
  )
}
