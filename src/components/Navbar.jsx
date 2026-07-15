import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Audience', href: '#about' },
    { label: 'Coaches', href: '#features' },
    { label: 'Process', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111827] shadow-lg shadow-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="text-white font-bold text-xl whitespace-nowrap">
          Speak<span className="text-cyan-400">Ready</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-cyan-400 transition-colors whitespace-nowrap">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm text-gray-300 hover:text-white transition-colors">
            Log in
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-colors text-sm font-semibold text-white whitespace-nowrap"
          >
            Get started
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#111827] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-gray-300 hover:text-cyan-400 text-sm">
              {l.label}
            </a>
          ))}
          <Link to="/login" onClick={() => setOpen(false)} className="text-gray-300 text-sm">
            Log in
          </Link>
          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-lg bg-indigo-500 text-center text-white text-sm font-semibold"
          >
            Get started
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar

