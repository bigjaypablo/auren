import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import type { ReactNode } from 'react'
import Btn from '../components/Btn'
import HeroSlider from '../components/HeroSlider'
import Img from '../components/Img'
import Lines from '../components/Lines'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import { products } from '../data/content'
import { H, journal, perks, tiles } from '../data/home'
import { IMG } from '../data/images'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]
const h2 = 'font-display text-[clamp(2.6rem,6vw,5rem)] leading-none'

function ScrollLine() {
  const { scrollYProgress } = useScroll()
  return <motion.div style={{ scaleX: scrollYProgress }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gold" />
}

function Philosophy() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 90])
  return (
    <section ref={ref} className="grid gap-16 px-6 py-28 md:grid-cols-2 md:px-12 md:py-40">
      <div className="self-center">
        <Reveal><p className="eyebrow">Our philosophy</p></Reveal>
        <h2 className="mt-5 font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95]">
          <Lines lines={['Made slowly.', 'Felt daily.']} />
        </h2>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-ink/60">We seek the point where form, material, and comfort become inseparable. Every piece is chosen for tactile honesty, purposeful detail, and a life beyond passing trends.</p>
          <div className="mt-10"><Btn to="/story" variant="outline">Discover our story</Btn></div>
        </Reveal>
      </div>
      <div className="relative h-[520px] md:h-[640px]">
        <motion.div style={{ y: y1 }} className="absolute left-0 top-10 h-[78%] w-[58%] overflow-hidden rounded-[6px]">
          <Img src={IMG.chairOrange} alt="Terracotta chair" color="#a8481f" className="h-full w-full" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute right-0 top-0 h-[62%] w-[40%] overflow-hidden rounded-[6px]">
          <Img src={IMG.chairGreen} alt="Sage chair" color="#7f9a82" className="h-full w-full" />
        </motion.div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['Considered comfort', 'Made slowly', 'Felt daily', 'Enduring beauty', 'Quiet luxury']
  return (
    <div className="overflow-hidden border-y border-black/10 bg-white py-5">
      <motion.div
        className="flex w-max items-center gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-2xl text-ink/80 md:text-4xl">
            {t}
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

function Mosaic() {
  return (
    <section className="bg-ink px-6 py-24 text-cream md:px-12 md:py-36">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <Reveal><p className="eyebrow">Shop by category</p></Reveal>
          <h2 className={'mt-4 ' + h2}><Lines lines={['Explore', 'collections']} /></h2>
        </div>
        <Btn to="/collections" variant="ghost">View all</Btn>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
        {tiles.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08} className={t.span + ' h-56 md:h-[44vh]'}>
            <Link to="/shop" className="group relative block h-full overflow-hidden rounded-[6px]">
              <Img src={t.img} alt={t.name} color={t.color} className="h-full w-full transition-transform duration-[1400ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                <div>
                  <p className="font-display text-2xl md:text-3xl">{t.name}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/60">{t.count}</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur transition-all duration-500 group-hover:bg-gold group-hover:text-ink">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17 17 7M9 7h8v8" /></svg>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Phrase({ p, r, children }: { p: MotionValue<number>; r: [number, number, number, number]; children: ReactNode }) {
  const opacity = useTransform(p, r, [0, 1, 1, 0])
  const y = useTransform(p, r, [40, 0, 0, -40])
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center font-display text-[clamp(2.4rem,8vw,6.5rem)] leading-[1] text-cream">
      {children}
    </motion.div>
  )
}

function ScrollStop() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const inset = useTransform(p, [0, 0.4], [28, 0])
  const rad = useTransform(p, [0, 0.4], [28, 0])
  const clip = useMotionTemplate`inset(${inset}% round ${rad}px)`
  const scale = useTransform(p, [0, 1], [1.3, 1])
  const dark = useTransform(p, [0.2, 0.5], [0.1, 0.55])
  return (
    <section ref={ref} className="relative h-[320vh] bg-white">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.div style={{ clipPath: clip }} className="absolute inset-0">
          <motion.div style={{ scale }} className="absolute inset-0">
            <Img src={IMG.room} alt="Considered interior" color="#2b2623" className="h-full w-full" />
          </motion.div>
          <motion.div style={{ opacity: dark }} className="absolute inset-0 bg-black" />
          <Phrase p={p} r={[0.35, 0.45, 0.6, 0.7]}>Form, material<br />and comfort.</Phrase>
          <Phrase p={p} r={[0.65, 0.75, 0.9, 0.99]}>Chosen for<br />the long run.</Phrase>
        </motion.div>
      </div>
    </section>
  )
}

function Curated() {
  const list = products.filter((p) => p.id !== 'noa-sofa').slice(0, 4)
  const ratios = ['aspect-[4/5]', 'aspect-[3/4]', 'aspect-square', 'aspect-[4/5]']
  return (
    <section className="px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-xl text-center">
        <Reveal><p className="eyebrow">Handpicked</p></Reveal>
        <h2 className={'mt-4 ' + h2}><Lines lines={['Curated for you']} /></h2>
        <Reveal delay={0.1}><p className="mt-5 text-sm text-ink/60">Pieces our studio keeps coming back to.</p></Reveal>
      </div>
      <div className="mt-14 grid grid-cols-2 items-start gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">
        {list.map((p, i) => (
          <div key={p.id} className={i % 2 ? 'md:mt-16' : ''}>
            <ProductCard p={p} i={i} ratio={ratios[i]} />
          </div>
        ))}
      </div>
      <div className="mt-16 text-center"><Btn to="/shop" variant="outline">Shop all pieces</Btn></div>
    </section>
  )
}

function Feature() {
  const imgs = [IMG.chairOrange, IMG.detail, IMG.chairGreen]
  const [k, setK] = useState(0)
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-cream md:px-12 md:py-36">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 m-auto h-[75%] w-[75%] rounded-full bg-gold/25 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-[8px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={k}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <Img src={imgs[k]} alt="Noa Sculptural Sofa" color="#d9a21b" className="h-full w-full" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="relative mt-4 flex gap-3">
            {imgs.map((s, i) => (
              <button
                key={i}
                onClick={() => setK(i)}
                aria-label={'View ' + (i + 1)}
                className={'h-16 w-16 overflow-hidden rounded-[4px] border transition-all duration-500 ' + (k === i ? 'border-gold opacity-100' : 'border-white/10 opacity-50')}
              >
                <Img src={s} alt="" color="#2b2623" className="h-full w-full" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <Reveal><p className="eyebrow">Featured piece</p></Reveal>
          <h2 className="mt-4 font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.95]">
            <Lines lines={['Noa Sculptural', 'Sofa']} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">A sculptural lounge piece with a sunken seat and softly rounded arms. Bold in colour, calm in shape, and made to be the heart of the room.</p>
            <p className="mt-6 font-display text-3xl">$1,890</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Solid ash frame', 'Hand-dyed velvet', 'Made to order'].map((t) => (
                <span key={t} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.16em] backdrop-blur">{t}</span>
              ))}
            </div>
            <div className="mt-10 flex gap-3">
              <Btn to="/shop/noa-sofa">View piece</Btn>
              <Btn to="/contact" variant="ghost">Enquire</Btn>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Rooms() {
  return (
    <section className="px-6 py-28 md:px-12 md:py-40">
      <div className="grid items-start gap-12 md:grid-cols-[1fr_1.1fr_1fr] md:gap-10">
        <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.95]">
          <Lines lines={['Rooms', 'become', 'memories.']} />
        </h2>
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden rounded-[6px]">
            <Img src={H.rooms} alt="A calm, lived-in room" color="#3a2f2a" className="h-full w-full" />
          </div>
        </Reveal>
        <Reveal delay={0.15} className="md:pt-6">
          <div className="mb-10 ml-auto hidden h-28 w-24 overflow-hidden rounded-[4px] md:block">
            <Img src={H.roomsSmall} alt="" color="#4a3a30" className="h-full w-full" />
          </div>
          <p className="eyebrow">Customer story</p>
          <blockquote className="mt-5 font-display text-2xl leading-snug md:text-3xl">
            The Noa chair changed how the whole room feels. Calm, warm, and impossible to leave.
          </blockquote>
          <p className="mt-6 text-sm text-ink/60">Amara O. · Lagos</p>
          <Link to="/story" className="mt-8 inline-block text-[10px] uppercase tracking-[0.18em] underline underline-offset-4">Read more stories</Link>
        </Reveal>
      </div>
    </section>
  )
}

function Journal() {
  return (
    <section className="bg-cream px-6 py-28 md:px-12 md:py-36">
      <div className="mb-12 flex items-end justify-between">
        <h2 className={h2}><Lines lines={['The Auren Journal']} /></h2>
        <Link to="/story" className="text-[10px] uppercase tracking-[0.18em] underline underline-offset-4">Read all</Link>
      </div>
      <div className="grid gap-10 md:grid-cols-3 md:gap-6">
        {journal.map((j, i) => (
          <Reveal key={j.title} delay={i * 0.1}>
            <Link to="/story" className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-[6px]">
                <Img src={j.img} alt={j.title} color={j.color} className="h-full w-full transition-transform duration-[1400ms] group-hover:scale-105" />
              </div>
              <p className="eyebrow mt-5">{j.cat}</p>
              <p className="mt-3 font-display text-2xl leading-snug">{j.title}</p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-ink/50">{j.time}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Perks() {
  return (
    <section className="grid grid-cols-2 gap-px bg-black/10 md:grid-cols-4">
      {perks.map((p, i) => (
        <Reveal key={p.t} delay={i * 0.08} className="bg-white p-6 md:p-10">
          <span className="block h-1.5 w-1.5 rotate-45 bg-gold" />
          <p className="mt-5 font-display text-xl leading-snug">{p.t}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.d}</p>
        </Reveal>
      ))}
    </section>
  )
}

export default function Home() {
  return (
    <>
      <ScrollLine />
      <HeroSlider />
      <Philosophy />
      <Marquee />
      <Mosaic />
      <ScrollStop />
      <Curated />
      <Feature />
      <Rooms />
      <Journal />
      <Perks />
      <section className="bg-ink px-6 py-32 text-center text-cream md:py-44">
        <p className="eyebrow">Visit the studio</p>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.95]">
          <Lines lines={['Furniture', 'with presence.']} />
        </h2>
        <div className="mt-10 flex justify-center gap-3">
          <Btn to="/shop">Shop now</Btn>
          <Btn to="/contact" variant="ghost">Get in touch</Btn>
        </div>
      </section>
    </>
  )
}
