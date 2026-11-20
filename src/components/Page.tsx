import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function Page({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: 'easeInOut' }}
    >
      {children}
    </motion.main>
  )
}
