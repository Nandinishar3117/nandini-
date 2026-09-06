import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navItems, profile } from '../data/profile'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">NS</span><span>{profile.name}</span></a>
      <button className="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  )
}
