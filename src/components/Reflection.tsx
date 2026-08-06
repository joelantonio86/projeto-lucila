import quoteImg from '../assets/posts/citacao-buda.png'
import { quote } from '../data/therapies'

export function Reflection() {
  return (
    <section className="section reflection" aria-labelledby="reflexao-title">
      <div className="section__inner reflection__layout">
        <div className="reflection__copy">
          <p className="eyebrow" id="reflexao-title">
            Reflexão
          </p>
          <blockquote>
            <p>“{quote.text}”</p>
          </blockquote>
        </div>
        <figure className="reflection__media">
          <img
            src={quoteImg}
            alt="Citação inspiradora ao lado de uma imagem de Buda em meditação"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}
