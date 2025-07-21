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
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
