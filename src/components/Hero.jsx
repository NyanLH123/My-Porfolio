import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_20%,rgba(167,139,250,0.20),transparent_55%),radial-gradient(900px_circle_at_55%_85%,rgba(34,197,94,0.10),transparent_60%),linear-gradient(to_bottom_right,#020617,#0b1220,#111827)]"
    >
      {/* Premium subtle glow + grid */}
      <motion.div
        className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl bg-cyan-400/20"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-28 -right-28 h-[560px] w-[560px] rounded-full blur-3xl bg-fuchsia-400/20"
        animate={{ x: [0, -24, 0], y: [0, -18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />

      <motion.div
        className="relative z-10 mb-5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90 border border-white/15 bg-white/10 backdrop-blur rounded-full px-4 py-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
          Open to opportunities
        </span>
      </motion.div>

      <motion.h1
        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4 relative z-10 cursor-default"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
      >
        Nyan Linn Htet
      </motion.h1>

      <motion.p
        className="font-heading text-lg sm:text-xl md:text-2xl text-slate-200 font-semibold text-center mb-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Full-Stack Developer | PHP & MERN Stack
      </motion.p>

      <motion.p
        className="text-base sm:text-lg text-slate-200/90 text-center max-w-xl px-4 relative z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Building practical, interactive web solutions with a backend focus.
      </motion.p>

      <motion.div
        className="mt-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-white/90 hover:text-white border border-white/15 hover:border-white/25 rounded-full px-6 py-3 transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur"
        >
          <span>Learn more</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
