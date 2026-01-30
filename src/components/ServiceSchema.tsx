interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  areaServed: string[];
}

export default function ServiceSchema({ name, description, serviceType, areaServed }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': name,
    'description': description,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'CNSOUSATEC ®',
      'image': 'https://www.cnsousatec.com.br/logo-clean.png',
      'telephone': '+5561992743428',
      'url': 'https://www.cnsousatec.com.br'
    },
    'serviceType': serviceType,
    'areaServed': areaServed.map(area => ({
      '@type': 'City',
      'name': area
    })),
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': name,
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': name
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
