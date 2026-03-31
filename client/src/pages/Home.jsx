import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import StatCard from '../components/StatCard'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { useState } from 'react'  // Add this import
import HomeEntry from '../components/HomeEntry'  // Add this import

// ─── Photo placeholder ─────────────────────────────────
// Add your photo at: /images/vishal-photo.jpg
const PHOTO = "/images/vishal-photo.jpg"

const stats = [
  { value: 29, suffix: '+', label: 'GitHub Repositories', icon: '🗂️', color: 'cyan', delay: 0 },
  { value: 2, suffix: '+', label: 'Major Projects', icon: '🚀', color: 'purple', delay: 0.1 },
  { value: 8.39, suffix: '', label: 'CGPA / 10', icon: '🎓', color: 'pink', delay: 0.2 },
  { value: 2026, suffix: '', label: 'Graduation Year', icon: '📅', color: 'cyan', delay: 0.3 },
]

const rooms = [
  {
    id: 'mern',
    path: '/mern-room',
    title: 'MERN Stack Developer',
    subtitle: 'React · Node · Express · MongoDB',
    description: 'Building full-stack web applications with modern JavaScript technologies, real-time features, and clean UI/UX.',
    project: 'PipelineIQ — Sales CRM',
    tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Socket.io'],
    gradient: 'linear-gradient(135deg, #06B6D4, #22D3EE)',
    borderColor: 'rgba(6,182,212,0.4)',
    glowColor: 'rgba(6,182,212,0.15)',
    icon: '⚡',
    accentColor: '#22D3EE',
    resume: 'MERN-Resume.pdf',
  },
  {
    id: 'cloud',
    path: '/cloud-room',
    title: 'Cloud Engineer',
    subtitle: 'AWS · Linux · Docker · GitHub Actions',
    description: 'Designing, deploying, and optimizing scalable cloud infrastructure with cost-awareness and automation.',
    project: 'Cloud Intelligence Platform',
    tags: ['AWS EC2', 'Lambda', 'S3', 'CloudWatch', 'Docker'],
    gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    borderColor: 'rgba(139,92,246,0.4)',
    glowColor: 'rgba(139,92,246,0.15)',
    icon: '🌩️',
    accentColor: '#A78BFA',
    resume: 'Cloud-Resume.pdf',
  },
]

export default function Home() {
  const [showHomeEntry, setShowHomeEntry] = useState(true)

  const handleHomeEntryComplete = () => {
    setShowHomeEntry(false)
  }

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80, position: 'relative', overflow: 'hidden' }}>
        {/* Orbs */}
        <div className="orb orb-cyan" style={{ width: 600, height: 600, top: -100, right: -200, opacity: 0.6 }} />
        <div className="orb orb-purple" style={{ width: 400, height: 400, bottom: -100, left: -100, opacity: 0.5 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}>
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.4rem 1rem',
                  background: 'rgba(6,182,212,0.08)',
                  border: '1px solid rgba(6,182,212,0.2)',
                  borderRadius: 999,
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: '#22D3EE',
                  marginBottom: '1.5rem',
                  fontFamily: 'JetBrains Mono, monospace',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22D3EE', boxShadow: '0 0 8px #22D3EE', animation: 'pulse 2s infinite' }} />
                  Available for opportunities
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '0.5rem', letterSpacing: '-0.03em' }}
              >
                Hi, I'm{' '}
                <span className="gradient-text-cyan">Vishal</span>
                <br />
                <span style={{ color: '#F8FAFC' }}>Attri</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: '#94A3B8', marginBottom: '1.5rem', minHeight: '2em' }}
              >
                <TypeAnimation
                  sequence={[
                    'MERN Stack Developer', 2000,
                    'Cloud Engineer', 2000,
                    'Full Stack Developer', 2000,
                    'Problem Solver', 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{ fontFamily: 'JetBrains Mono, monospace', color: '#22D3EE' }}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 520 }}
              >
                Building <strong style={{ color: '#F8FAFC' }}>scalable applications</strong> AND the{' '}
                <strong style={{ color: '#F8FAFC' }}>cloud infrastructure</strong> they run on.
                BCA student at LPU with CGPA 8.39/10.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
              >
                <Link to="/mern-room" className="btn btn-primary">⚡ MERN Room</Link>
                <Link to="/cloud-room" className="btn btn-secondary">🌩️ Cloud Room</Link>
                <Link to="/contact" className="btn btn-outline">✉ Contact Me</Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}
              >
                {[
                  { href: 'https://github.com/Attrivishal', label: 'GitHub' },
                  { href: 'https://linkedin.com/in/vishalattri', label: 'LinkedIn' },
                  { href: 'mailto:vishalattri196@gmail.com', label: 'Email' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ color: '#64748B', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseEnter={e => e.target.style.color = '#22D3EE'}
                    onMouseLeave={e => e.target.style.color = '#64748B'}
                  >{s.label} ↗</a>
                ))}
              </motion.div>
            </div>

            {/* Right: Photo / Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div style={{ position: 'relative', width: 320, height: 320 }}>
                {/* Animated blob ring */}
                <div style={{
                  position: 'absolute', inset: -12,
                  borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%',
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(139,92,246,0.3))',
                  animation: 'morphBlob 8s ease-in-out infinite',
                  filter: 'blur(2px)',
                }} />
                {/* Photo container */}
                <div style={{
                  width: '100%', height: '100%',
                  borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%',
                  overflow: 'hidden',
                  background: PHOTO ? 'transparent' : 'linear-gradient(135deg, #0F172A, #1e293b)',
                  border: '2px solid rgba(6,182,212,0.3)',
                  animation: 'morphBlob 8s ease-in-out infinite',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '6rem',
                  position: 'relative',
                  zIndex: 1,
                }}>
                  {PHOTO
                    ? <img src={PHOTO} alt="Vishal Attri" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : <span>👨‍💻</span>
                  }
                </div>
                {/* Floating badges */}
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                  style={{ position: 'absolute', top: -10, right: -20, background: 'rgba(6,182,212,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: 12, padding: '0.5rem 0.75rem', fontSize: '0.8rem', color: '#22D3EE', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap' }}>
                  ⚡ React.js
                </motion.div>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                  style={{ position: 'absolute', bottom: 20, left: -30, background: 'rgba(139,92,246,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: 12, padding: '0.5rem 0.75rem', fontSize: '0.8rem', color: '#A78BFA', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap' }}>
                  🌩️ AWS
                </motion.div>
                <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  style={{ position: 'absolute', bottom: -5, right: -10, background: 'rgba(236,72,153,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(236,72,153,0.3)', borderRadius: 12, padding: '0.5rem 0.75rem', fontSize: '0.8rem', color: '#F472B6', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap' }}>
                  🗄️ MongoDB
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`
          @keyframes morphBlob {
            0%, 100% { border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%; }
            25% { border-radius: 40% 60% 30% 70% / 60% 40% 70% 30%; }
            50% { border-radius: 70% 30% 50% 50% / 30% 70% 50% 50%; }
            75% { border-radius: 30% 70% 60% 40% / 70% 30% 40% 60%; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}</style>
      </section>

      {/* ─── ROOMS ──────────────────────────────────────────── */}
      <section className="section" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <SectionReveal>
            <p style={{ color: '#22D3EE', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', marginBottom: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              // Dual Expertise
            </p>
            <h2 className="section-title">Choose Your Room</h2>
            <p className="section-subtitle">Two specialized domains, one developer. Explore my expertise.</p>
          </SectionReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {rooms.map((room, i) => (
              <SectionReveal key={room.id} delay={i * 0.15}>
                <div className="animated-border" style={{
                  background: 'rgba(17,24,39,0.7)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 24,
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s ease',
                  cursor: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = `0 20px 60px ${room.glowColor}` }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  {/* Top accent */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: room.gradient }} />

                  {/* Icon */}
                  <div style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: room.glowColor,
                    border: `1px solid ${room.borderColor}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.75rem', marginBottom: '1.25rem',
                  }}>
                    {room.icon}
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.35rem', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {room.title}
                  </h3>
                  <p style={{ fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace', color: room.accentColor, marginBottom: '1rem' }}>
                    {room.subtitle}
                  </p>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', flexGrow: 1 }}>
                    {room.description}
                  </p>

                  {/* Project preview */}
                  <div style={{
                    background: 'rgba(0,0,0,0.3)',
                    borderRadius: 12,
                    padding: '0.875rem 1rem',
                    marginBottom: '1.25rem',
                    border: '1px solid rgba(255,255,255,0.04)',
                  }}>
                    <p style={{ color: '#64748B', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                      Featured Project
                    </p>
                    <p style={{ color: '#F8FAFC', fontSize: '0.9rem', fontWeight: 600 }}>{room.project}</p>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {room.tags.map(t => (
                      <span key={t} className={`tag ${room.id === 'cloud' ? 'tag-purple' : ''}`} style={{ fontSize: '0.7rem' }}>{t}</span>
                    ))}
                  </div>

                  <Link
                    to={room.path}
                    className={`btn ${room.id === 'mern' ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ alignSelf: 'flex-start' }}
                  >
                    Enter Room →
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ──────────────────────────────────────────── */}
      <section className="section" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <SectionReveal>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0.75rem' }}>By the Numbers</h2>
            <p className="section-subtitle" style={{ textAlign: 'center' }}>A snapshot of my journey so far</p>
          </SectionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {stats.map(s => <StatCard key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* ─── QUOTE ──────────────────────────────────────────── */}
      <section className="section" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <SectionReveal>
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'rgba(17,24,39,0.5)',
              backdropFilter: 'blur(20px)',
              borderRadius: 24,
              border: '1px solid rgba(6,182,212,0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div className="orb orb-cyan" style={{ width: 300, height: 300, top: -100, left: '50%', transform: 'translateX(-50%)', opacity: 0.3 }} />
              <div style={{ fontSize: '4rem', marginBottom: '1rem', opacity: 0.3, fontFamily: 'serif' }}>"</div>
              <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.75rem)', fontWeight: 600, color: '#F8FAFC', maxWidth: 700, margin: '0 auto 1.5rem', lineHeight: 1.5, fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
                I build applications <span className="gradient-text-cyan">AND infrastructure</span> — two sides of the same coin.
              </p>
              <p style={{ color: '#64748B', fontSize: '0.9rem', fontFamily: 'JetBrains Mono, monospace' }}>
                — Vishal Attri, MERN Stack Developer & Cloud Engineer
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────── */}
      <section className="section" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <SectionReveal>
            <p style={{ color: '#22D3EE', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', marginBottom: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              // Let's Talk
            </p>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Have a project or opportunity? I'd love to hear from you.</p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <ContactForm />
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
