<template>
  <div class="relative w-full overflow-hidden rounded-2xl border border-vercel-border bg-vercel-dark p-[1px] shadow-[0_0_50px_rgba(255,255,255,0.03)] transition-all duration-500 hover:border-neutral-700">

    <div 
      class="absolute inset-0 w-[300%] h-[300%] -top-full -left-full bg-[conic-gradient(from_0deg,transparent_30%,#ffffff_50%,transparent_70%)] animate-[spin_8s_linear_infinite] pointer-events-none opacity-40 mix-blend-screen"
    ></div>
    
    <!-- Dashboard inner content panel -->
    <div class="relative w-full h-full bg-[#030303] rounded-[15px] p-6 md:p-8 z-10">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* Keyframes are defined globally in main.css, but spin is standard */
</style>
