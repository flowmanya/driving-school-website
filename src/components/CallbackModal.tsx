import { useEffect, useId, useRef, useState, type FormEvent } from 'react'

type ModalProps = { open: boolean; onClose: () => void }

export function CallbackModal({ open, onClose }: ModalProps) {
  const titleId = useId()
  const dialog = useRef<HTMLDivElement>(null)
  const firstInput = useRef<HTMLInputElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [accepted, setAccepted] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; phone?: string; accepted?: string }>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  useEffect(() => {
    if (!open) return
    previousFocus.current = document.activeElement as HTMLElement
    document.body.classList.add('modal-open')
    setTimeout(() => firstInput.current?.focus(), 50)
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab' && dialog.current) {
        const focusable = [...dialog.current.querySelectorAll<HTMLElement>('button,input')].filter((item) => !item.hasAttribute('disabled'))
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.classList.remove('modal-open')
      previousFocus.current?.focus()
    }
  }, [open, onClose])

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const cleanPhone = phone.replace(/\D/g, '')
    const nextErrors: { name?: string; phone?: string; accepted?: string } = {}
    if (name.trim().length < 2) nextErrors.name = 'Введите имя — минимум 2 буквы.'
    if (!(cleanPhone.length === 11 && (cleanPhone.startsWith('7') || cleanPhone.startsWith('8')))) nextErrors.phone = 'Введите российский номер из 11 цифр.'
    if (!accepted) nextErrors.accepted = 'Подтвердите согласие перед отправкой.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 900)
  }

  if (!open) return null
  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId} ref={dialog}>
        <button className="modal-close" onClick={onClose} aria-label="Закрыть окно">×</button>
        {status === 'success' ? <div className="modal-success" role="status"><span>Готово</span><h2 id={titleId}>Тестовая заявка принята.</h2><p>Данные не переданы и не сохранены.</p><button className="button button-dark" onClick={onClose}>Закрыть</button></div> : <>
          <span className="modal-index">Заявка на консультацию</span><h2 id={titleId}>Обсудим твой маршрут?</h2><p>Форма работает в ознакомительном режиме: введённые данные не отправляются и не сохраняются.</p>
          <form onSubmit={submit} noValidate>
            <label>Имя<input ref={firstInput} value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} /></label>
            {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
            <label>Телефон<input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+7 999 000-00-00" inputMode="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} /></label>
            {errors.phone && <span className="field-error" id="phone-error">{errors.phone}</span>}
            <label className="consent-check"><input type="checkbox" checked={accepted} onChange={(event) => setAccepted(event.target.checked)} aria-invalid={!!errors.accepted} /><span>Я принимаю <a href="/legal/privacy.html" target="_blank">политику конфиденциальности</a> и <a href="/legal/consent.html" target="_blank">условия обработки данных</a>.</span></label>
            {errors.accepted && <span className="field-error">{errors.accepted}</span>}
            <button className="button button-accent modal-submit" disabled={status === 'loading'}>{status === 'loading' ? 'Обрабатываем локально…' : 'Отправить тестовую заявку'}</button>
          </form>
        </>}
      </div>
    </div>
  )
}
