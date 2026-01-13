export default function SchemaLocalBusiness() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.Cnsousatec.com.br',
    name: 'CN Sousa TEC',
    description: 'Especialistas em manutenção elétrica, eletrônica e hidráulica no Distrito Federal',
    url: 'https://www.Cnsousatec.com.br',
    telephone: '+55-61-99999-9999',
    email: 'contato@Cnsousatec.com.br',
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
      {
        '@type': 'City',
        name: 'Brasília',
      },
      {
        '@type': 'City',
        name: 'Taguatinga',
      },
      {
        '@type': 'City',
        name: 'Ceilândia',
      },
      {
        '@type': 'City',
        name: 'Samambaia',
      },
      {
        '@type': 'City',
        name: 'Águas Claras',
      },
      {
        '@type': 'City',
        name: 'Guará',
      },
      {
        '@type': 'City',
        name: 'Sobradinho',
      },
      {
        '@type': 'City',
        name: 'Planaltina',
      },
      {
        '@type': 'City',
        name: 'Gama',
      },
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/Cnsousatec',
      'https://www.instagram.com/Cnsousatec',
      'https://www.linkedin.com/company/Cnsousatec',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Manutenção',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manutenção Elétrica',
            description: 'Instalações, reparos e manutenção preventiva em sistemas elétricos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manutenção Eletrônica',
            description: 'Reparo e manutenção de equipamentos eletrônicos e sistemas de automação',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manutenção Hidráulica',
            description: 'Serviços completos em sistemas hidráulicos e instalações prediais',
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
