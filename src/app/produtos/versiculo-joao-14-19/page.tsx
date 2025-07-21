'use client';

import { Header } from '@/components/shared/Header';
import { TestimonialCarousel } from '@/components/shared/TestimonialCarousel';
import { VirtualFitter } from '@/components/shared/VirtualFitter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, ShieldCheck, Truck } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';

const product = {
  name: "Camiseta Oversized 'Porque Eu Vivo'",
  price: 'R$ 94,90',
  imageUrl:
    'https://acdn-us.mitiendanube.com/stores/005/555/877/products/whatsapp-image-2025-05-26-at-11-03-52-59d080c5e1bc2876c517489742360225-1024-1024.jpeg',
  bannerUrl:
    'https://acdn-us.mitiendanube.com/stores/005/555/877/themes/brasilia/1-slide-1747061730514-1150698258-d5d7b6ab85db78da4b6b69f1f80675021747061732-1920-1920.jpg?702911620',
  description:
    "Essa camiseta foi desenvolvida com a Duda Brandino para ilustrar o versículo de João 14:19 - 'Ainda um pouco, e o mundo não me verá mais; porém, vós me vereis; porque eu vivo, e vós vivereis.'\n\nEsse versículo nos lembra de uma das verdades que nos guiam, que o Senhor vive na vida eterna e sempre estará presente nos nossos caminhos.",
  features: [
    'Modelagem Oversized',
    'Confeccionada em malha cheirosa: 100% algodão',
    'Estampa a base d’água',
  ],
  sizes: ['PETIT', 'PP', 'P', 'M', 'G', 'GG', 'EG', '3G', '4G'],
};

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = React.useState<string | null>('M');
  const [quantity, setQuantity] = React.useState(1);
  const [recommendedSize, setRecommendedSize] = React.useState<string | null>(
    null,
  );

  const handleRecommendation = (size: string) => {
    setRecommendedSize(size);
    setSelectedSize(size);
  };

  return (
    <div className='flex flex-col min-h-screen bg-background text-foreground'>
      <Header />

      <main className='container mx-auto px-4 py-8 md:py-16'>
        <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
          {/* Coluna da Esquerda: Imagem */}
          <div className='bg-card p-4 rounded-lg border'>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={1024}
              height={1024}
              className='w-full h-full object-contain rounded-md'
              priority
            />
          </div>

          {/* Coluna da Direita: Informações */}
          <div className='flex flex-col gap-6'>
            <div className='space-y-2'>
              <h1 className='font-title text-3xl md:text-4xl font-bold'>
                {product.name}
              </h1>
              <p className='text-3xl font-bold text-primary'>{product.price}</p>
              <p className='text-muted-foreground text-sm whitespace-pre-wrap'>
                {product.description}
              </p>
              <ul className='list-disc list-inside text-sm text-muted-foreground pt-2'>
                {product.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <Separator />
            <div className='space-y-4'>
              <div>
                <h3 className='text-sm font-semibold mb-2'>
                  Tamanho: <span className='font-bold'>{selectedSize}</span>
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {product.sizes.map(size => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? 'default' : 'outline'}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              {recommendedSize && (
                <p className='text-sm font-semibold text-green-600 dark:text-green-400'>
                  Recomendamos o tamanho {recommendedSize}
                </p>
              )}
              <VirtualFitter onSizeRecommended={handleRecommendation} />
              <div className='flex items-center gap-4'>
                <h3 className='text-sm font-semibold'>Quantidade:</h3>
                <div className='flex items-center border rounded-md'>
                  <Button
                    variant='ghost'
                    size='icon'
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  >
                    <Minus className='h-4 w-4' />
                  </Button>
                  <span className='w-10 text-center font-semibold'>
                    {quantity}
                  </span>
                  <Button
                    variant='ghost'
                    size='icon'
                    onClick={() => setQuantity(q => q + 1)}
                  >
                    <Plus className='h-4 w-4' />
                  </Button>
                </div>
              </div>
            </div>
            <Button
              size='lg'
              className='w-full font-bold text-lg h-12 bg-green-600 hover:bg-green-700 text-white'
            >
              Comprar
            </Button>
            <div className='space-y-4'>
              <div className='flex items-center gap-3 text-sm text-muted-foreground'>
                <ShieldCheck className='h-5 w-5 text-green-600 flex-shrink-0' />
                <span>
                  <span className='font-bold'>Compra protegida.</span> Seus
                  dados cuidados durante toda a compra.
                </span>
              </div>
              <div className='flex items-center gap-3 text-sm text-muted-foreground'>
                <Truck className='h-5 w-5 text-blue-600 flex-shrink-0' />
                <span>
                  <span className='font-bold'>Trocas e devoluções.</span> 1ª
                  troca grátis em até 7 dias.
                </span>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className='font-bold text-lg mb-2'>Cuidados com a Peça</h3>
              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger>
                    ALGODÃO / PIQUET / MOLETOM
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className='list-disc list-inside text-sm space-y-1'>
                      <li>Lavagem manual.</li>
                      <li>Não usar alvejante.</li>
                      <li>Não lavar à seco.</li>
                      <li>
                        Passar a temperatura mínima (não passar na estampa).
                      </li>
                      <li>Secar na sombra para conservar a cor e a estampa.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>SARJA</AccordionTrigger>
                  <AccordionContent>
                    <ul className='list-disc list-inside text-sm space-y-1'>
                      <li>Lavagem manual.</li>
                      <li>Não usar alvejante.</li>
                      <li>Não lavar à seco.</li>
                      <li>Passar a temperatura mínima.</li>
                      <li>Secar na sombra para conservar a cor.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </main>

      <section className='w-full py-16 md:py-24 bg-secondary'>
        <div className='container mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 font-title'>
            Avaliações de Clientes
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* <<< A CORREÇÃO ESTÁ AQUI >>> */}
      <section className='w-full'>
        {/* Removemos o `bg-black` e ajustamos a altura */}
        <div className='relative w-full h-[40vh] md:h-[60vh]'>
          <Image
            src={product.bannerUrl}
            alt='Banner da Coleção Versículos'
            fill
            // Trocamos 'object-contain' por 'object-cover'
            className='object-cover'
          />
        </div>
      </section>
    </div>
  );
}
