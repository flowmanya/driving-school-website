type FooterProps = { onCallback: () => void }
export function Footer({ onCallback }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="#top"><img src="/logo.svg" alt="" width="40" height="40" /><span><b>ОРИЕНТИР</b></span></a>
        <h2>Пора занять<br/>своё место <em>за рулём.</em></h2>
        <button className="button button-accent" onClick={onCallback}>Заказать демо-звонок <span>↗</span></button>
      </div>
      <div className="footer-grid">
        <div><span>Телефон</span><a href="tel:+78120000000">+7 812 000-00-00</a></div>
        <div><span>Почта</span><a href="mailto:start@example.ru">start@example.ru</a></div>
        <div><span>Навигация</span><a href="#programs">Программы</a><a href="#team">Инструкторы</a><a href="#contacts">Локация</a></div>
        <div><span>Документы</span><a href="/legal/privacy.html">Политика конфиденциальности</a><a href="/legal/consent.html">Согласие на обработку данных</a><a href="/legal/demo.html">Условия демонстрации</a></div>
      </div>
      <div className="footer-bottom"><p>© 2026 «Ориентир»</p><p><strong>Учебный проект.</strong> Материалы сайта не являются публичной офертой.</p><a href="#top">Наверх ↑</a></div>
    </footer>
  )
}
