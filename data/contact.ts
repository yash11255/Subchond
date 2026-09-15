export const CLINIC_CONTACT = {
  call: {
    display: '+91 80654 17703',
    href: 'tel:+918065417703',
  },
  whatsapp: {
    display: '+91 93101 38022',
    number: '919310138022',
  },
  email: 'clinical@subchond.com',
  address: 'F 10/4, Golf Course Road, DLF Phase 1, Sector 27, Gurugram, Haryana 122001',
} as const;

export const getWhatsAppLink = (message: string) =>
  `https://wa.me/${CLINIC_CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}`;
