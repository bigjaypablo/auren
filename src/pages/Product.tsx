import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Img from '../components/Img'
import Lightbox from '../components/Lightbox'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import { products } from '../data/content'
import { details } from '../data/details'

export default function Product() {
  const { id } = useParams()
  const p = products.find((x) => x.id === id)
  const d = id ? details[id] : undefined

  const [idx, setIdx] = useState(0)
  const [color, setColor] = useState(0)
  const [size, setSize] = useState(0)
  const [lb, setLb] = useState<number | null>(null)
  const [added, setAdded] = useState(false)
  const [acc, setAcc] = useState<number | null>(0)
  const track = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIdx(0); setColor(0); setSize(0); setLb(null); setAdded(false); setAcc(0)
    track.current?.scrollTo({ left: 0 })
  }, [id])

  if (!p || !d) {
    return (
      <section className="px-6 pb-28 pt-40 text-center md:px-12">
        <h1 className="font-display text-4xl">We could not find that piece.</h1>
        <Link to="/shop" className="mt-6 inline-block text-[10px] uppercase tracking-[0.18em] underline underline-offset-4">Back to shop</Link>
      </section>
    )
  }

  const goTo = (i: number) => {
    const el = track.current
    if (el) el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
  }

  const openLb = (i: number) => {
    window.history.pushState({ ...window.history.state, lb: true }, '')
    setLb(i)
  }

  const price = p.price + (d.sizes?.[size]?.delta ?? 0)

  const addToBag = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2200)
  }

  const related = [
    ...products.filter((x) => x.id !== p.id && x.cat === p.cat),
    ...products.filter((x) => x.id !== p.id && x.cat !== p.cat),
  ].slice(0, 4)

  const info = [
    { t: 'Description', c: d.blurb },
    { t: 'Materials and care', c: d.materials },
    { t: 'Dimensions', c: d.dims },
    { t: 'Delivery and returns', c: 'Complimentary delivery on orders over $1,500. Made to order pieces ship in 4 to 6 weeks. Returns accepted within 30 days in original condition.' },
  ]

  return (
    <>
      <section className="pb-24 pt-[72px] md:px-12 md:pt-28">
        <nav className="flex flex-wrap gap-2 px-6 py-4 text-[10px] uppercase tracking-[0.18em] text-ink/50 md:px-0">
          <Link to="/shop" className="hover:text-ink">Shop</Link><span>/</span>
          <span>{p.cat}</span><span>/</span>
          <span className="text-ink">{p.name}</span>
        </nav>

        <div className="grid gap-10 md:grid-cols-[1.25fr_1fr] md:gap-16">
          <div>
            <div className="relative">
              <div
                ref={track}
                onScroll={(e) => {
                  const el = e.currentTarget
                  setIdx(Math.round(el.scrollLeft / el.clientWidth))
                }}
                className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto md:rounded-[6px]"
              >
                {d.gallery.map((src, i) => (
                  <button key={i} onClick={() => openLb(i)} aria-label="View full screen" className="block aspect-[4/5] w-full shrink-0 snap-center cursor-zoom-in">
                    <Img src={src} alt={p.name} color={p.color} className="h-full w-full" />
                  </button>
                ))}
              </div>
              <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur">
                {idx + 1} / {d.gallery.length}
              </span>
              <span className="pointer-events-none absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
              </span>
            </div>

            <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto px-6 md:px-0">
              {d.gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={'Photo ' + (i + 1)}
                  className={'h-20 w-16 shrink-0 overflow-hidden rounded-[3px] border transition-all duration-500 ' + (idx === i ? 'border-ink opacity-100' : 'border-transparent opacity-50')}
                >
                  <Img src={src} alt="" color={p.color} className="h-full w-full" />
                </button>
              ))}
            </div>
          </div>

          <div className="self-start px-6 md:sticky md:top-28 md:px-0">
            {p.tag && <p className="eyebrow">{p.tag}</p>}
            <h1 className="mt-2 font-display text-4xl leading-tight md:text-5xl">{p.name}</h1>
            <p className="mt-3 text-xl text-ink/80">${price.toLocaleString()}</p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/60">{d.blurb}</p>

            {d.colors && (
              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-[0.18em]">Colour <span className="ml-2 text-ink/50">{d.colors[color].name}</span></p>
                <div className="mt-3 flex gap-3">
                  {d.colors.map((c, i) => (
                    <button
                      key={c.name}
                      aria-label={c.name}
                      onClick={() => { setColor(i); goTo(c.img) }}
                      className={'h-9 w-9 rounded-full border-2 p-[3px] transition-all duration-500 ' + (color === i ? 'border-ink' : 'border-transparent')}
                    >
                      <span className="block h-full w-full rounded-full border border-black/10" style={{ background: c.hex }} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {d.sizes && (
              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-[0.18em]">Size <span className="ml-2 text-ink/50">{d.sizes[size].label}</span></p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {d.sizes.map((s, i) => (
                    <button
                      key={s.label}
                      onClick={() => setSize(i)}
                      className={'rounded-[3px] border px-5 py-3 text-[11px] uppercase tracking-[0.14em] transition-all duration-500 ' + (size === i ? 'border-ink bg-ink text-white' : 'border-black/15 hover:border-ink')}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={addToBag}
              className="mt-10 w-full rounded-[3px] bg-ink py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-500 hover:bg-gold hover:text-ink"
            >
              {added ? 'Added to bag' : 'Add to bag'}
            </button>
            <Link to="/contact" className="mt-3 block w-full rounded-[3px] border border-black/20 py-4 text-center text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 hover:border-ink">
              Enquire about this piece
            </Link>

            <div className="mt-10 border-t border-black/10">
              {info.map((a, i) => (
                <div key={a.t} className="border-b border-black/10">
                  <button onClick={() => setAcc(acc === i ? null : i)} className="flex w-full items-center justify-between py-5 text-left text-[11px] uppercase tracking-[0.18em]">
                    {a.t}
                    <span className="text-lg leading-none">{acc === i ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {acc === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-relaxed text-ink/60">{a.c}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 px-6 md:mt-32 md:px-0">
          <Reveal><h2 className="font-display text-3xl md:text-5xl">You may also like</h2></Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">
            {related.map((r, i) => <ProductCard key={r.id} p={r} i={i} />)}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lb !== null && <Lightbox images={d.gallery} start={lb} onClose={() => setLb(null)} />}
      </AnimatePresence>
    </>
  )
}
