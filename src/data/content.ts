import { IMG } from './images'

export type Product = { id: string; name: string; price: number; cat: string; img: string; color: string; tag?: string }

export const products: Product[] = [
  { id: 'noa-sofa', name: 'Noa Sculptural Sofa', price: 1890, cat: 'Seating', img: IMG.chairOrange, color: '#d9a21b', tag: 'Featured' },
  { id: 'arc-sofa', name: 'Arc Sofa', price: 3200, cat: 'Seating', img: IMG.hero, color: '#b4532a', tag: 'New' },
  { id: 'terra-lounge', name: 'Terra Lounge Chair', price: 980, cat: 'Seating', img: IMG.chairOrange, color: '#a8481f' },
  { id: 'moss-armchair', name: 'Moss Armchair', price: 940, cat: 'Seating', img: IMG.chairGreen, color: '#7f9a82' },
  { id: 'sol-pendant', name: 'Sol Pendant', price: 420, cat: 'Lighting', img: IMG.lamp, color: '#d9a21b', tag: 'Limited' },
  { id: 'dune-table', name: 'Dune Side Table', price: 360, cat: 'Tables', img: IMG.detail, color: '#3a2f2a' },
  { id: 'oak-dining', name: 'Oak Dining Table', price: 2100, cat: 'Tables', img: IMG.room, color: '#2b2623' },
  { id: 'ember-set', name: 'Ember Cushion Set', price: 120, cat: 'Decor', img: IMG.detail, color: '#1f6b6b' },
  { id: 'halo-floor', name: 'Halo Floor Lamp', price: 540, cat: 'Lighting', img: IMG.lamp, color: '#c8a15a' },
]

export const categories = ['All', 'Seating', 'Tables', 'Lighting', 'Decor']

export const collections = [
  { no: '01', name: 'Considered Comfort', text: 'Soft curves and deep seats, made for slow evenings and long conversations.', img: IMG.hero, color: '#b4532a' },
  { no: '02', name: 'Grounded Forms', text: 'Solid oak and honest joinery. Pieces that gain character as they age.', img: IMG.room, color: '#2b2623' },
  { no: '03', name: 'Quiet Light', text: 'Warm, diffused lighting that makes a room feel settled and calm.', img: IMG.lamp, color: '#d9a21b' },
  { no: '04', name: 'Green Room', text: 'Muted sage and moss tones that bring the outside in without noise.', img: IMG.chairGreen, color: '#7f9a82' },
]
