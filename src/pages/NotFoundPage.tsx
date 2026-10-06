import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Compass, Home, Phone, RefreshCw } from 'lucide-react'
import { SEO } from '@/components/SEO'

export const NotFoundPage: React.FC = () => {
  const [countdown, setCountdown] = useState(5)
  const [isPaused, setIsPaused] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (isPaused) return

    if (countdown <= 0) {
      navigate('/', { replace: true })
      return
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [countdown, isPaused, navigate])

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#071525] px-6 py-24 text-white sm:py-32">
      <SEO
        title="404 - Page Not Found | Versata Digital Solutions"
        description="The requested page could not be found on Versata Digital Solutions."
      />

      {/* Subtle Background Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[clamp(8rem,25vw,22rem)] font-extrabold uppercase leading-none tracking-tighter text-white/[0.025]"
      >
        404
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#35D0C5]/30 bg-[#00AFA9]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#35D0C5]">
          <Compass className="h-3.5 w-3.5" />
          Page Not Found
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Lost in Navigation?
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
          The page you requested doesn&apos;t exist or has moved. We&apos;ll get you back on track right away.
        </p>

        {/* Auto Redirect Countdown Card */}
        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <RefreshCw className={`h-3.5 w-3.5 text-[#35D0C5] ${!isPaused ? 'animate-spin' : ''}`} />
              {!isPaused ? (
                <span>
                  Redirecting to Home in <strong className="text-white font-bold">{countdown}s</strong>
                </span>
              ) : (
                <span className="text-amber-300">Automatic redirect paused</span>
              )}
            </span>

            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="text-[11px] font-semibold text-[#35D0C5] underline transition-colors hover:text-white"
            >
              {isPaused ? 'Resume Redirect' : 'Cancel'}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-linear-to-r from-[#00AFA9] to-[#35D0C5] transition-all duration-1000 ease-linear"
              style={{ width: `${((5 - countdown) / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[#00AFA9] px-6 py-3 text-xs font-bold text-white shadow-md transition-all duration-200 hover:bg-[#008F8A] active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0C5]"
          >
            <Home className="h-3.5 w-3.5" />
            Return to Homepage
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold text-white transition-colors duration-200 hover:border-[#35D0C5] hover:text-[#35D0C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0C5]"
          >
            <Phone className="h-3.5 w-3.5" />
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Popular Destinations</p>
          <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-300">
            <Link to="/solutions" className="transition-colors hover:text-[#35D0C5]">Solutions</Link>
            <span className="text-white/20">&bull;</span>
            <Link to="/technology-partners" className="transition-colors hover:text-[#35D0C5]">Technology Partners</Link>
            <span className="text-white/20">&bull;</span>
            <Link to="/industries" className="transition-colors hover:text-[#35D0C5]">Industries</Link>
            <span className="text-white/20">&bull;</span>
            <Link to="/partnerships" className="transition-colors hover:text-[#35D0C5]">Partnerships</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
