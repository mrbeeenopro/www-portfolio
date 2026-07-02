<template>
  <div class="w-full max-w-4xl mx-auto py-6 font-mono">
    
    <!-- Section Heading MD: 16px bold -->
    <div class="mb-8">
      <div class="mb-2 text-xs text-opencode-mute">/usr/bin/projects</div>
      <h1 class="text-xl font-bold tracking-tight mb-2 text-opencode-ink">
        [+] Software Manifest
      </h1>
      <p class="text-opencode-body text-sm max-w-2xl">
      </p>
    </div>

    <div class="border-t border-opencode-hairline my-6"></div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.href"
        :title="project.title"
        :description="project.description"
        :cover="project.cover"
        :href="project.href"
      />
    </div>

    <!-- Return links -->
    <div class="mt-16 text-center border-t border-opencode-hairline pt-6">
      <NuxtLink to="/" class="text-xs text-opencode-mute hover:text-opencode-ink">
        &larr; return to home console
      </NuxtLink>
    </div>

  </div>
</template>

<script setup>
import ProjectCard from "~/components/ProjectCard.vue";
import projects from "~/data/projects.json";
</script>
