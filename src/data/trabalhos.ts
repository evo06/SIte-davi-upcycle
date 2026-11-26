import type { ImageMetadata } from 'astro';

import poltronaFusca from '../assets/trabalhos/poltrona-fusca.webp';
import esculturaOnda from '../assets/trabalhos/escultura-onda.webp';
import quadroArmanda from '../assets/trabalhos/quadro-armanda.webp';
import bancoSol from '../assets/trabalhos/banco-sol.webp';
import esculturaLeques from '../assets/trabalhos/escultura-leques.png';
import planetaPet from '../assets/trabalhos/planeta-pet.jpg';
import balancoOrelhao from '../assets/trabalhos/balanco-orelhao.webp';
import esculturaBaleia from '../assets/trabalhos/escultura-baleia.webp';
import esculturaPeixe from '../assets/trabalhos/escultura-peixe.png';
import esculturaPolvo from '../assets/trabalhos/escultura-polvo.png';

export type Categoria = 'Escultura' | 'Mobiliário' | 'Decoração';

export interface Trabalho {
  titulo: string;
  categoria: Categoria;
  imagem: ImageMetadata;
  descricao?: string;
  /** Cliente ou local, quando conhecido. Aparece como metadado da obra. */
  contexto?: string;
  /** Ajuste fino do enquadramento no card (CSS object-position). */
  foco?: string;
  /** Vídeo opcional exibido na visualização ampliada (arquivo em /public). */
  video?: string;
}

/*
 * As categorias foram revisadas com base nas próprias descrições das obras:
 * várias peças descritas como "escultura" estavam como "Decoração" ou
 * "Mobiliário", e o filtro "Escultura" mostrava só 1 item.
 */
export const TRABALHOS: Trabalho[] = [
  {
    titulo: 'Poltrona de capô de Fusca',
    categoria: 'Mobiliário',
    imagem: poltronaFusca,
    descricao:
      'Nada está perdido — com criatividade, tudo se transforma! Poltrona feita com o capô de um Fusca.',
  },
  {
    titulo: 'Escultura Onda',
    categoria: 'Escultura',
    imagem: esculturaOnda,
    contexto: 'TV Globo',
    descricao:
      'Feita com resíduos coletados e separados pela área de gestão ambiental da TV Globo em praias e atividades externas.',
  },
  {
    titulo: 'Armanda',
    categoria: 'Decoração',
    imagem: quadroArmanda,
    descricao: 'Quadro desenvolvido apenas com colagens de diferentes tipos de madeira.',
  },
  {
    titulo: 'Banco Sol',
    categoria: 'Mobiliário',
    imagem: bancoSol,
    contexto: 'Sambódromo, Rio de Janeiro',
    foco: '30% 50%',
    descricao:
      'Banco Sol brilhando no Sambódromo! Recarregue as energias — do celular e as suas — e celebre a sustentabilidade.',
  },
  {
    titulo: 'Escultura com leques e pulseiras',
    categoria: 'Escultura',
    imagem: esculturaLeques,
    contexto: 'Shell',
    foco: '50% 40%',
    descricao:
      'A convite da Aborda Arte, criamos esta escultura de quase 3 metros com leques e pulseiras para a Shell.',
  },
  {
    titulo: 'Planeta Pet',
    categoria: 'Escultura',
    imagem: planetaPet,
    contexto: 'Saquarema, RJ',
    foco: '50% 35%',
    descricao:
      'Escultura de 5 metros feita com mais de 3.000 garrafas PET para o campeonato mundial de surfe em Saquarema (RJ).',
  },
  {
    titulo: 'Balanço Orelhão',
    categoria: 'Mobiliário',
    imagem: balancoOrelhao,
  },
  {
    titulo: 'Escultura Baleia',
    categoria: 'Escultura',
    imagem: esculturaBaleia,
    video: '/images/arts/videobaleia.mp4',
  },
  {
    titulo: 'Escultura Peixe',
    categoria: 'Escultura',
    imagem: esculturaPeixe,
    contexto: 'Sesc',
    foco: '50% 62%',
    descricao:
      'Peixe com contorno em neon, preenchido com garrafas e resíduos plásticos, que carrega um alerta: “Em 2050, os oceanos poderão ter mais plásticos que peixes.” Parte de uma ação de educação ambiental do Sesc.',
  },
  {
    titulo: 'Escultura Polvo',
    categoria: 'Escultura',
    imagem: esculturaPolvo,
    descricao:
      'O pedido era usar plásticos de uso doméstico, e o desafio foi justamente compor com elementos pequenos e criar esta mega escultura rica em detalhes — do jeito que sempre quis fazer.',
  },
];
