<template>
  <NuxtLayout>
    <Backdrop />

    <!-- Navigation Header -->
    <nav class="sticky top-0 z-50 w-full border-b border-opencode-hairline bg-opencode-canvas/90 backdrop-blur-sm">
      <div class="max-w-5xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        <NuxtLink to="/" class="flex items-center gap-2.5 hover:opacity-90 transition-all duration-200">
          <NuxtImg 
            src="/assets/images/index.png" 
            alt="Mrbeenopro Logo" 
            class="w-6 h-6 md:w-7 md:h-7 rounded-[4px] border border-opencode-hairline-strong/25 shadow-sm object-cover"
          />
          <span class="font-mono font-bold text-sm text-opencode-ink tracking-normal">
           
          </span>
        </NuxtLink>

        <!-- Centered links grid -->
        <div class="hidden md:flex items-center gap-4 text-sm font-mono font-medium text-opencode-mute">
          <NuxtLink to="/" class="nav-link-matrix" active-class="text-opencode-ink font-bold" @mouseenter="scramble('home')" @mouseleave="reset('home')">[ {{ navTexts.home }} ]</NuxtLink>
          <span class="text-opencode-hairline-strong/30">•</span>
          <NuxtLink to="/friends" class="nav-link-matrix" active-class="text-opencode-ink font-bold" @mouseenter="scramble('friends')" @mouseleave="reset('friends')">[ {{ navTexts.friends }} ]</NuxtLink>
          <span class="text-opencode-hairline-strong/30">•</span>
          <NuxtLink to="/projects" class="nav-link-matrix" active-class="text-opencode-ink font-bold" @mouseenter="scramble('projects')" @mouseleave="reset('projects')">[ {{ navTexts.projects }} ]</NuxtLink>
          <span class="text-opencode-hairline-strong/30">•</span>
          <NuxtLink to="/sponor" class="nav-link-matrix" active-class="text-opencode-ink font-bold" @mouseenter="scramble('sponor')" @mouseleave="reset('sponor')">[ {{ navTexts.sponor }} ]</NuxtLink>
        </div>

        <!-- Right Side: Primary CTA -->
        <div class="flex items-center gap-2">
          <!-- Small tab link for mobile -->
          <div class="flex md:hidden items-center gap-2 text-xs font-mono text-opencode-mute mr-2">
            <NuxtLink to="/" class="nav-link-matrix" active-class="text-opencode-ink" @mouseenter="scramble('home')" @mouseleave="reset('home')">[{{ navTexts.home }}]</NuxtLink>
            <NuxtLink to="/friends" class="nav-link-matrix" active-class="text-opencode-ink" @mouseenter="scramble('friends')" @mouseleave="reset('friends')">[{{ navTexts.friends }}]</NuxtLink>
            <NuxtLink to="/projects" class="nav-link-matrix" active-class="text-opencode-ink" @mouseenter="scramble('projects')" @mouseleave="reset('projects')">[{{ navTexts.projects }}]</NuxtLink>
            <NuxtLink to="/sponor" class="nav-link-matrix" active-class="text-opencode-ink" @mouseenter="scramble('sponor')" @mouseleave="reset('sponor')">[{{ navTexts.sponor }}]</NuxtLink>
          </div>
          
          <a 
            href="https://github.com/mrbeeenopro" 
            target="_blank"
            class="hidden sm:inline-block px-4 py-2 bg-opencode-ink text-opencode-canvas text-xs font-medium tracking-tight rounded-[4px] border border-opencode-ink hover:bg-opencode-ink-deep active:bg-opencode-ink-deep transition-all font-mono"
          >
            [GitHub]
          </a>
        </div>
      </div>
    </nav>

    <!-- Main Content Container -->
    <main class="max-w-5xl mx-auto min-h-[75vh] w-full px-6 py-12 flex flex-col items-stretch justify-start">
      <NuxtPage />
    </main>

    <!-- Footer Area matching OpenCode specification -->
    <footer class="w-full border-t border-opencode-hairline bg-opencode-canvas py-8 font-mono">
      <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-opencode-mute gap-4">
        <div class="flex flex-col sm:flex-row sm:items-start sm:items-center gap-2 sm:gap-4">
          <div>
            © 2026  Mrbeenopro 
          </div>
          <span class="hidden sm:inline text-opencode-hairline-strong/20">|</span>
          <div class="flex items-center gap-1.5 select-none">
            <!-- Custom Pixel-Art Balance Scales SVG -->
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <rect x="7" y="2" width="2" height="11" />
              <rect x="4" y="13" width="8" height="1" />
              <rect x="2" y="4" width="12" height="1" />
              <rect x="2" y="5" width="1" height="4" />
              <rect x="1" y="9" width="3" height="1" />
              <rect x="13" y="5" width="1" height="4" />
              <rect x="12" y="9" width="3" height="1" />
            </svg>
            <span>MIT License</span>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-x-2 gap-y-3">
          <a href="https://github.com/mrbeeenopro" target="_blank" class="nav-link-matrix inline-flex items-center" @mouseenter="scramble('footerGithub')" @mouseleave="reset('footerGithub')">[<svg class="w-3 h-3 fill-current mx-1 select-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="2" height="1" /><rect x="8" y="2" width="2" height="1" /><rect x="3" y="3" width="6" height="5" /><rect x="2" y="6" width="8" height="1" /><rect x="4" y="8" width="4" height="2" /></svg><span class="inline-block">{{ navTexts.footerGithub }}</span>]</a>
          <span>·</span>
          <NuxtLink to="/projects" class="nav-link-matrix inline-flex items-center" @mouseenter="scramble('footerProjects')" @mouseleave="reset('footerProjects')">[<svg class="w-3 h-3 fill-current mx-1 select-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="2" width="4" height="1" /><rect x="1" y="3" width="10" height="7" /><rect x="2" y="4" width="8" height="5" class="text-opencode-canvas fill-current" /></svg><span class="inline-block">{{ navTexts.footerProjects }}</span>]</NuxtLink>
          <span>·</span>
          <a href="mailto:hi@mrbeenopro.com" class="nav-link-matrix inline-flex items-center" @mouseenter="scramble('footerMail')" @mouseleave="reset('footerMail')">[<svg class="w-3 h-3 fill-current mx-1 select-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="10" height="6" /><rect x="2" y="4" width="8" height="4" class="text-opencode-canvas fill-current" /><rect x="3" y="4" width="6" height="1" /><rect x="4" y="5" width="4" height="1" /><rect x="5" y="6" width="2" height="1" /></svg><span class="inline-block">{{ navTexts.footerMail }}</span>]</a>
          <span>·</span>
          <NuxtLink to="/friends" class="nav-link-matrix inline-flex items-center" @mouseenter="scramble('footerFriends')" @mouseleave="reset('footerFriends')">[<svg class="w-3 h-3 fill-current mx-1 select-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="3" height="2" /><rect x="7" y="2" width="3" height="2" /><rect x="1" y="4" width="10" height="3" /><rect x="2" y="7" width="8" height="1" /><rect x="3" y="8" width="6" height="1" /><rect x="4" y="9" width="4" height="1" /><rect x="5" y="10" width="2" height="1" /></svg><span class="inline-block">{{ navTexts.footerFriends }}</span>]</NuxtLink>
          <span>·</span>
          <a href="https://discord.gg/AqrUvWkxU8" target="_blank" class="nav-link-matrix inline-flex items-center" @mouseenter="scramble('footerDiscord')" @mouseleave="reset('footerDiscord')">[<svg class="w-3 h-3 fill-current mx-1 select-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="2" height="1" /><rect x="8" y="3" width="2" height="1" /><rect x="1" y="4" width="10" height="4" /><rect x="2" y="8" width="3" height="1" /><rect x="7" y="8" width="3" height="1" /><rect x="3" y="5" width="2" height="2" class="text-opencode-canvas fill-current" /><rect x="7" y="5" width="2" height="2" class="text-opencode-canvas fill-current" /></svg><span class="inline-block">{{ navTexts.footerDiscord }}</span>]</a>
          <span>·</span>
          <NuxtLink to="/sponor" class="nav-link-matrix inline-flex items-center" @mouseenter="scramble('footerSponsor')" @mouseleave="reset('footerSponsor')">[<svg class="w-3 h-3 fill-current mx-1 select-none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="2" height="1" /><rect x="8" y="2" width="2" height="1" /><rect x="1" y="3" width="4" height="2" /><rect x="7" y="3" width="4" height="2" /><rect x="2" y="5" width="8" height="2" /><rect x="3" y="7" width="6" height="1" /><rect x="4" y="8" width="4" height="1" /><rect x="5" y="9" width="2" height="1" /></svg><span class="inline-block">{{ navTexts.footerSponsor }}</span>]</NuxtLink>
        </div>
      </div>
      <!-- Oneko cat overlay element script -->
    </footer>
  </NuxtLayout>
</template>

<script setup>
import { ref } from 'vue';
import Backdrop from "~/components/Backdrop.vue";

const originalTexts = {
  home: 'home',
  friends: 'friends',
  projects: 'projects',
  sponor: 'sponsor',
  footerGithub: 'GitHub',
  footerProjects: 'Projects',
  footerMail: 'Mail',
  footerFriends: 'Friends',
  footerDiscord: 'Discord',
  footerSponsor: 'Sponsor'
};

const navTexts = {
  home: ref(originalTexts.home),
  friends: ref(originalTexts.friends),
  projects: ref(originalTexts.projects),
  sponor: ref(originalTexts.sponor),
  footerGithub: ref(originalTexts.footerGithub),
  footerProjects: ref(originalTexts.footerProjects),
  footerMail: ref(originalTexts.footerMail),
  footerFriends: ref(originalTexts.footerFriends),
  footerDiscord: ref(originalTexts.footerDiscord),
  footerSponsor: ref(originalTexts.footerSponsor)
};

const japaneseChars = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝナカアサタハマヤラワクシツヌフムルヲ".split("");
const scrambleIntervals = {};

const scramble = (key) => {
  const refVal = navTexts[key];
  const original = originalTexts[key];
  if (scrambleIntervals[key]) {
    clearInterval(scrambleIntervals[key]);
  }
  let iteration = 0;
  scrambleIntervals[key] = setInterval(() => {
    refVal.value = original
      .split("")
      .map((char, index) => {
        if (char === " ") return " ";
        if (index < iteration) {
          return original[index];
        }
        return japaneseChars[Math.floor(Math.random() * japaneseChars.length)];
      })
      .join("");
    if (iteration >= original.length) {
      clearInterval(scrambleIntervals[key]);
      refVal.value = original;
    }
    iteration += 1 / 3;
  }, 30);
};

const reset = (key) => {
  const refVal = navTexts[key];
  const original = originalTexts[key];
  if (scrambleIntervals[key]) {
    clearInterval(scrambleIntervals[key]);
  }
  refVal.value = original;
};

// SEO & Fonts Config
useHead({
  title: "Hi I'm Mrbeenopro",
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap' }
  ],
  script: [
    { src: '/oneko.js', defer: true }
  ],
  meta: [
    { name: "title", content: "Hi I'm Mrbeenopro" },
    { name: "description", content: "Welcome to my homepage!" },

    // OG tags
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://mrbeeno.pro/" },
    { property: "og:title", content: "Hi I'm Mrbeenopro" },
    { property: "og:description", content: "Welcome to my homepage!" },
    { property: "og:image", content: "/assets/images/color.png" },

    // Twitter tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://mrbeeno.pro/" },
    { name: "twitter:title", content: "Hi I'm Mrbeenopro" },
    { name: "twitter:description", content: "Welcome to my homepage!" },
    { name: "twitter:image", content: "/assets/images/color.png" },
  ]
});
</script>
