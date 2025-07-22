'use client';

import Logo from '@/../public/logo ipromove - tech.svg';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/config/site';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60'>
      {/* Container Principal */}
      <div className='container mx-auto h-20 flex items-center justify-between px-4'>
        {/* Logo */}
        <a href='/' onClick={handleLinkClick}>
          <div className='flex items-center justify-center w-auto h-12'>
            <Logo className='h-full w-auto text-foreground dark:text-white' />
          </div>
        </a>

        {/* Navegação para Desktop */}
        <nav className='hidden md:flex gap-6 text-sm font-medium items-center'>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className='hover:text-primary transition-colors'
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Ações (Direita) */}
        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <Button className='hidden sm:inline-flex'>
            Fale com um especialista
          </Button>

          {/* Botão de Menu Mobile */}
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? (
              <X className='h-5 w-5' />
            ) : (
              <Menu className='h-5 w-5' />
            )}
          </Button>
        </div>
      </div>

      {/* Painel do Menu Mobile (renderizado condicionalmente) */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-card border-t'>
          <nav className='flex flex-col items-center gap-4 p-4'>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className='text-lg hover:text-primary transition-colors'
                onClick={handleLinkClick} // Fecha o menu ao clicar
              >
                {link.label}
              </a>
            ))}
            <Button className='w-full mt-2' onClick={handleLinkClick}>
              Fale com um especialista
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
