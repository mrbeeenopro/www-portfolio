<template>
  <div :class="[customClass, 'group relative w-full overflow-hidden rounded-[4px] border border-opencode-hairline bg-opencode-canvas glow-matrix-hover scanline-container']">
    <NuxtLink :to="href" target="_blank" class="block w-full">
      
      <!-- Grayscale Cover Image with slight overlay hint -->
      <div class="relative h-28 w-full overflow-hidden border-b border-opencode-hairline bg-opencode-surface-soft">
        <NuxtImg
          :src="cover"
          width="360"
          height="112"
          class="object-cover w-full h-full filter grayscale contrast-110 opacity-85 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102"
        />
        <!-- Accent Link Indicator -->
        <span
          v-if="href"
          class="absolute bottom-2 right-2 bg-opencode-ink text-opencode-canvas text-[10px] font-mono font-bold px-2 py-1 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          [visit site]
        </span>
      </div>

      <!-- Description content section in monospaced face -->
      <div class="p-4 space-y-2">
        <div class="flex items-center justify-between gap-2">
          <b class="text-opencode-ink font-bold text-sm select-none">{{ title }}</b>
          <span class="text-xs text-opencode-mute font-mono">⸺</span>
        </div>
        <p class="text-opencode-body font-mono text-xs leading-relaxed line-clamp-2">
          {{ description }}
        </p>
        <div class="pt-2 flex items-center justify-between text-[11px] text-opencode-mute font-mono">
          <span class="underline group-hover:text-opencode-ink">learn more &rarr;</span>
          <span class="text-opencode-stone">4.0 KB</span>
        </div>
      </div>

    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: false,
  },
  customClass: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
