import { instagramUrl, whatsappUrl } from '../data/therapies'
import brandPhoto from '../assets/logo-yin-yang.png'

export function Hero() {
  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__waves" aria-hidden="true" />

      <div className="hero__layout">
        <div className="hero__content">
          <h1 className="hero__brand" id="hero-title">
            Lucila Souza
          </h1>
          <p className="hero__headline">Terapeuta Integrativa</p>
          <p className="hero__lead">
            Paz, harmonia e equilíbrio para o corpo e as emoções — com terapias
            sistêmicas e integrativas em um cuidado leve e acolhedor.
          </p>
          <div className="hero__actions">
            <a
              className="btn btn--whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar no WhatsApp
            </a>
            <a
              className="btn btn--ghost"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <img
            src={brandPhoto}
            alt="Logo Lucila Souza — árvore da vida com yin-yang"
            width={520}
            height={520}
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
