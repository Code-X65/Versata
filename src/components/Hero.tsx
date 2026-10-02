import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import heroMeetingImg from '@/assets/hero-meeting.png'

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-img-container', {
        opacity: 0,
        scale: 0.98,
        duration: 1.1,
      })
        .from(
          '.hero-heading',
          {
            y: 35,
            opacity: 0,
            duration: 0.85,
          },
          '-=0.6'
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
          {
            scale: 0.92,
            opacity: 0,
            duration: 0.5,
          },
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
            src={heroMeetingImg}
            alt="Versata Digital Solutions Team"
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
              {/* Left Headline */}
              <div className="lg:col-span-7">
                <h1 className="hero-heading text-2xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight sm:leading-[1.18] tracking-tight drop-shadow-md">
                  Empowering Digital Brands with Clarity and Purpose
                </h1>
              </div>

              {/* Right Description & CTA */}
              <div className="lg:col-span-5 flex flex-col items-start lg:items-start space-y-3">
                <p className="hero-sub text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-md drop-shadow-sm font-normal">
                  Versata is a creative digital agency crafting high-performing brand
                  identities and websites that convert audiences into loyal customers.
                </p>

                <div className="hero-cta pt-1">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xs bg-[#084d3c] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#063b2e] hover:shadow-md active:scale-98"
                  >
                    Start a Project
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
