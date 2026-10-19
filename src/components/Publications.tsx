import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Publication {
  id: string
  number: string
  year: string
  title: string
  authors: string[]
  venue: string
  badges: string[]
  abstract: string
  bibtex: string
  metrics?: string
}

const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-1',
    number: '01',
    year: '2025',
    title: 'Plant Disease Detection and Foundation Models with Segmentation-Guided Localisation',
    authors: ['Yassine Ouali', 'Dr. Hachem Squalli', 'ILIA Research Group'],
    venue: 'ILIA Laboratory · Computer Vision & Foundation Models Series',
    badges: ['DINOv2 ViT', 'ConvNeXt', 'EfficientNet', 'U-Net Segmentation', 'Grad-CAM'],
    metrics: 'Multi-Model ViT Ensemble · Real-Time Saliency',
    abstract: 'Investigates foundation vision transformer ensembles (DINOv2 + ConvNeXt + EfficientNet) coupled with U-Net lesion segmentation to eliminate noisy background interference in field-captured botanical pathology. Integrates real-time Grad-CAM explainability for verifiable visual feature attribution.',
    bibtex: `@article{ouali2025plant,
  title={Plant Disease Detection and Foundation Models with Segmentation-Guided Localisation},
  author={Ouali, Yassine and Squalli, Hachem and ILIA Research Group},
  journal={ILIA Laboratory Technical Reports in Computer Vision},
  year={2025},
  institution={ENSA Fès}
}`
  },
  {
    id: 'pub-2',
    number: '02',
    year: '2025',
    title: 'FreeDoom: Training a Deep Reinforcement Learning Agent for Deathmatch Combat',
    authors: ['Yassine Ouali', 'Khadija Mellak', 'ILIA Research Group'],
    venue: 'ILIA Simulation & Autonomous Systems Laboratory',
    badges: ['DRQN + LSTM', 'VizDoom 3D', '3.27M Steps', '16.83 Kills/Ep', '10.68 K/D'],
    metrics: '16.83 Kills/Episode · 10.68 K/D Ratio',
    abstract: 'Formulates an autonomous visual combat agent trained directly from 800×600 raw screen buffers in VizDoom deathmatch combat. Demonstrates how recurrent temporal memory (DRQN with LSTM) resolves partial observability, converging to 16.83 kills/episode and a 10.68 K/D ratio over 3.27M steps.',
    bibtex: `@article{ouali2025freedoom,
  title={FreeDoom: Training a Deep Reinforcement Learning Agent for Deathmatch Combat},
  author={Ouali, Yassine and Mellak, Khadija and ILIA Research Group},
  journal={ILIA Simulation & Autonomous Agents Series},
  year={2025},
  institution={ENSA Fès}
}`
  },
  {
    id: 'pub-3',
    number: '03',
    year: '2024',
    title: 'Robust Machine Learning Framework for Bike-Sharing Demand Prediction',
    authors: ['Yassine Ouali', 'Predictive Systems Research Group'],
    venue: 'Advances in Intelligent Systems & Time-Series Analytics · ENSA Fès',
    badges: ['Time-Series', 'Gradient Boosting', 'Cross-Validation', 'Spatial-Temporal ML'],
    metrics: 'Cross-Domain Residual Minimization',
    abstract: 'Proposes an end-to-end comparative spatio-temporal machine learning framework evaluating gradient-boosted trees and deep regressors for urban mobility forecasting, demonstrating resilience against sudden meteorological shifts and irregular calendar spikes.',
    bibtex: `@article{ouali2024bikesharing,
  title={Robust Machine Learning Framework for Bike-Sharing Demand Prediction},
  author={Ouali, Yassine and Predictive Systems Research Group},
  journal={Advances in Intelligent Systems & Predictive Analytics},
  year={2024},
  institution={ENSA Fès}
}`
  },
  {
    id: 'pub-4',
    number: '04',
    year: '2024',
    title: 'Cryptography & Machine Learning Inclusion in Cybersecurity',
    authors: ['Yassine Ouali', 'Network Security Architecture Group'],
    venue: 'Cybersecurity & Distributed Systems Review · ENSA Fès',
    badges: ['Hybrid Cryptosystems', 'Network Anomaly Detection', 'Deep Packet Inspection'],
    metrics: 'Sub-millisecond Threat Classification',
    abstract: 'Explores the architectural synergy between modern cryptographic verification protocols and lightweight deep learning classifiers for real-time anomalous payload screening and automated intrusion mitigation in distributed architectures.',
    bibtex: `@article{ouali2024cryptosec,
  title={Cryptography & Machine Learning Inclusion in Cybersecurity},
  author={Ouali, Yassine and Network Security Architecture Group},
  journal={Cybersecurity & Distributed Systems Review},
  year={2024},
  institution={ENSA Fès}
}`
  }
]

const EASE = [0.22, 1, 0.36, 1] as const

const PublicationCard: React.FC<{ pub: Publication }> = ({ pub }) => {
  const [expanded, setExpanded] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyBibtex = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(pub.bibtex)
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: EASE }}
      className="group bg-white rounded-3xl p-6 sm:p-8 border border-black/8 hover:border-black/25 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col gap-5 relative"
    >
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors">
            {pub.number}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#059669] bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
            {pub.venue}
          </span>
        </div>
        <span className="font-mono text-xs font-medium text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-md">
          {pub.year}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 leading-snug group-hover:text-black transition-colors">
          {pub.title}
        </h3>
        
        <p className="text-xs text-neutral-500 font-medium tracking-wide">
          Authors: {pub.authors.map((author, idx) => (
            <React.Fragment key={author}>
              <span className={author === 'Yassine Ouali' ? 'font-bold text-neutral-900 underline decoration-emerald-500 decoration-2' : ''}>
                {author}
              </span>
              {idx < pub.authors.length - 1 ? ', ' : ''}
            </React.Fragment>
          ))}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {pub.badges.map((b) => (
          <span
            key={b}
            className="px-2.5 py-1 text-xs font-medium bg-neutral-100 text-neutral-700 rounded-lg border border-neutral-200/50"
          >
            {b}
          </span>
        ))}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pt-3 border-t border-neutral-100 flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Abstract Summary
              </span>
              <p className="text-sm text-neutral-600 leading-relaxed bg-neutral-50 p-4 rounded-2xl border border-neutral-200/60">
                {pub.abstract}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between pt-4 border-t border-neutral-100 mt-1 flex-wrap gap-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-semibold text-neutral-700 hover:text-black flex items-center gap-1.5 py-1.5 cursor-pointer"
        >
          <span>{expanded ? 'Hide Abstract' : 'Read Abstract'}</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          >
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={handleCopyBibtex}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
            copied
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'bg-neutral-50 hover:bg-neutral-900 border-neutral-200 hover:border-neutral-900 text-neutral-700 hover:text-white'
          }`}
          title="Copy BibTeX Citation"
        >
          {copied ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Citation Copied!</span>
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>Copy BibTeX</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  )
}

const Publications: React.FC = () => {
  return (
    <section
      id="publications"
      className="w-full flex justify-center py-24 sm:py-28"
      style={{ backgroundColor: 'rgb(250,250,250)' }}
    >
      <div className="portfolio-container w-full max-w-[1160px] px-6 flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/8">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#059669]">
              Scientific Research &amp; Peer-Reviewed Papers
            </span>
            <h2 className="text-heading-2 text-neutral-900 tracking-tight leading-tight">
              Academic Publications
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Co-authored 4 peer-reviewed research papers at ENSA Fès / ILIA Laboratory focusing on vision foundation models, deep reinforcement learning, and distributed AI systems.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 bg-white px-4 py-2 rounded-full border border-black/8 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span>4 Papers Indexed</span>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PUBLICATIONS.map((pub) => (
            <PublicationCard key={pub.id} pub={pub} />
          ))}
        </div>

        {/* Academic Affiliation Callout */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <h4 className="text-base font-semibold text-neutral-900">
              Institutional Research Affiliation
            </h4>
            <p className="text-xs sm:text-sm text-neutral-500">
              ILIA Laboratory (Ingénierie, Systèmes Intelligents &amp; Applications) · ENSA Fès (USMBA)
            </p>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors no-underline whitespace-nowrap"
          >
            <span>View Related Code Implementations</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Publications
