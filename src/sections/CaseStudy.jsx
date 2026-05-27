import { ArrowRight, CheckCircle2, Cpu, Lightbulb, TriangleAlert } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { budgetWorkflowStudy } from '../data/caseStudy'

const studyItems = [
  {
    icon: TriangleAlert,
    label: 'Problem',
    text: budgetWorkflowStudy.problem,
  },
  {
    icon: Lightbulb,
    label: 'Solution',
    text: budgetWorkflowStudy.solution,
  },
  {
    icon: Cpu,
    label: 'Technologies',
    text: budgetWorkflowStudy.technologies,
  },
  {
    icon: CheckCircle2,
    label: 'Result',
    text: budgetWorkflowStudy.result,
  },
]

export default function CaseStudy() {
  return (
    <section id="case-study" className="section-shell border-y border-slate-900 bg-slate-950">
      <div className="page-container">
        <Reveal>
          <SectionTitle
            eyebrow="Case Study"
            title={budgetWorkflowStudy.title}
            description="A business-process perspective on moving budget approval work from manual handling toward an organized digital workflow."
          />
        </Reveal>
        <Reveal>
          <article className="surface-card overflow-hidden">
            <div className="grid gap-px bg-slate-800 lg:grid-cols-4">
              {studyItems.map(({ icon: Icon, label, text }, index) => (
                <div key={label} className="bg-surface p-6 sm:p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon size={21} />
                    </span>
                    {index < studyItems.length - 1 && (
                      <ArrowRight className="hidden text-slate-700 lg:block" size={18} />
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-white">{label}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
