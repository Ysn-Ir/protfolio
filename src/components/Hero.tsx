import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'
import RotatingHeroBadge from './RotatingHeroBadge'
import { Sparkles, Terminal, ArrowUpRight, FileText } from 'lucide-react'

// @ts-ignore
import aiCvEn from '../cv-pdf/Yassine_Ouali_AI_ML_CV_EN.pdf'
// @ts-ignore
import devCvEn from '../cv-pdf/Yassine_Ouali_FullStack_DEV_CV_EN.pdf'
// @ts-ignore
import generalCvEn from '../cv-pdf/Yassine_Ouali_General_CV_EN.pdf'
// @ts-ignore
import aiCvFr from '../cv-pdf/Yassine_Ouali_AI_ML_CV_FR.pdf'
// @ts-ignore
import devCvFr from '../cv-pdf/Yassine_Ouali_FullStack_DEV_CV_FR.pdf'

const EASE = [0.22, 1, 0.36, 1] as const

export interface SocialLink {
  id: string
  label: string
  href: string
  color: string
  path: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Ysn-Ir',
    color: '#0f0f0f',
    path: 'M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2Z',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yassine-ouali-118838235/',
    color: '#0a66c2',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:oualiy419@gmail.com',
    color: '#ea4335',
    path: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/212609408356',
    color: '#25d366',
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z',
  },
]

const ROLES = [
  'Full-Stack Software Architect',
  'Applied AI & Vision Engineer',
  'Low-Level Systems & C++ Builder',
  'Deep Reinforcement Learning Researcher'
]

const BENCHMARKS = [
  { metric: '0.9456 AUROC', label: 'Pulmonary Edema', context: 'DenseNet121 · MedStral', href: '#lab' },
  { metric: '16.83 K/D', label: 'VizDoom Combat', context: 'DRQN + LSTM · FreeDoom', href: '#lab' },
  { metric: '1,000+ Users', label: 'National University ERP', context: 'Spring Boot & Angular', href: '#projects' },
  { metric: '4 Publications', label: 'Peer-Reviewed Papers', context: 'ILIA Research Laboratory', href: '#publications' },
  { metric: 'Oracle OCP', label: 'Java SE 21 Certified', context: 'Professional Credential', href: '#about' },
]

const ArrowBtn: React.FC<{ label: string; href: string }> = ({ label, href }) => (
  <a
    href={href}
    className="group inline-flex items-center gap-3 rounded-full border border-neutral-900 bg-neutral-900 text-white px-5 py-3 text-sm font-medium tracking-tight transition-all duration-300 hover:bg-neutral-800 hover:scale-[1.02] shadow-sm select-none"
  >
    <span>{label}</span>
    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </a>
)

const DownloadBtn: React.FC<{ label?: string; onClick?: () => void }> = ({
  label = 'Download CV (5 Versions)',
  onClick,
}) => (
  <button
    onClick={onClick}
    aria-label="Download resume PDF"
    className="group inline-flex items-center gap-3 rounded-full border border-neutral-300 bg-white text-neutral-800 px-5 py-3 text-sm font-medium tracking-tight transition-all duration-300 hover:border-neutral-800 hover:bg-neutral-50 shadow-sm cursor-pointer select-none"
  >
    <FileText size={15} className="text-neutral-500 group-hover:text-neutral-900 transition-colors" />
    <span>{label}</span>
  </button>
)

const CVDownloadModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'EN' | 'FR'>('EN')

  const cvList = tab === 'EN' ? [
    { title: 'AI & Machine Learning Engineer', file: aiCvEn, name: 'Yassine_Ouali_AI_ML_CV_EN.pdf', badge: 'Flagship AI' },
    { title: 'Full-Stack Software Engineer', file: devCvEn, name: 'Yassine_Ouali_FullStack_DEV_CV_EN.pdf', badge: 'Systems' },
    { title: 'Comprehensive Master Resume', file: generalCvEn, name: 'Yassine_Ouali_General_CV_EN.pdf', badge: 'All Fields' },
  ] : [
    { title: 'Ingénieur IA & Machine Learning', file: aiCvFr, name: 'Yassine_Ouali_AI_ML_CV_FR.pdf', badge: 'Spécialisé IA' },
    { title: 'Ingénieur Logiciel Full-Stack', file: devCvFr, name: 'Yassine_Ouali_FullStack_DEV_CV_FR.pdf', badge: 'Systèmes & Web' },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.96 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl p-6 sm:p-7 w-full max-w-md shadow-2xl flex flex-col gap-5 border border-neutral-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 tracking-tight font-sans">
                  Select Tailored Resume
                </h3>
                <p className="text-xs text-neutral-500 font-sans mt-0.5">
                  Curated LaTeX resumes for AI, Software Architecture &amp; Research
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-black hover:bg-neutral-200 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="flex gap-1 bg-neutral-100 p-1 rounded-xl">
              <button
                onClick={() => setTab('EN')}
                className={`flex-1 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                  tab === 'EN' ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-black'
                }`}
              >
                English Versions (3)
              </button>
              <button
                onClick={() => setTab('FR')}
                className={`flex-1 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                  tab === 'FR' ? 'bg-white text-black shadow-sm' : 'text-neutral-500 hover:text-black'
                }`}
              >
                Français Versions (2)
              </button>
            </div>

            <div className="flex flex-col gap-2.5">
              {cvList.map((cv, i) => (
                <a
                  key={i}
                  href={cv.file}
                  download={cv.name}
                  onClick={onClose}
                  className="group flex items-center justify-between p-3.5 rounded-2xl border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-100 hover:border-neutral-400 transition-all duration-200"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-neutral-900 group-hover:text-black font-sans">
                      {cv.title}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-500">
                      LaTeX PDF · High-Density Standard
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-neutral-700 shadow-2xs group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                    {cv.badge} ↓
                  </span>
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-neutral-100 text-center">
              <span className="text-[11px] font-mono text-neutral-400">
                Direct Contact: oualiy419@gmail.com · +212 609 408 356
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

const Hero: React.FC = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % ROLES.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <CVDownloadModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
      <section
        id="hero-section"
        className="relative w-full flex justify-center items-center overflow-hidden bg-white select-none"
        style={{
          paddingTop: 'clamp(36px, 5vh, 64px)',
          paddingBottom: 'clamp(36px, 5vh, 60px)',
          minHeight: 'calc(100vh - 80px)',
        }}
      >
        {/* Subtle Ambient Architectural Image Backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        >
          <img
            src="/background.png"
            alt=""
            draggable={false}
            className="absolute -top-20 -right-20 lg:top-0 lg:right-0 w-[340px] md:w-[680px] object-contain object-top-right opacity-25 pointer-events-none select-none mix-blend-multiply"
          />
          <img
            src="/crack.png"
            alt=""
            draggable={false}
            className="absolute -top-24 -left-20 -rotate-25 w-[240px] md:w-[420px] opacity-25 pointer-events-none select-none z-0 mix-blend-multiply"
          />
        </div>

        <div className="portfolio-container relative z-10 w-full max-w-[1200px] px-6 flex flex-col gap-8 sm:gap-10">

          {/* Top Live Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-black/5 pb-4"
          >
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-mono font-medium shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Seeking 6-Month PFE Internship · Starting Feb 2027</span>
            </div>

            {/* Cycling Dynamic Role Indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-600">
              <span className="text-neutral-400">// Specialization:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="font-semibold text-neutral-900"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Main Hero Headline Area */}
          <div className="relative w-full flex flex-col items-start gap-4">
            
            {/* Rotating Badge in Top Right or Desktop Float */}
            <div className="absolute right-0 top-0 hidden lg:block pointer-events-auto">
              <RotatingHeroBadge />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
              className="flex items-center gap-2"
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 font-semibold">
                Yassine Ouali — ENSA Fès (2022–2027)
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="text-heading-1 font-sans text-left max-w-4xl"
              style={{
                color: 'rgb(15,15,15)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              Software Engineering{' '}
              <span
                className="font-serif italic font-normal text-neutral-500"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                and
              </span>
              <br className="hidden sm:block" />
              {' '}Artificial Intelligence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
              className="text-base sm:text-lg text-neutral-600 font-sans leading-relaxed max-w-2xl mt-1"
            >
              State Engineering candidate bridging low-level systems (C++ compilers emitting standalone Linux x86_64 assembly), enterprise cloud microservices (1,000+ users), and multimodal neural networks (<strong className="text-neutral-900 font-semibold">0.9456 AUROC</strong>, 4 peer-reviewed publications).
            </motion.p>
          </div>

          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <ArrowBtn label="Explore Flagship Systems" href="#projects" />
            <DownloadBtn onClick={() => setIsCVModalOpen(true)} />
            
            <a
              href="#lab"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-black/10 bg-neutral-50 text-neutral-700 hover:text-black hover:border-black/30 hover:bg-neutral-100 text-sm font-mono font-medium transition-all duration-200"
            >
              <Sparkles size={14} className="text-emerald-600" />
              <span>Interactive Neural Lab</span>
            </a>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/5 bg-neutral-100 text-neutral-500 text-xs font-mono ml-auto">
              <Terminal size={12} />
              <span>Press ⌘K for Quick Launcher</span>
            </div>
          </motion.div>

          {/* Interactive Benchmark Strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="pt-6 border-t border-black/8 grid grid-cols-2 md:grid-cols-5 gap-3"
          >
            {BENCHMARKS.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="group p-3 rounded-2xl border border-black/5 bg-neutral-50/60 hover:bg-white hover:border-black/20 hover:shadow-sm transition-all duration-200 flex flex-col gap-0.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold text-neutral-900 group-hover:text-black">
                    {item.metric}
                  </span>
                  <ArrowUpRight size={11} className="text-neutral-400 group-hover:text-black transition-colors" />
                </div>
                <span className="text-xs font-medium text-neutral-800 tracking-tight font-sans">
                  {item.label}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 truncate">
                  {item.context}
                </span>
              </a>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default Hero
