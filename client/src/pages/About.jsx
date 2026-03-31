import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SectionReveal from '../components/SectionReveal'
import Footer from '../components/Footer'

const PHOTO = "/images/vishal-photo.jpg"

// Education Timeline Data (Updated with actual details)
const education = [
  {
    year: '2023 - 2026',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Lovely Professional University, Punjab',
    description: 'Currently in 3rd year, maintaining CGPA of 8.39/10',
    achievements: ['Web Development Club Member', 'Hackathon Participant', 'Tech Workshop Coordinator'],
    color: 'cyan'
  },
  {
    year: '2021 - 2023',
    degree: 'Higher Secondary Education (12th)',
    institution: 'Kendriya Vidyalaya No 1 A F S, Agra, UP',
    description: 'Commerce stream with Informatics Practice - CBSE Board',
    achievements: ['Top performer in Informatics Practice', 'School Tech Team Member'],
    color: 'purple'
  },
  {
    year: '2019 - 2021',
    degree: 'Secondary Education (10th)',
    institution: 'Kendriya Vidyalaya Jindrah, Jammu',
    description: 'CBSE Board - Strong foundation in academics',
    achievements: [ 'Computer Science Enthusiast'],
    color: 'pink'
  }
]

// Certifications & Courses
const certifications = [
  { name: 'MERN Stack Development', issuer: 'Udemy', year: '2024', icon: '🌐' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024', icon: '☁️' },
  { name: 'Data Structures & Algorithms', issuer: 'Coursera', year: '2023', icon: '📊' },
  { name: 'Linux Administration', issuer: 'Linux Foundation', year: '2023', icon: '🐧' },
]

// Skills Categories
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript (ES6+)']
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Socket.io']
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: ['MongoDB', 'Mongoose', 'MySQL', 'PostgreSQL (basic)']
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['AWS', 'Linux', 'Git/GitHub', 'Postman', 'Docker (basic)']
  }
]

// Achievements & Awards
const achievements = [
  { title: 'GitHub Campus Expert', description: 'Selected as campus expert for open source initiatives', year: '2024', icon: '🏆' },
  { title: 'Hackathon Winner', description: 'Won Smart India Hackathon 2024 at university level', year: '2024', icon: '🥇' },
  { title: 'Published Research Paper', description: 'Paper on Cloud Cost Optimization in IEEE Conference', year: '2024', icon: '📄' },
  { title: 'Top Performer', description: 'Among top 5% in university academics', year: '2024', icon: '⭐' }
]

export default function About() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Floating animation variants
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  // Stagger container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <>
      {/* ─── ANIMATED HERO SECTION ──────────────────────────────────────────── */}
      <section 
        ref={heroRef}
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          paddingTop: 100, 
          paddingBottom: 60, 
          position: 'relative', 
          overflow: 'hidden' 
        }}
      >
        {/* Animated Background Orbs */}
        <motion.div 
          className="orb orb-cyan" 
          style={{ 
            width: 600, 
            height: 600, 
            top: -150, 
            right: -200, 
            opacity: 0.4,
            y: heroY
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="orb orb-purple" 
          style={{ 
            width: 500, 
            height: 500, 
            bottom: -150, 
            left: -150, 
            opacity: 0.3,
            y: heroY
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              borderRadius: '50%',
              background: i % 3 === 0 ? '#22D3EE' : i % 3 === 1 ? '#A78BFA' : '#F472B6',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        <motion.div 
          className="container" 
          style={{ position: 'relative', zIndex: 2, opacity: heroOpacity }}
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              marginBottom: '2rem', 
              fontSize: '0.8rem', 
              color: '#64748B', 
              fontFamily: 'JetBrains Mono, monospace' 
            }}>
              <span>Home</span><span style={{ color: '#22D3EE' }}>/</span>
              <motion.span 
                style={{ color: '#22D3EE' }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                About
              </motion.span>
            </div>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '5rem', 
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Left - Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <motion.div 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    padding: '0.5rem 1.25rem', 
                    background: 'rgba(6,182,212,0.1)', 
                    border: '1px solid rgba(6,182,212,0.3)', 
                    borderRadius: 999, 
                    fontSize: '0.85rem', 
                    color: '#22D3EE', 
                    marginBottom: '2rem', 
                    fontFamily: 'JetBrains Mono, monospace',
                    backdropFilter: 'blur(10px)'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(6,182,212,0.3)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    📖
                  </motion.span>
                  About Me
                </motion.div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                style={{ 
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
                  marginBottom: '1rem', 
                  letterSpacing: '-0.04em',
                  lineHeight: 1.1,
                  fontWeight: 800
                }}
              >
                <motion.span 
                  className="gradient-text-cyan"
                  style={{ display: 'inline-block' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  Who Am
                </motion.span>
                <br />
                <motion.span 
                  style={{ color: '#F8FAFC', display: 'inline-block' }}
                  whileHover={{ scale: 1.05, color: '#22D3EE' }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  I?
                </motion.span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                style={{ 
                  color: '#94A3B8', 
                  lineHeight: 1.8, 
                  marginBottom: '1.5rem', 
                  fontSize: '1.1rem' 
                }}
              >
                I'm a passionate <strong style={{ color: '#22D3EE', fontWeight: 600 }}>MERN Stack Developer</strong> and{' '}
                <strong style={{ color: '#A78BFA', fontWeight: 600 }}>Cloud Engineer</strong> from Punjab, India. 
                Currently pursuing my BCA from Lovely Professional University with an impressive CGPA of 8.39/10.
              </motion.p>

              <motion.p
                variants={itemVariants}
                style={{ 
                  color: '#94A3B8', 
                  lineHeight: 1.8, 
                  marginBottom: '2.5rem', 
                  fontSize: '1.1rem' 
                }}
              >
                My journey in tech started with curiosity about how websites work. Today, I build 
                full-stack applications and cloud infrastructure that solve real-world problems.
              </motion.p>

              <motion.div
                variants={itemVariants}
                style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}
              >
                {[
                  { icon: '🎓', label: 'BCA Student', color: '#22D3EE' },
                  { icon: '💻', label: '10+ Projects', color: '#A78BFA' },
                  { icon: '☁️', label: 'Cloud Enthusiast', color: '#F472B6' }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="glass-card"
                    style={{ 
                      padding: '1.25rem 1.75rem', 
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      boxShadow: `0 20px 40px rgba(${stat.color === '#22D3EE' ? '6,182,212' : stat.color === '#A78BFA' ? '167,139,250' : '244,114,182'}, 0.3)`
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(135deg, ${stat.color}20, transparent)`,
                        opacity: 0
                      }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div style={{ 
                      fontSize: '0.85rem', 
                      color: '#94A3B8',
                      fontWeight: 500,
                      position: 'relative'
                    }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Animated Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <motion.div 
                style={{ position: 'relative', width: 380, height: 380 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Animated Glow Ring */}
                <motion.div 
                  style={{ 
                    position: 'absolute', 
                    inset: -20, 
                    borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%',
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.4), rgba(139,92,246,0.4), rgba(244,114,182,0.4))',
                    filter: 'blur(20px)',
                    zIndex: 0
                  }}
                  animate={{
                    borderRadius: [
                      '60% 40% 70% 30% / 40% 60% 30% 70%',
                      '40% 60% 30% 70% / 60% 40% 70% 30%',
                      '70% 30% 50% 50% / 30% 70% 50% 50%',
                      '60% 40% 70% 30% / 40% 60% 30% 70%'
                    ],
                    rotate: [0, 360]
                  }}
                  transition={{
                    borderRadius: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                />

                {/* Photo Container */}
                <motion.div 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%',
                    overflow: 'hidden', 
                    background: PHOTO ? 'transparent' : 'linear-gradient(135deg, #0F172A, #1e293b)',
                    border: '3px solid rgba(6,182,212,0.3)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '8rem', 
                    position: 'relative', 
                    zIndex: 1,
                    boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
                  }}
                  animate={{
                    borderRadius: [
                      '60% 40% 70% 30% / 40% 60% 30% 70%',
                      '40% 60% 30% 70% / 60% 40% 70% 30%',
                      '70% 30% 50% 50% / 30% 70% 50% 50%',
                      '60% 40% 70% 30% / 40% 60% 30% 70%'
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {PHOTO ? (
                    <motion.img 
                      src={PHOTO} 
                      alt="Vishal Attri" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  ) : (
                    <motion.span
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      👨‍💻
                    </motion.span>
                  )}
                </motion.div>

                {/* Orbiting Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{
                      position: 'absolute',
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: i % 3 === 0 ? '#22D3EE' : i % 3 === 1 ? '#A78BFA' : '#F472B6',
                      boxShadow: `0 0 10px ${i % 3 === 0 ? '#22D3EE' : i % 3 === 1 ? '#A78BFA' : '#F472B6'}`,
                      top: '50%',
                      left: '50%'
                    }}
                    animate={{
                      x: [0, Math.cos((i / 8) * Math.PI * 2) * 200, 0],
                      y: [0, Math.sin((i / 8) * Math.PI * 2) * 200, 0],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: (i / 8) * 4,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── ENHANCED EDUCATION TIMELINE ──────────────────────────────────────── */}
      <section className="section" style={{ position: 'relative', zIndex: 2, background: 'rgba(6,182,212,0.02)' }}>
        <div className="container">
          <SectionReveal>
            <motion.p 
              style={{ 
                color: '#22D3EE', 
                fontFamily: 'JetBrains Mono, monospace', 
                fontSize: '0.9rem', 
                marginBottom: '0.75rem', 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                fontWeight: 600
              }}
              whileHover={{ letterSpacing: '0.2em' }}
              transition={{ duration: 0.3 }}
            >
              🎓 My Journey
            </motion.p>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Education Timeline</h2>
            <p className="section-subtitle" style={{ marginBottom: '4rem' }}>The path that shaped my technical foundation</p>
          </SectionReveal>

          <div style={{ position: 'relative', paddingLeft: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            {/* Animated Timeline Line */}
            <motion.div 
              style={{ 
                position: 'absolute', 
                left: 0, 
                top: 0, 
                bottom: 0, 
                width: 3,
                background: 'linear-gradient(180deg, #06B6D4, #8B5CF6, #EC4899)',
                borderRadius: 999
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            {education.map((item, index) => (
              <SectionReveal key={index} delay={index * 0.2}>
                <motion.div 
                  style={{ position: 'relative', marginBottom: '4rem', paddingLeft: '3rem' }}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated Timeline Dot */}
                  <motion.div 
                    style={{
                      position: 'absolute',
                      left: '-3rem',
                      top: '1rem',
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      background: item.color === 'cyan' ? '#22D3EE' : item.color === 'purple' ? '#A78BFA' : '#F472B6',
                      boxShadow: `0 0 20px ${item.color === 'cyan' ? '#22D3EE' : item.color === 'purple' ? '#A78BFA' : '#F472B6'}`,
                      zIndex: 2
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.5 }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute',
                        inset: -4,
                        borderRadius: '50%',
                        border: `2px solid ${item.color === 'cyan' ? '#22D3EE' : item.color === 'purple' ? '#A78BFA' : '#F472B6'}`,
                        opacity: 0.5
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="glass-card" 
                    style={{ 
                      padding: '2rem',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: `0 20px 40px ${item.color === 'cyan' ? 'rgba(6,182,212,0.2)' : item.color === 'purple' ? 'rgba(167,139,250,0.2)' : 'rgba(244,114,182,0.2)'}`
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Hover Gradient Background */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(135deg, ${item.color === 'cyan' ? 'rgba(6,182,212,0.1)' : item.color === 'purple' ? 'rgba(167,139,250,0.1)' : 'rgba(244,114,182,0.1)'}, transparent)`,
                        opacity: 0
                      }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <motion.span 
                        style={{ 
                          color: item.color === 'cyan' ? '#22D3EE' : item.color === 'purple' ? '#A78BFA' : '#F472B6',
                          fontFamily: 'JetBrains Mono, monospace', 
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          background: `${item.color === 'cyan' ? 'rgba(6,182,212,0.1)' : item.color === 'purple' ? 'rgba(167,139,250,0.1)' : 'rgba(244,114,182,0.1)'}`,
                          borderRadius: 999,
                          marginBottom: '1rem'
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.year}
                      </motion.span>

                      <h3 style={{ 
                        fontSize: '1.4rem', 
                        fontWeight: 700, 
                        marginBottom: '0.5rem', 
                        color: '#F8FAFC',
                        letterSpacing: '-0.01em'
                      }}>
                        {item.degree}
                      </h3>

                      <p style={{ 
                        color: '#64748B', 
                        fontSize: '0.95rem', 
                        marginBottom: '0.75rem',
                        fontWeight: 500
                      }}>
                        {item.institution}
                      </p>

                      <p style={{ 
                        color: '#94A3B8', 
                        fontSize: '0.9rem', 
                        marginBottom: '1rem', 
                        lineHeight: 1.7
                      }}>
                        {item.description}
                      </p>

                      {item.achievements.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                          {item.achievements.map((achievement, i) => (
                            <motion.span 
                              key={i} 
                              className="tag" 
                              style={{ fontSize: '0.75rem' }}
                              whileHover={{ 
                                scale: 1.1,
                                backgroundColor: `${item.color === 'cyan' ? 'rgba(6,182,212,0.2)' : item.color === 'purple' ? 'rgba(167,139,250,0.2)' : 'rgba(244,114,182,0.2)'}`
                              }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              🏅 {achievement}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENHANCED SKILLS SECTION ──────────────────────────────────────── */}
      <section className="section" style={{ position: 'relative', zIndex: 2 }}>
        <div className="orb orb-purple" style={{ width: 400, height: 400, top: '10%', right: '-150px', opacity: 0.2 }} />

        <div className="container">
          <SectionReveal>
            <motion.p 
              style={{ 
                color: '#22D3EE', 
                fontFamily: 'JetBrains Mono, monospace', 
                fontSize: '0.9rem', 
                marginBottom: '0.75rem', 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                fontWeight: 600
              }}
              whileHover={{ letterSpacing: '0.2em' }}
              transition={{ duration: 0.3 }}
            >
              🛠️ My Arsenal
            </motion.p>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Technical Skills</h2>
            <p className="section-subtitle" style={{ marginBottom: '4rem' }}>Technologies and tools I work with</p>
          </SectionReveal>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {skillCategories.map((category, index) => (
              <SectionReveal key={category.title} delay={index * 0.15}>
                <motion.div 
                  className="glass-card" 
                  style={{ 
                    padding: '2rem', 
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    boxShadow: '0 25px 50px rgba(6,182,212,0.2)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(139,92,246,0.1))',
                      opacity: 0
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div 
                      style={{ fontSize: '3rem', marginBottom: '1rem' }}
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.4
                      }}
                    >
                      {category.icon}
                    </motion.div>

                    <h3 style={{ 
                      fontSize: '1.3rem', 
                      fontWeight: 700, 
                      marginBottom: '1.25rem', 
                      color: '#22D3EE',
                      letterSpacing: '-0.01em'
                    }}>
                      {category.title}
                    </h3>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {category.skills.map((skill, i) => (
                        <motion.span 
                          key={skill} 
                          className="tag" 
                          style={{ fontSize: '0.8rem' }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          whileHover={{ 
                            scale: 1.15,
                            backgroundColor: 'rgba(6,182,212,0.2)',
                            color: '#22D3EE'
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENHANCED CERTIFICATIONS ──────────────────────────────────────── */}
      <section className="section" style={{ position: 'relative', zIndex: 2, background: 'rgba(139,92,246,0.02)' }}>
        <div className="container">
          <SectionReveal>
            <motion.p 
              style={{ 
                color: '#A78BFA', 
                fontFamily: 'JetBrains Mono, monospace', 
                fontSize: '0.9rem', 
                marginBottom: '0.75rem', 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                fontWeight: 600
              }}
              whileHover={{ letterSpacing: '0.2em' }}
              transition={{ duration: 0.3 }}
            >
              📜 Credentials
            </motion.p>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Certifications</h2>
            <p className="section-subtitle" style={{ marginBottom: '4rem' }}>Continuous learning & professional development</p>
          </SectionReveal>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.75rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {certifications.map((cert, index) => (
              <SectionReveal key={cert.name} delay={index * 0.12}>
                <motion.div 
                  className="glass-card" 
                  style={{ 
                    padding: '2rem', 
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    boxShadow: '0 25px 50px rgba(167,139,250,0.2)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle at center, rgba(167,139,250,0.1), transparent)',
                      opacity: 0
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div 
                      style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      {cert.icon}
                    </motion.div>

                    <h4 style={{ 
                      fontSize: '1.05rem', 
                      fontWeight: 700, 
                      marginBottom: '0.5rem', 
                      color: '#F8FAFC',
                      lineHeight: 1.4
                    }}>
                      {cert.name}
                    </h4>

                    <p style={{ 
                      color: '#64748B', 
                      fontSize: '0.85rem', 
                      marginBottom: '0.5rem',
                      fontWeight: 500
                    }}>
                      {cert.issuer}
                    </p>

                    <motion.p 
                      style={{ 
                        color: '#A78BFA', 
                        fontSize: '0.75rem', 
                        fontFamily: 'JetBrains Mono, monospace',
                        fontWeight: 600,
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(167,139,250,0.1)',
                        borderRadius: 999
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {cert.year}
                    </motion.p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENHANCED ACHIEVEMENTS ──────────────────────────────────────── */}
      <section className="section" style={{ position: 'relative', zIndex: 2 }}>
        <div className="orb orb-cyan" style={{ width: 500, height: 500, bottom: '10%', left: '-200px', opacity: 0.2 }} />

        <div className="container">
          <SectionReveal>
            <motion.p 
              style={{ 
                color: '#22D3EE', 
                fontFamily: 'JetBrains Mono, monospace', 
                fontSize: '0.9rem', 
                marginBottom: '0.75rem', 
                letterSpacing: '0.15em', 
                textTransform: 'uppercase',
                fontWeight: 600
              }}
              whileHover={{ letterSpacing: '0.2em' }}
              transition={{ duration: 0.3 }}
            >
              🏆 Recognition
            </motion.p>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>Achievements & Awards</h2>
            <p className="section-subtitle" style={{ marginBottom: '4rem' }}>Milestones I'm proud of</p>
          </SectionReveal>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {achievements.map((achievement, index) => (
              <SectionReveal key={achievement.title} delay={index * 0.15} direction="scale">
                <motion.div 
                  className="glass-card" 
                  style={{ 
                    padding: '2.5rem 2rem', 
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    y: -15,
                    boxShadow: '0 30px 60px rgba(6,182,212,0.3)'
                  }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  {/* Animated Spotlight Effect */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      right: '-50%',
                      bottom: '-50%',
                      background: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent 50%)',
                      opacity: 0
                    }}
                    whileHover={{ 
                      opacity: 1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.8 }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div 
                      style={{ 
                        fontSize: '4rem', 
                        marginBottom: '1rem',
                        filter: 'drop-shadow(0 0 10px rgba(6,182,212,0.5))'
                      }}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {achievement.icon}
                    </motion.div>

                    <h4 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 700, 
                      marginBottom: '0.75rem', 
                      color: '#F8FAFC',
                      letterSpacing: '-0.01em'
                    }}>
                      {achievement.title}
                    </h4>

                    <p style={{ 
                      color: '#94A3B8', 
                      fontSize: '0.9rem', 
                      marginBottom: '1rem', 
                      lineHeight: 1.6
                    }}>
                      {achievement.description}
                    </p>

                    <motion.p 
                      style={{ 
                        color: '#22D3EE', 
                        fontSize: '0.75rem', 
                        fontFamily: 'JetBrains Mono, monospace',
                        fontWeight: 600,
                        display: 'inline-block',
                        padding: '0.35rem 1rem',
                        background: 'rgba(6,182,212,0.1)',
                        borderRadius: 999,
                        border: '1px solid rgba(6,182,212,0.3)'
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(6,182,212,0.2)'
                      }}
                    >
                      {achievement.year}
                    </motion.p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENHANCED STATS SECTION ──────────────────────────────────────── */}
      <section className="section" style={{ position: 'relative', zIndex: 2, background: 'rgba(6,182,212,0.02)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              { value: '2+', label: 'Years of Coding', icon: '💻', color: '#22D3EE' },
              { value: '29+', label: 'GitHub Repos', icon: '📁', color: '#A78BFA' },
              { value: '5+', label: 'Certifications', icon: '📜', color: '#F472B6' },
              { value: '8.39', label: 'CGPA', icon: '🎓', color: '#22D3EE' },
            ].map((stat, index) => (
              <SectionReveal key={stat.label} delay={index * 0.12}>
                <motion.div 
                  className="glass-card" 
                  style={{ 
                    padding: '2.5rem 2rem', 
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -10,
                    boxShadow: `0 25px 50px ${stat.color}40`
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(135deg, ${stat.color}15, transparent)`,
                      opacity: 0
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div 
                      style={{ fontSize: '3rem', marginBottom: '0.75rem' }}
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }
                      }}
                    >
                      {stat.icon}
                    </motion.div>

                    <motion.div 
                      style={{ 
                        fontSize: '2.5rem', 
                        fontWeight: 800, 
                        color: stat.color,
                        marginBottom: '0.5rem',
                        letterSpacing: '-0.02em'
                      }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>

                    <p style={{ 
                      color: '#64748B', 
                      fontSize: '0.9rem',
                      fontWeight: 500
                    }}>
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}