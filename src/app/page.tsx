import { Header } from '@/components/shared/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  Cpu,
  MessageCircle,
  PieChart,
  Smartphone,
} from 'lucide-react';

const solucoes = [
  {
    icon: <Cpu className='h-8 w-8 text-primary' />,
    title: 'Desenvolvimento Sob Medida',
    description:
      'Sistemas, plataformas e integrações que resolvem desafios únicos e destravam novos níveis de operação.',
    href: '/desenvolvimento',
  },
  {
    icon: <Smartphone className='h-8 w-8 text-primary' />,
    title: 'Aplicativos Personalizados',
    description:
      'Apps completos para transformar a jornada do cliente, integrar serviços e gerar engajamento direto.',
    href: '/desenvolvimento',
  },
  {
    icon: <PieChart className='h-8 w-8 text-primary' />,
    title: 'Automação Inteligente (Mautic)',
    description:
      'Controle total da base de leads, campanhas complexas e conversões escaláveis com tecnologia open source.',
    href: '/mautic',
  },
  {
    icon: <MessageCircle className='h-8 w-8 text-primary' />,
    title: 'Atendimento Omnichannel com IA (Chatwoot)',
    description:
      'Centralize canais, converse em grande escala e aumente a produtividade do suporte com IA.',
    href: '/chatwoot',
  },
];

const diferenciais = [
  'Soluções “battle-tested” em operações reais',
  'Time especialista em engenharia de software sob demanda',
  'Estrutura própria de P&D integrada com nossas operações',
  'Projetos criados para escalar, sem limites',
  'Parceria estratégica de longo prazo',
];

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen bg-background text-foreground'>
      <Header />
      <main className='flex-grow'>
        {/* HERO SECTION */}
        <section className='relative bg-secondary py-24 md:py-40 text-center'>
          <div className='container mx-auto px-4 z-10'>
            <h1 className='font-title text-4xl md:text-7xl font-extrabold tracking-tight'>
              A Engenharia de Software que Escala Seus Resultados
            </h1>
            <p className='max-w-3xl mx-auto mt-4 text-lg md:text-xl text-muted-foreground'>
              Na Ipromove Tech, criamos sistemas, aplicativos e plataformas sob
              medida para organizações ambiciosas, capazes de crescer em escala
              e complexidade — como já comprovamos em nossas próprias operações.
            </p>
            <Button size='lg' className='mt-8 font-bold text-lg px-8 py-6'>
              Agendar uma Conversa
            </Button>
          </div>
        </section>

        {/* QUEM SOMOS */}
        <section className='py-16 md:py-24'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='font-title text-3xl md:text-4xl font-bold mb-4'>
              Muito Além de Desenvolvimento: Estratégia e Inovação Real
            </h2>
            <p className='max-w-4xl mx-auto text-muted-foreground text-lg'>
              Somos arquitetos de soluções digitais validadas em campo. Na
              Ipromove Tech, toda tecnologia nasce e é testada em nosso
              ecossistema — como na Ipromove.com.br, nosso laboratório vivo.
              Assim, entregamos sistemas prontos para performar em cenários
              reais, maximizando receita e otimizando recursos.
            </p>
          </div>
        </section>

        {/* NOSSAS SOLUÇÕES */}
        <section id='solucoes' className='py-16 md:py-24 bg-secondary'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 font-title'>
              Nossas Soluções
            </h2>
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
              {solucoes.map(solucao => (
                <a href={solucao.href} key={solucao.title} className='group'>
                  <Card className='h-full flex flex-col items-center text-center p-6 border bg-background hover:border-primary transition-colors'>
                    <CardHeader>{solucao.icon}</CardHeader>
                    <CardContent>
                      <CardTitle className='text-xl font-bold'>
                        {solucao.title}
                      </CardTitle>
                      <p className='text-muted-foreground mt-2 text-sm'>
                        {solucao.description}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUE A IPROMOVETECH */}
        <section className='py-16 md:py-24'>
          <div className='container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='font-title text-3xl md:text-4xl font-bold mb-6'>
                Por que a Ipromove Tech?
              </h2>
              <ul className='space-y-4'>
                {diferenciais.map(text => (
                  <li key={text} className='flex items-start gap-3'>
                    <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                    <span className='text-lg text-muted-foreground'>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='hidden md:block rounded-lg overflow-hidden shadow-2xl'>
              <img
                src='https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop'
                alt='Equipe de desenvolvedores em uma reunião estratégica'
              />
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className='py-20 text-center bg-secondary'>
          <div className='container mx-auto px-4'>
            <h3 className='font-title text-3xl md:text-4xl font-bold'>
              Pronto para Escalar Seus Resultados?
            </h3>
            <p className='text-muted-foreground mt-4 mb-8 max-w-2xl mx-auto'>
              Se sua empresa precisa de mais do que um sistema genérico, fale
              com a Ipromove Tech. Estamos prontos para desenvolver a próxima
              solução estratégica para seu negócio.
            </p>
            <Button size='lg' className='font-bold text-lg px-8 py-6'>
              Agendar uma Conversa com um Especialista
            </Button>
          </div>
        </section>
      </main>

      <footer className='bg-card border-t'>
        <div className='container mx-auto py-8 px-4 text-center text-sm text-muted-foreground'>
          <a
            href='/'
            className='font-title text-xl font-bold text-foreground mb-4 inline-block'
          >
            Ipromove<span className='text-primary'>tech</span>
          </a>
          <div className='flex justify-center gap-4 mb-4'>
            <a href='/desenvolvimento' className='hover:text-primary'>
              Desenvolvimento
            </a>
            <a href='/mautic' className='hover:text-primary'>
              Mautic
            </a>
            <a href='/chatwoot' className='hover:text-primary'>
              Chatwoot
            </a>
          </div>
          <p>
            © {new Date().getFullYear()} Ipromovetech. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
