import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { sendMessage } from '../services/api'

export default function ContactForm({ defaultRole = 'other', compact = false }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', role: defaultRole })
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.')
      return
    }
    setLoading(true)
    try {
      await sendMessage(form)
      toast.success('Message sent! I\'ll get back to you soon 🚀')
      setForm({ name: '', email: '', subject: '', message: '', role: defaultRole })
    } catch {
      toast.error('Failed to send. Try emailing me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label">Name *</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email *</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label">Subject</label>
          <input
            className="form-input"
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Project inquiry, collaboration..."
          />
        </div>
        <div className="form-group">
          <label className="form-label">Regarding</label>
          <select className="form-select" name="role" value={form.role} onChange={handleChange}>
            <option value="mern">MERN Stack Dev</option>
            <option value="cloud">Cloud Engineering</option>
            <option value="other">General / Other</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Message *</label>
        <textarea
          className="form-textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          required
        />
      </div>

      <motion.button
        type="submit"
        className="btn btn-primary"
        disabled={loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ alignSelf: 'flex-start', opacity: loading ? 0.7 : 1 }}
      >
        {loading ? (
          <>
            <span className="loader-ring" style={{ width: 16, height: 16, borderWidth: 2 }} />
            Sending...
          </>
        ) : (
          <>✉ Send Message</>
        )}
      </motion.button>
    </form>
  )
}
