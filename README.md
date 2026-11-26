# Davi Rezende — site

Landing page do artista Davi Rezende (arte sustentável e upcycling), feita com [Astro](https://astro.build).

```sh
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # gera o site estático em ./dist
npm run preview  # serve o build localmente
```

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Contatos, WhatsApp, Instagram, endereço, horário, menu | `src/data/site.ts` |
| Obras do portfólio (título, categoria, foto, descrição) | `src/data/trabalhos.ts` |
| Textos de cada seção | `src/components/*.astro` |

### Adicionar uma obra

1. Coloque a foto em `src/assets/trabalhos/` (JPG, PNG ou WebP, de preferência com pelo menos 1200px de largura).
2. Importe-a no topo de `src/data/trabalhos.ts` e adicione um item na lista `TRABALHOS`.
3. Pronto: o Astro gera automaticamente versões AVIF/WebP em vários tamanhos, o card entra no grid
   editorial e a obra aparece na visualização ampliada.

> **Importante:** imagens otimizadas precisam ficar em `src/assets/`, não em `public/`.
> Arquivos em `public/` são servidos como estão, sem compressão nem tamanhos responsivos.
> Evite também ler propriedades da imagem importada no código (ex.: `imagem.width`): no Astro isso
> faz o arquivo original inteiro ser copiado para o build.

## Sistema visual

Tudo parte dos *design tokens* em `src/styles/global.css`:

- **Cor:** papel reciclado (`--paper`) + tinta (`--ink`). A interface é monocromática de propósito,
  para que a cor das obras seja o destaque.
- **Tipografia:** Bricolage Grotesque (títulos e texto) + Instrument Serif itálico (palavras de
  destaque), self-hosted via Fontsource. A escala é fluida (`--step-*`, com `clamp()`).
- **Grid:** 12 colunas no desktop; o portfólio segue um padrão editorial de 9 posições que se
  reorganiza sozinho quando o filtro esconde itens (`:nth-child(… of :not([hidden]))`).

## Princípios de movimento

Baseados nas diretrizes de [Emil Kowalski](https://github.com/emilkowalski/skills):

- **Pouco e com propósito.** Só três momentos coreografados: a entrada do hero (uma vez), a revelação
  das imagens das obras (uma vez cada) e o menu/visualização ampliada (ação do usuário).
- **Curvas fortes, nunca `ease-in`:** `--ease-out` para entradas e saídas, `--ease-in-out` para
  movimentos na tela. A saída é sempre mais curta que a entrada.
- **Só `transform`, `opacity` e `clip-path`** (propriedades baratas para o navegador). Nunca
  `transition: all`.
- **Hover só com mouse** (`@media (hover: hover) and (pointer: fine)`) e `:active` com
  `scale(0.97)` como feedback de toque.
- **`prefers-reduced-motion`:** nada se desloca e nenhuma imagem fica escondida; só esmaecimentos curtos.
