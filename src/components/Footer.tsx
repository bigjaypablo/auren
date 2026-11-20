import { Link } from 'react-router-dom'
import { socials } from '../data/socials'

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-8 pt-20 text-cream md:px-12">
      <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="eyebrow">Newsletter</p>
          <p className="mt-4 max-w-xs font-display text-2xl leading-snug">Quiet notes on new pieces and slow design.</p>
          <div className="mt-6 flex max-w-xs border-b border-white/30 pb-2">
            <input placeholder="Your email" className="w-full bg-transparent text-sm outline-none placeholder:text-white/40" />
            <button className="text-[10px] uppercase tracking-[0.18em]">Join</button>
          </div>

          <p className="eyebrow mt-12">Follow</p>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors duration-500 hover:bg-white hover:text-ink"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {[
          { h: 'Explore', l: [['Shop', '/shop'], ['Collections', '/collections'], ['Our Story', '/story']] },
          { h: 'Care', l: [['Contact', '/contact'], ['Delivery', '/contact'], ['Returns', '/contact']] },
        ].map((c) => (
          <div key={c.h}>
            <p className="eyebrow">{c.h}</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {c.l.map(([t, to]) => (
                <li key={t}><Link to={to} className="transition-colors hover:text-white">{t}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-20 select-none font-display text-[26vw] leading-[0.8] text-white/[0.06]">AUREN</p>
      <div className="mt-6 flex justify-between text-[11px] text-white/40">
        <span>© 2026 Auren. All rights reserved.</span>
        <span>Considered comfort.</span>
      </div>
    </footer>
  )
}
