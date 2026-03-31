import { useEffect, useRef } from 'react'

export default function RefreshingBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    let width = window.innerWidth
    let height = window.innerHeight
    let particles = []
    
    // Color palette - vibrant neon colors
    const colors = [
      '#06B6D4', // Cyan
      '#8B5CF6', // Purple
      '#EC4899', // Pink
      '#10B981', // Emerald
      '#F59E0B', // Amber
      '#3B82F6', // Blue
    ]
    
    // Create floating particles
    const PARTICLE_COUNT = 80
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }
    
    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    
    let animationId
    
    function animate() {
      ctx.clearRect(0, 0, width, height)
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, '#0A0A0A')
      gradient.addColorStop(0.3, '#0F172A')
      gradient.addColorStop(0.6, '#1E1B4B')
      gradient.addColorStop(1, '#0A0A0A')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
      
      // Draw animated particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        // Wrap around screen
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0
        
        // Pulsing effect
        particle.pulsePhase += particle.pulseSpeed
        const pulseOpacity = particle.opacity + Math.sin(particle.pulsePhase) * 0.15
        
        // Draw glow
        ctx.shadowBlur = 15
        ctx.shadowColor = particle.color
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = Math.max(0.1, Math.min(0.5, pulseOpacity))
        ctx.fill()
        
        // Draw inner core
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = '#FFFFFF'
        ctx.globalAlpha = 0.4
        ctx.fill()
      })
      
      // Reset shadow
      ctx.shadowBlur = 0
      ctx.globalAlpha = 1
      
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