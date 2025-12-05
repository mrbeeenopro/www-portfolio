<template>
  <NuxtLayout>
    <Backdrop />

    <!-- Navbar -->
    <nav class="w-full flex items-center justify-between px-4 py-4 md:px-8 md:py-6">
      <div class="flex items-center gap-3">
        <img src="/assets/images/index.png" alt="Logo" width="32" class="object-contain" />
      </div>

      <span class="text-sm text-overlay3 flex gap-2">
        <NuxtLink to="/" class="ms-2"><AnimatedLink text="home" /></NuxtLink>
        <NuxtLink to="/friends" class="ms-2"><AnimatedLink text="friends" /></NuxtLink>
        <NuxtLink to="/projects" class="ms-2"><AnimatedLink text="projects" /></NuxtLink>
      </span>
    </nav>

    <!-- Main content -->
    <div class="flex flex-row items-center justify-start min-h-[80vh] w-full px-3 md:px-8">
      <div class="flex flex-col justify-center items-start flex-1 max-w-xl">
        <NuxtPage />
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-12 text-center text-xs text-overlay1 opacity-70">
      2025 mrbeenopro — a fork of
      <a href="https://prpl.wtf/" target="_blank" class="underline hover:text-overlay2">
        emma homepages
      </a>
      <script src="https://cdn.jsdelivr.net/gh/adryd325/oneko.js/oneko.js"></script>
    </footer>
  </NuxtLayout>
</template>

<script setup>
import Backdrop from "~/components/Backdrop.vue";
import AnimatedLink from "~/components/AnimatedLink.vue";

// SEO + META
useHead({
  title: "Hi I'm Mrbeenopro",
  meta: [
    { name: "title", content: "Hi I'm Mrbeenopro" },
    { name: "description", content: "Welcome to my homepage!" },

    // OG tags
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://yourwebsite.com/" },
    { property: "og:title", content: "Hi I'm Mrbeenopro" },
    { property: "og:description", content: "Welcome to my homepage!" },
    { property: "og:image", content: "https://metatags.io/images/meta-tags.png" },

    // Twitter tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://yourwebsite.com/" },
    { name: "twitter:title", content: "Hi I'm Mrbeenopro" },
    { name: "twitter:description", content: "Welcome to my homepage!" },
    { name: "twitter:image", content: "https://metatags.io/images/meta-tags.png" },
  ]
});
</script>
