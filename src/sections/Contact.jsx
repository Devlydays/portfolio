import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import { profile, socialLinks } from '../data/profile'

const resumeFile = profile.resumePath

const contactLinks = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: 'tel:+660993849619',
    icon: Phone,
  },
  {
    label: 'GitHub',
    value: 'GitHub Profile',
    href: socialLinks.github,
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'LinkedIn Profile',
    href: socialLinks.linkedin,
    icon: Linkedin,
  },
]

export default function Contact() {
  return (
    <footer id="contact" className="section-shell bg-background">
      <div className="page-container">
        <Reveal>
          <div className="surface-card grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_390px] lg:p-12">
            <div>
              <SectionTitle
                eyebrow="Contact"
                title="Ready to build useful business software"
                description="Open to Frontend Developer, Full Stack Developer, and Junior SAP Consultant opportunities."
                className="mb-8"
              />
              <a href={resumeFile} download className="button-primary">
                <Download size={18} /> Download Resume
              </a>
            </div>
            <address className="grid content-center gap-3 not-italic">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-blue-500/35"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-slate-500">{label}</span>
                    <span className="mt-1 block truncate text-sm font-medium text-slate-200">{value}</span>
                  </span>
                </a>
              ))}
            </address>
          </div>
        </Reveal>
        <p className="mt-8 text-center text-sm text-slate-500">
          &copy; 2026 Phongphisit Phumin. Built with React and JavaScript.
        </p>
      </div>
    </footer>
  )
}
