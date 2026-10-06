import { lazy, Suspense } from 'react'
const LocationMap = lazy(() => import('./LocationMap').then((module) => ({ default: module.LocationMap })))

export function Location() {
  return (
    <section className="location" id="contacts" aria-labelledby="location-title">
      <div className="location-copy reveal">
        <div className="section-label">Демонстрационная локация</div>
        <h2 id="location-title">Рядом с центром.<br/><em>Ближе к практике.</em></h2>
        <p>Условная точка у набережной Фонтанки. Это не адрес действующей автошколы и не приглашение к посещению.</p>
        <dl><div><dt>Координаты</dt><dd>59.9287, 30.3198</dd></div><div><dt>Ориентир</dt><dd>Сенная площадь · 12 минут пешком</dd></div></dl>
      </div>
      <div className="location-map reveal"><Suspense fallback={<div className="map-loading">Карта загружается…</div>}><LocationMap /></Suspense></div>
    </section>
  )
}
