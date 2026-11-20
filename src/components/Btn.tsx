import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Props = { to: string; children: ReactNode; variant?: 'gold' | 'ghost' | 'outline' }

export default function Btn({ to, children, variant = 'gold' }: Props) {
  const base = 'inline-flex items-center justify-center px-6 py-3.5 text-[10px] tracking-[0.18em] uppercase rounded-[3px] transition-all duration-500 '
  const styles = {
    gold: 'bg-gold text-ink hover:bg-ink hover:text-gold',
    ghost: 'border border-white/40 text-white hover:bg-white hover:text-ink',
    outline: 'border border-ink/50 text-ink hover:bg-ink hover:text-white',
  }
  return <Link to={to} className={base + styles[variant]}>{children}</Link>
}
