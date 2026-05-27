export default function SectionTitle({ eyebrow, title, description, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start'

  return (
    <div className={`mb-12 flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="text-base leading-8 text-slate-400">{description}</p>}
    </div>
  )
}
