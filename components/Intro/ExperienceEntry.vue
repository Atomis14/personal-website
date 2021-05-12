<template>
  <div class="ExperienceEntry">
    <div class="ExperienceEntry__time">{{ experience.time }}</div>
    <div class="ExperienceEntry__title">{{ experience.title }}</div>
    <div class="ExperienceEntry__company">{{ experience.company }}</div>
  </div>
</template>

<script>
  export default {
    props: ['experience']
  }
</script>

<style lang="scss" scoped>
.ExperienceEntry {
  margin-top: 20px;

  &__time {
    font-family: $font-family-serif;
    margin-bottom: 5px;
  }

  &__title {
    font-weight: $font-weight-bold;
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  &__company {
    margin-top: 5px;
  }
}
</style>