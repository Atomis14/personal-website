<template>
  <div class="EducationEntry">
    <div class="EducationEntry__time">{{ education.time }}</div>
    <div class="EducationEntry__degree">{{ education.degree }}</div>
    <div class="EducationEntry__discipline">{{ education.discipline }}</div>
    <div class="EducationEntry__subtitle">{{ education.subtitle }}</div>
    <div class="EducationEntry__organization">{{ education.organization }}</div>
  </div>
</template>

<script>
  export default {
    props: ['education']
  }
</script>

<style lang="scss" scoped>
.EducationEntry {
  width: 50%;
  margin-top: 20px;
  @include md {
    width: 100%;
  }

  &__time {
    font-family: $font-family-serif;
    margin-bottom: 5px;
  }

  &__discipline {
    font-weight: $font-weight-bold;
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  &__subtitle {
    font-size: 0.9rem;
  }

  &__organization {
    margin-top: 5px;
  }
}
</style>