import alexey from '../assets/instructor-alexey.webp'
import elena from '../assets/instructor-elena.webp'
import sergey from '../assets/instructor-sergey.webp'

const instructors = [
  { name: 'Алексей Воронов', role: 'Инструктор категории B', meta: 'МКПП · 11 лет опыта', image: alexey, alt: 'Портрет инструктора Алексея Воронова' },
  { name: 'Елена Ларионова', role: 'Инструктор категории B', meta: 'АКПП · 8 лет опыта', image: elena, alt: 'Портрет инструктора Елены Ларионовой' },
  { name: 'Сергей Мельников', role: 'Старший инструктор', meta: 'МКПП / АКПП · 17 лет опыта', image: sergey, alt: 'Портрет инструктора Сергея Мельникова' }
]

export function Instructors() {
  return (
    <section className="section instructors" id="team" aria-labelledby="team-title">
      <div className="section-label">Команда инструкторов</div>
      <div className="section-intro reveal"><h2 id="team-title">Люди, рядом с которыми<br/><em>спокойно учиться.</em></h2></div>
      <div className="instructor-grid">
        {instructors.map((person, index) => (
          <article className={`instructor instructor-${index + 1} reveal`} key={person.name}>
            <div className="portrait"><img src={person.image} alt={person.alt} loading="lazy" width="900" height="1200" /></div>
            <div className="instructor-info"><span>0{index + 1}</span><div><small>{person.role}</small><h3>{person.name}</h3><p>{person.meta}</p></div></div>
          </article>
        ))}
      </div>
      <p className="demo-note">Профили и профессиональные данные приведены как пример наполнения сайта.</p>
    </section>
  )
}
