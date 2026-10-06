import { useCallback, useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Benefits } from './components/Benefits'
import { Programs } from './components/Programs'
import { Process } from './components/Process'
import { Instructors } from './components/Instructors'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { Location } from './components/Location'
import { CallbackModal } from './components/CallbackModal'
import { Footer } from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const closeModal = useCallback(() => setModalOpen(false), [])
  const openModal = useCallback(() => setModalOpen(true), [])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const lenis = new Lenis({ duration: 0.9, smoothWheel: true, touchMultiplier: 1 })
    const update = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
    lenis.on('scroll', ScrollTrigger.update)
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.fromTo(element, { y: 38, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } })
      })
      gsap.to('.hero-visual', { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.7 } })
    })
    return () => { context.revert(); gsap.ticker.remove(update); lenis.destroy() }
  }, [])

  return (
    <>
      <a className="skip-link" href="#top">К содержанию</a>
      <Header onCallback={openModal} />
      <Hero onCallback={openModal} />
      <Benefits />
      <Programs onCallback={openModal} />
      <Process />
      <Instructors />
      <Testimonials />
      <Faq />
      <Location />
      <Footer onCallback={openModal} />
      <CallbackModal open={modalOpen} onClose={closeModal} />
    </>
  )
}

export default App
