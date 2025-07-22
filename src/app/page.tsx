// src/app/page.tsx
import { FeaturedSolutions } from '@/components/home/FeaturedSolutions';
import { Header } from '@/components/shared/Header';
import { HeroCarousel } from '@/components/shared/HeroCarousel';
import { LogoCarousel } from '@/components/shared/LogoCarousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  CheckCircle,
  Cpu,
  MessageCircle,
  PieChart,
  Smartphone,
} from 'lucide-react';
import Image from 'next/image';

// Dados dos slides para o HeroCarousel
const serviceSlides = [
  {
    //src: 'https://images.unsplash.com/photo-1556742502-ec7c0e2426e2?q=80&w=2070&auto=format&fit=crop',
    src: '/banners/automacao02.jpg',
    title: 'Automação de Marketing com Mautic',
    subtitle:
      'Implementamos e otimizamos o Mautic para empresas com grandes bases de dados, garantindo soberania de dados e campanhas de alta performance.',
    buttonText: 'Automatizar meu Marketing',
  },
  {
    //src: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop',
    src: '/banners/chatwoot01.jpg',
    title: 'Atendimento Omnichannel com Chatwoot',
    subtitle:
      'Centralize todos os seus canais de atendimento em uma única plataforma open-source, integrada com IA e seus sistemas legados.',
    buttonText: 'Otimizar meu Atendimento',
  },
  {
    //src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    src: '/banners/desenvolvimento02.jpg',
    title: 'Desenvolvimento de Software Sob Medida',
    subtitle:
      'Criamos sistemas e aplicativos robustos que resolvem desafios complexos e escalam com o crescimento do seu negócio.',
    buttonText: 'Falar com um Especialista',
  },
];

// Dados para a seção "Nossas Soluções"
const solucoes = [
  {
    icon: <Smartphone className='h-8 w-8 text-primary' />,
    title: 'Super APP para Provedores de Internet',
    description:
      'Central do Assinante unificada (internet, TV, telefonia, SVAs, assinatura digital)',
    href: '/cases',
  },
  {
    icon: <Cpu className='h-8 w-8 text-primary' />,
    title: 'Sistemas Web Sob Medida',
    description:
      'Plataformas e integrações que resolvem desafios únicos e destravam novos níveis de operação.',
    href: '/cases',
  },
  {
    icon: <PieChart className='h-8 w-8 text-primary' />,
    title: 'Automação Estratégica (Mautic)',
    description:
      'Escalabilidade, controle de leads e campanhas segmentadas sem custos de licenças abusivas.',
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
        {/* HERO SECTION COMBINADA COM O CARROSSEL */}
        <section className='relative bg-secondary pt-24 md:pt-40 pb-16 md:pb-24'>
          {/* Parte 1: Texto Introdutório */}
          <div className='container mx-auto px-4 z-10 text-center'>
            <h1 className='font-title text-4xl md:text-7xl font-extrabold tracking-tight'>
              A Engenharia de Software que Escala Seus Resultados
            </h1>
            <p className='max-w-3xl mx-auto mt-4 text-lg md:text-xl text-muted-foreground'>
              Na Ipromove Tech, criamos sistemas, aplicativos e plataformas sob
              medida para organizações ambiciosas, capazes de crescer em escala
              e complexidade.
            </p>
            {/* O botão foi removido daqui para não ser redundante com os botões do carrossel */}
          </div>

          {/* Parte 2: Carrossel, agora dentro da mesma seção */}
          <div className='container mx-auto px-4 mt-12 md:mt-16 rounded-lg overflow-hidden border'>
            <HeroCarousel slides={serviceSlides} />
          </div>
        </section>

        {/* NOVA SEÇÃO DE LOGOS COM FUNDO ESCURO FIXO */}
        <section className='py-12 bg-zinc-900 border-y border-zinc-800'>
          <div className='container mx-auto'>
            <h3 className='text-center text-sm font-bold uppercase tracking-widest text-zinc-400 mb-8'>
              Nossos parceiros
            </h3>
            <LogoCarousel />
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
              ecossistema. Entregamos sistemas prontos para performar em
              cenários reais, maximizando receita e otimizando recursos.
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

        {/* SEÇÃO DE CASES E DEPOIMENTOS */}
        <FeaturedSolutions />

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
              <Image
                src='/recomendacao01.jpg'
                alt='Equipe de desenvolvedores em uma reunião estratégica'
                width={800} // Defina a largura real da imagem
                height={600} // Defina a altura real da imagem
                className='rounded-lg shadow-2xl' // Mantenha suas classes
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
              Agendar uma Conversa
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
