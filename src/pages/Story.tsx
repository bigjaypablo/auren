import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Btn from '../components/Btn'
import Img from '../components/Img'
import Lines from '../components/Lines'
import Reveal from '../components/Reveal'
import { IMG } from '../data/images'

const values = [
  { t: 'Material', d: 'Solid timber, natural fibres and hand-finished leather, chosen to age beautifully.' },
  { t: 'Form', d: 'Soft, resolved shapes with nothing added for show. Comfort comes first, then calm.' },
  { t: 'Time', d: 'Every piece is made in small batches, with the patience good furniture asks for.' },
]

export default function Story() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1])
  return (
    <>
      <section className="px-6 pb-20 pt-36 md:px-12">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-4 max-w-5xl font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95]">
          <Lines lines={['We make furniture', 'for slower living.']} />
        </h1>
      </section>
      <section ref={ref} className="mx-6 h-[70vh] overflow-hidden rounded-[8px] md:mx-12">
        <motion.div style={{ scale }} className="h-full w-full">
          <Img src={IMG.room} alt="Auren studio" color="#2b2623" className="h-full w-full" />
        </motion.div>
      </section>
      <section className="grid gap-12 px-6 py-28 md:grid-cols-[1fr_1.4fr] md:px-12 md:py-40">
        <Reveal><p className="eyebrow">Point of view</p></Reveal>
        <Reveal delay={0.1}>
          <p className="font-display text-3xl leading-snug md:text-5xl">Luxury is not louder. It is the feeling of a room that finally exhales. We design pieces that make that feeling last.</p>
        </Reveal>
      </section>
      <section className="grid gap-px bg-black/10 md:grid-cols-3">
        {values.map((v, i) => (
          <Reveal key={v.t} delay={i * 0.1} className="bg-white p-8 md:p-12">
            <p className="eyebrow">0{i + 1}</p>
            <h3 className="mt-6 font-display text-3xl">{v.t}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/60">{v.d}</p>
          </Reveal>
        ))}
      </section>
      <section className="px-6 py-28 text-center md:py-40">
        <h2 className="font-display text-4xl md:text-6xl">See it in person.</h2>
        <div className="mt-8"><Btn to="/contact">Book a visit</Btn></div>
      </section>
    </>
  )
}
