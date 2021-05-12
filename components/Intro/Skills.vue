<template>
  <div class="Skills">
    <div class="Skills__icon"></div>
    <div class="Skills__content">
      <IntroSkillsEntry
        v-for="skill in skills"
        :key="skill.slug"
        :skill="skill"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [],
    };
  },

  async fetch() {
    this.skills = await this.$content('skills').fetch();
  },
};
</script>

<style lang="scss" scoped>
.Skills {
  margin-top: 20vh;
  @include md {
    margin-top: 30px;
  }

  &__icon {
    width: 170px;
    height: 170px;
    background-image: url('/icons/skills.svg');
    background-size: cover;
    @include sm {
      width: 130px;
      height: 130px;
    }
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: -90px;
    margin-left: 50px;
    width: 100%;
    max-width: 300px;
    @include sm {
      margin-top: -60px;
      margin-left: 30px;
    }
    @include xs {
      margin-left: 0;
    }
  }
}
</style>