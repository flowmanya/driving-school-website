import { useState } from 'react'

type HeaderProps = { onCallback: () => void }

export function Header({ onCallback }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Автошкола «Ориентир», на главную">
        <img src="/logo.svg" alt="" width="40" height="40" /><span><b>ОРИЕНТИР</b> АВТОШКОЛА</span>
      </a>
      <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
        <span>{open ? 'Закрыть' : 'Меню'}</span>
      </button>
      <nav id="main-nav" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Основная навигация">
        <a href="#programs" onClick={close}>Программы</a>
        <a href="#process" onClick={close}>Обучение</a>
        <a href="#team" onClick={close}>Инструкторы</a>
        <a href="#contacts" onClick={close}>Контакты</a>
      </nav>
      <div className="header-actions">
        <a className="phone" href="tel:+78120000000">+7 812 000-00-00</a>
        <button className="button button-dark" onClick={onCallback}>Заказать звонок</button>
      </div>
    </header>
  )
}
