import React from 'react'
import logoEmblemImg from '@/assets/logo_emblem.webp'

interface LogoProps {
  className?: string
  showWordmark?: boolean
  showSubtitle?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  textColor?: string
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showWordmark = true,
  showSubtitle = false,
  size = 'md',
  textColor = 'text-[#102A56]',
}) => {
  const emblemSize = {
    xs: 'h-6 w-auto max-w-[24px]',
    sm: 'h-7 w-auto max-w-[28px]',
    md: 'h-9 w-auto max-w-[36px]',
    lg: 'h-11 w-auto max-w-[44px]',
    xl: 'h-14 w-auto max-w-[56px]',
  }[size]

  const titleSize = {
    xs: 'text-sm',
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-3xl',
  }[size]

  const subtitleSize = {
    xs: 'text-[7.5px]',
    sm: 'text-[8.5px]',
    md: 'text-[9.5px]',
    lg: 'text-[11px]',
    xl: 'text-[13px]',
  }[size]

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Official Ribbon & Arrow Growth Emblem */}
      <img
        src={logoEmblemImg}
        alt="Versata Digital Solutions Logo Emblem"
        className={`shrink-0 object-contain drop-shadow-xs transition-transform duration-300 hover:scale-105 ${emblemSize}`}
      />

      {/* Brand Wordmark */}
      {showWordmark && (
        <div className="flex flex-col text-left justify-center">
          <span
            className={`font-black uppercase tracking-[0.14em] leading-none transition-colors duration-300 ${titleSize} ${textColor}`}
          >
            VERSATA
          </span>
          {showSubtitle && (
            <span
              className={`mt-0.5 font-bold uppercase tracking-[0.24em] leading-none text-[#00AFA9] ${subtitleSize}`}
            >
              Digital Solutions
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default Logo
