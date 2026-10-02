import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Versata - Modern React & Tailwind v4 Showcase',
  description = 'High performance static website powered by React 19, Tailwind CSS v4, GSAP, Framer Motion, and Lucide React.',
  keywords = 'React, TailwindCSS, GSAP, Framer Motion, Vite, TypeScript, Lucide Icons',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
