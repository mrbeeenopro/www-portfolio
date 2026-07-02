<template>
  <div class="w-full bg-opencode-surface-dark text-white rounded-none p-6 md:p-8 font-mono border border-opencode-hairline-strong shadow-lg">
    
    <!-- Terminal Header (Mac Window Style mockup) -->
    <div class="flex items-center justify-between border-b border-opencode-hairline-strong pb-4 mb-6">
      <div class="flex items-center gap-1.5">
        <span class="w-3 h-3 rounded-full bg-opencode-danger inline-block"></span>
        <span class="w-3 h-3 rounded-full bg-opencode-warning inline-block"></span>
        <span class="w-3 h-3 rounded-full bg-opencode-success inline-block"></span>
        <span class="text-xs text-opencode-ash ml-2">skill@mrbeenopro</span>
      </div>
      <div class="text-[10px] text-opencode-ash bg-opencode-surface-dark-elevated px-2 py-0.5 rounded-[4px] border border-opencode-hairline-strong">
        tty/1
      </div>
    </div>

    <!-- Main Terminal Content Area -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-opencode-ash">
      <!-- Left Column: Specs -->
      <div class="space-y-2 border-b md:border-b-0 md:border-r border-opencode-hairline-strong/30 pb-6 md:pb-0 pr-0 md:pr-6">
        <div class="text-white font-bold mb-2">&lt;Core Technologies&gt;</div>
        <div>[x] <span class="text-white font-medium">Languages:</span> PHP, GO, Rust / TS, Python, Shell</div>
        <div>[x] <span class="text-white font-medium">Frontend:</span> Vue 3, Nuxt 3, TailwindCSS</div>
        <div>[x] <span class="text-white font-medium">Backend:</span> Node.js, Laravel,REST APIs</div>
        <div>[x] <span class="text-white font-medium">Platforms:</span> Linux, Docker, Git</div>
        <div class="flex items-center gap-1.5 flex-wrap">
          <span>[x]</span>
          <span class="text-white font-medium">Working on:</span>
          <a href="https://atakehosting.com" target="_blank" rel="noopener" class="inline-flex items-center gap-1 text-white hover:text-purple-300 transition-colors duration-200">
            <img src="https://pub-e9826afc5f6f44b6896664aafb104826.r2.dev/assets/atakelogo.png" class="w-4 h-4 rounded-sm object-contain" alt="Atakehosting Logo" />
            <span class="underline">Atakehosting</span>
          </a>
          <span class="text-opencode-mute">(lememhost, minemumi)</span>
        </div>
        <div class="flex items-center gap-2">
          <span>[x]</span>
          <span class="text-white font-medium">Uptime:</span> 
          <span class="text-[#bf5af2]">
            <AgeCounter
              :birthTimestamp="1227225600000"
              :width="110"
              :height="18"
              :fontSize="14"
              textColor="#bf5af2"
              fontFamily="JetBrains Mono, monospace"
            />
          </span>
          <span>years</span>
        </div>
      </div>

      <!-- Right Column: WakaTime Coding Languages -->
      <div class="space-y-3 font-mono text-xs">
        <div class="text-white font-bold mb-2">&lt;Languages / WakaTime&gt;</div>
        
        <div class="space-y-3">
          <!-- TypeScript -->
          <div>
            <div class="flex flex-wrap justify-between gap-x-2 gap-y-0.5 mb-1">
              <span class="text-white font-semibold">Python</span>
              <span class="text-[#3897ff]">218 hrs (51.6%)</span>
            </div>
            <div class="w-full bg-opencode-surface-dark-elevated h-2.5 rounded-none border border-opencode-hairline-strong/30 overflow-hidden">
              <div class="bg-[#3897ff] h-full" style="width: 100%"></div>
            </div>
          </div>
          
          <!-- Rust -->
          <div>
            <div class="flex flex-wrap justify-between gap-x-2 gap-y-0.5 mb-1">
              <span class="text-white font-semibold">Rust</span>
              <span class="text-[#f0a988]">162 hrs (38.2%)</span>
            </div>
            <div class="w-full bg-opencode-surface-dark-elevated h-2.5 rounded-none border border-opencode-hairline-strong/30 overflow-hidden">
              <div class="bg-[#f0a988] h-full" style="width: 57%"></div>
            </div>
          </div>
          
          <!-- JavaScript -->
          <div>
            <div class="flex flex-wrap justify-between gap-x-2 gap-y-0.5 mb-1">
              <span class="text-white font-semibold">PHP</span>
              <span class="text-[#f5e064]">130 hrs (30.7%)</span>
            </div>
            <div class="w-full bg-opencode-surface-dark-elevated h-2.5 rounded-none border border-opencode-hairline-strong/30 overflow-hidden">
              <div class="bg-[#f5e064] h-full" style="width: 27%"></div>
            </div>
          </div>
          
          <!-- PHP -->
          <div>
            <div class="flex flex-wrap justify-between gap-x-2 gap-y-0.5 mb-1">
              <span class="text-white font-semibold">Reacts</span>
              <span class="text-[#6b7eb8]">30 hrs (7.0%)</span>
            </div>
            <div class="w-full bg-opencode-surface-dark-elevated h-2.5 rounded-none border border-opencode-hairline-strong/30 overflow-hidden">
              <div class="bg-[#6b7eb8] h-full" style="width: 9%"></div>
            </div>
          </div>

          <!-- Other -->
          <div>
            <div class="flex flex-wrap justify-between gap-x-2 gap-y-0.5 mb-1 text-[11px]">
              <span class="text-opencode-mute">Other (Bash, JSON, YAML)</span>
              <span class="text-opencode-mute">30 hrs (7.1%)</span>
            </div>
            <div class="w-full bg-opencode-surface-dark-elevated h-2 rounded-none border border-opencode-hairline-strong/20 overflow-hidden">
              <div class="bg-[#8c8989] h-full" style="width: 7%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import AgeCounter from "~/components/AgeCounter.vue";
</script>
