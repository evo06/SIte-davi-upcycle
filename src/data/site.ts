/**
 * Fonte única de verdade para dados de contato e navegação.
 * Antes, o link do WhatsApp estava repetido em 4 componentes diferentes —
 * agora qualquer ajuste (número, mensagem, e-mail) é feito só aqui.
 */

const WHATSAPP_NUMERO = '5521982221872';
const WHATSAPP_MENSAGEM = 'oi, vim do seu site';

const ENDERECO_COMPLETO =
  'Rua Valentim Magalhães, 647, Vigário Geral, Rio de Janeiro, RJ, 21241-330';

export const SITE = {
  nome: 'Davi Rezende',
  url: 'https://davirezende.com.br',
  titulo: 'Davi Rezende — Transformando o descartado em arte',
  descricao:
    'Arte sustentável e upcycling no Rio de Janeiro: esculturas, mobiliário e instalações feitos a partir de materiais descartados, para marcas como Globo, Shell, Corona e Sesc.',
  slogan: 'Transformando o descartado em arte',
  email: 'davi.rez@gmail.com',
  telefone: {
    exibicao: '(21) 98222-1872',
    href: 'tel:+5521982221872',
  },
  whatsapp: `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`,
  instagram: {
    usuario: '@davi.rez',
    url: 'https://www.instagram.com/davi.rez/',
  },
  endereco: {
    rua: 'Rua Valentim Magalhães, 647',
    bairro: 'Vigário Geral',
    cidade: 'Rio de Janeiro, RJ',
    cep: '21241-330',
    mapa: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ENDERECO_COMPLETO)}`,
  },
  horario: [
    { dias: 'Segunda a sexta', horas: '9h às 18h' },
    { dias: 'Sábado', horas: '10h às 14h, com agendamento' },
  ],
} as const;

/** Mesma ordem em que as seções aparecem na página. */
export const NAV = [
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#parceiros', label: 'Parceiros' },
  { href: '#contato', label: 'Contato' },
] as const;
