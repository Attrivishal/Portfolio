import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

export default function PagePortal({ children }) {
  const { pathname } = useLocation()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(30px)' }}
      transition={{ 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1] 
      }}
      style={{ overflow: 'hidden', minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  )
}
