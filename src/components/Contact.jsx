import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'
import { contact } from '../config'
import { useState } from 'react'
import { EmailActionsModal } from './EmailActionsModal'

export function Contact() {
  const [open, setOpen] = useState(false)

  return (
    <section id="contact" className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-indigo-50/30">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get in Touch</h2>
          <p className="text-slate-600 text-lg mb-10">
            Feel free to reach out via email or check my GitHub portfolio.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={`mailto:${contact.email}`}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              {contact.email}
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              GitHub
            </a>
            {contact.linkedIn && (
              <a
                href={contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                LinkedIn
              </a>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-block px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Email Me
          </motion.button>
        </ScrollReveal>
      </div>

      <EmailActionsModal open={open} onClose={() => setOpen(false)} email={contact.email} />
    </section>
  )
}
