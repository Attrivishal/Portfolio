import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/mern-room', label: 'MERN Room' },
  { path: '/cloud-room', label: 'Cloud Room' },
  { path: '/terminal', label: 'Terminal' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Background with smooth blur - NO BLACK LINE */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: scrolled 
            ? 'rgba(10, 10, 10, 0.85)' 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          borderBottom: scrolled ? '1px solid rgba(6, 182, 212, 0.15)' : 'none',
        }}
      />
      
      {/* Subtle glow when scrolled */}
      {scrolled && (
        <div
          style={{
            position: 'absolute',
            bottom: -1,
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent)',
          }}
        />
      )}

      <div className="container" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        height: 80,
        position: 'relative',
        zIndex: 2,
      }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 800,
              color: '#0A0A0A',
              fontFamily: 'Space Grotesk, sans-serif',
              boxShadow: scrolled ? '0 2px 10px rgba(6,182,212,0.2)' : '0 4px 15px rgba(6,182,212,0.3)',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            V
          </motion.div>
          
          <div>
            <span style={{ 
              fontFamily: 'Space Grotesk, sans-serif', 
              fontWeight: 700, 
              fontSize: '1.4rem', 
              letterSpacing: '-0.02em',
              color: '#F8FAFC',
            }}>
              Vishal
            </span>
            <span style={{ 
              fontFamily: 'Space Grotesk, sans-serif', 
              fontWeight: 700, 
              fontSize: '1.4rem', 
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginLeft: '4px',
            }}>
              Attri
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                padding: '8px 18px',
                borderRadius: 40,
                fontSize: '0.95rem',
                fontWeight: 500,
                color: pathname === link.path ? '#22D3EE' : '#94A3B8',
                background: pathname === link.path ? 'rgba(6,182,212,0.1)' : 'transparent',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { 
                if (pathname !== link.path) { 
                  e.target.style.color = '#F8FAFC'
                  e.target.style.background = 'rgba(255,255,255,0.05)'
                }}}
              onMouseLeave={e => { 
                if (pathname !== link.path) { 
                  e.target.style.color = '#94A3B8'
                  e.target.style.background = 'transparent'
                }}}
            >
              {link.label}
            </Link>
          ))}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to="/contact" 
              style={{ 
                marginLeft: '8px', 
                padding: '8px 22px', 
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: 40,
                background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
                color: '#0A0A0A',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 2px 8px rgba(6,182,212,0.3)',
              }}
            >
              Hire Me ✉
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'rgba(6,182,212,0.1)',
            border: '1px solid rgba(6,182,212,0.2)',
            borderRadius: 10,
            cursor: 'pointer',
            padding: '10px',
            flexDirection: 'column',
            gap: '6px',
            alignItems: 'center',
          }}
        >
          <div style={{
            width: 24,
            height: 2,
            background: menuOpen ? '#22D3EE' : '#94A3B8',
            borderRadius: 2,
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <div style={{
            width: 24,
            height: 2,
            background: menuOpen ? '#22D3EE' : '#94A3B8',
            borderRadius: 2,
            transition: 'all 0.3s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <div style={{
            width: 24,
            height: 2,
            background: menuOpen ? '#22D3EE' : '#94A3B8',
            borderRadius: 2,
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'rgba(10,10,10,0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(6,182,212,0.1)',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    padding: '12px 16px',
                    borderRadius: 12,
                    color: pathname === link.path ? '#22D3EE' : '#94A3B8',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    background: pathname === link.path ? 'rgba(6,182,212,0.1)' : 'transparent',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </motion.header>
  )
}