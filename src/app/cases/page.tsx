import { Header } from '@/components/shared/Header';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const beneficiosProvedor = [
  'Gestão unificada de serviços (internet, TV, telefonia, streaming)',
  'Recarga de celular e serviços de valor agregado (SVAs)',
  'Assinatura digital de contratos com validade jurídica',
  'Autoatendimento técnico (reinício de modem, troca de senha)',
  'Comunicação proativa com notificações push',
  'Aumento da eficiência, engajamento e lucro',
];

export default function CasesPage() {
  return (
    <div className='flex flex-col min-h-screen bg-background text-foreground'>
      <Header />
      <main className='flex-grow container mx-auto px-4 py-16'>
        {/* TÍTULO E DESCRIÇÃO ATUALIZADOS */}
        <div className='text-center mb-16'>
          <h1 className='font-title text-4xl md:text-5xl font-extrabold tracking-tight'>
            Cases de Sucesso e Aplicações Reais
          </h1>
          <p className='max-w-3xl mx-auto mt-4 text-lg text-muted-foreground'>
            Veja como nossas soluções de software sob medida geram resultados
            tangíveis para negócios de grande escala em diferentes setores.
          </p>
        </div>

        <section className='bg-secondary rounded-lg p-8 md:p-12'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <span className='text-primary font-bold'>CASE EM DESTAQUE</span>
              <h2 className='font-title text-3xl md:text-4xl font-bold mt-2 mb-4'>
                APP para Provedores de Internet
              </h2>
              <p className='text-muted-foreground mb-6'>
                Criamos um aplicativo robusto que unifica todos os serviços em
                um único ponto de contato, dando autonomia total ao cliente e
                liberando sua equipe para focar no crescimento do negócio.
              </p>
              <ul className='space-y-3'>
                {beneficiosProvedor.map(text => (
                  <li key={text} className='flex items-center gap-3'>
                    <CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
                    <span className='text-md'>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex items-center justify-center rounded-lg overflow-hidden'>
              {/*<img
                src='/banners/desenvolvimento02.jpg'
                alt='Dashboard de gestão em um tablet'
                className='rounded-lg'
              />*/}
              <Image
                src='/banners/desenvolvimento02.jpg'
                alt='Dashboard de gestão em um tablet'
                width={800} // Defina a largura real da imagem
                height={600} // Defina a altura real da imagem
                className='rounded-lg'
              />
            </div>
          </div>
        </section>

        <section className='text-center py-20'>
          <h3 className='font-title text-3xl font-bold'>
            Sua empresa pode ser o próximo case de sucesso.
          </h3>
          <p className='text-muted-foreground mt-2 mb-6 max-w-xl mx-auto'>
            Agende uma conversa com nossos consultores e descubra como nossas
            soluções de software podem transformar seu negócio.
          </p>
          <Button size='lg'>Discutir meu Projeto</Button>
        </section>
      </main>
    </div>
  );
}
