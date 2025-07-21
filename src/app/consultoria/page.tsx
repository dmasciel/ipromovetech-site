import { FloatingCTA } from '@/components/shared/FloatingCTA';
import { Header } from '@/components/shared/Header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Eye,
  Hand,
  Milestone,
  PartyPopper,
  Smile,
  Sparkles,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image'; // Usando o componente otimizado

// Aplicando a dica de SEO Técnico Avançado
export const metadata: Metadata = {
  title: 'Ideias Inovadoras | Ipromove',
  description:
    'Página de demonstração com novas ideias de design e conversão para a Ipromove.',
  other: {
    // Adicionando o Schema Markup
    'schema:Organization': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Ipromove',
      mission: 'Criar roupas que resgatem o senso de identidade e esperança.',
      foundingDate: '2008',
    }),
  },
};

// Dados para a página de demonstração
const produtoDestaque = {
  nome: 'Camiseta "Transformação" com Versículo',
  preco: 'R$ 92,50',
  imagemUrl: '/images/camiseta-maranata.png', // Reutilizando uma imagem existente
  versiculo: '2 Coríntios 5:17',
};

export default function ConsultoriaPage() {
  return (
    <>
      {/* 1. DICA: Barra de Oferta Fixa */}
      <div className='bg-primary text-primary-foreground text-center text-sm py-2 font-semibold'>
        ✨ Frete Grátis + Ebook 'Versículos para Vestir' na sua Primeira Compra!
      </div>

      <div className='flex flex-col min-h-screen bg-background text-foreground'>
        <Header />

        <main className='flex-grow container mx-auto px-4 py-16'>
          <div className='text-center mb-16'>
            <h1 className='font-title text-4xl md:text-5xl font-extrabold tracking-tight'>
              Vestindo Transformação
            </h1>
            <p className='max-w-2xl mx-auto mt-4 text-lg text-muted-foreground'>
              Uma demonstração de novas ideias para conectar identidade e
              esperança.
            </p>
          </div>

          {/* 2. DICA: Banner de Diferenciais Tácteis */}
          <section className='mb-20'>
            <h2 className='text-3xl font-bold text-center mb-8 font-title'>
              A Experiência Ipromove
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <Card className='p-6 flex flex-col items-center text-center hover:bg-muted transition-colors'>
                <Smile className='h-10 w-10 text-primary mb-4' />
                <h3 className='font-bold text-lg'>Perfume Inconfundível</h3>
                <p className='text-muted-foreground text-sm'>
                  Cada peça chega com um aroma que marca.
                </p>
              </Card>
              <Card className='p-6 flex flex-col items-center text-center hover:bg-muted transition-colors'>
                <Hand className='h-10 w-10 text-primary mb-4' />
                <h3 className='font-bold text-lg'>Texturas Premium</h3>
                <p className='text-muted-foreground text-sm'>
                  Sinta a qualidade do algodão em cada toque.
                </p>
              </Card>
              <Card className='p-6 flex flex-col items-center text-center hover:bg-muted transition-colors'>
                <Eye className='h-10 w-10 text-primary mb-4' />
                <h3 className='font-bold text-lg'>Designs que Falam</h3>
                <p className='text-muted-foreground text-sm'>
                  Estampas que contam histórias de fé.
                </p>
              </Card>
            </div>
          </section>

          {/* 3. DICA: Card de Produto com Hover e Next/Image */}
          <section className='mb-20'>
            <h2 className='text-3xl font-bold text-center mb-8 font-title'>
              Produto com Microinteração
            </h2>
            <div className='max-w-sm mx-auto group'>
              <Card className='overflow-hidden flex flex-col border transition-all'>
                <CardHeader className='p-0 relative'>
                  <div className='aspect-square w-full flex items-center justify-center overflow-hidden p-4'>
                    {/* USANDO O COMPONENTE <Image /> OTIMIZADO */}
                    <Image
                      src={produtoDestaque.imagemUrl}
                      alt={produtoDestaque.nome}
                      width={600}
                      height={600}
                      priority // Imagem importante, carregar primeiro
                      className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                  {/* REVELA O VERSÍCULO NO HOVER */}
                  <div className='absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <p className='text-white text-2xl font-title drop-shadow-lg'>
                      {produtoDestaque.versiculo}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className='p-4 flex-grow'>
                  <h3 className='text-base font-semibold leading-tight'>
                    {produtoDestaque.nome}
                  </h3>
                </CardContent>
                <CardFooter className='p-4 flex flex-col items-start pt-0'>
                  <p className='text-xl font-bold text-primary'>
                    {produtoDestaque.preco}
                  </p>
                  <Button className='w-full mt-4'>Adicionar ao Carrinho</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* 4. DICA: Timeline "Nossa Jornada" */}
          <section>
            <h2 className='text-3xl font-bold text-center mb-12 font-title'>
              Nossa Jornada
            </h2>
            <div className='relative max-w-2xl mx-auto'>
              {/* Linha vertical da timeline */}
              <div className='absolute left-4 top-0 h-full w-0.5 bg-border -z-10'></div>
              <div className='space-y-12'>
                <div className='flex items-start gap-4'>
                  <div className='bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center'>
                    <PartyPopper size={16} />
                  </div>
                  <div>
                    <h3 className='font-bold'>2008: A Semente</h3>
                    <p className='text-muted-foreground text-sm'>
                      Nasce a Ipromove, com a missão de vestir jovens com
                      identidade e propósito.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center'>
                    <Milestone size={16} />
                  </div>
                  <div>
                    <h3 className='font-bold'>2015: Primeiro Projeto IASD</h3>
                    <p className='text-muted-foreground text-sm'>
                      Parceria marcante que solidificou nosso compromisso com a
                      comunidade adventista.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center'>
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h3 className='font-bold'>
                      Hoje: Reconhecimento Continental
                    </h3>
                    <p className='text-muted-foreground text-sm'>
                      Presentes em toda a América do Sul, continuando a jornada
                      de fé e transformação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* 5. DICA: CTA Flutuante */}
        <FloatingCTA />
      </div>
    </>
  );
}
