import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Dados dos depoimentos com a foto do Carlos Souza alterada
const depoimentos = [
  {
    nome: 'Ana Silva',
    avatar: 'AS',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
    texto:
      'Amei minha camiseta! A qualidade do tecido é incrível e a estampa é ainda mais linda pessoalmente. Virou minha preferida!',
  },
  {
    nome: 'Carlos Souza',
    avatar: 'CS',
    imageUrl: 'https://i.pravatar.cc/150?img=11',
    texto:
      'Comprarei novamente, com certeza. Entrega super rápida e o moletom é muito confortável. A mensagem é o que mais me tocou.',
  }, // FOTO ALTERADA AQUI
  {
    nome: 'Mariana Costa',
    avatar: 'MC',
    imageUrl: 'https://i.pravatar.cc/150?img=5',
    texto:
      'Finalmente encontrei uma marca que une estilo e fé de um jeito moderno. Já estou de olho nos próximos lançamentos!',
  },
  {
    nome: 'Lucas Pereira',
    avatar: 'LP',
    imageUrl: 'https://i.pravatar.cc/150?img=8',
    texto:
      'Qualidade de primeira. Dá pra ver que é feito com carinho. Recomendo pra todo mundo que quer se vestir bem e com propósito.',
  },
];

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{ align: 'start', loop: true }}
      className='w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto'
    >
      <CarouselContent>
        {depoimentos.map((depoimento, index) => (
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
