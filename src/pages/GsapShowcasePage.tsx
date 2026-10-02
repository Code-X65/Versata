import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SEO } from '@/components/SEO'
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  MoveRight,
  Flame,
  Zap,
  Boxes,
  Activity,
  Layers
} from 'lucide-react'

export const GsapShowcasePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const { contextSafe } = useGSAP(
    () => {
      // Timeline demonstration
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        defaults: { ease: 'power2.inOut', duration: 1 },
      })

      tl.to('.timeline-box-1', { x: 120, rotation: 360, borderRadius: '50%', backgroundColor: '#6366f1' })
        .to('.timeline-box-2', { y: -40, scale: 1.25, backgroundColor: '#ec4899' }, '-=0.5')
        .to('.timeline-box-3', { x: -120, rotation: -360, borderRadius: '24px', backgroundColor: '#a855f7' }, '-=0.5')

      timelineRef.current = tl

      // Stagger initial pulse
      gsap.from('.stagger-card', {
        scale: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.7)',
      })
    },
    { scope: containerRef }
  )

  const handleTogglePlay = contextSafe(() => {
    if (!timelineRef.current) return
    if (timelineRef.current.isActive()) {
      timelineRef.current.pause()
      setIsPlaying(false)
    } else {
      timelineRef.current.play()
      setIsPlaying(true)
    }
  })

  const handleRestart = contextSafe(() => {
    if (!timelineRef.current) return
    timelineRef.current.restart()
    setIsPlaying(true)
  })

  const handleTriggerStagger = contextSafe(() => {
    gsap.fromTo(
      '.stagger-item',
      { y: 30, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: {
          each: 0.08,
          from: 'center',
        },
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)',
      }
    )
  })

  const handleBounceCard = contextSafe((target: HTMLElement) => {
    gsap.fromTo(
      target,
      { scale: 0.95 },
      { scale: 1, duration: 0.8, ease: 'bounce.out' }
    )
  })

  return (
    <div ref={containerRef} className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SEO
        title="GSAP Playground | Versata"
        description="Interactive motion lab featuring timeline controls, spring physics, and stagger animations."
      />
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold text-purple-300">
          <Sparkles className="h-3.5 w-3.5 text-purple-400" />
          <span>Interactive Motion Lab</span>
        </div>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          GSAP 3 + @gsap/react Showcase
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base">
          Test interactive timelines, staggered physics, spring dynamics, and scoped context safety.
        </p>
      </div>

      {/* Grid of GSAP Examples */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Timeline Controller Card */}
        <div className="rounded-3xl border border-white/10 bg-gray-900/60 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Timeline Sequence</h2>
                  <p className="text-xs text-slate-400">Coordinated multi-object tweening</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleTogglePlay}
                  className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md hover:bg-indigo-500 transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Restart</span>
                </button>
              </div>
            </div>

            {/* Animation Stage */}
            <div className="mt-8 h-48 w-full rounded-2xl border border-white/5 bg-black/40 flex items-center justify-around px-8 relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-radial from-indigo-500/5 to-transparent" />
              
              <div className="timeline-box-1 h-14 w-14 rounded-xl bg-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-indigo-500/30">
                1
              </div>
              <div className="timeline-box-2 h-14 w-14 rounded-xl bg-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-pink-500/30">
                2
              </div>
              <div className="timeline-box-3 h-14 w-14 rounded-xl bg-purple-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-purple-500/30">
                3
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-slate-950/80 p-3 border border-white/5 text-xs text-slate-400 font-mono">
            <span className="text-indigo-400">gsap</span>.timeline(&#123; repeat: -1, yoyo: true &#125;)
          </div>
        </div>

        {/* Stagger Grid Showcase */}
        <div className="rounded-3xl border border-white/10 bg-gray-900/60 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-pink-600/20 border border-pink-500/30 text-pink-400">
                  <Boxes className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Stagger Dynamics</h2>
                  <p className="text-xs text-slate-400">Distributed delay & elastic easing</p>
                </div>
              </div>

              <button
                onClick={handleTriggerStagger}
                className="flex items-center gap-1.5 rounded-lg bg-pink-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md hover:bg-pink-500 transition-colors cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Replay Stagger</span>
              </button>
            </div>

            {/* Stagger grid items */}
            <div className="mt-8 grid grid-cols-6 gap-2.5 h-48 items-center justify-center p-4 rounded-2xl border border-white/5 bg-black/40">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className="stagger-item h-10 w-full rounded-lg bg-gradient-to-tr from-pink-600/40 to-indigo-600/40 border border-pink-500/30 flex items-center justify-center text-white text-[10px] font-mono hover:scale-110 transition-transform cursor-pointer"
                >
                  #{i + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-slate-950/80 p-3 border border-white/5 text-xs text-slate-400 font-mono">
            <span className="text-pink-400">stagger:</span> &#123; each: 0.08, from: 'center' &#125;
          </div>
        </div>
      </div>

      {/* Interactive Hover Springs */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-gray-900/60 p-8 backdrop-blur-md">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-amber-600/20 border border-amber-500/30 text-amber-400">
            <Flame className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Interactive Bounce & Physics</h2>
            <p className="text-xs text-slate-400">Click any card below to trigger a dynamic bounce animation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: 'Elastic Bounce', icon: Zap, color: 'border-yellow-500/30 text-yellow-400' },
            { title: 'Spring Tension', icon: Layers, color: 'border-cyan-500/30 text-cyan-400' },
            { title: 'Kinetic Motion', icon: MoveRight, color: 'border-emerald-500/30 text-emerald-400' },
          ].map((card, idx) => {
            const Icon = card.icon
            return (
              <div
                key={idx}
                onClick={(e) => handleBounceCard(e.currentTarget)}
                className="stagger-card group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm cursor-pointer hover:border-white/30 transition-colors"
              >
                <div className={`p-3 w-fit rounded-xl border ${card.color} bg-white/5 mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  Click me to test contextSafe GSAP physics!
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
