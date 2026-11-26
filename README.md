# Davi Rezende — site

Landing page do artista Davi Rezende (arte sustentável e upcycling), feita com [Astro](https://astro.build).

```sh
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # gera o site estático em ./dist
npm run preview  # serve o build localmente
```

## Link público temporário (para mostrar a alguém)

Um *Quick Tunnel* da Cloudflare gera uma URL `https://….trycloudflare.com` apontando para o site
rodando no seu computador — sem conta e sem configurar DNS. O link vale enquanto os dois comandos
abaixo estiverem rodando.

1. Instale o `cloudflared` (uma vez só):
   - Windows: `winget install --id Cloudflare.cloudflared`
   - macOS: `brew install cloudflared`
   - Linux: baixe em <https://github.com/cloudflare/cloudflared/releases>
2. Terminal 1 — gere e sirva o site:
   ```sh
   npm install
   npm run build
   npm run preview        # http://localhost:3000
   ```
3. Terminal 2 — abra o túnel e copie a URL `trycloudflare.com` que aparecer:
   ```sh
   cloudflared tunnel --url http://localhost:3000
   ```

> O `astro.config.mjs` já libera domínios `.trycloudflare.com` em `server.allowedHosts`; sem isso o
> servidor de preview responde "Blocked request" para o link do túnel.
>
> Para um link **permanente**, conecte este repositório ao Cloudflare Pages, Vercel ou Netlify
> (plano gratuito, o Astro é detectado sozinho e cada `git push` publica uma nova versão).

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
>
> Hoje `public/` contém apenas o vídeo da baleia, o favicon e os logos da marca
> (`logohori.svg` é a fonte vetorial do símbolo usado em `src/components/Logo.astro`).

## Sistema visual

Tudo parte dos *design tokens* em `src/styles/global.css`:

- **Cor:** papel reciclado (`--paper`) + tinta (`--ink`). A interface é monocromática de propósito,
  para que a cor das obras seja o destaque.
- **Tipografia:** Bricolage Grotesque (títulos e texto) + Instrument Serif itálico (palavras de
  destaque), self-hosted via Fontsource. A escala é fluida (`--step-*`, com `clamp()`) e os
  títulos grandes consideram **largura e altura** da tela (`min(…vw, …vh)`), para não estourar em
  notebooks, que têm telas largas porém baixas.
- **Cabe na tela:** o hero ocupa exatamente uma tela (`100svh`) e nenhuma imagem grande passa da
  altura útil (`--media-max-h`). Testado em 1366×657, 1536×730, 1440×789 e 1920×955 (área útil
  típica de notebooks e monitores, já sem as barras do navegador).
- **Grid:** 12 colunas no desktop; o portfólio segue um padrão editorial de 10 posições que se
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
