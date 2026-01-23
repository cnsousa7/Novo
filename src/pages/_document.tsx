import { Html, Head, Main, NextScript } from 'next/document';
import SchemaLocalBusiness from '@/components/SchemaLocalBusiness';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Logo for social media */}
        <meta property="og:image" content="/logo-clean.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <SchemaLocalBusiness />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
