<template>
  <div class="w-full max-w-4xl mx-auto py-6 font-mono">
    
    <!-- Section Heading -->
    <div class="mb-8">
      <div class="mb-2 text-xs text-opencode-mute">/etc/hosts/friends</div>
      <h1 class="text-xl font-bold tracking-tight mb-2 text-opencode-ink">
        [+] My friends
      </h1>
      <p class="text-opencode-body text-sm max-w-2xl">
      </p>
    </div>

    <!-- Webring Container -->
    <div class="p-6 rounded-none border border-opencode-hairline bg-opencode-canvas">
      <div class="flex flex-wrap gap-4 justify-start items-center">
        
        <NuxtLink to="https://prpl.wtf" rel="noopener" target="_blank" class="transition-opacity duration-300 hover:opacity-85">
          <NuxtImg
            src="/assets/images/88x31/prpl_wtf.gif"
            alt="prpl.wtf"
            width="88"
            height="31"
            densities="x1"
            class="border border-opencode-hairline bg-opencode-surface-soft p-0.5 image-crisp"
          />
        </NuxtLink>

        <NuxtLink to="https://h3l2f.qzz.io" rel="noopener" target="_blank" class="transition-opacity duration-300 hover:opacity-85">
          <NuxtImg
            src="/assets/images/88x31/h3l2f.png"
            alt="h3l2f.qzz.io"
            width="88"
            height="31"
            densities="x1"
            class="border border-opencode-hairline bg-opencode-surface-soft p-0.5 image-crisp"
          />
        </NuxtLink>

        <NuxtLink to="https://dsc.knualabs.icu/" rel="noopener" target="_blank" class="transition-opacity duration-300 hover:opacity-85">
          <NuxtImg
            src="/assets/images/88x31/thangmc2374.png"
            alt="thangmc2374"
            width="88"
            height="31"
            densities="x1"
            class="border border-opencode-hairline bg-opencode-surface-soft p-0.5 image-crisp"
          />
        </NuxtLink>

        <NuxtLink to="https://ftl2nd.com/" rel="noopener" target="_blank" class="transition-opacity duration-300 hover:opacity-85">
          <NuxtImg
            src="/assets/images/88x31/ftl.png"
            alt="ftl2nd.online"
            width="88"
            height="31"
            densities="x1"
            class="border border-opencode-hairline bg-opencode-surface-soft p-0.5 image-crisp"
          />
        </NuxtLink>

         <NuxtLink to="https://omhvn.vercel.app/" rel="noopener" target="_blank" class="transition-opacity duration-300 hover:opacity-85">
          <NuxtImg
            src="/assets/images/88x31/omh.png"
            alt="omhvn"
            width="88"
            height="31"
            densities="x1"
            class="border border-opencode-hairline bg-opencode-surface-soft p-0.5 image-crisp"
          />
        </NuxtLink>

      </div>
    </div>

    <!-- Return Link -->
    <div class="mt-16 text-center border-t border-opencode-hairline pt-6">
      <NuxtLink to="/" class="text-xs text-opencode-mute hover:text-opencode-ink">
        &larr; return to home console
      </NuxtLink>
    </div>

  </div>
</template>
