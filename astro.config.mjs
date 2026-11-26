// @ts-check
import { defineConfig } from 'astro/config';

// The Cloudflare Pages URL. Change it if a custom domain is added.
export default defineConfig({
  site: 'https://getkepa.pages.dev',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
