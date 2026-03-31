import { useEffect, useRef } from 'react'

export default function StarBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    let width = window.innerWidth
    let height = window.innerHeight
    let stars = []
    
    // Create 150 static stars (no shooting stars, just subtle twinkling)
    const STAR_COUNT = 150
    
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
      })
    }
    
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      
      // Reposition stars on resize
      stars.forEach(star => {
        star.x = Math.random() * width
        star.y = Math.random() * height
      })
    }
    
    let animationId
    
    function animate() {
      ctx.clearRect(0, 0, width, height)
      
      stars.forEach(star => {
        // Subtle twinkling effect
        star.twinklePhase += star.twinkleSpeed
        const currentOpacity = star.opacity + Math.sin(star.twinklePhase) * 0.15
        
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(0.8, currentOpacity))})`
        ctx.fill()
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    animate()
    
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}