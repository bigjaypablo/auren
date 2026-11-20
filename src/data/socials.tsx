import type { ReactNode } from 'react'

// Put the client's real profile links here.
export const socials: { name: string; href: string; icon: ReactNode }[] = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 4l14 16M19 4L5 20" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 8h2V4h-2.5C10.9 4 10 5.6 10 7.6V10H8v4h2v6h4v-6h2.2l.5-4H14V8.3c0-.2.1-.3.3-.3Z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:hello@auren.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3.5" y="6" width="17" height="12" rx="2" />
        <path d="m4 7.5 8 6 8-6" />
      </svg>
    ),
  },
]
