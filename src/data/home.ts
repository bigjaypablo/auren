import { IMG } from './images'

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`

export const H = {
  rooms: u('1583847268964-b28dc8f51f92', 1600),
  roomsSmall: u('1618220179428-22790b461013', 800),
  j1: u('1618221195710-dd6b41faaea6', 1200),
  j2: u('1774200981075-a728eaaa3824', 1200),
  j3: u('1616046229478-9901c5536a45', 1200),
}

export const tiles = [
  { name: 'Lounge Chairs', count: '14 pieces', img: IMG.chairOrange, color: '#a8481f', span: 'col-span-2 md:col-span-7' },
  { name: 'Sofas', count: '9 pieces', img: IMG.hero, color: '#b4532a', span: 'md:col-span-5' },
  { name: 'Lighting', count: '11 pieces', img: IMG.lamp, color: '#d9a21b', span: 'md:col-span-4' },
  { name: 'Tables and Storage', count: '12 pieces', img: IMG.detail, color: '#2b2623', span: 'col-span-2 md:col-span-8' },
]

export const journal = [
  { cat: 'Design notes', title: 'How to build a whole room around one statement chair', time: '5 min read', img: H.j1, color: '#3a2f2a' },
  { cat: 'Materials', title: 'Why solid oak ages better than anything else we make', time: '4 min read', img: H.j2, color: '#2b2623' },
  { cat: 'Living well', title: 'Slow evenings: designing a corner made for doing nothing', time: '6 min read', img: H.j3, color: '#4a3a30' },
]

export const perks = [
  { t: 'Complimentary delivery', d: 'On every order over $1,500.' },
  { t: 'Ten year frame warranty', d: 'Built to be lived in, for decades.' },
  { t: 'Made to order', d: 'Your fabric, your size, in 4 to 6 weeks.' },
  { t: 'Thirty day returns', d: 'Live with it. Send it back if it is not right.' },
]
