import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://versata.online'
const DEFAULT_TITLE = 'Versata Digital Solutions | Technology Opportunities in Nigeria'
const DEFAULT_DESCRIPTION =
  'Versata connects innovative technology with practical opportunities across Nigeria in Smart Energy, Digital Infrastructure, Smart Education, and Technology Partnerships.'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`
const DEFAULT_KEYWORDS =
  'Versata Digital Solutions, Technology Nigeria, Smart Energy, Solar Microgrids, Digital Infrastructure, Education Technology, International Technology Partnerships, Lagos'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
}) => {
  const location = useLocation()
  const canonicalUrl = `${SITE_URL}${location.pathname}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Versata Digital Solutions',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: DEFAULT_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7, Adewale Adedeji Ajao Estate',
      addressLocality: 'Lagos',
      addressRegion: 'Lagos State',
      addressCountry: 'NG',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+234-906-336-4111',
        contactType: 'customer service',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+234-803-782-5970',
        contactType: 'technical support',
      },
    ],
    sameAs: [
      'https://facebook.com/versatadigitalsolutions',
      'https://instagram.com/versatadigitalsolutions',
      'https://linkedin.com/company/versatadigitalsolutions',
      'https://x.com/versatadigital',
    ],
  }

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* OpenGraph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:site_name" content="Versata Digital Solutions" />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Versata Digital Solutions" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@versatadigital" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured JSON-LD Schema */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}
