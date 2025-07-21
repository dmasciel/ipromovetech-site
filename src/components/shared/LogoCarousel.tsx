// src/components/shared/LogoCarousel.tsx

'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const logoData = [
  { src: '/cases/case - acim logo - branco.png', alt: 'ACIM Logo' },
  { src: '/cases/case - line - branco.png', alt: 'Line Logo' },
  { src: '/cases/case - nd nucleo-branco.png', alt: 'ND Núcleo Logo' },
  { src: '/cases/case - sicredi-branco.png', alt: 'Sicredi Logo' },
  // Adicionamos os logos novamente para um loop visual mais suave
  { src: '/cases/case - acim logo - branco.png', alt: 'ACIM Logo' },
  { src: '/cases/case - line - branco.png', alt: 'Line Logo' },
  { src: '/cases/case - nd nucleo-branco.png', alt: 'ND Núcleo Logo' },
  { src: '/cases/case - sicredi-branco.png', alt: 'Sicredi Logo' },
];

export function LogoCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[plugin.current]}
      className='w-full'
    >
      <CarouselContent>
        {logoData.map((logo, index) => (
          <CarouselItem
            key={index}
            className='basis-1/2 sm:basis-1/3 lg:basis-1/5' // Aumentamos o número de logos visíveis
          >
            {/* 
              MUDANÇA PRINCIPAL:
              1. A div externa ainda centraliza tudo.
              2. A div interna (o 'relative') cria a "caixa" onde a imagem vai preencher.
                 - w-40: define a largura máxima.
                 - h-16: define a altura máxima.
            */}
            <div className='flex h-24 items-center justify-center p-4'>
              <div className='relative h-16 w-40'>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill // <-- A MÁGICA ACONTECE AQUI: A imagem preenche o container pai
                  className='object-contain transition-all duration-300 grayscale hover:grayscale-0 opacity-60 hover:opacity-100'
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
