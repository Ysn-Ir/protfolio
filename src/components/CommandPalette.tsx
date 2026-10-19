import React, { useState, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, FileText, ArrowRight, X, ExternalLink, Mail, Check } from 'lucide-react'

interface CommandItem {
  id: string
  title: string
  subtitle: string
  category: 'Projects' | 'Publications' | 'Resumes' | 'Actions'
  action: () => void
  badge?: string
}

const CommandPalette: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [copiedAction, setCopiedAction] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedAction(label)
    setTimeout(() => {
      setCopiedAction(null)
      onClose()
    }, 1200)
  }

  const scrollTo = (hash: string) => {
    onClose()
    const el = document.querySelector(hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = hash
    }
  }

  const items: CommandItem[] = useMemo(() => [
    // Actions
    {
      id: 'copy-email',
      title: 'Copy Email Address',
      subtitle: 'oualiy419@gmail.com',
      category: 'Actions',
      action: () => copyToClipboard('oualiy419@gmail.com', 'email'),
      badge: 'Email'
    },
    {
      id: 'copy-phone',
      title: 'Copy Phone Number',
      subtitle: '+212 609 408 356',
      category: 'Actions',
      action: () => copyToClipboard('+212609408356', 'phone'),
      badge: 'Telephone'
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/Ysn-Ir (30+ repositories)',
      category: 'Actions',
      action: () => { window.open('https://github.com/Ysn-Ir', '_blank'); onClose() },
      badge: 'GitHub'
    },

    // Resumes
    {
      id: 'cv-ai-en',
      title: 'Download AI / ML Resume (English)',
      subtitle: 'LaTeX ATS-Optimized · PDF',
      category: 'Resumes',
      action: () => {
        const link = document.createElement('a')
        link.href = '/src/cv-pdf/Yassine_Ouali_AI_ML_CV_EN.pdf'
        link.download = 'Yassine_Ouali_AI_ML_CV_EN.pdf'
        link.click()
        onClose()
      },
      badge: 'PDF'
    },
    {
      id: 'cv-dev-en',
      title: 'Download Full-Stack / Software Resume (English)',
      subtitle: 'LaTeX ATS-Optimized · PDF',
      category: 'Resumes',
      action: () => {
        const link = document.createElement('a')
        link.href = '/src/cv-pdf/Yassine_Ouali_FullStack_DEV_CV_EN.pdf'
        link.download = 'Yassine_Ouali_FullStack_DEV_CV_EN.pdf'
        link.click()
        onClose()
      },
      badge: 'PDF'
    },
    {
      id: 'cv-general-en',
      title: 'Download Comprehensive Master Resume (English)',
      subtitle: 'LaTeX ATS-Optimized · PDF',
      category: 'Resumes',
      action: () => {
        const link = document.createElement('a')
        link.href = '/src/cv-pdf/Yassine_Ouali_General_CV_EN.pdf'
        link.download = 'Yassine_Ouali_General_CV_EN.pdf'
        link.click()
        onClose()
      },
      badge: 'PDF'
    },

    // Projects
    {
      id: 'p-medstral',
      title: 'MedStral Clinical AI Suite',
      subtitle: '0.9456 AUROC · Mistral-7B LoRA · DenseNet121',
      category: 'Projects',
      action: () => scrollTo('#projects'),
      badge: 'Flagship AI'
    },
    {
      id: 'p-compiler',
      title: 'YSN Compiler (Modern C++ to x86_64 NASM)',
      subtitle: 'Lexer · AST · Linux ELF64 Binary Emission',
      category: 'Projects',
      action: () => scrollTo('#projects'),
      badge: 'Systems'
    },
    {
      id: 'p-freedoom',
      title: 'FreeDoom Autonomous RL Combat Agent',
      subtitle: '16.83 Kills/Ep · 10.68 K/D · 3.27M Steps in VizDoom',
      category: 'Projects',
      action: () => scrollTo('#projects'),
      badge: 'Deep RL'
    },
    {
      id: 'p-shazam',
      title: 'SHAZAM Audio Fingerprinting Engine',
      subtitle: '2D FFT Spectrograms · <200ms Latency in C++',
      category: 'Projects',
      action: () => scrollTo('#projects'),
      badge: 'DSP'
    },
    {
      id: 'p-plant',
      title: 'Plant Disease ViT Foundation Ensemble',
      subtitle: 'DINOv2 + ConvNeXt + U-Net + Grad-CAM',
      category: 'Projects',
      action: () => scrollTo('#projects'),
      badge: 'Vision'
    },
    {
      id: 'p-erp',
      title: 'National University ERP Platform',
      subtitle: '1,000+ Active Users · Spring Boot & Angular',
      category: 'Projects',
      action: () => scrollTo('#projects'),
      badge: 'Cloud'
    },

    // Publications
    {
      id: 'pub-plant',
      title: 'Plant Disease Foundation Models Paper',
      subtitle: 'ILIA Laboratory · DINOv2 ViT + U-Net Segmentation',
      category: 'Publications',
      action: () => scrollTo('#publications'),
      badge: 'Research'
    },
    {
      id: 'pub-freedoom',
      title: 'FreeDoom Deep Reinforcement Learning Paper',
      subtitle: 'ILIA Laboratory · DRQN + LSTM over 3.27M Frames',
      category: 'Publications',
      action: () => scrollTo('#publications'),
      badge: 'Research'
    },
  ], [])

  const filtered = useMemo(() => {
    if (!query.trim()) return items
    const q = query.toLowerCase()
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    )
  }, [items, query])

  useEffect(() => {
    setSelectedIndex(0)
  }, [filtered])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action()
        }
      } else if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filtered, selectedIndex, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999999] flex items-start justify-center pt-20 sm:pt-28 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-neutral-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-5 py-4 border-b border-white/10 gap-3">
            <Search size={18} className="text-neutral-400 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search projects, research papers, resumes, or actions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 outline-none border-none font-['Space_Grotesk_Variable',sans-serif]"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-96 overflow-y-auto p-2 flex flex-col gap-1">
            {filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-colors ${
                    isSelected ? 'bg-white/10 text-white' : 'text-neutral-300 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.category === 'Actions'
                        ? 'bg-emerald-500/20 text-[#10b981]'
                        : item.category === 'Resumes'
                        ? 'bg-blue-500/20 text-blue-400'
                        : item.category === 'Publications'
                        ? 'bg-purple-500/20 text-purple-400'
                        : 'bg-white/10 text-neutral-300'
                    }`}>
                      {item.category === 'Actions' && (copiedAction ? <Check size={14} /> : <Mail size={14} />)}
                      {item.category === 'Resumes' && <FileText size={14} />}
                      {item.category === 'Publications' && <ExternalLink size={14} />}
                      {item.category === 'Projects' && <ArrowRight size={14} />}
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span className="text-xs sm:text-sm font-semibold tracking-tight truncate font-['Space_Grotesk_Variable',sans-serif]">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-neutral-400 truncate">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-neutral-400 border border-white/5 flex-shrink-0 ml-2">
                      {item.badge}
                    </span>
                  )}
                </div>
              )
            })}

            {filtered.length === 0 && (
              <div className="py-12 text-center text-xs text-neutral-500">
                No matching results. Try searching for "MedStral", "FreeDoom", "Resume", or "Email".
              </div>
            )}
          </div>

          {/* Footer Shortcuts hint */}
          <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500 bg-neutral-950/50">
            <div className="flex items-center gap-3">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>ESC Close</span>
            </div>
            <span className="text-[#10b981]">Yassine Ouali Portfolio</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default CommandPalette
