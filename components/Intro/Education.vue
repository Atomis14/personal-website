<template>
  <div class="Education">
    <div class="Education__icon"></div>
    <div class="Education__content">
      <IntroEducationEntry v-for="education in educations" :key="education.slug" :education="education" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        educations: []
      }
    },

    async fetch() {
      this.educations = await this.$content('education').fetch(); 
    }
  }
</script>

<style lang="scss" scoped>
.Education {
  margin-top: 15vh;
  @include md {
    margin-top: -100px;
  }

  &__icon {
    width: 170px;
    height: 170px;
    background-image: url('/icons/school.svg');
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