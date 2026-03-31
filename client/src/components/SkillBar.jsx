import { useInView } from 'react-intersection-observer'

export default function SkillBar({ name, percent, color = 'cyan', delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="skill-bar-container">
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-percent">{percent}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${color === 'purple' ? 'purple' : ''}`}
          style={{
            width: `${percent}%`,
            transform: inView ? 'scaleX(1)' : 'scaleX(0)',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}
