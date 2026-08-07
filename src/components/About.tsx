import { aboutText, credentials, insight, location } from '../data/therapies'

export function About() {
  return (
    <section className="section about" id="sobre" aria-labelledby="sobre-title">
      <div className="section__inner about__grid">
        <div>
          <p className="eyebrow">Sobre</p>
          <h2 id="sobre-title">Formação e cuidado clínico</h2>
          <p className="about__text">{aboutText}</p>
          <p className="about__location">{location}</p>
          <ul className="credential-list">
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <aside className="insight" aria-label={insight.title}>
          <p className="eyebrow">Abordagem</p>
          <h3>{insight.title}</h3>
          <p>{insight.text}</p>
        </aside>
      </div>
    </section>
  )
}
