import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ContactEntry({ onComplete }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      if (onComplete) setTimeout(onComplete, 100)
    }, 2500)
    return () => clearTimeout(timer)
  }, [onComplete])

  const primaryColor = '#22D3EE'
  const secondaryColor = '#A78BFA'
  const accentColor = '#F472B6'
  const glowColor = 'rgba(34,211,238,0.3)'
  const icon = '✉️'
  const title = 'GET IN TOUCH'
  const subtitle = 'Connect • Collaborate • Create'
  const tagline = "Let's start a conversation"
  const description = 'Whether you have a project, opportunity, or just want to say hi — I\'d love to hear from you'

  const particles = ['✉️', '📱', '📍', '💬', '🌟', '✨', '💡', '🤝', '🚀', '💻', '☁️', '⚡']

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            background: '#0A0A0A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          {/* Background Flash - Softer for contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.8, times: [0, 0.2, 0.8] }}
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at center, ${primaryColor}20, transparent)`,
            }}
          />

          {/* Animated Grid Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(${primaryColor} 1px, transparent 1px),
                linear-gradient(90deg, ${primaryColor} 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Gentle Scanning Line */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '100%',
              background: `linear-gradient(to bottom, transparent, ${primaryColor}40, transparent)`,
              boxShadow: `0 0 30px ${primaryColor}`,
            }}
          />

          {/* Floating Particles - Envelope and communication icons */}
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
                opacity: 0,
                scale: 0.5
              }}
              animate={{ 
                y: -100,
                opacity: [0, 0.6, 0],
                scale: [0.5, 1.2, 0.5],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 2 + Math.random() * 1.5,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 3
              }}
              style={{
                position: 'absolute',
                fontSize: '1.2rem',
                color: i % 2 === 0 ? primaryColor : secondaryColor,
                textShadow: `0 0 15px ${primaryColor}`,
                pointerEvents: 'none',
              }}
            >
              {particle}
            </motion.div>
          ))}

          {/* Floating Envelopes */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`env-${i}`}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: -100,
                opacity: 0
              }}
              animate={{ 
                y: window.innerHeight + 100,
                opacity: [0, 0.4, 0],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 4 + Math.random() * 5,
                delay: Math.random() * 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                fontSize: '1rem',
                color: secondaryColor,
                pointerEvents: 'none',
              }}
            >
              ✉️
            </motion.div>
          ))}

          {/* Main Content Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 300 }}
            style={{
              position: 'relative',
              textAlign: 'center',
              width: '90%',
              maxWidth: 600,
              margin: '0 auto',
              zIndex: 100000,
            }}
          >
            {/* Glowing Border Box */}
            <motion.div
              animate={{ 
                boxShadow: [
                  `0 0 20px ${glowColor}`,
                  `0 0 50px ${primaryColor}30`,
                  `0 0 20px ${glowColor}`
                ],
                borderColor: [
                  primaryColor,
                  secondaryColor,
                  primaryColor
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                background: 'rgba(10,10,10,0.95)',
                backdropFilter: 'blur(20px)',
                borderRadius: 40,
                padding: '2.5rem 2rem',
                border: `2px solid ${primaryColor}`,
              }}
            >
              {/* Animated Icon with Ring */}
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.2rem' }}>
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    border: `2px solid ${primaryColor}`,
                    transform: 'translate(-50%, -50%)',
                    opacity: 0.4
                  }}
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                  style={{
                    fontSize: '3.5rem',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {icon}
                </motion.div>
              </div>

              {/* "CONNECT WITH ME" Text */}
              <motion.p
                initial={{ opacity: 0, letterSpacing: '15px' }}
                animate={{ opacity: 1, letterSpacing: '2px' }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{
                  color: secondaryColor,
                  fontSize: '0.7rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                CONNECT WITH ME
              </motion.p>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <h1 style={{
                  fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                  fontWeight: 800,
                  background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor}, ${accentColor})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}>
                  {title}
                </h1>
              </motion.div>

              {/* Animated Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                style={{
                  width: '60%',
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${primaryColor}, ${secondaryColor}, transparent)`,
                  margin: '0.75rem auto',
                }}
              />

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                style={{
                  color: '#F8FAFC',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  fontFamily: 'Space Grotesk, sans-serif',
                  marginBottom: '0.5rem',
                }}
              >
                {tagline}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                style={{
                  color: '#94A3B8',
                  fontSize: '0.85rem',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '1.2rem',
                  maxWidth: 400,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {description}
              </motion.p>

              {/* Contact Methods Preview */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem',
                  marginBottom: '1.2rem',
                  flexWrap: 'wrap'
                }}
              >
                {[
                  { icon: '✉️', label: 'Email', color: '#22D3EE' },
                  { icon: '📱', label: 'Phone', color: '#A78BFA' },
                  { icon: '💬', label: 'Message', color: '#F472B6' }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2 + i * 0.1, type: 'spring' }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.4rem 0.8rem',
                      background: 'rgba(34,211,238,0.05)',
                      borderRadius: 30,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <span style={{ fontSize: '0.9rem' }}>{item.icon}</span>
                    <span style={{ fontSize: '0.7rem', color: item.color }}>{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quick Response Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 2.2 }}
                style={{
                  color: '#64748B',
                  fontSize: '0.65rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  marginTop: '0.5rem',
                }}
              >
                ⚡ I'll respond within 24 hours
              </motion.p>

              {/* Progress Indicator */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.2, delay: 0.3 }}
                style={{
                  width: '100%',
                  height: 2,
                  background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
                  marginTop: '1rem',
                  borderRadius: 2,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Corner Decorations - Softer */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner, i) => (
            <motion.div
              key={corner}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }}
              style={{
                position: 'absolute',
                [corner.includes('top') ? 'top' : 'bottom']: 25,
                [corner.includes('left') ? 'left' : 'right']: 25,
                width: 60,
                height: 60,
                border: `2px solid ${primaryColor}`,
                borderTop: corner.includes('top') ? `2px solid ${primaryColor}` : 'none',
                borderBottom: corner.includes('bottom') ? `2px solid ${primaryColor}` : 'none',
                borderLeft: corner.includes('left') ? `2px solid ${primaryColor}` : 'none',
                borderRight: corner.includes('right') ? `2px solid ${primaryColor}` : 'none',
                opacity: 0.4,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
