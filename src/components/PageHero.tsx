import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'
import defaultHeroBg from '@/assets/hero_technology.webp'

export interface PageHeroProps {
  title: string
  description: string | React.ReactNode
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  backgroundImage?: string
  imageAlt?: string
  heightClass?: string
  className?: string
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  ctaText = 'Discuss a Project',
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = defaultHeroBg,
  imageAlt = 'Industrial technology and infrastructure environment',
  heightClass = 'h-screen',
  className = '',
}) => {
  const heroRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.page-hero-container', {
        opacity: 0,
        scale: 0.985,
        duration: 1.0,
      })
        .from(
          '.page-hero-heading',
          {
            y: 35,
            opacity: 0,
            duration: 0.85,
          },
          '-=0.55'
        )
        .from(
          '.page-hero-sub',
          {
            y: 25,
            opacity: 0,
            duration: 0.75,
          },
          '-=0.5'
        )
        .from(
          '.page-hero-actions',
          {
            scale: 0.93,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.35'
        )
    },
    { scope: heroRef }
  )

  return (
    <section ref={heroRef} className={`relative w-full bg-[#F4F5F2] pb-12 sm:pb-16 ${className}`}>
      {/* Main Hero Card Container */}
      <div className={`page-hero-container relative w-full overflow-hidden bg-slate-950 shadow-2xl ${heightClass}`}>
        {/* Background Image */}
        <img
          src={backgroundImage}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
          loading="eager"
        />

        {/* Top Gradient Overlay for transparent navbar legibility */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-1" />

        {/* Vignette / Bottom Gradient Overlay for text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-black/15 to-black/50" />

        {/* Subtle decorative teal accent glow */}
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#00AFA9]/15 blur-3xl" />

        {/* Content Overlay pinned at the bottom */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
              {/* Left Headline */}
              <div className="lg:col-span-7">
                <h1 className="page-hero-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight sm:leading-[1.14] tracking-tight drop-shadow-md">
                  {title}
                </h1>
              </div>

              {/* Right Description & Action Buttons */}
              <div className="lg:col-span-5 flex flex-col items-start space-y-4">
                <div className="page-hero-sub text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-lg drop-shadow-sm font-normal">
                  {typeof description === 'string' ? <p>{description}</p> : description}
                </div>

                <div className="page-hero-actions flex flex-wrap items-center gap-3 pt-1">
                  {ctaText && ctaLink && (
                    <Link
                      to={ctaLink}
                      className="inline-flex items-center justify-center gap-2 rounded-xs bg-[#00AFA9] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#008F8A] hover:shadow-md active:scale-98"
                    >
                      <span>{ctaText}</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  )}

                  {secondaryCtaText && secondaryCtaLink && (
                    <Link
                      to={secondaryCtaLink}
                      className="inline-flex items-center justify-center gap-2 rounded-xs border border-white/30 bg-black/30 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-xs transition-all duration-200 hover:border-[#35D0C5] hover:text-[#35D0C5] active:scale-98"
                    >
                      <span>{secondaryCtaText}</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
