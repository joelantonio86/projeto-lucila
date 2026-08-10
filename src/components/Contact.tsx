import {
  instagramUrl,
  location,
  whatsappDisplay,
  whatsappUrl,
} from '../data/therapies'
import { useRevealScope } from '../hooks/useRevealScope'

export function Contact() {
  const sectionRef = useRevealScope<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      className="section contact"
      id="contato"
      aria-labelledby="contato-title"
    >
      <div className="section__inner contact__band" data-reveal>
        <div className="contact__intro">
          <p className="eyebrow contact__eyebrow">Contato</p>
          <h2 id="contato-title">Agende seu atendimento</h2>
          <p className="contact__lead">
            Atendimento em {location}. Tire dúvidas ou marque horário com
            acolhimento e atenção.
          </p>
          <a
            className="btn contact__primary"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conversar no WhatsApp
          </a>
        </div>

        <div className="contact__channels">
          <a
            className="contact-channel"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-channel__icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="22" height="22">
                <path
                  fill="currentColor"
                  d="M16.02 3C9.4 3 4 8.36 4 14.94c0 2.1.55 4.14 1.6 5.95L4 29l8.3-1.56a12.1 12.1 0 0 0 3.72.58h.01C22.64 28.02 28 22.66 28 16.08 28 9.5 22.64 3 16.02 3zm5.5 17.61c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z"
                />
              </svg>
            </span>
            <span className="contact-channel__copy">
              <span className="contact-channel__label">WhatsApp</span>
              <span className="contact-channel__value">{whatsappDisplay}</span>
              <span className="contact-channel__hint">Resposta rápida</span>
            </span>
          </a>

          <a
            className="contact-channel"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-channel__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
              </svg>
            </span>
            <span className="contact-channel__copy">
              <span className="contact-channel__label">Instagram</span>
              <span className="contact-channel__value">
                @lusouza.terapias.holisticas
              </span>
              <span className="contact-channel__hint">Conteúdos e novidades</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
