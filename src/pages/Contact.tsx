import { useState } from 'react'
import type { FormEvent } from 'react'
import Lines from '../components/Lines'
import Reveal from '../components/Reveal'

const field = 'w-full border-b border-black/20 bg-transparent py-4 text-sm outline-none transition-colors focus:border-ink placeholder:text-ink/40'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true) }
  return (
    <section className="grid gap-16 px-6 pb-28 pt-36 md:grid-cols-2 md:px-12">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95]">
          <Lines lines={["Let's talk", 'about your space.']} />
        </h1>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-ink/60">Questions about a piece, a custom order, or a studio visit? Write to us and we will reply within one working day.</p>
          <p className="mt-6 text-sm">hello@auren.com</p>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        {sent ? (
          <div className="py-20">
            <p className="font-display text-4xl">Thank you.</p>
            <p className="mt-4 text-sm text-ink/60">Your message is on its way. We will be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <input required placeholder="Name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
            <input placeholder="Subject" className={field} />
            <textarea required rows={5} placeholder="Message" className={field} />
            <button className="mt-6 rounded-[3px] bg-ink px-8 py-4 text-[10px] uppercase tracking-[0.18em] text-white transition-colors duration-500 hover:bg-gold hover:text-ink">Send message</button>
          </form>
        )}
      </Reveal>
    </section>
  )
}
