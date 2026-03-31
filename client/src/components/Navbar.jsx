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
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

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
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(6, 182, 212, 0.15)' : 'none',
          transition: 'all 0.4s ease',
        }}
      />

      {/* Scroll Progress Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)',
        }}
      />

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 80,
        position: 'relative',
        zIndex: 2,
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              color: '#0A0A0A',
            }}
          >
            V
          </motion.div>

          <div>
            <span style={{ color: '#F8FAFC', fontWeight: 700 }}>Vishal</span>
            <span style={{
              marginLeft: 4,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Attri
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }} className="desktop-nav">
          {navLinks.map(link => (
            <div key={link.path} style={{ position: 'relative' }}>
              
              {/* Active Pill */}
              {pathname === link.path && (
                <motion.div
                  layoutId="active-pill"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 40,
                    background: 'rgba(6,182,212,0.12)',
                    zIndex: -1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}

              <Link
                to={link.path}
                style={{
                  padding: '8px 18px',
                  borderRadius: 40,
                  color: pathname === link.path ? '#22D3EE' : '#94A3B8',
                  textDecoration: 'none',
                  fontWeight: 500,
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  if (pathname !== link.path) {
                    e.currentTarget.style.color = '#F8FAFC'
                  }
                }}
                onMouseLeave={e => {
                  if (pathname !== link.path) {
                    e.currentTarget.style.color = '#94A3B8'
                  }
                }}
              >
                {link.label}

                {/* Underline */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: 2,
                    left: 10,
                    right: 10,
                    height: 2,
                    borderRadius: 2,
                    background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)',
                    transform: pathname === link.path ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </Link>
            </div>
          ))}

          {/* CTA */}
          <Link
            to="/contact"
            style={{
              marginLeft: 10,
              padding: '8px 20px',
              borderRadius: 40,
              background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
              color: '#0A0A0A',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Hire Me ✉
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            display: 'none',
            padding: 10,
            borderRadius: 10,
            background: 'rgba(6,182,212,0.1)',
            border: '1px solid rgba(6,182,212,0.2)',
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(10,10,10,0.98)',
              backdropFilter: 'blur(20px)',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{ padding: 20 }}
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.08 } }
              }}
            >
              {navLinks.map(link => (
                <motion.div
                  key={link.path}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Link
                    to={link.path}
                    style={{
                      display: 'block',
                      padding: 12,
                      borderRadius: 10,
                      color: '#94A3B8',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </motion.header>
  )
}
