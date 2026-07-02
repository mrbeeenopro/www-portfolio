import { exec } from 'child_process';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image", "@nuxtjs/plausible"],
  plausible: {
    apiHost: "https://plausible.mrbeeno.pro",
    domain: "mrbeeno.pro",
    },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  hooks: {
    ready: () => {
      console.log('[Nuxt Config] Triggering project sync with GitHub...');
      exec('node scripts/fetch-projects.js', (error, stdout, stderr) => {
        if (error) {
          console.error('[Nuxt Config] Projects sync error:', error);
          return;
        }
        if (stdout) console.log(stdout.trim());
        if (stderr) console.error(stderr.trim());
      });
    }
  }
});