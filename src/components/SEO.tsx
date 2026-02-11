import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = '/logo-clean.png',
  ogType = 'website',
  noindex = false,
}: SEOProps) {
  const siteName = 'Cnsousatec';
  // Título otimizado para CTR: Adiciona "Orçamento Grátis" ou "DF" se não houver
  const optimizedTitle = title.includes('DF') || title.includes('Brasília') 
    ? title 
    : `${title} em Brasília DF | Orçamento Grátis`;
    
  const fullTitle = optimizedTitle.includes(siteName) ? optimizedTitle : `${optimizedTitle} | ${siteName}`;
  const baseUrl = 'https://www.cnsousatec.com.br';
  const canonicalUrl = canonical || baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="eletricista, encanador, desentupidora, tecnico eletronica, conserto de placas, caça vazamentos, brasilia, aguas lindas, df, go, cnsousatec" />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Favicon and Logo for Google Search */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/logo-clean.png" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Phone number for mobile click-to-call optimization */}
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Cnsousatec" />
      <meta name="language" content="pt-BR" />
      <meta name="geo.region" content="BR-DF" />
      <meta name="geo.placename" content="Brasília" />
      <meta name="geo.position" content="-15.7939;-47.8828" />
      <meta name="ICBM" content="-15.7939, -47.8828" />
    </Head>
  );
}
