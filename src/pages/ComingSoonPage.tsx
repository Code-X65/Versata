import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { SEO } from '@/components/SEO'

const sectionNames: Record<string, string> = {
  'technology-partners': 'Technology Partners',
  industries: 'Industries',
  opportunities: 'Opportunities',
  partnerships: 'Partnerships',
}

export const ComingSoonPage: React.FC = () => {
  const { section } = useParams()
  const title = sectionNames[section ?? ''] ?? 'This Section'

  return (
    <div className="min-h-[70vh] bg-slate-50 px-4 py-20 dark:bg-[#071525] sm:px-6 lg:px-8">
      <SEO
        title={`${title} | Versata Digital Solutions`}
        description={`Versata ${title.toLowerCase()} information is coming soon.`}
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm dark:border-slate-800 dark:bg-[#0D2138] sm:px-12">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDF7F5] text-[#00AFA9] dark:bg-[#00AFA9]/20">
          <Sparkles className="h-6 w-6" />
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#00AFA9]">Coming Soon</p>
        <h1 className="mt-3 text-3xl font-extrabold text-[#102A56] dark:text-white sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          We are preparing this section. Speak with our team today to learn how Versata can support your next digital initiative.
        </p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#075c44] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#064b39]">
          Contact Versata <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
