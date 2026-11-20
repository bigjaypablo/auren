import { useState } from 'react'
import Lines from '../components/Lines'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/content'

export default function Shop() {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? products : products.filter((p) => p.cat === cat)
  return (
    <section className="px-6 pb-28 pt-36 md:px-12">
      <p className="eyebrow">Shop</p>
      <h1 className="mt-4 font-display text-[clamp(3rem,9vw,7rem)] leading-[0.95]">
        <Lines lines={['Pieces for', 'a calmer home.']} />
      </h1>
      <div className="mt-12 flex flex-wrap gap-2 border-b border-black/10 pb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={'rounded-full border px-5 py-2 text-[10px] uppercase tracking-[0.18em] transition-all duration-500 ' + (cat === c ? 'border-ink bg-ink text-white' : 'border-black/15 hover:border-ink')}
          >
            {c}
          </button>
        ))}
      </div>
      <div key={cat} className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">
        {list.map((p, i) => <ProductCard key={p.id} p={p} i={i} />)}
      </div>
    </section>
  )
}
