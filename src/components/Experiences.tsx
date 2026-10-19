import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react'

interface Experience {
  id: string
  number: string
  period: string
  location: string
  type: string
  shortKey: string
  role: string
  organization: string
  description: string
  tags: string[]
  deliverables?: string[]
}

const EXPERIENCES: Experience[] = [
  {
    id: '1',
    number: '01',
    period: 'Jul 2026 – Sep 2026',
    location: 'Rabat, Morocco',
    type: 'Enterprise CCaaS',
    shortKey: 'Lead & Connect',
    role: 'Full-Stack & Telephony AI Engineer Intern',
    organization: 'Lead & Connect — CCaaS Platform',
    description: 'Architected carrier-grade Asterisk PBX telephony infrastructure with SIP trunking for low-latency concurrent VoIP traffic. Developed a modular Django REST backend managing live agent queues, call dispatching, and recording pipelines. Integrated streaming Whisper STT to automatically transcribe agent-client dialogues, audit compliance, and detect conversational anomalies in real time.',
    tags: ['Asterisk PBX', 'SIP Trunking', 'Whisper STT', 'Django REST', 'Docker', 'VoIP'],
    deliverables: [
      'Sub-second streaming audio transcription pipeline with automated compliance tagging',
      'High-concurrency call dispatching dialplan supporting enterprise contact center workloads'
    ]
  },
  {
    id: '2',
    number: '02',
    period: 'Apr 2026 – Jun 2026',
    location: 'Remote',
    type: 'AI & Mobile',
    shortKey: '3LM Solutions',
    role: 'AI & Mobile Engineer Intern',
    organization: '3LM Solutions — AI Smart Call Assistant',
    description: 'Engineered VerbAI (IntelliCall), a production Android application in Kotlin and Jetpack Compose capturing call audio streams in background with minimal battery footprint. Integrated Whisper speaker diarization (>96% confidence) isolating caller and receiver channels, powered by a multi-step LangChain RAG pipeline on FastAPI for intent extraction, executive summaries, and action items.',
    tags: ['Kotlin', 'Jetpack Compose', 'Whisper Diarization', 'FastAPI', 'LangChain', 'RAG'],
    deliverables: [
      'Speaker diarization achieving >96% confidence across dual-channel VoIP/cellular audio',
      'Dual local/cloud inference architecture with offline-first SQLite synchronization'
    ]
  },
  {
    id: '3',
    number: '03',
    period: 'Aug 2025 – Sep 2025',
    location: 'Remote',
    type: 'R&D AI',
    shortKey: 'EPG Center',
    role: 'R&D AI Engineer Intern',
    organization: 'EPG Training Center — Educational RAG Agent',
    description: 'Developed automated document ingestion and web-scraping pipelines collecting multi-format academic resources. Built semantic chunking and high-dimensional vector indexing pipelines into vector databases, deploying locally served open-source LLMs (Mistral-7B, LLaMA 3 via Ollama) behind a FastAPI gateway for private, zero-cloud-cost student query resolution.',
    tags: ['Python', 'LangChain', 'Ollama', 'Mistral-7B', 'Vector DB', 'FastAPI'],
    deliverables: [
      'Zero-cloud-cost privacy-preserving educational assistant serving students locally',
      'Automated semantic chunking pipeline handling diverse PDF, web, and markdown curricula'
    ]
  },
  {
    id: '4',
    number: '04',
    period: 'May 2025 – Jul 2025',
    location: 'Fès, Morocco',
    type: 'Enterprise Microservices',
    shortKey: 'ENS ERP',
    role: 'Full-Stack Engineer Intern',
    organization: 'École Normale Supérieure (ENS) — University ERP',
    description: 'Architected secure Spring Boot REST microservices protected by Spring Security and stateless JWT authentication, serving 1,000+ active university users across admissions, academic records, and scheduling. Designed reactive Angular dashboards with modular component state and normalized PostgreSQL relational schemas.',
    tags: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'Spring Security JWT'],
    deliverables: [
      'Production academic ERP serving 1,000+ active faculty, staff, and students daily',
      'Role-based access control (RBAC) with stateless JWT security and clean relational architecture'
    ]
  },
  {
    id: '5',
    number: '05',
    period: '2024 – 2025',
    location: 'ENSA Fès',
    type: 'Applied Research',
    shortKey: 'ILIA Lab',
    role: 'Co-Author & Lead Researcher',
    organization: 'Department of Intelligent Systems & ILIA Laboratory',
    description: 'Co-authored 4 peer-reviewed academic research papers in computer vision and deep reinforcement learning. Developed multi-stage foundation ViT ensembles (DINOv2 + ConvNeXt) with U-Net lesion segmentation and Grad-CAM visual explainability, and trained autonomous DRQN agents with LSTM temporal cores in VizDoom achieving 16.83 kills/ep and 10.68 K/D ratio over 3.27M steps.',
    tags: ['PyTorch', 'DINOv2 ViT', 'U-Net', 'VizDoom RL', 'DRQN', 'Grad-CAM (XAI)'],
    deliverables: [
      '4 peer-reviewed publications published with experimental validation on international benchmarks',
      'First-pixel-only DRQN combat agent demonstrating long-term memory under partial observability'
    ]
  },
  {
    id: '6',
    number: '06',
    period: '2024',
    location: 'Morocco',
    type: 'Hackathon Finalist',
    shortKey: '4Bytes Hackathon',
    role: 'AI Team Lead',
    organization: '4Bytes National Hackathon',
    description: 'Led AI architecture in a high-intensity 48-hour competitive sprint, developing a deep convolutional neural network for acute leukemia blood smear microscopy classification. Achieved 97.8% validation accuracy with automated blast cell saliency mapping to assist clinical pathologists.',
    tags: ['PyTorch', 'Medical Imaging', 'CNN Architecture', 'Transfer Learning', 'Clinical Saliency'],
    deliverables: [
      '97.8% diagnostic validation accuracy on microscopic blood smear evaluation',
      'Rapid deployment of functional inference demo within strict 48-hour competitive window'
    ]
  },
  {
    id: '7',
    number: '07',
    period: '2022 – 2027 (Expected)',
    location: 'Fès, Morocco',
    type: 'State Engineering Degree',
    shortKey: 'ENSA Fès',
    role: 'Software Engineering & AI Candidate',
    organization: 'ENSA Fès (École Nationale des Sciences Appliquées)',
    description: 'Pursuing a 5-year rigorous state engineering degree covering computer systems architecture, compiler engineering (C++ and x86_64 NASM), distributed algorithms, database internals, and advanced deep learning theory. Seeking a 6-month end-of-studies (PFE) internship starting February 2027.',
    tags: ['C++', 'Compiler Design', 'x86_64 Assembly', 'Distributed Systems', 'Algorithms'],
    deliverables: [
      'Rigorous grounding across both low-level hardware/systems and high-level applied neural networks',
      'Available for 6-month PFE graduation internship starting early 2027'
    ]
  }
]

const EASE = [0.22, 1, 0.36, 1] as const

const Experiences: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filtered = activeFilter === 'all'
    ? EXPERIENCES
    : EXPERIENCES.filter(e => e.id === activeFilter)

  return (
    <section
      id="experiences"
      className="w-full flex justify-center overflow-visible"
      style={{ backgroundColor: 'rgb(250,250,250)', padding: '120px 0' }}
    >
      <div 
        ref={containerRef}
        className="portfolio-container flex flex-col lg:flex-row relative w-full max-w-[1200px] px-6"
        style={{ gap: 48, alignItems: 'flex-start' }}
      >
        {/* Left Column - Sticky */}
        <div 
          className="w-full lg:w-5/12 flex flex-col lg:sticky lg:top-[120px] z-10"
          style={{ gap: 32, paddingRight: '0', flexShrink: 0 }}
        >
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <span 
                className="text-xs font-mono font-medium uppercase inline-block"
                style={{ color: 'rgb(140,140,140)', letterSpacing: '0.12em' }}
              >
                // Career Track Record &amp; Milestones
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
              className="text-heading-2 uppercase font-sans"
              style={{ color: 'rgb(15,15,15)', maxWidth: 440, lineHeight: 1.1, letterSpacing: '-0.02em', fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Experiences That Shaped My Engineering
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
              className="text-sm leading-relaxed"
              style={{ color: 'rgb(110,110,110)', maxWidth: 420 }}
            >
              A documented history of production systems, enterprise call telephony, academic research laboratories, and low-level engineering challenges.
            </motion.p>
          </div>

          {/* Quick Milestone Filter Chips */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-neutral-900 text-white font-medium shadow-xs'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400'
              }`}
            >
              All (7)
            </button>
            {EXPERIENCES.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveFilter(exp.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === exp.id
                    ? 'bg-neutral-900 text-white font-medium shadow-xs'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400'
                }`}
              >
                {exp.shortKey}
              </button>
            ))}
          </div>

          {/* Architectural Cutout Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="w-full relative overflow-hidden bg-neutral-200 shadow-sm group"
            style={{ 
              aspectRatio: '4/3',
              borderRadius: '28px',
              borderBottomRightRadius: '90px',
            }}
          >
            <img 
              src="/experience.png" 
              alt="Engineering Work Environment" 
              className="w-full h-full object-cover contrast-[1.04] brightness-[0.98] transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent mix-blend-overlay" />
            
            <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
              <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-black/5 inline-flex items-center gap-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-medium text-neutral-800 tracking-tight">
                  Seeking 6-Month PFE · 2027
                </span>
              </div>
            </div>
          </motion.div>

          {/* Understated Editorial Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="pt-4 border-t border-black/5 flex flex-col gap-1 text-xs text-neutral-500 font-mono"
          >
            <div className="flex items-center justify-between">
              <span>Candidate:</span>
              <span className="text-neutral-800 font-medium">Yassine Ouali (22 yrs)</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Institution:</span>
              <span className="text-neutral-800 font-medium">ENSA Fès (2022–2027)</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Active Track:</span>
              <span className="text-neutral-800 font-medium">Systems C++ · AI · Microservices</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Architectural Timeline */}
        <div 
          className="w-full lg:w-7/12 flex flex-col pt-6 lg:pt-0 relative" 
        >
          {/* Subtle Vertical Continuous Line */}
          <div className="absolute left-[19px] sm:left-[27px] top-6 bottom-4 w-[2px] bg-black/10" />

          <div className="flex flex-col gap-12 sm:gap-16">
            {filtered.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="group relative flex flex-row items-start gap-5 sm:gap-8 cursor-default"
              >
                {/* Node wrapper with dynamic hover glow */}
                <div className="relative flex flex-col items-center mt-2 z-10 flex-shrink-0">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[rgb(250,250,250)] border-[2px] border-black/15 flex items-center justify-center transition-all duration-300 group-hover:border-black group-hover:scale-105 shadow-sm">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-black/30 transition-colors duration-300 group-hover:bg-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1 pt-1 sm:pt-2">
                  
                  {/* Metadata Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/5 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                        {exp.organization}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="opacity-70" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 hidden sm:inline-flex">
                        <MapPin size={12} className="opacity-70" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Number & Role Header */}
                  <div className="flex items-baseline gap-4 mt-1">
                    <span 
                      className="text-[38px] sm:text-[54px] leading-none font-bold tracking-tighter text-black/20 group-hover:text-black/80 transition-colors duration-300 select-none font-sans"
                    >
                      {exp.number}
                    </span>
                    <div className="flex flex-col">
                      <h3 
                        className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-900 group-hover:text-black transition-colors duration-200"
                      >
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-neutral-500 tracking-normal">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-sm text-neutral-700 leading-relaxed font-sans pr-2">
                    {exp.description}
                  </p>

                  {/* Concrete Deliverables */}
                  {exp.deliverables && exp.deliverables.length > 0 && (
                    <div className="flex flex-col gap-1.5 pt-1">
                      {exp.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-600">
                          <CheckCircle2 size={13} className="text-neutral-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed font-sans">{del}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Clean Monochromatic Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-black/10 bg-black/[0.03] text-neutral-700 transition-colors duration-200 group-hover:border-black/25"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experiences
