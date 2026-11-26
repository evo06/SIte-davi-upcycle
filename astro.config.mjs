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
  },
});
