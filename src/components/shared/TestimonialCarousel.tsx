// src/components/shared/TestimonialCarousel.tsx

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Definindo a estrutura de um depoimento
interface Testimonial {
  nome: string;
  avatar: string;
  imageUrl: string;
  texto: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      className='w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto'
    >
      <CarouselContent>
        {testimonials.map((depoimento, index) => (
          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
            <div className='p-1'>
              <Card>
                <CardContent className='flex flex-col items-center text-center p-6 gap-4 min-h-[250px]'>
                  <Avatar className='h-16 w-16'>
                    <AvatarImage
                      src={depoimento.imageUrl}
                      alt={`Foto de ${depoimento.nome}`}
                    />
                    <AvatarFallback>{depoimento.avatar}</AvatarFallback>
                  </Avatar>
                  <p className='text-sm text-muted-foreground italic flex-grow'>
                    "{depoimento.texto}"
                  </p>
                  <span className='font-semibold text-sm'>
                    {depoimento.nome}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden sm:inline-flex' />
      <CarouselNext className='hidden sm:inline-flex' />
    </Carousel>
  );
}
