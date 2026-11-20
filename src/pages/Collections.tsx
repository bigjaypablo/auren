import { motion } from 'framer-motion'
import Btn from '../components/Btn'
import Img from '../components/Img'
import Lines from '../components/Lines'
import Reveal from '../components/Reveal'
import { collections } from '../data/content'

export default function Collections() {
  return (
    <section className="px-6 pb-28 pt-36 md:px-12">
      <p className="eyebrow">Collections</p>
      <h1 className="mt-4 font-display text-[clamp(3rem,9vw,7rem)] leading-[0.95]">
        <Lines lines={['Four ways', 'to feel at home.']} />
      </h1>
      <div className="mt-24 space-y-28 md:space-y-40">
        {collections.map((c, i) => (
          <div key={c.no} className={'grid items-center gap-10 md:grid-cols-2 md:gap-20 ' + (i % 2 ? 'md:[&>*:first-child]:order-2' : '')}>
            <motion.div
              initial={{ clipPath: 'inset(12% 12% 12% 12% round 8px)', opacity: 0.6 }}
              whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 6px)', opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5]"
            >
              <Img src={c.img} alt={c.name} color={c.color} className="h-full w-full" />
            </motion.div>
            <Reveal>
              <p className="eyebrow">Collection {c.no}</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl">{c.name}</h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/60">{c.text}</p>
              <div className="mt-8"><Btn to="/shop" variant="outline">Shop the collection</Btn></div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
