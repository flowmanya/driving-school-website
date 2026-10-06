import { useState } from 'react'
const items = [
  ['Можно учиться с нуля?', 'Да. Программа построена для людей без опыта: от посадки и базовых органов управления до самостоятельного движения по городу.'],
  ['Что входит в указанную стоимость?', 'В примере стоимости учтены теория, заявленное число практических занятий, топливо, учебные материалы и внутренний экзамен.'],
  ['Можно выбрать коробку передач?', 'Да. Для категории B доступны отдельные программы на МКПП и АКПП с разным количеством практических занятий.'],
  ['Где проходят занятия?', 'На учебных маршрутах по Санкт-Петербургу. Точка на карте выбрана для показа интерфейса и не обозначает действующий филиал.'],
  ['Заявка на звонок куда-то отправляется?', 'Нет. В этой версии форма работает только локально, ничего не сохраняет и не передаёт.']
]

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div className="faq-heading reveal"><div className="section-label">Частые вопросы</div><h2 id="faq-title">Коротко<br/><em>о важном.</em></h2></div>
      <div className="accordion">
        {items.map(([question, answer], index) => {
          const expanded = open === index
          return <div className={`faq-item ${expanded ? 'is-open' : ''}`} key={question}>
            <h3><button aria-expanded={expanded} aria-controls={`faq-panel-${index}`} onClick={() => setOpen(expanded ? -1 : index)}><span>{question}</span><i>{expanded ? '−' : '+'}</i></button></h3>
            <div id={`faq-panel-${index}`} className="faq-panel" hidden={!expanded}><p>{answer}</p></div>
          </div>
        })}
      </div>
    </section>
  )
}
