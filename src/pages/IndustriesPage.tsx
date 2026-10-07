import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageHero } from '@/components/PageHero'
import industryCorporateImg from '@/assets/industry_corporate.webp'
import heroIndustriesImg from '@/assets/hero_industries.webp'

gsap.registerPlugin(ScrollTrigger)

const industryApproachPrinciples = [
  ['01', 'Understand the Environment', 'Understand the organisation, sector and specific requirement before considering technology.'],
  ['02', 'Identify Relevant Technology', 'Explore technologies and products that may be appropriate for the requirement.'],
  ['03', 'Connect the Right Partners', 'Identify suitable manufacturers, technology providers or technical partners where relevant.'],
  ['04', 'Develop the Opportunity', 'Work with the relevant parties to develop a practical and commercially appropriate opportunity.'],
] as const

const corporateTechnologyAreas = [
  ['01', 'Digital Infrastructure', 'Technology supporting modern business and organisational infrastructure requirements.'],
  ['02', 'Smart Agricultural Technologies', 'Technology supporting modern Agricultural systems and operational needs.'],
  ['03', 'Collaboration & Communication', 'Solutions involving smart meeting environments, digital collaboration, wireless presentation and video conferencing.'],
  ['04', 'Energy Management', 'Energy monitoring, smart metering and energy-management technologies where relevant to the organisation\'s requirements.'],
] as const

const educationTechnologyAreas = [
  ['01', 'Smart Learning', 'Technology supporting modern classroom and learning environments.'],
  ['02', 'STEM & Robotics', 'Technology supporting science, technology, engineering, mathematics and practical robotics learning.'],
  ['03', 'AI & Digital Learning', 'Technology supporting exposure to AI concepts and modern digital learning systems.'],
  ['04', 'Innovation Labs & Makerspaces', 'Technology environments that support experimentation, creation, practical learning and technical development.'],
  ['05', 'Engineering & Technical Training', 'Technology and equipment relevant to engineering and technical skills development.'],
] as const

const energyTechnologyAreas = [
  ['01', 'Energy Monitoring', 'Technology supporting improved visibility into energy use and infrastructure behaviour.'],
  ['02', 'Smart Metering', 'Metering technologies relevant to structured energy monitoring requirements.'],
  ['03', 'Energy Management Systems', 'Systems supporting energy monitoring, management and operational decision-making.'],
  ['04', 'Power Monitoring & Power Quality', 'Technology related to observing power infrastructure and understanding power-quality requirements.'],
  ['05', 'Energy Optimisation', 'Technology opportunities relevant to commercial and industrial energy-management requirements.'],
  ['06', 'Renewable-Energy Technology', 'Exploration of innovative renewable-energy-related technologies for appropriate project requirements.'],
] as const

const industrialTechnologyAreas = [
  ['01', 'Operational Monitoring', 'Technology supporting greater visibility into relevant operational environments and systems.'],
  ['02', 'Energy Management', 'Energy-monitoring and management technologies applicable to commercial and industrial environments.'],
  ['03', 'Infrastructure Monitoring', 'Technology supporting monitoring of infrastructure and operational assets where relevant.'],
  ['04', 'Industrial Technology', 'Technology products and systems with potential relevance to industrial environments.'],
  ['05', 'Digital Infrastructure', 'Technology infrastructure supporting modern industrial and operational requirements.'],
  ['06', 'Technology Sourcing', 'Identification and sourcing of suitable international technologies around specific industrial requirements.'],
] as const

const hospitalityTechnologyAreas = [
  ['01', 'Digital Infrastructure', 'Technology supporting modern hospitality infrastructure and facility requirements.'],
  ['02', 'Collaboration & Communication', 'Technology supporting meeting spaces, communication and operational collaboration where appropriate.'],
  ['03', 'Energy Management', 'Energy monitoring and management technologies relevant to hospitality facilities where required.'],
  ['04', 'Facility Technology', 'Technology solutions supporting broader operational and infrastructure requirements within hospitality environments.'],
] as const

const healthcareTechnologyAreas = [
  ['01', 'Digital Infrastructure', 'Technology supporting modern organisational and facility infrastructure requirements.'],
  ['02', 'Energy Management', 'Energy-monitoring and management technologies relevant to healthcare facilities where appropriate.'],
  ['03', 'Facility Technology', 'Technology opportunities supporting broader facility and operational requirements.'],
  ['04', 'Collaboration Technology', 'Communication and collaboration technologies for suitable professional or institutional environments.'],
] as const

const governmentTechnologyAreas = [
  ['01', 'Digital Infrastructure', 'Technology supporting institutional and infrastructure requirements.'],
  ['02', 'Energy & Infrastructure Technology', 'Relevant smart-energy, monitoring and infrastructure technologies where appropriate.'],
  ['03', 'Technology Sourcing', 'Identification and sourcing of suitable technology around specific institutional requirements.'],
  ['04', 'Project Development', 'Development of technology opportunities around defined institutional or public-sector project needs.'],
  ['05', 'Education & Technical Technology', 'Where appropriate, technology opportunities relating to education, training, STEM or technical skills environments.'],
] as const

const realEstateTechnologyAreas = [
  ['01', 'Digital Infrastructure', 'Technology supporting the digital and operational requirements of modern buildings and facilities.'],
  ['02', 'Smart Energy', 'Energy-monitoring and management technologies relevant to building and infrastructure environments.'],
  ['03', 'Infrastructure Monitoring', 'Technology supporting greater visibility into relevant infrastructure systems and performance.'],
  ['04', 'Collaboration Technology', 'Smart meeting, communication and collaboration technologies for suitable commercial or institutional environments.'],
  ['05', 'Technology Sourcing', 'Identification of appropriate international technologies around defined project requirements.'],
  ['06', 'Project Development', 'Development of technology opportunities around specific building, facility or infrastructure requirements.'],
] as const

const industryDevelopmentStages = [
  ['01', 'Understand', 'Start with the requirement.', 'Understand the organisation, environment and specific problem to be addressed.'],
  ['02', 'Identify', 'Explore suitable technology.', 'Identify relevant technologies, products and potential international technology partners.'],
  ['03', 'Develop', 'Build the opportunity.', 'Work with customers and manufacturers to develop commercially and technically appropriate solutions around the requirement.'],
  ['04', 'Deliver', 'Coordinate the pathway.', 'Where appropriate, coordinate sourcing, procurement and implementation through suitable partners.'],
  ['05', 'Build', 'Develop the relationship.', 'Aim to build long-term relationships with customers and international technology providers.'],
] as const

const crossIndustrySolutions = [
  ['01', 'Smart Energy & Energy Management', 'Potential relevance across organisations and facilities requiring energy monitoring, smart metering, energy management, power monitoring or infrastructure visibility.'],
  ['02', 'Digital Infrastructure & Technology Solutions', 'Potential relevance across organisations requiring digital infrastructure, technology sourcing, equipment procurement, project development or integration through suitable partners.'],
  ['03', 'Education Technology & Smart Learning', 'Most relevant to environments involving learning, STEM, robotics, AI education, technical training or innovation labs.'],
  ['04', 'Smart Collaboration & Workplace Technology', 'Potential relevance to suitable organisational or institutional environments involving smart meeting spaces, digital collaboration, wireless presentation, video conferencing or professional displays.'],
] as const

const requirementExamples = [
  'Energy',
  'Digital Infrastructure',
  'Education Technology',
  'Collaboration',
  'Industrial Technology',
  'Infrastructure Projects',
]

export const IndustriesPage: React.FC = () => {
  const overviewRef = useRef<HTMLElement>(null)
  const corporateRef = useRef<HTMLElement>(null)
  const educationRef = useRef<HTMLElement>(null)
  const energyRef = useRef<HTMLElement>(null)
  const industrialRef = useRef<HTMLElement>(null)
  const hospitalityRef = useRef<HTMLElement>(null)
  const healthcareRef = useRef<HTMLElement>(null)
  const governmentRef = useRef<HTMLElement>(null)
  const realEstateRef = useRef<HTMLElement>(null)
  const industryProcessRef = useRef<HTMLElement>(null)
  const crossSolutionsRef = useRef<HTMLElement>(null)
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
        .from('[data-industry-overview-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-industry-principle]', { y: 25, opacity: 0, duration: 0.45, stagger: 0.1 }, '-=0.2')
        .from('[data-industry-divider]', { scaleX: 0, transformOrigin: 'left center', duration: 0.35, stagger: 0.1 }, '-=0.7')
        .from('[data-industry-statement]', { y: 20, opacity: 0, duration: 0.5 }, '-=0.12')
    },
    { scope: overviewRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: corporateRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-corporate-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-corporate-visual]', { scale: 1.05, opacity: 0, duration: 0.7 }, '-=0.35')
        .from('[data-corporate-area]', { y: 25, opacity: 0, duration: 0.43, stagger: 0.1 }, '-=0.2')
    },
    { scope: corporateRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: educationRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-education-visual]', { scale: 1.05, opacity: 0, duration: 0.7 })
        .from('[data-education-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 }, '-=0.35')
        .from('[data-education-area]', { y: 25, opacity: 0, duration: 0.43, stagger: 0.09 }, '-=0.2')
    },
    { scope: educationRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: energyRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-energy-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-energy-visual]', { scale: 1.05, opacity: 0, duration: 0.7 }, '-=0.35')
        .from('[data-energy-line]', { scaleX: 0, transformOrigin: 'left center', duration: 0.45, stagger: 0.08 }, '-=0.35')
        .from('[data-energy-area]', { y: 25, opacity: 0, duration: 0.43, stagger: 0.09 }, '-=0.2')
    },
    { scope: energyRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: industrialRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-industrial-visual]', { scale: 1.05, opacity: 0, duration: 0.7 })
        .from('[data-industrial-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 }, '-=0.35')
        .from('[data-industrial-area]', { y: 25, opacity: 0, duration: 0.43, stagger: 0.09 }, '-=0.2')
    },
    { scope: industrialRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: hospitalityRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-hospitality-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-hospitality-visual]', { scale: 1.04, opacity: 0, duration: 0.7 }, '-=0.35')
        .from('[data-hospitality-area]', { y: 25, opacity: 0, duration: 0.43, stagger: 0.1 }, '-=0.2')
    },
    { scope: hospitalityRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: healthcareRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-healthcare-visual]', { scale: 1.04, opacity: 0, duration: 0.7 })
        .from('[data-healthcare-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 }, '-=0.35')
        .from('[data-healthcare-area]', { y: 25, opacity: 0, duration: 0.43, stagger: 0.1 }, '-=0.2')
    },
    { scope: healthcareRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: governmentRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-government-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-government-visual]', { scale: 1.04, opacity: 0, duration: 0.7 }, '-=0.35')
        .from('[data-government-area]', { y: 25, opacity: 0, duration: 0.43, stagger: 0.09 }, '-=0.2')
        .from('[data-government-divider]', { scaleX: 0, transformOrigin: 'left center', duration: 0.35, stagger: 0.09 }, '-=0.58')
    },
    { scope: governmentRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: realEstateRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-real-estate-visual]', { scale: 1.04, opacity: 0, duration: 0.7 })
        .from('[data-real-estate-line]', { scaleX: 0, transformOrigin: 'left center', duration: 0.42, stagger: 0.08 }, '-=0.4')
        .from('[data-real-estate-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 }, '-=0.2')
        .from('[data-real-estate-area]', { y: 25, opacity: 0, duration: 0.43, stagger: 0.09 }, '-=0.2')
    },
    { scope: realEstateRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: industryProcessRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-industry-process-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-industry-process-stage]', { y: 25, opacity: 0, duration: 0.45, stagger: 0.12 }, '-=0.2')
        .from('[data-industry-process-number]', { x: -15, opacity: 0, duration: 0.32, stagger: 0.12 }, '-=0.82')

      gsap.fromTo(
        '[data-industry-process-line]',
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-industry-process-list]',
            start: 'top 74%',
            end: 'bottom 58%',
            scrub: 0.6,
          },
        },
      )
    },
    { scope: industryProcessRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: crossSolutionsRef.current,
          start: 'top 76%',
          once: true,
        },
      })
        .from('[data-cross-solutions-intro]', { y: 25, opacity: 0, duration: 0.55, stagger: 0.1 })
        .from('[data-cross-solution]', { y: 25, opacity: 0, duration: 0.45, stagger: 0.1 }, '-=0.2')
        .from('[data-cross-solutions-cta]', { y: 15, opacity: 0, duration: 0.4 }, '-=0.15')
    },
    { scope: crossSolutionsRef },
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
        .from('[data-industries-cta-eyebrow]', { y: 18, opacity: 0, duration: 0.4 })
        .from('[data-industries-cta-title-line]', { yPercent: 100, duration: 0.8, stagger: 0.08 }, '-=0.1')
        .from('[data-industries-cta-copy]', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.25')
        .from('[data-industries-cta-action]', { y: 15, opacity: 0, duration: 0.4 }, '-=0.2')
        .from('[data-industries-cta-example]', { y: 15, opacity: 0, duration: 0.36, stagger: 0.07 }, '-=0.1')
    },
    { scope: finalCtaRef },
  )

  return (
    <div className="bg-[#F4F5F2] text-[#102A56]">
      <SEO
        title="Industry Solutions & Sectors | Versata Digital Solutions"
        description="Discover innovative technology solutions across energy, commercial enterprises, healthcare, education, agriculture, and public infrastructure in Nigeria."
      />

      <PageHero
        title="Technology Opportunities Across Diverse Sectors"
        description="Versata explores technology opportunities across sectors where innovative products and solutions can support business, institutional, infrastructure and operational requirements. Each opportunity begins with understanding specific sector needs."
        ctaText="Explore Sectors"
        ctaLink="#industry-overview"
        secondaryCtaText="Discuss Requirements"
        secondaryCtaLink="/contact"
        backgroundImage={heroIndustriesImg}
        imageAlt="Smart power grid transmission towers and clean industrial infrastructure"
      />

      <section ref={overviewRef} aria-labelledby="industry-approach-heading" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p data-industry-overview-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                How We Work Across Sectors
              </p>
              <h2 id="industry-approach-heading" data-industry-overview-intro className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Different Sectors. Different Requirements. The Same Need for Relevant Technology.
              </h2>
            </div>
            <div className="max-w-md text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 lg:col-span-5 lg:pb-1">
              <p data-industry-overview-intro>Each sector has different operational, infrastructure, energy, learning or collaboration requirements.</p>
              <p data-industry-overview-intro className="mt-3 text-slate-500">Versata begins by understanding the organisation&apos;s specific need, then identifies technologies, products and potential partners that may be appropriate for that environment.</p>
            </div>
          </div>

          <ol className="mt-14 grid border-t border-slate-200 md:grid-cols-2 lg:mt-16">
            {industryApproachPrinciples.map(([number, title, description]) => (
              <li key={number} data-industry-principle className="relative min-h-56 overflow-hidden border-b border-slate-200 p-6 sm:min-h-64 sm:p-8 md:nth-[odd]:border-r lg:p-10">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                <div className="mt-12 max-w-md sm:mt-16">
                  <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#102A56] sm:text-3xl">{title}</h3>
                  <p className="mt-4 text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
                </div>
                <span data-industry-divider aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#00AFA9]/70" />
              </li>
            ))}
          </ol>

          <p data-industry-statement className="mt-12 max-w-3xl border-l-2 border-[#00AFA9] pl-5 text-xl font-medium leading-8 tracking-[-0.025em] text-[#102A56] sm:mt-14 sm:text-2xl sm:leading-9">
            The same technology will not be right for every sector  relevance begins with the requirement.
          </p>
        </div>
      </section>

      <section ref={corporateRef} aria-labelledby="corporate-commercial-heading" className="bg-[#F4F5F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <p data-corporate-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                01  Corporate &amp; Commercial
              </p>
              <h2 id="corporate-commercial-heading" data-corporate-intro className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Technology for Modern Business and Commercial Environments
              </h2>
              <div className="mt-6 max-w-xl space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                <p data-corporate-intro>Corporate and commercial organisations depend on reliable technology, modern infrastructure and effective ways to communicate, collaborate and operate.</p>
                <p data-corporate-intro className="text-slate-500">Versata explores technology opportunities around specific organisational requirements, including digital infrastructure, workplace technology, collaboration and relevant energy-management needs.</p>
              </div>
              <p data-corporate-intro className="mt-10 max-w-xl border-l-2 border-[#00AFA9] pl-4 text-lg font-medium leading-7 tracking-[-0.02em] text-[#102A56]">
                The starting point is the business requirement  not a predetermined technology package.
              </p>
            </div>

            <div data-corporate-visual className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200/80 shadow-lg lg:col-span-6 group">
              <img
                src={industryCorporateImg}
                alt="Modern corporate boardroom and digital workplace collaboration"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A56]/85 via-[#102A56]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block rounded-full bg-[#00AFA9]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
                  Modern business environment
                </span>
                <p className="mt-2 text-xl font-bold tracking-tight text-white drop-shadow-md sm:text-2xl">
                  Connect. Collaborate. Operate.
                </p>
              </div>
            </div>
          </div>

          <ol className="mt-14 grid border-t border-slate-200 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {corporateTechnologyAreas.map(([number, title, description]) => (
              <li key={number} data-corporate-area className="border-b border-slate-200 p-6 first:pl-0 md:border-r md:even:border-r-0 lg:min-h-64 lg:py-8 lg:first:pl-0 lg:last:border-r-0">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                <h3 className="mt-5 text-xl font-bold leading-tight tracking-[-0.025em] text-[#102A56]">{title}</h3>
                <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={educationRef} aria-labelledby="education-heading" className="border-y border-[#1557B0]/15 bg-[#E8F0FC]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:order-2 lg:col-span-6">
              <p data-education-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">
                02  Education
              </p>
              <h2 id="education-heading" data-education-intro className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Technology for Smarter Learning and Technical Skills Development
              </h2>
              <div className="mt-6 max-w-xl space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                <p data-education-intro>Educational institutions increasingly require practical technologies that can support modern learning, innovation and technical skills development.</p>
                <p data-education-intro className="text-slate-500">Versata explores opportunities involving smart learning, STEM, robotics, AI education, digital learning systems, innovation environments and engineering or technical training technologies.</p>
              </div>
              <p data-education-intro className="mt-10 max-w-xl border-l-2 border-[#00AFA9] pl-4 text-lg font-medium leading-7 tracking-[-0.02em] text-[#102A56]">
                Learning technology should support the skills and environment the institution is trying to build.
              </p>
            </div>

            <div data-education-visual className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200/80 shadow-lg lg:order-1 lg:col-span-6 group">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85"
                alt="Smart education, robotics laboratory and modern digital learning"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A56]/85 via-[#102A56]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block rounded-full bg-[#1557B0]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
                  Innovation environment
                </span>
                <p className="mt-2 text-xl font-bold tracking-tight text-white drop-shadow-md sm:text-2xl">
                  Learn. Experiment. Build.
                </p>
              </div>
            </div>
          </div>

          <ol className="mt-14 grid border-t border-[#1557B0]/20 md:grid-cols-2 lg:mt-16">
            {educationTechnologyAreas.map(([number, title, description]) => (
              <li key={number} data-education-area className="min-h-56 border-b border-[#1557B0]/20 p-6 sm:min-h-64 sm:p-8 md:nth-[odd]:border-r lg:p-10">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                <div className="mt-12 max-w-md sm:mt-16">
                  <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#102A56] sm:text-3xl">{title}</h3>
                  <p className="mt-4 text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={energyRef} aria-labelledby="energy-heading" className="bg-[#F4F5F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <p data-energy-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                03  Energy
              </p>
              <h2 id="energy-heading" data-energy-intro className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Technology for Better Energy Visibility, Management and Infrastructure
              </h2>
              <div className="mt-6 max-w-xl space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                <p data-energy-intro>Energy requirements increasingly involve better visibility, monitoring and management of infrastructure and power performance.</p>
                <p data-energy-intro className="text-slate-500">Versata explores smart-energy, energy-management and renewable-energy-related technologies around specific organisational, commercial, industrial and infrastructure requirements.</p>
              </div>
            </div>

            <div data-energy-visual className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200/80 shadow-lg lg:col-span-6 group">
              <img
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=85"
                alt="Commercial solar energy grid and smart power monitoring infrastructure"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/85 via-[#071525]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block rounded-full bg-[#00AFA9]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
                  Energy infrastructure
                </span>
                <p className="mt-2 text-xl font-bold tracking-tight text-white drop-shadow-md sm:text-2xl">
                  Monitor. Understand. Manage.
                </p>
              </div>
            </div>
          </div>

          <ol className="mt-14 grid border-t border-slate-200 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {energyTechnologyAreas.map(([number, title, description]) => (
              <li key={number} data-energy-area className="min-h-56 border-b border-slate-200 p-6 sm:p-8 md:nth-[odd]:border-r lg:min-h-64 lg:p-10 lg:nth-[3n+1]:border-r lg:nth-[3n+2]:border-r lg:nth-[3n]:border-r-0">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                <div className="mt-10 max-w-md sm:mt-12">
                  <h3 className="text-xl font-bold leading-tight tracking-[-0.025em] text-[#102A56] sm:text-2xl">{title}</h3>
                  <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={industrialRef} aria-labelledby="industrial-heading" className="border-y border-[#1557B0]/15 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:order-2 lg:col-span-6">
              <p data-industrial-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">
                04  Manufacturing &amp; Industrial
              </p>
              <h2 id="industrial-heading" data-industrial-intro className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Technology for Industrial Operations, Monitoring and Infrastructure
              </h2>
              <div className="mt-6 max-w-xl space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                <p data-industrial-intro>Manufacturing and industrial environments depend on technology that supports visibility, infrastructure performance and operational requirements.</p>
                <p data-industrial-intro className="text-slate-500">Versata explores technology products and systems around monitoring, energy management, infrastructure and operational efficiency requirements.</p>
              </div>
              <p data-industrial-intro className="mt-10 max-w-xl border-l-2 border-[#00AFA9] pl-4 text-lg font-medium leading-7 tracking-[-0.02em] text-[#102A56]">
                Industrial technology should be considered around the actual operational requirement, environment and project.
              </p>
            </div>

            <div data-industrial-visual className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200/80 shadow-lg lg:order-1 lg:col-span-6 group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=85"
                alt="Modern automated manufacturing facility and industrial robotics"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A56]/85 via-[#102A56]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block rounded-full bg-[#1557B0]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
                  Operational environment
                </span>
                <p className="mt-2 text-xl font-bold tracking-tight text-white drop-shadow-md sm:text-2xl">
                  Observe. Coordinate. Develop.
                </p>
              </div>
            </div>
          </div>

          <ol className="mt-14 grid border-t border-slate-200 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {industrialTechnologyAreas.map(([number, title, description]) => (
              <li key={number} data-industrial-area className="min-h-56 border-b border-slate-200 p-6 sm:p-8 md:nth-[odd]:border-r lg:min-h-64 lg:p-10 lg:nth-[3n+1]:border-r lg:nth-[3n+2]:border-r lg:nth-[3n]:border-r-0">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                <div className="mt-10 max-w-md sm:mt-12">
                  <h3 className="text-xl font-bold leading-tight tracking-[-0.025em] text-[#102A56] sm:text-2xl">{title}</h3>
                  <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={hospitalityRef} aria-labelledby="hospitality-heading" className="bg-[#F4F5F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <p data-hospitality-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                05  Hospitality
              </p>
              <h2 id="hospitality-heading" data-hospitality-intro className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Technology for Modern Hospitality Facilities and Operations
              </h2>
              <div className="mt-6 max-w-xl space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                <p data-hospitality-intro>Modern hospitality facilities depend on reliable infrastructure, efficient operations and technology that supports both staff and facility requirements.</p>
                <p data-hospitality-intro className="text-slate-500">Versata explores technology opportunities around digital infrastructure, communication, collaboration, energy management and other practical hospitality requirements where relevant.</p>
              </div>
              <p data-hospitality-intro className="mt-10 max-w-xl border-l-2 border-[#00AFA9] pl-4 text-lg font-medium leading-7 tracking-[-0.02em] text-[#102A56]">
                The technology should support the facility&apos;s real operational requirement  not simply add another layer of complexity.
              </p>
            </div>

            <div data-hospitality-visual className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200/80 shadow-lg lg:col-span-6 group">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85"
                alt="Modern luxury hospitality facility and architectural interior"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A56]/85 via-[#102A56]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block rounded-full bg-[#00AFA9]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
                  Modern facility environment
                </span>
                <p className="mt-2 text-xl font-bold tracking-tight text-white drop-shadow-md sm:text-2xl">
                  Connect. Coordinate. Support.
                </p>
              </div>
            </div>
          </div>

          <ol className="mt-14 grid border-t border-slate-200 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {hospitalityTechnologyAreas.map(([number, title, description]) => (
              <li key={number} data-hospitality-area className="min-h-56 border-b border-slate-200 p-6 sm:min-h-64 sm:p-8 md:border-r md:even:border-r-0 lg:p-10 lg:even:border-r lg:last:border-r-0">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                <div className="mt-12 max-w-md sm:mt-16">
                  <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#102A56] sm:text-3xl">{title}</h3>
                  <p className="mt-4 text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={healthcareRef} aria-labelledby="healthcare-heading" className="border-y border-[#1557B0]/15 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:order-2 lg:col-span-6">
              <p data-healthcare-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">
                06  Healthcare
              </p>
              <h2 id="healthcare-heading" data-healthcare-intro className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Technology Opportunities for Modern Healthcare Facilities
              </h2>
              <div className="mt-6 max-w-xl space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                <p data-healthcare-intro>Healthcare facilities and related organisations rely on dependable infrastructure and technology to support modern operational environments.</p>
                <p data-healthcare-intro className="text-slate-500">Versata explores suitable technology opportunities around infrastructure, energy and broader operational requirements where relevant to the organisation or project.</p>
              </div>
            </div>

            <div data-healthcare-visual className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200/80 shadow-lg lg:order-1 lg:col-span-6 group">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85"
                alt="Clean modern healthcare clinic and diagnostic hospital facility"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A56]/85 via-[#102A56]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block rounded-full bg-[#1557B0]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
                  Facility infrastructure
                </span>
                <p className="mt-2 text-xl font-bold tracking-tight text-white drop-shadow-md sm:text-2xl">
                  Reliable. Relevant. Practical.
                </p>
              </div>
            </div>
          </div>

          <ol className="mt-14 grid border-t border-slate-200 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {healthcareTechnologyAreas.map(([number, title, description]) => (
              <li key={number} data-healthcare-area className="min-h-56 border-b border-slate-200 p-6 sm:min-h-64 sm:p-8 md:border-r md:even:border-r-0 lg:p-10 lg:even:border-r lg:last:border-r-0">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                <div className="mt-12 max-w-md sm:mt-16">
                  <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#102A56] sm:text-3xl">{title}</h3>
                  <p className="mt-4 text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={governmentRef} aria-labelledby="government-heading" className="border-y border-[#1557B0]/15 bg-[#E8F0FC]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <p data-government-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">
                07  Government &amp; Public Sector
              </p>
              <h2 id="government-heading" data-government-intro className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Technology for Institutional and Public-Sector Requirements
              </h2>
              <div className="mt-6 max-w-xl space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                <p data-government-intro>Public-sector and institutional projects can involve diverse infrastructure and technology requirements.</p>
                <p data-government-intro className="text-slate-500">Versata explores suitable technologies, sourcing opportunities and project-development pathways around appropriate institutional requirements.</p>
              </div>
              <p data-government-intro className="mt-10 max-w-xl border-l-2 border-[#00AFA9] pl-4 text-lg font-medium leading-7 tracking-[-0.02em] text-[#102A56]">
                Each opportunity should begin with a clearly defined institutional requirement and an appropriate technology response.
              </p>
            </div>

            <div data-government-visual className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200/80 shadow-lg lg:col-span-6 group">
              <img
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1600&q=85"
                alt="Modern civic and governmental public sector infrastructure"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A56]/85 via-[#102A56]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block rounded-full bg-[#00AFA9]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
                  Institutional infrastructure
                </span>
                <p className="mt-2 text-xl font-bold tracking-tight text-white drop-shadow-md sm:text-2xl">
                  Define. Source. Develop.
                </p>
              </div>
            </div>
          </div>

          <ol className="mt-14 border-t border-[#1557B0]/20 lg:mt-16">
            {governmentTechnologyAreas.map(([number, title, description]) => (
              <li key={number} data-government-area className="relative grid grid-cols-[2.5rem_1fr] gap-5 overflow-hidden border-b border-[#1557B0]/20 py-6 sm:grid-cols-[4rem_minmax(15rem,0.9fr)_minmax(14rem,1.1fr)] sm:items-baseline sm:gap-6 sm:py-8">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                <h3 className="text-xl font-bold leading-tight tracking-[-0.025em] text-[#102A56] sm:text-2xl">{title}</h3>
                <p className="max-w-md text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
                <span data-government-divider aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#00AFA9]/70" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={realEstateRef} aria-labelledby="real-estate-heading" className="bg-[#F4F5F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:order-2 lg:col-span-6">
              <p data-real-estate-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                08  Real Estate &amp; Infrastructure
              </p>
              <h2 id="real-estate-heading" data-real-estate-intro className="mt-4 max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Technology for Modern Buildings, Facilities and Infrastructure
              </h2>
              <div className="mt-6 max-w-xl space-y-3 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                <p data-real-estate-intro>Modern buildings and infrastructure projects increasingly depend on technology that supports connectivity, energy visibility, facility operations and long-term infrastructure requirements.</p>
                <p data-real-estate-intro className="text-slate-500">Versata explores suitable technologies around the specific needs of a development, facility or infrastructure project.</p>
              </div>
              <p data-real-estate-intro className="mt-10 max-w-xl border-l-2 border-[#00AFA9] pl-4 text-lg font-medium leading-7 tracking-[-0.02em] text-[#102A56]">
                The technology should respond to the project requirement, infrastructure environment and long-term operational need.
              </p>
            </div>

            <div data-real-estate-visual className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200/80 shadow-lg lg:order-1 lg:col-span-6 group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85"
                alt="Modern architectural commercial real estate and sustainable smart buildings"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A56]/85 via-[#102A56]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block rounded-full bg-[#1557B0]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
                  Built environment
                </span>
                <p className="mt-2 text-xl font-bold tracking-tight text-white drop-shadow-md sm:text-2xl">
                  Connect. Monitor. Develop.
                </p>
              </div>
            </div>
          </div>

          <ol className="mt-14 grid border-t border-slate-200 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {realEstateTechnologyAreas.map(([number, title, description]) => (
              <li key={number} data-real-estate-area className="min-h-56 border-b border-slate-200 p-6 sm:p-8 md:nth-[odd]:border-r lg:min-h-64 lg:p-10 lg:nth-[3n+1]:border-r lg:nth-[3n+2]:border-r lg:nth-[3n]:border-r-0">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                <div className="mt-10 max-w-md sm:mt-12">
                  <h3 className="text-xl font-bold leading-tight tracking-[-0.025em] text-[#102A56] sm:text-2xl">{title}</h3>
                  <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section ref={industryProcessRef} aria-labelledby="industry-process-heading" className="overflow-hidden bg-[#102A56] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p data-industry-process-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">
                  How We Develop Industry Opportunities
                </p>
                <h2 id="industry-process-heading" data-industry-process-intro className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[54px]">
                  From Industry Requirement to Practical Technology Opportunity
                </h2>
                <div className="mt-6 max-w-md space-y-3 text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
                  <p data-industry-process-intro>Across every sector, Versata begins with the specific customer or project requirement rather than a predetermined technology package.</p>
                  <p data-industry-process-intro className="text-slate-400">Our approach is to understand the need, identify suitable technologies and partners, develop the opportunity and coordinate delivery where appropriate.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div data-industry-process-list className="relative">
                <div data-industry-process-line aria-hidden="true" className="absolute bottom-7 left-5 top-5 w-px origin-top bg-[#35D0C5]/60 sm:left-6" />
                <ol>
                  {industryDevelopmentStages.map(([number, title, lead, description]) => (
                    <li key={number} data-industry-process-stage className="relative grid grid-cols-[2.5rem_1fr] gap-6 border-b border-white/15 py-7 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[3rem_1fr] sm:gap-8 sm:py-9">
                      <span data-industry-process-number className="relative z-10 flex h-10 w-10 items-center justify-center border border-[#35D0C5]/60 bg-[#102A56] text-[10px] font-bold tracking-[0.12em] text-[#35D0C5] sm:h-12 sm:w-12">
                        {number}
                      </span>
                      <div className="pb-1 sm:pb-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#35D0C5]">{title}</p>
                        <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl">{lead}</h3>
                        <p className="mt-3 max-w-xl text-xs leading-5 text-slate-300 sm:text-[13px] sm:leading-6">{description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={crossSolutionsRef} aria-labelledby="cross-industry-solutions-heading" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <p data-cross-solutions-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">
                Cross-Industry Solutions
              </p>
              <h2 id="cross-industry-solutions-heading" data-cross-solutions-intro className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#102A56] sm:text-5xl lg:text-[54px]">
                Different Sectors Can Share Similar Technology Challenges
              </h2>
            </div>
            <div className="max-w-md text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7 lg:col-span-5 lg:pb-1">
              <p data-cross-solutions-intro>Although each industry has different requirements, similar technology challenges can appear across multiple sectors.</p>
              <p data-cross-solutions-intro className="mt-3 text-slate-500">Versata explores suitable solution areas based on the specific organisation, environment and project requirement.</p>
            </div>
          </div>

          <ol className="mt-14 border-t border-slate-200 lg:mt-16">
            {crossIndustrySolutions.map(([number, title, description]) => (
              <li key={number} data-cross-solution className="grid gap-3 border-b border-slate-200 py-6 sm:grid-cols-[4rem_minmax(16rem,1fr)_minmax(16rem,0.9fr)] sm:items-baseline sm:gap-6 sm:py-8">
                <span className="text-xs font-bold tracking-[0.13em] text-[#1557B0]">{number}</span>
                <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#102A56] sm:text-3xl">{title}</h3>
                <p className="max-w-md text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{description}</p>
              </li>
            ))}
          </ol>

          <Link
            data-cross-solutions-cta
            to="/solutions"
            className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#00AFA9] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#008F8A] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFA9] focus-visible:ring-offset-2"
          >
            Explore Our Solutions
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section ref={finalCtaRef} aria-labelledby="industries-final-cta-heading" className="relative overflow-hidden bg-[#1557B0] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-8 hidden -translate-x-1/2 select-none text-[clamp(5rem,15vw,13rem)] font-bold uppercase leading-none tracking-[-0.09em] text-white/[0.035] lg:block">Requirement</div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p data-industries-cta-eyebrow className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">
              Discuss Your Requirement
            </p>
            <h2 id="industries-final-cta-heading" className="mt-5 text-5xl font-bold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              <span className="block overflow-hidden"><span data-industries-cta-title-line className="block">Have a Technology Requirement?</span></span>
              <span className="block overflow-hidden"><span data-industries-cta-title-line className="block">Let&apos;s Explore the Right Path.</span></span>
            </h2>
            <div className="mx-auto mt-7 max-w-2xl space-y-3 text-sm leading-6 text-slate-200 sm:text-[15px] sm:leading-7">
              <p data-industries-cta-copy>Tell us about the technology, infrastructure or operational requirement your organisation is trying to address.</p>
              <p data-industries-cta-copy className="text-slate-300">Versata can explore suitable technologies, products and international providers that may be relevant to the requirement.</p>
            </div>
            <div data-industries-cta-action className="mt-9">
              <p className="mb-4 text-xs leading-5 text-slate-200 sm:text-[13px]">You can start with the challenge, project or requirement  not necessarily the technology.</p>
              <Link
                to="/contact"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[#00AFA9] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#008F8A] hover:shadow-md active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1557B0]"
              >
                Discuss Your Requirement
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <ul className="relative mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-x-5 gap-y-3 border-t border-white/20 pt-7 sm:mt-20 sm:gap-x-7">
            {requirementExamples.map((example) => (
              <li key={example} data-industries-cta-example className="border-l border-[#35D0C5]/60 pl-3 text-xs font-bold leading-5 text-white sm:text-[13px]">
                {example}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
