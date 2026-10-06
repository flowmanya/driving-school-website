import carTop from '../assets/car-top.webp'

type HeroProps = { onCallback: () => void }

export function Hero({ onCallback }: HeroProps) {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow reveal">Санкт-Петербург · категория B</p>
          <h1 id="hero-title" className="reveal"><small>АВТОШКОЛА</small><span>ОРИЕНТИР</span></h1>
          <p className="hero-lead reveal">Твой город. Твои правила движения. Учим спокойно, внимательно и по-настоящему.</p>
          <div className="hero-actions reveal">
            <button className="button button-accent" onClick={onCallback}>Записаться <span>→</span></button>
          </div>
        </div>
        <div className="hero-rings" aria-hidden="true"></div>
        <div className="hero-visual">
          <img src={carTop} alt="Белый учебный автомобиль, вид сверху" width="590" height="300" />
        </div>
        <div className="hero-contact reveal">
          <span>Автошкола «Ориентир»</span>
          <strong>+7 812 000-00-00</strong>
          <i>→</i>
        </div>
      </section>
      <section className="hero-stats reveal" aria-label="Ключевые показатели">
        <span className="stat-pin" aria-hidden="true"></span>
        <div><small>от</small><strong>59 900</strong><span>рублей</span></div>
        <div><strong>3</strong><span>месяца</span></div>
        <div><strong>28</strong><span>занятий</span></div>
        <div><strong>7/7</strong><span>дней в неделю</span></div>
      </section>
    </main>
  )
}
