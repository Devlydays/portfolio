import { ArrowRight, Download, Github, Workflow } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { profile, socialLinks } from '../data/profile'

const resumeFile = profile.resumePath
const profileImage = '/portfolio/images/profile.jpg'
const coreFocus = ['Frontend Development', 'Enterprise Systems', 'SAP FI-CO Support', 'Business Workflow']

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [hasImageError, setHasImageError] = useState(false)
  const animation = prefersReducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

  return (
    <section className="relative overflow-hidden bg-background pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="absolute left-1/2 top-0 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="page-container relative grid items-center gap-14 lg:grid-cols-[1fr_380px]">
        <motion.div {...animation} transition={{ duration: 0.48 }}>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
            <Workflow size={16} /> Modern Web Development + Enterprise Workflow
          </p>
          <p className="mb-4 text-base font-medium text-blue-400">{profile.name}</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Frontend / Full Stack Developer
            <span className="mt-2 block text-slate-300">with Enterprise System Experience</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Building business-oriented web applications with React and JavaScript, supported by an
            understanding of enterprise processes and finance workflows.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="button-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href={resumeFile} download className="button-secondary">
              <Download size={18} /> Download Resume
            </a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="button-secondary">
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.aside
          {...animation}
          transition={{ duration: 0.48, delay: prefersReducedMotion ? 0 : 0.14 }}
          className="surface-card mx-auto w-full max-w-sm p-5 sm:p-6 lg:mx-0"
          aria-label="Professional positioning"
        >
          <div className="relative mb-7 h-56 overflow-hidden rounded-2xl border border-slate-800 bg-[linear-gradient(145deg,#172554,#111827_58%,#0f172a)] shadow-[0_14px_32px_rgba(2,6,23,0.28)] sm:h-60">
            {!hasImageError && (
              <img
                src={profileImage}
                alt="Phongphisit Phumin"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onError={() => setHasImageError(true)}
                className="h-full w-full object-cover object-[center_33%]"
              />
            )}
            {hasImageError && (
              <div className="flex h-full items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl font-semibold text-blue-200">
                  PP
                </span>
              </div>
            )}
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Core Focus</p>
          <div className="mt-5 grid gap-3">
            {coreFocus.map((focus) => (
              <div
                key={focus}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/55 px-4 py-3.5 text-sm font-medium text-slate-200"
              >
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                {focus}
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
