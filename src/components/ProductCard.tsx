import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Img from './Img'
import Reveal from './Reveal'
import type { Product } from '../data/content'

export default function ProductCard({ p, i = 0, ratio = 'aspect-[4/5]' }: { p: Product; i?: number; ratio?: string }) {
  return (
    <Reveal delay={(i % 4) * 0.07}>
      <Link to={`/shop/${p.id}`} className="block">
        <motion.div whileHover="hover" className="group">
          <div className={'relative overflow-hidden rounded-[4px] ' + ratio}>
            <motion.div className="absolute inset-0" variants={{ hover: { scale: 1.06 } }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <Img src={p.img} alt={p.name} color={p.color} className="h-full w-full" />
            </motion.div>
            {p.tag && <span className="absolute left-3 top-3 bg-white/90 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em]">{p.tag}</span>}
            <span className="absolute inset-x-3 bottom-3 translate-y-4 bg-white/90 py-3 text-center text-[10px] uppercase tracking-[0.18em] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              View piece
            </span>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <div>
              <p className="font-display text-lg leading-tight">{p.name}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-ink/50">{p.cat}</p>
            </div>
            <p className="text-sm text-ink/70">${p.price.toLocaleString()}</p>
          </div>
        </motion.div>
      </Link>
    </Reveal>
  )
}
