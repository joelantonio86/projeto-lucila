import logoImg from '../assets/logo-yin-yang.png'

type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src={logoImg}
      alt="Lucila Souza — árvore da vida"
      width={80}
      height={80}
      decoding="async"
    />
  )
}
