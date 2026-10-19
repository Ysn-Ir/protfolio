import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Check, Copy, HelpCircle } from 'lucide-react'

interface FAQ {
  id: string
  category: 'All' | 'Flagship AI' | 'Systems & C++' | 'Enterprise & Cloud' | 'Research & Publications' | 'PFE Availability'
  q: string
  a: string
}

const FAQS: FAQ[] = [
  {
    id: 'pfe-objective',
    category: 'PFE Availability',
    q: 'What is your primary engineering objective and target opportunity?',
    a: 'I am a 22-year-old engineering student at ENSA Fès in Software Engineering and Artificial Intelligence, actively seeking a 6-month PFE (End-of-Studies) internship starting in 2027. I bridge low-level systems engineering (C++, custom compilers, digital signal processing) with enterprise cloud backends (Spring Boot microservices, 1,000+ users) and production AI pipelines (multimodal clinical RAG, deep vision, reinforcement learning).',
  },
  {
    id: 'ai-flagship',
    category: 'Flagship AI',
    q: 'Which flagship projects best demonstrate your AI and ML capabilities?',
    a: 'My flagship AI projects include: (1) MedStral Clinical Suite (DenseNet121 with 0.9456 AUROC on pulmonary edema, fine-tuned Mistral-7B via LoRA/PEFT with <5% hallucination rate, and Librosa respiratory audio screening); (2) FreeDoom Autonomous RL Agent (trained directly from raw visual pixels using DRQN + LSTM over 3.27M steps to achieve 16.83 kills/episode and a 10.68 K/D ratio); and (3) our peer-reviewed Plant Disease foundation ViT ensemble (DINOv2 + ConvNeXt + U-Net with real-time Grad-CAM interpretability).',
  },
  {
    id: 'systems-compilers',
    category: 'Systems & C++',
    q: 'What is your experience with low-level systems and compiler engineering?',
    a: 'I engineered the YSN Compiler from scratch in modern C++, featuring a custom lexical tokenizer, recursive-descent parser, Abstract Syntax Tree (AST), and direct code generation of native Linux NASM x86_64 assembly assembled into standalone ELF binaries. I also built a high-performance acoustic fingerprinting engine in C++ with 2D FFT spectrogram waterfall analysis and combinatorial hash indexing delivering sub-200ms song identification.',
  },
  {
    id: 'enterprise-microservices',
    category: 'Enterprise & Cloud',
    q: 'What enterprise microservices and production systems have you deployed?',
    a: 'During my internship at École Normale Supérieure (ENS), I architected Spring Boot REST microservices with Spring Security and stateless JWT authentication serving 1,000+ active university users. At Lead & Connect, I architected carrier-grade Asterisk PBX telephony with SIP trunking, Django REST APIs, and real-time Whisper STT audio analysis to automatically transcribe calls and audit compliance.',
  },
  {
    id: 'research-papers',
    category: 'Research & Publications',
    q: 'What academic research publications have you co-authored?',
    a: 'I have co-authored 4 peer-reviewed research publications at ENSA Fès / ILIA Laboratory: (1) Plant Disease Detection and Foundation Models with Segmentation-Guided Localisation (DINOv2 + U-Net); (2) FreeDoom: Training a Deep Reinforcement Learning Agent for Deathmatch Combat (DRQN); (3) Robust Machine Learning Framework for Bike-Sharing Demand Prediction; and (4) Cryptography & Machine Learning Inclusion in Cybersecurity.',
  },
  {
    id: 'certifications-honors',
    category: 'Enterprise & Cloud',
    q: 'What professional certifications and hackathons validate your skillset?',
    a: 'I hold the Oracle Certified Professional: Java SE 21 Developer, AWS Certified Cloud Practitioner, TensorFlow Developer Certificate (Google / DeepLearning.AI), and Stanford Machine Learning Specialization. I was also a top finalist at the 4Bytes Hackathon, where I trained a convolutional diagnostic classifier for acute leukemia on microscopic blood smear images achieving 97.8% test accuracy.',
  },
  {
    id: 'languages-communication',
    category: 'PFE Availability',
    q: 'What languages do you communicate in?',
    a: 'Arabic is my native language. I am fully fluent and bilingual in French (C1-C2 technical and operational proficiency) and have professional working proficiency in English (C1, author of 4 research papers and international engineering documentation).',
  },
]

const CATEGORIES = [
  'All',
  'PFE Availability',
  'Flagship AI',
  'Systems & C++',
  'Enterprise & Cloud',
  'Research & Publications',
] as const

const FAQItem: React.FC<{
  faq: FAQ
  isOpen: boolean
  onToggle: () => void
}> = ({ faq, isOpen, onToggle }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(`Q: ${faq.q}\n\nA: ${faq.a}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border-t border-neutral-200 transition-colors duration-300 hover:bg-neutral-50/60">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group focus:outline-none py-6 sm:py-7 px-2 sm:px-4 cursor-pointer"
      >
        <div className="flex flex-col gap-1 pr-6 flex-1">
          <span className="text-[11px] font-mono text-[#059669] font-semibold uppercase tracking-wider">
            {faq.category}
          </span>
          <span
            className="text-base sm:text-lg md:text-xl transition-colors duration-200 group-hover:text-black font-['Space_Grotesk_Variable',sans-serif]"
            style={{
              color: isOpen ? '#000' : 'rgb(30,30,30)',
              fontWeight: isOpen ? 600 : 500,
            }}
          >
            {faq.q}
          </span>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <span
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? 'bg-neutral-900 border-neutral-900 text-white rotate-45'
                : 'border-neutral-300 text-neutral-700 group-hover:border-neutral-900'
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-1 px-2 sm:px-4 flex flex-col gap-4">
              <p className="text-sm sm:text-base leading-relaxed text-neutral-600 max-w-4xl">
                {faq.a}
              </p>

              <button
                onClick={handleCopy}
                className="w-fit inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-black transition-colors pt-1 cursor-pointer"
              >
                {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                <span>{copied ? 'Answer Copied to Clipboard' : 'Copy Answer'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>('pfe-objective')
  const [selectedCat, setSelectedCat] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((f) => {
      const matchesCat = selectedCat === 'All' || f.category === selectedCat
      const matchesSearch =
        f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.a.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCat && matchesSearch
    })
  }, [selectedCat, searchQuery])

  return (
    <section
      id="faq"
      className="w-full flex justify-center py-24 sm:py-28"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="portfolio-container w-full max-w-[1160px] px-6 flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/8 pb-8">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#059669]">
              Technical Q&amp;A &amp; Candidacy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight font-['Space_Grotesk_Variable',sans-serif]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Clear answers regarding my technical specializations, enterprise microservices, co-authored research papers, and 2027 PFE availability.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 bg-neutral-100 px-4 py-2 rounded-full border border-black/8 w-fit">
            <HelpCircle size={14} className="text-[#059669]" />
            <span>7 Core Questions Documented</span>
          </div>
        </div>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900 border border-neutral-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search Q&A..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs text-neutral-900 outline-none focus:border-neutral-900 transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="border-b border-neutral-200">
          {filteredFaqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openIndex === faq.id}
              onToggle={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
            />
          ))}

          {filteredFaqs.length === 0 && (
            <div className="py-12 text-center text-sm text-neutral-500">
              No questions found matching your search. Try another keyword.
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default FAQs
