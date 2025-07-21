// src/components/home/InnovationLab.tsx

import { HeroCarousel } from '@/components/shared/HeroCarousel';
import { ProductCard } from '@/components/shared/ProductCard';
import { TestimonialCarousel } from '@/components/shared/TestimonialCarousel';

// Dados para o Carrossel de Features Tecnológicas
const featureSlides = [
  {
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    title: 'Provador Virtual com IA',
    subtitle:
      'Reduzimos as taxas de devolução em 18% usando um modelo preditivo de tamanho, validado em nossa operação de e-commerce.',
    buttonText: 'Entenda a Tecnologia',
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    title: 'Motor de Recomendação em Tempo Real',
    subtitle:
      'Aumentamos o ticket médio em 12% com sugestões de produtos personalizadas, baseadas em Machine Learning e processamento de dados em tempo real.',
    buttonText: 'Veja o Case de Sucesso',
  },
];

// Dados para os Cards de Tecnologia (usando a estrutura de 'produto')
const techProducts = [
  {
    nome: 'Microsserviço de IA para Recomendações',
    preco: 'Python, TensorFlow, Scikit-learn', // Usando o campo 'preco' para as tags
    imagemUrl: '/icon ipromove-tech.svg',
  },
  {
    nome: 'API de Pagamentos de Alta Performance',
    preco: 'Node.js, Stripe, Segurança PCI-DSS',
    imagemUrl: '/icon ipromove-tech.svg',
  },
  {
    nome: 'Automação de Marketing Escalável',
    preco: 'Mautic, AWS, Filas e Escalabilidade',
    imagemUrl: '/icon ipromove-tech.svg',
  },
];

// Dados para os Depoimentos de Parceiros Técnicos
const partnerTestimonials = [
  {
    nome: 'João da Silva, CTO da Empresa X',
    avatar: 'JS',
    imageUrl: 'https://i.pravatar.cc/150?img=11',
    texto:
      'A Ipromove Tech não apenas entregou o software, mas nos ajudou a construir uma arquitetura escalável que suportou o crescimento de 300% na nossa base de usuários.',
  },
  {
    nome: 'Maria Oliveira, Gerente de Marketing da Empresa Y',
    avatar: 'MO',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
    texto:
      'A implementação do Mautic que eles realizaram foi impecável. Nossas taxas de abertura de e-mail aumentaram em 40% e o custo por lead caiu pela metade.',
  },
  {
    nome: 'Carlos Souza, CEO da Startup Z',
    avatar: 'CS',
    imageUrl: 'https://i.pravatar.cc/150?img=8',
    texto:
      'O aplicativo que eles desenvolveram para nós se tornou o principal canal de engajamento com nossos clientes. Uma parceria estratégica que gerou resultados reais.',
  },
];

export function InnovationLab() {
  return (
    <section id='lab' className='w-full py-16 md:py-24 bg-secondary'>
      <div className='container mx-auto px-4'>
        {/* Título da Seção */}
        <div className='text-center mb-16'>
          <h2 className='font-title text-3xl md:text-4xl font-bold'>
            Nosso Laboratório de Inovação
          </h2>
          <p className='max-w-3xl mx-auto mt-4 text-lg text-muted-foreground'>
            Não apenas criamos software, nós o validamos em operações reais.
            Veja algumas de nossas soluções em ação e os blocos de engenharia
            que as constroem.
          </p>
        </div>

        {/* 1. Carrossel de Features */}
        <div className='mb-20 rounded-lg overflow-hidden border'>
          <HeroCarousel slides={featureSlides} />
        </div>

        {/* 2. Cards de Tecnologia */}
        <div className='mb-20'>
          <h3 className='font-title text-2xl md:text-3xl font-bold text-center mb-12'>
            Peças da Nossa Engenharia
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {techProducts.map(tech => (
              <ProductCard
                key={tech.nome}
                produto={tech}
                buttonText='Saber Mais'
                isTechCard // Adicionamos uma prop para estilização condicional
              />
            ))}
          </div>
        </div>

        {/* 3. Depoimentos de Parceiros */}
        <div>
          <h3 className='font-title text-2xl md:text-3xl font-bold text-center mb-12'>
            O Que Nossos Parceiros Dizem
          </h3>
          <TestimonialCarousel testimonials={partnerTestimonials} />
        </div>
      </div>
    </section>
  );
}
