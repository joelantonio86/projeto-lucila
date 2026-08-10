import type { CSSProperties } from 'react'
import { therapies } from '../data/therapies'
import { useRevealScope } from '../hooks/useRevealScope'

export function Therapies() {
  const sectionRef = useRevealScope<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      className="section therapies"
      id="terapias"
      aria-labelledby="terapias-title"
    >
      <div className="section__inner">
        <div data-reveal>
          <p className="eyebrow">Terapias</p>
          <h2 id="terapias-title">Especialidades</h2>
          <p className="section__lead">
            Conheça as principais abordagens oferecidas no atendimento, com
            destaque para a Constelação Familiar Sistêmica.
          </p>
        </div>

        <ul className="therapy-list">
          {therapies.map((therapy, index) => (
            <li
              className={`therapy-item${index === 0 ? ' therapy-item--featured' : ''}`}
              key={therapy.id}
              data-reveal
              style={{ '--reveal-delay': `${80 + index * 70}ms` } as CSSProperties}
            >
              <img
                className="therapy-item__image"
                src={therapy.image}
                alt={therapy.imageAlt}
                width={72}
                height={72}
                loading="lazy"
              />
              <div>
                {index === 0 ? (
                  <p className="therapy-item__badge">Foco atual</p>
                ) : null}
                <h3>{therapy.name}</h3>
                {therapy.callout ? (
                  <p className="therapy-item__callout">{therapy.callout}</p>
                ) : null}
                <p>{therapy.summary}</p>
                {therapy.highlights ? (
                  <ul className="therapy-highlights">
                    {therapy.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
