<template>
  <div class="Experience">
    <div class="Experience__icon"></div>
    <div class="Experience__content">
      <IntroExperienceEntry v-for="experience in experiences" :key="experience.slug" :experience="experience" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        experiences: []
      }
    },

    async fetch() {
      this.experiences = await this.$content('experience').fetch();
    }
  }
</script>

<style lang="scss" scoped>
.Experience {
  margin-top: 6vh;
  float: right;
  width: 45%;
  @include md {
    float: none;
    width: 100%;
    margin-top: 50px;
  }

  &__icon {
    width: 170px;
    height: 170px;
    background-image: url('/icons/work.svg');
    background-size: cover;
    @include sm {
      width: 130px;
      height: 130px;
    }
  }

  &__content {
    margin-top: -100px;
    margin-left: 80px;
    @include sm {
      margin-top: -80px;
      margin-left: 60px;
    }
    @include xs {
      margin-top: -70px;
      margin-left: 30px;
    }
  }
}
</style>