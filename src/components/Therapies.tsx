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
          Conheça as principais abordagens oferecidas no atendimento.
        </p>

        <ul className="therapy-list">
          {therapies.map((therapy, index) => (
            <li className="therapy-item" key={therapy.id}>
              <span className="therapy-item__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
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
