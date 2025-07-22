// src/components/shared/ProductCard.tsx

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils'; // Importar a utilidade cn é uma boa prática
import Image from 'next/image';

// A estrutura de dados (type Product) e as props (interface ProductCardProps)
// permanecem exatamente as mesmas.
type Product = {
  nome: string;
  preco: string;
  imagemUrl: string | null;
};

interface ProductCardProps {
  produto: Product;
  buttonText?: string;
  isCaseStudy?: boolean;
}

export function ProductCard({
  produto,
  buttonText = 'Ver Detalhes',
  isCaseStudy = false,
}: ProductCardProps) {
  return (
    // ✅ 1. Efeito de elevação e transição no Card
    <Card
      className={cn(
        'flex flex-col overflow-hidden bg-card', // Estrutura base
        'transition-all duration-300 ease-in-out', // Animação suave
        'hover:shadow-xl hover:-translate-y-2 group', // Efeito de elevação e "group" para o hover da imagem
      )}
    >
      <CardHeader className='p-0 border-b'>
        {/* ✅ 2. Proporção e estilo da imagem */}
        <div className='relative aspect-[4/3] w-full overflow-hidden'>
          {produto.imagemUrl && (
            <Image
              src={produto.imagemUrl}
              alt={produto.nome}
              fill
              sizes='(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw'
              className='object-cover transition-transform duration-300 group-hover:scale-105'
            />
          )}
        </div>
      </CardHeader>

      {/* ✅ 3. Mais espaçamento e tipografia */}
      <CardContent className='p-6 flex-grow'>
        <CardTitle className='text-lg font-bold leading-tight font-title'>
          {produto.nome}
        </CardTitle>
      </CardContent>

      <CardFooter className='p-6 pt-0 mt-auto'>
        <div className='w-full'>
          {isCaseStudy ? (
            <p className='text-sm text-muted-foreground mb-4 min-h-[40px]'>
              {produto.preco}
            </p>
          ) : (
            <p className='text-xl font-bold text-primary mb-4'>
              {produto.preco}
            </p>
          )}

          {/* ✅ 4. Botão com estilo mais sutil */}
          <Button variant='secondary' className='w-full font-semibold'>
            {buttonText}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
