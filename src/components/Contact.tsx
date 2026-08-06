import {
  instagramUrl,
  location,
  whatsappDisplay,
  whatsappUrl,
} from '../data/therapies'

export function Contact() {
  return (
    <section
      className="section contact"
      id="contato"
      aria-labelledby="contato-title"
    >
      <div className="section__inner contact__panel">
        <p className="eyebrow">Contato</p>
        <h2 id="contato-title">Agende seu atendimento</h2>
        <p>
          Atendimento em {location}. Envie uma mensagem para tirar dúvidas ou
          marcar horário.
        </p>
        <dl className="contact__meta">
          <div>
            <dt>WhatsApp</dt>
            <dd>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {whatsappDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt>Instagram</dt>
            <dd>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                @lusouza.terapias.holisticas
              </a>
            </dd>
          </div>
        </dl>
        <div className="contact__actions">
          <a
            className="btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conversar no WhatsApp
          </a>
          <a
            className="btn btn--ghost"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
