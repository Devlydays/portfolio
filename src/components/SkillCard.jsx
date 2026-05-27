export default function SkillCard({ title, skills }) {
  return (
    <article className="surface-card p-6 transition-colors duration-200 hover:border-slate-700">
      <h3 className="mb-6 text-lg font-semibold text-white">{title}</h3>
      <ul className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <li key={skill} className="tag">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}
