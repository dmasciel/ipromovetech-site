import Logo from '@/../public/logo ipromove - tech.svg';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto h-20 flex items-center justify-between px-4'>
        <a href='/'>
          <div className='flex items-center justify-center w-auto h-12'>
            <Logo className='h-full w-auto text-foreground dark:text-white' />
          </div>
        </a>
        {/* NAVEGAÇÃO ATUALIZADA */}
        <nav className='hidden md:flex gap-6 text-sm font-medium items-center'>
          <a href='/cases' className='hover:text-primary transition-colors'>
            Cases
          </a>
          <a href='/mautic' className='hover:text-primary transition-colors'>
            Mautic
          </a>
          <a href='/chatwoot' className='hover:text-primary transition-colors'>
            Chatwoot
          </a>
        </nav>
        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <Button className='hidden sm:inline-flex'>
            Fale com um especialista
          </Button>
          <Button variant='ghost' size='icon' className='md:hidden'>
            <Menu className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </header>
  );
}
