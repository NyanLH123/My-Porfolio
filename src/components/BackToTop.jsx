import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          type="button"
          onClick={goTop}
          className="fixed bottom-6 right-6 z-[70] rounded-full px-4 py-3 border border-slate-200 bg-white/80 backdrop-blur shadow-lg hover:shadow-xl text-slate-800 font-semibold text-sm"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          whileHover={{ y: -2 }}
          aria-label="Back to top"
        >
          ↑ Top
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}

