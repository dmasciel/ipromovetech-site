'use client';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { Ruler } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';
import { MeasurementSlider } from './MeasurementSlider';

interface VirtualFitterProps {
  onSizeRecommended: (size: string) => void;
}

export function VirtualFitter({ onSizeRecommended }: VirtualFitterProps) {
  const [open, setOpen] = React.useState(false);
  const [api, setApi] = React.useState<CarouselApi>();
  const [currentStep, setCurrentStep] = React.useState(0);
  const totalSteps = 4;

  const [bust, setBust] = React.useState(50);
  const [waist, setWaist] = React.useState(50);
  const [hip, setHip] = React.useState(50);
  const [recommendedSize, setRecommendedSize] = React.useState('M');

  React.useEffect(() => {
    if (!api) return;
    setCurrentStep(api.selectedScrollSnap());
    api.on('select', () => setCurrentStep(api.selectedScrollSnap()));
  }, [api]);

  const handleNext = () => api?.scrollNext();
  const handlePrev = () => api?.scrollPrev();

  const handleCalculate = () => {
    setRecommendedSize('M');
    handleNext();
  };

  const handleConfirm = () => {
    onSizeRecommended(recommendedSize);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'>
          <Ruler className='h-4 w-4' />
          Provador Virtual | Tabela de Medidas
        </button>
      </DialogTrigger>
      <DialogContent className='max-w-4xl p-0 flex flex-col h-[90vh] md:h-[550px] border bg-card text-card-foreground'>
        <Carousel setApi={setApi} className='w-full flex-1'>
          <CarouselContent className='h-full'>
            {/* <<< A CORREÇÃO ESTÁ AQUI: overflow-y-auto e justify-start em todos os CarouselItem >>> */}
            <CarouselItem className='flex flex-col justify-start items-center p-8 pt-12 overflow-y-auto'>
              <DialogHeader className='mb-4'>
                <DialogTitle className='text-2xl font-bold'>
                  Bem-vindo ao provador virtual
                </DialogTitle>
              </DialogHeader>
              <p className='text-muted-foreground mb-6'>
                Preencha os dados para experimentar este produto.
              </p>
              <RadioGroup
                defaultValue='feminino'
                className='flex justify-center gap-4 mb-8'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='feminino' id='r-fem' />
                  <Label htmlFor='r-fem'>Feminino</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='masculino' id='r-mas' />
                  <Label htmlFor='r-mas'>Masculino</Label>
                </div>
              </RadioGroup>
            </CarouselItem>

            <CarouselItem className='flex flex-col justify-start items-center p-8 pt-12 overflow-y-auto'>
              <div className='grid md:grid-cols-2 gap-8 w-full'>
                <div className='relative aspect-square bg-secondary rounded-lg overflow-hidden'>
                  <Image
                    src='https://acdn-us.mitiendanube.com/stores/005/555/877/products/whatsapp-image-2025-05-26-at-11-03-51-1d4d95fa627de08d6017489742305057-1024-1024.jpeg'
                    alt='Modelo'
                    fill
                    className='object-contain p-4'
                  />
                </div>
                <div className='flex flex-col justify-center gap-4'>
                  <h3 className='font-bold text-lg'>Suas Medidas</h3>
                  <div className='space-y-1'>
                    <Label htmlFor='altura'>Altura (cm)</Label>
                    <Input id='altura' placeholder='Ex: 170' />
                  </div>
                  <div className='space-y-1'>
                    <Label htmlFor='peso'>Peso (kg)</Label>
                    <Input id='peso' placeholder='Ex: 65' />
                  </div>
                  <div className='space-y-1'>
                    <Label htmlFor='idade'>Idade</Label>
                    <Input id='idade' placeholder='Ex: 25' />
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className='flex flex-col justify-start items-center p-8 pt-12 overflow-y-auto'>
              <div className='grid md:grid-cols-2 gap-8 w-full'>
                <div className='relative'>
                  <Image
                    src='/body-shape-placeholder.png'
                    alt='Formato do corpo'
                    width={400}
                    height={400}
                    className='object-contain mx-auto'
                  />
                </div>
                <div className='flex flex-col justify-center gap-6'>
                  <div>
                    <h3 className='font-bold text-lg'>
                      Ajuste o formato do corpo
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      Este é o formato aproximado que geramos. Ajuste somente se
                      for necessário.
                    </p>
                  </div>
                  <MeasurementSlider
                    label='Busto'
                    value={bust}
                    onValueChange={setBust}
                  />
                  <MeasurementSlider
                    label='Cintura'
                    value={waist}
                    onValueChange={setWaist}
                  />
                  <MeasurementSlider
                    label='Quadril'
                    value={hip}
                    onValueChange={setHip}
                  />
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className='flex flex-col justify-start items-center p-8 pt-12 overflow-y-auto'>
              <DialogHeader className='mb-4'>
                <DialogTitle className='text-2xl font-bold'>
                  Tamanho Recomendado
                </DialogTitle>
              </DialogHeader>
              <div className='bg-muted p-8 rounded-lg'>
                <p className='text-lg'>
                  Com base nas suas medidas, recomendamos o tamanho:
                </p>
                <p className='text-8xl font-bold text-primary my-4'>
                  {recommendedSize}
                </p>
              </div>
              <p className='text-muted-foreground mt-4'>
                Você pode confirmar esta seleção ou escolher outro tamanho na
                página.
              </p>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        {/* Barra de Navegação */}
        <div className='flex items-center justify-between p-4 border-t'>
          <div className='flex gap-2'>
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  'h-2 w-2 rounded-full',
                  i === currentStep ? 'bg-primary' : 'bg-muted-foreground',
                )}
              ></div>
            ))}
          </div>
          <div className='flex gap-2'>
            <Button
              variant='outline'
              onClick={handlePrev}
              disabled={currentStep === 0}
            >
              Voltar
            </Button>
            {currentStep < 2 && <Button onClick={handleNext}>Próximo</Button>}
            {currentStep === 2 && (
              <Button onClick={handleCalculate}>Ver Recomendação</Button>
            )}
            {currentStep === 3 && (
              <Button onClick={handleConfirm}>Confirmar e Fechar</Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
