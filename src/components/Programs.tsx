import carSide from '../assets/car-side.webp'
import motorcycle from '../assets/motorcycle.webp'

type ProgramsProps = { onCallback: () => void }
const programs = [
  { title: 'Категория B', tag: 'Легковой автомобиль', price: '59 900 ₽', duration: '3 месяца', practice: '28 занятий', gearbox: 'МКПП', image: carSide, letter: 'B' },
  { title: 'Категория B · автомат', tag: 'Спокойный городской старт', price: '69 900 ₽', duration: '3 месяца', practice: '30 занятий', gearbox: 'АКПП', image: carSide, letter: 'B' },
  { title: 'Категория A', tag: 'Мотоцикл', price: '34 900 ₽', duration: '2 месяца', practice: '18 занятий', gearbox: 'МКПП', image: motorcycle, letter: 'A' }
]

export function Programs({ onCallback }: ProgramsProps) {
  return (
    <section className="section programs" id="programs" aria-labelledby="programs-title">
      <div className="section-label">Программы · пример стоимости</div>
      <div className="section-intro reveal">
        <h2 id="programs-title">ВЫБЕРИ<br/><em>КАТЕГОРИЮ</em></h2>
        <p>Три понятных маршрута обучения с разным объёмом практики и типом транспорта.</p>
      </div>
      <div className="program-showcase">
        {programs.map((item, index) => (
          <article className={`program-row program-row-${index + 1} reveal`} key={item.title}>
            <div className="program-letter" aria-hidden="true">{item.letter}</div>
            <div className="program-copy">
              <span className="program-number">0{index + 1} · {item.tag}</span>
              <h3>{item.title}</h3>
              <div className="program-data">
                <div><small>Срок</small><strong>{item.duration}</strong></div>
                <div><small>Практика</small><strong>{item.practice}</strong></div>
                <div><small>Коробка</small><strong>{item.gearbox}</strong></div>
              </div>
              <strong className="program-price">{item.price}</strong>
              <button onClick={onCallback}>Записаться <span>→</span></button>
            </div>
            <img src={item.image} alt={item.tag} loading="lazy" />
          </article>
        ))}
      </div>
      <p className="demo-note">Условия и стоимость указаны для ознакомления и не являются публичной офертой.</p>
    </section>
  )
}
