const steps = [
  ['Знакомство', 'Определяем опыт, график и удобный формат. Подбираем программу без давления.'],
  ['Теория', 'Разбираем правила через дорожные сценарии, схемы и короткие проверочные сессии.'],
  ['Площадка', 'Привыкаем к автомобилю: посадка, манёвры, чувство габаритов и контроль скорости.'],
  ['Город', 'Отрабатываем типичные маршруты Петербурга и учимся принимать решения самостоятельно.'],
  ['Экзамен', 'Проводим пробный заезд, разбираем слабые места и готовим документы.']
]

export function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="process-heading reveal">
        <div className="section-label">Как всё устроено</div>
        <h2 id="process-title">От первого<br/>поворота ключа<br/><em>до своего маршрута.</em></h2>
      </div>
      <ol className="timeline">
        {steps.map(([title, text], index) => (
          <li className="reveal" key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></li>
        ))}
      </ol>
    </section>
  )
}
