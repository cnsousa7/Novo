import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initGA, logPageView } from '@/lib/analytics';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
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

  return (
    <ThemeProvider 
      attribute="data-theme" 
      defaultTheme="light" 
      enableSystem={false}
      storageKey="cnsousatec-theme"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
