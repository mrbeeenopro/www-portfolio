<template>
  <div class="grid grid-cols-2 gap-4">
    <ProjectCard
      title="oldcord"
      description="A theme for Discord that brings the old ui back"
      cover="/assets/images/projects/banner.png"
      href="https://github.com/mrbeeenopro/oldcord"
    />    
    <ProjectCard
      title="Pterodactyl vi language"
      description="Vietnamese language pack for Pterodactyl"
      cover="/assets/images/projects/pterodactyl-vi.png"
      href="https://github.com/mrbeeenopro/pterodactyl-vi"
    />
    <ProjectCard
      title="lemem windows"
      description="windows 11 virtual machine on pterodactyl"
      cover="/assets/images/projects/windows11.png"
      href="https://github.com/mrbeeenopro/lemem_windows"
    />
    <ProjectCard
      title="lemem developers"
      description="A community of developers in Vietnam"
      cover="/assets/images/projects/Lemem_Developer.png"
      href="https://discord.gg/AqrUvWkxU8"
    />    
  </div>
</template>

<script>
import ProjectCard from "~/components/ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
};
</script>
