import { whatsappUrl } from '@/lib/contact'

export interface ChatAction {
  label: string
  url: string
  isExternal?: boolean
}

export interface ChatMessage {
  id: string
  sender: 'amari' | 'user'
  text: string
  timestamp: string
  actions?: ChatAction[]
  suggestions?: string[]
}

export interface KnowledgeEntry {
  keywords: string[]
  response: string
  actions?: ChatAction[]
  followUps?: string[]
}

export const AMARI_INITIAL_SUGGESTIONS = [
  'What solutions does Versata provide?',
  'How do Technology Partnerships work?',
  'Tell me about Smart Energy & Power',
  'Who is Versata Digital Solutions?',
  'Connect with a consultant on WhatsApp',
]

export const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    keywords: ['solution', 'services', 'offer', 'product', 'what do you do', 'capabilities'],
    response: `Versata Digital Solutions specializes in four key solution areas designed to solve real-world operational challenges:

1. **Smart Energy & Power** — Solar microgrids, energy storage, hybrid power solutions, and energy monitoring.
2. **Digital Infrastructure** — Enterprise networking, secure data infrastructure, cloud connectivity, and communications.
3. **Smart Education & Learning** — Digital classrooms, interactive displays, and institutional connectivity.
4. **Smart Collaboration & AV** — Video conferencing, integrated boardrooms, and workplace automation.`,
    actions: [
      { label: 'Explore All Solutions', url: '/solutions' },
      { label: 'Discuss a Requirement', url: '/contact' },
    ],
    followUps: ['Tell me about Smart Energy & Power', 'Tell me about Digital Infrastructure', 'Explore Partnerships'],
  },
  {
    keywords: ['energy', 'solar', 'power', 'grid', 'inverter', 'battery', 'storage', 'renewable'],
    response: `Our **Smart Energy & Power** solutions help businesses and institutions reduce reliance on unreliable power and cut high generator diesel costs through:

• Commercial & industrial solar installations
• High-efficiency battery storage systems (BESS)
• Hybrid power management systems
• Real-time energy analytics and remote monitoring.`,
    actions: [
      { label: 'View Energy Solutions', url: '/solutions' },
      { label: 'Request Energy Audit', url: '/contact' },
    ],
    followUps: ['What other solutions do you offer?', 'Chat on WhatsApp with an engineer'],
  },
  {
    keywords: ['infrastructure', 'network', 'cable', 'cabling', 'cloud', 'server', 'data center', 'datacenter', 'cybersecurity', 'security'],
    response: `Our **Digital Infrastructure** practice builds robust, scalable technology backbones for modern enterprises:

• High-speed fiber and structured copper cabling
• Enterprise Wi-Fi, switching, and routing
• Private and hybrid cloud architecture
• Endpoint and perimeter cybersecurity solutions.`,
    actions: [
      { label: 'View Digital Infrastructure', url: '/solutions' },
      { label: 'Speak to Tech Team', url: '/contact' },
    ],
    followUps: ['What solutions does Versata provide?', 'How do partnerships work?'],
  },
  {
    keywords: ['education', 'school', 'university', 'learning', 'classroom', 'edtech', 'student', 'smart education'],
    response: `Our **Smart Education** solutions modernize schools, polytechnics, and universities across Nigeria:

• Interactive smart displays and digital whiteboards
• STEM and computer lab infrastructure
• Campus-wide high-speed Wi-Fi and content management systems
• Remote hybrid learning environments.`,
    actions: [
      { label: 'Explore Education Tech', url: '/solutions' },
      { label: 'Contact Versata', url: '/contact' },
    ],
    followUps: ['What industries do you serve?', 'Discuss a Project'],
  },
  {
    keywords: ['partner', 'technology partner', 'manufacturer', 'oem', 'international', 'market entry', 'distribution', 'reseller', 'representation'],
    response: `Versata acts as a bridge for global technology manufacturers and OEMs looking to enter or expand in the Nigerian and West African market through a structured 3-phase pathway:

• **Phase 1: Market Development & Project Partner** — Identifying real customer demand, local regulatory alignment, and pilot opportunities.
• **Phase 2: Authorised Reseller / Integration Partner** — Direct commercialization, system integration, and SLA support.
• **Phase 3: Distribution & Territory Expansion** — Long-term scale, dealer network, and strategic expansion.`,
    actions: [
      { label: 'Learn About Technology Partners', url: '/technology-partners' },
      { label: 'Submit Partner Enquiry', url: '/partnerships' },
    ],
    followUps: ['Who is Versata?', 'Chat with Business Development'],
  },
  {
    keywords: ['industry', 'sector', 'corporate', 'public sector', 'government', 'manufacturing', 'healthcare', 'commercial'],
    response: `Versata delivers tailored digital and technology implementations across critical sectors:

• **Corporate & Enterprise** — High-efficiency workplaces, robust data infrastructure.
• **Education & Academic** — Digital classrooms, campus networks.
• **Commercial & Industrial** — Reliable power, monitoring, process digitization.
• **Public Sector & Institutions** — Scalable, transparent digital public solutions.`,
    actions: [
      { label: 'Explore Industries', url: '/industries' },
      { label: 'View Opportunities', url: '/opportunities' },
    ],
    followUps: ['What solutions does Versata provide?', 'How do I start a project?'],
  },
  {
    keywords: ['about', 'who is', 'versata', 'company', 'founded', 'history', 'story', 'nigeria', 'experience'],
    response: `**Versata Digital Solutions** is a Nigerian technology solutions and market-development firm.

• **Operations:** Operating since 2022 (Corporate Registration: 2025).
• **Headquarters:** Lagos, Nigeria.
• **Mission:** Bringing practical global innovations to address Nigeria's infrastructure, energy, and digital transformation requirements.`,
    actions: [
      { label: 'Read Our Story', url: '/about' },
      { label: 'View Solutions', url: '/solutions' },
    ],
    followUps: ['Where is your office located?', 'How can I reach you?'],
  },
  {
    keywords: ['contact', 'reach', 'phone', 'call', 'email', 'address', 'location', 'office', 'lagos', 'where'],
    response: `We would love to connect with you! Here are our direct contact channels:

📍 **Office:** 7, Adewale Adedeji Ajao Estate, Lagos, Nigeria
📞 **Phone:** +234 803 782 5970 / +234 906 336 4111
✉️ **Email:** contact@versatadigitalsolutions.com
💬 **WhatsApp:** Available for direct chat`,
    actions: [
      { label: 'Chat on WhatsApp', url: whatsappUrl(), isExternal: true },
      { label: 'Go to Contact Page', url: '/contact' },
    ],
    followUps: ['What solutions does Versata provide?', 'Explore Technology Partnerships'],
  },
  {
    keywords: ['whatsapp', 'chat', 'direct message', 'talk to person', 'human', 'agent', 'sales', 'representative'],
    response: `You can connect directly with our advisory and project team on WhatsApp right now. We'll be happy to answer your specific questions, review RFPs, or schedule a consultation meeting.`,
    actions: [
      { label: 'Open WhatsApp Chat', url: whatsappUrl('Hello Versata, I would like to speak with a consultant about a technology requirement.'), isExternal: true },
      { label: 'Fill Contact Form', url: '/contact' },
    ],
    followUps: ['What solutions does Versata provide?', 'Where is your office located?'],
  },
]

export function getAmariResponse(userQuery: string): {
  text: string
  actions?: ChatAction[]
  suggestions?: string[]
} {
  const queryLower = userQuery.toLowerCase().trim()

  if (!queryLower) {
    return {
      text: "I'm here to help! Feel free to ask about our solutions, technology partnerships, or how we can assist your organisation.",
      suggestions: AMARI_INITIAL_SUGGESTIONS.slice(0, 3),
    }
  }

  // Check greetings
  if (
    /^(hi|hello|hey|good morning|good afternoon|good evening|howdy|amari|greeting)/.test(queryLower) &&
    queryLower.split(/\s+/).length <= 4
  ) {
    return {
      text: "Hello! I'm Amari, your digital advisor at Versata Digital Solutions. How can I assist you today? You can ask me about our services, energy solutions, technology partnerships, or how to connect with our team.",
      suggestions: [
        'What solutions does Versata provide?',
        'How do Technology Partnerships work?',
        'Chat with us on WhatsApp',
      ],
    }
  }

  // Check gratitude
  if (/^(thank|thanks|great|awesome|helpful|ok|okay|cool|perfect)/.test(queryLower)) {
    return {
      text: "You're very welcome! If you'd like to take the next step or discuss a specific project, our team is always ready to collaborate.",
      actions: [
        { label: 'Chat on WhatsApp', url: whatsappUrl(), isExternal: true },
        { label: 'Book Consultation', url: '/contact' },
      ],
      suggestions: ['Explore Solutions', 'Technology Partnerships', 'Where is your office?'],
    }
  }

  // Score match against knowledge base
  let bestMatch: KnowledgeEntry | null = null
  let highestScore = 0

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0
    for (const kw of entry.keywords) {
      if (queryLower.includes(kw)) {
        score += kw.length
      }
    }
    if (score > highestScore) {
      highestScore = score
      bestMatch = entry
    }
  }

  if (bestMatch && highestScore > 2) {
    return {
      text: bestMatch.response,
      actions: bestMatch.actions,
      suggestions: bestMatch.followUps,
    }
  }

  // Fallback intelligent response
  return {
    text: `Thank you for asking! While I might not have the full details for "${userQuery}" in my quick reference, Versata specializes in Smart Energy, Digital Infrastructure, Smart Education, and International Technology Partnerships in Nigeria.

Would you like to connect directly with one of our senior consultants to discuss this in depth?`,
    actions: [
      {
        label: 'Chat Directly on WhatsApp',
        url: whatsappUrl(`Hello Versata, I would like more information regarding: "${userQuery}"`),
        isExternal: true,
      },
      { label: 'Send an Enquiry', url: '/contact' },
    ],
    suggestions: [
      'What solutions does Versata provide?',
      'How do Technology Partnerships work?',
      'Contact Information',
    ],
  }
}
