'use client';

import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface HeroCarouselProps {
  images: string[];
}

export function HeroCarousel({ images }: HeroCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className='relative h-[60vh] md:h-[80vh] w-full'>
              <div className='absolute inset-0 bg-black/60 z-10' />
              <img
                src={src}
                alt={`Banner principal ${index + 1}`}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4'>
                <h1 className='font-title text-4xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg'>
                  Estilo que Veste a Alma
                </h1>
                <p className='max-w-2xl mx-auto mt-4 text-lg md:text-xl text-neutral-200 drop-shadow-md'>
                  Peças que expressam sua fé com design moderno e propósito
                  eterno.
                </p>
                <Button size='lg' className='mt-8 font-bold text-lg px-8 py-6'>
                  Explorar Coleção
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute left-4 z-30 hidden md:inline-flex' />
      <CarouselNext className='absolute right-4 z-30 hidden md:inline-flex' />
    </Carousel>
  );
}
