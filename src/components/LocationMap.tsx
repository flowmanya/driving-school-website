import { useState } from 'react'

export function LocationMap() {
  const [active, setActive] = useState(false)
  return (
    <div className={`map-shell ${active ? 'is-active' : ''}`}>
      <iframe
        className="map-canvas"
        title="Яндекс Карты — демонстрационная локация автошколы «Ориентир»"
        src="https://yandex.ru/map-widget/v1/?ll=30.3198%2C59.9287&z=14&pt=30.3198%2C59.9287%2Cpm2rdm"
        loading="lazy"
        allowFullScreen
      />
      {!active && <button className="map-activate" onClick={() => setActive(true)}>Открыть Яндекс Карты</button>}
      {active && <button className="map-deactivate" onClick={() => setActive(false)}>Отключить взаимодействие</button>}
    </div>
  )
}
