'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Aparece após rolar 600 pixels para baixo
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Limpa o evento ao desmontar o componente
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 z-50 transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
    >
      <Button size='lg' className='shadow-lg'>
        Quero Roupas com Propósito
        <ArrowRight className='ml-2 h-4 w-4' />
      </Button>
    </div>
  );
}
