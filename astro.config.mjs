// @ts-check
import { defineConfig } from 'astro/config';

// Change `site` when the Cloudflare Pages URL (or a custom domain) is final.
export default defineConfig({
  site: 'https://kepa.pages.dev',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
