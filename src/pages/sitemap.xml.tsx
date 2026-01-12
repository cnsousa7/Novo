import { GetServerSideProps } from 'next';

const servicos = [
  'manutencao-eletrica',
  'manutencao-eletronica',
  'manutencao-hidraulica',
];

const cidades = [
  'brasilia',
  'taguatinga',
  'ceilandia',
  'samambaia',
  'aguas-claras',
  'guara',
  'sobradinho',
  'planaltina',
  'gama',
  'santa-maria',
];

function generateSiteMap() {
  const baseUrl = 'https://www.cnsousatec.com.br';
  
  // URLs estáticas
  const staticUrls = [
    { url: '', priority: '1.0' },
    { url: '/servicos/manutencao-eletrica', priority: '0.9' },
    { url: '/servicos/manutencao-eletronica', priority: '0.9' },
    { url: '/servicos/manutencao-hidraulica', priority: '0.9' },
  ];

  // URLs dinâmicas (páginas locais)
  const dynamicUrls = [];
  for (const servico of servicos) {
    for (const cidade of cidades) {
      dynamicUrls.push({
        url: `/local/${servico}-${cidade}`,
        priority: '0.8',
      });
    }
  }

  const allUrls = [...staticUrls, ...dynamicUrls];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(({ url, priority }) => {
    return `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
