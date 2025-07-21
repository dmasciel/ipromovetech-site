import { Header } from '@/components/shared/Header';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  Scale,
  Siren,
  Users,
  Zap,
} from 'lucide-react';
import Image from 'next/image';

// Dados para a seção de benefícios com o conteúdo novo
const mauticBenefits = [
  {
    icon: <Scale className='h-7 w-7 text-primary' />,
    title: 'Escala com Eficiência',
    description:
      'Operações de automação para bases massivas, sem limitações ou custos ocultos.',
  },
  {
    icon: <Users className='h-7 w-7 text-primary' />,
    title: 'Controle e Soberania dos Dados',
    description:
      'Propriedade total do seu banco de dados, com conformidade 100% garantida à LGPD e outras regulamentações de privacidade.',
  },
  {
    icon: <Zap className='h-7 w-7 text-primary' />,
    title: 'Campanhas Avançadas e Multicanais',
    description:
      'Crie fluxos complexos com construtor visual intuitivo para e-mails, push, SMS, WhatsApp e muito mais.',
  },
  {
    icon: <CheckCircle className='h-7 w-7 text-primary' />,
    title: 'Gestão de Leads de Alta Performance',
    description:
      'Utilize Lead Scoring, histórico detalhado de interações e segmentações inteligentes para potencializar conversões reais.',
  },
];

// Lista de serviços da Ipromove Tech
const ipromoveServices = [
  { text: 'Projetos de implementação de grande escala a partir de R$20k' },
  { text: 'Parceria estratégica de longo prazo' },
  { text: 'Implantação otimizada na AWS, Google Cloud ou on-premise' },
  { text: 'Ajustes de performance e velocidade de envio' },
  { text: 'Treinamentos personalizados para TI ou Marketing' },
  {
    text: 'Consultoria avulsa (a partir de R$300/h, pacote mínimo de 4 horas)',
  },
  {
    text: 'Contrato anual de 8 horas/mês de suporte por R$16k/ano, com SLA de até 1h',
  },
];

export default function MauticPage() {
  return (
    <div className='flex flex-col min-h-screen bg-background'>
      <Header />
      <main className='flex-grow'>
        {/* Hero Section */}
        <section className='bg-secondary py-20 md:py-28'>
          <div className='container mx-auto px-4 text-center'>
            <h1 className='font-title text-4xl md:text-6xl font-extrabold tracking-tight'>
              Mautic: Automação de Marketing Estratégica
            </h1>
            <p className='max-w-3xl mx-auto mt-4 text-lg md:text-xl text-muted-foreground'>
              Para grandes bases de clientes e negócios que buscam escala,
              controle total e um ROI superior.
            </p>
            <Button size='lg' className='mt-8 font-bold'>
              Automatizar meu Marketing
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
          </div>
        </section>

        {/* Introduction */}
        <section className='py-16 md:py-24'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <p className='text-lg text-muted-foreground mb-8'>
                Na Ipromove Tech, entendemos que empresas em expansão enfrentam
                desafios complexos — e que, quando a base de contatos cresce,
                ferramentas genéricas de marketing podem se tornar limitadoras.
              </p>
              <p className='text-lg font-semibold text-foreground'>
                É exatamente por isso que o Mautic, a maior plataforma Open
                Source do mundo, é a solução que implementamos. Ele entrega uma
                proposta de valor singular: soberania total dos seus dados,
                liberdade do vendor lock-in e máximo retorno sobre cada
                investimento em relacionamento e conversão.
              </p>
            </div>
          </div>
        </section>

        {/* Core Benefits Section */}
        <section className='bg-secondary py-16 md:py-24'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-12'>
              <h2 className='font-title text-3xl md:text-4xl font-bold'>
                A Escolha Inteligente para Empresas que Pensam Grande
              </h2>
              <p className='max-w-2xl mx-auto mt-3 text-muted-foreground'>
                Veja por que o Mautic, implementado pela Ipromove Tech, é o
                motor de crescimento para o seu negócio:
              </p>
            </div>
            <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
              {mauticBenefits.map(benefit => (
                <div
                  key={benefit.title}
                  className='flex items-start gap-6 p-6 rounded-lg bg-background border'
                >
                  <div className='flex-shrink-0 mt-1'>{benefit.icon}</div>
                  <div>
                    <h3 className='font-bold text-xl mb-2'>{benefit.title}</h3>
                    <p className='text-muted-foreground'>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* "Esteja Ciente" Section */}
        <section className='py-16 md:py-24'>
          <div className='container mx-auto px-4'>
            <div className='bg-card border border-amber-500/30 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto'>
              <Siren className='h-16 w-16 text-amber-500 flex-shrink-0' />
              <div className='text-center md:text-left'>
                <h3 className='font-title text-2xl font-bold'>
                  O Mautic Não É Para Qualquer Um
                </h3>
                <p className='mt-3 text-muted-foreground'>
                  Essa ferramenta é feita para quem tem estratégia sólida. Se a
                  meta é apenas armazenar contatos ou disparar comunicações
                  genéricas, soluções básicas podem atender. O Mautic é para
                  quem quer entregar a mensagem certa, para a pessoa certa, na
                  hora certa, de forma inteligente e escalável.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Ipromove Tech Section */}
        <section className='bg-secondary py-16 md:py-24'>
          <div className='container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
            <div className='hidden md:block'>
              {/* CAMINHO DA IMAGEM ATUALIZADO AQUI */}
              <Image
                src='/mautic01.jpg'
                alt='Especialistas em Mautic discutindo uma estratégia de marketing'
                width={400} // Defina a largura real da imagem
                height={200} // Defina a altura real da imagem
                className='rounded-lg shadow-2xl' // Mantenha suas classes
              />
            </div>
            <div>
              <h2 className='font-title text-3xl md:text-4xl font-bold'>
                Por que Implementar o Mautic com a Ipromove Tech?
              </h2>
              <p className='mt-4 text-muted-foreground text-lg'>
                Nossa experiência vem de aplicar o Mautic em nossas próprias
                operações de grande escala, validando cada ajuste em campo real.
                Assim, ajudamos sua empresa a extrair o máximo potencial da
                plataforma.
              </p>
              <ul className='mt-6 space-y-3'>
                {ipromoveServices.map(service => (
                  <li key={service.text} className='flex items-start gap-3'>
                    <CheckCircle className='h-5 w-5 text-primary flex-shrink-0 mt-1' />
                    <span>{service.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className='py-20 text-center bg-background'>
          <div className='container mx-auto px-4'>
            <p className='inline-block bg-black text-white font-semibold px-4 py-2 rounded-lg tracking-wider text-sm'>
              MAIS DE 200.000 EMPRESAS NO MUNDO UTILIZAM O MAUTIC
            </p>
            <h3 className='font-title text-3xl md:text-4xl font-bold mt-6 max-w-3xl mx-auto'>
              Pronto para revolucionar sua estratégia de automação?
            </h3>
            <p className='text-muted-foreground mt-4 mb-8 max-w-xl mx-auto'>
              Agora é a sua vez de conquistar automação em escala, com total
              autonomia, inteligência e performance.
            </p>
            <Button size='lg' className='font-bold text-lg px-8 py-6'>
              Agendar uma Reunião
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
