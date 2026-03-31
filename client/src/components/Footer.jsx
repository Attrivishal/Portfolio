import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'MERN Room', path: '/mern-room' },
  { label: 'Cloud Room', path: '/cloud-room' },
  { label: 'Contact', path: '/contact' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/Attrivishal', icon: '⌥' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vishalattri', icon: '⚡' },
  { label: 'Email', href: 'mailto:vishalattri196@gmail.com', icon: '✉' },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(6,182,212,0.1)',
      background: 'rgba(10,10,10,0.9)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      zIndex: 10,
    }}>
      <div className="container" style={{ padding: '3rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, color: '#0A0A0A', fontSize: '0.9rem',
              }}>V</div>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                <span style={{ color: '#F8FAFC' }}>Vishal</span>
                <span className="gradient-text-cyan">Attri</span>
              </span>
            </div>
            <p style={{ color: '#64748B', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 250 }}>
              MERN Stack Developer & Cloud Engineer building scalable apps and the infrastructure they run on.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {footerLinks.map(l => (
                <Link key={l.path} to={l.path} style={{
                  color: '#64748B', fontSize: '0.875rem', textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.target.style.color = '#22D3EE'}
                onMouseLeave={e => e.target.style.color = '#64748B'}
                >{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="mailto:vishalattri196@gmail.com" style={{ color: '#64748B', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => e.target.style.color = '#22D3EE'}
                onMouseLeave={e => e.target.style.color = '#64748B'}
              >vishalattri196@gmail.com</a>
              <a href="tel:+917889360112" style={{ color: '#64748B', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => e.target.style.color = '#22D3EE'}
                onMouseLeave={e => e.target.style.color = '#64748B'}
              >+91 7889360112</a>
              <span style={{ color: '#64748B', fontSize: '0.875rem' }}>📍 Punjab, India</span>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 style={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  style={{
                    width: 40, height: 40,
                    borderRadius: 10,
                    border: '1px solid rgba(6,182,212,0.15)',
                    background: 'rgba(6,182,212,0.05)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94A3B8', fontSize: '0.9rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.5)'; e.currentTarget.style.color = '#22D3EE'; e.currentTarget.style.background = 'rgba(6,182,212,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.15)'; e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.background = 'rgba(6,182,212,0.05)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#475569', fontSize: '0.8rem' }}>
            © 2024 Vishal Attri. Built with React + Node.js
          </p>
          <p style={{ color: '#475569', fontSize: '0.8rem' }}>
            Made with ❤️ in <span className="gradient-text-cyan">Punjab, India</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
