<template>
  <Head>
    <Title>mrbeenopro portfolio</Title>
  </Head>
  <NuxtLayout>
    <Backdrop />

    <!-- Navbar  -->
    <nav class="w-full flex items-center justify-between px-4 py-4 md:px-8 md:py-6">
      <div class="flex items-center gap-3">
        <!-- Logo image -->
        <img src="/assets/images/index.png" alt="Logo" width="32" class="object-contain" />
      </div>
      <span class="text-sm text-overlay3 flex gap-2">
        <NuxtLink to="/" class="ms-2">
          <AnimatedLink text="home" />
        </NuxtLink>
        <NuxtLink to="/friends" class="ms-2">
          <AnimatedLink text="friends" />
        </NuxtLink>
        <NuxtLink to="/projects" class="ms-2">
          <AnimatedLink text="projects" />
        </NuxtLink>
      </span>
    </nav>

    <div class="flex flex-row items-center justify-start min-h-[80vh] w-full px-3 md:px-8">
      <div class="flex flex-col justify-center items-start flex-1 max-w-xl">
        <NuxtPage />
      </div>
    </div>
  </NuxtLayout>
    <!-- Footer -->
  <footer class="mt-12 text-center text-xs text-overlay1 opacity-70">
    2025 mrbeenopro &mdash; a fork of
    <a href="https://prpl.wtf/" target="_blank" class="underline hover:text-overlay2">emma homapages</a>
    <script src="https://cdn.jsdelivr.net/gh/adryd325/oneko.js/oneko.js"></script>
  </footer>
</template>

<script>
import Backdrop from "~/components/Backdrop.vue";
import AnimatedLink from "~/components/AnimatedLink.vue";

export default {
  components: {
    Backdrop,
    AnimatedLink,
  },
};
</script>
