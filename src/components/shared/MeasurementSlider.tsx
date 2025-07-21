'use client';

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Minus, Plus } from 'lucide-react';

interface MeasurementSliderProps {
  label: string;
  value: number;
  onValueChange: (value: number) => void;
}

export function MeasurementSlider({
  label,
  value,
  onValueChange,
}: MeasurementSliderProps) {
  const step = 5; // Ajuste o passo conforme necessário

  return (
    <div className='space-y-2'>
      <div className='text-sm font-medium text-center'>{label}</div>
      <div className='flex items-center gap-2'>
        <Button
          variant='outline'
          size='icon'
          onClick={() => onValueChange(Math.max(0, value - step))}
        >
          <Minus className='h-4 w-4' />
        </Button>
        <Slider
          value={[value]}
          onValueChange={vals => onValueChange(vals[0])}
          max={100}
          step={1}
        />
        <Button
          variant='outline'
          size='icon'
          onClick={() => onValueChange(Math.min(100, value + step))}
        >
          <Plus className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );
}
