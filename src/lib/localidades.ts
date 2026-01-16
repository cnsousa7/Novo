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
  { slug: 'jardim-brasilia', nome: 'Jardim Brasília', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Residencial + comércios', whatsappMsg: 'Orçamento Jardim Brasília' },
  { slug: 'mansoes-centro', nome: 'Mansões Centro', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Elétrica e hidráulica', whatsappMsg: 'Orçamento Mansões Centro' },
  { slug: 'mansoes-odisseia', nome: 'Mansões Odisséia', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Manutenção técnica', whatsappMsg: 'Orçamento Mansões Odisséia' },
  { slug: 'perola', nome: 'Pérola', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Emergência 24h', whatsappMsg: 'Orçamento Pérola' },
  { slug: 'jardim-barragem', nome: 'Jardim Barragem', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Residencial', whatsappMsg: 'Orçamento Jardim Barragem' },
  { slug: 'jardim-querencia', nome: 'Jardim Querência', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Casas e prédios', whatsappMsg: 'Orçamento Jardim Querência' },
  { slug: 'jardim-paraiso', nome: 'Jardim Paraíso', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Serviços gerais', whatsappMsg: 'Orçamento Jardim Paraíso' },
  { slug: 'jardim-america', nome: 'Jardim América', uf: 'GO', regiao: 'Águas Lindas de Goiás', foco: 'Manutenção elétrica', whatsappMsg: 'Orçamento Jardim América' },
];

export const servicos = {
  'manutencao-eletrica': 'Manutenção Elétrica',
  'manutencao-eletronica': 'Manutenção Eletrônica',
  'manutencao-hidraulica': 'Manutenção Hidráulica',
};

export const getLocalidadeBySlug = (slug: string) => localidades.find(l => l.slug === slug);
export const getServicoBySlug = (slug: string) => servicos[slug as keyof typeof servicos];
