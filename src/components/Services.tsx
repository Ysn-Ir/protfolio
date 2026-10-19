import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cpu,
  Brain,
  Server,
  Layers,
  Activity,
  TerminalSquare,
  Network,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  Copy,
  Check
} from 'lucide-react'

interface SkillCategory {
  id: string
  category: string
  subtitle: string
  skills: string[]
  architectureSummary: string
  pipeline: string
  flagshipSystems: { name: string; url: string; tech: string }[]
  keyMetric: string
  bulletPoints: string[]
}

const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'systems',
    category: 'Systems & Low-Level C++',
    subtitle: 'Ahead-of-time compiler design, x86_64 NASM emission & digital signal processing',
    skills: ['Modern C++', 'C', 'x86_64 Assembly', 'NASM', 'Compiler Design', 'AST', 'Linux ELF', '2D FFT / DSP', 'Multithreading', 'OpenGL / GLSL', 'Socket Programming'],
    architectureSummary: 'Engineered ahead-of-time compilers from scratch in modern C++ with tokenizing lexers, recursive-descent ASTs, and direct Linux NASM x86_64 code emission. Implemented cache-aligned 8×8×12 bitboard evaluators and 2D FFT spectrogram acoustic fingerprinting engines.',
    pipeline: 'Source.ysn ➔ Lexer Tokenizer ➔ AST ➔ NASM x86_64 ➔ Standalone ELF64 Binary',
    flagshipSystems: [
      { name: 'YSNCompiler', url: 'https://github.com/Ysn-Ir/YSNCompiler', tech: 'C++ · NASM x86_64' },
      { name: 'compiler', url: 'https://github.com/Ysn-Ir/compiler', tech: 'C++ · ELF64' },
      { name: 'chess_engine', url: 'https://github.com/Ysn-Ir/chess_engine', tech: 'Bitboard · Minimax' }
    ],
    keyMetric: '<200ms Query · Native ELF64',
    bulletPoints: [
      'Custom lexical tokenizer and recursive-descent AST with Linux NASM x86_64 code generation',
      '2D Short-Time Fourier Transform (STFT) spectrogram peak constellation landmark hashing',
      'Direct bitboard manipulation for chess game tree pruning (Alpha-Beta Minimax ~1600 Elo)'
    ]
  },
  {
    id: 'vision',
    category: 'Deep Learning & Computer Vision',
    subtitle: 'Foundation vision models, medical segmentation & explainable AI (XAI)',
    skills: ['PyTorch', 'TorchVision', 'DINOv2 ViT', 'ConvNeXt', 'EfficientNet', 'U-Net', 'YOLOv8', 'ArcFace 512-d', '3D CNNs', 'CTC Loss', 'Grad-CAM (XAI)', 'Librosa MFCC'],
    architectureSummary: 'Multi-stage foundation vision transformer ensembles (DINOv2 + ConvNeXt + EfficientNet) coupled with U-Net lesion segmentation. DenseNet121 pulmonary pathology localization with real-time Grad-CAM heatmaps for explainable clinical reasoning.',
    pipeline: 'Raw Radiograph ➔ DenseNet121 Backbone ➔ Grad-CAM Heatmap ➔ Clinical Diagnosis',
    flagshipSystems: [
      { name: 'MedStral Diagnostics', url: 'https://github.com/Ysn-Ir/Medical-Chat-Bot-part-RAG', tech: 'DenseNet121 · Grad-CAM' },
      { name: 'Plant Disease ViT', url: 'https://github.com/Ysn-Ir/LEAF_DISEASE_DETECTION_SEGMENTATION', tech: 'DINOv2 · U-Net' },
      { name: 'VoiceSicknessModel', url: 'https://github.com/Ysn-Ir/VoiceSicknessModel', tech: 'Librosa · Coswara' }
    ],
    keyMetric: '0.9456 AUROC · 99.4% LFW Acc',
    bulletPoints: [
      'DenseNet121 pulmonary edema localization achieving 0.9456 AUROC on MIMIC-CXR benchmark',
      'Foundation ViT ensemble (DINOv2 + ConvNeXt + U-Net) for leaf pathology segmentation',
      'ArcFace 512-dimensional metric learning with YOLOv8 face detection (99.4% LFW accuracy)'
    ]
  },
  {
    id: 'llm',
    category: 'LLMs, RAG & Conversational AI',
    subtitle: 'Parameter-efficient fine-tuning, grounded clinical RAG & speech intelligence',
    skills: ['Mistral-7B', 'LLaMA 3.3', 'LoRA / PEFT', 'Unsloth', 'LangChain', 'LlamaIndex', 'Pinecone', 'pgvector', 'Whisper STT', 'FastAPI', 'Ollama', 'vLLM'],
    architectureSummary: 'Production fine-tuning workflows using Unsloth LoRA on clinical dialogues with <5% hallucination rate. Grounded hybrid retrieval-augmented generation pipelines pairing dense vector similarity with metadata filtering and real-time Whisper telephony transcription.',
    pipeline: 'Telephony Audio ➔ Streaming Whisper STT ➔ Dense Vector Retrieval ➔ Mistral-7B Summary',
    flagshipSystems: [
      { name: 'Medical-Chat-Bot-part-RAG', url: 'https://github.com/Ysn-Ir/Medical-Chat-Bot-part-RAG', tech: 'Mistral-7B · Pinecone' },
      { name: 'Callytics', url: 'https://github.com/Ysn-Ir/Callytics', tech: 'Whisper STT · LLM Analysis' },
      { name: 'EPG_RAG_SCHOOL_BOT', url: 'https://github.com/Ysn-Ir/EPG_RAG_SCHOOL_BOT', tech: 'Ollama · LLaMA 3' }
    ],
    keyMetric: '<5% Hallucination · >96% Diarization',
    bulletPoints: [
      'Grounded RAG architecture with dense chunk embeddings and hybrid vector reranking',
      'LoRA parameter-efficient adaptation on quantized 4-bit weights using Unsloth',
      'Dual-inference architecture: lightweight on-device local fallback paired with remote cloud processing'
    ]
  },
  {
    id: 'rl',
    category: 'Autonomous RL & Game AI',
    subtitle: 'Deep reinforcement learning in high-dimensional continuous & pixel environments',
    skills: ['PyTorch', 'DRQN + LSTM', 'Double DQN', 'PPO', 'VizDoom', 'Gymnasium', 'Stable-Baselines3', 'Prioritized Replay', 'Epsilon Greedy', 'Bitboard Minimax'],
    architectureSummary: 'Trained autonomous deathmatch combat agents operating purely from raw screen pixel buffers without heuristic assist. Recurrent convolutional architectures (DRQN) with LSTM cores maintaining long-term spatial memory under partial observability.',
    pipeline: 'RGB Pixel Buffer ➔ 3-Layer CNN ➔ LSTM Core (512 units) ➔ Q-Value Action Head',
    flagshipSystems: [
      { name: 'FreeDoom-DRQN-Agent', url: 'https://github.com/Ysn-Ir/FreeDoom_Reinforcement_Learning_Game', tech: 'VizDoom · DRQN + LSTM' },
      { name: 'Genetic-Algorithm-Missiles', url: 'https://github.com/Ysn-Ir/Genetic-Algorithm-Guided-Missiles', tech: 'C++ · Neuroevolution' },
      { name: 'chess_engine', url: 'https://github.com/Ysn-Ir/chess_engine', tech: 'Alpha-Beta · Lichess' }
    ],
    keyMetric: '16.83 Kills/Ep · 10.68 K/D',
    bulletPoints: [
      'Dueling Double Deep Recurrent Q-Network (DRQN) trained over 3.27M steps in VizDoom',
      'LSTM temporal recurrent core to overcome partial observability in 3D first-person combat',
      'Prioritized Experience Replay (PER) ensuring rapid convergence on rare combat events'
    ]
  },
  {
    id: 'backend',
    category: 'Enterprise Cloud & Microservices',
    subtitle: 'High-concurrency distributed systems, stateless JWT auth & telephony engines',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Hibernate / JPA', 'PostgreSQL', 'Docker', 'Asterisk PBX', 'SIP Trunking', 'Django REST', 'Redis', 'Angular'],
    architectureSummary: 'Enterprise-grade microservice architectures with carrier-grade Asterisk PBX telephony and SIP trunking. Spring Boot REST services protected with stateless JWT role-based access control (RBAC), powering national university administrative platforms for 1,000+ active users.',
    pipeline: 'Inbound SIP Trunk ➔ Asterisk Dialplan ➔ Django Queue ➔ Real-Time Agent Stream',
    flagshipSystems: [
      { name: 'Lead&Connect PBX', url: 'https://github.com/Ysn-Ir', tech: 'Asterisk · SIP · Django REST' },
      { name: 'ENS University ERP', url: 'https://github.com/Ysn-Ir/ens-gestion', tech: 'Spring Boot · PostgreSQL' },
      { name: 'WEB-FINANCER', url: 'https://github.com/Ysn-Ir/WEB-FINANCER', tech: 'Spring Boot · React' }
    ],
    keyMetric: '1,000+ Users · Sub-second Latency',
    bulletPoints: [
      'Enterprise Asterisk PBX with custom dialplans and SIP trunking handling real-time VoIP queues',
      'Modular Spring Boot microservices with Spring Data JPA and normalized PostgreSQL schemas',
      'Production Dockerized deployment with isolated service containers and secure credential management'
    ]
  },
  {
    id: 'math',
    category: 'Mathematical Foundations & Algorithms',
    subtitle: 'Pure algorithmic implementations from first principles and signal transforms',
    skills: ['Linear Algebra', 'Multivariate Calculus', 'Numerical Optimization', 'Gradient Descent', 'SMO Algorithm', 'Fourier Analysis', 'Constellation Hashing', 'NumPy from Scratch'],
    architectureSummary: 'First-principles algorithmic foundations: built Support Vector Machines with Sequential Minimal Optimization (SMO), Naive Bayes, Linear/Logistic Regressors, and multi-layer Perceptrons in pure Python using only NumPy and basic math.',
    pipeline: 'Quadratic Objective ➔ SMO Analytic Optimization ➔ Karush-Kuhn-Tucker (KKT) Update',
    flagshipSystems: [
      { name: 'SVM-SMO from Scratch', url: 'https://github.com/Ysn-Ir/SVM-SMO', tech: 'NumPy · Pure Math' },
      { name: 'Neural-Network from Scratch', url: 'https://github.com/Ysn-Ir/Neural-Network', tech: 'NumPy · Backprop' },
      { name: 'FourrierSeries & RayTracing', url: 'https://github.com/Ysn-Ir/FourrierSeries', tech: 'C++ · Mathematical Visualizer' }
    ],
    keyMetric: 'Zero Black Boxes · Pure Math',
    bulletPoints: [
      'Implemented Sequential Minimal Optimization (SMO) algorithm for SVM quadratic programming from scratch',
      'Backpropagation with analytical gradient computation and loss landscape optimization',
      'Discrete Fourier Transform (DFT) and 2D STFT spectrogram matrix operations'
    ]
  }
]

const getSkillIcon = (skillName: string) => {
  const s = skillName.toLowerCase()
  if (s.includes('c++') || s.includes('nasm') || s.includes('assembly') || s.includes('compiler')) return <Cpu size={14} />
  if (s.includes('pytorch') || s.includes('vision') || s.includes('vit') || s.includes('yolo') || s.includes('arcface')) return <Layers size={14} />
  if (s.includes('mistral') || s.includes('llama') || s.includes('lora') || s.includes('rag') || s.includes('whisper')) return <Brain size={14} />
  if (s.includes('drqn') || s.includes('dqn') || s.includes('ppo') || s.includes('doom') || s.includes('rl')) return <Activity size={14} />
  if (s.includes('spring') || s.includes('docker') || s.includes('asterisk') || s.includes('backend') || s.includes('sql')) return <Server size={14} />
  if (s.includes('math') || s.includes('smo') || s.includes('fourier') || s.includes('numpy')) return <Network size={14} />
  return <TerminalSquare size={14} />
}

const Ticker: React.FC<{ tags: string[]; reverse?: boolean }> = ({ tags, reverse = false }) => {
  const extended = [...tags, ...tags, ...tags, ...tags]
  return (
    <div 
      className="flex w-max group-hover:[animation-play-state:paused]" 
      style={{ 
        gap: '12px',
        animation: `ticker ${reverse ? '80s' : '90s'} linear infinite ${reverse ? 'reverse' : 'normal'}` 
      }}
    >
      {extended.map((tag, i) => (
        <span 
          key={i} 
          className="text-xs flex items-center gap-1.5 rounded-full flex-shrink-0 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 cursor-default"
          style={{ 
            color: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(255,255,255,0.08)',
            backgroundColor: 'rgba(255,255,255,0.02)',
            padding: '5px 14px'
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.45)' }}>{getSkillIcon(tag)}</span>
          <span>{tag}</span>
        </span>
      ))}
    </div>
  )
}

const SkillRow: React.FC<{
  data: SkillCategory
  index: number
  isOpen: boolean
  onToggle: () => void
}> = ({ data, index, isOpen, onToggle }) => {
  const [copied, setCopied] = useState(false)

  const copyBlueprint = (e: React.MouseEvent) => {
    e.stopPropagation()
    const text = `${data.category}\nMetric: ${data.keyMetric}\nPipeline: ${data.pipeline}\n\nArchitecture:\n${data.architectureSummary}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`w-full border-b transition-colors duration-300 ${
      isOpen ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
    }`} style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
      
      <div 
        onClick={onToggle}
        className="w-full flex flex-col justify-center py-8 sm:py-10 cursor-pointer select-none group"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold text-neutral-500 group-hover:text-white transition-colors">
                0{index + 1}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-neutral-300 border border-white/10 font-medium">
                {data.keyMetric}
              </span>
            </div>

            <h3 
              className="text-[28px] sm:text-[38px] md:text-[50px] font-light tracking-tight transition-colors duration-400 font-sans"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              <span className={`${isOpen ? 'text-white' : 'text-white/40 group-hover:text-white'} transition-colors duration-300`}>
                {data.category}
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
              {data.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 self-end md:self-center">
            <span className="text-xs font-mono text-neutral-400 hidden sm:block group-hover:text-white transition-colors">
              {isOpen ? 'Close Blueprint' : 'Inspect Architecture'}
            </span>
            <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
              isOpen 
                ? 'bg-white text-black border-white shadow-md rotate-180' 
                : 'bg-transparent text-white border-white/20 group-hover:border-white/50 group-hover:scale-105'
            }`}>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        {/* Ticker marquee */}
        <div 
          className="overflow-hidden w-full flex mt-6" 
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
          }}
        >
          <Ticker tags={data.skills} reverse={index % 2 !== 0} />
        </div>

        {/* Expandable Architectural Blueprint Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-6 pb-2 grid grid-cols-1 lg:grid-cols-3 gap-4">
                
                {/* Architecture Narrative & Pipeline */}
                <div 
                  className="lg:col-span-2 rounded-2xl p-6 flex flex-col gap-4"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold flex items-center gap-2">
                      <Sparkles size={13} className="text-neutral-400" />
                      System Data Pipeline &amp; Methodology
                    </span>
                    <button
                      onClick={copyBlueprint}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-white/10 bg-white/5 text-[11px] font-mono text-neutral-400 hover:text-white hover:border-white/25 transition-colors cursor-pointer"
                    >
                      {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copied ? 'Copied Specs' : 'Copy Specs'}</span>
                    </button>
                  </div>

                  {/* Monospace Pipeline Banner */}
                  <div className="px-3.5 py-2.5 rounded-xl border border-white/10 bg-black/40 font-mono text-xs text-neutral-300 overflow-x-auto whitespace-nowrap">
                    <span className="text-neutral-500 mr-2">$ pipeline:</span>
                    <span>{data.pipeline}</span>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                    {data.architectureSummary}
                  </p>

                  <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                      Concrete Implementation Highlights
                    </span>
                    <div className="flex flex-col gap-2">
                      {data.bulletPoints.map((bp, bidx) => (
                        <div key={bidx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-sans">
                          <span className="text-neutral-500 font-mono mt-0.5">—</span>
                          <span className="leading-relaxed">{bp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Verified Codebases */}
                <div 
                  className="rounded-2xl p-6 flex flex-col justify-between gap-5"
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                      Verified Codebases
                    </span>
                    <div className="flex flex-col gap-2">
                      {data.flagshipSystems.map((sys, sIdx) => (
                        <a
                          key={sIdx}
                          href={sys.url}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 rounded-xl border flex items-center justify-between group/link transition-all duration-200"
                          style={{ 
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            borderColor: 'rgba(255,255,255,0.06)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                            e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)'
                          }}
                        >
                          <div className="flex flex-col">
                            <span className="text-xs font-mono font-medium text-neutral-200 group-hover/link:text-white transition-colors">
                              {sys.name}
                            </span>
                            <span className="text-[10px] font-mono text-neutral-500">
                              {sys.tech}
                            </span>
                          </div>
                          <ArrowUpRight size={14} className="text-neutral-500 group-hover/link:text-white transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500">
                    <span>Performance Target</span>
                    <span className="text-neutral-300 font-medium">{data.keyMetric}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}

const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  const toggleRow = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index)
  }

  const filteredData = selectedFilter === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(s => s.id === selectedFilter)

  return (
    <section
      id="skills"
      className="w-full flex justify-center overflow-hidden"
      style={{ backgroundColor: 'rgb(15,15,15)', padding: '120px 0' }}
    >
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="portfolio-container w-full max-w-[1200px] px-6 flex flex-col gap-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="flex flex-col gap-3 max-w-2xl">
            <span 
              className="text-xs font-mono font-medium uppercase tracking-wider" 
              style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em' }}
            >
              // Technical Competencies &amp; System Architecture
            </span>
            <h2 className="text-heading-2 font-sans" style={{ color: '#fff' }}>
              Technical Architecture &amp; Skills
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-400 font-sans">
              From low-level C++ compilers emitting standalone Linux x86_64 assembly to multimodal vision transformers and high-concurrency enterprise microservices.
            </p>
          </div>

          {/* Domain Quick Filters */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/5 text-neutral-400 border border-white/10 hover:text-white'
              }`}
            >
              All (6)
            </button>
            {SKILLS_DATA.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedFilter(item.id)
                  setOpenIndex(0)
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  selectedFilter === item.id
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white/5 text-neutral-400 border border-white/10 hover:text-white'
                }`}
              >
                {item.id === 'systems' ? 'Systems C++' :
                 item.id === 'vision' ? 'Deep Vision' :
                 item.id === 'llm' ? 'LLMs & RAG' :
                 item.id === 'rl' ? 'RL Agents' :
                 item.id === 'backend' ? 'Cloud ERP' : 'Math'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Rows */}
        <div className="w-full flex flex-col" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {filteredData.map((item, i) => (
            <SkillRow 
              key={item.id} 
              data={item} 
              index={i} 
              isOpen={openIndex === i}
              onToggle={() => toggleRow(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
