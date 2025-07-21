// src/components/home/FeaturedSolutions.tsx

import { ProductCard } from '@/components/shared/ProductCard';
import { TestimonialCarousel } from '@/components/shared/TestimonialCarousel';

// Cards focados em cases de sucesso reais, com o conteúdo que você solicitou.
const caseStudyCards = [
  {
    nome: 'Super APP para Provedores de Internet',
    preco:
      'Central do Assinante unificada (internet, TV, telefonia, SVAs, assinatura digital)',
    imagemUrl: '/app02.jpg',
  },
  {
    nome: 'Automação Estratégica (Mautic)',
    preco:
      'Escalabilidade, controle de leads e campanhas segmentadas sem custos de licenças abusivas.',
    imagemUrl: '/automacao03.jpg',
  },
  {
    nome: 'Integração Chatwoot com IA',
    preco:
      'Automação de 60% dos tickets de suporte nível 1 com um chatbot customizado.',
    imagemUrl: '/chat01.jpg',
  },
];

// Depoimentos de clientes com o conteúdo que você solicitou.
const partnerTestimonials = [
  {
    nome: 'Juliana S., Diretora de CX',
    avatar: 'JS',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
    texto:
      'Com a Ipromove Tech, nossa plataforma de atendimento ficou 100% integrada e escalável. Hoje atendemos 3x mais clientes sem travar a operação.',
  },
  {
    nome: 'Carlos M., Gerente de Marketing',
    avatar: 'CM',
    imageUrl: 'https://i.pravatar.cc/150?img=11',
    texto:
      'A automação do Mautic implementada pela Ipromove Tech nos deu total controle da base de leads, reduzindo custos e aumentando conversões.',
  },
  {
    nome: 'Renata T., CEO',
    avatar: 'RT',
    imageUrl: 'https://i.pravatar.cc/150?img=8',
    texto:
      'Construímos um Super APP com a Ipromove Tech para unificar serviços de assinantes. O resultado superou nossas expectativas em engajamento.',
  },
];

export function FeaturedSolutions() {
  return (
    <section
      id='featured-solutions'
      className='w-full py-16 md:py-24 bg-background'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='font-title text-3xl md:text-4xl font-bold'>
            Cases de Sucesso
          </h2>
          <p className='max-w-3xl mx-auto mt-4 text-lg text-muted-foreground'>
            Veja como aplicamos nossas tecnologias para construir soluções que
            geram resultados tangíveis.
          </p>
        </div>

        {/* 1. Cards de Cases de Sucesso */}
        <div className='mb-20'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {caseStudyCards.map(caseItem => (
              <ProductCard
                key={caseItem.nome}
                produto={caseItem}
                buttonText='Ver Detalhes'
                isCaseStudy
              />
            ))}
          </div>
        </div>

        {/* 2. Depoimentos de Clientes */}
        <div>
          <h3 className='font-title text-2xl md:text-3xl font-bold text-center mb-12'>
            O Que Nossos Clientes Dizem
          </h3>
          <TestimonialCarousel testimonials={partnerTestimonials} />
        </div>
      </div>
    </section>
  );
}
