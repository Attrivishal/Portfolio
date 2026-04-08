import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

export default function Mascot() {
  const { scrollYProgress } = useScroll()
  const [isTapped, setIsTapped] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // Physics-based spring for smooth movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Fixed position refined path (stay in corner, but nudge on scroll)
  const yNudge = useTransform(smoothProgress, [0, 1], [0, -100])
  const rotateScroll = useTransform(smoothProgress, [0, 1], [0, 360])
  
  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const handleTap = () => {
    setIsTapped(true)
    setTimeout(() => setIsTapped(false), 1000)
  }

  // Color shifting mascot glow
  const color = useTransform(smoothProgress, [0, 0.5, 1], ['#22D3EE', '#A78BFA', '#22D3EE'])

  return (
    <motion.div
      onClick={handleTap}
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        zIndex: 1000,
        cursor: 'pointer',
        y: yNudge,
        pointerEvents: 'auto',
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9, rotate: 15 }}
    >
      {/* Interaction Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: -40 }}
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
          padding: '6px 12px',
          borderRadius: '8px',
          fontSize: '0.7rem',
          color: '#22D3EE',
          whiteSpace: 'nowrap',
          border: '1px solid rgba(6,182,212,0.3)',
          pointerEvents: 'none',
        }}
      >
        TAP ME!
      </motion.div>

      <motion.div 
        animate={isTapped ? { rotate: [0, 360, 0], scale: [1, 1.5, 1] } : { rotate: 0 }}
        transition={{ duration: 1, ease: "backInOut" }}
        style={{ position: 'relative', width: 80, height: 80 }}
      >
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          height: '100%',
          transform: `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`
        }}>
          {/* Glowing Orb Center */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: [`0 0 20px ${'#22D3EE'}`, `0 0 40px ${'#A78BFA'}`, `0 0 20px ${'#22D3EE'}`]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: 'absolute',
              inset: 15,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #22D3EE, #A78BFA)',
              filter: 'blur(1px)',
            }}
          >
            {/* Eyes */}
            <motion.div 
              style={{
                position: 'absolute',
                top: '35%',
                left: '25%',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#0F172A',
                transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)`
              }} 
            />
            <motion.div 
              style={{
                position: 'absolute',
                top: '35%',
                right: '25%',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#0F172A',
                transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)`
              }} 
            />
          </motion.div>

          {/* Orbiting Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: 0,
              border: '2px dashed rgba(34, 211, 238, 0.4)',
              borderRadius: '50%',
            }}
          />
          
          {/* Pulsing Outer Glow */}
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: 'absolute',
              inset: -10,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 70%)',
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
