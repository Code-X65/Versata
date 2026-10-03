import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import heroEnergyGridImg from '@/assets/hero_energy_grid.jpg'
import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/contact'

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-img-container', {
        opacity: 0,
        scale: 0.985,
        duration: 1.1,
      })
        .from(
          '.hero-heading-line',
          {
            yPercent: 100,
            duration: 0.85,
            stagger: 0.08,
          },
          '-=0.55'
        )
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
          {/* African Clean Energy & Smart Grid Background Image */}
          <img
            src={heroEnergyGridImg}
            alt="African field engineers in safety gear inspecting smart grid infrastructure and solar farm arrays"
            className="h-screen w-full object-cover object-center"
            loading="eager"
          />

          {/* Top Gradient Overlay for transparent navbar contrast */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-1" />

          {/* Vignette / Bottom Gradient Overlay for text contrast */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-black/15 to-black/45" />

          {/* Subtle teal accent glow */}
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-[#00AFA9]/20 blur-3xl" />

          {/* Content Overlay pinned at the bottom */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
            <div className="mx-auto w-full max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
                {/* Left Headline */}
                <div className="lg:col-span-7">
                  <h1 className="hero-heading text-3xl font-bold text-white leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-[56px] drop-shadow-md">
                    <span className="block overflow-hidden"><span className="hero-heading-line block">Connecting Global Innovation</span></span>
                    <span className="block overflow-hidden"><span className="hero-heading-line block">With Real Infrastructure</span></span>
                    <span className="block overflow-hidden"><span className="hero-heading-line block">Opportunities Across Africa</span></span>
                  </h1>
                </div>

                {/* Right Description & Action Buttons */}
                <div className="lg:col-span-5 flex flex-col items-start space-y-4">
                  <p className="hero-sub text-xs sm:text-sm text-slate-200/95 leading-relaxed max-w-lg drop-shadow-sm font-normal">
                    Versata Digital Solutions partners with international hardware manufacturers and technology providers to deploy practical solutions in smart energy, solar power, grid monitoring, and digital infrastructure across Nigeria and West Africa.
                  </p>

                  <div className="hero-cta flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={whatsappUrl('Hello Versata, I would like to discuss a technology requirement or project opportunity.')}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xs bg-[#084d3c] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#063b2e] hover:shadow-md active:scale-98"
                    >
                      <MessageCircle className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
                      Chat on WhatsApp
                    </a>
                    <Link
                      to="/partnerships"
                      className="inline-flex items-center justify-center rounded-xs border border-white/35 bg-black/25 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-xs transition-all duration-200 hover:border-[#35D0C5] hover:text-[#35D0C5] active:scale-98"
                    >
                      Partner With Versata
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
