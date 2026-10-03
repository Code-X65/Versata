export const whatsappUrl = (message = 'Hello Versata, I would like to discuss a technology requirement or opportunity.') =>
  `https://wa.me/2349063364111?text=${encodeURIComponent(message)}`
