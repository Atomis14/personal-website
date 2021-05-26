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
    },

    /* beforeMount() {
      window.addEventListener('scroll', function(e) {
         const target = document.querySelector('.Experience__content');
         var scrolled = window.pageYOffset;
         var rate = scrolled * -0.05;
         target.style.transform = `translate3d(0px, ${rate}px, 0px)`;
      });
    } */
  }
</script>

<style lang="scss" scoped>
.Experience {
  margin-top: 4vh;
  float: right;
  width: 45%;
  @include md {
    float: none;
    width: 100%;
    margin-top: 50px;
  }
  @include sm {
    //margin-top: 20px;
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
    @include md {
      transform: none !important;
      margin-top: -100px;
    }
    @include sm {
      margin-top: -70px;
      margin-left: 60px;
    }
    @include xs {
      margin-left: 30px;
    }
  }
}
</style>