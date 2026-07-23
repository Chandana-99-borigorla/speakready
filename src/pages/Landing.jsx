import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import {
  Mic, MessageSquare, TrendingUp, Users, CheckCircle,
  ArrowRight, Mail, Phone, MapPinned, Star, ChevronRight,
  Briefcase, Presentation, Coffee, Sparkles
} from 'lucide-react'

// ─── Hero ─────────────────────────────────────────────────────

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-[#0B0F19]">
    {/* Ken Burns background image */}
    <motion.div
      className="absolute inset-0 bg-cover  bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1668609047269-8e7a1a39e75b?w=1600&auto=format&fit=crop&q=80')",
        opacity: 0.6,
      }}
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
    />

    {/* dark gradient so text stays readable */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-[#0B0F19]/60 pointer-events-none" />
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-8">
        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <span className="text-cyan-400 text-sm font-medium">AI Speaking Coach</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        Speak English
        <br />
        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Like You Mean It</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
        className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Practice real conversations, get instant AI feedback, and walk into
        your next interview, GD, or presentation sounding confident — not rehearsed.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/signup"
          className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 w-full sm:w-auto justify-center">
          Start Practicing Free <ArrowRight size={18} />
        </Link>
        <a href="#how-it-works"
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-200 w-full sm:w-auto justify-center">
          See How It Works <ChevronRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
)

// ─── Who It's For ─────────────────────────────────────────────
const WhoItsFor = () => {
  const audiences = [
    { icon: Briefcase, title: 'Placement Aspirants', desc: 'Practice mock interviews and technical Q&A until answering feels natural.' },
    { icon: Users, title: 'Group Discussions', desc: 'Build the confidence to speak up and hold your ground in a GD.' },
    { icon: Presentation, title: 'Presentations', desc: 'Rehearse your pitch or project demo with real-time clarity feedback.' },
    { icon: Coffee, title: 'Everyday Conversations', desc: 'Get comfortable speaking English naturally, not just textbook-correct.' },
  ]

  return (
    <section id="about" className="py-24 bg-[#0d1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Who It's For</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Built for the moments that matter</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Whatever you're preparing for, SpeakReady gives you a space to practice out loud first.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map(({ icon: Icon, title, desc }) => (
            <div key={title}
              className="bg-white/5 border border-white/10 hover:border-indigo-500/40 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <Icon size={22} className="text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Practice Modes ─────────────────────────────────────────
const Coaches = () => {
  const modes = [
    {
      title: 'Interview Practice',
      desc: 'Answer real questions out loud and think on your feet.',
      img: 'https://i.pinimg.com/736x/ec/5a/cf/ec5acf970d14f0ca2874f7954181805b.jpg',
    },
    {
      title: 'Group Discussion',
      desc: 'Frame your point clearly and jump into a topic with confidence.',
      img: 'https://i.pinimg.com/736x/03/f4/b5/03f4b5d47e123ff55d2d04c50ab70ad7.jpg',
    },
    {
      title: 'Presentations',
      desc: 'Rehearse your pitch until it stops feeling scripted.',
      img: 'https://i.pinimg.com/736x/15/30/3d/15303db09e01eef47d93232e29248d7e.jpg',
    },
    {
      title: 'Everyday Conversation',
      desc: 'Speak naturally, not just textbook-correct.',
      img: 'https://i.pinimg.com/1200x/53/cc/0e/53cc0e3857767d164fe5932a797e29fb.jpg',
    },
  ]

  return (
    <section id="features" className="py-24 bg-[#080b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Practice Modes</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Practice for the moment you're preparing for</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Pick a mode, speak out loud, and get comfortable before it counts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map(({ title, desc, img }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 h-80 group cursor-pointer"
            >
              <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-[#080b14]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ───────────────────────────────────────────────
const HowItWorks = () => {
  const steps = [
    { icon: Mic, title: 'Pick a scenario', desc: 'Choose interview, GD, presentation, or free talk.' },
    { icon: MessageSquare, title: 'Speak your response', desc: 'Talk naturally — no scripts, no pressure.' },
    { icon: Sparkles, title: 'Get instant AI feedback', desc: 'Clarity, fluency, and confidence tips in seconds.' },
    { icon: TrendingUp, title: 'Track your progress', desc: 'Watch your fluency score improve over time.' },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-[#0d1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Four steps to speaking confidently</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white/5 border border-white/10 hover:border-indigo-500/40 rounded-2xl p-6 cursor-pointer"
            >
              <span className="text-indigo-500/30 font-bold text-4xl absolute top-4 right-5">{i + 1}</span>
              <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                <Icon size={22} className="text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-24 bg-[#080b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Get In Touch</h2>
          <p className="text-gray-400 mt-4">Questions or feedback? We'd love to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col gap-5">
            {[
              { icon: Mail, label: 'Email', value: 'support@speakready.app' },
              { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
              { icon: MapPinned, label: 'Location', value: 'Bhimavaram, Andhra Pradesh, India' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-indigo-500/30 transition-all duration-200">
                <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-semibold text-lg mb-2">Send us a message</h3>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required
              className="bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required
              className="bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors" />
            <textarea rows={4} name="message" value={form.message} onChange={handleChange} placeholder="Your message" required
              className="bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors resize-none" />
            {status === 'success' && (
              <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3">
                <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                <p className="text-green-400 text-sm font-medium">Message sent! We'll get back to you soon.</p>
              </div>
            )}
            <button type="submit" disabled={status === 'loading' || status === 'success'}
              className="flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60">
              {status === 'loading' ? 'Sending...' : status === 'success' ? '✅ Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────
const Footer = () => (
  <footer className="bg-[#080b14] border-t border-white/5 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-indigo-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">SR</span>
        </div>
        <span className="text-white font-bold">Speak<span className="text-cyan-400">Ready</span></span>
      </div>
      <p className="text-gray-500 text-sm">© 2026 SpeakReady. All rights reserved.</p>
      <div className="flex gap-6">
        {['Privacy', 'Terms', 'Support'].map((item) => (
          <a key={item} href="#" className="text-gray-500 hover:text-white text-sm transition-colors">{item}</a>
        ))}
      </div>
    </div>
  </footer>
)

// ─── Main ─────────────────────────────────────────────────────
const Landing = () => (
  <>
    <Navbar />
    <Hero />
    <WhoItsFor />
    <Coaches />
    <HowItWorks />
    <Contact />
    <Footer />
  </>
)

export default Landing
