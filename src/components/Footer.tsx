import { Logo } from './Logo'
import { instagramUrl, whatsappUrl } from '../data/therapies'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Logo className="site-footer__logo" />
          <div>
            <strong>Lucila Souza</strong>
            <p>Terapeuta Integrativa</p>
          </div>
        </div>
        <div className="site-footer__links">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <p className="site-footer__copy">
        © {year} Lucila Souza. Todos os direitos reservados.
      </p>
    </footer>
  )
}
