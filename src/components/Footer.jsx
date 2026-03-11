import { contact } from '../config'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 bg-slate-100 border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">
          © {year} Nyan Linn Htet. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-indigo-600 text-sm font-medium"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
