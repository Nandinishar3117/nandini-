import { ArrowUpRight, Code, Mail, Network } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return <section id="home" className="hero section-shell">
    <div className="hero-copy reveal">
      <p className="eyebrow">Available for internships & placement opportunities</p>
      <h1>Hi, I'm <span>Nandini Sharma</span></h1>
      <p className="hero-role">{profile.role}</p>
      <p className="hero-description">I build scalable, user-focused web applications and enjoy turning ideas into practical software solutions.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">View My Projects <ArrowUpRight size={17} /></a>
        <a className="button button-ghost" href={profile.resume} target="_blank" rel="noreferrer">View Resume <ArrowUpRight size={16} /></a>
        <a className="text-link" href="#contact">Contact me <ArrowUpRight size={15} /></a>
      </div>
      <div className="social-links" aria-label="Social links">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code size={18} /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Network size={18} /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
      </div>
    </div>
    <div className="showcase-wrap reveal reveal-delay">
      <div className="portrait-card">
        <img className="portrait-image" src="/profile.png" alt="Portrait of Nandini Sharma" />
        <div className="portrait-label"><span className="status-dot" /> Nandini Sharma / CSE</div>
      </div>
      <div className="portrait-note"><span className="status-dot" /> Currently exploring RAG applications</div>
    </div>
  </section>
}
