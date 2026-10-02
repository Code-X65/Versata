import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageHero } from '@/components/PageHero'
import heroTechnologyImg from '@/assets/hero_technology.jpg'

gsap.registerPlugin(ScrollTrigger)

const partnershipPrinciples = [
  {
    number: '01',
    title: 'Local Market Understanding',
    description: 'Understand Nigerian market opportunities, requirements and potential customer segments.',
  },
  {
    number: '02',
    title: 'Technology Relevance',
    description: 'Focus on technologies and products that can address practical business, institutional or infrastructure needs.',
  },
  {
    number: '03',
    title: 'Opportunity Development',
    description: 'Engage potential customers and develop commercial or project opportunities around real requirements.',
  },
  {
    number: '04',
    title: 'Longer-Term Market Pathways',
    description: 'Where appropriate, successful relationships may progress toward reseller, representation, integration or distribution opportunities.',
  },
]

const partnershipStages = [
  {
    number: '01',
    title: 'Phase 1 — Market Development & Project Partner',
    lead: 'Initial cooperation focused on:',
    activities: [
      'Market research',
      'Product introduction',
      'Customer identification',
      'Project opportunities',
      'Product presentations',
      'Commercial discussions',
    ],
  },
  {
    number: '02',
    title: 'Phase 2 — Authorised Reseller / Integration Partner',
    lead: 'Subject to mutual agreement:',
    activities: [
      'Reselling',
      'Product integration',
      'Technical training',
      'Customer support',
      'Demonstration activities',
      'Local project development',
    ],
  },
  {
    number: '03',
    title: 'Phase 3 — Distribution & Market Expansion',
    lead: 'For suitable products and established relationships:',
    activities: [
      'Territory development',
      'Distribution',
      'Channel development',
      'Dealer/reseller networks',
      'Regional market expansion',
      'Long-term commercial cooperation',
    ],
  },
]

const partnerCharacteristics = [
  {
    number: '01',
    title: 'Practical Technology',
    description: 'Products or solutions designed to address real organisational, institutional, infrastructure or industrial requirements.',
  },
  {
    number: '02',
    title: 'Market Relevance',
    description: 'Technology with potential relevance to opportunities within the Nigerian market.',
  },
  {
    number: '03',
    title: 'Project Suitability',
    description: 'Solutions that can be explored around actual customer requirements and project opportunities.',
  },
  {
    number: '04',
    title: 'Partnership Potential',
    description: 'Technology companies open to developing market opportunities progressively through suitable commercial relationships.',
  },
]

const relationshipPathways = [
  'Strategic Representation',
  'Reseller Relationships',
  'Integration Opportunities',
  'Distribution Partnerships',
  'Project-Based Market Development',
]

const technologyAreas = [
  ['01', 'Smart Energy', 'Technology relating to energy monitoring, management and smarter energy infrastructure.'],
  ['02', 'Renewable Energy Technology', 'Innovative renewable-energy-related technologies with potential relevance to practical project requirements.'],
  ['03', 'Education Technology', 'Technology supporting learning, STEM, technical skills and smart educational environments.'],
  ['04', 'Robotics', 'Robotics technologies with potential applications in education, training, innovation and related environments.'],
  ['05', 'Digital Infrastructure', 'Technology supporting modern organisational, institutional and infrastructure environments.'],
  ['06', 'Industrial Technology', 'Technology products and solutions relevant to industrial and operational environments.'],
  ['07', 'Smart Solutions', 'Innovative technology solutions with potential applications across business, infrastructure and institutional requirements.'],
] as const

const marketOpportunityGroups = [
  {
    title: 'Market Development',
    opportunities: [
      ['01', 'Market Entry', 'Explore how a relevant technology or solution may be introduced into the Nigerian market.'],
      ['06', 'Product Demonstrations', 'Explore product demonstrations as a way to introduce suitable technologies to prospective customers and project stakeholders.'],
      ['07', 'Customer Development', 'Identify and engage potential customers and relevant market segments.'],
    ],
  },
  {
    title: 'Project Development',
    opportunities: [
      ['02', 'Local Project Representation', 'Support the development of opportunities around suitable customer and project requirements.'],
      ['04', 'Integration Opportunities', 'Explore opportunities involving suitable integration relationships and technical partners.'],
      ['08', 'Project Development', 'Develop technology opportunities around identified customer requirements and projects.'],
    ],
  },
  {
    title: 'Commercial Pathways',
    opportunities: [
      ['03', 'Reseller Opportunities', 'Explore potential reseller relationships where commercially and strategically appropriate.'],
      ['05', 'Distribution', 'Consider distribution pathways where the market opportunity and relationship justify it.'],
    ],
  },
] as const

const marketEntrySupportAreas = [
  ['01', 'Market Opportunity Identification', 'Explore where a technology or solution may address relevant needs within the Nigerian market.'],
  ['02', 'Customer Segment Identification', 'Identify organisations, sectors or customer segments where the technology may have practical relevance.'],
  ['03', 'Customer Engagement', 'Engage potential customers and explore genuine requirements and commercial opportunities.'],
  ['04', 'Requirement Development', 'Understand specific customer requirements and help define how a suitable technology may respond.'],
  ['05', 'Project Development', 'Work with manufacturers and technical partners to develop solutions around viable customer and project opportunities.'],
  ['06', 'Commercial Pathway Development', 'Where appropriate, explore how successful opportunities may progress toward reseller, integration, representation or distribution relationships.'],
] as const

const relationshipStates = [
  {
    number: '01',
    title: 'Exploring',
    description: 'Used where discussions or market opportunities are being explored.',
    examples: ['Potential technology partner', 'Manufacturer under discussion', 'Partnership opportunity', 'Relationship under development'],
  },
  {
    number: '02',
    title: 'Developing',
    description: 'Used where active market, customer or project opportunities are being worked on but formal status has not been established.',
    examples: ['Technology provider', 'Manufacturer relationship', 'Project collaboration', 'Developing partnership'],
  },
  {
    number: '03',
    title: 'Formally Confirmed',
    description: 'Only used where the relevant relationship status has been formally documented.',
    examples: ['Authorised reseller', 'Official representative', 'Exclusive distributor', 'Formally appointed partner'],
  },
]

const partnerProfiles = [
  ['01', 'International Manufacturers', 'Manufacturers with innovative physical technology products or complete technology solutions.'],
  ['02', 'Technology Companies', 'Companies seeking to explore market-development opportunities within Nigeria.'],
  ['03', 'Solution Providers', 'Technology providers with solutions that may address practical customer or infrastructure requirements.'],
  ['04', 'Market-Entry Seekers', 'Companies exploring customer development, representation, reseller, integration or distribution opportunities.'],
  ['05', 'Project-Oriented Technology Companies', 'Companies open to developing opportunities around identified customer and project requirements.'],
] as const

const conversationTopics = [
  'Market Development',
  'Customer Development',
  'Project Opportunities',
  'Local Representation',
  'Product Demonstrations',
  'Reseller Opportunities',
  'Integration Opportunities',
  'Distribution',
  'Longer-Term Market Expansion',
]

const closingOpportunityTerms = [
  'Market Development',
  'Project Opportunities',
  'Local Representation',
  'Reseller Opportunities',
  'Integration Opportunities',
  'Distribution',
]

export const TechnologyPartnersPage: React.FC = () => {
  const overviewRef = useRef<HTMLElement>(null)
  const modelRef = useRef<HTMLElement>(null)
  const lookForRef = useRef<HTMLElement>(null)
  const technologyAreasRef = useRef<HTMLElement>(null)
  const marketOpportunitiesRef = useRef<HTMLElement>(null)
  const marketEntryRef = useRef<HTMLElement>(null)
  const transparencyRef = useRef<HTMLElement>(null)
  const hearFromRef = useRef<HTMLElement>(null)
  const finalCtaRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: overviewRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-overview-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-overview-principle]', { y: 25, opacity: 0, duration: 0.45, stagger: 0.1 }, '-=0.22')
        .from('[data-overview-divider]', { scaleX: 0, transformOrigin: 'left center', duration: 0.38, stagger: 0.1 }, '-=0.72')
        .from('[data-overview-statement]', { y: 20, opacity: 0, duration: 0.5 }, '-=0.12')
    },
    { scope: overviewRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: modelRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-model-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-model-stage]', { y: 30, opacity: 0, duration: 0.46, stagger: 0.12 }, '-=0.2')
        .from('[data-model-number]', { x: -15, opacity: 0, duration: 0.32, stagger: 0.12 }, '-=0.82')
        .from('[data-model-statement]', { y: 20, opacity: 0, duration: 0.5 }, '-=0.12')

      gsap.fromTo(
        '[data-model-line]',
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-model-process]',
            start: 'top 74%',
            end: 'bottom 58%',
            scrub: 0.6,
          },
        },
      )
    },
    { scope: modelRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: lookForRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-look-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-look-characteristic]', { y: 25, opacity: 0, duration: 0.45, stagger: 0.1 }, '-=0.2')
        .from('[data-look-divider]', { scaleX: 0, transformOrigin: 'left center', duration: 0.35, stagger: 0.1 }, '-=0.7')
        .from('[data-look-pathways]', { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.1')
    },
    { scope: lookForRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: technologyAreasRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-areas-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-technology-area]', { y: 25, opacity: 0, duration: 0.42, stagger: 0.08 }, '-=0.2')
    },
    { scope: technologyAreasRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: marketOpportunitiesRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-market-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-market-group]', { y: 24, opacity: 0, duration: 0.45, stagger: 0.1 }, '-=0.2')
        .from('[data-market-opportunity]', { y: 20, opacity: 0, duration: 0.38, stagger: 0.08 }, '-=0.58')
    },
    { scope: marketOpportunitiesRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: marketEntryRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-entry-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-entry-area]', { y: 25, opacity: 0, duration: 0.43, stagger: 0.09 }, '-=0.2')
        .from('[data-entry-divider]', { scaleX: 0, transformOrigin: 'left center', duration: 0.35, stagger: 0.09 }, '-=0.62')
    },
    { scope: marketEntryRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: transparencyRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-transparency-intro]', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 })
        .from('[data-relationship-state]', { y: 20, opacity: 0, duration: 0.42, stagger: 0.1 }, '-=0.18')
    },
    { scope: transparencyRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: hearFromRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-hear-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-partner-profile]', { y: 25, opacity: 0, duration: 0.43, stagger: 0.09 }, '-=0.2')
        .from('[data-conversation-topic]', { y: 16, opacity: 0, duration: 0.36, stagger: 0.06 }, '-=0.12')
    },
    { scope: hearFromRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: finalCtaRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-partner-cta-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-partner-cta-title-line]', { yPercent: 100, duration: 0.8, stagger: 0.08 }, '-=0.1')
        .from('[data-partner-cta-copy]', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.25')
        .from('[data-partner-cta-action]', { y: 15, opacity: 0, duration: 0.4 }, '-=0.2')
        .from('[data-partner-cta-term]', { y: 15, opacity: 0, duration: 0.36, stagger: 0.07 }, '-=0.1')
    },
    { scope: finalCtaRef },
  )

  return (
    <div className="bg-[#F4F5F2] text-[#102A56]">
      <SEO
        title="Technology Partners | Versata Digital Solutions"
        description="Versata explores practical pathways for selected international technology companies seeking opportunities within the Nigerian market."
      />

      <PageHero
        title="Bringing Global Innovation Closer to the Nigerian Market"
        description="Versata works with selected international manufacturers and technology companies whose products and solutions may address opportunities within Nigeria. We identify market opportunities, develop customer relationships, and build practical project pathways."
        ctaText="Become a Technology Partner"
        ctaLink="/partnerships"
        secondaryCtaText="Discuss Opportunities"
        secondaryCtaLink="/contact"
        backgroundImage={heroTechnologyImg}
      />

      <section ref={overviewRef} aria-labelledby="partnership-overview-heading" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p data-overview-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                Partnership Overview
              </p>
              <h2 id="partnership-overview-heading" data-overview-intro className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[54px]">
                A Market-Development Approach Built Around Real Opportunities
              </h2>
            </div>
            <div className="max-w-md text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 lg:col-span-5 lg:pb-1">
              <p data-overview-intro>Versata&apos;s partnership approach is built around identifying real market opportunities for relevant technologies rather than treating market entry as a simple product-distribution exercise.</p>
              <p data-overview-intro className="mt-3 text-slate-500">We work to understand local requirements, identify suitable customer segments, engage potential customers and develop practical commercial and project opportunities with manufacturers and technology providers.</p>
            </div>
          </div>

          <ol className="mt-14 grid border-t border-slate-200 md:grid-cols-2 lg:mt-16">
            {partnershipPrinciples.map((principle) => (
              <li key={principle.number} data-overview-principle className="relative min-h-56 overflow-hidden border-b border-slate-200 p-6 sm:min-h-64 sm:p-8 md:nth-[odd]:border-r lg:p-10">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{principle.number}</span>
                <div className="mt-12 max-w-md sm:mt-16">
                  <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#102A56] sm:text-3xl">{principle.title}</h3>
                  <p className="mt-4 text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{principle.description}</p>
                </div>
                <span data-overview-divider aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#00AFA9]/70" />
              </li>
            ))}
          </ol>

          <p data-overview-statement className="mt-12 max-w-3xl border-l-2 border-[#00AFA9] pl-5 text-xl font-medium leading-8 tracking-[-0.025em] text-[#102A56] sm:mt-14 sm:text-2xl sm:leading-9">
            The objective is to develop the market progressively around genuine customer and project opportunities.
          </p>
        </div>
      </section>

      <section ref={modelRef} aria-labelledby="partnership-model-heading" className="overflow-hidden bg-[#102A56] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p data-model-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">
                  Our Partnership Model
                </p>
                <h2 id="partnership-model-heading" data-model-intro className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[54px]">
                  Developing Markets Step by Step
                </h2>
                <p data-model-intro className="mt-6 max-w-md text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
                  Versata&apos;s partnership approach is designed to develop markets progressively, beginning with market opportunity identification and moving toward deeper commercial relationships where opportunities prove viable.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div data-model-process className="relative">
                <div data-model-line aria-hidden="true" className="absolute bottom-7 left-5 top-5 w-px origin-top bg-[#35D0C5]/60 sm:left-6" />
                <ol>
                  {partnershipStages.map((stage) => (
                    <li key={stage.number} data-model-stage className="relative grid grid-cols-[2.5rem_1fr] gap-6 border-b border-white/15 py-7 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[3rem_1fr] sm:gap-8 sm:py-9">
                      <span data-model-number className="relative z-10 flex h-10 w-10 items-center justify-center border border-[#35D0C5]/60 bg-[#102A56] text-[10px] font-bold tracking-[0.12em] text-[#35D0C5] sm:h-12 sm:w-12">
                        {stage.number}
                      </span>
                      <div className="pb-1 sm:pb-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#35D0C5]">{stage.title}</p>
                        <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl">{stage.lead}</h3>
                        <ul className="mt-3 grid max-w-xl gap-1 text-xs leading-5 text-slate-300 sm:grid-cols-2 sm:text-[13px] sm:leading-6">
                          {stage.activities.map((activity) => (
                            <li key={activity} className="flex gap-2">
                              <span aria-hidden="true" className="text-[#35D0C5]">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <p data-model-statement className="mt-12 max-w-2xl border-t border-white/20 pt-6 text-lg font-medium leading-7 tracking-[-0.02em] text-white sm:mt-14 sm:text-xl">
                Each stage is intended to build on real market demand, customer requirements and viable commercial opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={lookForRef} aria-labelledby="what-we-look-for-heading" className="bg-[#F4F5F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p data-look-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                What We Look For
              </p>
              <h2 id="what-we-look-for-heading" data-look-intro className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Technology With Practical Market Potential
              </h2>
              <div className="mt-6 max-w-md space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                <p data-look-intro>Versata is interested in working with selected international manufacturers and technology companies whose products and solutions may address practical opportunities within the Nigerian market.</p>
                <p data-look-intro className="text-slate-500">Our focus is on innovative physical technology products and complete technology solutions that can be developed around genuine customer and project requirements.</p>
              </div>
            </div>

            <ol className="border-t border-slate-200 lg:col-span-7">
              {partnerCharacteristics.map((characteristic) => (
                <li key={characteristic.number} data-look-characteristic className="relative grid grid-cols-[2.5rem_1fr] gap-5 overflow-hidden border-b border-slate-200 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-8">
                  <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{characteristic.number}</span>
                  <div className="max-w-xl">
                    <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#102A56] sm:text-3xl">{characteristic.title}</h3>
                    <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{characteristic.description}</p>
                  </div>
                  <span data-look-divider aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#00AFA9]/70" />
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-14 border-t border-[#1557B0]/20 pt-8 sm:mt-16 sm:pt-10">
            <p data-look-pathways className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">Potential Relationship Pathways</p>
            <p data-look-pathways className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">Depending on the opportunity, relationships may develop toward:</p>
            <ul className="mt-8 grid border-t border-[#1557B0]/20 sm:grid-cols-2 lg:grid-cols-5">
              {relationshipPathways.map((pathway) => (
                <li key={pathway} data-look-pathways className="border-b border-[#1557B0]/20 px-0 py-5 text-sm font-bold leading-5 tracking-[-0.015em] text-[#102A56] sm:px-5 sm:py-6 sm:first:pl-0 lg:border-r lg:px-5 lg:last:border-r-0">
                  {pathway}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section ref={technologyAreasRef} aria-labelledby="technology-areas-heading" className="border-y border-[#1557B0]/15 bg-[#E8F0FC]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p data-areas-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">
                Technology Areas of Interest
              </p>
              <h2 id="technology-areas-heading" data-areas-intro className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Technology Categories With Potential in the Nigerian Market
              </h2>
            </div>
            <div className="max-w-md text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 lg:col-span-5 lg:pb-1">
              <p data-areas-intro>Versata is building relationships with selected international manufacturers and technology providers whose solutions may have potential within the Nigerian market.</p>
              <p data-areas-intro className="mt-3 text-slate-500">Our current areas of interest span energy, education, infrastructure, industrial technology and smart solutions.</p>
            </div>
          </div>

          <ol className="mt-14 border-t border-[#1557B0]/20 lg:mt-16">
            {technologyAreas.map(([number, title, description]) => (
              <li key={number} data-technology-area className="group grid gap-3 border-b border-[#1557B0]/20 py-6 transition-colors duration-200 hover:bg-white/40 sm:grid-cols-[4rem_minmax(15rem,1.2fr)_minmax(14rem,0.8fr)] sm:items-baseline sm:gap-6 sm:px-5 sm:py-8 sm:first:pl-0 sm:last:pr-0">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#102A56] transition-transform duration-200 group-hover:translate-x-1 sm:text-3xl">{title}</h3>
                <p className="max-w-md text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={marketOpportunitiesRef} aria-labelledby="market-opportunities-heading" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p data-market-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                  Market Development Opportunities
                </p>
                <h2 id="market-opportunities-heading" data-market-intro className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                  Different Technologies Require Different Paths Into the Market
                </h2>
                <div className="mt-6 max-w-md space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                  <p data-market-intro>Versata explores different market-development pathways depending on the technology, customer requirement and commercial opportunity.</p>
                  <p data-market-intro className="text-slate-500">These may include market-entry development, project representation, reseller or integration relationships, product demonstrations, customer development and distribution opportunities where appropriate.</p>
                </div>
              </div>
            </div>

            <div className="space-y-10 lg:col-span-7 lg:space-y-12">
              {marketOpportunityGroups.map((group) => (
                <section key={group.title} data-market-group aria-labelledby={`${group.title.toLowerCase().replaceAll(' ', '-')}-heading`} className="border-t border-[#1557B0]/20 pt-5 sm:pt-6">
                  <h3 id={`${group.title.toLowerCase().replaceAll(' ', '-')}-heading`} className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">{group.title}</h3>
                  <ul className="mt-4">
                    {group.opportunities.map(([number, title, description]) => (
                      <li key={number} data-market-opportunity className="grid gap-3 border-b border-slate-200 py-5 sm:grid-cols-[3rem_minmax(12rem,0.9fr)_minmax(14rem,1.1fr)] sm:gap-5 sm:py-6">
                        <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                        <h4 className="text-lg font-bold leading-tight tracking-[-0.025em] text-[#102A56] sm:text-xl">{title}</h4>
                        <p className="max-w-md text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={marketEntryRef} aria-labelledby="market-entry-heading" className="border-y border-[#00AFA9]/20 bg-[#DDF7F5]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p data-entry-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">
                  Supporting Market Entry
                </p>
                <h2 id="market-entry-heading" data-entry-intro className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                  Local Market Development Around Real Customer Opportunities
                </h2>
                <div className="mt-6 max-w-md space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                  <p data-entry-intro>Versata supports market development by identifying potential opportunities, understanding relevant customer segments and engaging organisations whose requirements may align with a manufacturer&apos;s technology.</p>
                  <p data-entry-intro className="text-slate-500">Where genuine opportunities emerge, we can work with manufacturers and technical partners to help develop solutions around identified customer and project requirements.</p>
                </div>
                <p data-entry-intro className="mt-10 max-w-md border-l-2 border-[#00AFA9] pl-4 text-lg font-medium leading-7 tracking-[-0.02em] text-[#102A56]">
                  Market development begins with understanding where the technology is relevant.
                </p>
              </div>
            </div>

            <ol className="border-t border-[#1557B0]/20 lg:col-span-7">
              {marketEntrySupportAreas.map(([number, title, description]) => (
                <li key={number} data-entry-area className="relative grid grid-cols-[2.5rem_1fr] gap-5 overflow-hidden border-b border-[#1557B0]/20 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-8">
                  <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                  <div className="max-w-xl">
                    <h3 className="text-xl font-bold leading-tight tracking-[-0.025em] text-[#102A56] sm:text-2xl">{title}</h3>
                    <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
                  </div>
                  <span data-entry-divider aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#00AFA9]/70" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section ref={transparencyRef} aria-labelledby="partnership-transparency-heading" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:items-start lg:gap-16 lg:px-12 lg:py-24">
          <div className="lg:col-span-5">
            <p data-transparency-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
              Partnership Transparency
            </p>
            <h2 id="partnership-transparency-heading" data-transparency-intro className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl">
              Clear About Every Partnership Relationship
            </h2>
            <div className="mt-6 max-w-md space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
              <p data-transparency-intro>Versata is committed to describing technology-provider and manufacturer relationships accurately.</p>
              <p data-transparency-intro className="text-slate-500">A relationship will only be described as authorised, exclusive or official where that status has been formally confirmed.</p>
            </div>
          </div>

          <ol className="border-t border-slate-200 lg:col-span-7">
            {relationshipStates.map((state) => (
              <li key={state.number} data-relationship-state className="grid gap-4 border-b border-slate-200 py-6 sm:grid-cols-[3rem_minmax(10rem,0.7fr)_minmax(15rem,1.3fr)] sm:gap-5 sm:py-8">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{state.number}</span>
                <h3 className="text-xl font-bold leading-tight tracking-[-0.025em] text-[#102A56] sm:text-2xl">{state.title}</h3>
                <div>
                  <p className="text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{state.description}</p>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Appropriate language may include</p>
                  <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs leading-5 text-slate-500">
                    {state.examples.map((example) => <li key={example}>{example}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={hearFromRef} aria-labelledby="who-we-want-to-hear-from-heading" className="relative overflow-hidden bg-[#084d3c] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-5 top-8 hidden text-[11rem] font-bold uppercase leading-none tracking-[-0.1em] text-white/[0.035] lg:block">Partner</div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p data-hear-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">
                Who We Want to Hear From
              </p>
              <h2 id="who-we-want-to-hear-from-heading" data-hear-intro className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[54px]">
                Looking to Develop Opportunities in Nigeria?
              </h2>
            </div>
            <div className="max-w-md text-sm leading-6 text-slate-200 sm:text-[15px] sm:leading-7 lg:col-span-5 lg:pb-1">
              <p data-hear-intro>Versata welcomes conversations with international manufacturers and technology providers exploring practical opportunities within the Nigerian market.</p>
              <p data-hear-intro className="mt-3 text-slate-300">If your technology may address real customer, project, infrastructure, education, energy, industrial or organisational requirements, we are open to exploring whether there is a relevant market-development opportunity.</p>
            </div>
          </div>

          <ol className="mt-14 border-t border-white/20 lg:mt-16">
            {partnerProfiles.map(([number, title, description]) => (
              <li key={number} data-partner-profile className="grid gap-3 border-b border-white/20 py-6 sm:grid-cols-[4rem_minmax(15rem,1fr)_minmax(15rem,0.9fr)] sm:items-baseline sm:gap-6 sm:py-8">
                <span className="text-xs font-bold tracking-[0.13em] text-[#35D0C5]">{number}</span>
                <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl">{title}</h3>
                <p className="max-w-md text-xs leading-5 text-slate-300 sm:text-[13px] sm:leading-6">{description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 border-t border-white/20 pt-7 sm:mt-14 sm:pt-8">
            <p data-conversation-topic className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">Possible Conversation Areas</p>
            <p data-conversation-topic className="mt-3 text-sm leading-6 text-slate-300">We are open to discussions around:</p>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
              {conversationTopics.map((topic) => (
                <li key={topic} data-conversation-topic className="border-l border-[#35D0C5]/60 pl-3 text-xs font-bold leading-5 text-white sm:text-[13px]">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section ref={finalCtaRef} aria-labelledby="technology-partner-cta-heading" className="relative overflow-hidden bg-[#1557B0] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-8 hidden -translate-x-1/2 select-none text-[clamp(5rem,15vw,13rem)] font-bold uppercase leading-none tracking-[-0.09em] text-white/[0.035] lg:block">Opportunity</div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p data-partner-cta-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">
              Become a Technology Partner
            </p>
            <h2 id="technology-partner-cta-heading" className="mt-5 text-5xl font-bold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              <span className="block overflow-hidden"><span data-partner-cta-title-line className="block">Ready to Explore</span></span>
              <span className="block overflow-hidden"><span data-partner-cta-title-line className="block">the Nigerian Market?</span></span>
            </h2>
            <div className="mx-auto mt-7 max-w-2xl space-y-3 text-sm leading-6 text-slate-200 sm:text-[15px] sm:leading-7">
              <p data-partner-cta-copy>Versata welcomes conversations with international manufacturers and technology providers seeking to explore practical market-development, project, reseller, integration or distribution opportunities in Nigeria.</p>
              <p data-partner-cta-copy className="text-slate-300">If your technology may address real customer, infrastructure, education, energy, industrial or organisational requirements, we are open to exploring the opportunity.</p>
            </div>
            <div data-partner-cta-action className="mt-9">
              <p className="mb-4 text-xs leading-5 text-slate-200 sm:text-[13px]">Tell us about your company, technology and the opportunity you want to explore.</p>
              <Link
                to="/partnerships"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[#00AFA9] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#008F8A] hover:shadow-md active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1557B0]"
              >
                Become a Technology Partner
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <ul className="relative mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-x-5 gap-y-3 border-t border-white/20 pt-7 sm:mt-20 sm:gap-x-7">
            {closingOpportunityTerms.map((term) => (
              <li key={term} data-partner-cta-term className="border-l border-[#35D0C5]/60 pl-3 text-xs font-bold leading-5 text-white sm:text-[13px]">
                {term}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
