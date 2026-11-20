export default function Img({ src, alt, className = '', color = '#2a2320' }: { src: string; alt: string; className?: string; color?: string }) {
  return (
    <div className={'relative overflow-hidden ' + className} style={{ background: color }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => { e.currentTarget.style.display = 'none' }}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}
