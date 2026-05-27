import { Github, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { profile, socialLinks } from '../data/profile'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Contact', href: '#contact' },
]

const resumeFile = profile.resumePath

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-background/90 backdrop-blur-lg">
      <nav className="page-container flex h-18 items-center justify-between" aria-label="Main navigation">
        <a href="#" className="flex items-center gap-3" aria-label="Phongphisit Phumin home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-sm font-bold text-blue-300">
            PP
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-slate-100 sm:block">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-300 transition-colors hover:border-blue-400/60 hover:text-white"
            aria-label="Visit GitHub profile"
          >
            <Github size={19} />
          </a>
          <a href={resumeFile} download className="button-primary min-h-11 px-5">
            Resume
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-200 lg:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-background lg:hidden">
          <div className="page-container flex flex-col gap-2 py-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex gap-3 border-t border-slate-800 pt-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="button-secondary flex-1"
              >
                <Github size={18} /> GitHub
              </a>
              <a href={resumeFile} download className="button-primary flex-1">
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
