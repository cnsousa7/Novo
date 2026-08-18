import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, RotateCcw, Send, X } from 'lucide-react';
import {
  trackChatbotAvailabilitySelected,
  trackChatbotIssueSelected,
  trackChatbotOpen,
  trackChatbotRestart,
  trackChatbotServiceSelected,
  trackChatbotUrgencySelected,
  trackChatbotWhatsAppClick,
  trackWhatsAppClick,
} from '../lib/analytics';

const WHATSAPP_NUMBER = '5561992743428';

const serviceOptions = [
  {
    id: 'eletrica',
    label: 'Elétrica',
    description: 'Quadros, disjuntores, tomadas, iluminação e rede elétrica.',
  },
  {
    id: 'hidraulica',
    label: 'Hidráulica',
    description: 'Vazamentos, pressão, registros, bombas e tubulações.',
  },
  {
    id: 'eletronica',
    label: 'Engenharia clínica',
    description: 'Equipamentos médico-hospitalares e suporte técnico especializado.',
  },
] as const;

const issueOptions = [
  {
    id: 'parado',
    label: 'O equipamento ou sistema parou',
    description: 'Preciso restabelecer a operação o quanto antes.',
  },
  {
    id: 'falha',
    label: 'Há falha, risco ou funcionamento irregular',
    description: 'Quero avaliar o problema antes que ele aumente.',
  },
  {
    id: 'preventiva',
    label: 'Quero prevenir problemas',
    description: 'Preciso de vistoria, manutenção preventiva ou melhoria.',
  },
] as const;

const urgencyOptions = [
  {
    id: 'emergencia',
    label: 'Emergência 24h',
    description: 'Prioridade para minimizar parada, risco ou prejuízo.',
  },
  {
    id: 'hoje',
    label: 'Atendimento ainda hoje',
    description: 'Preciso de retorno rápido para organizar a solução.',
  },
  {
    id: 'orcamento',
    label: 'Orçamento programado',
    description: 'Quero planejar o atendimento com a equipe.',
  },
] as const;

const availabilityOptions = [
  { id: 'agora', label: 'Estou disponível agora' },
  { id: 'manha', label: 'Prefiro o período da manhã' },
  { id: 'tarde', label: 'Prefiro o período da tarde' },
  { id: 'flexivel', label: 'Tenho flexibilidade de horário' },
] as const;

type ServiceId = (typeof serviceOptions)[number]['id'];
type IssueId = (typeof issueOptions)[number]['id'];
type UrgencyId = (typeof urgencyOptions)[number]['id'];
type AvailabilityId = (typeof availabilityOptions)[number]['id'];
type ConversationStep = 'service' | 'issue' | 'urgency' | 'availability' | 'done';
type ChatMessage = { id: string; sender: 'bot' | 'user'; text: string };

const initialMessage: ChatMessage = {
  id: 'welcome',
  sender: 'bot',
  text: 'Olá! Sou o assistente virtual da CNSOUSATEC. Vou entender sua necessidade em poucos passos e encaminhar você à equipe certa.',
};

function createWhatsAppUrl(
  service: string,
  issue: string,
  urgency: string,
  availability: string,
) {
  const message = [
    'Olá! Vim pelo assistente virtual da CNSOUSATEC.',
    `Serviço: ${service}.`,
    `Situação: ${issue}.`,
    `Prioridade: ${urgency}.`,
    `Melhor disponibilidade: ${availability}.`,
    'Gostaria de acionar um especialista para este atendimento.',
  ].join(' ');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function OptionButton({
  label,
  description,
  onClick,
}: {
  label: string;
  description?: string;
  onClick: () => void;
}) {
  return (
    <button type="button" className="virtual-assistant-option" onClick={onClick}>
      <span>{label}</span>
      {description && <small>{description}</small>}
      <ArrowRight size={17} aria-hidden="true" />
    </button>
  );
}

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ConversationStep>('service');
  const [service, setService] = useState<ServiceId | null>(null);
  const [issue, setIssue] = useState<IssueId | null>(null);
  const [urgency, setUrgency] = useState<UrgencyId | null>(null);
  const [availability, setAvailability] = useState<AvailabilityId | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);

  const selectedServiceLabel = useMemo(
    () => serviceOptions.find((option) => option.id === service)?.label || '',
    [service],
  );
  const selectedIssueLabel = useMemo(
    () => issueOptions.find((option) => option.id === issue)?.label || '',
    [issue],
  );
  const selectedUrgencyLabel = useMemo(
    () => urgencyOptions.find((option) => option.id === urgency)?.label || '',
    [urgency],
  );
  const selectedAvailabilityLabel = useMemo(
    () => availabilityOptions.find((option) => option.id === availability)?.label || '',
    [availability],
  );

  const stepNumber = step === 'service' ? 1 : step === 'issue' ? 2 : step === 'urgency' ? 3 : 4;

  const chooseService = (nextService: ServiceId) => {
    const selected = serviceOptions.find((option) => option.id === nextService);
    if (!selected || step !== 'service') return;

    trackChatbotServiceSelected(selected.label);
    setService(nextService);
    setStep('issue');
    setMessages((current) => [
      ...current,
      { id: `user-service-${nextService}`, sender: 'user', text: selected.label },
      {
        id: 'bot-issue',
        sender: 'bot',
        text: 'Perfeito. Assim conseguimos encaminhar um profissional com o perfil adequado. O que está acontecendo agora?',
      },
    ]);
  };

  const chooseIssue = (nextIssue: IssueId) => {
    const selected = issueOptions.find((option) => option.id === nextIssue);
    if (!selected || step !== 'issue') return;

    trackChatbotIssueSelected(selectedServiceLabel, selected.label);
    setIssue(nextIssue);
    setStep('urgency');
    setMessages((current) => [
      ...current,
      { id: `user-issue-${nextIssue}`, sender: 'user', text: selected.label },
      {
        id: 'bot-urgency',
        sender: 'bot',
        text: 'Entendi. Vamos definir a prioridade para que a equipe responda no ritmo que sua operação precisa.',
      },
    ]);
  };

  const chooseUrgency = (nextUrgency: UrgencyId) => {
    const selected = urgencyOptions.find((option) => option.id === nextUrgency);
    if (!selected || step !== 'urgency') return;

    trackChatbotUrgencySelected(selectedServiceLabel, selected.label);
    setUrgency(nextUrgency);
    setStep('availability');
    setMessages((current) => [
      ...current,
      { id: `user-urgency-${nextUrgency}`, sender: 'user', text: selected.label },
      {
        id: 'bot-availability',
        sender: 'bot',
        text: 'Ótimo. Falta só informar sua melhor disponibilidade. Assim a conversa no WhatsApp já começa com tudo organizado.',
      },
    ]);
  };

  const chooseAvailability = (nextAvailability: AvailabilityId) => {
    const selected = availabilityOptions.find((option) => option.id === nextAvailability);
    if (!selected || step !== 'availability') return;

    trackChatbotAvailabilitySelected(selectedServiceLabel, selected.label);
    setAvailability(nextAvailability);
    setStep('done');
    setMessages((current) => [
      ...current,
      { id: `user-availability-${nextAvailability}`, sender: 'user', text: selected.label },
      {
        id: 'bot-transfer',
        sender: 'bot',
        text: 'Pronto. Seu pedido foi organizado. Toque no botão abaixo para falar diretamente com um especialista da CNSOUSATEC.',
      },
    ]);
  };

  const restartConversation = () => {
    trackChatbotRestart();
    setStep('service');
    setService(null);
    setIssue(null);
    setUrgency(null);
    setAvailability(null);
    setMessages([initialMessage]);
  };

  const whatsappUrl = service && issue && urgency && availability
    ? createWhatsAppUrl(
      selectedServiceLabel,
      selectedIssueLabel,
      selectedUrgencyLabel,
      selectedAvailabilityLabel,
    )
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
        <span className="virtual-assistant-trigger__label">Assistente virtual</span>
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
              <p>Triagem rápida para acelerar seu atendimento</p>
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

          <div className="virtual-assistant-progress" aria-label={`Etapa ${stepNumber} de 4`}>
            <span>Etapa {stepNumber} de 4</span>
            <div aria-hidden="true">
              <i style={{ width: `${Math.min(stepNumber, 4) * 25}%` }} />
            </div>
          </div>

          <div className="virtual-assistant-messages" role="log" aria-live="polite" aria-relevant="additions">
            {messages.map((message) => (
              <div key={message.id} className={`virtual-assistant-message virtual-assistant-message--${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="virtual-assistant-actions">
            {step === 'service' && (
              <div className="virtual-assistant-options" aria-label="Escolha o serviço necessário">
                {serviceOptions.map((option) => (
                  <OptionButton
                    key={option.id}
                    label={option.label}
                    description={option.description}
                    onClick={() => chooseService(option.id)}
                  />
                ))}
              </div>
            )}

            {step === 'issue' && (
              <div className="virtual-assistant-options" aria-label="Descreva a situação">
                {issueOptions.map((option) => (
                  <OptionButton
                    key={option.id}
                    label={option.label}
                    description={option.description}
                    onClick={() => chooseIssue(option.id)}
                  />
                ))}
              </div>
            )}

            {step === 'urgency' && (
              <div className="virtual-assistant-options" aria-label="Escolha a prioridade">
                {urgencyOptions.map((option) => (
                  <OptionButton
                    key={option.id}
                    label={option.label}
                    description={option.description}
                    onClick={() => chooseUrgency(option.id)}
                  />
                ))}
              </div>
            )}

            {step === 'availability' && (
              <div className="virtual-assistant-options virtual-assistant-options--compact" aria-label="Escolha a disponibilidade">
                {availabilityOptions.map((option) => (
                  <OptionButton key={option.id} label={option.label} onClick={() => chooseAvailability(option.id)} />
                ))}
              </div>
            )}

            {step === 'done' && (
              <div className="virtual-assistant-complete">
                <div className="virtual-assistant-summary">
                  <CheckCircle2 size={20} aria-hidden="true" />
                  <div>
                    <strong>Resumo do atendimento</strong>
                    <span>{selectedServiceLabel} · {selectedUrgencyLabel}</span>
                  </div>
                </div>
                <a
                  className="virtual-assistant-whatsapp"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackChatbotWhatsAppClick(
                      selectedServiceLabel,
                      selectedUrgencyLabel,
                      selectedIssueLabel,
                      selectedAvailabilityLabel,
                    );
                    trackWhatsAppClick({
                      placement: 'chatbot',
                      service: selectedServiceLabel,
                      label: 'Acionar especialista pelo WhatsApp',
                      messageType: selectedUrgencyLabel,
                    });
                  }}
                >
                  <Send size={18} aria-hidden="true" />
                  Acionar especialista pelo WhatsApp
                </a>
                <button type="button" className="virtual-assistant-restart" onClick={restartConversation}>
                  <RotateCcw size={15} aria-hidden="true" />
                  Refazer triagem
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}

export { createWhatsAppUrl };
