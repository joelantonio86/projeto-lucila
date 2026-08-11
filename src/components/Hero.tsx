import { instagramUrl, location, whatsappUrl } from '../data/therapies'
import brandPhoto from '../assets/logo-arvore-circulo.jpg'

export function Hero() {
  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__layout">
        <div className="hero__content">
          <p className="hero__meta hero-enter hero-enter--1">{location}</p>
          <h1 className="hero__brand hero-enter hero-enter--2" id="hero-title">
            Lucila Souza
          </h1>
          <p className="hero__headline hero-enter hero-enter--3">
            Terapeuta Integrativa
          </p>
          <p className="hero__lead hero-enter hero-enter--4">
            Atendimento em terapias sistêmicas e integrativas para reequilibrar
            corpo, mente e emoções — com escuta, presença e acompanhamento
            responsável.
          </p>
          <div className="hero__actions hero-enter hero-enter--5">
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

        <div className="hero__portrait hero-enter hero-enter--0">
          <img
            src={brandPhoto}
            alt="Lucila Souza — árvore da vida com mulher integrada às raízes e aos galhos"
            width={900}
            height={900}
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
