import React from 'react'

interface LogoProps {
  className?: string
  showWordmark?: boolean
  size?: 'sm' | 'md' | 'lg'
  textColor?: string
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showWordmark = true,
  size = 'md',
  textColor = 'text-[#102A56]',
}) => {
  const iconSize = size === 'sm' ? 'h-7 w-7' : size === 'lg' ? 'h-10 w-10' : 'h-8 w-8'
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-lg'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Brand Monogram Mark */}
      <div
        className={`relative flex items-center justify-center rounded-lg bg-[#084d3c] p-1.5 shadow-xs text-white ${iconSize}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-full w-full"
        >
          <path d="M4 4l8 16 8-16" stroke="#35D0C5" />
          <path d="M8 8l4 8 4-8" stroke="#FFFFFF" />
          <path d="M16 4l4 4-4 4" stroke="#00AFA9" strokeWidth="2" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <span
            className={`font-extrabold tracking-wider uppercase leading-none transition-colors duration-300 ${textSize} ${textColor}`}
            style={{ letterSpacing: '0.08em' }}
          >
            VERSATA
          </span>
        </div>
      )}
    </div>
  )
}
