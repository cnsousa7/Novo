export default function SchemaLocalBusiness() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.cnsousatec.com.br',
    name: 'Cnsousatec - Manutenção Elétrica, Eletrônica e Hidráulica',
    alternateName: 'CNSOUSATEC',
    description: 'Serviços especializados de manutenção elétrica, eletrônica e hidráulica 24h em Brasília e todo o Distrito Federal. Atendimento rápido para empresas e residências.',
    url: 'https://www.cnsousatec.com.br',
    telephone: '+5561992743428',
    email: 'Cnsousatec@gmail.com',
    logo: 'https://www.cnsousatec.com.br/logo-clean.png',
    image: 'https://www.cnsousatec.com.br/logo-clean.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brasília',
      addressRegion: 'DF',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -15.7939,
      longitude: -47.8828,
    },
    areaServed: [
      { '@type': 'City', name: 'Brasília' },
      { '@type': 'City', name: 'Taguatinga' },
      { '@type': 'City', name: 'Ceilândia' },
      { '@type': 'City', name: 'Samambaia' },
      { '@type': 'City', name: 'Águas Claras' },
      { '@type': 'City', name: 'Guará' },
      { '@type': 'City', name: 'Sobradinho' },
      { '@type': 'City', name: 'Planaltina' },
      { '@type': 'City', name: 'Gama' },
      { '@type': 'City', name: 'Vicente Pires' },
      { '@type': 'City', name: 'Sudoeste' },
      { '@type': 'City', name: 'Asa Norte' },
      { '@type': 'City', name: 'Asa Sul' }
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+5561992743428',
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: 'Portuguese'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Manutenção Profissional',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manutenção Elétrica 24h',
            description: 'Instalações elétricas, reparos de curto-circuito, manutenção de quadros e fiação em Brasília.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manutenção Eletrônica Especializada',
            description: 'Reparo de placas, sistemas de automação e equipamentos eletrônicos industriais e comerciais.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manutenção Hidráulica e Caça Vazamentos',
            description: 'Reparo de vazamentos, instalações hidráulicas, limpeza de caixas d\'água e manutenção predial.',
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
