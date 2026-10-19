import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WORDS = [
  'Applied AI Engineer',
  'Software Architect',
  'Deep Learning Researcher',
  'Systems & Compilers',
  'Full-Stack Developer',
  'Yassine Ouali',
]

const BG = '#0a0a0f'
const TEXT = '#eaeaea'
const MUTED = '#888899'
const EASE = [0.22, 1, 0.36, 1] as const
const DURATION = 2000
const COMPLETE_DELAY = 250

interface LoadingScreenProps {
  onComplete: () => void
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    const startTime = performance.now()
    let rafId: number
    let completed = false

    const tick = (now: number) => {
      const elapsed = now - startTime
      const rawProgress = Math.min((elapsed / DURATION) * 100, 100)
      const smoothed = Math.sin((rawProgress / 100) * (Math.PI / 2)) * 100
      setProgress(smoothed)

      const wIdx = Math.min(
        Math.floor((rawProgress / 100) * WORDS.length),
        WORDS.length - 1
      )
      setWordIndex(wIdx)

      if (rawProgress < 100) {
        rafId = requestAnimationFrame(tick)
      } else if (!completed) {
        completed = true
        setTimeout(() => onCompleteRef.current(), COMPLETE_DELAY)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <motion.div
      key="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: BG,
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        style={{
          position: 'absolute',
          top: 'clamp(32px, 5vw, 48px)',
          left: 'clamp(32px, 5vw, 48px)',
          fontSize: 'clamp(11px, 1.2vw, 13px)',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: MUTED,
          fontFamily: '"Space Grotesk", system-ui, sans-serif',
          fontWeight: 500,
          userSelect: 'none',
        }}
      >
        YASSINE OUALI · PORTFOLIO
      </motion.div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(38px, 6vw, 84px)',
              color: '#eaeaeacc',
              userSelect: 'none',
              lineHeight: 1,
              textAlign: 'center',
              padding: '0 20px',
            }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        style={{
          position: 'absolute',
          bottom: 'clamp(32px, 5vw, 48px)',
          right: 'clamp(32px, 5vw, 48px)',
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: 'clamp(64px, 10vw, 144px)',
          color: TEXT,
          lineHeight: 1,
          userSelect: 'none',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {Math.round(progress).toString().padStart(3, '0')}
      </motion.div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          backgroundColor: '#22223080',
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.1, ease: 'linear' }}
          style={{
            height: '100%',
            transformOrigin: 'left',
            background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 100%)',
            boxShadow: '0 0 8px rgba(16, 185, 129, 0.45)',
          }}
        />
      </div>
    </motion.div>
  )
}

export default LoadingScreen
