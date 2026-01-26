const fs = require('fs');
const path = require('path');

// Configuração
const baseUrl = 'https://www.cnsousatec.com.br';

// Localidades e serviços (simplificado - você pode importar do arquivo real)
const servicos = ['manutencao-eletrica', 'manutencao-eletronica', 'manutencao-hidraulica'];
const localidades = [
  'brasilia', 'taguatinga', 'ceilandia', 'samambaia', 'planaltina',
  'aguas-claras', 'gama', 'santa-maria', 'recanto-das-emas', 'sobradinho'
];

// URLs estáticas
const staticUrls = [
  { url: '', priority: '1.0', changefreq: 'weekly' },
  { url: '/servicos/manutencao-eletrica', priority: '0.9', changefreq: 'weekly' },
  { url: '/servicos/manutencao-eletronica', priority: '0.9', changefreq: 'weekly' },
  { url: '/servicos/manutencao-hidraulica', priority: '0.9', changefreq: 'weekly' },
];

// URLs dinâmicas (páginas locais)
const dynamicUrls = [];
for (const servico of servicos) {
  for (const localidade of localidades) {
    dynamicUrls.push({
      url: `/local/${servico}-${localidade}`,
      priority: '0.8',
      changefreq: 'monthly',
    });
  }
}

const allUrls = [...staticUrls, ...dynamicUrls];

// Gerar XML do sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(({ url, priority, changefreq }) => {
    return `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

// Salvar no diretório public
const publicDir = path.join(__dirname, '../public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log('✅ Sitemap estático gerado com sucesso em public/sitemap.xml');
console.log(`📊 Total de URLs: ${allUrls.length}`);
