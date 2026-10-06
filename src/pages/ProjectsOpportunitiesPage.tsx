import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageHero } from '@/components/PageHero'
import heroOpportunitiesImg from '@/assets/hero_opportunities.webp'

gsap.registerPlugin(ScrollTrigger)

const opportunityAreas = [
  ['01', 'Smart Energy', 'Opportunities involving energy monitoring, management and smarter energy infrastructure.'],
  ['02', 'Renewable Energy Technology', 'Opportunities involving innovative renewable-energy-related technologies around suitable projects.'],
  ['03', 'Education Technology', 'Opportunities involving smart learning, STEM, digital learning and technical education environments.'],
  ['04', 'Robotics', 'Potential opportunities involving robotics for education, training, innovation and related applications.'],
  ['05', 'Digital Infrastructure', 'Technology opportunities supporting modern organisational, institutional and infrastructure requirements.'],
  ['06', 'Industrial Technology', 'Technology products and systems with potential relevance to industrial and operational environments.'],
  ['07', 'Smart Solutions', 'Innovative technology solutions with potential applications across business, infrastructure and institutional requirements.'],
] as const

const applicationIndustries = [
  ['01', 'Corporate & Commercial', 'Business, office and commercial environments.'],
  ['02', 'Education', 'Learning, STEM and technical education environments.'],
  ['03', 'Energy', 'Energy and infrastructure-related requirements.'],
  ['04', 'Manufacturing & Industrial', 'Industrial and operational environments.'],
  ['05', 'Hospitality', 'Modern hospitality facilities and operations.'],
  ['06', 'Healthcare', 'Healthcare facilities and related organisations.'],
  ['07', 'Government & Public Sector', 'Institutional and public-sector project requirements.'],
  ['08', 'Real Estate & Infrastructure', 'Buildings, facilities, developments and infrastructure projects.'],
] as const

const opportunityDevelopmentStages = [
  ['01', 'Understand', 'Define the requirement.', 'Understand the organisation, project and problem to be addressed.'],
  ['02', 'Identify', 'Find relevant technology.', 'Identify suitable products, solutions and potential technology partners.'],
  ['03', 'Develop', 'Build the opportunity.', 'Work with the customer and manufacturer to develop a commercially and technically appropriate solution.'],
  ['04', 'Deliver', 'Coordinate the pathway.', 'Where appropriate, coordinate sourcing, procurement and implementation through suitable partners.'],
  ['05', 'Build', 'Develop the relationship.', 'Aim to build long-term relationships with customers and international providers.'],
] as const

export const ProjectsOpportunitiesPage: React.FC = () => {
  const overviewRef = useRef<HTMLElement>(null)
  const opportunityAreasRef = useRef<HTMLElement>(null)
  const applicationsRef = useRef<HTMLElement>(null)
  const opportunityProcessRef = useRef<HTMLElement>(null)
  const twoPathsRef = useRef<HTMLElement>(null)
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
        .from('[data-opportunity-overview-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-opportunity-path]', { y: 25, opacity: 0, duration: 0.48, stagger: 0.12 }, '-=0.2')
        .from('[data-opportunity-connector]', { scaleX: 0, transformOrigin: 'left center', duration: 0.45, stagger: 0.1 }, '-=0.5')
        .from('[data-opportunity-convergence]', { y: 20, opacity: 0, duration: 0.5 }, '-=0.12')
    },
    { scope: overviewRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: opportunityAreasRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-opportunity-areas-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-opportunity-area]', { y: 25, opacity: 0, duration: 0.42, stagger: 0.08 }, '-=0.2')
    },
    { scope: opportunityAreasRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: applicationsRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-applications-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-application-industry]', { y: 20, opacity: 0, duration: 0.38, stagger: 0.06 }, '-=0.2')
        .from('[data-applications-cta]', { y: 15, opacity: 0, duration: 0.4 }, '-=0.12')
    },
    { scope: applicationsRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: opportunityProcessRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-opportunity-process-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-opportunity-process-line]', { scaleX: 0, transformOrigin: 'left center', duration: 0.6 }, '-=0.2')
        .from('[data-opportunity-process-stage]', { y: 20, opacity: 0, duration: 0.4, stagger: 0.08 }, '-=0.3')
        .from('[data-opportunity-process-number]', { x: -12, opacity: 0, duration: 0.28, stagger: 0.08 }, '-=0.65')
    },
    { scope: opportunityProcessRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: twoPathsRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-two-paths-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-two-path]', { y: 25, opacity: 0, duration: 0.48, stagger: 0.12 }, '-=0.2')
        .from('[data-two-path-divider]', { scaleY: 0, transformOrigin: 'top center', duration: 0.5 }, '-=0.5')
        .from('[data-two-path-cta]', { y: 15, opacity: 0, duration: 0.36, stagger: 0.1 }, '-=0.35')
    },
    { scope: twoPathsRef },
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
        .from('[data-opportunity-cta-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-opportunity-cta-title-line]', { yPercent: 100, duration: 0.8, stagger: 0.08 }, '-=0.1')
        .from('[data-opportunity-cta-copy]', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.25')
        .from('[data-opportunity-cta-path]', { y: 25, opacity: 0, duration: 0.45, stagger: 0.12 }, '-=0.2')
        .from('[data-opportunity-cta-divider]', { scaleY: 0, transformOrigin: 'top center', duration: 0.5 }, '-=0.5')
        .from('[data-opportunity-cta-closing]', { y: 15, opacity: 0, duration: 0.4 }, '-=0.1')
    },
    { scope: finalCtaRef },
  )

  return (
    <div className="bg-[#F4F5F2] text-[#102A56]">
      <SEO
        title="Projects & Opportunities | Versata Digital Solutions"
        description="Versata develops technology opportunities around real customer, institutional and project requirements within the Nigerian market."
      />

      <PageHero
        title="Developing Technology Opportunities Around Real Market Requirements"
        description="Versata identifies practical applications for innovative technologies and develops opportunities around real customer, institutional and project requirements within the Nigerian market."
        ctaText="Explore Opportunities"
        ctaLink="#opportunities-overview"
        secondaryCtaText="Discuss a Project"
        secondaryCtaLink="/contact"
        backgroundImage={heroOpportunitiesImg}
        imageAlt="Renewable energy solar installation and smart utility infrastructure"
      />

      <section id="opportunities-overview" ref={overviewRef} aria-labelledby="opportunities-begin-heading" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p data-opportunity-overview-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                How Opportunities Begin
              </p>
              <h2 id="opportunities-begin-heading" data-opportunity-overview-intro className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Every Opportunity Starts With Either a Need or a Relevant Technology
              </h2>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-10">
            <article data-opportunity-path className="relative overflow-hidden border-t border-[#1557B0]/20 pt-6 sm:pt-8">
              <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">01  Customer / Project Requirement</span>
              <h3 className="mt-5 max-w-md text-3xl font-bold leading-[1.04] tracking-[-0.04em] text-[#102A56] sm:text-4xl">A Requirement Looking for the Right Technology</h3>
              <div className="mt-6 max-w-md space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                <p>An organisation, institution or project may already have a defined technology, infrastructure or operational requirement.</p>
                <p className="text-slate-500">Versata can explore suitable technologies, products and potential providers that may be relevant to that requirement.</p>
              </div>
              <span data-opportunity-connector aria-hidden="true" className="mt-10 block h-px w-full bg-[#00AFA9]/70" />
            </article>

            <article data-opportunity-path className="relative overflow-hidden border-t border-[#1557B0]/20 pt-6 sm:pt-8">
              <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">02  Technology / Market Opportunity</span>
              <h3 className="mt-5 max-w-md text-3xl font-bold leading-[1.04] tracking-[-0.04em] text-[#102A56] sm:text-4xl">A Technology Looking for the Right Market Opportunity</h3>
              <div className="mt-6 max-w-md space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                <p>An international manufacturer or technology provider may have a product or solution with potential relevance to the Nigerian market.</p>
                <p className="text-slate-500">Versata can explore suitable market segments, customer requirements and project opportunities where the technology may have practical application.</p>
              </div>
              <span data-opportunity-connector aria-hidden="true" className="mt-10 block h-px w-full bg-[#00AFA9]/70" />
            </article>
          </div>

          <div data-opportunity-convergence className="mt-10 border-l-2 border-[#00AFA9] bg-[#F4F5F2] px-6 py-7 sm:mt-12 sm:px-8 sm:py-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">Practical Project Opportunity</p>
            <p className="mt-3 max-w-2xl text-lg font-medium leading-7 tracking-[-0.02em] text-[#102A56] sm:text-xl">Where the requirement, technology and commercial opportunity align, a practical project opportunity can be developed.</p>
          </div>
        </div>
      </section>

      <section ref={opportunityAreasRef} aria-labelledby="opportunity-areas-heading" className="border-y border-[#1557B0]/15 bg-[#E8F0FC]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p data-opportunity-areas-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">
                Opportunity Areas
              </p>
              <h2 id="opportunity-areas-heading" data-opportunity-areas-intro className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Technology Areas With Potential for Practical Projects
              </h2>
            </div>
            <div className="max-w-md text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 lg:col-span-5 lg:pb-1">
              <p data-opportunity-areas-intro>Versata explores market and project opportunities across selected technology categories that may address practical requirements within Nigeria.</p>
              <p data-opportunity-areas-intro className="mt-3 text-slate-500">The relevance of each technology depends on the customer, industry, project and commercial opportunity.</p>
            </div>
          </div>

          <ol className="mt-14 border-t border-[#1557B0]/20 lg:mt-16">
            {opportunityAreas.map(([number, title, description]) => (
              <li key={number} data-opportunity-area className="group grid gap-3 border-b border-[#1557B0]/20 py-6 transition-colors duration-200 hover:bg-white/40 sm:grid-cols-[4rem_minmax(15rem,1.2fr)_minmax(14rem,0.8fr)] sm:items-baseline sm:gap-6 sm:px-5 sm:py-8 sm:first:pl-0 sm:last:pr-0">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#102A56] transition-transform duration-200 group-hover:translate-x-1 sm:text-3xl">{title}</h3>
                <p className="max-w-md text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={applicationsRef} aria-labelledby="industries-applications-heading" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p data-applications-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                Industries &amp; Applications
              </p>
              <h2 id="industries-applications-heading" data-applications-intro className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Opportunities Can Emerge Across Different Sectors
              </h2>
            </div>
            <div className="max-w-md text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 lg:col-span-5 lg:pb-1">
              <p data-applications-intro>Technology opportunities can emerge across different organisational, institutional, commercial and infrastructure environments.</p>
              <p data-applications-intro className="mt-3 text-slate-500">Versata explores each opportunity based on the specific requirement rather than assuming the same technology will be relevant to every sector.</p>
            </div>
          </div>

          <ol className="mt-12 grid border-t border-slate-200 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {applicationIndustries.map(([number, title, description]) => (
              <li key={number} data-application-industry className="min-h-40 border-b border-slate-200 p-5 md:border-r md:even:border-r-0 lg:min-h-44 lg:even:border-r lg:p-6 lg:nth-[4n]:border-r-0">
                <span className="text-[11px] font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                <h3 className="mt-4 text-base font-bold leading-tight tracking-[-0.02em] text-[#102A56]">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
              </li>
            ))}
          </ol>

          <Link
            data-applications-cta
            to="/industries"
            className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#084d3c] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#063b2e] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFA9] focus-visible:ring-offset-2"
          >
            Explore Industries
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section ref={opportunityProcessRef} aria-labelledby="opportunity-process-heading" className="overflow-hidden bg-[#102A56] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p data-opportunity-process-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">
              How We Develop Opportunities
            </p>
            <h2 id="opportunity-process-heading" data-opportunity-process-intro className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              From Requirement to Practical Opportunity
            </h2>
            <p data-opportunity-process-intro className="mt-6 max-w-2xl text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
              Versata develops opportunities by beginning with the requirement, identifying suitable technologies and partners, and working with the relevant parties to develop a practical commercial and technical pathway.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-14">
            <div data-opportunity-process-line aria-hidden="true" className="absolute left-[10%] right-[10%] top-5 hidden h-px origin-left bg-[#35D0C5]/60 lg:block" />
            <div aria-hidden="true" className="absolute bottom-7 left-5 top-5 w-px bg-[#35D0C5]/60 lg:hidden" />
            <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-6 xl:gap-8">
              {opportunityDevelopmentStages.map(([number, title, lead, description]) => (
                <li key={number} data-opportunity-process-stage className="relative grid grid-cols-[2.5rem_1fr] gap-5 lg:block">
                  <span data-opportunity-process-number className="relative z-10 flex h-10 w-10 items-center justify-center border border-[#35D0C5]/60 bg-[#102A56] text-[10px] font-bold tracking-[0.12em] text-[#35D0C5]">
                    {number}
                  </span>
                  <div className="lg:mt-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#35D0C5]">{title}</p>
                    <h3 className="mt-3 text-xl font-bold leading-tight tracking-[-0.025em] sm:text-2xl">{lead}</h3>
                    <p className="mt-3 text-xs leading-5 text-slate-300 sm:text-[13px] sm:leading-6">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section ref={twoPathsRef} aria-labelledby="two-paths-heading" className="border-y border-slate-200 bg-[#F4F5F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p data-two-paths-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
              Two Ways to Start
            </p>
            <h2 id="two-paths-heading" data-two-paths-intro className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
              Bring the Requirement  or Bring the Technology
            </h2>
          </div>

          <div className="relative mt-12 grid gap-10 md:grid-cols-2 md:gap-0 lg:mt-14">
            <div data-two-path-divider aria-hidden="true" className="absolute inset-y-0 left-1/2 hidden w-px origin-top bg-[#1557B0]/20 md:block" />
            <article data-two-path className="border-t border-[#1557B0]/20 pt-7 md:border-t-0 md:pr-10 lg:pr-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">For Organisations</p>
              <h3 className="mt-5 max-w-md text-3xl font-bold leading-[1.04] tracking-[-0.04em] text-[#102A56] sm:text-4xl">Have a Technology or Project Requirement?</h3>
              <div className="mt-6 max-w-md space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                <p>Tell us about the technology, infrastructure or operational requirement your organisation is trying to address.</p>
                <p className="text-slate-500">Versata can explore suitable technologies and international manufacturers that may be relevant to the project.</p>
              </div>
              <Link
                data-two-path-cta
                to="/contact"
                className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#084d3c] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#063b2e] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFA9] focus-visible:ring-offset-2"
              >
                Discuss Your Requirement
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden="true" />
              </Link>
            </article>

            <article data-two-path className="border-t border-[#1557B0]/20 pt-7 md:border-t-0 md:pl-10 lg:pl-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">For Manufacturers</p>
              <h3 className="mt-5 max-w-md text-3xl font-bold leading-[1.04] tracking-[-0.04em] text-[#102A56] sm:text-4xl">Have Technology With Potential in Nigeria?</h3>
              <div className="mt-6 max-w-md space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                <p>Versata welcomes conversations with international manufacturers and technology providers exploring practical market-development and project opportunities.</p>
                <p className="text-slate-500">Depending on the opportunity, this may include customer development, project opportunities, representation, reseller, integration or distribution pathways.</p>
              </div>
              <Link
                data-two-path-cta
                to="/technology-partners"
                className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#1557B0] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#0B3D91] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFA9] focus-visible:ring-offset-2"
              >
                Partner With Versata
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section ref={finalCtaRef} aria-labelledby="opportunities-final-cta-heading" className="relative overflow-hidden bg-[#1557B0] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-8 hidden -translate-x-1/2 select-none text-[clamp(5rem,15vw,13rem)] font-bold uppercase leading-none tracking-[-0.09em] text-white/[0.035] lg:block">Opportunity</div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p data-opportunity-cta-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">
              Let&apos;s Build the Next Opportunity
            </p>
            <h2 id="opportunities-final-cta-heading" className="mt-5 text-5xl font-bold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              <span className="block overflow-hidden"><span data-opportunity-cta-title-line className="block">Have a Requirement or a</span></span>
              <span className="block overflow-hidden"><span data-opportunity-cta-title-line className="block">Technology Opportunity?</span></span>
              <span className="block overflow-hidden"><span data-opportunity-cta-title-line className="block">Let&apos;s Start the Conversation.</span></span>
            </h2>
            <div className="mx-auto mt-7 max-w-2xl space-y-3 text-sm leading-6 text-slate-200 sm:text-[15px] sm:leading-7">
              <p data-opportunity-cta-copy>Whether you are an organisation with a technology or project requirement, or an international manufacturer exploring opportunities in Nigeria, Versata welcomes the opportunity to connect.</p>
              <p data-opportunity-cta-copy className="text-slate-300">Start with the requirement, the technology or the project opportunity, and we can explore the most relevant next step.</p>
            </div>
          </div>

          <div className="relative mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2 md:gap-0 lg:mt-14">
            <div data-opportunity-cta-divider aria-hidden="true" className="absolute inset-y-0 left-1/2 hidden w-px origin-top bg-white/25 md:block" />
            <article data-opportunity-cta-path className="border-t border-white/25 pt-7 md:border-t-0 md:pr-10 lg:pr-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">For Organisations</p>
              <h3 className="mt-5 text-3xl font-bold leading-[1.04] tracking-[-0.04em] sm:text-4xl">Have a Requirement or Project?</h3>
              <p className="mt-5 max-w-md text-sm leading-6 text-slate-200 sm:text-[15px] sm:leading-7">Tell us about the technology, infrastructure or operational need your organisation is trying to address.</p>
              <Link
                to="/contact"
                className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#00AFA9] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#008F8A] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1557B0]"
              >
                Discuss Your Requirement
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden="true" />
              </Link>
            </article>

            <article data-opportunity-cta-path className="border-t border-white/25 pt-7 md:border-t-0 md:pl-10 lg:pl-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">For Manufacturers</p>
              <h3 className="mt-5 text-3xl font-bold leading-[1.04] tracking-[-0.04em] sm:text-4xl">Have Technology With Market Potential?</h3>
              <p className="mt-5 max-w-md text-sm leading-6 text-slate-200 sm:text-[15px] sm:leading-7">Explore potential market-development, project, reseller, integration or distribution opportunities with Versata.</p>
              <Link
                to="/technology-partners"
                className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-sm border border-white/35 px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:border-[#35D0C5] hover:text-[#35D0C5] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1557B0]"
              >
                Partner With Versata
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden="true" />
              </Link>
            </article>
          </div>

          <p data-opportunity-cta-closing className="relative mt-14 border-t border-white/20 pt-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#35D0C5] sm:mt-16">
            Requirement → Technology → Opportunity
          </p>
        </div>
      </section>
    </div>
  )
}
