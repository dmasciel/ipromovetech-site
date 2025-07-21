import { Header } from '@/components/shared/Header';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  MessageCircle,
  Plug,
  ShieldCheck,
  Smartphone,
  Zap,
} from 'lucide-react';

// Novos dados para a seção de prova social
const chatwootStats = [
  {
    icon: <Zap className='h-8 w-8 text-primary' />,
    value: '50.000+',
    label: 'Instalações Ativas',
  },
  {
    icon: <Globe className='h-8 w-8 text-primary' />,
    value: '28.000+',
    label: 'Websites em Produção',
  },
  /*{
    icon: <Star className='h-8 w-8 text-primary' />,
    value: '23.000+',
    label: 'Estrelas no GitHub',
  },*/
  {
    icon: <CheckCircle className='h-8 w-8 text-primary' />,
    value: 'Y Combinator',
    label: 'Aprovado Globalmente',
  },
  {
    icon: <ShieldCheck className='h-8 w-8 text-primary' />,
    value: 'Open Source',
    label: 'Soberania dos Dados',
  },
];

// Destaques reformulados focando nos seus diferenciais
const chatwootFeatures = [
  {
    icon: <MessageCircle className='h-7 w-7' />,
    title: 'Atendimento Multicanal Integrado',
    description:
      'Unifique chat web, redes sociais, WhatsApp, SMS e e-mail em uma única caixa de entrada para uma visão 360º do cliente.',
  },
  {
    icon: <Zap className='h-7 w-7' />,
    title: 'Automação Inteligente de Fluxos',
    description:
      'Configure rotas de atendimento, respostas prontas, e gatilhos automáticos para aumentar a eficiência da sua equipe.',
  },
  {
    icon: <Plug className='h-7 w-7' />,
    title: 'API e Webhooks para Integrações',
    description:
      'Conecte o Chatwoot com sua IA própria, CRM, ERP e aplicativos internos sem ficar preso a um ecossistema fechado.',
  },
  {
    icon: <Smartphone className='h-7 w-7' />,
    title: 'Aplicativo Móvel Completo',
    description:
      'Garanta que sua equipe possa atender clientes e gerenciar conversas de qualquer lugar, a qualquer momento.',
  },
];

export default function ChatwootPage() {
  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <Header />
      <main className='flex-grow'>
        {/* Hero Section */}
        <section className='bg-secondary py-20 md:py-28'>
          <div className='container mx-auto px-4 text-center'>
            <h1 className='font-title text-4xl md:text-6xl font-extrabold tracking-tight'>
              Chatwoot: Atendimento Omnichannel com Controle e Escalabilidade
            </h1>
            <p className='max-w-3xl mx-auto mt-4 text-lg md:text-xl text-muted-foreground'>
              Para operações que precisam centralizar conversas, ter controle
              total dos dados e criar integrações sob medida que acompanhem seu
              negócio.
            </p>
            <Button size='lg' className='mt-8 font-bold'>
              Agendar uma Reunião
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
          </div>
        </section>

        {/* Introduction */}
        <section className='py-16 md:py-24'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <p className='text-lg text-muted-foreground mb-8'>
                Na Ipromove Tech, entendemos que o relacionamento com o cliente
                é o coração do negócio — principalmente em empresas com grandes
                volumes de atendimento.
              </p>
              <p className='text-lg font-semibold text-foreground'>
                O Chatwoot, plataforma open source de atendimento, é a base que
                usamos para clientes que não aceitam limitações ou
                funcionalidades engessadas.
              </p>
            </div>
          </div>
        </section>

        {/* NOVA SEÇÃO DE PROVA SOCIAL */}
        <section className='bg-secondary py-16'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
              {chatwootStats.map(stat => (
                <div key={stat.label} className='flex flex-col items-center'>
                  {stat.icon}
                  <p className='text-3xl md:text-4xl font-bold mt-2'>
                    {stat.value}
                  </p>
                  <p className='text-sm text-muted-foreground mt-1'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO DE DESTAQUES REFORMULADA */}
        <section className='py-16 md:py-24'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-12'>
              <h2 className='font-title text-3xl md:text-4xl font-bold'>
                Funcionalidades que Fazem a Diferença
              </h2>
              <p className='max-w-2xl mx-auto mt-3 text-muted-foreground'>
                Uma base robusta com os recursos essenciais para uma operação de
                atendimento de alta performance.
              </p>
            </div>
            <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
              {chatwootFeatures.map(feature => (
                <div
                  key={feature.title}
                  className='flex items-start gap-6 p-6 rounded-lg bg-card border'
                >
                  <div className='flex-shrink-0 mt-1 text-primary'>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className='font-bold text-xl mb-2'>{feature.title}</h3>
                    <p className='text-muted-foreground'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Ipromove Tech Potentiates Chatwoot (Mantida e agora mais forte) */}
        <section className='bg-secondary py-16 md:py-24'>
          <div className='container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
            <div className='hidden md:block'>
              <img
                src='https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop'
                alt='Equipe de atendimento ao cliente utilizando a plataforma Chatwoot'
                className='rounded-lg shadow-xl'
              />
            </div>
            <div>
              <h2 className='font-title text-3xl md:text-4xl font-bold'>
                Como a Ipromove Tech Potencializa o Chatwoot
              </h2>
              <p className='mt-4 text-muted-foreground text-lg'>
                Na Ipromove Tech, não vendemos um chat pronto. Entregamos uma
                base robusta, testada em nossa própria operação e integrada com
                IA, automação e as suas regras de negócio.
              </p>
              <ul className='mt-6 space-y-3'>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                  <span>Implantação escalável e otimizada</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                  <span>Integração com IA e sistemas legados</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                  <span>Conexão com WhatsApp Business API</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                  <span>Automação para autoatendimento inteligente</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                  <span>Suporte técnico e treinamento especializado</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className='py-20 text-center bg-background'>
          <div className='container mx-auto px-4'>
            <h3 className='font-title text-3xl md:text-4xl font-bold max-w-3xl mx-auto'>
              Pronto para transformar seu suporte em um ativo estratégico?
            </h3>
            <p className='text-muted-foreground mt-4 mb-8 max-w-xl mx-auto'>
              Conquiste uma operação de atendimento centralizada, inteligente e
              preparada para escalar com o seu negócio.
            </p>
            <Button size='lg' className='font-bold text-lg px-8 py-6'>
              Agendar Reunião
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
