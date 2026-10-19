import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ScrollRevealText: React.FC<{ text: string }> = ({ text }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 10%'],
  })
  const words = text.split(' ')

  return (
    <div ref={ref} style={{ maxWidth: 780 }}>
      <p
        className="text-body-20-regular"
        style={{ color: 'transparent', position: 'relative' }}
      >
        {words.map((word, i) => {
          const start = i / words.length
          const end = Math.min((i + 4) / words.length, 1)
          return (
            <AnimatedWord
              key={i}
              word={word}
              progress={scrollYProgress}
              start={start}
              end={end}
            />
          )
        })}
      </p>
    </div>
  )
}

const AnimatedWord: React.FC<{
  word: string
  progress: any
  start: number
  end: number
}> = ({ word, progress, start, end }) => {
  const color = useTransform(
    progress,
    [start, end],
    ['rgba(15,15,15,0.2)', 'rgb(51,51,51)']
  )
  return (
    <motion.span
      style={{
        color,
        marginRight: '0.3em',
        display: 'inline-block',
        fontSize: 20,
        fontWeight: 400,
        letterSpacing: '-0.02em',
        lineHeight: '1.4em',
      }}
    >
      {word}
    </motion.span>
  )
}

const KpiCard1: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
  >
    <div
      style={{
        height: 32,
        width: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 2px, transparent 2px, transparent 10px), #1e1e1e',
        flexShrink: 0,
      }}
    />
    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px 0', gap: 14 }}>
      <span className="text-body-80-regular" style={{ color: 'rgb(25,25,25)', lineHeight: 0.9, letterSpacing: '-0.04em', fontSize: 'clamp(54px, 6vw, 76px)' }}>
        1,000+
      </span>
      <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#059669' }}>
        Active Enterprise Users
      </span>
      <p className="text-body-16-regular" style={{ color: 'rgb(90,90,90)', lineHeight: 1.5 }}>
        Architected secure Spring Boot microservices with JWT, role-based access control, and PostgreSQL schemas for national academic ERP systems.
      </p>
    </div>
  </motion.div>
)

const KpiCard2: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
  >
    <div
      style={{
        flexGrow: 0,
        height: '56%',
        minHeight: 170,
        width: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 2px, transparent 2px, transparent 10px), #1e1e1e',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '24px 20px',
      }}
    >
      <span className="text-body-80-regular" style={{ color: '#fff', lineHeight: 0.9, letterSpacing: '-0.04em', fontSize: 'clamp(46px, 5vw, 68px)' }}>
        0.9456
      </span>
      <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', marginTop: 8 }}>
        AUROC on Pulmonary Edema
      </span>
    </div>
    <div style={{ padding: '20px 0' }}>
      <p className="text-body-16-regular" style={{ color: 'rgb(90,90,90)', lineHeight: 1.5 }}>
        State-of-the-art DenseNet121 localization with live Grad-CAM heatmaps &amp; fine-tuned Mistral-7B clinical RAG (&lt;5% hallucination).
      </p>
    </div>
  </motion.div>
)

const KpiCard3: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    style={{
      borderRadius: 12,
      height: '100%',
      background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 2px, transparent 2px, transparent 10px), #1e1e1e',
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 12,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
      <span className="text-body-80-regular" style={{ color: '#fff', lineHeight: 0.9, letterSpacing: '-0.04em', fontSize: 'clamp(54px, 6vw, 76px)' }}>4</span>
    </div>
    <span className="text-body-18-medium" style={{ color: '#fff', opacity: 0.95 }}>Research Publications</span>
    <p className="text-body-16-regular" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
      Co-authored peer-reviewed research in computer vision (DINOv2 + U-Net), deep reinforcement learning (FreeDoom DRQN), and machine learning systems.
    </p>
  </motion.div>
)

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full flex justify-center overflow-hidden"
      style={{ backgroundColor: 'rgb(250,250,250)', padding: '90px 0' }}
    >
      <div className="portfolio-container flex flex-col" style={{ gap: 60 }}>
        <div
          className="w-full flex flex-row flex-wrap items-start"
          style={{ justifyContent: 'space-between', gap: 10 }}
        >
          <div style={{ paddingRight: 40, flexShrink: 0 }}>
            <p className="text-body-20-regular" style={{ color: 'rgb(51,51,51)', fontWeight: 500 }}>
              Full-Stack Architect &amp;<br />AI Researcher · ENSA Fès
            </p>
          </div>

          <ScrollRevealText text="At the intersection of low-level systems engineering, modern cloud microservices, and mathematical AI research, I engineer production platforms that scale reliably. From custom C++ compilers and sub-second acoustic fingerprinting to multimodal clinical diagnostic suites and autonomous reinforcement learning agents, every line of code is built for high performance and zero compromise." />
        </div>

        <div
          className="w-full flex flex-row flex-wrap items-end"
          style={{ justifyContent: 'space-between', gap: 10 }}
        >
          <div style={{ paddingRight: 40, flexShrink: 0 }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full transition-all hover:bg-neutral-900 hover:text-white group"
              style={{
                color: 'rgb(51,51,51)',
                backgroundColor: 'transparent',
                border: '1px solid rgba(0,0,0,0.18)',
                padding: '11px 22px',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
              }}
            >
              <span className="text-body-16-regular transition-colors font-medium">Explore Architecture</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-all group-hover:translate-x-1">
                <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:h-[400px] w-full"
            style={{
              flex: '1 1 500px',
              maxWidth: 780,
              minWidth: 0,
            }}
          >
            <KpiCard1 />
            <KpiCard2 />
            <KpiCard3 />
          </div>
        </div>

        {/* Verified Credentials & Honors Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '12px 16px',
            paddingTop: 32,
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgb(140, 140, 140)',
              fontFamily: 'var(--font-space-grotesk), monospace',
            }}
          >
            Verified Credentials
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 9999,
              backgroundColor: 'rgba(0,0,0,0.03)',
              border: '1px solid rgba(0,0,0,0.08)',
              fontSize: 12,
              fontWeight: 600,
              color: 'rgb(40,40,40)',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#059669' }} />
            Oracle Certified Professional: Java SE 21
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 9999,
              backgroundColor: 'rgba(0,0,0,0.03)',
              border: '1px solid rgba(0,0,0,0.08)',
              fontSize: 12,
              fontWeight: 600,
              color: 'rgb(40,40,40)',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#0284c7' }} />
            AWS Certified Cloud Practitioner
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 9999,
              backgroundColor: 'rgba(0,0,0,0.03)',
              border: '1px solid rgba(0,0,0,0.08)',
              fontSize: 12,
              fontWeight: 600,
              color: 'rgb(40,40,40)',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#7c3aed' }} />
            DeepLearning.AI Machine Learning Specialization
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 9999,
              backgroundColor: 'rgba(0,0,0,0.03)',
              border: '1px solid rgba(0,0,0,0.08)',
              fontSize: 12,
              fontWeight: 600,
              color: 'rgb(40,40,40)',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#ea580c' }} />
            Finalist: 4Bytes Hackathon (Acute Leukemia AI)
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              borderRadius: 9999,
              backgroundColor: 'rgba(0,0,0,0.03)',
              border: '1px solid rgba(0,0,0,0.08)',
              fontSize: 12,
              fontWeight: 600,
              color: 'rgb(40,40,40)',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10b981' }} />
            ENSA Fès: State Engineering Degree (2022–2027)
          </span>
        </div>
      </div>
    </section>
  )
}

export default About
