export interface SocialLink {
  id: 'facebook' | 'instagram' | 'linkedin' | 'x'
  name: string
  url: string
  handle: string
  ariaLabel: string
}

export const socialLinks: SocialLink[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://facebook.com/versatadigitalsolutions',
    handle: '@versatadigitalsolutions',
    ariaLabel: 'Follow Versata Digital Solutions on Facebook',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/versatadigitalsolutions',
    handle: '@versatadigitalsolutions',
    ariaLabel: 'Follow Versata Digital Solutions on Instagram',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/versatadigitalsolutions',
    handle: 'Versata Digital Solutions',
    ariaLabel: 'Connect with Versata Digital Solutions on LinkedIn',
  },
  {
    id: 'x',
    name: 'X',
    url: 'https://x.com/versatadigital',
    handle: '@versatadigital',
    ariaLabel: 'Follow Versata Digital Solutions on X (formerly Twitter)',
  },
]
