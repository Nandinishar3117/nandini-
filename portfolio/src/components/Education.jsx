import { GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Education() {
  return <section id="education" className="section-shell section-tinted">
    <SectionHeading eyebrow="05 / Education" title="The foundation I’m building on" />
    <article className="education-card reveal">
      <div className="education-icon"><GraduationCap size={28} /></div>
      <div>
        <p className="eyebrow">Bachelor of Technology</p>
        <h3>Computer Science Engineering</h3>
        <p className="education-meta">[College Name] <span>•</span> [Start Year] – [Expected Graduation Year]</p>
        <p className="education-copy">Add relevant coursework, campus activities, or a short note about what you’re currently exploring here.</p>
      </div>
    </article>
  </section>
}
