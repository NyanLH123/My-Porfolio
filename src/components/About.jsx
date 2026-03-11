import { ScrollReveal } from './ScrollReveal'

const skills = [
  { name: 'PHP', label: 'PHP' },
  { name: 'Node.js', label: 'Node.js' },
  { name: 'React', label: 'React' },
  { name: 'MySQL', label: 'MySQL' },
  { name: 'Git', label: 'Git' },
  { name: 'Figma', label: 'Figma' },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 md:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal delay={0.1}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-8">About Me</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            I am a full-stack web developer focused on PHP and MERN stack, skilled in React, Tailwind CSS, MySQL,
            and API integration. I also have project management experience coordinating teams and delivering
            projects successfully. I enjoy solving problems and building practical, interactive web solutions.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            I bring a solution-oriented mindset, strong team collaboration, and clear communication to every
            project—along with fundamentals in leadership and project management.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap gap-3 justify-start">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm"
              >
                {skill.label}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
