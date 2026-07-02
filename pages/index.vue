<template>
  <div class="space-y-24">
    
    <!-- Hero Block Section with Avatar -->
    <section class="w-full pt-6">
      <div class="flex flex-col md:flex-row items-start gap-6 md:gap-8 mb-10">
        <!-- Avatar Container -->
        <div class="shrink-0">
          <NuxtImg 
            src="/assets/images/color.png" 
            alt="Mrbeenopro" 
            class="w-32 h-32 md:w-36 md:h-36 rounded-[4px] border border-opencode-hairline-strong object-cover shadow-lg bg-opencode-surface-card"
          />
        </div>
        
        <!-- Bio text -->
        <div class="flex-1 space-y-4 text-left">
          <!-- Hero Headline -->
          <h1 class="text-[28px] md:text-[36px] font-bold leading-tight tracking-normal text-opencode-ink font-mono">
            Hi, I'm <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent inline-block">Mrbeenopro</span>
          </h1>

          <p class="text-opencode-ink-deep text-sm md:text-[16px] leading-relaxed max-w-2xl font-mono">
            A backend and frontend developer (and sometimes a hardware repairer) and, uh.., welcome to my homepage, and I also really love cats 🐈.
          </p>
        </div>
      </div>

      <!-- Centerpiece TUI Terminal Mockup (Skills Showcase) -->
      <div class="w-full">
        <TerminalMockup />
      </div>
    </section>

  </div>
</template>

<script setup>
import TerminalMockup from "~/components/TerminalMockup.vue";
</script>
