const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`

export const IMG = {
  hero: u('1758915753451-b478b4e6f920', 2400),
  chairOrange: u('1586023492125-27b2c045efd7', 1000),
  chairGreen: u('1606744888344-493238951221', 1000),
  room: u('1786034293715-892915bd43d0', 2000),
  detail: u('1606744837616-56c9a5c6a6eb', 1200),
  lamp: u('1680013497185-997350f96e07', 1200),
}

export const HERO_SLIDES = [
  { img: IMG.hero, color: '#2a2320', eyebrow: 'Collection 01 · Considered Comfort', lines: ['Quiet', 'Luxury'] },
  { img: u('1774199496664-a9690967be5a', 2400), color: '#3a2f2a', eyebrow: 'Collection 02 · Grounded Forms', lines: ['Made', 'Slowly'] },
  { img: IMG.room, color: '#2b2623', eyebrow: 'Collection 03 · Quiet Light', lines: ['Felt', 'Daily'] },
  { img: u('1761782797823-2b555af8a226', 2400), color: '#1f2a24', eyebrow: 'Collection 04 · Green Room', lines: ['Pure', 'Form'] },
]
