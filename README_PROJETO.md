# CN Sousa TEC - Site Institucional

Site institucional da CN Sousa TEC desenvolvido com Next.js, focado em SEO local, geração de leads e alta conversão.

## 🚀 Tecnologias

- **Next.js 16** com Pages Router
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animações)
- **next-themes** (dark mode)
- **react-ga4** (Google Analytics)

## 📋 Funcionalidades Implementadas

### ✅ Estrutura de Serviços (SEO)
- ✅ Página de Manutenção Elétrica (600+ palavras)
- ✅ Página de Manutenção Eletrônica (600+ palavras)
- ✅ Página de Manutenção Hidráulica (600+ palavras)
- ✅ Conteúdo otimizado para SEO com H1, H2, H3
- ✅ CTAs visíveis em todas as páginas

### ✅ Header e Menu
- ✅ Menu responsivo com submenu de serviços
- ✅ Links indexáveis (sem JavaScript client-only)
- ✅ Botão de dark mode integrado
- ✅ CTA de orçamento no header

### ✅ Páginas Locais - Regiões do DF
- ✅ Rota dinâmica `/local/[servico]-[cidade]`
- ✅ 30 páginas geradas estaticamente (3 serviços × 10 cidades)
- ✅ Title, description e conteúdo dinâmico
- ✅ Cidades: Brasília, Taguatinga, Ceilândia, Samambaia, Águas Claras, Guará, Sobradinho, Planaltina, Gama, Santa Maria

### ✅ Sitemap Dinâmico
- ✅ Arquivo `/sitemap.xml` via SSR
- ✅ Inclui: home, serviços, páginas locais
- ✅ Atualização automática com lastmod

### ✅ SEO Técnico
- ✅ Titles únicos por página
- ✅ Meta descriptions únicas
- ✅ Schema LocalBusiness (JSON-LD)
- ✅ Uso correto de headings (H1, H2, H3)
- ✅ URLs amigáveis
- ✅ robots.txt configurado

### ✅ Dark Mode
- ✅ Implementado com next-themes
- ✅ Botão de alternância no Header
- ✅ Preferência salva no navegador
- ✅ Suporte a modo sistema

### ✅ Animações
- ✅ Framer Motion integrado
- ✅ Animações de entrada de páginas
- ✅ Micro-animações em CTAs
- ✅ Hover suave em cards

### ✅ Google Analytics
- ✅ Integração GA4 configurada
- ✅ Rastreamento de pageviews
- ✅ Eventos de conversão preparados:
  - Clique em botão WhatsApp
  - Clique em CTA
  - Conversões em landing pages

### ✅ Design e UX
- ✅ Cards com hover
- ✅ Botões grandes e claros
- ✅ Tipografia profissional
- ✅ Layout mobile-first
- ✅ Componentes reutilizáveis

### ✅ Performance
- ✅ Build otimizado
- ✅ 36 páginas geradas estaticamente
- ✅ Pronto para next/image
- ✅ Lazy loading de componentes

## 🔧 Instalação

```bash
# Instalar dependências
pnpm install

# Configurar variáveis de ambiente
cp .env.local.example .env.local
# Editar .env.local e adicionar o ID do Google Analytics

# Desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

## 📁 Estrutura do Projeto

```
cnsousatec/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Header com menu e dark mode
│   │   ├── Footer.tsx           # Footer com links e contatos
│   │   └── SchemaLocalBusiness.tsx  # Schema JSON-LD
│   ├── lib/
│   │   └── analytics.ts         # Utilitários Google Analytics
│   ├── pages/
│   │   ├── _app.tsx             # App wrapper com ThemeProvider e GA
│   │   ├── _document.tsx        # Document com Schema
│   │   ├── index.tsx            # Página inicial
│   │   ├── servicos/
│   │   │   ├── manutencao-eletrica.tsx
│   │   │   ├── manutencao-eletronica.tsx
│   │   │   └── manutencao-hidraulica.tsx
│   │   ├── local/
│   │   │   └── [slug].tsx       # Páginas dinâmicas por localização
│   │   └── sitemap.xml.tsx      # Sitemap dinâmico
│   └── styles/
│       └── globals.css          # Estilos globais
├── public/
│   └── robots.txt               # Robots.txt
└── package.json
```

## 🎯 Próximos Passos (Opcional)

### Landing Pages de Anúncios
- [ ] Criar pasta `/src/pages/lp`
- [ ] Criar LPs sem header/footer
- [ ] Foco total em conversão

### Google Meu Negócio
- [ ] Preparar textos de descrição
- [ ] Criar posts
- [ ] Configurar mensagens automáticas de avaliação
- [ ] Criar fluxo pós-atendimento via WhatsApp

### Otimizações de Performance
- [ ] Adicionar imagens otimizadas com next/image
- [ ] Converter imagens para WebP
- [ ] Implementar lazy loading de imagens
- [ ] Testar Lighthouse e atingir score 90+

## 🌐 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### GitHub Pages (Estático)
```bash
# Adicionar ao next.config.ts:
# output: 'export'

# Build estático
pnpm build

# Deploy da pasta 'out' para GitHub Pages
```

## 📊 SEO

### URLs Geradas
- `/` - Página inicial
- `/servicos/manutencao-eletrica`
- `/servicos/manutencao-eletronica`
- `/servicos/manutencao-hidraulica`
- `/local/[servico]-[cidade]` - 30 páginas locais
- `/sitemap.xml` - Sitemap dinâmico

### Cidades Cobertas
- Brasília
- Taguatinga
- Ceilândia
- Samambaia
- Águas Claras
- Guará
- Sobradinho
- Planaltina
- Gama
- Santa Maria

## 📝 Configurações Necessárias

1. **Google Analytics**: Adicionar ID no `.env.local`
2. **Contatos**: Atualizar telefone e e-mail nos componentes
3. **Redes Sociais**: Atualizar links no Footer
4. **Domínio**: Atualizar URLs no sitemap e schema

## 🔒 Variáveis de Ambiente

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📄 Licença

MIT

---

**Desenvolvido seguindo o Briefing Técnico Oficial - Padrão Manus**
