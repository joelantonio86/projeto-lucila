import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { instagramUrl, whatsappUrl } from '../data/therapies'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#terapias', label: 'Terapias' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <a className="brand" href="#topo" aria-label="Lucila Souza — início">
          <Logo className="brand__logo" />
          <span className="brand__name">Lucila Souza</span>
        </a>

        <nav className="nav-desktop" aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--small"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar
          </a>
        </nav>

        <button
          className={`nav-toggle${open ? ' is-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`nav-mobile${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          className="btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Agendar atendimento
        </a>
        <a
          className="btn btn--ghost"
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Instagram
        </a>
      </div>
    </header>
  )
}
