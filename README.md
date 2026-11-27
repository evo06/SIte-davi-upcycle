# Site do Davi Rezende

Landing page do artista Davi Rezende (arte sustentável e upcycling), feita com [Astro](https://astro.build).

```sh
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # gera o site estático em ./dist
npm run preview  # serve o build localmente
```

## Publicação

O site é publicado pela Vercel. Cada push em uma branch gera uma pré-visualização, e o merge na `master` atualiza a produção.

O GitHub Pages não é usado e deve ficar desativado (Settings, Pages). Com a fonte "Deploy from a branch", o Jekyll tenta ler os arquivos `.astro` como páginas dele, estranha o bloco `---` do início de cada um e a execução falha com "Invalid YAML front matter".

## Link público temporário

Para mostrar o site a alguém sem publicar, um Quick Tunnel da Cloudflare gera uma URL `https://….trycloudflare.com` apontando para o site rodando no seu computador. Não precisa de conta nem de DNS. O link vale enquanto os dois comandos abaixo estiverem rodando.

1. Instale o `cloudflared` (uma vez):
   - Windows: `winget install --id Cloudflare.cloudflared`
   - macOS: `brew install cloudflared`
   - Linux: baixe em <https://github.com/cloudflare/cloudflared/releases>
2. No terminal 1, gere e sirva o site:
   ```sh
   npm install
   npm run build
   npm run preview        # http://localhost:3000
   ```
3. No terminal 2, abra o túnel e copie a URL `trycloudflare.com` que aparecer:
   ```sh
   cloudflared tunnel --url http://localhost:3000
   ```

O `astro.config.mjs` já libera domínios `.trycloudflare.com` em `server.allowedHosts`. Sem isso, o servidor de preview responde "Blocked request" para o link do túnel.

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Contatos, WhatsApp, Instagram, endereço, horário, menu | `src/data/site.ts` |
| Obras do portfólio (título, categoria, foto, descrição) | `src/data/trabalhos.ts` |
| Textos de cada seção | `src/components/*.astro` |

### Adicionar uma obra

1. Coloque a foto em `src/assets/trabalhos/` (JPG, PNG ou WebP, de preferência com pelo menos 1200 px de largura).
2. Importe a foto no topo de `src/data/trabalhos.ts` e adicione um item à lista `TRABALHOS`.
3. O Astro gera as versões AVIF e WebP em vários tamanhos, o card entra no grid e a obra aparece na visualização ampliada.

Imagens que o Astro deve otimizar ficam em `src/assets/`, não em `public/`. Arquivos de `public/` são servidos como estão, sem compressão nem tamanhos responsivos. Hoje `public/` guarda só o vídeo da baleia, o favicon e os logos da marca. O `logohori.svg` é a fonte vetorial do símbolo usado em `src/components/Logo.astro`.

Não leia propriedades da imagem importada no código, como `imagem.width`. No Astro, isso faz o arquivo original inteiro ser copiado para o build.

## Sistema visual

Os *design tokens* ficam em `src/styles/global.css`.

- Cor: papel reciclado (`--paper`) e tinta (`--ink`). A interface é monocromática para que a cor das obras apareça.
- Tipografia: Bricolage Grotesque nos títulos e no texto, Instrument Serif em itálico nas palavras de destaque, ambas hospedadas no próprio site via Fontsource. A escala é fluida (`--step-*`, com `clamp()`). Os títulos grandes usam `min(…vw, …vh)`, para considerar também a altura da tela e não estourar em notebooks, que são largos e baixos.
- Altura da tela: o hero ocupa uma tela (`100svh`) e nenhuma imagem grande passa da altura útil (`--media-max-h`). Testado em 1366×657, 1536×730, 1440×789 e 1920×955.
- Grid: 12 colunas no desktop. O portfólio repete um padrão de 10 posições e se reorganiza sozinho quando o filtro esconde obras (`:nth-child(… of :not([hidden]))`).

## Princípios de movimento

Baseados nas diretrizes de [Emil Kowalski](https://github.com/emilkowalski/skills).

- Só três momentos têm coreografia: a entrada do hero, a revelação das imagens das obras (uma vez cada) e o menu e a visualização ampliada, que respondem a uma ação da pessoa.
- Entradas e saídas usam `--ease-out`, movimentos na tela usam `--ease-in-out`, e nunca `ease-in`. A saída é mais curta que a entrada.
- Só `transform`, `opacity` e `clip-path` são animados, e nunca `transition: all`.
- Hover só vale com mouse (`@media (hover: hover) and (pointer: fine)`). O feedback de toque é `:active` com `scale(0.97)`.
- Com `prefers-reduced-motion`, nada se desloca e nenhuma imagem fica escondida. Sobram esmaecimentos curtos.
