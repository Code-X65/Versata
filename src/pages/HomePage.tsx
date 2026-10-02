import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SEO } from '@/components/SEO'
import { Hero } from '@/components/Hero'
import partnershipEmblem from '@/assets/Glossy Teal Ribbon Growth Emblem.png'
import {
  ArrowRight,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export const HomePage: React.FC = () => {
  const aboutSectionRef = useRef<HTMLElement>(null)
  const solutionsSectionRef = useRef<HTMLElement>(null)
  const partnershipsSectionRef = useRef<HTMLElement>(null)
  const marketOpportunitySectionRef = useRef<HTMLElement>(null)
  const industriesSectionRef = useRef<HTMLElement>(null)
  const approachSectionRef = useRef<HTMLElement>(null)
  const whyVersataSectionRef = useRef<HTMLElement>(null)
  const opportunitiesSectionRef = useRef<HTMLElement>(null)

  const aboutPoints = [
    {
      title: 'Technology-focused',
      description: 'Identifying relevant technologies and practical solutions for real-world requirements.',
    },
    {
      title: 'Market-focused',
      description: 'Understanding local market requirements and opportunities within Nigeria.',
    },
    {
      title: 'Partnership-driven',
      description: 'Connecting customers, technology providers and international manufacturers.',
    },
  ]

  const companySnapshot = [
    { value: '2022', label: 'Operating Experience' },
    { value: '2025', label: 'Corporate Registration' },
    { value: 'Lagos', label: 'Based in Nigeria' },
    { value: 'Nigeria + West Africa', label: 'Market Focus' },
  ]

  const solutions = [
    {
      number: '01',
      title: 'Market Development',
      description: 'Identify relevant market segments, customer requirements and project opportunities for suitable technologies.',
      featured: true,
    },
    {
      number: '02',
      title: 'Infrastructure Deployment',
      description: 'Coordinate the introduction and deployment of appropriate technology within commercial, industrial, institutional and infrastructure environments.',
      featured: false,
    },
    {
      number: '03',
      title: 'Commissioning & Technical Coordination',
      description: 'Coordinate manufacturers, technical partners and local stakeholders during installation, configuration, testing and project handover where appropriate.',
      featured: false,
    },
    {
      number: '04',
      title: 'After-Sales Support',
      description: 'Support customers and manufacturers after deployment through local coordination, issue escalation, technical communication and ongoing relationship management.',
      featured: true,
    },
  ]

  const partnershipStages = [
    {
      number: '01',
      title: 'Market Development',
      description: 'Identify potential market opportunities and suitable customer segments.',
    },
    {
      number: '02',
      title: 'Business Development',
      description: 'Engage potential customers and develop genuine commercial opportunities.',
    },
    {
      number: '03',
      title: 'Project Development',
      description: 'Work with manufacturers and technical partners to develop solutions around identified customer requirements.',
    },
    {
      number: '04',
      title: 'Market Expansion',
      description: 'Successful partnerships can progress toward reseller, integration or distribution relationships.',
    },
  ]

  const marketNeeds = [
    {
      number: '01',
      title: 'Project Execution Coordination',
      description: 'Coordinate relevant stakeholders, manufacturers and technical partners around approved project requirements.',
    },
    {
      number: '02',
      title: 'On-the-Ground Technical Coordination',
      description: 'Provide a local point of coordination for meetings, site requirements, demonstrations, deployment activities and technical communication where applicable.',
    },
    {
      number: '03',
      title: 'Commissioning Support',
      description: 'Coordinate commissioning, testing and manufacturer or technical-partner involvement where required.',
    },
    {
      number: '04',
      title: 'After-Sales Support',
      description: 'Support ongoing communication, issue escalation, customer relationships and local coordination after deployment.',
    },
  ]

  const industries = [
    { number: '01', title: 'Corporate & Commercial', description: 'Technology solutions for businesses, offices and commercial organisations.' },
    { number: '02', title: 'Education', description: 'Smart learning, STEM, robotics, engineering and educational technology.' },
    { number: '03', title: 'Energy', description: 'Smart energy, renewable-energy-related technologies and energy management solutions.' },
    { number: '04', title: 'Manufacturing & Industrial', description: 'Technology products and systems for industrial and operational environments.' },
    { number: '05', title: 'Hospitality', description: 'Technology solutions supporting modern hospitality facilities and operations.' },
    { number: '06', title: 'Healthcare', description: 'Technology opportunities applicable to healthcare facilities and related organisations.' },
    { number: '07', title: 'Government & Public Sector', description: 'Technology solutions supporting institutions, infrastructure and public-sector projects.' },
    { number: '08', title: 'Real Estate & Infrastructure', description: 'Technology for modern buildings, facilities, developments and infrastructure projects.' },
  ]

  const approachSteps = [
    {
      number: '01',
      title: 'Understand',
      description: 'Understand the customer’s requirements and the specific problem that needs to be addressed.',
    },
    {
      number: '02',
      title: 'Identify',
      description: 'Identify suitable technologies, products and potential technology partners.',
    },
    {
      number: '03',
      title: 'Develop',
      description: 'Work with customers and manufacturers to develop commercially and technically appropriate opportunities.',
    },
    {
      number: '04',
      title: 'Deliver',
      description: 'Coordinate sourcing, procurement and implementation through suitable partners where appropriate.',
    },
    {
      number: '05',
      title: 'Build',
      description: 'Build long-term relationships with customers and international technology providers.',
    },
  ]

  const differentiators = [
    { number: '01', title: 'Local Market Focus', description: 'Based in Lagos and focused on understanding opportunities within the Nigerian market.', keyword: 'Local' },
    { number: '02', title: 'Technology-Focused', description: 'Centred on innovative technology products and practical solutions.', keyword: 'Technology' },
    { number: '03', title: 'Market Development', description: 'Actively developing opportunities for international manufacturers and technology providers.', keyword: 'Market' },
    { number: '04', title: 'Project-Based Approach', description: 'Developing opportunities around real customer requirements and projects.', keyword: 'Project' },
    { number: '05', title: 'Long-Term Partnerships', description: 'Building sustainable relationships with manufacturers, technology providers and customers.', keyword: 'Partnership' },
  ]

  const opportunityAreas = [
    {
      number: '01',
      label: 'Energy',
      title: 'Smart Energy Opportunities',
      description: 'Opportunity areas involving energy monitoring, smart metering, energy management, power monitoring and infrastructure monitoring technologies.',
      variant: 'featured',
    },
    {
      number: '02',
      label: 'Infrastructure',
      title: 'Digital Infrastructure',
      description: 'Technology opportunities supporting business, institutional and infrastructure modernisation.',
      variant: 'light',
    },
    {
      number: '03',
      label: 'Education',
      title: 'Education Technology',
      description: 'Opportunities involving smart learning, STEM, robotics, AI education, innovation laboratories and technical training.',
      variant: 'teal',
    },
    {
      number: '04',
      label: 'Workplace',
      title: 'Workplace & Collaboration',
      description: 'Project-oriented opportunities involving modern meeting environments, collaboration systems, wireless presentation, video conferencing and professional display technologies.',
      variant: 'wide',
    },
    {
      number: '05',
      label: 'Industrial',
      title: 'Industrial & Operational Technology',
      description: 'Technology opportunities related to industrial environments, operational efficiency and infrastructure performance.',
      variant: 'light',
    },
    {
      number: '06',
      label: 'Market Development',
      title: 'Market-Entry Opportunities',
      description: 'Potential pathways for international manufacturers exploring market development, representation, reseller, integration or distribution opportunities in Nigeria.',
      variant: 'dark',
    },
  ]

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: 'top 78%',
          once: true,
        },
      })

      timeline
        .from('[data-about-intro]', { y: 28, opacity: 0, duration: 0.7 })
        .from('[data-about-point]', { y: 18, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.35')
        .from('[data-about-panel]', { y: 28, opacity: 0, duration: 0.7 }, '-=0.45')
        .from('[data-about-snapshot]', { y: 14, opacity: 0, duration: 0.4, stagger: 0.08 }, '-=0.3')
    },
    { scope: aboutSectionRef }
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: solutionsSectionRef.current,
          start: 'top 78%',
          once: true,
        },
      })

      timeline
        .from('[data-solutions-intro]', { y: 26, opacity: 0, duration: 0.65 })
        .from(
          '[data-solution-card]',
          { y: 24, opacity: 0, duration: 0.55, stagger: 0.1, clearProps: 'transform,opacity' },
          '-=0.25'
        )
    },
    { scope: solutionsSectionRef }
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: partnershipsSectionRef.current,
          start: 'top 76%',
          once: true,
        },
      })

      timeline
        .from('[data-partnership-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-partnership-heading]', { y: 34, opacity: 0, duration: 0.65 }, '-=0.15')
        .from('[data-partnership-copy]', { y: 22, opacity: 0, duration: 0.5 }, '-=0.25')
        .from('[data-partnership-cta]', { y: 16, opacity: 0, duration: 0.4 }, '-=0.2')
        .from('[data-partnership-visual]', { y: 28, opacity: 0, duration: 0.65 }, '-=0.35')
        .from('[data-partnership-line]', { scaleY: 0, transformOrigin: 'top', duration: 0.8 }, '-=0.35')
        .from('[data-partnership-step]', { y: 22, opacity: 0, duration: 0.45, stagger: 0.13 }, '-=0.5')

      gsap.to('[data-partnership-visual]', {
        y: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: partnershipsSectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      })
    },
    { scope: partnershipsSectionRef }
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: marketOpportunitySectionRef.current,
          start: 'top 76%',
          once: true,
        },
      })

      timeline
        .from('[data-market-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-market-heading-line]', { y: 38, opacity: 0, duration: 0.6, stagger: 0.09 }, '-=0.15')
        .from('[data-market-copy]', { y: 22, opacity: 0, duration: 0.5 }, '-=0.25')
        .from('[data-market-statement]', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('[data-market-need]', { y: 26, opacity: 0, duration: 0.45, stagger: 0.1 }, '-=0.3')
        .from('[data-market-number]', { x: -10, opacity: 0, duration: 0.3, stagger: 0.1 }, '-=1.0')
        .from('[data-market-divider]', { scaleX: 0, transformOrigin: 'left center', duration: 0.35, stagger: 0.1 }, '-=0.75')

      gsap.fromTo(
        '[data-market-progress]',
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-market-needs]',
            start: 'top 72%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        }
      )

      gsap.to('[data-market-graphic]', {
        y: -14,
        ease: 'none',
        scrollTrigger: {
          trigger: marketOpportunitySectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      })
    },
    { scope: marketOpportunitySectionRef }
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: industriesSectionRef.current,
          start: 'top 76%',
          once: true,
        },
      })

      timeline
        .from('[data-industries-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-industries-heading]', { y: 32, opacity: 0, duration: 0.65 }, '-=0.15')
        .from('[data-industries-copy]', { y: 22, opacity: 0, duration: 0.5 }, '-=0.25')
        .from('[data-industry-row]', { y: 28, opacity: 0, duration: 0.42, stagger: 0.09 }, '-=0.25')
        .from('[data-industry-number]', { x: -12, opacity: 0, duration: 0.3, stagger: 0.09 }, '-=0.88')
        .from('[data-industry-divider]', { scaleX: 0, transformOrigin: 'left center', duration: 0.3, stagger: 0.09 }, '-=0.68')
    },
    { scope: industriesSectionRef }
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: approachSectionRef.current,
          start: 'top 76%',
          once: true,
        },
      })

      timeline
        .from('[data-approach-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-approach-heading]', { y: 32, opacity: 0, duration: 0.65 }, '-=0.15')
        .from('[data-approach-copy]', { y: 22, opacity: 0, duration: 0.5 }, '-=0.25')
        .from('[data-approach-line-horizontal]', { scaleX: 0, transformOrigin: 'left center', duration: 0.8 }, '-=0.2')
        .from('[data-approach-line-vertical]', { scaleY: 0, transformOrigin: 'top', duration: 0.8 }, '<')
        .from('[data-approach-step]', { y: 28, opacity: 0, duration: 0.48, stagger: 0.13 }, '-=0.5')
        .from('[data-approach-number]', { scale: 0.9, opacity: 0, duration: 0.3, stagger: 0.13 }, '-=1.05')
        .from('[data-approach-outro]', { y: 18, opacity: 0, duration: 0.5 }, '-=0.2')
    },
    { scope: approachSectionRef }
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: whyVersataSectionRef.current,
          start: 'top 76%',
          once: true,
        },
      })

      timeline
        .from('[data-why-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-why-heading]', { y: 32, opacity: 0, duration: 0.65 }, '-=0.15')
        .from('[data-why-copy]', { y: 22, opacity: 0, duration: 0.5 }, '-=0.25')
        .from('[data-why-item]', { y: 30, opacity: 0, duration: 0.46, stagger: 0.11 }, '-=0.2')
        .from('[data-why-number]', { x: -12, opacity: 0, duration: 0.3, stagger: 0.11 }, '-=0.9')
        .from('[data-why-divider]', { scaleX: 0, transformOrigin: 'left center', duration: 0.3, stagger: 0.11 }, '-=0.7')
        .from('[data-why-keyword]', { yPercent: 16, opacity: 0, duration: 0.4, stagger: 0.08 }, '-=0.8')
    },
    { scope: whyVersataSectionRef }
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: opportunitiesSectionRef.current,
          start: 'top 78%',
          once: true,
        },
      })

      timeline
        .from('[data-opportunities-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-opportunities-heading]', { y: 30, opacity: 0, duration: 0.6 }, '-=0.15')
        .from('[data-opportunities-copy]', { y: 20, opacity: 0, duration: 0.5 }, '-=0.25')
        .from(
          '[data-opportunity-block]',
          {
            y: 30,
            opacity: 0,
            duration: 0.55,
            stagger: 0.08,
            clearProps: 'transform,opacity',
          },
          '-=0.2'
        )
        .from(
          '[data-opportunities-cta]',
          { y: 16, opacity: 0, duration: 0.4, clearProps: 'transform,opacity' },
          '-=0.15'
        )
    },
    { scope: opportunitiesSectionRef }
  )

  return (
    <div className="min-h-screen bg-[#F4F5F2] text-[#102A56]">
      <SEO
        title="Versata Digital Solutions | Technology Integration & Market Development"
        description="Versata connects international technology with practical energy, infrastructure, industrial and institutional opportunities in Nigeria and West Africa."
      />

      {/* Main Hero Component */}
      <Hero />

      {/* About Versata */}
      <section
        ref={aboutSectionRef}
        aria-labelledby="about-versata-heading"
        className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          <div data-about-intro className="lg:col-span-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
              Who We Are
            </p>
            <h2
              id="about-versata-heading"
              className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#102A56] sm:text-5xl lg:text-[56px]"
            >
              Bridging Global Technology With Local African Market Requirements
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-[17px]">
              Versata Digital Solutions is a Nigerian technology and market-development company working to connect relevant international technologies with practical local requirements.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500 sm:text-[15px]">
              We work across customer engagement, project development, technology sourcing, local coordination and market development to help international manufacturers and local organisations turn technology opportunities into practical projects.
            </p>

            <div className="mt-8 border-t border-slate-200">
              {aboutPoints.map((point, index) => (
                <div
                  key={point.title}
                  data-about-point
                  className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-slate-200 py-4 sm:grid-cols-[2.75rem_1fr] sm:gap-4"
                >
                  <span className="pt-0.5 text-xs font-bold text-[#00AFA9]">0{index + 1}</span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.11em] text-[#102A56]">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-xs leading-5 text-slate-500 sm:text-[13px]">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-[#084d3c] px-5 py-3 text-xs font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#063b2e] hover:shadow-md active:scale-98"
            >
              Learn More About Versata
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div data-about-panel className="relative overflow-hidden bg-[#102A56] px-6 py-8 text-white sm:px-8 sm:py-10 lg:col-span-6 lg:mt-6">
            <div className="pointer-events-none absolute -right-14 top-0 h-52 w-52 border border-[#35D0C5]/30" />
            <div className="pointer-events-none absolute right-8 top-8 h-24 w-24 border border-white/10" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-2/3 bg-[#00AFA9]" />

            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">
                The Versata Perspective
              </p>
              <p className="mt-10 max-w-md text-2xl font-medium leading-snug tracking-[-0.025em] text-white sm:text-3xl">
                Practical technology opportunities, shaped for the Nigerian market.
              </p>

              <div className="mt-12 grid grid-cols-2 border-l border-t border-white/15">
                {companySnapshot.map((item) => (
                  <div
                    key={item.label}
                    data-about-snapshot
                    className="min-h-28 border-b border-r border-white/15 px-4 py-5 sm:px-5"
                  >
                    <p className="text-sm font-bold uppercase tracking-[0.06em] text-[#35D0C5] sm:text-base">
                      {item.value}
                    </p>
                    <p className="mt-2 max-w-28 text-[11px] leading-4 text-slate-300 sm:text-xs">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions */}
      <section
        ref={solutionsSectionRef}
        aria-labelledby="key-solutions-heading"
        className="border-y border-slate-200/80 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div data-solutions-intro className="grid gap-6 border-b border-slate-200 pb-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                Capabilities
              </p>
              <h2
                id="key-solutions-heading"
                className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[#102A56] sm:text-5xl"
              >
                From Market Opportunity to Local Deployment
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500 sm:text-[15px] lg:col-span-4 lg:pb-1">
              Versata supports technology companies and organisations across the commercial and technical stages required to develop practical projects in Nigeria.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:gap-5">
            {solutions.map((solution) => (
              <article
                key={solution.number}
                data-solution-card
                className={`group relative flex min-h-72 flex-col overflow-hidden border p-6 transition-all duration-300 sm:p-8 ${
                  solution.featured
                    ? 'border-[#102A56] bg-[#102A56] text-white hover:-translate-y-1 hover:border-[#00AFA9]'
                    : 'border-slate-200 bg-[#F4F5F2] text-[#102A56] hover:-translate-y-1 hover:border-[#00AFA9]'
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 border transition-transform duration-500 group-hover:scale-110 ${
                    solution.featured ? 'border-[#35D0C5]/35' : 'border-[#1557B0]/15'
                  }`}
                />
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${
                    solution.featured ? 'bg-[#00AFA9]' : 'bg-[#1557B0]'
                  }`}
                />

                <div className="relative flex items-start justify-between gap-6">
                  <span className={`text-xs font-bold tracking-[0.16em] ${solution.featured ? 'text-[#35D0C5]' : 'text-[#00AFA9]'}`}>
                    {solution.number}
                  </span>
                  <span className={`h-px w-12 transition-all duration-300 group-hover:w-16 ${solution.featured ? 'bg-white/30' : 'bg-slate-300'}`} />
                </div>

                <div className="relative mt-auto pt-14">
                  <h3 className="max-w-md text-xl font-bold leading-tight tracking-[-0.025em] sm:text-2xl">
                    {solution.title}
                  </h3>
                  <p className={`mt-4 max-w-md text-sm leading-6 ${solution.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                    {solution.description}
                  </p>
                  <Link
                    to="/solutions"
                    className={`mt-7 inline-flex items-center gap-2 text-xs font-bold transition-colors ${
                      solution.featured ? 'text-[#35D0C5] hover:text-white' : 'text-[#1557B0] hover:text-[#0B3D91]'
                    }`}
                  >
                    Explore Solution
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* International Technology Partnerships */}
      <section
        ref={partnershipsSectionRef}
        aria-labelledby="partnerships-heading"
        className="bg-[#071525] text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24 xl:gap-24">
          <div className="relative lg:col-span-6">
            <p data-partnership-eyebrow className="text-[11px] font-bold uppercase tracking-[0.19em] text-[#35D0C5]">
              International Technology Partnerships
            </p>
            <h2
              id="partnerships-heading"
              data-partnership-heading
              className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[52px]"
            >
              Bringing Global Innovation Closer to the Nigerian Market
            </h2>
            <p data-partnership-copy className="mt-6 max-w-xl text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
              Versata works with selected international manufacturers and technology companies to identify market opportunities, develop customer relationships and build practical technology projects within Nigeria.
            </p>
            <Link
              data-partnership-cta
              to="/partnerships"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#00AFA9] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#008F8A] active:scale-98"
            >
              Become a Technology Partner
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>

            <div data-partnership-visual className="relative mt-12 min-h-44 overflow-hidden border border-white/15 bg-[#0D2138] p-5 sm:min-h-48 sm:p-6">
              <div className="absolute inset-y-0 left-0 w-1 bg-[#00AFA9]" />
              <img
                src={partnershipEmblem}
                alt="Abstract Versata ribbon mark"
                className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 object-contain opacity-55 sm:-right-4 sm:-top-24 sm:h-80 sm:w-80"
                loading="lazy"
              />
              <div className="relative max-w-48">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#35D0C5]">A Local Market Lens</p>
                <p className="mt-4 text-lg font-medium leading-snug text-white sm:text-xl">
                  From market exploration to practical technology opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pt-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.19em] text-slate-400">Partnership Model</p>
            <div className="relative mt-7">
              <div data-partnership-line aria-hidden="true" className="absolute bottom-6 left-[1.05rem] top-6 w-px origin-top bg-[#35D0C5]/50 sm:left-[1.25rem]" />
              <ol className="relative space-y-1">
                {partnershipStages.map((stage) => (
                  <li key={stage.number} data-partnership-step className="grid grid-cols-[2.1rem_1fr] gap-5 py-5 sm:grid-cols-[2.5rem_1fr] sm:gap-6 sm:py-6">
                    <span className="relative z-10 flex h-[2.1rem] w-[2.1rem] items-center justify-center border border-[#35D0C5]/50 bg-[#071525] text-[10px] font-bold text-[#35D0C5] sm:h-10 sm:w-10">
                      {stage.number}
                    </span>
                    <div className="border-b border-white/12 pb-5 sm:pb-6">
                      <h3 className="text-base font-bold tracking-[-0.015em] text-white sm:text-lg">{stage.title}</h3>
                      <p className="mt-2 max-w-md text-xs leading-5 text-slate-400 sm:text-[13px] sm:leading-6">
                        {stage.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Local execution capability */}
      <section
        ref={marketOpportunitySectionRef}
        aria-labelledby="market-opportunity-heading"
        className="bg-[#F4F5F2]"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-28 xl:gap-24">
          <div className="relative self-start lg:sticky lg:top-28 lg:col-span-5">
            <p data-market-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
              How We Support Projects
            </p>
            <h2
              id="market-opportunity-heading"
              className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]"
            >
              <span data-market-heading-line className="block">Local Support Beyond</span>
              <span data-market-heading-line className="block">the Initial Sale</span>
            </h2>
            <p data-market-copy className="mt-6 max-w-lg text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
              Practical technology projects require more than an initial introduction. Versata supports local coordination between customers, manufacturers and suitable technical partners as opportunities develop.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7">
              Our role is to coordinate and support the pathway; specialist engineering and installation work may be undertaken through manufacturers and technical partners where appropriate.
            </p>

            <div data-market-graphic aria-hidden="true" className="relative mt-10 h-36 max-w-md overflow-hidden border-y border-slate-200 sm:h-40">
              <span className="absolute -left-1 top-1/2 -translate-y-1/2 text-[128px] font-bold leading-none tracking-[-0.12em] text-[#E8F0FC] sm:text-[146px]">NG</span>
              <span className="absolute inset-y-0 left-[29%] w-px bg-[#00AFA9]/35" />
              <span className="absolute inset-x-0 top-1/2 h-px bg-[#1557B0]/15" />
              <span className="absolute bottom-5 right-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1557B0]">Local Project Support</span>
            </div>

            <p data-market-statement className="mt-8 max-w-md border-l-2 border-[#00AFA9] pl-4 text-lg font-medium leading-snug tracking-[-0.02em] text-[#102A56] sm:text-xl">
              Local coordination that helps turn relevant technology into practical project activity.
            </p>
          </div>

          <div data-market-needs className="relative lg:col-span-7 lg:pt-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Execution Capability</p>
            <div className="relative mt-5">
              <div data-market-progress aria-hidden="true" className="absolute bottom-6 left-[1.05rem] top-6 w-px origin-top bg-[#00AFA9]/60 sm:left-[1.25rem]" />
              <ol className="relative">
                {marketNeeds.map((need) => (
                  <li key={need.number} data-market-need className="grid grid-cols-[2.1rem_1fr] gap-5 py-5 sm:grid-cols-[2.5rem_1fr] sm:gap-7 sm:py-6">
                    <span data-market-number className="relative z-10 flex h-[2.1rem] w-[2.1rem] items-center justify-center bg-[#F4F5F2] text-[10px] font-bold text-[#1557B0] ring-1 ring-[#1557B0]/25 sm:h-10 sm:w-10">
                      {need.number}
                    </span>
                    <div>
                      <h3 className="text-base font-bold tracking-[-0.015em] text-[#102A56] sm:text-lg">{need.title}</h3>
                      <p className="mt-2 max-w-lg text-xs leading-5 text-slate-500 sm:text-[13px] sm:leading-6">
                        {need.description}
                      </p>
                      <div data-market-divider aria-hidden="true" className="mt-5 h-px w-full bg-slate-200 sm:mt-6" />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve / Industries */}
      <section
        ref={industriesSectionRef}
        aria-labelledby="industries-heading"
        className="border-y border-slate-200/80 bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24 xl:gap-20">
          <div className="relative self-start lg:sticky lg:top-28 lg:col-span-4">
            <p data-industries-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
              Who We Serve
            </p>
            <h2
              id="industries-heading"
              data-industries-heading
              className="mt-4 max-w-md text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[50px]"
            >
              Technology Opportunities Across Diverse Industries
            </h2>
            <p data-industries-copy className="mt-6 max-w-md text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
              Versata works across a range of sectors where innovative technology can support infrastructure, operations, learning, energy management and organisational performance.
            </p>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7">
              Each opportunity begins with understanding the specific requirements of the organisation and identifying technologies that are appropriate for that environment.
            </p>
            <p className="mt-8 border-l-2 border-[#00AFA9] pl-4 text-sm font-medium leading-6 text-[#102A56]">
              From corporate environments to infrastructure and public-sector projects.
            </p>
            <p aria-hidden="true" className="mt-10 hidden text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300 lg:block">
              Industry Index / 01-08
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-slate-200">
              {industries.map((industry) => (
                <Link
                  key={industry.number}
                  to="/industries"
                  data-industry-row
                  className="group relative grid grid-cols-[2.5rem_1fr_auto] gap-3 py-5 outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#00AFA9]/30 focus-visible:ring-inset sm:grid-cols-[3.25rem_minmax(12rem,1.15fr)_minmax(12rem,0.85fr)_auto] sm:gap-5 sm:py-7"
                  aria-label={`Explore industries: ${industry.title}`}
                >
                  <span data-industry-number className="pt-0.5 text-xs font-bold tracking-[0.12em] text-[#00AFA9]">
                    {industry.number}
                  </span>
                  <h3 className="text-base font-bold leading-tight tracking-[-0.02em] text-[#102A56] transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:text-lg">
                    {industry.title}
                  </h3>
                  <p className="col-start-2 text-xs leading-5 text-slate-500 transition-colors duration-200 group-hover:text-slate-700 group-focus-visible:text-slate-700 sm:col-start-auto sm:text-[13px] sm:leading-6">
                    {industry.description}
                  </p>
                  <ArrowRight className="mt-0.5 h-4 w-4 text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#1557B0] group-focus-visible:translate-x-1 group-focus-visible:text-[#1557B0]" aria-hidden="true" />
                  <span data-industry-divider aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-slate-200 transition-colors duration-200 group-hover:bg-[#00AFA9] group-focus-visible:bg-[#00AFA9]" />
                </Link>
              ))}
            </div>

            <Link
              to="/industries"
              className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-[#1557B0] transition-colors hover:text-[#0B3D91]"
            >
              Explore Industries
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section
        ref={approachSectionRef}
        aria-labelledby="approach-heading"
        className="overflow-hidden bg-[#102A56] text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <p data-approach-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">
                Our Approach
              </p>
              <h2
                id="approach-heading"
                data-approach-heading
                className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[54px]"
              >
                From Requirement to Long-Term Opportunity
              </h2>
            </div>
            <p data-approach-copy className="max-w-md text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7 lg:col-span-4 lg:pb-1">
              Versata approaches technology opportunities through a structured process that begins with understanding the requirement and develops toward practical delivery and long-term partnership.
            </p>
          </div>

          <div className="relative mt-14 lg:mt-16">
            <div data-approach-line-horizontal aria-hidden="true" className="absolute left-[10%] right-[10%] top-5 hidden h-px origin-left bg-[#35D0C5]/60 lg:block" />
            <div data-approach-line-vertical aria-hidden="true" className="absolute bottom-7 left-5 top-5 w-px origin-top bg-[#35D0C5]/60 lg:hidden" />
            <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6 xl:gap-8">
              {approachSteps.map((step) => (
                <li key={step.number} data-approach-step className="relative grid grid-cols-[2.5rem_1fr] gap-5 lg:block">
                  <span data-approach-number className="relative z-10 flex h-10 w-10 items-center justify-center border border-[#35D0C5]/60 bg-[#102A56] text-[10px] font-bold tracking-[0.1em] text-[#35D0C5]">
                    {step.number}
                  </span>
                  <div className="lg:mt-8">
                    <h3 className="text-base font-bold tracking-[-0.02em] text-white sm:text-lg">{step.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-[13px] sm:leading-6">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <p data-approach-outro className="mt-14 max-w-2xl border-t border-white/15 pt-6 text-sm font-medium leading-6 text-slate-200 sm:text-[15px]">
            A process designed around practical requirements, appropriate technology and long-term relationships.
          </p>
        </div>
      </section>

      {/* Why Versata */}
      <section
        ref={whyVersataSectionRef}
        aria-labelledby="why-versata-heading"
        className="overflow-hidden bg-[#E8F0FC]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <p data-why-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">
                Why Versata
              </p>
              <h2
                id="why-versata-heading"
                data-why-heading
                className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]"
              >
                Built Around Technology, Opportunity and Partnership
              </h2>
            </div>
            <div data-why-copy className="max-w-md text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 lg:col-span-4 lg:pb-1">
              <p>Versata combines local market understanding, technology sourcing and opportunity development to connect relevant solutions with real customer and project requirements.</p>
              <p className="mt-3 text-slate-500">Our focus is not simply on supplying products, but on developing practical technology opportunities and sustainable relationships.</p>
            </div>
          </div>

          <div className="mt-12 border-t border-[#1557B0]/20 sm:mt-14">
            {differentiators.map((item) => (
              <article key={item.number} data-why-item className="group relative grid overflow-hidden border-b border-[#1557B0]/20 py-6 sm:grid-cols-[4rem_minmax(14rem,1fr)_minmax(14rem,0.85fr)] sm:gap-6 sm:py-8">
                <span data-why-keyword aria-hidden="true" className="pointer-events-none absolute -right-3 -top-4 hidden text-7xl font-bold uppercase leading-none tracking-[-0.08em] text-[#1557B0]/[0.06] lg:block">
                  {item.keyword}
                </span>
                <span data-why-number className="relative text-xs font-bold tracking-[0.13em] text-[#1557B0]">{item.number}</span>
                <h3 className="relative mt-3 text-2xl font-bold leading-tight tracking-[-0.03em] text-[#102A56] transition-transform duration-200 group-hover:translate-x-1 sm:mt-0 sm:text-3xl">
                  {item.title}
                </h3>
                <p className="relative mt-3 max-w-md text-xs leading-5 text-slate-600 sm:mt-1 sm:text-[13px] sm:leading-6">
                  {item.description}
                </p>
                <span data-why-divider aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#1557B0]/20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Opportunities */}
      <section
        ref={opportunitiesSectionRef}
        aria-labelledby="opportunities-heading"
        className="bg-[#F4F5F2]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <p data-opportunities-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                Projects & Opportunities
              </p>
              <h2
                id="opportunities-heading"
                data-opportunities-heading
                className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]"
              >
                Turning Technology Potential Into Practical Market Opportunities
              </h2>
            </div>
            <div data-opportunities-copy className="max-w-md text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 lg:col-span-4 lg:pb-1">
              <p>Versata identifies practical applications for innovative international technologies and explores how they can connect with organisations, institutions and project opportunities within the Nigerian market.</p>
              <p className="mt-3 text-slate-500">Our project-oriented model allows us to develop opportunities around actual requirements rather than relying solely on locally stocked products.</p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {opportunityAreas.map((area) => {
              const variants = {
                featured: 'bg-[#102A56] text-white md:col-span-2 md:row-span-2 md:min-h-[34rem]',
                light: 'bg-white text-[#102A56]',
                teal: 'bg-[#DDF7F5] text-[#102A56]',
                wide: 'bg-[#E8F0FC] text-[#102A56] md:col-span-2',
                dark: 'bg-[#084d3c] text-white',
              }
              const isDark = area.variant === 'featured' || area.variant === 'dark'

              return (
                <article
                  key={area.number}
                  data-opportunity-block
                  className={`group relative flex min-h-64 flex-col overflow-hidden border border-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00AFA9] sm:p-7 ${variants[area.variant as keyof typeof variants]}`}
                >
                  <div aria-hidden="true" className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 border transition-transform duration-500 group-hover:scale-110 ${isDark ? 'border-white/15' : 'border-[#1557B0]/15'}`} />
                  <div className="relative flex items-start justify-between gap-5">
                    <span data-opportunity-number className={`text-xs font-bold tracking-[0.14em] ${isDark ? 'text-[#35D0C5]' : 'text-[#1557B0]'}`}>{area.number}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.14em] ${isDark ? 'text-white/55' : 'text-slate-400'}`}>Opportunity Area</span>
                  </div>
                  <div className="relative mt-auto pt-14">
                    <p className={`text-[10px] font-bold uppercase tracking-[0.17em] ${isDark ? 'text-[#35D0C5]' : 'text-[#00AFA9]'}`}>{area.label}</p>
                    <h3 className="mt-3 max-w-md text-xl font-bold leading-tight tracking-[-0.025em] sm:text-2xl">{area.title}</h3>
                    <p className={`mt-4 max-w-md text-xs leading-5 sm:text-[13px] sm:leading-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{area.description}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <Link
            data-opportunities-cta
            to="/opportunities"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#084d3c] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#063b2e] active:scale-98"
          >
            Explore Opportunities
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

    

     
    </div>
  )
}
