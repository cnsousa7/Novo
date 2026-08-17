export const WHATSAPP_NUMBER = "5561992743428";

export const WHATSAPP_MESSAGES = {
  general:
    "Olá! Acessei o site da CNSOUSATEC e gostaria de solicitar um orçamento.",
  medical:
    "Olá, preciso de suporte técnico especializado para equipamentos de engenharia clínica.",
  urgent:
    "Olá! Preciso acionar uma manutenção 24h com a CNSOUSATEC. Gostaria de um atendimento urgente.",
} as const;

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getLocalityWhatsAppUrl(locality: string, service = "manutenção") {
  return getWhatsAppUrl(
    `Olá! Acessei o site da CNSOUSATEC e preciso de ${service} em ${locality}. Gostaria de solicitar um orçamento.`,
  );
}

export function getMedicalWhatsAppUrl() {
  return getWhatsAppUrl(WHATSAPP_MESSAGES.medical);
}

export function getUrgentWhatsAppUrl() {
  return getWhatsAppUrl(WHATSAPP_MESSAGES.urgent);
}

export function getGeneralWhatsAppUrl() {
  return getWhatsAppUrl(WHATSAPP_MESSAGES.general);
}

export type WhatsAppIconProps = {
  size?: number;
  title?: string;
};
