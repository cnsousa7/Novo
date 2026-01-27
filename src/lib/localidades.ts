export interface Localidade {
  slug: string;
  nome: string;
  uf: 'DF' | 'GO';
  regiao: string; // Ex: 'Brasília', 'Águas Lindas'
  foco: string;
  whatsappMsg: string;
}

export const localidades: Localidade[] = [
  // Regiões Administrativas de Brasília - DF
  { slug: 'asa-sul', nome: 'Asa Sul', uf: 'DF', regiao: 'Brasília', foco: 'Comercial + apartamentos', whatsappMsg: 'Orçamento Asa Sul' },
  { slug: 'asa-norte', nome: 'Asa Norte', uf: 'DF', regiao: 'Brasília', foco: 'Residencial', whatsappMsg: 'Orçamento Asa Norte' },
  { slug: 'sudoeste', nome: 'Sudoeste', uf: 'DF', regiao: 'Brasília', foco: 'Condomínios', whatsappMsg: 'Orçamento Sudoeste' },
  { slug: 'noroeste', nome: 'Noroeste', uf: 'DF', regiao: 'Brasília', foco: 'Prédios novos', whatsappMsg: 'Orçamento Noroeste' },
  { slug: 'lago-sul', nome: 'Lago Sul', uf: 'DF', regiao: 'Brasília', foco: 'Alto padrão', whatsappMsg: 'Orçamento Lago Sul' },
  { slug: 'lago-norte', nome: 'Lago Norte', uf: 'DF', regiao: 'Brasília', foco: 'Residencial completo', whatsappMsg: 'Orçamento Lago Norte' },
  { slug: 'aguas-claras', nome: 'Águas Claras', uf: 'DF', regiao: 'Brasília', foco: 'Condomínios verticais', whatsappMsg: 'Orçamento Águas Claras' },
  { slug: 'guara', nome: 'Guará', uf: 'DF', regiao: 'Brasília', foco: 'Residencial e comércio', whatsappMsg: 'Orçamento Guará' },
  { slug: 'taguatinga', nome: 'Taguatinga', uf: 'DF', regiao: 'Brasília', foco: 'Comercial forte', whatsappMsg: 'Orçamento Taguatinga' },
  { slug: 'vicente-pires', nome: 'Vicente Pires', uf: 'DF', regiao: 'Brasília', foco: 'Casas', whatsappMsg: 'Orçamento Vicente Pires' },
  
  // Bairros de Águas Lindas de Goiás - GO
  { slug: 'jardim-brasilia', nome: 'Jardim Brasília', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Residencial e Comercial', whatsappMsg: 'Orçamento em Jardim Brasília - Águas Lindas' },
  { slug: 'mansoes-centro', nome: 'Mansões Centro', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Elétrica e Hidráulica', whatsappMsg: 'Orçamento em Mansões Centro - Águas Lindas' },
  { slug: 'mansoes-odisseia', nome: 'Mansões Odisséia', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Manutenção Técnica 24h', whatsappMsg: 'Orçamento em Mansões Odisséia - Águas Lindas' },
  { slug: 'perola', nome: 'Pérola', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Emergência Elétrica e Hidráulica', whatsappMsg: 'Orçamento em Pérola - Águas Lindas' },
  { slug: 'jardim-barragem', nome: 'Jardim Barragem', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Residencial e Predial', whatsappMsg: 'Orçamento em Jardim Barragem - Águas Lindas' },
  { slug: 'jardim-querencia', nome: 'Jardim Querência', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Casas e Comércios', whatsappMsg: 'Orçamento em Jardim Querência - Águas Lindas' },
  { slug: 'jardim-paraiso', nome: 'Jardim Paraíso', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Serviços de Manutenção 24h', whatsappMsg: 'Orçamento em Jardim Paraíso - Águas Lindas' },
  { slug: 'jardim-america', nome: 'Jardim América', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Manutenção Elétrica e Eletrônica', whatsappMsg: 'Orçamento em Jardim América - Águas Lindas' },
  { slug: 'setor-01', nome: 'Setor 01', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Comercial e Residencial', whatsappMsg: 'Orçamento em Setor 01 - Águas Lindas' },
  { slug: 'setor-02', nome: 'Setor 02', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Manutenção Geral', whatsappMsg: 'Orçamento em Setor 02 - Águas Lindas' },
  { slug: 'setor-03', nome: 'Setor 03', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Reparos Urgentes', whatsappMsg: 'Orçamento em Setor 03 - Águas Lindas' },
  { slug: 'setor-04', nome: 'Setor 04', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Elétrica e Hidráulica', whatsappMsg: 'Orçamento em Setor 04 - Águas Lindas' },
  { slug: 'setor-05', nome: 'Setor 05', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Atendimento 24h', whatsappMsg: 'Orçamento em Setor 05 - Águas Lindas' },
  { slug: 'setor-08', nome: 'Setor 08', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Residencial', whatsappMsg: 'Orçamento em Setor 08 - Águas Lindas' },
  { slug: 'santa-lucia', nome: 'Santa Lúcia', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Manutenção Predial', whatsappMsg: 'Orçamento em Santa Lúcia - Águas Lindas' },
  { slug: 'parque-da-barragem', nome: 'Parque da Barragem', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Reparos e Instalações', whatsappMsg: 'Orçamento em Parque da Barragem - Águas Lindas' },
];

export const servicos = {
  'manutencao-eletrica': 'Manutenção Elétrica',
  'manutencao-eletronica': 'Manutenção Eletrônica',
  'manutencao-hidraulica': 'Manutenção Hidráulica',
};

export const getLocalidadeBySlug = (slug: string) => localidades.find(l => l.slug === slug);
export const getServicoBySlug = (slug: string) => servicos[slug as keyof typeof servicos];
