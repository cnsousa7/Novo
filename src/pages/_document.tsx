import { Html, Head, Main, NextScript } from 'next/document';
import SchemaLocalBusiness from '@/components/SchemaLocalBusiness';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <SchemaLocalBusiness />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('Cnsousatec-theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
