import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

export default function StatCard({ value, suffix = '', label, icon, delay = 0, color = 'cyan' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const gradient = color === 'purple' ? 'var(--gradient-purple)' : color === 'pink' ? 'var(--gradient-pink)' : 'var(--gradient-cyan)'
  const shadow = color === 'purple' ? 'var(--shadow-purple)' : 'var(--shadow-cyan)'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        damping: 10, 
        mass: 1,
        delay 
      }}
      className="glass-card"
      style={{ padding: '2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: gradient,
      }} />
      <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
      <div style={{ marginBottom: '0.5rem' }}>
        {inView ? (
          <CountUp
            start={0}
            end={value}
            duration={2}
            delay={delay}
            suffix={suffix}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              fontFamily: 'Space Grotesk, sans-serif',
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
            }}
          />
        ) : (
          <span style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>0{suffix}</span>
        )}
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>{label}</p>
    </motion.div>
  )
}
