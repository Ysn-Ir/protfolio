import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SOCIAL_LINKS, type SocialLink } from './Hero';

gsap.registerPlugin(ScrollTrigger);

const activeSocials = SOCIAL_LINKS.filter((s: SocialLink) => s.href && s.href.trim() !== '' && s.href !== '#');

const NAV_ROWS = [
  [
    { label: 'Home', href: '/#hero-section' },
    { label: 'About & Credentials', href: '/#about' },
    { label: 'Capabilities', href: '/#skills' },
    { label: 'Interactive Lab', href: '/#interactive-lab' },
  ],
  [
    { label: 'Featured Projects', href: '/#projects' },
    { label: 'Career Timeline', href: '/#experiences' },
    { label: 'Research Papers', href: '/#publications' },
    { label: 'Direct Contact', href: '/contact' },
  ]
]

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const elements = footer.querySelectorAll('.gsap-footer-fade')
    gsap.set(elements, { opacity: 0, y: 30 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    })

    tl.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.1,
    })

    return () => { tl.kill() }
  }, [])

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="relative overflow-hidden pb-0 text-white"
      style={{ backgroundColor: '#000000', paddingTop: '60px' }}
    >
      <div
        aria-hidden
        className="absolute bottom-[-3vw] left-1/2 -translate-x-1/2 w-full text-center font-['Space_Grotesk_Variable',sans-serif] font-bold text-[clamp(90px,24vw,380px)] leading-[0.8] tracking-[-0.04em] bg-gradient-to-b from-neutral-700 to-neutral-900/10 bg-clip-text text-transparent select-none whitespace-nowrap z-0 pointer-events-none"
      >
        OUALI
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 pb-12">
          
          <div className="flex flex-col gap-8 gsap-footer-fade">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl font-bold tracking-tight text-white border border-white/20 px-3 py-1 rounded-lg bg-white/5">
                YSN
              </span>
              <div className="flex flex-col">
                <span className="font-['Space_Grotesk_Variable',sans-serif] text-base font-semibold text-white">
                  Yassine Ouali
                </span>
                <span className="text-xs text-neutral-400">
                  Full-Stack &amp; Applied AI Engineer · ENSA Fès
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-3">
              {activeSocials.map((s: SocialLink) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 border border-white/10 transition-all duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {NAV_ROWS.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-row items-center gap-2.5 flex-wrap">
                  {row.map((link, linkIndex) => (
                    <React.Fragment key={link.label}>
                      <a
                        href={link.href}
                        className="font-['Space_Grotesk_Variable',sans-serif] text-[18px] text-white/90 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                      {linkIndex < row.length - 1 && (
                        <span className="font-['Space_Grotesk_Variable',sans-serif] text-[18px] text-white/30">
                          /
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 gsap-footer-fade md:items-start">
            <div className="flex flex-col gap-1.5">
              <span className="font-['Space_Grotesk_Variable',sans-serif] text-[14px] text-neutral-400 uppercase tracking-wider">
                Direct Contact
              </span>
              <a 
                href="tel:+212609408356" 
                className="font-['Space_Grotesk_Variable',sans-serif] text-[22px] text-white hover:text-[#10b981] transition-colors"
              >
                +212 609 408 356
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-10">
              <div className="flex flex-col gap-1.5">
                <span className="font-['Space_Grotesk_Variable',sans-serif] text-[14px] text-neutral-400 uppercase tracking-wider">
                  Location
                </span>
                <span className="font-['Space_Grotesk_Variable',sans-serif] text-[20px] text-white">
                  Fès, Morocco (ENSA Fès)
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-['Space_Grotesk_Variable',sans-serif] text-[14px] text-neutral-400 uppercase tracking-wider">
                  Email
                </span>
                <a 
                  href="mailto:oualiy419@gmail.com" 
                  className="font-['Space_Grotesk_Variable',sans-serif] text-[20px] text-white hover:text-[#10b981] transition-colors"
                >
                  oualiy419@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-300">
                Oracle Java SE 21 Certified
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-300">
                AWS Cloud Practitioner
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-300">
                TensorFlow Developer
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-8 pb-10 flex flex-col sm:flex-row items-center justify-between gap-4 gsap-footer-fade">
          <p className="font-['Space_Grotesk_Variable',sans-serif] text-[13px] text-neutral-400 tracking-wide text-center sm:text-left">
            © {year} Yassine Ouali (<a href="https://www.ysnir.xyz" target="_blank" rel="noreferrer" className="text-white hover:underline">ysnir.xyz</a>). State Engineering Degree Candidate · All rights reserved.
          </p>
          <p className="font-['Space_Grotesk_Variable',sans-serif] text-[12px] text-neutral-500">
            Engineered with React 19, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
