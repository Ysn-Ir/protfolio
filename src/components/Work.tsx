import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Cpu, Terminal, Zap, Activity, Radio, Server, X } from 'lucide-react'

const Github = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

interface MetricItem {
  label: string
  value: string
}

interface ProjectCardData {
  id: string
  name: string
  category: string
  image: string
  stackUsed: string[]
  description: string
  status: string
  featureText: string
  FeatureIcon: React.ElementType
  githubLink?: string
  metrics: MetricItem[]
  challenge: string
  architecture: string
  pipelineFlow?: string
}

const CATEGORIES = [
  'All',
  'Flagship AI',
  'Systems & C++',
  'Full-Stack & Cloud',
  'Research Papers',
]

const projects: ProjectCardData[] = [
  {
    id: 'medstral',
    name: 'MedStral Clinical AI Suite',
    category: 'Flagship AI',
    image: '/projects/cards/medstral.svg',
    stackUsed: ['Mistral-7B', 'DenseNet121', 'Pinecone RAG', 'PyTorch', 'Librosa'],
    description: 'Multimodal clinical diagnostic suite: fine-tuned Mistral-7B (<5% hallucination), DenseNet121 pulmonary pathology localization (0.9456 AUROC on Edema), and CNN-LSTM respiratory screening.',
    status: '0.9456 AUROC · <5% Hallucination',
    featureText: 'Clinical Multimodal RAG',
    FeatureIcon: Cpu,
    githubLink: 'https://github.com/Ysn-Ir/Medical-Chat-Bot-part-RAG',
    metrics: [
      { label: 'Pulmonary Edema', value: '0.9456 AUROC' },
      { label: 'Clinical Hallucination', value: '<5% Rate' },
      { label: 'Respiratory Audio', value: '~88% Accuracy' },
      { label: 'Dialogue Turns', value: '300,000+' },
    ],
    challenge: 'Medical diagnosis requires extreme reliability without clinical hallucinations, combined with multimodal verification across patient text dialogue, chest radiographs, and respiratory sounds.',
    architecture: 'Fine-tuned Mistral-7B using LoRA/PEFT via Unsloth connected to serverless Pinecone RAG over PubMed clinical guidelines. DenseNet121 extracts pulmonary visual representations with live Grad-CAM visual heatmaps. Librosa computes 2D MFCC spectrograms for respiratory sound classification.',
    pipelineFlow: `[DICOM X-Ray + Audio .wav + Query]
   │
   ├──▶ [DenseNet121 Visual Extractor] ──▶ Pulmonary Saliency (0.9456 AUROC)
   ├──▶ [Librosa 2D Spectrogram FFT]   ──▶ Audio Respiratory Screening (~88%)
   │
   ▼
[Multimodal Feature Fusion] ──▶ [Mistral-7B LoRA / PEFT + Pinecone RAG]
   │
   ▼
[Verified Clinical Report (<5% Hallucination) + Grad-CAM Heatmap]`,
  },
  {
    id: 'compiler',
    name: 'YSN Compiler (C++ to x64 Assembly)',
    category: 'Systems & C++',
    image: '/projects/cards/ysn_compiler.svg',
    stackUsed: ['Modern C++', 'x86_64 Assembly', 'NASM', 'Compiler Design', 'Linux ELF'],
    description: 'Ahead-of-time compiler engineered from scratch in modern C++. Features tokenizing lexer, recursive-descent parser, Abstract Syntax Tree (AST), and direct emission of native Linux x64 assembly.',
    status: 'Native Linux ELF',
    featureText: 'Full Compiler Pipeline',
    FeatureIcon: Terminal,
    githubLink: 'https://github.com/Ysn-Ir/YSNCompiler',
    metrics: [
      { label: 'Target Architecture', value: 'x86_64 NASM' },
      { label: 'Binary Output', value: 'Linux ELF64' },
      { label: 'Parser Type', value: 'Recursive-Descent' },
      { label: 'Zero Dependencies', value: 'Pure C++20' },
    ],
    challenge: 'Translating high-level programming syntax into correct, optimal machine instructions requires rigorous lexical analysis, syntax tree verification, symbol table scoping, and low-level x64 register allocation.',
    architecture: 'Custom tokenizing lexer feeding into a recursive-descent parser with precedence climbing. Constructs an Abstract Syntax Tree (AST), validates static typing and symbol scopes, and traverses the AST to emit optimized Linux NASM x86_64 assembly linked into native ELF binaries.',
    pipelineFlow: `[Source Code (.ysn)]
   │
   ▼
[Lexical Tokenizer] ────────▶ [Stream of Typed Tokens]
   │
   ▼
[Recursive-Descent Parser] ──▶ [Abstract Syntax Tree (AST)]
   │
   ▼
[Type Checker & Symbol Table]
   │
   ▼
[Linux NASM x86_64 Codegen] ──▶ [Native ELF64 Executable Binary]`,
  },
  {
    id: 'freedoom',
    name: 'FreeDoom Autonomous RL Combat Agent',
    category: 'Flagship AI',
    image: '/projects/cards/freedoom_rl.svg',
    stackUsed: ['PyTorch', 'VizDoom', 'DRQN', 'LSTM', 'Stable-Baselines3'],
    description: 'Autonomous deathmatch combat agent trained directly from raw visual pixels using Dueling Double Deep Recurrent Q-Networks (DRQN) with LSTM memory. Co-authored published research.',
    status: '16.83 Kills/Ep · 10.68 K/D',
    featureText: '3.27M Steps in VizDoom',
    FeatureIcon: Zap,
    githubLink: 'https://github.com/Ysn-Ir',
    metrics: [
      { label: 'Combat Kills', value: '16.83 / Episode' },
      { label: 'Kill/Death Ratio', value: '10.68 K/D' },
      { label: 'Environment Steps', value: '3.27M Steps' },
      { label: 'Memory Core', value: 'LSTM Temporal' },
    ],
    challenge: '3D deathmatch combat under partial observability requires agents to remember unseen opponent positions, track health/ammo resources over time, and aim/fire in fast-paced real-time environments.',
    architecture: '3-layer convolutional visual encoder coupled with an LSTM recurrent temporal memory cell. Trained using Dueling Double Deep Recurrent Q-Networks (DRQN) with prioritized experience replay and reward shaping directly from raw game screen buffers.',
    pipelineFlow: `[Raw Screen Pixels (800×600 RGB @ 35 FPS)]
   │
   ▼
[3-Layer Convolutional Encoder]
   │
   ▼
[LSTM Recurrent Temporal Core (Resolves Partial Observability)]
   │
   ▼
[Dueling Q-Network Heads: Value V(s) + Advantage A(s,a)]
   │
   ▼
Policy Convergence over 3.27M Steps ──▶ 16.83 Kills/Ep · 10.68 K/D Ratio`,
  },
  {
    id: 'shazam',
    name: 'SHAZAM Audio Fingerprinting Engine',
    category: 'Systems & C++',
    image: '/projects/cards/shazam_dsp.svg',
    stackUsed: ['Modern C++', '2D FFT Spectrograms', 'DSP', 'Combinatorial Hashing'],
    description: 'Landmark-based acoustic fingerprinting engine written in high-performance C++. Computes 2D FFT spectrograms from raw PCM audio buffers, extracts peak constellation pairs, and matches songs in under 200ms.',
    status: '<200ms Match Latency',
    featureText: 'Digital Signal Processing',
    FeatureIcon: Activity,
    githubLink: 'https://github.com/Ysn-Ir',
    metrics: [
      { label: 'Query Matching', value: '<200ms Latency' },
      { label: 'FFT Transform', value: '1024 Bins' },
      { label: 'Hash Method', value: 'Anchor-Target Pairs' },
      { label: 'Engine Language', value: 'High-Perf C++' },
    ],
    challenge: 'Identifying recorded audio with background noise and frequency distortion requires robust time-frequency peak extraction and combinatorial hash keys that remain invariant under acoustic variance.',
    architecture: 'Processes raw PCM audio via high-speed Fast Fourier Transforms into 2D spectrogram waterfall buffers. Selects highest energy constellation peaks within logarithmic frequency bands, pairs landmarks into combinatorial hash keys with relative time offsets, and queries an inverted index for sub-second matching.',
    pipelineFlow: `[Raw PCM Audio Waveform (Microphone or File)]
   │
   ▼
[Short-Time Fourier Transform (STFT) 2D Spectrogram]
   │
   ▼
[Logarithmic Frequency Filtering & Constellation Peak Extraction]
   │
   ▼
[Combinatorial Landmark Hash Generation (Pairing Peaks in Target Zones)]
   │
   ▼
[Inverted Index Hash Table Lookup & Time-Offset Histogram Scoring]
   │
   ▼
Match Verified in <200ms across 10,000+ Indexed Audio Tracks`,
  },
  {
    id: 'radar',
    name: 'Radar Mobile App (OmniHunt)',
    category: 'Full-Stack & Cloud',
    image: '/projects/cards/radar_omnihunt.svg',
    stackUsed: ['React Native (Expo)', 'FastAPI', 'Groq Vision 90B', 'Llama 3.3 70B', 'Docker'],
    description: 'Cross-platform opportunity radar orchestrating 34+ automated distributed scrapers, Groq Vision 90B OCR on flyers and screenshots, and Llama 3.3 70B structured schema extraction.',
    status: '34+ Scrapers · Groq 90B',
    featureText: 'Multimodal Opportunity Radar',
    FeatureIcon: Radio,
    githubLink: 'https://github.com/Ysn-Ir',
    metrics: [
      { label: 'Distributed Scrapers', value: '34+ Portals' },
      { label: 'Vision OCR Model', value: 'Groq 90B Vision' },
      { label: 'Schema Extraction', value: 'Llama 3.3 70B' },
      { label: 'Mobile Platform', value: 'React Native Expo' },
    ],
    challenge: 'Opportunities are scattered across fragmented job boards, unstructured social media flyers, and image posters that standard scrapers cannot parse.',
    architecture: 'Distributed headless scraping workers with anti-bot bypass feeding into a FastAPI gateway. Users can upload flyers or screenshots, processed in milliseconds by Groq Vision 90B and Llama 3.3 70B to extract deadlines, salaries, and application links with instant push notifications.',
    pipelineFlow: `[Hardware BLE Beacon Advertisements & Device RSSI Signals]
   │
   ▼
[Kalman Filter RSSI Smoothing & Distance Triangulation]
   │
   ▼
[Flutter Reactive Polar Coordinate Mapping Engine]
   │
   ▼
[Real-Time 360° Dynamic Sonar Sweep & Distance Audio Frequency Modulator]`,
  },
  {
    id: 'plant',
    name: 'Plant Disease ViT Ensemble',
    category: 'Research Papers',
    image: '/projects/cards/plant_disease_vit.svg',
    stackUsed: ['DINOv2 ViT', 'ConvNeXt', 'U-Net', 'Grad-CAM', 'PyTorch'],
    description: 'Peer-reviewed diagnostic ensemble combining DINOv2 self-supervised ViT representations, ConvNeXt, and U-Net semantic segmentation for lesion localization with real-time explainable Grad-CAM heatmaps.',
    status: 'Published Paper · ILIA Lab',
    featureText: 'Segmentation + Grad-CAM',
    FeatureIcon: Cpu,
    githubLink: 'https://github.com/Ysn-Ir',
    metrics: [
      { label: 'Research Affiliation', value: 'ILIA Lab, ENSA Fès' },
      { label: 'Vision Backbone', value: 'DINOv2 ViT + ConvNeXt' },
      { label: 'Segmentation', value: 'U-Net Lesion Mask' },
      { label: 'Explainability', value: 'Real-Time Grad-CAM' },
    ],
    challenge: 'Agricultural diseases show subtle visual variations and cluttered leaf backgrounds that confuse standard CNN classifiers without localized lesion attention.',
    architecture: 'Extracts self-supervised foundation representations via DINOv2 ViT combined with ConvNeXt and EfficientNet pyramids. A U-Net decoder isolates lesion masks, guided by Grad-CAM visual heatmaps for agronomist decision transparency.',
    pipelineFlow: `[Field Crop Photography]
   │
   ▼
[U-Net Lesion Segmentation (Eliminates Background Soil/Noise)]
   │
   ▼
[Foundation ViT Ensemble: DINOv2 + ConvNeXt + EfficientNet]
   │
   ▼
[Real-Time Grad-CAM Saliency Attribution & Confidence Scoring]`,
  },
  {
    id: 'face',
    name: 'Biometric Facial Recognition Pipeline',
    category: 'Flagship AI',
    image: '/projects/cards/face_recognition.svg',
    stackUsed: ['PyTorch', 'YOLOv8', 'ArcFace 512-d', 'OpenCV', 'Vector DB'],
    description: 'Real-time biometric identification: YOLOv8 face detection, 5-point landmark affine alignment, and deep ArcFace 512-dimensional embedding extraction, achieving 99.4% accuracy on LFW benchmark.',
    status: '99.4% LFW Benchmark',
    featureText: '512-d ArcFace Margin',
    FeatureIcon: Cpu,
    githubLink: 'https://github.com/Ysn-Ir',
    metrics: [
      { label: 'LFW Accuracy', value: '99.4% Benchmark' },
      { label: 'Embedding Vector', value: '512 Dimensions' },
      { label: 'Detector', value: 'YOLOv8 Real-Time' },
      { label: 'Margin Penalty', value: 'ArcFace m=0.5' },
    ],
    challenge: 'Variations in facial poses, lighting, and camera angles degrade standard Euclidean face embedding models.',
    architecture: 'High-speed YOLOv8 detects faces, followed by a 5-point affine transformation normalizing eye-nose-mouth coordinates. An ArcFace deep convolutional network maps faces onto a 512-dimensional hyper-sphere with additive angular margin loss for superior inter-class separability.',
    pipelineFlow: `[Live Video Stream / High-Resolution Imagery]
   │
   ▼
[YOLOv8 Dynamic Bounding Box Face Detection & Alignment]
   │
   ▼
[ArcFace Deep Metric Learning (512-Dimensional Feature Vectors)]
   │
   ▼
[Cosine Similarity Vector Search (99.4% LFW Benchmark Accuracy)]`,
  },
  {
    id: 'chess',
    name: 'Neural Chess AI Engine (~1600 Elo)',
    category: 'Flagship AI',
    image: '/projects/cards/chess_ai.svg',
    stackUsed: ['Python', 'TensorFlow', 'Alpha-Beta Minimax', 'Bitboards', 'python-chess'],
    description: 'Convolutional position evaluator trained on 2,000,000+ Lichess master positions evaluating 8x8x12 bitboards (65% Top-5 move accuracy), integrated with Alpha-Beta minimax search and blunder pruning.',
    status: '~1600 Elo Rating',
    featureText: '2M+ Lichess Positions',
    FeatureIcon: Zap,
    githubLink: 'https://github.com/Ysn-Ir/chess_engine',
    metrics: [
      { label: 'Training Data', value: '2,000,000+ Positions' },
      { label: 'Prediction Accuracy', value: '65% Top-5 Moves' },
      { label: 'Estimated Strength', value: '~1600 Elo' },
      { label: 'Search Algorithm', value: 'Alpha-Beta Minimax' },
    ],
    challenge: 'Evaluating complex chess board dynamics requires fast state representation and balancing deep tree search with positional intuition.',
    architecture: 'Represents board state as 8×8×12 binary bitboard tensors. A deep convolutional network predicts positional evaluations and candidate moves. The search engine executes Alpha-Beta minimax with iterative deepening, quiescence search, and tactical blunder pruning.',
    pipelineFlow: `[Board Position: 8×8×12 Bitboard State Representations]
   │
   ▼
[ResNet Position Evaluator (Trained on 2,000,000+ Master Games)]
   │
   ▼
[Alpha-Beta Minimax Search + Transposition Tables + Move Ordering]
   │
   ▼
Optimal Move Candidate Selected (~1600 Elo Strength)`,
  },
  {
    id: 'erp',
    name: 'National University ERP Platform',
    category: 'Full-Stack & Cloud',
    image: '/projects/cards/university_erp.svg',
    stackUsed: ['Spring Boot', 'Angular', 'PostgreSQL', 'Spring Security', 'JWT'],
    description: 'Enterprise academic management system serving 1,000+ active university users with role-based access control, grade processing, course scheduling, and modular REST microservices.',
    status: '1,000+ Active Users',
    featureText: 'Microservices Architecture',
    FeatureIcon: Server,
    githubLink: 'https://github.com/Ysn-Ir',
    metrics: [
      { label: 'Active Users', value: '1,000+ Students & Staff' },
      { label: 'Backend Architecture', value: 'Spring Boot 3' },
      { label: 'Authentication', value: 'Stateless JWT' },
      { label: 'Database', value: 'PostgreSQL Relational' },
    ],
    challenge: 'Managing simultaneous academic workflows across admissions, transcripts, and faculty scheduling requires strict role separation, high data integrity, and low-latency API response.',
    architecture: 'Designed modular Spring Boot REST microservices secured by Spring Security and stateless JWT authentication. Reactive Angular frontend with modular state caching and normalized PostgreSQL relational schemas deployed in containerized Docker environments.',
    pipelineFlow: `[Angular Reactive Single-Page Application]
   │
   ▼
[Spring Cloud API Gateway + Stateless JWT Authentication Filter]
   │
   ▼
[Spring Boot Domain Microservices (Students, Faculty, Academics)]
   │
   ▼
[PostgreSQL Relational Storage (Serving 1,000+ Active University Users)]`,
  },
]

const ProjectCard: React.FC<{
  data: ProjectCardData
  index: number
  onSelect: (p: ProjectCardData) => void
}> = ({ data, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="block group w-full md:w-[560px]"
  >
    <div 
      onClick={() => onSelect(data)}
      className="w-full flex flex-col bg-[#111111] border border-white/10 rounded-[32px] p-5 sm:p-6 transition-all duration-500 hover:border-white/25 hover:bg-[#141414] shadow-2xl cursor-pointer"
    >
      <div className="flex flex-row items-start sm:items-center justify-between mb-5 sm:mb-6">
        <div className="flex flex-wrap gap-2">
          {data.stackUsed.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 bg-[#1c1c1c] border border-white/8 text-[#E5E5E5] text-xs sm:text-[13px] font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-2 ml-4 shrink-0" onClick={(e) => e.stopPropagation()}>
          {data.githubLink && (
            <a
              href={data.githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#161616] hover:bg-white/15 hover:border-white/30 transition-all text-white/80 hover:text-white"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-[#0a0a0f] border border-white/5">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
      </div>

      <div className="mt-6 flex flex-col px-1 sm:px-2">
        <h3 className="text-[26px] sm:text-[28px] font-semibold text-white tracking-tight">
          {data.name}
        </h3>
        <p className="mt-3 text-[#A1A1AA] text-sm sm:text-base leading-relaxed line-clamp-2">
          {data.description}
        </p>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 px-1 sm:px-2 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-[#10b981] text-xs sm:text-sm font-semibold tracking-wide">
            {data.status}
          </span>
          <div className="w-[1px] h-4 bg-white/10 hidden sm:block" />
          <div className="hidden sm:flex items-center gap-2">
            <data.FeatureIcon className="w-3.5 h-3.5 text-[#A1A1AA]" />
            <span className="text-[#A1A1AA] text-xs sm:text-sm font-medium">{data.featureText}</span>
          </div>
        </div>

        <button 
          type="button"
          onClick={() => onSelect(data)}
          className="flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all duration-300 bg-transparent border-none p-0 cursor-pointer"
        >
          Engineering Deep-Dive
          <ArrowRight className="w-4 h-4 text-[#10b981]" />
        </button>
      </div>
    </div>
  </motion.div>
)

const ProjectModal: React.FC<{
  project: ProjectCardData | null
  onClose: () => void
}> = ({ project, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <div style={{ position: 'fixed', zIndex: 99999, inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-[#111] border border-white/15 rounded-3xl p-6 sm:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto text-white shadow-2xl flex flex-col gap-6"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#10b981] font-semibold">
                {project.category} · Engineering Deep-Dive
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                {project.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-neutral-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="bg-white/5 border border-white/8 rounded-xl p-3 flex flex-col gap-1">
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider">{m.label}</span>
                <span className="text-base font-bold text-[#10b981]">{m.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Technical Challenge</h4>
            <p className="text-sm text-neutral-300 leading-relaxed bg-white/2 p-4 rounded-xl border border-white/5">
              {project.challenge}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Engineering Solution &amp; Architecture</h4>
            <p className="text-sm text-neutral-300 leading-relaxed bg-white/2 p-4 rounded-xl border border-white/5">
              {project.architecture}
            </p>
          </div>

          {project.pipelineFlow && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  System Architecture &amp; Data Pipeline
                </h4>
                <span className="text-[10px] font-mono text-[#10b981] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Verified Data Flow
                </span>
              </div>
              <pre className="font-mono text-xs text-neutral-300 bg-black/60 p-4 rounded-xl border border-white/10 leading-relaxed overflow-x-auto select-all">
                {project.pipelineFlow}
              </pre>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.stackUsed.map((t) => (
                <span key={t} className="px-3 py-1 bg-white/8 border border-white/12 text-neutral-200 text-xs rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors no-underline"
              >
                <Github className="w-4 h-4" />
                View Repository on GitHub
              </a>
            ) : <span />}

            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-white/10 border border-white/15 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState('All')
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null)

  const filteredProjects = projects.filter(
    (p) => activeFilter === 'All' || p.category === activeFilter
  )

  return (
    <section
      id="projects"
      className="w-full flex justify-center items-center overflow-visible"
      style={{ backgroundColor: 'rgb(15,15,15)', padding: '100px 0' }}
    >
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <div className="portfolio-container justify-center items-center lg:items-start lg:justify-between gap-16 w-full flex flex-col lg:flex-row">
        
        {/* Title & Categories (Mobile layout) */}
        <div className="flex flex-col items-center justify-center lg:hidden w-full">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10b981] mb-2">
            Portfolio Showcase
          </span>
          <h2 className="text-heading-2 text-white">
            Engineering Projects
          </h2>

          <div className="flex justify-center flex-row flex-wrap gap-2 mt-6 w-full">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="text-body-16-regular transition-all duration-300"
                style={{
                  display: 'inline-block',
                  color: activeFilter === cat ? '#0f0f0f' : 'rgba(255,255,255,0.6)',
                  backgroundColor: activeFilter === cat ? '#fff' : 'transparent',
                  border: '1px solid',
                  borderColor: activeFilter === cat ? '#fff' : 'rgba(255,255,255,0.2)',
                  borderRadius: 9999,
                  padding: '7px 16px',
                  fontSize: 13,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  fontWeight: activeFilter === cat ? 600 : 400,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Title (Desktop Sticky Left) */}
        <div
          className="hidden lg:flex"
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingTop: 80,
            paddingBottom: 80,
            flexShrink: 0,
            maxWidth: 240,
          }}
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#10b981]">
              Portfolio Showcase
            </span>
            <h2 className="text-heading-2 text-white mt-3" style={{ lineHeight: 1.15 }}>
              Featured Projects
            </h2>
            <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
              Explore concrete systems, published benchmarks, and low-level C++ architectures. Click any card for the engineering deep-dive.
            </p>
          </div>

          <div className="text-xs text-neutral-500 font-mono">
            {filteredProjects.length} Projects Displayed
          </div>
        </div>

        {/* Projects Center Stream */}
        <div className="flex flex-col items-center w-full lg:mt-[60px]" style={{ gap: 64, flex: 1, minWidth: 0 }}>
          {filteredProjects.map((p, i) => (
            <ProjectCard 
              key={p.id} 
              data={p} 
              index={i} 
              onSelect={(project) => setSelectedProject(project)} 
            />
          ))}
        </div>

        {/* Categories Right Sticky (Desktop) */}
        <div
          className="hidden lg:flex"
          style={{
            position: 'sticky',
            top: 0,
            right: 0,
            height: '100vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexShrink: 0,
          }}
        >
          <div className="flex flex-col" style={{ gap: 14 }}>
            <span className="text-[11px] uppercase tracking-widest text-neutral-500 font-medium mb-1 pl-2">
              Filter By Domain
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="transition-all duration-300 text-left"
                style={{
                  display: 'inline-block',
                  color: activeFilter === cat ? '#0f0f0f' : 'rgba(255,255,255,0.6)',
                  backgroundColor: activeFilter === cat ? '#fff' : 'transparent',
                  border: '1px solid',
                  borderColor: activeFilter === cat ? '#fff' : 'rgba(255,255,255,0.15)',
                  borderRadius: 9999,
                  padding: '8px 18px',
                  fontSize: 13,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  fontWeight: activeFilter === cat ? 600 : 400,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Work
