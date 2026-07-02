<template>
  <div class="w-full max-w-4xl mx-auto py-6 font-mono">
    
    <!-- Section Heading -->
    <div class="mb-8">
      <div class="mb-2 text-xs text-opencode-mute">/usr/bin/sponsor</div>
      <h1 class="text-xl font-bold tracking-tight mb-2 text-opencode-ink">
        [+] Sponsor Manifest
      </h1>
      <p class="text-opencode-body text-sm max-w-2xl">
        Support the development of open-source projects, servers, and scripts maintained by Mrbeenopro.
      </p>
    </div>

    <!-- Donation Methods Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      
      <!-- PayPal Card -->
      <div class="p-6 rounded-none border border-opencode-hairline bg-opencode-canvas flex flex-col justify-between h-full">
        <div>
          <div class="flex items-center gap-2 mb-4 border-b border-opencode-hairline pb-3">
            <span class="w-2.5 h-2.5 bg-opencode-accent inline-block rounded-full"></span>
            <h2 class="text-sm font-bold text-opencode-ink uppercase tracking-wider">&lt;PayPal Method&gt;</h2>
          </div>
          <p class="text-xs text-opencode-mute mb-6 leading-relaxed">
            Support globally via PayPal. You can send donations directly to the email below or click the button to proceed.
          </p>
          <div class="bg-opencode-surface-soft border border-opencode-hairline p-3 mb-6 flex flex-col gap-1.5 rounded-[4px]">
            <div class="text-[11px] text-opencode-mute">PayPal Account Email:</div>
            <div class="text-sm text-opencode-ink font-bold break-all">mrbeenopro@gmail.com</div>
          </div>
        </div>
        <a 
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=mrbeenopro@gmail.com&item_name=Support+Mrbeenopro&currency_code=USD" 
          target="_blank" 
          rel="noopener"
          class="w-full text-center px-4 py-2.5 bg-opencode-ink text-opencode-canvas text-xs font-semibold uppercase tracking-wider rounded-[4px] border border-opencode-ink hover:bg-opencode-ink-deep hover:text-black transition-all block font-mono"
        >
          [ Donate via PayPal ]
        </a>
      </div>

      <!-- VietQR Card -->
      <div class="p-6 rounded-none border border-opencode-hairline bg-opencode-canvas flex flex-col items-center">
        <div class="w-full flex items-center gap-2 mb-4 border-b border-opencode-hairline pb-3">
          <span class="w-2.5 h-2.5 bg-opencode-success inline-block rounded-full"></span>
          <h2 class="text-sm font-bold text-opencode-ink uppercase tracking-wider">&lt;VietQR Method&gt;</h2>
        </div>
        <p class="text-xs text-opencode-mute mb-4 text-left w-full leading-relaxed">
          Support locally via banking transfer using the QR code below (Scan via banking app):
        </p>
        <div class="bg-white p-3 border border-opencode-hairline-strong/20 shadow-md mb-4 rounded-[4px]">
          <NuxtImg 
            src="/assets/images/sponor/qr.png" 
            alt="VietQR Code" 
            class="w-48 h-48 md:w-52 md:h-52 object-contain image-crisp"
          />
        </div>
        <div class="w-full bg-opencode-surface-soft border border-opencode-hairline p-3 text-xs space-y-1 rounded-[4px]">
          <div><span class="text-opencode-mute">Bank:</span> <span class="text-opencode-ink font-medium">Military Bank (MB Bank)</span></div>
          <div><span class="text-opencode-mute">Account Number:</span> <span class="text-opencode-ink font-medium font-mono">216****895</span></div>
          <div><span class="text-opencode-mute">Account Holder:</span> <span class="text-opencode-ink font-medium">HUYNH VINH KHANG</span></div>
        </div>
      </div>

    </div>

    <!-- Sponsor List Grid Section -->
    <div class="mb-12">
      <div class="mb-4 border-b border-opencode-hairline pb-2 flex justify-between items-center">
        <h2 class="text-sm font-bold text-opencode-ink uppercase tracking-wider">[ Active Sponsors ]</h2>
        <span class="text-[10px] text-opencode-mute">tty/sponsors</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Dynamic Sponsor Cards -->
        <component
          :is="sponsor.link ? 'a' : 'div'"
          v-for="sponsor in sponsors"
          :key="sponsor.name"
          :href="sponsor.link || undefined"
          :target="sponsor.link ? '_blank' : undefined"
          :rel="sponsor.link ? 'noopener' : undefined"
          class="p-4 rounded-[4px] border border-opencode-hairline bg-opencode-canvas flex items-center justify-between gap-4 glow-matrix-hover scanline-container"
          :class="{ 'block cursor-pointer': sponsor.link }"
        >
          <div class="flex items-center gap-3">
            <!-- Avatar Frame -->
            <div class="w-10 h-10 rounded-[4px] border border-opencode-hairline bg-opencode-surface-soft p-1.5 shrink-0 flex items-center justify-center">
              <!-- Custom Image Avatar -->
              <NuxtImg 
                v-if="sponsor.avatarUrl" 
                :src="sponsor.avatarUrl" 
                :alt="sponsor.name" 
                class="w-full h-full object-cover rounded-[2px]" 
              />
              
              <!-- Built-in SVGs -->
              <svg v-else-if="sponsor.avatarType === 'skull'" class="w-full h-full" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
                <path d="M2 1h4v1H2zm-1 1h6v1H1zm0 1h6v1H1zm0 1h6v1H1zm1 1h4v1H2zm0 1h1v1H2zm2 0h1v1H4zm2 0h1v1H6z" fill="#ff3b30" />
              </svg>
              
              <svg v-else-if="sponsor.avatarType === 'server'" class="w-full h-full" viewBox="0 0 8 8" xmlns="http://www/w3.org/2000/svg" shape-rendering="crispEdges">
                <path d="M1 1h6v4H1zm0 5h6v1H1zm2 1h2v1H3z" fill="#4ba3ff" /><path d="M2 2h4v2H2z" fill="#161414" />
              </svg>
              
              <svg v-else-if="sponsor.avatarType === 'cat'" class="w-full h-full" viewBox="0 0 8 8" xmlns="http://www/w3.org/2000/svg" shape-rendering="crispEdges">
                <path d="M1 1h1v2H1zm5 0h1v2H6zm-4 2h4v3H2zm0 3h1v1H2zm2 0h1v1H4zm2 0h1v1H6z" fill="#bf5af2" />
              </svg>
              
              <!-- Fallback Initials -->
              <span v-else class="text-xs font-bold uppercase text-opencode-mute font-mono">
                {{ sponsor.name.slice(0, 2) }}
              </span>
            </div>

            <!-- Name and Handle -->
            <div class="flex flex-col">
              <span class="text-sm font-bold text-opencode-ink">{{ sponsor.name }}</span>
              <span class="text-xs text-opencode-mute">{{ sponsor.handle || ('@' + sponsor.name) }}</span>
            </div>
          </div>

          <!-- Sponsor Tag and Amount -->
          <div class="text-right flex flex-col justify-center items-end">
            <span class="text-xs text-opencode-danger flex items-center gap-1 font-mono">
              <svg class="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="2" height="1" /><rect x="8" y="2" width="2" height="1" /><rect x="1" y="3" width="4" height="2" /><rect x="7" y="3" width="4" height="2" /><rect x="2" y="5" width="8" height="2" /><rect x="3" y="7" width="6" height="1" /><rect x="4" y="8" width="4" height="1" /><rect x="5" y="9" width="2" height="1" />
              </svg>
              <span>Sponsor</span>
            </span>
            <span class="text-sm font-bold text-opencode-success font-mono">${{ sponsor.amount.toFixed(2) }}</span>
          </div>
        </component>
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

<script setup>
import sponsors from '~/data/sponsors.json';

useHead({
  title: "Sponsor mrbeenopro",
  meta: [
    { name: "description", content: "Sponsor mrbeenopro for project maintenance and development." }
  ]
});
</script>
