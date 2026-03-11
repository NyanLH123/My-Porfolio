import { motion, AnimatePresence } from 'framer-motion'

function buildGmailComposeUrl(email) {
  const url = new URL('https://mail.google.com/mail/')
  url.searchParams.set('view', 'cm')
  url.searchParams.set('fs', '1')
  url.searchParams.set('to', email)
  url.searchParams.set('su', 'Hiring inquiry')
  url.searchParams.set('body', 'Hi Nyan,%0D%0A%0D%0A')
  return url.toString()
}

function buildOutlookComposeUrl(email) {
  const url = new URL('https://outlook.office.com/mail/deeplink/compose')
  url.searchParams.set('to', email)
  url.searchParams.set('subject', 'Hiring inquiry')
  url.searchParams.set('body', 'Hi Nyan,%0D%0A%0D%0A')
  return url.toString()
}

export function EmailActionsModal({ open, onClose, email }) {
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      // Fallback: select + copy via prompt
      window.prompt('Copy email:', email)
    }
    onClose?.()
  }

  const actions = [
    {
      label: 'Default mail app',
      sub: 'Opens your installed email app',
      href: `mailto:${email}?subject=${encodeURIComponent('Hiring inquiry')}&body=${encodeURIComponent('Hi Nyan,\n\n')}`,
    },
    {
      label: 'Gmail (web)',
      sub: 'Opens Gmail compose in browser',
      href: buildGmailComposeUrl(email),
    },
    {
      label: 'Outlook (web)',
      sub: 'Opens Outlook compose in browser',
      href: buildOutlookComposeUrl(email),
    },
  ]

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <button
            type="button"
            aria-label="Close email actions"
            onClick={onClose}
            className="absolute inset-0 bg-black/50"
          />

          <motion.div
            className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <div className="p-6 md:p-7 border-b border-slate-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">Contact via email</h3>
                  <p className="text-slate-600 mt-1 text-sm">Choose how you want to open an email compose.</p>
                </div>
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

              <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                <span className="text-sm font-medium text-slate-700">{email}</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-sm font-semibold text-indigo-700 hover:text-indigo-900"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="p-3">
              {actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="block rounded-xl px-4 py-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold text-slate-900">{a.label}</div>
                      <div className="text-sm text-slate-600 mt-0.5">{a.sub}</div>
                    </div>
                    <span className="text-indigo-700 font-semibold">→</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

