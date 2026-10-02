import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import heroTechnologyImg from '@/assets/hero_technology.jpg'

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-img-container', {
        opacity: 0,
        scale: 0.98,
        duration: 1.1,
      })
        .from('.hero-eyebrow', { y: 18, opacity: 0, duration: 0.4 }, '-=0.6')
        .from('.hero-heading-line', { yPercent: 100, duration: 0.8, stagger: 0.08 }, '-=0.1')
        .from(
          '.hero-sub',
          {
            y: 25,
            opacity: 0,
            duration: 0.75,
          },
          '-=0.5'
        )
        .from(
          '.hero-cta',
          { y: 15, opacity: 0, duration: 0.45, stagger: 0.08 },
          '-=0.3'
        )
    },
    { scope: heroRef }
  )

  return (
    <section ref={heroRef} className="relative w-full bg-[#F4F5F2] pb-12 sm:pb-16">
      <div className="">
        {/* Main Hero Card Container */}
        <div className="hero-img-container relative w-full overflow-hidden bg-slate-900 shadow-2xl">
          {/* Hero Meeting Background Image */}
          <img
            src={heroTechnologyImg}
            alt="Industrial technology environment with technical equipment and engineers"
            className="h-screen w-full object-cover object-center"
            loading="eager"
          />

          {/* Top Gradient Overlay for transparent navbar contrast */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-1" />

          {/* Vignette / Bottom Gradient Overlay for text contrast */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-black/10 to-black/40" />

          {/* Content Overlay pinned at the bottom */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
              {/* Technology deployment positioning */}
              <div className="lg:col-span-7">
                <p className="hero-eyebrow mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#35D0C5] sm:text-[11px]">
                  Technology Integration • Energy • Infrastructure
                </p>
                <h1 className="hero-heading text-3xl font-bold text-white leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[58px]">
                  <span className="block overflow-hidden"><span className="hero-heading-line block">Connecting Global Technology</span></span>
                  <span className="block overflow-hidden"><span className="hero-heading-line block">With Real Infrastructure</span></span>
                  <span className="block overflow-hidden"><span className="hero-heading-line block">Opportunities Across Africa</span></span>
                </h1>
              </div>

              {/* Right Description & CTA */}
              <div className="lg:col-span-5 flex flex-col items-start lg:items-start space-y-3">
                <p className="hero-sub text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-md drop-shadow-sm font-normal">
                  Versata Digital Solutions works with international technology manufacturers and local organisations to identify, develop and deploy practical solutions for energy, infrastructure, industrial, commercial and institutional requirements.
                </p>
                <p className="hero-sub text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">From market development and project coordination to commissioning coordination and after-sales support, we help turn relevant technology into practical local applications.</p>

                <div className="hero-cta flex flex-wrap gap-3 pt-2">
                  <Link
                    to="/solutions"
                    className="inline-flex items-center justify-center rounded-xs bg-[#084d3c] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#063b2e] hover:shadow-md active:scale-98"
                  >
                    Explore Our Solutions
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xs border border-white/35 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:border-[#35D0C5] hover:text-[#35D0C5]"
                  >
                    Discuss a Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
