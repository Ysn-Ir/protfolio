import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Discover.css'

const BG = '/discover.png'

const Discover: React.FC = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      setErrorMsg('Please enter a valid email address.')
      return
    }

    const subject = encodeURIComponent('PFE Internship / Engineering Inquiry - Yassine Ouali')
    const body = encodeURIComponent(
      `Hello Yassine,\n\nI came across your engineering portfolio and would like to connect regarding an opportunity.\n\nMy contact email is: ${email}\n\nBest regards,`
    )
    window.open(`mailto:oualiy419@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setStatus('success')
  }

  return (
    <section
      id="discover"
      className="w-full flex justify-center py-12 px-4 sm:px-6 md:px-8"
      style={{ backgroundColor: '#fff' }}
    >
      <div
        className="w-full max-w-[1160px] min-h-[640px] md:min-h-[720px] rounded-[28px] overflow-hidden relative flex flex-col justify-between p-6 sm:p-10 md:p-14 shadow-sm"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#1a1a1a',
        }}
      >
        {/* Row 1 — Align End (Right side dark card) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-end"
        >
          <div
            className="w-full max-w-[340px] bg-neutral-900/95 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col gap-6 shadow-xl"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 bg-white/5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#10b981] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                Seeking PFE Internship · 2027
              </span>
              <p className="text-xl sm:text-2xl font-medium text-white leading-snug">
                Available for full-time research &amp; engineering.
              </p>
              <a
                href="tel:+212609408356"
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-all text-sm font-semibold pt-1 group no-underline"
              >
                +212 609 408 356
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Row 2 — Align Start (Left side white card) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex justify-start pt-12 md:pt-0"
        >
          <div
            className="w-full max-w-[460px] bg-white rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight leading-tight">
                Let&apos;s discuss your next engineering project.
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Reach out directly at <strong className="text-neutral-900 font-semibold">oualiy419@gmail.com</strong> or submit your email below to start a conversation.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-neutral-100 rounded-full p-1.5 pl-5 gap-2 border border-neutral-200 focus-within:border-neutral-900 transition-colors"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'error') setStatus('idle')
                }}
                className="flex-1 bg-transparent text-sm text-neutral-900 outline-none border-none min-w-0 placeholder:text-neutral-400"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 cursor-pointer"
                title="Send message"
                aria-label="Send inquiry"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>

            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-emerald-600 font-medium flex items-center gap-1.5"
                >
                  <span>✓ Mail client opened for Yassine Ouali (oualiy419@gmail.com)</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-red-600 font-medium flex items-center gap-1.5"
                >
                  <span>{errorMsg}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Discover
