import { AnimatePresence, motion } from 'framer-motion'

export function ResumeModal({ open, onClose, href = '/resume.pdf' }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <button
            type="button"
            aria-label="Close resume"
            onClick={onClose}
            className="absolute inset-0 bg-black/60"
          />

          <motion.div
            className="relative w-full max-w-5xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-slate-200">
              <div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">Resume</h3>
                <p className="text-slate-600 text-sm mt-0.5">Preview or download the PDF.</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={href}
                  download="Nyan_Linn_Htet_Resume.pdf"
                  className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800"
                  onClick={onClose}
                >
                  Download
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  aria-label="Close"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-slate-50">
              <div className="aspect-[4/5] sm:aspect-[16/10] w-full">
                <iframe
                  title="Resume PDF preview"
                  src={href}
                  className="h-full w-full"
                />
              </div>
              <div className="px-4 sm:px-6 py-3 border-t border-slate-200 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 hover:text-indigo-900 text-sm font-semibold"
                >
                  Open in new tab →
                </a>
                <p className="text-slate-500 text-xs">
                  If the preview is blank, make sure your PDF exists in <span className="font-semibold">public/</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

