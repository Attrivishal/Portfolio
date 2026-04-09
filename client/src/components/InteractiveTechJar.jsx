import { useEffect, useRef } from 'react'
import Matter from 'matter-js'

const TECH_STACK = [
  { label: 'React.js', color: '#22D3EE' },
  { label: 'Node.js', color: '#A78BFA' },
  { label: 'AWS', color: '#F472B6' },
  { label: 'MongoDB', color: '#22D3EE' },
  { label: 'Express', color: '#A78BFA' },
  { label: 'Docker', color: '#F472B6' },
  { label: 'Linux', color: '#22D3EE' },
  { label: 'GitHub', color: '#A78BFA' },
]

export default function InteractiveTechJar() {
  const sceneRef = useRef(null)
  const engineRef = useRef(Matter.Engine.create())

  useEffect(() => {
    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter

    const engine = engineRef.current
    const world = engine.world

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: sceneRef.current.clientHeight,
        background: 'transparent',
        wireframes: false,
      },
    })

    const runner = Runner.create()
    Runner.run(runner, engine)
    Render.run(render)

    // Boundaries
    const ground = Bodies.rectangle(
      sceneRef.current.clientWidth / 2,
      sceneRef.current.clientHeight + 10,
      sceneRef.current.clientWidth,
      20,
      { isStatic: true }
    )
    const leftWall = Bodies.rectangle(
      -10,
      sceneRef.current.clientHeight / 2,
      20,
      sceneRef.current.clientHeight,
      { isStatic: true }
    )
    const rightWall = Bodies.rectangle(
      sceneRef.current.clientWidth + 10,
      sceneRef.current.clientHeight / 2,
      20,
      sceneRef.current.clientHeight,
      { isStatic: true }
    )
    const ceiling = Bodies.rectangle(
      sceneRef.current.clientWidth / 2,
      -10,
      sceneRef.current.clientWidth,
      20,
      { isStatic: true }
    )

    Composite.add(world, [ground, leftWall, rightWall, ceiling])

    // Floating tech badges
    const bodies = TECH_STACK.map((tech, i) => {
      const x = Math.random() * sceneRef.current.clientWidth
      const y = Math.random() * sceneRef.current.clientHeight
      const width = tech.label.length * 10 + 40
      const height = 40
      
      const body = Bodies.rectangle(x, y, width, height, {
        chamfer: { radius: 12 },
        render: {
          fillStyle: 'rgba(15, 23, 42, 0.4)',
          strokeStyle: tech.color,
          lineWidth: 1,
          text: {
            content: tech.label,
            color: tech.color,
            size: 14,
            family: 'JetBrains Mono, monospace',
          },
        },
        restitution: 0.8,
        friction: 0.05,
      })
      
      // Custom render for text (since Matter.js doesn't support text natively in default render)
      body.label = tech.label
      body.color = tech.color
      return body
    })

    Composite.add(world, bodies)

    // Mouse control
    const mouse = Mouse.create(render.canvas)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    })

    Composite.add(world, mouseConstraint)

    // Keep mouse in sync with scrolling
    render.mouse = mouse

    // Special handling for text rendering on canvas
    Matter.Events.on(render, 'afterRender', () => {
        const context = render.context;
        context.font = '500 12px "JetBrains Mono", monospace';
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        bodies.forEach(body => {
            const { x, y } = body.position;
            const angle = body.angle;
            
            context.save();
            context.translate(x, y);
            context.rotate(angle);
            context.fillStyle = body.color;
            context.fillText(body.label, 0, 0);
            context.restore();
        });
    });

    // Handle resize
    const handleResize = () => {
      if (!sceneRef.current) return
      render.canvas.width = sceneRef.current.clientWidth
      render.canvas.height = sceneRef.current.clientHeight
      Matter.Body.setPosition(ground, { x: sceneRef.current.clientWidth / 2, y: sceneRef.current.clientHeight + 10 })
      Matter.Body.setPosition(rightWall, { x: sceneRef.current.clientWidth + 10, y: sceneRef.current.clientHeight / 2 })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      Render.stop(render)
      Runner.stop(runner)
      Engine.clear(engine)
      render.canvas.remove()
      render.textures = {}
    }
  }, [])

  return (
    <div 
      ref={sceneRef} 
      style={{ 
        width: '100%', 
        height: '400px', 
        position: 'relative', 
        cursor: 'grab',
        zIndex: 5
      }} 
    />
  )
}
