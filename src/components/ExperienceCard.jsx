import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function ExperienceCard({ company, location, role, period, accomplishments, index }) {
  const [isExpanded, setIsExpanded] = useState(index === 0)

  return (
    <article className="surface-card overflow-hidden">
      <button
        type="button"
        onClick={() => setIsExpanded((current) => !current)}
        aria-expanded={isExpanded}
        className="flex w-full items-start justify-between gap-4 p-6 text-left sm:p-8"
      >
        <span className="flex gap-4">
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-sm font-semibold text-blue-300">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span>
            <span className="block text-lg font-semibold text-white">{company}</span>
            <span className="mt-3 block text-sm text-slate-300">
              <span className="font-medium text-blue-300">Role:</span> {role}
            </span>
            <span className="mt-2 block text-sm text-slate-400">
              <span className="font-medium text-slate-300">Period:</span> {period}
            </span>
            <span className="mt-2 block text-sm text-slate-400">
              <span className="font-medium text-slate-300">Location:</span> {location}
            </span>
          </span>
        </span>
        <ChevronDown
          size={20}
          className={`mt-2 shrink-0 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>
      {isExpanded && (
        <div className="border-t border-slate-800 px-6 py-6 sm:ml-14 sm:px-8">
          <p className="mb-4 text-sm font-medium text-blue-300">Accomplishments</p>
          <ul className="grid gap-3">
            {accomplishments.map((accomplishment) => (
              <li key={accomplishment} className="flex gap-3 text-sm leading-7 text-slate-300">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                {accomplishment}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}
