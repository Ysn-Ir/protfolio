import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'
import { Search } from 'lucide-react'
import CommandPalette from './CommandPalette'

interface NavLink {
  label: string
  href: string
  num: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home',                  href: '/#hero-section',     num: '01' },
  { label: 'About & Credentials',   href: '/#about',            num: '02' },
  { label: 'Skills & Capabilities', href: '/#skills',           num: '03' },
  { label: 'Interactive Lab',       href: '/#interactive-lab',  num: '04' },
  { label: 'Featured Projects',     href: '/#projects',         num: '05' },
  { label: 'Career Experiences',    href: '/#experiences',      num: '06' },
  { label: 'GitHub Activity',       href: '/#github-activity',  num: '07' },
  { label: 'Research Publications', href: '/#publications',     num: '08' },
  { label: 'Technical Q&A',         href: '/#faq',              num: '09' },
  { label: 'Get in Touch (PFE)',    href: '/contact',           num: '10' },
]

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M5 12h14m0 0l-7-7m7 7l-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const menuVariants = {
  hidden: { 
    y: '-100%', 
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } 
  },
  visible: { 
    y: 0, 
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const } 
  },
  exit: { 
    y: '-100%', 
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.3 } 
  }
}

const linkItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 + i * 0.07,
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  }),
  exit: { 
    opacity: 0, 
    y: 20, 
    transition: { duration: 0.3 } 
  }
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      if ((window as any).lenis) {
        (window as any).lenis.stop()
      }
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      if ((window as any).lenis) {
        (window as any).lenis.start()
      }
    }

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      if ((window as any).lenis) {
        (window as any).lenis.start()
      }
    }
  }, [menuOpen])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setMenuOpen(false)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? 'bg-white/92 backdrop-blur-md shadow-xs' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full max-w-[1120px] px-6 h-20 flex items-center justify-between">
          
          <a href="/" className="z-[100] flex items-center gap-3 relative group no-underline" aria-label="Go to homepage">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-base font-bold tracking-tight text-neutral-900 border border-neutral-900/25 px-2.5 py-1 rounded-lg bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                YSN
              </span>
              <div className="flex flex-col">
                <span className="font-['Space_Grotesk_Variable',sans-serif] text-sm font-bold text-neutral-900 tracking-tight leading-tight">
                  Yassine Ouali
                </span>
                <span className="text-[11px] text-neutral-500 hidden sm:block">
                  AI &amp; Software Engineer
                </span>
              </div>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPaletteOpen(true)}
              className="hidden md:inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-neutral-900/15 text-neutral-600 hover:text-black hover:bg-neutral-100 transition-all cursor-pointer"
              title="Press ⌘K or Ctrl+K to search"
            >
              <Search size={12} />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-neutral-200/60 text-[10px] text-neutral-500 font-semibold">⌘K</kbd>
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full border border-neutral-900/15 text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all no-underline"
            >
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              Seeking PFE 2027
            </a>

            <button
              className="z-[100] relative flex items-center justify-center w-12 h-12 rounded-full hover:bg-neutral-100 transition-colors group focus:outline-none cursor-pointer"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative w-6 h-[14px]">
                <motion.span
                  className="absolute left-0 w-full h-[1.5px] bg-neutral-900 origin-center rounded-sm"
                  animate={menuOpen ? { top: '6px', rotate: 45 } : { top: '0px', rotate: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute left-0 w-4 h-[1.5px] bg-neutral-900 rounded-sm"
                  animate={menuOpen ? { top: '6px', opacity: 0, scaleX: 0 } : { top: '6px', opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute left-0 w-full h-[1.5px] bg-neutral-900 origin-center rounded-sm"
                  animate={menuOpen ? { top: '6px', rotate: -45 } : { top: '12px', rotate: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            data-lenis-prevent
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl text-neutral-900 flex justify-center overflow-y-auto overflow-x-hidden"
          >
            <div className="w-full max-w-[1080px] px-6 pt-28 pb-16 flex flex-col justify-between min-h-screen">
              
              <div className="w-full flex-1 flex flex-col justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-center justify-between border-b border-neutral-200/70 pb-4 mb-6"
                >
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-neutral-400">
                    Navigation Menu
                  </span>
                  <span className="text-xs font-mono text-[#059669]">
                    YSNIR.XYZ · ENSA FÈS
                  </span>
                </motion.div>
                
                <ul className="flex flex-col gap-4 w-full max-w-4xl mx-auto" role="list">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.label}
                      custom={i}
                      variants={linkItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="group flex border-b border-neutral-200/50 pb-3"
                    >
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="flex items-center text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-neutral-600 relative overflow-hidden w-full transition-colors duration-300 hover:text-black no-underline"
                        tabIndex={menuOpen ? 0 : -1}
                      >
                        <span className="text-xs md:text-sm font-mono text-neutral-400 w-12 md:w-16 transition-colors duration-300 group-hover:text-black">
                          {link.num}
                        </span>
                        
                        <span className="relative flex items-center pr-8 w-full transition-transform duration-300 group-hover:translate-x-2">
                          {link.label}
                          
                          <span className="inline-flex items-center justify-center ml-auto opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                            <ArrowIcon />
                          </span>
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-neutral-200/60 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
                <span>Location: Fès, Morocco · Availability: 6-Month PFE 2027</span>
                <span>Email: oualiy419@gmail.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
