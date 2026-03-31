import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function RoomEntry({ type, onComplete }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      if (onComplete) setTimeout(onComplete, 500)
    }, 3000)
    return () => clearTimeout(timer)
  }, [onComplete])

  const isMern = type === 'mern'
  const primaryColor = isMern ? '#06B6D4' : '#8B5CF6'
  const secondaryColor = isMern ? '#22D3EE' : '#A78BFA'
  const accentColor = isMern ? '#EC4899' : '#F59E0B'
  const glowColor = isMern ? 'rgba(6,182,212,0.3)' : 'rgba(139,92,246,0.3)'
  const icon = isMern ? '⚡' : '☁️'
  const roomName = isMern ? 'MERN STACK ROOM' : 'CLOUD ENGINEER ROOM'
  const subtitle = isMern 
    ? 'React • Node • Express • MongoDB' 
    : 'AWS • Linux • Docker • Postman'
  const tagline = isMern 
    ? 'Welcome to the MERN Zone' 
    : 'Welcome to the Cloud Zone'
  const description = isMern
    ? 'Full-stack JavaScript development with modern frameworks'
    : 'Cloud infrastructure, DevOps, and scalable solutions'

  // Particles for MERN (code elements)
  const mernParticles = ['{ }', '< />', '</>', '() =>', '{}', 'import', 'from', 'const', '=>', 'useState', 'useEffect']
  
  // Particles for Cloud (cloud symbols)
  const cloudParticles = ['☁️', '☁️', '🌩️', '💨', '☁️', '🌥️', '⛅', '☁️', '🖥️', '🗄️', 'λ']

  const particles = isMern ? mernParticles : cloudParticles

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
            zIndex: 9999,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          {/* Background Flash */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 0.8, times: [0, 0.2, 0.8] }}
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at center, ${primaryColor}30, transparent)`,
            }}
          />

          {/* Animated Grid Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
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

          {/* Scanning Line */}
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
              background: `linear-gradient(to bottom, transparent, ${primaryColor}60, transparent)`,
              boxShadow: `0 0 40px ${primaryColor}`,
            }}
          />

          {/* Floating Particles */}
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
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.3, 0.5],
                rotate: [0, isMern ? 360 : -20]
              }}
              transition={{ 
                duration: 2 + Math.random() * 1.5,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 3
              }}
              style={{
                position: 'absolute',
                fontSize: isMern ? '1rem' : '1.5rem',
                color: primaryColor,
                fontFamily: 'JetBrains Mono, monospace',
                textShadow: `0 0 15px ${primaryColor}`,
                pointerEvents: 'none',
              }}
            >
              {particle}
            </motion.div>
          ))}

          {/* Main Content Container */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 300 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '90%',
              maxWidth: 650,
            }}
          >
            {/* Glowing Border Box */}
            <motion.div
              animate={{ 
                boxShadow: [
                  `0 0 20px ${glowColor}`,
                  `0 0 60px ${primaryColor}40`,
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
                background: 'rgba(10,10,10,0.9)',
                backdropFilter: 'blur(20px)',
                borderRadius: 40,
                padding: '3rem 2.5rem',
                border: `2px solid ${primaryColor}`,
              }}
            >
              {/* Animated Icon with Ring */}
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 360],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    border: `2px solid ${primaryColor}`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, -180]
                  }}
                  transition={{ duration: 1, delay: 0.6, type: 'spring' }}
                  style={{
                    fontSize: '4.5rem',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {icon}
                </motion.div>
              </div>

              {/* "WELCOME TO" Text */}
              <motion.p
                initial={{ opacity: 0, letterSpacing: '20px' }}
                animate={{ opacity: 1, letterSpacing: '4px' }}
                transition={{ duration: 0.8, delay: 0.9 }}
                style={{
                  color: secondaryColor,
                  fontSize: '0.75rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                WELCOME TO
              </motion.p>

              {/* Room Name with Typewriter Effect */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
              >
                <h1 style={{
                  fontSize: 'clamp(1.5rem, 6vw, 2.8rem)',
                  fontWeight: 800,
                  background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor}, ${accentColor})`,
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}>
                  {roomName}
                </h1>
              </motion.div>

              {/* Animated Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                style={{
                  width: '80%',
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${primaryColor}, ${secondaryColor}, transparent)`,
                  margin: '1rem auto',
                }}
              />

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                style={{
                  color: '#F8FAFC',
                  fontSize: '1.2rem',
                  fontWeight: 600,
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
                transition={{ duration: 0.5, delay: 1.7 }}
                style={{
                  color: '#94A3B8',
                  fontSize: '0.9rem',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '1.5rem',
                  maxWidth: 450,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                {description}
              </motion.p>

              {/* Tech Stack Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.9 }}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                {subtitle.split(' • ').map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2 + i * 0.05, type: 'spring' }}
                    style={{
                      padding: '0.3rem 0.8rem',
                      background: `rgba(${isMern ? '6,182,212' : '139,92,246'}, 0.1)`,
                      border: `1px solid ${primaryColor}40`,
                      borderRadius: 20,
                      fontSize: '0.7rem',
                      color: primaryColor,
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Progress Indicator */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.5, delay: 0.5 }}
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

          {/* Corner Decorations */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner, i) => (
            <motion.div
              key={corner}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
              style={{
                position: 'absolute',
                [corner.includes('top') ? 'top' : 'bottom']: 30,
                [corner.includes('left') ? 'left' : 'right']: 30,
                width: 80,
                height: 80,
                border: `3px solid ${primaryColor}`,
                borderTop: corner.includes('top') ? `3px solid ${primaryColor}` : 'none',
                borderBottom: corner.includes('bottom') ? `3px solid ${primaryColor}` : 'none',
                borderLeft: corner.includes('left') ? `3px solid ${primaryColor}` : 'none',
                borderRight: corner.includes('right') ? `3px solid ${primaryColor}` : 'none',
                opacity: 0.5,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}