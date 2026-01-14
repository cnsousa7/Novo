import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { initGA, logPageView } from '@/lib/analytics';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initGA();
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      logPageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Evitar erros de hidratação garantindo que o tema só seja aplicado após a montagem
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <ThemeProvider 
      attribute="data-theme" 
      defaultTheme="light" 
      enableSystem={true}
      storageKey="Cnsousatec-theme"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
