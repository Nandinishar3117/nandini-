import { BrainCircuit, Code2, Database, Lightbulb } from 'lucide-react'
import SectionHeading from './SectionHeading'

const highlights = [
  [Code2, 'Full-Stack Development', 'Building interfaces and APIs that work together cleanly.'],
  [Lightbulb, 'Problem Solving', 'Breaking ambiguous problems into useful, testable steps.'],
  [Database, 'Java & Programming', 'Growing a strong foundation in Java and core programming concepts.'],
  [BrainCircuit, 'AI / RAG Applications', 'Learning how retrieval and language models can support real workflows.'],
]

export default function About() {
  return <section id="about" className="section-shell section-dark">
    <SectionHeading eyebrow="01 / About" title="Curious by default. Practical by choice." />
    <div className="about-grid">
      <div className="about-copy reveal"><p>I’m a Computer Science Engineering student interested in the craft behind useful software: thoughtful interfaces, dependable backend systems, and the problem-solving that connects them.</p><p>My current focus is full-stack development with JavaScript and Java, alongside data structures, databases, and AI/RAG applications. I’m still learning, and I value projects that turn that learning into something real people can use.</p></div>
      <div className="highlight-grid">{highlights.map(([Icon, title, text]) => <article className="highlight-card reveal" key={title}><Icon size={21} /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div>
  </section>
}
