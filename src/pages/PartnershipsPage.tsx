import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageHero } from '@/components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const valueAreas = [
  ['01', 'Local Market Access', 'Identify relevant Nigerian organisations and decision-makers for suitable technologies.'],
  ['02', 'Business Development', 'Actively develop opportunities rather than waiting passively for enquiries.'],
  ['03', 'Project Identification', 'Identify projects where a manufacturer’s technology may provide a practical solution.'],
  ['04', 'Local Customer Engagement', 'Support initial meetings, product presentations, commercial discussions and relationship development.'],
  ['05', 'Market Intelligence', 'Provide feedback around customer requirements, competitor activity, pricing expectations, local opportunities and product suitability.'],
  ['06', 'Long-Term Market Development', 'Work toward a sustainable market for selected strategic partners rather than focusing only on isolated transactions.'],
] as const

const phases = [
  ['01', 'Market Development Partner', 'A proposed practical starting point.', ['Introduce products to suitable Nigerian customers', 'Identify commercial and institutional opportunities', 'Develop relationships with potential end users', 'Provide local market intelligence, awareness and customer engagement'], ['Product information and catalogues', 'Technical training and marketing materials', 'Demonstrations, technical assistance and project quotations', 'Supply against confirmed orders']],
  ['02', 'Authorised Reseller or Project Partner', 'A future potential stage following successful market development.', ['Potential future types: reseller, project partner, systems integration partner or dealer', 'May include authorised brand use and partner pricing', 'Could include structured product training, certification or joint marketing', 'Project registration and lead-sharing where applicable']],
  ['03', 'Authorised Distribution', 'A conditional future arrangement, subject to agreement and performance.', ['May discuss Nigerian or wider West African market-development rights', 'Could cover defined product categories', 'May progressively include local technical support and demonstration facilities', 'Any exclusivity would only be discussed after mutually agreed performance requirements are met']],
] as const

const focusAreas = [
  ['01', 'Smart Energy & Digital Energy Management', ['Energy monitoring', 'Smart metering', 'Energy management systems', 'Power-quality monitoring', 'Commercial and industrial energy optimisation', 'Microgrid management, remote infrastructure, generator and battery monitoring']],
  ['02', 'Smart Meeting & Collaboration Technology', ['Wireless presentation', 'Smart meeting rooms', 'Hybrid collaboration', 'Digital workplace solutions', 'Video conferencing integration', 'Professional AV integration']],
  ['03', 'Advanced Education Technology', ['STEM laboratories', 'Robotics education', 'AI education', 'Engineering training systems', 'Makerspace technology', 'Digital learning systems and university laboratory equipment']],
] as const

const commercialSteps = [
  'Customer Opportunity Identified', 'Versata Engages Customer', 'Manufacturer Supports Technical Solution', 'Formal Project Quotation', 'Customer Confirms Order', 'Manufacturer Supplies Against Confirmed Order', 'Versata Coordinates Local Delivery, Installation and Customer Support',
]

const discussionGroups = [
  ['Partner Status', ['Existing authorised representation in Nigeria', 'Availability of market-development, reseller, project-partner or distributor appointments', 'Requirements for becoming an authorised partner']],
  ['Commercial Terms', ['Minimum order requirements', 'Project-based ordering', 'Advance inventory requirements', 'Potential territory rights after agreed performance']],
  ['Training & Support', ['Product training', 'Technical certification', 'Marketing support', 'Demo-unit programmes', 'Technical and installation support']],
  ['Customer Support', ['Warranty arrangements', 'Local support expectations']],
] as const

const capabilityAreas = ['Technical Knowledge', 'Staff Training', 'Demonstration Capability', 'Local Customer Support', 'Installation Partnerships', 'Service Capability', 'Marketing & Market Development']

export const PartnershipsPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const sections = gsap.utils.toArray<HTMLElement>('[data-partnership-section]')
    sections.forEach((section) => {
      const intro = section.querySelectorAll('[data-partnership-intro]')
      const items = section.querySelectorAll('[data-partnership-item]')
      const lines = section.querySelectorAll('[data-partnership-line]')
      const closing = section.querySelectorAll('[data-partnership-closing]')
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' }, scrollTrigger: { trigger: section, start: 'top 78%', once: true } })
      if (intro.length) timeline.from(intro, { y: 22, opacity: 0, duration: 0.5, stagger: 0.08 })
      if (lines.length) timeline.from(lines, { scaleX: 0, transformOrigin: 'left center', duration: 0.5, stagger: 0.08 }, '-=0.2')
      if (items.length) timeline.from(items, { y: 22, opacity: 0, duration: 0.42, stagger: 0.08 }, '-=0.18')
      if (closing.length) timeline.from(closing, { y: 16, opacity: 0, duration: 0.4 }, '-=0.12')
    })
  }, { scope: pageRef })

  return <div ref={pageRef} className="bg-[#F4F5F2] text-[#102A56]">
    <SEO title="Partnerships | Versata Digital Solutions" description="Versata develops practical, phased market-development relationships with selected international technology manufacturers for Nigerian opportunities." />

    <PageHero
      title="Building Technology Partnerships for the Nigerian Market"
      description="Versata Digital Solutions works to identify, introduce and develop relevant international technologies for organisations and institutions in Nigeria, while building practical market-development relationships with selected manufacturers."
      ctaText="Discuss a Partnership"
      ctaLink="/contact"
      secondaryCtaText="Explore Partnership Model"
      secondaryCtaLink="#partnership-model"
      backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2400&q=85"
    />

    <section data-partnership-section className="border-y border-slate-200 bg-white" aria-labelledby="what-versata-brings"><div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"><div className="grid gap-10 lg:grid-cols-12 lg:gap-16"><div className="lg:col-span-5"><p data-partnership-intro className="text-[11px] font-bold uppercase tracking-[.2em] text-[#00AFA9]">What Versata Brings</p><h2 id="what-versata-brings" data-partnership-intro className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-.04em] sm:text-5xl">Local Market Development Built Around Real Opportunities</h2><p data-partnership-intro className="mt-6 max-w-md text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">Versata’s role is to help selected international manufacturers understand and develop Nigerian market opportunities through local engagement, project identification, customer development and market intelligence.</p></div><ol className="border-t border-slate-200 lg:col-span-7">{valueAreas.map(([number,title,copy]) => <li key={number} data-partnership-item className="grid gap-3 border-b border-slate-200 py-5 sm:grid-cols-[3rem_1fr_1.25fr] sm:gap-5"><span className="text-xs font-bold tracking-[.14em] text-[#1557B0]">{number}</span><h3 className="text-lg font-bold tracking-[-.025em] sm:text-xl">{title}</h3><p className="text-xs leading-5 text-slate-600 sm:text-[13px] sm:leading-6">{copy}</p></li>)}</ol></div></div></section>

    <section id="partnership-model" data-partnership-section className="overflow-hidden bg-[#102A56] text-white" aria-labelledby="partnership-model-heading"><div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"><div className="max-w-3xl"><p data-partnership-intro className="text-[11px] font-bold uppercase tracking-[.2em] text-[#35D0C5]">Our Partnership Model</p><h2 id="partnership-model-heading" data-partnership-intro className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-.04em] sm:text-5xl">Start Practical. Prove the Market. Build the Relationship.</h2><p data-partnership-intro className="mt-6 text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">Versata proposes beginning with practical market development and project opportunities before progressing toward deeper commercial relationships where performance and market potential justify it.</p></div><div data-partnership-line aria-hidden="true" className="mt-12 hidden h-px bg-[#35D0C5]/60 lg:block" /><ol className="relative mt-10 grid gap-10 lg:grid-cols-3 lg:gap-8">{phases.map(([number,title,lead,items,support]) => <li key={number} data-partnership-item className="border-t border-white/20 pt-6"><span className="text-xs font-bold tracking-[.16em] text-[#35D0C5]">Phase {number}</span><h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-.035em]">{title}</h3><p className="mt-3 text-sm font-medium leading-6 text-slate-300">{lead}</p><ul className="mt-6 space-y-2 border-l border-[#35D0C5]/60 pl-4 text-xs leading-5 text-slate-300">{items.map((item) => <li key={item}>{item}</li>)}</ul>{support && <><p className="mt-6 text-[10px] font-bold uppercase tracking-[.16em] text-[#35D0C5]">Manufacturer support may include</p><ul className="mt-3 space-y-2 text-xs leading-5 text-slate-300">{support.map((item) => <li key={item}>{item}</li>)}</ul></>}</li>)}</ol></div></section>

    <section data-partnership-section className="bg-[#E8F0FC]" aria-labelledby="market-focus-heading"><div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"><p data-partnership-intro className="text-[11px] font-bold uppercase tracking-[.2em] text-[#1557B0]">Initial Market Focus</p><h2 id="market-focus-heading" data-partnership-intro className="mt-4 max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-.04em] sm:text-5xl">Where We See Practical Near-Term Opportunities</h2><div className="mt-12 grid gap-8 lg:grid-cols-3">{focusAreas.map(([number,title,items]) => <article key={number} data-partnership-item className="border-t border-[#1557B0]/25 pt-6"><span className="text-xs font-bold tracking-[.16em] text-[#1557B0]">{number}</span><h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-.03em]">{title}</h3><p className="mt-5 text-[10px] font-bold uppercase tracking-[.16em] text-slate-500">Potential technologies</p><ul className="mt-3 space-y-2 text-xs leading-5 text-slate-600">{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

    <section data-partnership-section className="bg-white" aria-labelledby="commercial-model-heading"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24"><div className="lg:col-span-5"><p data-partnership-intro className="text-[11px] font-bold uppercase tracking-[.2em] text-[#00AFA9]">Preferred Commercial Model</p><h2 id="commercial-model-heading" data-partnership-intro className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-.04em] sm:text-5xl">Project-Based Market Entry Before Inventory Commitment</h2><p data-partnership-intro className="mt-6 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">Versata prefers to begin with project-based or back-to-back procurement, allowing opportunities to develop around confirmed customer requirements before significant local inventory commitments are made.</p></div><ol className="relative border-l border-[#00AFA9]/60 pl-7 lg:col-span-7">{commercialSteps.map((step,index) => <li key={step} data-partnership-item className="relative pb-6 last:pb-0"><span className="absolute -left-[2.05rem] top-0 flex h-4 w-4 items-center justify-center rounded-full border border-[#00AFA9] bg-white text-[8px] font-bold text-[#084d3c]">{index + 1}</span><p className="text-sm font-bold leading-6 text-[#102A56]">{step}</p></li>)}</ol><p data-partnership-closing className="border-l-2 border-[#00AFA9] pl-4 text-lg font-medium leading-7 tracking-[-.02em] text-[#102A56] lg:col-span-12">This model can reduce initial inventory risk while allowing both parties to evaluate genuine market demand.</p></div></section>

    <section data-partnership-section className="bg-[#F4F5F2]" aria-labelledby="discussion-heading"><div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24"><div className="max-w-3xl"><p data-partnership-intro className="text-[11px] font-bold uppercase tracking-[.2em] text-[#00AFA9]">Partnership Discussion</p><h2 id="discussion-heading" data-partnership-intro className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-.04em] sm:text-5xl">Key Questions We Want to Explore With Potential Partners</h2><p data-partnership-intro className="mt-6 text-sm leading-6 text-slate-600">These are discussion points for prospective manufacturers, not existing agreements.</p></div><div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">{discussionGroups.map(([title,items]) => <article key={title} data-partnership-item className="border-t border-slate-300 pt-5"><h3 className="text-[11px] font-bold uppercase tracking-[.18em] text-[#1557B0]">{title}</h3><ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

    <section data-partnership-section className="border-y border-slate-200 bg-white" aria-labelledby="vision-heading"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24"><div className="lg:col-span-5"><p data-partnership-intro className="text-[11px] font-bold uppercase tracking-[.2em] text-[#00AFA9]">Long-Term Vision</p><h2 id="vision-heading" data-partnership-intro className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-.04em] sm:text-5xl">More Than Buying and Reselling Products</h2><p data-partnership-intro className="mt-6 text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">Versata’s objective is to develop strategic relationships with selected international manufacturers and progressively build the local capability required to support sustainable market development.</p></div><div className="lg:col-span-7"><div className="grid gap-px bg-slate-200 sm:grid-cols-2">{capabilityAreas.map((item,index) => <div key={item} data-partnership-item className="bg-white px-5 py-5"><span className="text-[10px] font-bold tracking-[.16em] text-[#1557B0]">0{index + 1}</span><p className="mt-2 text-lg font-bold tracking-[-.025em]">{item}</p></div>)}</div><p data-partnership-closing className="mt-8 border-l-2 border-[#00AFA9] pl-4 text-lg font-medium leading-7 tracking-[-.02em]">The objective is to build sustainable long-term opportunities for both the manufacturer and Versata.</p></div></div></section>

    <section data-partnership-section className="relative overflow-hidden bg-[#1557B0] text-white" aria-labelledby="final-partnership-heading"><div aria-hidden="true" className="absolute left-1/2 top-8 hidden -translate-x-1/2 select-none text-[clamp(5rem,15vw,13rem)] font-bold uppercase leading-none tracking-[-.09em] text-white/[.04] lg:block">Market</div><div className="relative mx-auto max-w-7xl px-6 py-20 text-center sm:px-10 sm:py-24 lg:px-12 lg:py-28"><p data-partnership-intro className="text-[11px] font-bold uppercase tracking-[.2em] text-[#35D0C5]">Start a Partnership Conversation</p><h2 id="final-partnership-heading" data-partnership-intro className="mx-auto mt-5 max-w-4xl text-5xl font-bold leading-[.96] tracking-[-.05em] sm:text-6xl lg:text-7xl">Looking for a Serious Nigerian Market-Development Partner?</h2><p data-partnership-intro className="mx-auto mt-7 max-w-2xl text-sm leading-6 text-slate-100 sm:text-[15px] sm:leading-7">Versata welcomes discussions with international manufacturers interested in identifying opportunities, developing customers and progressively building a long-term presence in Nigeria.</p><p data-partnership-intro className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">We believe a practical project-based model provides a strong starting point for evaluating the market and developing the relationship.</p><div data-partnership-item className="mt-9 flex flex-wrap justify-center gap-3"><Link to="/contact" className="group inline-flex min-h-11 items-center gap-2 rounded-sm bg-[#00AFA9] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#008F8A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1557B0]">Discuss a Partnership <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></Link><Link to="/contact" className="group inline-flex min-h-11 items-center gap-2 rounded-sm border border-white/35 px-5 py-3 text-xs font-bold text-white transition-colors hover:border-[#35D0C5] hover:text-[#35D0C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1557B0]">Contact Versata <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></Link></div></div></section>
  </div>
}
