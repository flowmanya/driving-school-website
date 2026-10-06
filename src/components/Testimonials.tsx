const testimonials = [
  ['«На первом занятии боялась выехать со двора. К шестому уже спокойно перестраивалась на Петроградке и понимала, куда смотреть.»', 'Марина, 29 лет'],
  ['«График реально подстроили под смены. Никакой нервозности: разбирали один и тот же поворот, пока я не почувствовал машину.»', 'Илья, 34 года'],
  ['«Понравилось, что не учили “трюкам для экзамена”. После курса впервые сам поехал по городу без ощущения, что мне повезло.»', 'Денис, 26 лет']
]

export function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonial-head reveal"><span className="section-label">Демонстрационные отзывы</span><h2 id="testimonials-title">Говорят те,<br/>кто уже <em>поехал.</em></h2></div>
      <div className="testimonial-track">
        {testimonials.map(([quote, author], index) => <blockquote className="reveal" key={author}><span>0{index + 1}</span><p>{quote}</p><cite>{author} · пример отзыва</cite></blockquote>)}
      </div>
    </section>
  )
}
