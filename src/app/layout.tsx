import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import '../styles/globals.css';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fontTitle = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-title',
});

export const metadata: Metadata = {
  title: 'Ipromovetech - Engenharia de Software que Escala Seus Resultados',
  description:
    'Criamos sistemas, aplicativos e plataformas sob medida para organizações ambiciosas, capazes de crescer em escala e complexidade, validados em nossas próprias operações.',
  openGraph: {
    title: 'Ipromovetech - Engenharia de Software que Escala Seus Resultados',
    description:
      'Soluções de software sob medida, automação com Mautic e atendimento com Chatwoot para empresas que buscam escalar com inteligência.',
    url: 'https://ipromovetech.com.br',
    siteName: 'Ipromovetech',
    locale: 'pt_BR',
    type: 'website',
  },
  // FAVICON CONFIGURADO AQUI
  icons: {
    icon: '/icon ipromove-tech.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontTitle.variable,
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <footer className='bg-card border-t bg-secondary'>
            <div className='container mx-auto py-8 px-4 text-center text-sm text-muted-foreground'>
              {/*<a
                href='/'
                className='font-title text-xl font-bold text-foreground mb-4 inline-block'
              >
                Ipromove<span className='text-primary'>tech</span>
              </a>*/}

              {/*<div className='flex justify-center gap-4 mb-4'>
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className='hover:text-primary'
                  >
                    {link.label}
                  </a>
                ))}
              </div>*/}
              <p>
                © {new Date().getFullYear()} Ipromovetech. Todos os direitos
                reservados.
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
