import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './sections/About'
import CaseStudy from './sections/CaseStudy'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <CaseStudy />
        <Contact />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<PortfolioPage />} />
    </Routes>
  )
}
