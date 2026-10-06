import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/contact'
import { SocialLinks } from '@/components/SocialLinks'

gsap.registerPlugin(ScrollTrigger)

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: React.FC = () => {
  const finalCtaSectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: finalCtaSectionRef.current,
          start: 'top 76%',
          once: true,
        },
      })

      timeline
        .from('[data-final-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-final-heading-line]', { yPercent: 100, duration: 0.68, stagger: 0.1 }, '-=0.1')
        .from('[data-final-copy]', { y: 22, opacity: 0, duration: 0.5 }, '-=0.25')
        .from('[data-final-cta]', { y: 18, opacity: 0, duration: 0.4, stagger: 0.1 }, '-=0.2')
        .from('[data-final-divider]', { scaleX: 0, transformOrigin: 'left center', duration: 0.65 }, '-=0.2')
        .from('[data-final-contact]', { y: 20, opacity: 0, duration: 0.4, stagger: 0.08 }, '-=0.3')
    },
    { scope: finalCtaSectionRef }
  )

  return (
   <>
    {/* Final CTA & Contact */}
      <section
        ref={finalCtaSectionRef}
        aria-labelledby="final-cta-heading"
        className="overflow-hidden bg-[#071525] text-white"
      >
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <p aria-hidden="true" className="pointer-events-none absolute left-1/2 top-12 hidden -translate-x-1/2 select-none text-[clamp(5rem,16vw,14rem)] font-bold uppercase leading-none tracking-[-0.08em] text-white/[0.035] lg:block">
            Opportunity
          </p>
          <div className="relative mx-auto max-w-4xl">
            <p data-final-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">
              Let’s Build the Next Opportunity
            </p>
            <h2 id="final-cta-heading" className="mt-5 text-5xl font-bold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              <span className="block overflow-hidden"><span data-final-heading-line className="block">Let’s Build the</span></span>
              <span className="block overflow-hidden"><span data-final-heading-line className="block">Next Opportunity</span></span>
            </h2>
            <p data-final-copy className="mx-auto mt-7 max-w-2xl text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
              Whether you are an organisation looking for an innovative technology solution or an international manufacturer seeking to explore the Nigerian market, Versata Digital Solutions welcomes the opportunity to connect.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                data-final-cta
                href={whatsappUrl('Hello Versata, I would like to discuss a technology requirement or opportunity.')}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[#00AFA9] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#008F8A] active:scale-98"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <Link
                data-final-cta
                to="/partnerships"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-white/30 px-5 py-3 text-xs font-bold text-white transition-colors duration-200 hover:border-[#35D0C5] hover:text-[#35D0C5]"
              >
                Partner With Versata
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div data-final-divider aria-hidden="true" className="relative mt-16 h-px w-full bg-white/15 sm:mt-20" />

          <div className="relative mt-9 grid gap-7 text-left sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            <address data-final-contact className="not-italic">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#35D0C5]">Location</p>
              <p className="mt-3 text-xs leading-5 text-slate-300 sm:text-[13px]">7, Adewale Adedeji Ajao Estate<br />Lagos, Nigeria</p>
            </address>
            <div data-final-contact>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#35D0C5]">Phone</p>
              <div className="mt-3 space-y-1.5 text-xs sm:text-[13px]">
                <a href="tel:+2348037825970" className="block text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0C5]">+234 803 782 5970</a>
                <a href="tel:+2349063364111" className="block text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0C5]">+234 906 336 4111</a>
              </div>
            </div>
            <div data-final-contact>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#35D0C5]">Market</p>
              <p className="mt-3 text-xs leading-5 text-slate-300 sm:text-[13px]">Nigeria<br />Developing West African opportunities</p>
            </div>
            <div data-final-contact>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#35D0C5]">Company</p>
              <p className="mt-3 text-xs leading-5 text-slate-300 sm:text-[13px]">Operating since 2022<br />Corporate registration: 2025</p>
            </div>
            <div data-final-contact>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#35D0C5]">Email</p>
              <a href="mailto:contact@versatadigitalsolutions.com" className="mt-3 block break-all text-xs leading-5 text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0C5] sm:text-[13px]">
                contact@versatadigitalsolutions.com
              </a>
            </div>
          </div>

          {/* Sub-footer Bottom Bar with Social Links */}
          <div data-final-divider aria-hidden="true" className="relative mt-12 h-px w-full bg-white/10" />

          <div className="relative mt-8 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-slate-300">
              &copy; {CURRENT_YEAR} Versata Digital Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="hidden text-xs font-semibold uppercase tracking-wider text-slate-300 sm:inline-block">Connect:</span>
              <SocialLinks variant="subtle" />
            </div>
          </div>
        </div>
      </section>
   </>
  )
}
