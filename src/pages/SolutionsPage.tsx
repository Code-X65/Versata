import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'

import { PageHero } from '@/components/PageHero'
import heroSolutionsImg from '@/assets/hero_solutions.webp'
import smartEnergyImg from '@/assets/solution_smart_energy.webp'
import digitalInfraImg from '@/assets/solution_digital_infra.webp'

gsap.registerPlugin(ScrollTrigger)

const principles = [
  ['01', 'Requirement-Led', 'Start with the customer’s actual business, institutional or infrastructure need.'],
  ['02', 'Technology-Relevant', 'Identify technologies and products that are appropriate to the requirement.'],
  ['03', 'Partner-Connected', 'Explore suitable technology providers, manufacturers and technical partners.'],
  ['04', 'Opportunity-Focused', 'Develop commercially and technically appropriate opportunities around real requirements.'],
]
const energyAreas = [
  ['Electrical & Smart Energy Infrastructure Installation and Commissioning', 'We provide end-to-end installation and commissioning of electrical and smart energy infrastructure for corporate, domestic, and industrial clients. From design to execution, we ensure efficient, safe, and reliable energy systems that meet international standards.'],
  ['Solar Innovative Technology Solutions', 'We deliver cutting-edge solar solutions tailored to your energy needs. Our services include solar panel supply, installation, and integration for homes, businesses, and large-scale projects  helping you reduce costs and achieve energy independence.'],
  [' Innovative Renewable Energy Technologies', 'We harness the power of innovation to provide sustainable renewable energy technologies. Our solutions are designed to optimize energy efficiency, promote environmental sustainability, and ensure long-term energy security for government and large organizations.'],
  ['After-Sales Support', 'Our commitment does not end at installation. We offer reliable after-sales support including system monitoring, maintenance, troubleshooting, and technical assistance to ensure your energy systems perform optimally at all times.'],

]
const infrastructureAreas = [
  ['Corporate Technology Solutions', 'Technology solutions supporting modern business and organisational environments.'],
  ['Digital Infrastructure', 'Infrastructure technologies supporting modern digital operations and organisational requirements.'],
  ['Technology Sourcing', 'Identification and sourcing of suitable technologies based on specific requirements.'],
  ['Technology Project Development', 'Development of technology opportunities and project pathways around identified needs.'],
  ['Equipment Procurement', 'Coordination of appropriate technology equipment sourcing where relevant.'],
  ['Technology Integration', 'Exploration of suitable integration approaches for relevant technology solutions.'],
  ['Innovative International Technology Solutions', 'Identification of international technology solutions with potential relevance to Nigerian market requirements.'],
]

export const SolutionsPage: React.FC = () => {
  const overviewRef = useRef<HTMLElement>(null)
  const energyRef = useRef<HTMLElement>(null)
  const infrastructureRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.timeline({ defaults: { ease: 'power3.out' }, scrollTrigger: { trigger: overviewRef.current, start: 'top 76%', once: true } })
      .from('[data-overview-intro]', { y: 26, opacity: 0, duration: 0.6, stagger: 0.1 })
      .from('[data-principle]', { y: 24, opacity: 0, duration: 0.42, stagger: 0.09 }, '-=0.25')
  }, { scope: overviewRef })
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.timeline({ defaults: { ease: 'power3.out' }, scrollTrigger: { trigger: energyRef.current, start: 'top 76%', once: true } })
      .from('[data-energy-intro]', { y: 26, opacity: 0, duration: 0.6, stagger: 0.1 })
      .from('[data-energy-area]', { y: 24, opacity: 0, duration: 0.42, stagger: 0.09 }, '-=0.25')
  }, { scope: energyRef })
  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.timeline({ defaults: { ease: 'power3.out' }, scrollTrigger: { trigger: infrastructureRef.current, start: 'top 76%', once: true } })
      .from('[data-infra-intro]', { y: 26, opacity: 0, duration: 0.6, stagger: 0.1 })
      .from('[data-infra-area]', { y: 24, opacity: 0, duration: 0.42, stagger: 0.09 }, '-=0.25')
  }, { scope: infrastructureRef })

  return <div className="bg-[#F4F5F2] text-[#102A56]">
    <SEO
      title="Smart Energy & Tech Solutions | Versata Digital Solutions"
      description="Explore practical technology solutions across solar microgrids, smart energy, digital infrastructure, education tech, and modern systems in Nigeria."
    />
    
    <PageHero
      title="Technology Solutions Built Around Real-World Needs"
      description="Versata works with organisations to identify and explore practical technology solutions across energy, digital infrastructure, education and modern Agricultural systems."
      ctaText="Discuss Your Requirement"
      ctaLink="/contact"
      secondaryCtaText="Explore Partnerships"
      secondaryCtaLink="/partnerships"
      backgroundImage={heroSolutionsImg}
    />
    <section id="solutions-overview" ref={overviewRef} aria-labelledby="solutions-overview-heading" className="border-y border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"><div className="grid gap-8 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-7"><p data-overview-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">Our Solutions Approach</p><h2 id="solutions-overview-heading" data-overview-intro className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">Start With the Requirement. Then Find the Right Technology.</h2></div><div data-overview-intro className="max-w-md text-sm leading-6 text-slate-600 lg:col-span-5"><p>Versata approaches technology solutions by first understanding the organisation’s requirement and the specific problem that needs to be addressed.</p><p className="mt-3 text-slate-500">We then identify suitable technologies, products and potential technology partners, combining local market knowledge, business development and technology sourcing to develop practical opportunities.</p></div></div><ol className="mt-14 grid border-t border-slate-200 md:grid-cols-2 lg:grid-cols-4">{principles.map(([number,title,description]) => <li key={number} data-principle className="border-b border-slate-200 p-6 first:pl-0 md:border-r md:last:border-r-0 lg:py-0 lg:pt-6"><span className="text-xs font-bold text-[#1557B0]">{number}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 text-xs leading-5 text-slate-500">{description}</p></li>)}</ol><p className="mt-12 border-l-2 border-[#00AFA9] pl-4 text-lg font-medium">The objective is not simply to source technology, but to identify technology that is relevant to the requirement.</p></div></section>
    <section ref={energyRef} aria-labelledby="energy-heading" className="bg-[#F4F5F2]"><div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"><div className="grid gap-12 lg:grid-cols-12 lg:items-center"><div className="lg:col-span-6"><p data-energy-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">01  Smart Energy</p><h2 id="energy-heading" data-energy-intro className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">Better Visibility Into Energy Infrastructure and Performance</h2><p data-energy-intro className="mt-6 text-sm leading-6 text-slate-600">Identification, procurement, and installation of smart energy solutions for both corporate and domestic clients.</p><p data-energy-intro className="mt-4 text-sm leading-6 text-slate-500">Our focus areas include Uninterruptible Power Supply (UPS) systems, solar energy, renewable energy solutions, and commercial energy infrastructure for government and large-scale organizations.</p></div><div className="relative overflow-hidden rounded-xl border border-slate-200/80 shadow-lg lg:col-span-6 aspect-[4/3] group"><img src={smartEnergyImg} alt="Smart energy infrastructure and solar power monitoring facility" className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" /><div className="absolute bottom-6 left-6 right-6 text-white"><span className="inline-block rounded-full bg-[#00AFA9]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">Energy Focus</span><p className="mt-2 text-xl font-bold tracking-tight text-white drop-shadow-md sm:text-2xl">Monitor. Understand. Manage.</p></div></div></div><ol className="mt-14 grid border-t border-slate-200 md:grid-cols-2 lg:grid-cols-4">{energyAreas.map(([title,description],i) => <li key={title} data-energy-area className="group border-b border-r border-slate-200 p-5 hover:border-[#00AFA9]"><span className="text-[11px] font-bold text-[#00AFA9]">0{i+1}</span><h3 className="mt-4 text-base font-bold group-hover:translate-x-1">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{description}</p></li>)}</ol></div></section>
    <section ref={infrastructureRef} aria-labelledby="infrastructure-heading" className="bg-[#E8F0FC]"><div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"><div className="grid gap-12 lg:grid-cols-12 lg:items-center"><div className="relative overflow-hidden rounded-xl border border-slate-200/80 shadow-lg lg:col-span-5 aspect-[4/3] group"><img src={digitalInfraImg} alt="Modern enterprise digital infrastructure and server facility" className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#102A56]/85 via-[#102A56]/20 to-transparent pointer-events-none" /><div className="absolute bottom-6 left-6 right-6 text-white"><span className="inline-block rounded-full bg-[#1557B0]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">Digital Infrastructure</span><p className="mt-2 text-sm font-semibold tracking-wide text-white/95 drop-shadow-md">Requirement → Source → Procure → Integrate</p></div></div><div className="lg:col-span-7"><p data-infra-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1557B0]">02  Digital Infrastructure</p><h2 id="infrastructure-heading" data-infra-intro className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">Technology Infrastructure for Modern Organisations</h2><p data-infra-intro className="mt-6 text-sm leading-6 text-slate-600">Versata helps organisations identify and source technology solutions that can improve productivity, efficiency and infrastructure performance.</p><p data-infra-intro className="mt-4 text-sm leading-6 text-slate-500">From technology sourcing and equipment procurement to integration and project development, the focus is on identifying practical solutions around real organisational requirements.</p></div></div><ol className="mt-14 grid gap-px bg-[#1557B0]/15 md:grid-cols-2 lg:grid-cols-3">{infrastructureAreas.map(([title,description],i) => <li key={title} data-infra-area className="group bg-[#E8F0FC] p-6 hover:bg-white"><span className="text-[11px] font-bold text-[#1557B0]">0{i+1}</span><h3 className="mt-4 text-lg font-bold group-hover:translate-x-1">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{description}</p></li>)}</ol></div></section>
    <SolutionSection number="03" eyebrow="Education Technology" heading="Technology for Smarter Learning and Technical Skills Development" copy="Versata supports educational institutions seeking practical technologies that can enhance learning, innovation and technical skills development." detail="Our areas of focus include smart classrooms, STEM, robotics, AI education, digital learning, innovation laboratories, makerspaces and engineering or technical training solutions." items={['Smart Classroom Technology','STEM Education','Robotics','AI Education','Digital Learning Systems','Innovation Laboratories','Makerspaces','Engineering and Technical Training Solutions']} tone="bg-white" />
    <SolutionSection number="04" eyebrow="Smart Collaboration" heading="Technology for Better Meetings, Communication and Collaboration" copy="Modern organisations need better ways to communicate, collaborate and work." detail="Versata explores technology solutions for smart meeting environments, digital collaboration, wireless presentation, video conferencing, professional displays and modern workplace requirements." items={['Smart Meeting Environments','Digital Collaboration','Wireless Presentation','Video Conferencing','Professional Display Solutions','Workplace Technology']} tone="bg-[#DDF7F5]" />
    <section className="bg-[#102A56] text-white"><div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24"><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#35D0C5]">How We Develop Solutions</p><h2 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">From Requirement to Practical Technology Opportunity</h2><p className="mt-6 max-w-2xl text-sm text-slate-300">Across each solution area, Versata begins by understanding the requirement before identifying technologies or potential partners.</p><ol className="mt-12 grid gap-6 md:grid-cols-5">{['Understand','Identify','Develop','Deliver','Build'].map((x,i)=><li key={x} className="border-t border-white/20 pt-5"><b className="text-[#35D0C5]">0{i+1}</b><h3 className="mt-4 text-xl font-bold">{x}</h3></li>)}</ol></div></section>
    <section className="bg-[#E8F0FC]"><div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24"><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#1557B0]">Technology Sourcing & Partners</p><h2 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">Connecting Relevant International Technology With Local Requirements</h2><p className="mt-6 max-w-2xl text-sm leading-6 text-slate-600">Versata is building relationships with selected international manufacturers and technology providers whose solutions have potential in the Nigerian market.</p><Link to="/partnerships" className="mt-8 inline-flex items-center rounded-sm bg-[#00AFA9] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#008F8A] active:scale-98">Explore Partnership Opportunities <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link></div></section>
    <section className="bg-[#071525] text-white"><div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-10 lg:px-12 lg:py-24"><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#35D0C5]">Start With the Requirement</p><h2 className="mt-4 text-4xl font-bold sm:text-5xl">Tell Us What You Need. We’ll Explore the Right Technology Path.</h2><div className="mt-8 flex justify-center gap-3"><Link to="/contact" className="rounded-sm bg-[#00AFA9] px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#008F8A] active:scale-98">Discuss Your Requirement</Link><Link to="/partnerships" className="rounded-sm border border-white/30 px-5 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-white/10 active:scale-98">Partner With Versata</Link></div></div></section>
  </div>
}

function SolutionSection({ number, eyebrow, heading, copy, detail, items, tone }: { number?: string; eyebrow: string; heading: string; copy: string; detail?: string; items: string[]; tone: string }) { return <section className={tone}><div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24"><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#00AFA9]">{number ? `${number}  ` : ''}{eyebrow}</p><h2 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">{heading}</h2><p className="mt-6 max-w-2xl text-sm leading-6 text-slate-600">{copy}</p>{detail && <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">{detail}</p>}<ol className="mt-12 grid border-t border-slate-200 md:grid-cols-2 lg:grid-cols-4">{items.map((item,i)=><li key={item} className="border-b border-r border-slate-200 p-5"><b className="text-xs text-[#1557B0]">0{i+1}</b><h3 className="mt-4 text-base font-bold">{item}</h3></li>)}</ol></div></section> }
