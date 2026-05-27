import ExperienceCard from '../components/ExperienceCard'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { experiences } from '../data/experiences'

export default function Experience() {
  return (
    <section id="experience" className="section-shell bg-background">
      <div className="page-container">
        <Reveal>
          <SectionTitle
            eyebrow="Experience"
            title="Enterprise systems and web delivery"
            description="Professional experience across SAP-supported business processes and enterprise web application development."
          />
        </Reveal>
        <div className="grid gap-5">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 0.06}>
              <ExperienceCard {...experience} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
