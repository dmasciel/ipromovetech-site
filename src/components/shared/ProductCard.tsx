// src/components/shared/ProductCard.tsx

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// A estrutura de dados que o card espera receber
type Product = {
  nome: string;
  preco: string; // Este campo será usado tanto para preço quanto para descrição/tags
  imagemUrl: string | null;
};

// As propriedades que o componente aceita
interface ProductCardProps {
  produto: Product;
  buttonText?: string;
  isCaseStudy?: boolean; // Propriedade para diferenciar o estilo
}

export function ProductCard({
  produto,
  buttonText = 'Ver Detalhes', // Valor padrão para o botão
  isCaseStudy = false,
}: ProductCardProps) {
  return (
    <Card className='overflow-hidden flex flex-col group border bg-card hover:border-primary/50 transition-all'>
      <CardHeader className='p-0'>
        <div className='aspect-square w-full flex items-center justify-center overflow-hidden p-4'>
          {produto.imagemUrl && (
            <img
              src={produto.imagemUrl}
              alt={produto.nome}
              className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-300'
            />
          )}
        </div>
      </CardHeader>
      <CardContent className='p-4 flex-grow'>
        <CardTitle className='text-base font-semibold leading-tight'>
          {produto.nome}
        </CardTitle>
      </CardContent>
      <CardFooter className='p-4 flex flex-col items-start pt-0'>
        {/* Renderiza condicionalmente o texto. Se for um Case Study, usa um estilo de descrição. */}
        {isCaseStudy ? (
          <p className='text-sm text-muted-foreground mb-1 min-h-[40px]'>
            {produto.preco}
          </p>
        ) : (
          // Se não for, mantém o estilo de preço (caso você use o card para outra coisa no futuro)
          <p className='text-xl font-bold text-primary'>{produto.preco}</p>
        )}

        {/* O botão agora usa o texto passado pela prop `buttonText` */}
        <Button className='w-full mt-4'>{buttonText}</Button>
      </CardFooter>
    </Card>
  );
}
