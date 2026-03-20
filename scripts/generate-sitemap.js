const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.cnsousatec.com.br';

// Função para extrair localidades do arquivo localidades.ts sem precisar de transpilador TS
function getLocalidadesFromTS() {
  const tsPath = path.join(__dirname, '../src/lib/localidades.ts');
  const content = fs.readFileSync(tsPath, 'utf8');
  
  // Regex para encontrar os slugs dentro do array de objetos
  const slugRegex = /slug:\s*'([^']+)'/g;
  const slugs = [];
  let match;
  
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  
  return slugs;
}

// Localidades e serviços
const servicos = ['manutencao-eletrica', 'manutencao-eletronica', 'manutencao-hidraulica'];
const localidades = getLocalidadesFromTS();

if (localidades.length === 0) {
  console.error('❌ Erro: Nenhuma localidade encontrada no arquivo localidades.ts');
  process.exit(1);
}

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
console.log(`📍 Total de localidades processadas: ${localidades.length}`);
