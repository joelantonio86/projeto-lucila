import { instagramUrl, location, whatsappUrl } from '../data/therapies'
import brandPhoto from '../assets/logo-yin-yang.png'

export function Hero() {
  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__layout">
        <div className="hero__content">
          <p className="hero__meta">{location}</p>
          <h1 className="hero__brand" id="hero-title">
            Lucila Souza
          </h1>
          <p className="hero__headline">Terapeuta Integrativa</p>
          <p className="hero__lead">
            Cuidado profissional em terapias sistêmicas e integrativas para
            reequilibrar corpo, mente e emoções — com presença, escuta e
            acolhimento.
          </p>
          <div className="hero__actions">
            <a
              className="btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar atendimento
            </a>
            <a className="btn btn--ghost" href="#terapias">
              Ver terapias
            </a>
            <a
              className="hero__link"
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
