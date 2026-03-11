import { ScrollReveal } from './ScrollReveal'
import { motion } from 'framer-motion'
import { projects } from '../config'
import { useMemo, useState } from 'react'

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = useMemo(() => (showAll ? projects : projects.slice(0, 2)), [showAll])

  return (
    <section id="projects" className="py-20 md:py-28 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-4">Projects</h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl">
            A selection of projects highlighting backend and full-stack work.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <motion.article
                className="group rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="relative aspect-[16/10] bg-slate-900">
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.04 }}
                      transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-slate-900 to-indigo-900" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
                  <div className="absolute left-4 bottom-4 flex items-center gap-2">
                    <span className="text-xs font-semibold text-white/90 bg-white/10 border border-white/15 px-3 py-1 rounded-full backdrop-blur">
                      {project.role}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-200 text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 items-center">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-700 hover:text-indigo-900 font-semibold text-sm"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-700 hover:text-indigo-900 font-semibold text-sm"
                      >
                        Live demo →
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              {showAll ? 'Show less' : 'See more projects'}
              <span className="text-slate-500">({showAll ? projects.length : Math.min(2, projects.length)}/{projects.length})</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
