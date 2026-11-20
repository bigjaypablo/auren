import { motion } from 'framer-motion'

export default function Lines({ lines, className = '', delay = 0 }: { lines: string[]; className?: string; delay?: number }) {
  return (
    <span className={'block ' + className}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: delay + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
