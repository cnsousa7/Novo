const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.cnsousatec.com.br';

// Localidades e serviços
const servicos = ['manutencao-eletrica', 'manutencao-eletronica', 'manutencao-hidraulica'];
const localidades = [
  'asa-sul', 'asa-norte', 'sudoeste', 'noroeste', 'lago-sul', 'lago-norte',
  'aguas-claras', 'guara', 'taguatinga', 'vicente-pires',
  'jardim-brasilia', 'mansoes-centro', 'mansoes-odisseia', 'perola',
  'jardim-barragem', 'jardim-querencia', 'jardim-paraiso', 'jardim-america',
  'setor-01', 'setor-02', 'setor-03', 'setor-04', 'setor-05', 'setor-08',
  'santa-lucia', 'parque-da-barragem'
];

// URLs estáticas com prioridade máxima
const staticUrls = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/servicos/manutencao-eletrica', priority: '1.0', changefreq: 'daily' },
  { url: '/servicos/manutencao-eletronica', priority: '1.0', changefreq: 'daily' },
  { url: '/servicos/manutencao-hidraulica', priority: '1.0', changefreq: 'daily' },
];

// Gerar URLs dinâmicas com prioridade alta para indexação rápida
const dynamicUrls = [];
servicos.forEach(servico => {
  localidades.forEach(localidade => {
    dynamicUrls.push({
      url: `/local/${servico}-${localidade}`,
      priority: '0.9',
      changefreq: 'daily'
    });
  });
});

const allUrls = [...staticUrls, ...dynamicUrls];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
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

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap de ALTA PRIORIDADE gerado com sucesso em public/sitemap.xml');
console.log(`📊 Total de URLs otimizadas: ${allUrls.length}`);
