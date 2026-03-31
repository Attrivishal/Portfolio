import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import Terminal from '../components/Terminal'
import Footer from '../components/Footer'
import TerminalEntry from '../components/TerminalEntry'

export default function TerminalPage() {
  const [showEntry, setShowEntry] = useState(true)
  const heroRef = useRef(null)

  return (
    <>
      {showEntry && (
        <TerminalEntry onComplete={() => setShowEntry(false)} />
      )}

      {/* Hero Section */}
      <section 
        ref={heroRef}
        style={{ 
          paddingTop: 120, 
          paddingBottom: 80, 
          position: 'relative', 
          overflow: 'hidden',
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="orb orb-cyan" style={{ width: 400, height: 400, top: -100, right: -150, opacity: 0.3 }} />
        <div className="orb orb-purple" style={{ width: 300, height: 300, bottom: -80, left: -120, opacity: 0.25 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.p 
              style={{ 
                color: '#22D3EE', 
                fontFamily: 'JetBrains Mono, monospace', 
                fontSize: '0.9rem', 
                marginBottom: '1rem', 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'rgba(6,182,212,0.1)',
                border: '1px solid rgba(6,182,212,0.3)',
                borderRadius: 999,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <span>💻</span> Interactive Playground
            </motion.p>

            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              marginBottom: '1rem', 
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 800
            }}>
              Terminal <span className="gradient-text-cyan">Playground</span>
            </h1>

            <p style={{ 
              color: '#94A3B8', 
              fontSize: '1.1rem', 
              maxWidth: 600, 
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              Practice Linux, Windows, Git, Docker, and AWS commands in this interactive terminal.
              Type <strong style={{ color: '#22D3EE' }}>'help'</strong> to get started!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="section" style={{ paddingTop: '0', position: 'relative', zIndex: 2 }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <Terminal />
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem',
            maxWidth: 1000,
            margin: '0 auto'
          }}>
            {[
              { icon: '🐧', title: 'Linux Commands', desc: 'Learn essential Linux commands for system administration' },
              { icon: '🪟', title: 'Windows Commands', desc: 'Master Windows CMD and PowerShell commands' },
              { icon: '📦', title: 'Git Commands', desc: 'Practice version control with Git' },
              { icon: '🐳', title: 'Docker Commands', desc: 'Learn container management commands' },
              { icon: '☁️', title: 'AWS CLI', desc: 'Practice AWS CLI commands for cloud management' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{ padding: '1.5rem', textAlign: 'center' }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#22D3EE' }}>{feature.title}</h3>
                <p style={{ color: '#64748B', fontSize: '0.8rem' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}