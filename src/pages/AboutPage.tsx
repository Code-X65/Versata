import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'
import { PageHero } from '@/components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const snapshot = [
  { value: '2022', label: 'Operating Experience' },
  { value: '2025', label: 'Corporate Registration' },
  { value: 'Lagos', label: 'Based in Nigeria' },
  { value: 'Nigeria + West Africa', label: 'Market Focus' },
]

const companyRoles = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand local requirements, customer needs and the specific problem to be addressed.',
  },
  {
    number: '02',
    title: 'Identify',
    description: 'Identify relevant technologies, products and suitable technology providers.',
  },
  {
    number: '03',
    title: 'Connect',
    description: 'Connect organisations with manufacturers, technology companies and solution providers.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Help develop commercially and technically appropriate technology opportunities and projects.',
  },
]

const storyMilestones = [
  {
    marker: '2022',
    title: 'Operations Begin',
    description: 'Versata begins operating with a focus on identifying technology opportunities and supporting organisations in Nigeria.',
  },
  {
    marker: '2023',
    title: 'Developing the Model',
    description: 'The business develops around technology opportunity identification, business development, technology sourcing and practical technology solutions.',
  },
  {
    marker: '2025',
    title: 'Formal Corporate Registration',
    description: 'Versata is formally registered as a corporate organisation.',
  },
  {
    marker: 'Today',
    title: 'Strategic Partnership Focus',
    description: 'Versata is expanding its focus toward strategic relationships with international manufacturers and technology providers seeking opportunities in Nigeria.',
  },
  {
    marker: 'Nigeria + West Africa',
    title: 'Market Direction',
    description: 'Developing opportunities within Nigeria and the wider West African market.',
  },
]

const approachStages = [
  { number: '01', title: 'Understand', lead: 'Start with the requirement.', description: 'Understand the customer’s requirements and the specific problem that needs to be addressed.' },
  { number: '02', title: 'Identify', lead: 'Find appropriate technology.', description: 'Identify suitable technologies, products and potential technology partners.' },
  { number: '03', title: 'Develop', lead: 'Shape the opportunity.', description: 'Work with customers and manufacturers to develop commercially and technically appropriate opportunities.' },
  { number: '04', title: 'Deliver', lead: 'Coordinate the pathway to implementation.', description: 'Where appropriate, coordinate sourcing, procurement and implementation through suitable partners.' },
  { number: '05', title: 'Build', lead: 'Develop long-term relationships.', description: 'Aim to build long-term relationships with customers and international technology providers.' },
]

const differentiators = [
  { number: '01', title: 'Local Market Focus', description: 'Based in Lagos and focused on understanding opportunities within the Nigerian market.', detail: 'Local context matters when identifying whether a technology is relevant to a specific organisation or opportunity.' },
  { number: '02', title: 'Technology-Focused', description: 'Centred on innovative technology products and practical solutions.', detail: 'The focus is on practical relevance rather than generic product volume.' },
  { number: '03', title: 'Market Development', description: 'Actively developing opportunities for international manufacturers rather than operating simply as a conventional trading company.', detail: 'This approach centres on identifying and developing appropriate market opportunities.' },
  { number: '04', title: 'Project-Based Approach', description: 'Developing opportunities around actual customer requirements and projects.', detail: 'Requirements help shape which technologies and pathways are appropriate.' },
  { number: '05', title: 'Long-Term Partnerships', description: 'Building sustainable relationships with manufacturers, technology providers and customers.', detail: 'Relationships support the development of practical opportunities over time.' },
]

const marketLevels = [
  { number: '01', place: 'Lagos', title: 'Our Base', description: 'Versata Digital Solutions is based in Lagos, Nigeria.' },
  { number: '02', place: 'Nigeria', title: 'Primary Market Focus', description: 'Serving organisations across Nigeria and identifying technology, project and partnership opportunities within the local market.' },
  { number: '03', place: 'West Africa', title: 'Developing Opportunity', description: 'Exploring and developing wider regional opportunities as relationships with international manufacturers and technology providers expand.' },
]

export const AboutPage: React.FC = () => {
  const overviewRef = useRef<HTMLElement>(null)
  const storyRef = useRef<HTMLElement>(null)
  const visionMissionRef = useRef<HTMLElement>(null)
  const approachRef = useRef<HTMLElement>(null)
  const whyVersataRef = useRef<HTMLElement>(null)
  const marketFocusRef = useRef<HTMLElement>(null)
  const closingCtaRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: overviewRef.current,
          start: 'top 76%',
          once: true,
        },
      })

      timeline
        .from('[data-overview-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-overview-heading]', { y: 30, opacity: 0, duration: 0.65 }, '-=0.15')
        .from('[data-overview-copy]', { y: 22, opacity: 0, duration: 0.48, stagger: 0.1 }, '-=0.25')
        .from('[data-overview-statement]', { x: -18, opacity: 0, duration: 0.45 }, '-=0.2')
        .from('[data-overview-role]', { y: 28, opacity: 0, duration: 0.45, stagger: 0.12 }, '-=0.15')
        .from('[data-overview-divider]', { scaleX: 0, transformOrigin: 'left center', duration: 0.3, stagger: 0.12 }, '-=0.75')
    },
    { scope: overviewRef }
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 76%',
          once: true,
        },
      })

      timeline
        .from('[data-story-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-story-heading]', { y: 32, opacity: 0, duration: 0.65 }, '-=0.15')
        .from('[data-story-copy]', { y: 22, opacity: 0, duration: 0.48, stagger: 0.1 }, '-=0.25')
        .from('[data-story-milestone]', { y: 26, opacity: 0, duration: 0.45, stagger: 0.12 }, '-=0.15')
        .from('[data-story-marker]', { x: -12, opacity: 0, duration: 0.3, stagger: 0.12 }, '-=0.85')

      gsap.fromTo(
        '[data-story-line]',
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-story-timeline]',
            start: 'top 72%',
            end: 'bottom 58%',
            scrub: 0.6,
          },
        }
      )
    },
    { scope: storyRef }
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: visionMissionRef.current,
          start: 'top 76%',
          once: true,
        },
      })

      timeline
        .from('[data-vm-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-vm-heading]', { y: 30, opacity: 0, duration: 0.65 }, '-=0.15')
        .from('[data-vm-vision]', { y: 30, opacity: 0, duration: 0.55 }, '-=0.2')
        .from('[data-vm-divider]', { scaleX: 0, transformOrigin: 'left center', duration: 0.65 }, '-=0.15')
        .from('[data-vm-mission]', { y: 30, opacity: 0, duration: 0.55 }, '-=0.25')
        .from('[data-vm-principle]', { y: 18, opacity: 0, duration: 0.45 }, '-=0.2')
    },
    { scope: visionMissionRef }
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: { trigger: approachRef.current, start: 'top 76%', once: true },
      })

      timeline
        .from('[data-approach-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-approach-heading]', { y: 30, opacity: 0, duration: 0.65 }, '-=0.15')
        .from('[data-approach-copy]', { y: 22, opacity: 0, duration: 0.48, stagger: 0.1 }, '-=0.25')
        .from('[data-approach-statement]', { x: -16, opacity: 0, duration: 0.45 }, '-=0.2')
        .from('[data-approach-stage]', { y: 26, opacity: 0, duration: 0.43, stagger: 0.12 }, '-=0.15')
        .from('[data-approach-number]', { x: -12, opacity: 0, duration: 0.3, stagger: 0.12 }, '-=0.78')
        .from('[data-approach-closing]', { y: 18, opacity: 0, duration: 0.45 }, '-=0.15')

      gsap.fromTo('[data-approach-line]', { scaleY: 0, transformOrigin: 'top' }, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: '[data-approach-process]', start: 'top 72%', end: 'bottom 58%', scrub: 0.6 },
      })
    },
    { scope: approachRef }
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: { trigger: whyVersataRef.current, start: 'top 76%', once: true },
      })

      timeline
        .from('[data-why-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-why-heading]', { y: 30, opacity: 0, duration: 0.65 }, '-=0.15')
        .from('[data-why-copy]', { y: 22, opacity: 0, duration: 0.48, stagger: 0.1 }, '-=0.25')
        .from('[data-why-item]', { y: 28, opacity: 0, duration: 0.44, stagger: 0.1 }, '-=0.2')
        .from('[data-why-number]', { x: -12, opacity: 0, duration: 0.3, stagger: 0.1 }, '-=0.75')
        .from('[data-why-divider]', { scaleX: 0, transformOrigin: 'left center', duration: 0.3, stagger: 0.1 }, '-=0.6')
        .from('[data-why-closing]', { y: 18, opacity: 0, duration: 0.45 }, '-=0.15')
    },
    { scope: whyVersataRef }
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: { trigger: marketFocusRef.current, start: 'top 76%', once: true },
      })

      timeline
        .from('[data-market-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-market-heading]', { y: 30, opacity: 0, duration: 0.65 }, '-=0.15')
        .from('[data-market-copy]', { y: 22, opacity: 0, duration: 0.48, stagger: 0.1 }, '-=0.25')
        .from('[data-market-level]', { y: 24, opacity: 0, duration: 0.45, stagger: 0.12 }, '-=0.15')
        .from('[data-market-number]', { x: -12, opacity: 0, duration: 0.3, stagger: 0.12 }, '-=0.75')
        .from('[data-market-line]', { scaleY: 0, transformOrigin: 'top', duration: 0.7 }, '-=0.75')
    },
    { scope: marketFocusRef }
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: { trigger: closingCtaRef.current, start: 'top 76%', once: true },
      })

      timeline
        .from('[data-closing-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-closing-heading]', { y: 30, opacity: 0, duration: 0.65 }, '-=0.15')
        .from('[data-closing-copy]', { y: 22, opacity: 0, duration: 0.48 }, '-=0.25')
        .from('[data-closing-option]', { y: 24, opacity: 0, duration: 0.45, stagger: 0.1 }, '-=0.15')
        .from('[data-closing-divider]', { scaleX: 0, transformOrigin: 'left center', duration: 0.45 }, '-=0.35')
    },
    { scope: closingCtaRef }
  )

  return (
    <div className="bg-[#F4F5F2] text-[#102A56]">
      <SEO
        title="About Versata | Versata Digital Solutions"
        description="Learn about Versata Digital Solutions, a Nigerian technology solutions and market-development company based in Lagos."
      />

      {/* Redesigned Hero matching Homepage layout */}
      <PageHero
        title="Connecting Technology, Markets and Opportunity"
        description="Versata Digital Solutions is a Nigerian technology solutions and market-development company connecting organisations with innovative products, technologies and practical solutions for real business, institutional and infrastructure needs."
        ctaText="Explore Our Story"
        ctaLink="#company-overview"
        secondaryCtaText="Get In Touch"
        secondaryCtaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=2400&q=85"
        imageAlt="Field engineers and technical specialists conducting equipment inspection"
      />

      {/* Company Snapshot Grid Bar */}
      <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-10 lg:px-12">
        <div id="company-snapshot" className="grid grid-cols-2 rounded-xl border border-slate-200 bg-white shadow-xs sm:grid-cols-4 overflow-hidden">
          {snapshot.map((item) => (
            <div key={item.label} className="border-b sm:border-b-0 border-r border-slate-200/80 p-5 sm:p-6 text-center transition-colors hover:bg-slate-50/70">
              <p className="text-xl sm:text-2xl font-extrabold text-[#102A56] tracking-tight">{item.value}</p>
              <p className="mt-1 text-xs font-medium text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={overviewRef}
        aria-labelledby="company-overview-heading"
        className="border-t border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-24">
            <div className="lg:col-span-6">
              <p data-overview-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                Who We Are
              </p>
              <h2
                id="company-overview-heading"
                data-overview-heading
                className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]"
              >
                Connecting Relevant Technology With Real Market Needs
              </h2>
            </div>
            <div className="max-w-xl space-y-5 lg:col-span-6 lg:pt-8">
              <p data-overview-copy className="text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                Versata Digital Solutions connects organisations with relevant technologies, technology providers and international manufacturers that can address real business, institutional and infrastructure requirements.
              </p>
              <p data-overview-copy className="text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7">
                Our work combines local market understanding, business development and technology sourcing to identify opportunities and help develop practical technology solutions for the Nigerian market.
              </p>
              <p data-overview-statement className="border-l-2 border-[#00AFA9] pl-4 text-lg font-medium leading-snug tracking-[-0.02em] text-[#102A56] sm:text-xl">
                We focus on matching the right technology with the right requirement and opportunity.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-200 lg:mt-20">
            <ol className="grid lg:grid-cols-4">
              {companyRoles.map((role) => (
                <li key={role.number} data-overview-role className="relative border-b border-slate-200 py-7 lg:border-b-0 lg:border-r lg:px-7 lg:py-0 lg:first:pl-0 lg:last:border-r-0">
                  <span className="text-xs font-bold tracking-[0.14em] text-[#1557B0]">{role.number}</span>
                  <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-[#102A56] sm:text-3xl">{role.title}</h3>
                  <p className="mt-3 max-w-xs text-xs leading-5 text-slate-500 sm:text-[13px] sm:leading-6">{role.description}</p>
                  <span data-overview-divider aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-slate-200 lg:hidden" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        ref={storyRef}
        aria-labelledby="our-story-heading"
        className="bg-[#071525] text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24 xl:gap-24">
          <div className="lg:col-span-5">
            <p data-story-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">
              Our Story
            </p>
            <h2
              id="our-story-heading"
              data-story-heading
              className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[52px]"
            >
              From Local Opportunity to Strategic Technology Partnerships
            </h2>
            <p data-story-copy className="mt-6 max-w-lg text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
              Versata Digital Solutions began operating in 2022, building its activities around technology opportunity identification, business development, technology sourcing and practical solutions for organisations in Nigeria.
            </p>
            <p data-story-copy className="mt-4 max-w-lg text-sm leading-6 text-slate-400 sm:text-[15px] sm:leading-7">
              In 2025, Versata was formally registered as a corporate organisation. Today, the company is expanding its focus toward strategic relationships with international manufacturers and technology providers seeking opportunities in Nigeria and the wider West African market.
            </p>
          </div>

          <div data-story-timeline className="relative lg:col-span-7 lg:pt-2">
            <div data-story-line aria-hidden="true" className="absolute bottom-8 left-5 top-6 w-px origin-top bg-[#35D0C5]/55 sm:left-6" />
            <ol className="relative">
              {storyMilestones.map((milestone) => (
                <li key={milestone.marker} data-story-milestone className="grid grid-cols-[2.5rem_1fr] gap-5 py-5 sm:grid-cols-[3rem_1fr] sm:gap-7 sm:py-6">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center border border-[#35D0C5]/50 bg-[#071525] sm:h-12 sm:w-12">
                    <span data-story-marker className="text-center text-[9px] font-bold uppercase leading-3 tracking-[0.08em] text-[#35D0C5] sm:text-[10px]">
                      {milestone.marker}
                    </span>
                  </span>
                  <div className="border-b border-white/12 pb-5 sm:pb-6">
                    <h3 className="text-base font-bold tracking-[-0.02em] text-white sm:text-lg">{milestone.title}</h3>
                    <p className="mt-2 max-w-lg text-xs leading-5 text-slate-400 sm:text-[13px] sm:leading-6">{milestone.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        ref={visionMissionRef}
        aria-labelledby="vision-mission-heading"
        className="overflow-hidden bg-[#F4F5F2]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p data-vm-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
              Vision & Mission
            </p>
            <h2
              id="vision-mission-heading"
              data-vm-heading
              className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]"
            >
              Connecting Innovation With Practical Opportunity
            </h2>
          </div>

          <div className="mt-14 lg:mt-16">
            <article data-vm-vision className="max-w-4xl border-l-2 border-[#00AFA9] pl-5 sm:pl-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">Vision</p>
              <p className="mt-5 text-2xl font-medium leading-snug tracking-[-0.03em] text-[#102A56] sm:text-3xl lg:text-[38px]">
                To help create stronger connections between innovative technology and practical market opportunities across Nigeria and the wider West African market.
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                Versata aims to contribute to an environment where organisations can access relevant technologies that respond to real business, institutional and infrastructure needs.
              </p>
            </article>

            <div data-vm-divider aria-hidden="true" className="my-14 h-px w-full bg-slate-300 lg:my-16" />

            <article data-vm-mission className="ml-auto max-w-4xl border-r-2 border-[#1557B0] pr-5 text-right sm:pr-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">Mission</p>
              <p className="mt-5 text-2xl font-medium leading-snug tracking-[-0.03em] text-[#102A56] sm:text-3xl lg:text-[38px]">
                To identify relevant technologies, understand local requirements, connect organisations with suitable technology providers and help develop practical technology opportunities.
              </p>
              <p className="mt-5 ml-auto max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                Through local market knowledge, business development, technology sourcing and collaboration with manufacturers and customers, Versata works to turn suitable technologies into commercially and technically appropriate opportunities.
              </p>
            </article>
          </div>

          <p data-vm-principle className="mt-16 border-t border-slate-200 pt-6 text-base font-medium tracking-[-0.015em] text-[#102A56] sm:mt-20 sm:text-lg">
            Relevant technology. Practical requirements. Long-term relationships.
          </p>
        </div>
      </section>

      <section ref={approachRef} aria-labelledby="about-approach-heading" className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24 xl:gap-24">
          <div className="self-start lg:sticky lg:top-28 lg:col-span-5">
            <p data-approach-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">Our Approach</p>
            <h2 id="about-approach-heading" data-approach-heading className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[52px]">
              A Structured Path From Requirement to Opportunity
            </h2>
            <p data-approach-copy className="mt-6 max-w-lg text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
              Versata’s approach begins with understanding the specific requirement rather than starting with a predetermined product.
            </p>
            <p data-approach-copy className="mt-4 max-w-lg text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7">
              From there, we identify appropriate technologies and potential partners, develop the opportunity with customers and manufacturers, coordinate delivery where appropriate, and work toward long-term relationships.
            </p>
            <p data-approach-statement className="mt-8 border-l-2 border-[#00AFA9] pl-4 text-lg font-medium leading-snug tracking-[-0.02em] text-[#102A56]">
              We begin with the problem, not the product.
            </p>
          </div>

          <div data-approach-process className="relative lg:col-span-7 lg:pt-1">
            <div data-approach-line aria-hidden="true" className="absolute bottom-8 left-5 top-6 w-px origin-top bg-[#00AFA9]/60 sm:left-6" />
            <ol className="relative">
              {approachStages.map((stage) => (
                <li key={stage.number} data-approach-stage className="grid grid-cols-[2.5rem_1fr] gap-5 py-6 sm:grid-cols-[3rem_1fr] sm:gap-7 sm:py-8">
                  <span data-approach-number className="relative z-10 flex h-10 w-10 items-center justify-center border border-[#00AFA9]/55 bg-white text-[10px] font-bold tracking-[0.1em] text-[#1557B0] sm:h-12 sm:w-12">{stage.number}</span>
                  <div className="border-b border-slate-200 pb-6 sm:pb-8">
                    <h3 className="text-xl font-bold tracking-[-0.025em] text-[#102A56] sm:text-2xl">{stage.title}</h3>
                    <p className="mt-2 text-sm font-medium text-[#1557B0] sm:text-[15px]">{stage.lead}</p>
                    <p className="mt-3 max-w-lg text-xs leading-5 text-slate-500 sm:text-[13px] sm:leading-6">{stage.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p data-approach-closing className="mt-8 border-l-2 border-[#1557B0] pl-4 text-sm font-medium leading-6 text-[#102A56] sm:text-[15px]">
              The objective is not simply to identify technology, but to develop appropriate opportunities and sustainable relationships around real requirements.
            </p>
          </div>
        </div>
      </section>

      <section ref={whyVersataRef} aria-labelledby="why-versata-heading" className="bg-[#E8F0FC]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-8">
              <p data-why-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">Why Versata</p>
              <h2 id="why-versata-heading" data-why-heading className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                A Market-Focused Approach to Technology Opportunity
              </h2>
            </div>
            <div data-why-copy className="max-w-md text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 lg:col-span-4 lg:pb-1">
              <p>Versata combines local market understanding, technology sourcing, business development and project-focused opportunity development.</p>
              <p className="mt-3 text-slate-500">Our approach is built around identifying technologies that are relevant to actual requirements and developing relationships that can support long-term market opportunities.</p>
            </div>
          </div>

          <ol className="mt-12 border-t border-[#1557B0]/20 sm:mt-14">
            {differentiators.map((item) => (
              <li key={item.number} data-why-item className="relative grid gap-3 overflow-hidden border-b border-[#1557B0]/20 py-6 sm:grid-cols-[4.5rem_minmax(13rem,1fr)_minmax(15rem,0.85fr)] sm:gap-6 sm:py-8">
                <span data-why-number className="relative text-xs font-bold tracking-[0.14em] text-[#1557B0]">{item.number}</span>
                <h3 className="relative text-2xl font-bold leading-tight tracking-[-0.03em] text-[#102A56] sm:text-3xl">{item.title}</h3>
                <div className="relative space-y-2">
                  <p className="text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{item.description}</p>
                  <p className="text-xs leading-5 text-slate-500 sm:text-[13px] sm:leading-6">{item.detail}</p>
                </div>
                <span data-why-divider aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#1557B0]/20" />
              </li>
            ))}
          </ol>

          <p data-why-closing className="mt-12 border-l-2 border-[#00AFA9] pl-4 text-lg font-medium leading-snug tracking-[-0.02em] text-[#102A56] sm:mt-14 sm:text-xl">
            Local understanding. Relevant technology. Project-led opportunities. Long-term relationships.
          </p>
        </div>
      </section>

      <section ref={marketFocusRef} aria-labelledby="market-focus-heading" className="overflow-hidden bg-[#102A56] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24 xl:gap-24">
          <div className="lg:col-span-6">
            <p data-market-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">Market Focus</p>
            <h2 id="market-focus-heading" data-market-heading className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[52px]">
              Rooted in Nigeria. Developing Wider Regional Opportunities.
            </h2>
            <p data-market-copy className="mt-6 max-w-xl text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
              Versata is based in Lagos and focused primarily on identifying and developing technology opportunities within the Nigerian market.
            </p>
            <p data-market-copy className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-[15px] sm:leading-7">
              As the company expands its relationships with international manufacturers and technology providers, it is also developing opportunities within the wider West African market.
            </p>
          </div>

          <div className="relative lg:col-span-6 lg:pt-2">
            <div aria-hidden="true" className="absolute -right-16 top-0 hidden h-56 w-56 border border-[#35D0C5]/20 lg:block" />
            <div data-market-line aria-hidden="true" className="absolute bottom-8 left-5 top-6 w-px origin-top bg-[#35D0C5]/60 sm:left-6" />
            <ol className="relative">
              {marketLevels.map((level) => (
                <li key={level.number} data-market-level className="grid grid-cols-[2.5rem_1fr] gap-5 py-6 sm:grid-cols-[3rem_1fr] sm:gap-7 sm:py-8">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center border border-[#35D0C5]/50 bg-[#102A56] sm:h-12 sm:w-12">
                    <span data-market-number className="text-[10px] font-bold tracking-[0.1em] text-[#35D0C5]">{level.number}</span>
                  </span>
                  <div className="border-b border-white/12 pb-6 sm:pb-8">
                    <p className={`font-bold leading-none tracking-[-0.04em] ${level.place === 'Nigeria' ? 'text-4xl text-white sm:text-5xl' : 'text-2xl text-slate-200 sm:text-3xl'}`}>{level.place}</p>
                    <h3 className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#35D0C5]">{level.title}</h3>
                    <p className="mt-3 max-w-lg text-xs leading-5 text-slate-400 sm:text-[13px] sm:leading-6">{level.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section ref={closingCtaRef} aria-labelledby="about-closing-heading" className="bg-[#F4F5F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p data-closing-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">Start a Conversation</p>
            <h2 id="about-closing-heading" data-closing-heading className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
              Let’s Build the Next Opportunity
            </h2>
            <p data-closing-copy className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
              Whether you are an organisation looking for an innovative technology solution or an international manufacturer exploring the Nigerian market, Versata welcomes the opportunity to connect.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl border-t border-slate-200 md:grid-cols-2">
            <div data-closing-option className="group border-b border-slate-200 py-8 md:border-b-0 md:border-r md:pr-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00AFA9]">For Organisations</p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[#102A56] sm:text-3xl">Have a Technology Requirement?</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">Tell us about your technology requirement or project.</p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#1557B0] transition-colors hover:text-[#0B3D91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFA9]">
                Discuss Your Requirement
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <div data-closing-option className="group py-8 md:pl-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1557B0]">For Manufacturers</p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[#102A56] sm:text-3xl">Exploring the Nigerian Market?</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">Explore a potential market-development or strategic partnership with Versata.</p>
              <Link to="/partnerships" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#1557B0] transition-colors hover:text-[#0B3D91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFA9]">
                Partner With Versata
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div data-closing-divider aria-hidden="true" className="mx-auto h-px max-w-5xl bg-slate-200" />
        </div>
      </section>
    </div>
  )
}
