import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Product = {
  nome: string;
  preco: string;
  imagemUrl: string | null;
};

interface ProductCardProps {
  produto: Product;
}

export function ProductCard({ produto }: ProductCardProps) {
  return (
    <Card className='overflow-hidden flex flex-col group border hover:border-primary/50 transition-all'>
      <CardHeader className='p-0'>
        {/* A MUDANÇA ESTÁ AQUI: removemos o "bg-secondary" */}
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
        <p className='text-xl font-bold text-primary'>{produto.preco}</p>
        <Button className='w-full mt-4'>Comprar</Button>
      </CardFooter>
    </Card>
  );
}
