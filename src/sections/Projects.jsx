import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section-shell bg-background">
      <div className="page-container">
        <Reveal>
          <SectionTitle
            eyebrow="Projects"
            title="Selected web and business application work"
            description="Project placeholders prepared for live demos and repositories as implementations are published."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04} className="h-full">
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
