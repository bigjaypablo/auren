import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Btn from './Btn'
import Img from './Img'
import { HERO_SLIDES } from '../data/images'

const DUR = 6
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

const line = {
  in: { y: '110%' },
  show: { y: 0, transition: { duration: 1, ease } },
  out: { y: '-110%', transition: { duration: 0.6, ease } },
}

export default function HeroSlider() {
  const ref = useRef<HTMLDivElement>(null)
  const [i, setI] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const s = HERO_SLIDES[i]

  useEffect(() => {
    HERO_SLIDES.forEach((h) => { const im = new Image(); im.src = h.img })
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setI((v) => (v + 1) % HERO_SLIDES.length), DUR * 1000)
    return () => clearTimeout(t)
  }, [i])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ clipPath: 'inset(0 0 0 100%)' }}
            animate={{ clipPath: 'inset(0 0 0 0%)' }}
            exit={{ x: '-12%', transition: { duration: 1.4, ease } }}
            transition={{ duration: 1.4, ease }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.18 }}
              animate={{ scale: 1 }}
              transition={{ duration: DUR + 1.4, ease: 'linear' }}
            >
              <Img src={s.img} alt={s.eyebrow} color={s.color} className="h-full w-full" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

      <motion.div style={{ opacity: fade }} className="absolute inset-x-0 bottom-0 flex flex-col gap-8 px-6 pb-16 md:flex-row md:items-end md:justify-between md:px-12">
        <div>
          <div className="eyebrow mb-4 h-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={i}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.5, ease }}
              >
                {s.eyebrow}
              </motion.p>
            </AnimatePresence>
          </div>
          <h1 className="font-display text-[clamp(4.2rem,17vw,13rem)] uppercase leading-[0.82] text-cream">
            <AnimatePresence mode="wait">
              <motion.span
                key={i}
                className="block"
                initial="in"
                animate="show"
                exit="out"
                variants={{
                  in: {},
                  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
                  out: { transition: { staggerChildren: 0.05 } },
                }}
              >
                {s.lines.map((l) => (
                  <span key={l} className="block overflow-hidden pb-[0.08em]">
                    <motion.span className="block" variants={line}>{l}</motion.span>
                  </span>
                ))}
              </motion.span>
            </AnimatePresence>
          </h1>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 1 }} className="max-w-xs md:text-right">
          <p className="text-sm leading-relaxed text-white/85">Furniture with presence. Designed to bring calm, character, and enduring beauty into the everyday.</p>
          <div className="mt-6 flex gap-3 md:justify-end">
            <Btn to="/shop">Explore collection</Btn>
            <Btn to="/story" variant="ghost">Our point of view</Btn>
          </div>
        </motion.div>
      </motion.div>

      {/* hairline loader with a twinkling star */}
      <div className="absolute inset-x-6 bottom-7 h-px bg-white/15 md:inset-x-12">
        <motion.div
          key={'fill' + i}
          className="absolute inset-0 origin-left bg-white/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: DUR, ease: 'linear' }}
        />
        <motion.div
          key={'star' + i}
          className="absolute top-1/2 h-0 w-0"
          initial={{ left: '0%' }}
          animate={{ left: '100%' }}
          transition={{ duration: DUR, ease: 'linear' }}
        >
          <div className="absolute right-0 top-0 h-px w-28 -translate-y-1/2 bg-gradient-to-l from-white/80 to-transparent" />
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              className="text-white"
              style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.9))' }}
              animate={{ scale: [0.6, 1.25, 0.6], opacity: [0.6, 1, 0.6], rotate: [0, 45, 90] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" fill="currentColor" />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
