const benefits = [
  ['01', 'Спокойный темп', 'Инструктор объясняет до ясности, а не до конца занятия. Ошибка — часть маршрута, не повод для стресса.'],
  ['02', 'Гибкое расписание', 'Утро, вечер и выходные. План занятий подстраивается под работу, учёбу и ритм города.'],
  ['03', 'Настоящий город', 'Практика на набережных, развязках и узких улицах — там, где предстоит ездить самостоятельно.'],
  ['04', 'Цена без сюрпризов', 'Топливо, учебные материалы и внутренние экзамены уже учтены в выбранной программе.']
]

export function Benefits() {
  return (
    <section className="section benefits" aria-labelledby="benefits-title">
      <div className="section-label">Почему «Ориентир»</div>
      <div className="section-intro reveal">
        <h2 id="benefits-title">Не просто сдать.<br/>Начать <em>ездить.</em></h2>
        <p>Мы строим обучение вокруг реальных дорожных ситуаций и вашей уверенности за рулём.</p>
      </div>
      <div className="benefit-list">
        {benefits.map(([number, title, text]) => (
          <article className="benefit reveal" key={number}>
            <span>{number}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">↗</i>
          </article>
        ))}
      </div>
    </section>
  )
}
