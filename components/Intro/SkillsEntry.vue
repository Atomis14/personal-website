<template>
  <div class="SkillsEntry">
    <nuxt-img :src="`/images/skills/${skill.slug}.png`" :width="parseInt(skill.width)+50" :style="{ width: skill.width + 'px' }"/>
  </div>
</template>

<script>
export default {
  props: ['skill']
};
</script>

<style lang="scss" scoped>
.SkillsEntry {
  margin: 10px;
}
</style>