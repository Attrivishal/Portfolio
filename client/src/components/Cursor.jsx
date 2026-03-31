import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = `${mouseX}px`
      cursor.style.top = `${mouseY}px`
    }

    const lerp = (a, b, n) => (1 - n) * a + n * b
    let rafId

    const animate = () => {
      followerX = lerp(followerX, mouseX, 0.12)
      followerY = lerp(followerY, mouseY, 0.12)
      follower.style.left = `${followerX}px`
      follower.style.top = `${followerY}px`
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    const onEnter = () => setHovering(true)
    const onLeave = () => setHovering(false)

    const interactives = document.querySelectorAll('a, button, [data-hover]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    document.addEventListener('mousemove', onMove)

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll('a, button, [data-hover]')
      els.forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className={`cursor ${hovering ? 'hovering' : ''}`} />
      <div ref={followerRef} className={`cursor-follower ${hovering ? 'hovering' : ''}`} />
    </>
  )
}
