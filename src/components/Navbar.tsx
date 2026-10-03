import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Menu, MessageCircle, X } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { whatsappUrl } from '@/lib/contact'

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/technology-partners', label: 'Technology Partners' },
  { to: '/industries', label: 'Industries' },
  { to: '/opportunities', label: 'Opportunities' },
  { to: '/partnerships', label: 'Partnerships' }
]

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileMenuMounted, setMobileMenuMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileToggleRef = useRef<HTMLButtonElement>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(
    () => {
      if (!mobileMenuMounted) return

      const panel = mobileMenuRef.current
      if (!panel) return
      const links = panel.querySelectorAll('[data-mobile-nav-item]')
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (mobileMenuOpen) {
        if (reducedMotion) {
          gsap.set(panel, { xPercent: 0 })
          gsap.set(links, { x: 0, y: 0, opacity: 1 })
          return
        }

        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .fromTo(panel, { xPercent: -100 }, { xPercent: 0, duration: 0.62 })
          .fromTo(links, { x: -30, y: 15, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.22')
        return
      }

      if (reducedMotion) {
        setMobileMenuMounted(false)
        return
      }

      gsap.timeline({ defaults: { ease: 'power3.inOut' } })
        .to(links, { x: -30, opacity: 0, duration: 0.28, stagger: { each: 0.08, from: 'end' } })
        .to(panel, { xPercent: -100, duration: 0.5, onComplete: () => setMobileMenuMounted(false) }, '-=0.03')
    },
    { scope: mobileMenuRef, dependencies: [mobileMenuMounted, mobileMenuOpen], revertOnUpdate: true },
  )

  useEffect(() => {
    if (!mobileMenuOpen) return

    const originalBodyOverflow = document.body.style.overflow
    const originalHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const focusableElements = () => [
      mobileToggleRef.current,
      ...Array.from(mobileMenuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []),
    ].filter((element): element is HTMLElement => Boolean(element))

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMobileMenuOpen(false)
        return
      }

      if (event.key !== 'Tab') return
      const focusable = focusableElements()
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    const focusTimer = window.setTimeout(() => firstMobileLinkRef.current?.focus(), 50)

    return () => {
      document.body.style.overflow = originalBodyOverflow
      document.documentElement.style.overflow = originalHtmlOverflow
      document.removeEventListener('keydown', handleKeyDown)
      window.clearTimeout(focusTimer)
    }
  }, [mobileMenuOpen])

  const openMobileMenu = () => {
    setMobileMenuMounted(true)
    setMobileMenuOpen(true)
  }

  const closeMobileMenu = () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setMobileMenuOpen(false)
    if (reducedMotion) setMobileMenuMounted(false)
  }

  const isTransparent = !scrolled
  const mobileMenuActive = mobileMenuOpen || mobileMenuMounted

  return (
    <>
    <header
      className={`fixed top-0 inset-x-0 ${mobileMenuActive ? 'z-[60]' : 'z-50'} w-full transition-all duration-300 ${
        mobileMenuActive
          ? 'border-b border-transparent bg-transparent py-4 sm:py-5'
          : isTransparent
          ? 'bg-transparent border-b border-transparent py-4 sm:py-5'
          : 'bg-white/90 border-b border-slate-200/80 backdrop-blur-md shadow-xs py-3 sm:py-3.5'
      }`}
    >
      <div className="mx-auto flex w-full items-center justify-between px-6 sm:px-10 lg:px-12">
        {/* Left: Brand Logo */}
        <Link to="/" onClick={mobileMenuActive ? closeMobileMenu : undefined} className="flex items-center shrink-0">
          <Logo size="md" textColor={mobileMenuActive || isTransparent ? 'text-white' : 'text-[#102A56]'} />
        </Link>

        {/* Center: Pipe-Separated Minimalist Navigation */}
        <nav
          className={`hidden lg:flex items-center gap-3 xl:gap-5 text-[12px] xl:text-[13px] font-medium transition-colors duration-300 ${
            isTransparent ? 'text-white/90' : 'text-slate-700'
          }`}
        >
          {navLinks.map((link, idx) => (
            <React.Fragment key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors duration-200 whitespace-nowrap ${
                    isTransparent
                      ? isActive
                        ? 'font-bold text-white drop-shadow-sm'
                        : 'text-white/85 hover:text-[#35D0C5] drop-shadow-sm'
                      : isActive
                        ? 'font-bold text-[#102A56]'
                        : 'text-slate-700 hover:text-[#00AFA9]'
                  }`
                }
              >
                {link.label}
              </NavLink>
              {idx < navLinks.length - 1 && (
                <span
                  className={`select-none text-[11px] font-light ${
                    isTransparent ? 'text-white/30' : 'text-slate-300'
                  }`}
                >
                  |
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right: Clean Start a Project CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center rounded-sm px-4 xl:px-5 py-2.5 text-xs font-semibold shadow-xs transition-all duration-200 active:scale-98 ${
              isTransparent
                ? 'bg-[#084d3c] text-white border border-white/20 hover:bg-[#063b2e] hover:border-white/40 hover:shadow-md'
                : 'bg-[#084d3c] text-white hover:bg-[#063b2e] hover:shadow-md'
            }`}
          >
            <MessageCircle className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            ref={mobileToggleRef}
            onClick={() => (mobileMenuOpen ? closeMobileMenu() : openMobileMenu())}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className={`relative flex h-9 w-9 items-center justify-center rounded-sm shadow-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0C5] focus-visible:ring-offset-2 ${
              mobileMenuActive || isTransparent
                ? 'border border-white/20 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50'
                : 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50'
            }`}
          >
            <Menu className={`absolute h-4 w-4 transition-all duration-300 ${mobileMenuOpen ? 'scale-75 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} aria-hidden="true" />
            <X className={`absolute h-4 w-4 transition-all duration-300 ${mobileMenuOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-75 -rotate-90 opacity-0'}`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile full-screen navigation */}
      {mobileMenuMounted && (
        <div
          ref={mobileMenuRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-50 overflow-y-auto bg-[#071525] text-white lg:hidden"
        >
          <nav aria-label="Primary navigation" className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-14 pt-28 sm:px-10 sm:pt-32">
            <p data-mobile-nav-item className="mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#35D0C5]">Navigate Versata</p>
            <div className="flex flex-col border-t border-white/15">
            {navLinks.map(({ to, label }, index) => (
              <NavLink
                key={to}
                to={to}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                data-mobile-nav-item
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-white/15 py-4 text-2xl font-bold tracking-[-0.03em] transition-colors sm:py-5 sm:text-3xl ${isActive ? 'text-[#35D0C5]' : 'text-white hover:text-[#35D0C5]'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0C5] focus-visible:ring-inset`
                }
              >
                {label}
                <span aria-hidden="true" className="text-sm font-normal text-white/35">0{index + 1}</span>
              </NavLink>
            ))}
            </div>
            <a
              data-mobile-nav-item
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex min-h-11 w-fit items-center gap-2 rounded-sm bg-[#00AFA9] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#008F8A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071525]"
            >
              Chat on WhatsApp
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
