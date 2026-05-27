import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section-shell border-y border-slate-900 bg-slate-950">
      <div className="page-container">
        <Reveal>
          <SectionTitle
            eyebrow="Skills"
            title="Capabilities organized for delivery"
            description="A practical technology set spanning user interfaces, server-side development, data work, and enterprise tooling."
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04} className="h-full">
              <SkillCard {...group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
