import {
  instagramUrl,
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
        <h2 id="contato-title">Vamos conversar?</h2>
        <p>
          Tire dúvidas, conheça a agenda e marque seu atendimento pelo WhatsApp
          ou Instagram.
        </p>
        <div className="contact__actions">
          <a
            className="btn btn--whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp {whatsappDisplay}
          </a>
          <a
            className="btn btn--ghost"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            @lusouza.terapias.holisticas
          </a>
        </div>
      </div>
    </section>
  )
}
