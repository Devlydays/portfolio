import { ArrowUpRight, Github } from 'lucide-react'

export default function ProjectCard({ title, type, description, technologies, githubUrl, liveUrl }) {
  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-blue-500/30">
      <div className="relative flex h-48 items-end overflow-hidden border-b border-slate-800 bg-slate-900 p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(59,130,246,0.24),transparent_40%),linear-gradient(130deg,#111827,#172554)]" />
        <div className="relative grid w-full grid-cols-3 gap-2 opacity-60">
          <span className="col-span-3 h-3 rounded-full bg-slate-700" />
          <span className="h-12 rounded-md bg-blue-500/30" />
          <span className="col-span-2 h-12 rounded-md bg-slate-700/70" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-400">{type}</p>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="flex-1 text-sm leading-7 text-slate-400">{description}</p>
        <ul className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li key={technology} className="tag">
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex gap-3 border-t border-slate-800 pt-5">
          <a href={githubUrl} target="_blank" rel="noreferrer" className="button-secondary flex-1 px-3">
            <Github size={16} /> GitHub
          </a>
          <a href={liveUrl} target="_blank" rel="noreferrer" className="button-secondary flex-1 px-3">
            Live Demo <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  )
}
