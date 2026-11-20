import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

// The opener pushes a history entry, so the phone back button fires "popstate" and closes this.
export default function Lightbox({ images, start, onClose }: { images: string[]; start: number; onClose: () => void }) {
  const [i, setI] = useState(start)
  const [dir, setDir] = useState(1)
  const n = images.length

  const go = (d: number) => {
    setDir(d)
    setI((v) => (v + d + n) % n)
  }

  useEffect(() => {
    const pop = () => onClose()
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') window.history.back()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('popstate', pop)
    window.addEventListener('keydown', key)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('popstate', pop)
      window.removeEventListener('keydown', key)
      document.body.style.overflow = prev
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[70] bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <AnimatePresence initial={false} custom={dir}>
        <motion.img
          key={i}
          src={images[i]}
          alt=""
          custom={dir}
          variants={{
            enter: (d: number) => ({ x: d > 0 ? '25%' : '-25%', opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d > 0 ? '-25%' : '25%', opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45, ease }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragEnd={(_, info) => {
            if (info.offset.x < -70) go(1)
            else if (info.offset.x > 70) go(-1)
          }}
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-contain"
        />
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-5 pb-6 pt-5 text-white" style={{ paddingTop: 'calc(1.25rem + env(safe-area-inset-top, 0px))' }}>
        <span className="text-[11px] uppercase tracking-[0.2em] text-white/70">{i + 1} / {n}</span>
        <button
          aria-label="Close"
          onClick={() => window.history.back()}
          className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/30 backdrop-blur"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>

      {n > 1 && (
        <>
          <button aria-label="Previous" onClick={() => go(-1)} className="absolute left-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur md:flex">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          </button>
          <button aria-label="Next" onClick={() => go(1)} className="absolute right-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur md:flex">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </>
      )}
    </motion.div>
  )
}
