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
            I am a full-stack web developer experienced in PHP and Node.js for backend development and React with Tailwind CSS for frontend, with skills in MySQL, API integration, and responsive web application design. I enjoy building practical, interactive systems and focusing on clean, maintainable solutions.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Alongside development, I have experience in project coordination, teamwork, and problem-solving through educational and social development initiatives. I am currently expanding my skills toward AI and machine learning, while strengthening my foundation in software engineering and project management.
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
