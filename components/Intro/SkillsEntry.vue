<template>
  <div class="SkillsEntry">
      <nuxt-img :src="`/images/skills/${skill.slug}.png`" :width="skill.width" :alt="skill.title" />
  </div>
</template>

<script>
  export default {
    props: ['skill']
  }
</script>

<style lang="scss" scoped>
.SkillsEntry {
  margin: 10px;
}
</style>