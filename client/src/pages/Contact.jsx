import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SectionReveal from '../components/SectionReveal'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const contactInfo = [
  { label: 'Email', value: 'vishalattri196@gmail.com', href: 'mailto:vishalattri196@gmail.com', icon: '✉️', color: 'cyan', delay: 0 },
  { label: 'Phone', value: '+91 7889360112', href: 'tel:+917889360112', icon: '📱', color: 'purple', delay: 0.1 },
  { label: 'Location', value: 'Punjab, India', href: null, icon: '📍', color: 'pink', delay: 0.2 },
  { label: 'GitHub', value: 'github.com/Attrivishal', href: 'https://github.com/Attrivishal', icon: '🐙', color: 'cyan', delay: 0.3 },
  { label: 'LinkedIn', value: 'linkedin.com/in/vishalattri', href: 'https://linkedin.com/in/vishalattri', icon: '🔗', color: 'purple', delay: 0.4 },
]

const colorMap = {
  cyan: { gradient: 'linear-gradient(135deg, #06B6D4, #22D3EE)', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.3)', text: '#22D3EE', glow: 'rgba(6,182,212,0.2)' },
  purple: { gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)', bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.3)', text: '#A78BFA', glow: 'rgba(139,92,246,0.2)' },
  pink: { gradient: 'linear-gradient(135deg, #EC4899, #F472B6)', bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.3)', text: '#F472B6', glow: 'rgba(236,72,153,0.2)' },
}

export default function Contact() {
  const heroRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }

  return (
    <>
      {/* ─── ENHANCED HERO SECTION ──────────────────────────────────────────── */}
      <section 
        ref={heroRef}
        style={{ 
          paddingTop: 120, 
          paddingBottom: 80, 
          position: 'relative', 
          overflow: 'hidden',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Animated Background Orbs */}
        <motion.div 
          className="orb orb-cyan" 
          style={{ 
            width: 500, 
            height: 500, 
            top: -100, 
            right: -150, 
            opacity: 0.3,
            y: heroY
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="orb orb-purple" 
          style={{ 
            width: 400, 
            height: 400, 
            bottom: -80, 
            left: -120, 
            opacity: 0.25,
            y: heroY
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Particles */}
        {['✉️', '📱', '📍', '🐙', '🔗', '💬', '🌟', '✨', '⭐'].map((emoji, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              fontSize: Math.random() * 20 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.15,
              pointerEvents: 'none'
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            {emoji}
          </motion.div>
        ))}

        <div className="container" style={{ position: 'relative', zIndex: 2, opacity: heroOpacity }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}
          >
            <motion.div variants={itemVariants}>
              <motion.p 
                style={{ 
                  color: '#22D3EE', 
                  fontFamily: 'JetBrains Mono, monospace', 
                  fontSize: '0.9rem', 
                  marginBottom: '1rem', 
                  letterSpacing: '0.15em', 
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1.25rem',
                  background: 'rgba(6,182,212,0.1)',
                  border: '1px solid rgba(6,182,212,0.3)',
                  borderRadius: 999,
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(6,182,212,0.3)'
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  animate={{ 
                    y: [-2, 2, -2],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  📬
                </motion.span>
                Let's Connect
              </motion.p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              style={{ 
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
                marginBottom: '1rem', 
                letterSpacing: '-0.03em', 
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 800,
                lineHeight: 1.1
              }}
            >
              Get In{' '}
              <motion.span 
                className="gradient-text-cyan"
                whileHover={{ scale: 1.05, display: 'inline-block' }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Touch
              </motion.span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                height: 3,
                background: 'linear-gradient(90deg, #06B6D4, #8B5CF6, #EC4899)',
                margin: '1.5rem auto',
                borderRadius: 3
              }}
            />

            <motion.p
              variants={itemVariants}
              style={{ 
                color: '#94A3B8', 
                fontSize: '1.15rem', 
                maxWidth: 600, 
                margin: '0 auto',
                lineHeight: 1.8
              }}
            >
              Whether you need a MERN Stack developer, a Cloud Engineer, or someone who can do both — I'm ready to collaborate.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── ENHANCED MAIN CONTENT ──────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '2rem', position: 'relative', zIndex: 2 }}>
        <div className="orb orb-pink" style={{ width: 350, height: 350, bottom: '20%', right: '-100px', opacity: 0.15 }} />

        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '3rem', 
            alignItems: 'start',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            
            {/* Contact Form - Left Side */}
            <SectionReveal>
              <motion.div 
                className="glass-card" 
                style={{ 
                  padding: '2.5rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: '0 25px 50px rgba(6,182,212,0.15)'
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Top Gradient Bar */}
                <motion.div 
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    height: 3, 
                    background: 'linear-gradient(90deg, #06B6D4, #8B5CF6, #EC4899)'
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 style={{ 
                    fontSize: '1.6rem', 
                    fontWeight: 700, 
                    marginBottom: '0.5rem', 
                    fontFamily: 'Space Grotesk, sans-serif',
                    background: 'linear-gradient(135deg, #F8FAFC, #22D3EE)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Send a Message
                  </h2>
                  <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '2rem' }}>
                    I'll respond within 24 hours
                  </p>
                </motion.div>

                <ContactForm />
              </motion.div>
            </SectionReveal>

            {/* Contact Info - Right Side */}
            <div>
              <SectionReveal delay={0.15}>
                <motion.h3 
                  style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 600, 
                    marginBottom: '1.5rem', 
                    color: '#94A3B8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span style={{ fontSize: '1.5rem' }}>📞</span> Contact Information
                </motion.h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                  {contactInfo.map((info, index) => {
                    const c = colorMap[info.color]
                    return (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: info.delay, duration: 0.5 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        {info.href ? (
                          <motion.a 
                            href={info.href} 
                            target={info.href.startsWith('http') ? '_blank' : undefined} 
                            rel="noopener noreferrer" 
                            style={{ textDecoration: 'none', display: 'block' }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '1rem', 
                              padding: '1rem 1.25rem', 
                              background: 'rgba(17,24,39,0.6)', 
                              backdropFilter: 'blur(10px)', 
                              border: `1px solid rgba(255,255,255,0.06)`, 
                              borderRadius: 16, 
                              transition: 'all 0.3s',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={e => { 
                              e.currentTarget.style.borderColor = c.border
                              e.currentTarget.style.background = c.bg
                              e.currentTarget.style.boxShadow = `0 0 30px ${c.glow}`
                            }}
                            onMouseLeave={e => { 
                              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                              e.currentTarget.style.background = 'rgba(17,24,39,0.6)'
                              e.currentTarget.style.boxShadow = 'none'
                            }}
                          >
                            <motion.div 
                              style={{ 
                                width: 44, 
                                height: 44, 
                                borderRadius: 12, 
                                background: c.bg, 
                                border: `1px solid ${c.border}`, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                fontSize: '1.2rem', 
                                flexShrink: 0 
                              }}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              {info.icon}
                            </motion.div>
                            <div>
                              <p style={{ color: '#64748B', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.15rem' }}>{info.label}</p>
                              <p style={{ color: '#F8FAFC', fontSize: '0.9rem', fontWeight: 500 }}>{info.value}</p>
                            </div>
                          </div>
                          </motion.a>
                        ) : (
                          <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '1rem', 
                            padding: '1rem 1.25rem', 
                            background: 'rgba(17,24,39,0.6)', 
                            backdropFilter: 'blur(10px)', 
                            border: `1px solid rgba(255,255,255,0.06)`, 
                            borderRadius: 16, 
                            transition: 'all 0.3s'
                          }}
                          onMouseEnter={e => { 
                            e.currentTarget.style.borderColor = c.border
                            e.currentTarget.style.background = c.bg
                          }}
                          onMouseLeave={e => { 
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                            e.currentTarget.style.background = 'rgba(17,24,39,0.6)'
                          }}
                        >
                          <motion.div 
                            style={{ 
                              width: 44, 
                              height: 44, 
                              borderRadius: 12, 
                              background: c.bg, 
                              border: `1px solid ${c.border}`, 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              fontSize: '1.2rem', 
                              flexShrink: 0 
                            }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            {info.icon}
                          </motion.div>
                          <div>
                            <p style={{ color: '#64748B', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.15rem' }}>{info.label}</p>
                            <p style={{ color: '#F8FAFC', fontSize: '0.9rem', fontWeight: 500 }}>{info.value}</p>
                          </div>
                        </div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </SectionReveal>

              {/* Education Card - Enhanced */}
              <SectionReveal delay={0.5}>
                <motion.div 
                  className="glass-card" 
                  style={{ 
                    padding: '1.75rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(139,92,246,0.2)'
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: 3,
                      background: 'linear-gradient(90deg, #8B5CF6, #A78BFA)'
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                  />

                  <motion.h4 
                    style={{ 
                      fontSize: '1rem', 
                      fontWeight: 600, 
                      marginBottom: '1rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem',
                      color: '#A78BFA'
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🎓
                    </motion.span>
                    Education
                  </motion.h4>

                  <div>
                    <motion.p 
                      style={{ color: '#F8FAFC', fontWeight: 600, marginBottom: '0.25rem', fontSize: '1rem' }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Bachelor of Computer Applications
                    </motion.p>
                    <motion.p 
                      style={{ color: '#22D3EE', fontSize: '0.875rem', marginBottom: '0.25rem' }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Lovely Professional University
                    </motion.p>
                    <motion.p 
                      style={{ color: '#64748B', fontSize: '0.8rem', marginBottom: '0.75rem' }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      2023 – 2026
                    </motion.p>
                    
                    <motion.div 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        background: 'rgba(6,182,212,0.1)', 
                        border: '1px solid rgba(6,182,212,0.3)', 
                        borderRadius: 8, 
                        padding: '0.3rem 0.9rem' 
                      }}
                      whileHover={{ scale: 1.05, background: 'rgba(6,182,212,0.2)' }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ⭐
                      </motion.span>
                      <span style={{ color: '#22D3EE', fontSize: '0.85rem', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>CGPA: 8.39 / 10</span>
                    </motion.div>
                  </div>

                  <div className="divider" style={{ margin: '1.25rem 0' }} />

                  <motion.h4 
                    style={{ 
                      fontSize: '1rem', 
                      fontWeight: 600, 
                      marginBottom: '0.75rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem' 
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      ⚡
                    </motion.span>
                    Available For
                  </motion.h4>

                  {['Full-stack MERN projects', 'Cloud / AWS engineering', 'Internships & Part-time', 'Freelance & Remote work'].map((item, i) => (
                    <motion.div 
                      key={item} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.75rem', 
                        marginBottom: '0.6rem', 
                        color: '#94A3B8', 
                        fontSize: '0.875rem' 
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      <motion.span 
                        style={{ 
                          width: 7, 
                          height: 7, 
                          borderRadius: '50%', 
                          background: '#22D3EE', 
                          boxShadow: '0 0 8px #22D3EE', 
                          flexShrink: 0 
                        }}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}