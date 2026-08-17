import { useMemo, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import {
  trackChatbotOpen,
  trackChatbotServiceSelected,
  trackChatbotUrgencySelected,
  trackChatbotWhatsAppClick,
  trackWhatsAppClick,
} from '../lib/analytics';

const WHATSAPP_NUMBER = '5561992743428';

const serviceOptions = [
  { id: 'eletrica', label: 'Elétrica' },
  { id: 'hidraulica', label: 'Hidráulica' },
  { id: 'eletronica', label: 'Eletrônica / Engenharia Clínica' },
] as const;

const urgencyOptions = [
  { id: 'emergencia', label: 'Emergência 24h' },
  { id: 'orcamento', label: 'Orçamento Programado' },
] as const;

type ServiceId = (typeof serviceOptions)[number]['id'];
type UrgencyId = (typeof urgencyOptions)[number]['id'];
type ConversationStep = 'service' | 'urgency' | 'done';
type ChatMessage = { id: string; sender: 'bot' | 'user'; text: string };

const initialMessage: ChatMessage = {
  id: 'welcome',
  sender: 'bot',
  text: 'Olá! Sou o assistente virtual da CNSOUSATEC. Qual serviço você precisa hoje?',
};

function createWhatsAppUrl(service: string, urgency: string) {
  const message = `Olá, preciso de suporte para ${service}. Trata-se de uma ${urgency}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ConversationStep>('service');
  const [service, setService] = useState<ServiceId | null>(null);
  const [urgency, setUrgency] = useState<UrgencyId | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);

  const selectedServiceLabel = useMemo(
    () => serviceOptions.find((option) => option.id === service)?.label || '',
    [service],
  );
  const selectedUrgencyLabel = useMemo(
    () => urgencyOptions.find((option) => option.id === urgency)?.label || '',
    [urgency],
  );

  const chooseService = (nextService: ServiceId) => {
    const selected = serviceOptions.find((option) => option.id === nextService);
    if (!selected || step !== 'service') return;

    trackChatbotServiceSelected(selected.label);
    setService(nextService);
    setStep('urgency');
    setMessages((current) => [
      ...current,
      { id: `user-service-${nextService}`, sender: 'user', text: selected.label },
      {
        id: 'bot-urgency',
        sender: 'bot',
        text: 'Certo. É uma emergência (Atendimento 24h) ou um orçamento programado?',
      },
    ]);
  };

  const chooseUrgency = (nextUrgency: UrgencyId) => {
    const selected = urgencyOptions.find((option) => option.id === nextUrgency);
    if (!selected || step !== 'urgency') return;

    trackChatbotUrgencySelected(selectedServiceLabel, selected.label);
    setUrgency(nextUrgency);
    setStep('done');
    setMessages((current) => [
      ...current,
      { id: `user-urgency-${nextUrgency}`, sender: 'user', text: selected.label },
      {
        id: 'bot-transfer',
        sender: 'bot',
        text: 'Perfeito! Vou te transferir para a nossa equipe técnica agora mesmo.',
      },
    ]);
  };

  const whatsappUrl = service && urgency
    ? createWhatsAppUrl(selectedServiceLabel, selectedUrgencyLabel)
    : '#';

  return (
    <>
      <button
        type="button"
        className="virtual-assistant-trigger"
        aria-label={isOpen ? 'Fechar assistente virtual' : 'Abrir assistente virtual'}
        aria-expanded={isOpen}
        aria-controls="virtual-assistant-panel"
        onClick={() => {
          if (!isOpen) trackChatbotOpen();
          setIsOpen((current) => !current);
        }}
      >
        {isOpen ? <X size={24} aria-hidden="true" /> : <MessageCircle size={25} aria-hidden="true" />}
        <span className="virtual-assistant-trigger__label">Atendimento</span>
      </button>

      {isOpen && (
        <section
          id="virtual-assistant-panel"
          className="virtual-assistant-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="virtual-assistant-title"
        >
          <header className="virtual-assistant-header">
            <div>
              <span className="virtual-assistant-status" aria-hidden="true" />
              <h2 id="virtual-assistant-title">Atendimento CNSOUSATEC</h2>
              <p>Triagem rápida pelo WhatsApp</p>
            </div>
            <button
              type="button"
              className="virtual-assistant-close"
              aria-label="Fechar atendimento"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="virtual-assistant-messages" role="log" aria-live="polite" aria-relevant="additions">
            {messages.map((message) => (
              <div key={message.id} className={`virtual-assistant-message virtual-assistant-message--${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="virtual-assistant-actions">
            {step === 'service' && (
              <div className="virtual-assistant-options" aria-label="Escolha o serviço">
                {serviceOptions.map((option) => (
                  <button key={option.id} type="button" onClick={() => chooseService(option.id)}>
                    {option.label}
                  </button>
                ))}
              </div>
            )}

            {step === 'urgency' && (
              <div className="virtual-assistant-options" aria-label="Escolha o tipo de atendimento">
                {urgencyOptions.map((option) => (
                  <button key={option.id} type="button" onClick={() => chooseUrgency(option.id)}>
                    {option.label}
                  </button>
                ))}
              </div>
            )}

            {step === 'done' && (
              <a
                className="virtual-assistant-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackChatbotWhatsAppClick(selectedServiceLabel, selectedUrgencyLabel);
                  trackWhatsAppClick({
                    placement: 'chatbot',
                    service: selectedServiceLabel,
                    label: 'Falar no WhatsApp',
                    messageType: selectedUrgencyLabel,
                  });
                }}
              >
                <Send size={18} aria-hidden="true" />
                Falar no WhatsApp
              </a>
            )}
          </div>
        </section>
      )}
    </>
  );
}

export { createWhatsAppUrl };
