import { skillGroups } from '../data/skills'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return <section id="skills" className="section-shell section-tinted"><SectionHeading eyebrow="02 / Toolkit" title="A growing technical toolkit" children="The technologies I’m using to learn, build, and make ideas tangible." /><div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-group reveal" key={group.label}><div className="skill-index">0{index + 1}</div><h3>{group.label}</h3><div className="tag-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>
}
