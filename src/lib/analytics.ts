import ReactGA from 'react-ga4';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const initGA = () => {
  if (GA_TRACKING_ID) {
    ReactGA.initialize(GA_TRACKING_ID);
  }
};

export const logPageView = (url: string) => {
  if (GA_TRACKING_ID) {
    ReactGA.send({ hitType: 'pageview', page: url });
  }
};

export const logEvent = (category: string, action: string, label?: string) => {
  if (GA_TRACKING_ID) {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};

// Eventos de conversão
export const trackWhatsAppClick = (servico?: string, local?: string) => {
  logEvent('Conversão', 'Clique WhatsApp', servico || local || 'Geral');
};

export const trackCTAClick = (label: string) => {
  logEvent('Conversão', 'Clique CTA', label);
};

export const trackLandingPageConversion = (lpName: string) => {
  logEvent('Conversão', 'Landing Page', lpName);
};
