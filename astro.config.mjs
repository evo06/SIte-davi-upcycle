// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Domínio usado para URLs absolutas (canonical, Open Graph).
  // Tirado da própria logomarca (davirezende.com.br) — ajuste se for outro.
  site: 'https://davirezende.com.br',
  server: {
    host: '0.0.0.0',
    port: 3000,
    // Permite abrir o `npm run dev` / `npm run preview` por um túnel público
    // da Cloudflare (cloudflared tunnel --url ...). Por segurança, esses
    // servidores recusam domínios desconhecidos; liberamos só *.trycloudflare.com.
    // Não afeta o site publicado (que é estático).
    allowedHosts: ['.trycloudflare.com'],
  },
});
