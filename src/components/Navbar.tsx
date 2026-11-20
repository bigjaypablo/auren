import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { socials } from '../data/socials'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
  { to: '/story', label: 'Our Story' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 60)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const light = (pathname === '/' && !scrolled) || open

  return (
    <>
      <header className={'fixed inset-x-0 top-0 z-50 transition-all duration-500 ' + (light ? 'text-white' : 'border-b border-black/5 bg-white/80 text-ink backdrop-blur-xl')}>
        <div className="flex h-[72px] items-center px-6 md:px-12">
          <Link to="/" className="font-display text-xl tracking-[0.04em]">AUREN</Link>
          <nav className="ml-16 hidden gap-9 md:flex">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="group relative text-[10px] uppercase tracking-[0.18em]">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-500 group-hover:w-full" />
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-6">
            <button aria-label="Search" className="hidden md:block">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            </button>
            <Link to="/contact" className="hidden text-[10px] uppercase tracking-[0.18em] md:block">Account</Link>
            <button aria-label="Bag">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 8a3 3 0 0 1 6 0" /></svg>
            </button>
            <button aria-label="Menu" onClick={() => setOpen(!open)} className="flex h-5 w-6 flex-col justify-center gap-[6px] md:hidden">
              <span className={'h-px w-full bg-current transition-transform duration-500 ' + (open ? 'translate-y-[3.5px] rotate-45' : '')} />
              <span className={'h-px w-full bg-current transition-transform duration-500 ' + (open ? '-translate-y-[3.5px] -rotate-45' : '')} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink pt-24 text-cream md:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center px-8 py-6">
              {[...links, { to: '/contact', label: 'Contact' }].map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.7 }}
                >
                  <Link to={l.to} onClick={() => setOpen(false)} className="block py-2 font-display text-5xl">{l.label}</Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex gap-3 px-8 pb-8"
            >
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors duration-500 hover:bg-white hover:text-ink"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="sticky bottom-0"
            >
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                style={{ paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
                className="flex items-center justify-between bg-gold px-8 pt-5 text-[11px] uppercase tracking-[0.2em] text-ink"
              >
                Book a studio visit
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
