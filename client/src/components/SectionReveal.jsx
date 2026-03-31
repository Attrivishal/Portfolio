import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionReveal({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      scale: direction === 'scale' ? 0.9 : 1,
    },
    visible: { opacity: 1, y: 0, x: 0, scale: 1 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
