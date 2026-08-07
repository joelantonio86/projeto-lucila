import { therapies } from '../data/therapies'

export function Therapies() {
  return (
    <section
      className="section therapies"
      id="terapias"
      aria-labelledby="terapias-title"
    >
      <div className="section__inner">
        <p className="eyebrow">Terapias</p>
        <h2 id="terapias-title">Especialidades</h2>
        <p className="section__lead">
          Conheça as principais abordagens oferecidas no atendimento, com
          destaque para a Constelação Familiar Sistêmica.
        </p>

        <ul className="therapy-list">
          {therapies.map((therapy, index) => (
            <li
              className={`therapy-item${index === 0 ? ' therapy-item--featured' : ''}`}
              key={therapy.id}
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
