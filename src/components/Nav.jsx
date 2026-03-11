import { motion } from 'framer-motion'
import { useState } from 'react'
import { ResumeModal } from './ResumeModal'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [resumeOpen, setResumeOpen] = useState(false)
  const resumeHref = '/IT%20Job%20Resume.pdf'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#hero" className="font-heading font-semibold text-white/90 hover:text-white text-lg">
          NLH
        </a>
        <div className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-white/80 hover:text-white text-sm font-medium hidden sm:block"
            >
              {label}
            </a>
          ))}
          <motion.button
            type="button"
            onClick={() => setResumeOpen(true)}
            className="text-sm font-medium px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-white/25 transition-colors backdrop-blur"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Resume
          </motion.button>
        </div>
      </div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} href={resumeHref} />
    </nav>
  )
}
