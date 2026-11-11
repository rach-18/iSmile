import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ClinicLogo } from '../brand/ClinicLogo'
import { FacebookLink } from '../ui/FacebookLink'
import { InstagramLink } from '../ui/InstagramLink'
import './SiteLayout.css'

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Our services' },
  { to: '/about', label: 'About us' },
  { to: '/contact', label: 'Contact' },
]

export function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="site-header__brand" to="/" aria-label="iSmile Dental Care home">
          <ClinicLogo />
        </NavLink>
        <button
          className={`site-nav-toggle${menuOpen ? ' site-nav-toggle--open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <nav id="site-navigation" className={`site-nav${menuOpen ? ' site-nav--open' : ''}`} aria-label="Main navigation">
          {navigation.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'site-nav__link is-active' : 'site-nav__link'}>
              {label}
            </NavLink>
          ))}
        </nav>
        <NavLink className="site-header__cta" to="/contact" onClick={() => setMenuOpen(false)}>Book a visit <span aria-hidden="true">↗</span></NavLink>
      </header>

      {menuOpen && <button className="site-nav-backdrop" type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} />}

      <Outlet />

      <footer className="site-footer">
        <ClinicLogo className="clinic-logo--footer" tone="white" />
        <p>Gentle care. Brighter smiles.</p>
        <div className="site-footer__links"><div className="site-footer__socials"><InstagramLink className="social-icon-link--small" /><FacebookLink className="social-icon-link--small" /></div><span>© {new Date().getFullYear()} iSmile Dental Care</span></div>
      </footer>
    </div>
  )
}
