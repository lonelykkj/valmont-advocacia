import andre from '../assets/andre-siqueira.webp'
import helena from '../assets/helena-duarte.webp'
import ricardo from '../assets/ricardo-valmont.webp'

export const navLinks = [
  { href: '/#manifesto', label: 'Escritório' },
  { href: '/#atuacao', label: 'Atuação' },
  { href: '/#socios', label: 'Sócios' },
  { href: '/#insights', label: 'Insights' },
  { href: '/#contato', label: 'Contato' },
]

export const marquee = [
  'Societário e M&A',
  'Tributário',
  'Contencioso',
  'Arbitragem',
  'Compliance',
  'Patrimônio e Sucessão',
]

export const pillars = [
  { title: 'Sócios à frente', text: 'Cada mandato é conduzido pessoalmente por um sócio, do primeiro contato à solução.' },
  { title: 'Sigilo absoluto', text: 'Protocolos rigorosos de confidencialidade para operações e disputas sensíveis.' },
  { title: 'Visão de negócio', text: 'Pareceres que falam a língua do conselho, não apenas a dos tribunais.' },
]

export const areas = [
  { n: 'I', title: 'Societário e M&A', text: 'Fusões, aquisições, joint ventures e reorganizações societárias, com estruturação completa da operação, due diligence e negociação.', tags: ['Fusões e aquisições', 'Governança', 'Acordos de acionistas'] },
  { n: 'II', title: 'Tributário', text: 'Planejamento tributário estratégico, contencioso administrativo e judicial e adequação à reforma tributária.', tags: ['Planejamento', 'Contencioso fiscal', 'Reforma tributária'] },
  { n: 'III', title: 'Contencioso e Arbitragem', text: 'Representação em disputas empresariais de alto valor, perante tribunais e câmaras arbitrais nacionais e internacionais.', tags: ['Arbitragem', 'Tribunais superiores', 'Recuperação de ativos'] },
  { n: 'IV', title: 'Trabalhista Empresarial', text: 'Consultoria preventiva, relações sindicais, remuneração de executivos e gestão estratégica de passivos.', tags: ['Consultivo', 'Executivos', 'Relações sindicais'] },
  { n: 'V', title: 'Compliance e LGPD', text: 'Programas de integridade, investigações internas, proteção de dados e relacionamento com órgãos reguladores.', tags: ['Integridade', 'Investigações', 'Proteção de dados'] },
  { n: 'VI', title: 'Patrimônio e Sucessão', text: 'Planejamento sucessório de famílias empresárias, holdings patrimoniais, protocolos familiares e proteção de ativos.', tags: ['Holdings', 'Protocolo familiar', 'Sucessão'] },
]

export const partners = [
  { name: 'Ricardo Valmont', role: 'Fundador', area: 'Societário e M&A · Governança', photo: ricardo },
  { name: 'Helena Duarte', role: 'Sócia', area: 'Tributário · Patrimônio', photo: helena },
  { name: 'André Siqueira', role: 'Sócio', area: 'Contencioso e Arbitragem', photo: andre },
]

export const contact = {
  phone: '+55 11 99000-0000',
  email: 'contato@valmontadvogados.com.br',
  whatsapp: `https://wa.me/5511990000000?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de agendar uma conversa.')}`,
}
