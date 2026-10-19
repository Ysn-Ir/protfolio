import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    quote: "Working with Yassine on foundation vision models and deep segmentation proved his ability to bridge mathematical theory with production software deployment. His focus on empirical rigor and explainability (Grad-CAM) reflects top 0.1% engineering standards.",
    name: "Dr. Hachem Squalli",
    role: "Computer Vision & AI Researcher, ILIA Laboratory",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    quote: "Yassine architected our Asterisk PBX telephony infrastructure with SIP trunking and integrated real-time Whisper STT audio analysis. A rare engineer who moves effortlessly from low-level Linux sockets to reactive dashboards with flawless reliability.",
    name: "Telephony Infrastructure Lead",
    role: "Lead & Connect (CCaaS Platform)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    quote: "At École Normale Supérieure (ENS), Yassine built secure Spring Boot microservices and reactive Angular portals handling real-time academic operations for over 1,000 active users. His zero-bug mindset and clean PostgreSQL schemas were outstanding.",
    name: "Academic Systems Architect",
    role: "École Normale Supérieure (ENS)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    quote: "His FreeDoom deep reinforcement learning agent achieved 16.83 kills/episode and an exceptional 10.68 K/D ratio in VizDoom deathmatch combat through novel DRQN + LSTM temporal memory integration. Exceptional algorithmic maturity.",
    name: "Khadija Mellak",
    role: "Co-Author & Intelligent Systems Researcher, ENSA Fès",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
  }
]

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentT = testimonials[currentIndex]

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  }

  return (
    <section
      id="trust-us"
      className="testimonials-section w-full flex justify-center"
      style={{ padding: '80px 0' }}
    >
      <div className="portfolio-container flex flex-col pt-16 pb-20 md:pt-24 md:pb-28">
        
        {/* Header Row */}
        <div className="flex flex-row justify-between items-end mb-16 md:mb-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#059669] block mb-2">
              Endorsements &amp; Research Collaborations
            </span>
            <h2
              className="text-heading-2"
              style={{ color: 'rgb(30,30,30)', letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              Academic &amp; Industry Trust
            </h2>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={handlePrev} 
              className="nav-arrow-btn rounded-full flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext} 
              className="nav-arrow-btn rounded-full flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
          <div className="md:w-1/4 flex-shrink-0">
            <p
              className="text-body-16-regular font-mono"
              style={{ color: 'rgb(140,140,140)', letterSpacing: '0.05em' }}
            >
              (0{currentIndex + 1} / 0{testimonials.length})
            </p>
          </div>

          <div className="md:w-3/4 flex-grow relative" style={{ minHeight: '260px' }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-10"
              >
                <p 
                  className="testimonial-quote"
                  style={{ 
                    color: 'rgb(45,45,45)', 
                    lineHeight: 1.45,
                    letterSpacing: '-0.02em',
                    fontWeight: 400,
                    fontSize: 'clamp(20px, 2.5vw, 30px)',
                  }}
                >
                  "{currentT.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div 
                    className="avatar-circle overflow-hidden flex items-center justify-center font-medium text-white shadow-sm bg-neutral-200 flex-shrink-0"
                    style={{ width: 48, height: 48, borderRadius: '50%' }}
                  >
                    <img 
                      src={currentT.image} 
                      alt={currentT.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-body-18-medium" style={{ color: 'rgb(20,20,20)', fontWeight: 600 }}>
                      {currentT.name}
                    </span>
                    <span className="text-body-16-regular mt-0.5" style={{ color: 'rgb(120,120,120)', fontSize: 14 }}>
                      {currentT.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
