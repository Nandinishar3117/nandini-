import { Award, Code2, GraduationCap, Trophy } from 'lucide-react'
import SectionHeading from './SectionHeading'
const items = [['Certifications', Award], ['Hackathons', Trophy], ['Coding achievements', Code2], ['Academic achievements', GraduationCap]]
export default function Achievements() { return <section className="section-shell"><SectionHeading eyebrow="06 / Milestones" title="Room for the wins ahead" children="A deliberately honest space for achievements as they happen." /><div className="achievement-grid">{items.map(([label, Icon]) => <article className="achievement-card reveal" key={label}><Icon size={22} /><h3>{label}</h3><p>[Add details here]</p></article>)}</div></section> }
