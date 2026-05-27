import { BriefcaseBusiness, Code2, Database, Landmark } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { education, interests, profile } from '../data/profile'

const capabilities = [
  { icon: Landmark, title: 'Enterprise Workflow', text: 'Understanding structured business processes and operational requirements.' },
  { icon: BriefcaseBusiness, title: 'SAP FI-CO Support', text: 'Experience supporting finance and controlling workflow contexts.' },
  { icon: Database, title: 'Business Systems', text: 'Exposure to tax, audit, budget, and database modernization systems.' },
  { icon: Code2, title: 'Frontend Development', text: 'Building readable and responsive React interfaces for real workflows.' },
]

export default function About() {
  return (
    <section id="about" className="section-shell border-t border-slate-900 bg-slate-950">
      <div className="page-container">
        <Reveal>
          <SectionTitle
            eyebrow="About"
            title="Technology grounded in business understanding"
            description={profile.summary}
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.04}>
              <article className="surface-card flex h-full gap-4 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon size={23} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <article className="surface-card h-full p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Education</p>
              <h3 className="mt-5 text-xl font-semibold text-white">{education.university}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {education.degree} in {education.major}
              </p>
              <p className="mt-1 text-sm text-slate-400">GPA: {education.gpa}</p>
            </article>
          </Reveal>
          <Reveal>
            <article className="surface-card h-full p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Interests</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {interests.map((interest) => (
                  <li key={interest} className="tag">
                    {interest}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
