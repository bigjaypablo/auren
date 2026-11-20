import { IMG } from './images'

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`

export type Detail = {
  blurb: string
  materials: string
  dims: string
  gallery: string[]
  colors?: { name: string; hex: string; img: number }[]
  sizes?: { label: string; delta: number }[]
}

// Placeholder copy and measurements. Replace with the client's real specs and photos.
export const details: Record<string, Detail> = {
  'noa-sofa': {
    blurb: 'A sculptural lounge piece with a sunken seat and softly rounded arms. Bold in colour, calm in shape.',
    materials: 'Solid ash frame, high-resilience foam, performance velvet upholstery in a hand-dyed finish.',
    dims: 'W 98 x D 88 x H 76 cm. Seat height 42 cm.',
    gallery: [IMG.chairOrange, IMG.detail, IMG.chairGreen],
    colors: [
      { name: 'Ochre', hex: '#d9a21b', img: 0 },
      { name: 'Terracotta', hex: '#b4532a', img: 1 },
      { name: 'Moss', hex: '#7f9a82', img: 2 },
    ],
  },
  'arc-sofa': {
    blurb: 'A low, generous curve built for slow evenings. Deep seats, soft edges and a quiet presence in any room.',
    materials: 'Kiln-dried hardwood frame, high-resilience foam with feather topper, performance velvet upholstery.',
    dims: '2 seater: W 190 x D 92 x H 74 cm. 3 seater: W 240 x D 92 x H 74 cm.',
    gallery: [IMG.hero, u('1754557409108-cccb4205d5dc'), u('1664711942326-2c3351e215e6'), u('1599696848652-f0ff23bc911f')],
    colors: [
      { name: 'Terracotta', hex: '#b4532a', img: 0 },
      { name: 'Sand', hex: '#c9b79c', img: 2 },
      { name: 'Cocoa', hex: '#5a4033', img: 3 },
    ],
    sizes: [
      { label: '2 Seater', delta: 0 },
      { label: '3 Seater', delta: 600 },
      { label: 'Corner', delta: 1400 },
    ],
  },
  'terra-lounge': {
    blurb: 'A sculpted lounge chair with a wrapped back and slim steel legs. Compact, comfortable and quietly bold.',
    materials: 'Powder-coated steel legs, moulded foam seat, woven bouclé or velvet upholstery.',
    dims: 'W 72 x D 76 x H 78 cm. Seat height 42 cm.',
    gallery: [IMG.chairOrange, IMG.detail, u('1564078516393-cf04bd966897')],
    colors: [
      { name: 'Terracotta', hex: '#a8481f', img: 0 },
      { name: 'Mustard', hex: '#d9a21b', img: 1 },
      { name: 'Stone', hex: '#b9b2a6', img: 2 },
    ],
  },
  'moss-armchair': {
    blurb: 'A calm, earthy armchair in a muted sage. Made to sit beside a window and stay a while.',
    materials: 'Solid ash frame, medium-firm foam, textured linen blend upholstery.',
    dims: 'W 70 x D 74 x H 80 cm. Seat height 43 cm.',
    gallery: [IMG.chairGreen, IMG.detail, u('1760611656148-063d3b9a8dbc')],
    colors: [
      { name: 'Moss', hex: '#7f9a82', img: 0 },
      { name: 'Clay', hex: '#b4532a', img: 1 },
    ],
  },
  'sol-pendant': {
    blurb: 'A warm, diffused pendant that makes a room feel settled. Hand-finished with a soft metallic glow.',
    materials: 'Spun brass shade, braided textile cable, ceramic socket. Bulb not included.',
    dims: 'Small: Ø 30 x H 28 cm. Large: Ø 45 x H 38 cm. Cable length 150 cm.',
    gallery: [IMG.lamp, IMG.room],
    colors: [
      { name: 'Brass', hex: '#c8a15a', img: 0 },
      { name: 'Black', hex: '#1a1412', img: 1 },
    ],
    sizes: [
      { label: 'Small', delta: 0 },
      { label: 'Large', delta: 120 },
    ],
  },
  'dune-table': {
    blurb: 'A rounded side table with a solid, grounded base. Sits easily beside a sofa or a bed.',
    materials: 'Solid oak with a hand-rubbed natural oil finish.',
    dims: 'Small: Ø 45 x H 50 cm. Large: Ø 60 x H 45 cm.',
    gallery: [IMG.detail, u('1695272765502-78c1e8329566'), IMG.lamp],
    colors: [
      { name: 'Natural Oak', hex: '#c9a679', img: 0 },
      { name: 'Smoked Oak', hex: '#4a3a30', img: 2 },
    ],
    sizes: [
      { label: 'Ø 45 cm', delta: 0 },
      { label: 'Ø 60 cm', delta: 140 },
    ],
  },
  'oak-dining': {
    blurb: 'A long, honest dining table in solid oak. Made for slow dinners and long conversations.',
    materials: 'Solid European oak top, tapered legs, hard-wax oil finish.',
    dims: '6 seat: W 180 x D 90 x H 75 cm. 8 seat: W 220 x D 100 x H 75 cm.',
    gallery: [IMG.room, u('1616046229478-9901c5536a45'), u('1758565811572-22622d91c2e1')],
    colors: [
      { name: 'Natural Oak', hex: '#c9a679', img: 1 },
      { name: 'Smoked Oak', hex: '#4a3a30', img: 0 },
    ],
    sizes: [
      { label: '6 Seat', delta: 0 },
      { label: '8 Seat', delta: 650 },
    ],
  },
  'ember-set': {
    blurb: 'Soft, textured cushions in warm, earthy tones. The easiest way to bring colour into a calm room.',
    materials: 'Cotton-linen blend cover, feather and down inner, concealed zip.',
    dims: '50 x 50 cm each.',
    gallery: [IMG.detail, IMG.chairOrange],
    colors: [
      { name: 'Teal', hex: '#1f6b6b', img: 0 },
      { name: 'Mustard', hex: '#d9a21b', img: 1 },
      { name: 'Rust', hex: '#b4532a', img: 1 },
    ],
    sizes: [
      { label: 'Set of 2', delta: 0 },
      { label: 'Set of 4', delta: 110 },
    ],
  },
  'halo-floor': {
    blurb: 'A slim floor lamp with a soft, glowing halo. Gentle light for reading corners and quiet evenings.',
    materials: 'Brushed brass stem, marble base, opal glass diffuser.',
    dims: 'H 160 x Ø 32 cm base. Cable length 200 cm.',
    gallery: [IMG.lamp, IMG.room],
    colors: [
      { name: 'Brass', hex: '#c8a15a', img: 0 },
      { name: 'Black', hex: '#1a1412', img: 1 },
    ],
  },
}
