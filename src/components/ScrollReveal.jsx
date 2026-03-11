import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const defaultFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  variants = defaultFadeUp,
  once = true,
  amount = 0.2,
}) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold: amount })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
