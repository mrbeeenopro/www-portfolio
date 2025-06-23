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
      title="beecloud"
      description="a small hosting from vietnam"
      cover="/assets/images/projects/beecloud.png"
      href="https://beecloud.vn"
    />
    <ProjectCard
      title="lemem developers"
      description="A community of developers in Vietnam"
      cover="/assets/images/projects/Lemem_Developer.png"
      href="https://discord.gg/lememdev"
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
