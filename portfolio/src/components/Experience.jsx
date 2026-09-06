import { BookOpen, BriefcaseBusiness, Code2, Medal, Trophy, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'

const learning = [['Projects', Code2], ['Coding Practice', BriefcaseBusiness], ['Academic Work', BookOpen], ['Hackathons', Trophy], ['Certifications', Medal], ['Open Source', Users]]
export default function Experience() { return <section id="experience" className="section-shell section-dark"><SectionHeading eyebrow="04 / Experience" title="Experience & learning" children="A transparent snapshot of the spaces where I’m building confidence and depth." /><div className="learning-grid">{learning.map(([label, Icon]) => <div className="learning-item reveal" key={label}><Icon size={21} /><span>{label}</span><small>Placeholder to update</small></div>)}</div></section> }
