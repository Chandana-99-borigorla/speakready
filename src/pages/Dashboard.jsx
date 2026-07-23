// src/pages/Dashboard.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mic, MessageSquare, Presentation, Coffee, TrendingUp, Flame, Clock, Award } from 'lucide-react'

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('practice')

  const scrollTo = (id) => {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const modes = [
    { id: 'interview', icon: Mic, title: 'Interview Practice', desc: 'Answer real questions on the spot', color: 'indigo' },
    { id: 'gd', icon: MessageSquare, title: 'Group Discussion', desc: 'Jump in and hold your ground', color: 'cyan' },
    { id: 'presentation', icon: Presentation, title: 'Presentation', desc: 'Rehearse your pitch out loud', color: 'indigo' },
    { id: 'conversation', icon: Coffee, title: 'Everyday Conversation', desc: 'Speak naturally, no script', color: 'cyan' },
  ]

  const stats = [
    { icon: Flame, label: 'Day Streak', value: '0' },
    { icon: Clock, label: 'Sessions Done', value: '0' },
    { icon: TrendingUp, label: 'Avg Fluency Score', value: '—' },
    { icon: Award, label: 'Best Mode', value: '—' },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-20 pb-16">
      {/* Sticky mini-nav */}
      <div className="sticky top-16 z-30 bg-[#0B0F19]/90 backdrop-blur border-b border-white/5 mb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6 py-3">
          {[
            { id: 'practice', label: 'Practice' },
            { id: 'progress', label: 'Your Progress' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                activeSection === id
                  ? 'text-white border-indigo-500'
                  : 'text-gray-500 border-transparent hover:text-gray-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Greeting */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">Welcome back 👋</h1>
          <p className="text-gray-400 mt-1">Pick up where you left off, or start a fresh session.</p>
        </div>

        {/* Practice Modes — the highlight */}
        <section id="practice" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-1">Start Practicing</h2>
          <p className="text-gray-400 text-sm mb-6">Choose a mode to begin your session</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {modes.map(({ id, icon: Icon, title, desc, color }, i) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="text-left bg-white/5 border border-white/10 hover:border-indigo-500/40 rounded-2xl p-6 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${
                  color === 'indigo'
                    ? 'bg-indigo-500/10 border-indigo-500/20'
                    : 'bg-cyan-500/10 border-cyan-500/20'
                }`}>
                  <Icon size={22} className={color === 'indigo' ? 'text-indigo-400' : 'text-cyan-400'} />
                </div>
                <h3 className="text-white font-bold mb-1">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Progress summary — secondary */}
        <section id="progress" className="scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-1">Your Progress</h2>
          <p className="text-gray-400 text-sm mb-6">A quick look at how you're doing</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">{label}</p>
                  <p className="text-white font-bold text-lg">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard