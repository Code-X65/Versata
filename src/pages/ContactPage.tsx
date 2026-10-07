import React, { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { PageHero } from '@/components/PageHero'
import { whatsappUrl } from '@/lib/contact'
import { SocialLinks } from '@/components/SocialLinks'
import heroContactImg from '@/assets/hero_contact.webp'

gsap.registerPlugin(ScrollTrigger)

const enquiryOptions = [
  'Technology Requirement',
  'Project Opportunity',
  'Smart Energy',
  'Digital Infrastructure',
  'Education Technology',
  'Smart Collaboration',
  'Technology Partnership',
  'Manufacturer / Market Development',
  'General Enquiry',
] as const

type EnquiryType = (typeof enquiryOptions)[number]
type FormValues = {
  fullName: string
  company: string
  email: string
  phone: string
  enquiryType: EnquiryType
  message: string
  website: string
}
type FormErrors = Partial<Record<keyof Pick<FormValues, 'fullName' | 'email' | 'message'>, string>>

const initialValues: FormValues = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  enquiryType: 'Technology Requirement',
  message: '',
  website: '',
}

const contactDetails = [
  ['Office', 'Office 7, Adewale Adedeji Ajao Estate, Lagos, Nigeria'],
  ['Phone', '+234 803 782 5970', 'tel:+2348037825970'],
  ['WhatsApp', '+234 906 336 4111', whatsappUrl()],
  ['Email', 'contact@versatadigitalsolutions.com', 'mailto:contact@versatadigitalsolutions.com'],
] as const

export const ContactPage: React.FC = () => {
  const formSectionRef = useRef<HTMLElement>(null)
  const pathsRef = useRef<HTMLElement>(null)
  const closingRef = useRef<HTMLElement>(null)
  const enquirySelectRef = useRef<HTMLSelectElement>(null)
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitState, setSubmitState] = useState<'idle' | 'success'>('idle')
  const [lastSubmittedUrl, setLastSubmittedUrl] = useState('')

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: { trigger: formSectionRef.current, start: 'top 76%', once: true },
      })
        .from('[data-contact-form-intro]', { y: 24, opacity: 0, duration: 0.5, stagger: 0.1 })
        .from('[data-contact-form]', { y: 30, opacity: 0, duration: 0.55 }, '-=0.22')
        .from('[data-contact-detail]', { y: 15, opacity: 0, duration: 0.38, stagger: 0.08 }, '-=0.25')
    },
    { scope: formSectionRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: { trigger: pathsRef.current, start: 'top 76%', once: true },
      })
        .from('[data-contact-path-intro]', { y: 22, opacity: 0, duration: 0.5, stagger: 0.1 })
        .from('[data-contact-path]', { y: 25, opacity: 0, duration: 0.45, stagger: 0.12 }, '-=0.18')
        .from('[data-contact-path-divider]', { scaleY: 0, transformOrigin: 'top center', duration: 0.45 }, '-=0.5')
    },
    { scope: pathsRef },
  )

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.from('[data-contact-closing]', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: { trigger: closingRef.current, start: 'top 84%', once: true },
      })
    },
    { scope: closingRef },
  )

  const updateValue = <K extends keyof FormValues>(field: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (field in errors) setErrors((current) => ({ ...current, [field]: undefined }))
    if (submitState !== 'idle') setSubmitState('idle')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: FormErrors = {}
    const fullName = values.fullName.trim()
    const email = values.email.trim()
    const message = values.message.trim()

    if (!fullName) nextErrors.fullName = 'Enter your full name.'
    if (!email) nextErrors.email = 'Enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Enter a valid email address.'
    if (!message) nextErrors.message = 'Tell us about your requirement or opportunity.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0 || values.website) return

    // Build structured WhatsApp message
    const formattedLines = [
      `*New Enquiry via Versata Website*`,
      ``,
      `*Full Name:* ${fullName}`,
      values.company.trim() ? `*Company:* ${values.company.trim()}` : null,
      `*Email:* ${email}`,
      values.phone.trim() ? `*Phone:* ${values.phone.trim()}` : null,
      `*Enquiry Topic:* ${values.enquiryType}`,
      ``,
      `*Message:*`,
      message,
    ].filter(Boolean).join('\n')

    const targetUrl = whatsappUrl(formattedLines)
    setLastSubmittedUrl(targetUrl)
    setSubmitState('success')

    // Open WhatsApp in new window/tab
    window.open(targetUrl, '_blank', 'noopener,noreferrer')
  }

  const startConversation = (enquiryType: EnquiryType) => {
    updateValue('enquiryType', enquiryType)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    formSectionRef.current?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
    window.setTimeout(() => enquirySelectRef.current?.focus({ preventScroll: true }), reducedMotion ? 0 : 450)
  }

  const inputClass = 'mt-2 w-full border bg-white px-3 py-3 text-sm text-[#102A56] outline-none transition-colors placeholder:text-slate-400 focus:border-[#00AFA9] focus:ring-2 focus:ring-[#00AFA9]/25'

  return (
    <div className="bg-[#F4F5F2] text-[#102A56]">
      <SEO
        title="Contact Versata | Technology Enquiries & Support Lagos"
        description="Get in touch with Versata Digital Solutions in Lagos, Nigeria. Discuss technology procurement, project scoping, or manufacturer partnerships."
      />

      <PageHero
        title="Let's Start the Right Conversation"
        description="Whether you have a specific technology requirement, a developing project, or you are an international manufacturer exploring the Nigerian market, Versata welcomes the opportunity to connect."
        ctaText="Send an Enquiry"
        ctaLink="#contact-form"
        secondaryCtaText="Explore Partnerships"
        secondaryCtaLink="/partnerships"
        backgroundImage={heroContactImg}
        imageAlt="Modern technology operations and client consultation centre"
      />

      <section id="contact-form" ref={formSectionRef} aria-labelledby="contact-form-heading" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24">
          <div className="lg:col-span-7">
            <p data-contact-form-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">Start a Conversation</p>
            <h2 id="contact-form-heading" data-contact-form-intro className="mt-4 max-w-2xl text-4xl font-bold leading-[1.06] tracking-[-0.04em] sm:text-5xl">Tell Us About Your Requirement or Opportunity</h2>
            <form data-contact-form noValidate onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-full-name" className="text-xs font-bold text-[#102A56]">Full name <span aria-hidden="true" className="text-[#00AFA9]">*</span></label>
                  <input id="contact-full-name" name="fullName" required autoComplete="name" value={values.fullName} onChange={(event) => updateValue('fullName', event.target.value)} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? 'contact-full-name-error' : undefined} className={`${inputClass} ${errors.fullName ? 'border-red-600' : 'border-slate-300'}`} />
                  {errors.fullName && <p id="contact-full-name-error" className="mt-2 text-xs text-red-700">{errors.fullName}</p>}
                </div>
                <div>
                  <label htmlFor="contact-company" className="text-xs font-bold text-[#102A56]">Company / organisation <span className="font-normal text-slate-500">(optional)</span></label>
                  <input id="contact-company" name="company" autoComplete="organization" value={values.company} onChange={(event) => updateValue('company', event.target.value)} className={`${inputClass} border-slate-300`} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-xs font-bold text-[#102A56]">Email address <span aria-hidden="true" className="text-[#00AFA9]">*</span></label>
                  <input id="contact-email" name="email" type="email" required autoComplete="email" value={values.email} onChange={(event) => updateValue('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} className={`${inputClass} ${errors.email ? 'border-red-600' : 'border-slate-300'}`} />
                  {errors.email && <p id="contact-email-error" className="mt-2 text-xs text-red-700">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-phone" className="text-xs font-bold text-[#102A56]">Phone number <span className="font-normal text-slate-500">(optional)</span></label>
                  <input id="contact-phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={(event) => updateValue('phone', event.target.value)} className={`${inputClass} border-slate-300`} />
                </div>
              </div>
              <div>
                <label htmlFor="contact-enquiry-type" className="text-xs font-bold text-[#102A56]">I&apos;m contacting Versata about</label>
                <select ref={enquirySelectRef} id="contact-enquiry-type" name="enquiryType" value={values.enquiryType} onChange={(event) => updateValue('enquiryType', event.target.value as EnquiryType)} className={`${inputClass} border-slate-300`}>
                  {enquiryOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="text-xs font-bold text-[#102A56]">Tell us about your requirement or opportunity <span aria-hidden="true" className="text-[#00AFA9]">*</span></label>
                <textarea id="contact-message" name="message" required rows={6} value={values.message} onChange={(event) => updateValue('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : 'contact-message-help'} className={`${inputClass} resize-y ${errors.message ? 'border-red-600' : 'border-slate-300'}`} placeholder="Briefly describe the technology requirement, project, organisation, or market opportunity you would like to discuss." />
                <p id="contact-message-help" className="mt-2 text-xs leading-5 text-slate-500">Fields marked with <span aria-hidden="true">*</span> are required.</p>
                {errors.message && <p id="contact-message-error" className="mt-2 text-xs text-red-700">{errors.message}</p>}
              </div>
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => updateValue('website', event.target.value)} />
              </div>
              {submitState === 'success' && (
                <div role="status" className="rounded-md border border-[#00AFA9]/40 bg-[#00AFA9]/10 p-4 text-xs leading-relaxed text-[#102A56] animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-sm text-[#00AFA9]">
                    <CheckCircle2 className="h-4 w-4 text-[#00AFA9]" />
                    <span>Enquiry Ready to Send!</span>
                  </div>
                  <p className="mt-1 text-slate-700">
                    We have formatted your inquiry and opened WhatsApp to deliver it directly to our team.
                  </p>
                  {lastSubmittedUrl && (
                    <a
                      href={lastSubmittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 font-bold text-[#00AFA9] hover:underline"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-[#00AFA9]" />
                      Click here if WhatsApp did not open automatically &rarr;
                    </a>
                  )}
                </div>
              )}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[#00AFA9] px-6 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#008F8A] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFA9] focus-visible:ring-offset-2"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  Send via WhatsApp
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden="true" />
                </button>
                <p className="text-[11px] text-slate-500">
                  Instant response from our Lagos advisory team
                </p>
              </div>
            </form>
          </div>

          <aside aria-label="Versata contact information" className="border-t border-slate-200 pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p data-contact-detail className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">Contact information</p>
            <p data-contact-detail className="mt-5 max-w-sm text-2xl font-bold leading-tight tracking-[-0.03em]">Based in Lagos, Nigeria</p>
            <p data-contact-detail className="mt-3 max-w-sm text-sm leading-6 text-slate-600">Serving Nigeria and developing opportunities across West Africa.</p>
            <dl className="mt-10 space-y-6">
              {contactDetails.map(([label, detail, href], index) => (
                <div data-contact-detail key={`${label}-${detail}`} className={index > 0 ? 'border-t border-slate-200 pt-6' : ''}>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{label}</dt>
                  <dd className="mt-2 text-sm leading-6 text-[#102A56]">
                    {href ? <a href={href} className="transition-colors hover:text-[#00AFA9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFA9]">{detail}</a> : detail}
                  </dd>
                </div>
              ))}
              <div data-contact-detail className="border-t border-slate-200 pt-6">
                <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Social Channels</dt>
                <dd className="mt-3">
                  <SocialLinks variant="pill" showLabels={true} className="flex-wrap" />
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section ref={pathsRef} aria-labelledby="contact-paths-heading" className="bg-[#F4F5F2]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <p data-contact-path-intro className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00AFA9]">What Would You Like to Discuss?</p>
          <h2 id="contact-paths-heading" data-contact-path-intro className="mt-4 max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-0.04em] sm:text-5xl">Start From the Requirement — or the Opportunity</h2>
          <div className="relative mt-12 grid gap-10 md:grid-cols-2 md:gap-0 lg:mt-16">
            <article data-contact-path className="md:pr-12 lg:pr-16">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFA9]">For organisations</p>
              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl">Have a Technology or Project Requirement?</h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">Tell us about the technology, infrastructure or operational requirement your organisation is trying to address.</p>
              <button type="button" onClick={() => startConversation('Technology Requirement')} className="group mt-7 inline-flex min-h-11 items-center gap-2 text-xs font-bold text-[#1557B0] transition-colors hover:text-[#00AFA9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFA9] focus-visible:ring-offset-2">
                Discuss Your Requirement <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden="true" />
              </button>
            </article>
            <div data-contact-path-divider aria-hidden="true" className="hidden absolute bottom-0 left-1/2 top-0 w-px bg-slate-300 md:block" />
            <article data-contact-path className="border-t border-slate-300 pt-10 md:border-t-0 md:pl-12 md:pt-0 lg:pl-16">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00AFA9]">For manufacturers</p>
              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl">Exploring Opportunities in Nigeria?</h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">Tell us about your company, technology and the market-development or partnership opportunity you would like to explore.</p>
              <button type="button" onClick={() => startConversation('Technology Partnership')} className="group mt-7 inline-flex min-h-11 items-center gap-2 text-xs font-bold text-[#1557B0] transition-colors hover:text-[#00AFA9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AFA9] focus-visible:ring-offset-2">
                Discuss a Partnership <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden="true" />
              </button>
            </article>
          </div>
        </div>
      </section>

      <section ref={closingRef} aria-labelledby="contact-closing-heading" className="border-t border-slate-200 bg-[#102A56] text-white">
        <div data-contact-closing className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">Versata Digital Solutions</p>
          <h2 id="contact-closing-heading" className="mt-4 text-4xl font-bold leading-[1.03] tracking-[-0.04em] sm:text-5xl">Technology. Opportunity. Partnership.</h2>
          <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-[15px]">Connecting innovative technology with practical opportunities in Nigeria.</p>
        </div>
      </section>
    </div>
  )
}
