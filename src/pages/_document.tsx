import { Html, Head, Main, NextScript } from 'next/document';
import SchemaLocalBusiness from '@/components/SchemaLocalBusiness';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <SchemaLocalBusiness />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
