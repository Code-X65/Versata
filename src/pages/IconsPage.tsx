import React, { useState } from 'react'
import { SEO } from '@/components/SEO'
import {
  Search,
  Sparkles,
  Zap,
  Activity,
  Airplay,
  AlarmClock,
  AlertCircle,
  Archive,
  ArrowRight,
  BarChart3,
  Bell,
  Bookmark,
  Boxes,
  Camera,
  Check,
  CheckCircle,
  ChevronRight,
  Code2,
  Compass,
  Copy,
  Cpu,
  Database,
  Flame,
  Globe,
  Heart,
  Layers,
  Lock,
  MessageSquare,
  Moon,
  Palette,
  Play,
  Radio,
  Rocket,
  Settings,
  Shield,
  Sun,
  Terminal,
  Trash2,
  User,
  Wifi,
  type LucideIcon,
} from 'lucide-react'

interface IconItem {
  name: string
  icon: LucideIcon
  category: string
}

const ICON_LIST: IconItem[] = [
  { name: 'Sparkles', icon: Sparkles, category: 'General' },
  { name: 'Zap', icon: Zap, category: 'Actions' },
  { name: 'Activity', icon: Activity, category: 'Analytics' },
  { name: 'Airplay', icon: Airplay, category: 'Media' },
  { name: 'AlarmClock', icon: AlarmClock, category: 'General' },
  { name: 'AlertCircle', icon: AlertCircle, category: 'System' },
  { name: 'Archive', icon: Archive, category: 'Files' },
  { name: 'ArrowRight', icon: ArrowRight, category: 'Navigation' },
  { name: 'BarChart3', icon: BarChart3, category: 'Analytics' },
  { name: 'Bell', icon: Bell, category: 'System' },
  { name: 'Bookmark', icon: Bookmark, category: 'General' },
  { name: 'Boxes', icon: Boxes, category: 'General' },
  { name: 'Camera', icon: Camera, category: 'Media' },
  { name: 'Check', icon: Check, category: 'Actions' },
  { name: 'CheckCircle', icon: CheckCircle, category: 'Actions' },
  { name: 'ChevronRight', icon: ChevronRight, category: 'Navigation' },
  { name: 'Code2', icon: Code2, category: 'Development' },
  { name: 'Compass', icon: Compass, category: 'Navigation' },
  { name: 'Cpu', icon: Cpu, category: 'Development' },
  { name: 'Database', icon: Database, category: 'Development' },
  { name: 'Flame', icon: Flame, category: 'General' },
  { name: 'Globe', icon: Globe, category: 'General' },
  { name: 'Heart', icon: Heart, category: 'General' },
  { name: 'Layers', icon: Layers, category: 'General' },
  { name: 'Lock', icon: Lock, category: 'Security' },
  { name: 'MessageSquare', icon: MessageSquare, category: 'Communication' },
  { name: 'Moon', icon: Moon, category: 'General' },
  { name: 'Palette', icon: Palette, category: 'Design' },
  { name: 'Play', icon: Play, category: 'Media' },
  { name: 'Radio', icon: Radio, category: 'Media' },
  { name: 'Rocket', icon: Rocket, category: 'Actions' },
  { name: 'Settings', icon: Settings, category: 'System' },
  { name: 'Shield', icon: Shield, category: 'Security' },
  { name: 'Sun', icon: Sun, category: 'General' },
  { name: 'Terminal', icon: Terminal, category: 'Development' },
  { name: 'Trash2', icon: Trash2, category: 'Actions' },
  { name: 'User', icon: User, category: 'General' },
  { name: 'Wifi', icon: Wifi, category: 'System' },
]

export const IconsPage: React.FC = () => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [copiedName, setCopiedName] = useState<string | null>(null)

  const categories = ['All', ...Array.from(new Set(ICON_LIST.map((i) => i.category)))]

  const filteredIcons = ICON_LIST.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleCopy = (iconName: string) => {
    const snippet = `<${iconName} className="h-5 w-5 text-indigo-400" />`
    navigator.clipboard.writeText(snippet)
    setCopiedName(iconName)
    setTimeout(() => setCopiedName(null), 2000)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SEO
        title="Lucide Icons Explorer | Versata"
        description="Search and explore thousands of clean, customizable Lucide React icons."
      />
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-semibold text-pink-300">
          <Sparkles className="h-3.5 w-3.5 text-pink-400" />
          <span>Lucide React Directory</span>
        </div>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Lucide React Explorer
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base">
          Click any icon to copy its ready-to-use React JSX snippet directly to your clipboard.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search icons (e.g., Sparkles, Cpu, Settings)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-gray-900/80 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                  : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Icons Grid */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredIcons.map((item) => {
          const Icon = item.icon
          const isCopied = copiedName === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleCopy(item.name)}
              className={`group relative flex flex-col items-center justify-center p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                isCopied
                  ? 'border-emerald-500/50 bg-emerald-950/20 text-emerald-300 shadow-md shadow-emerald-500/10'
                  : 'border-white/10 bg-gray-900/60 text-slate-300 hover:border-indigo-500/40 hover:bg-gray-800/80 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10'
              }`}
            >
              <div className="mb-3 p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300" />
              </div>

              <span className="text-xs font-semibold text-center truncate w-full">
                {item.name}
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5">{item.category}</span>

              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {isCopied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-slate-400" />
                )}
              </div>
            </button>
          )
        })}
      </div>

      {filteredIcons.length === 0 && (
        <div className="mt-16 text-center text-slate-500 py-12 rounded-2xl border border-dashed border-white/10">
          No icons matching "{search}" in category "{selectedCategory}".
        </div>
      )}
    </div>
  )
}
