<template>
  <div class="Projects" id="projects">
    <ProjectsBigProject v-for="(project, index) in bigProjects" :key="project.slug" :project="project" :index="index" />
    <div class="Projects__smallProjectsContainer container">
      <ProjectsSmallProject v-for="(project, index) in smallProjects" :key="project.slug" :project="project" :index="index" type="small" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bigProjects: [],
      smallProjects: []
    };
  },

  async fetch() {
    this.bigProjects = await this.$content('projects').limit(3).fetch();
    this.smallProjects = await this.$content('projects').skip(3).fetch();
  },
};
</script>

<style lang="scss" scoped>
.Projects {
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  @include md {
    // margin-top: 150px;
  }
  @include sm {
    margin-top: 110px;
  }

  &__smallProjectsContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: -150px;
    @include lg {
      margin-top: -180px;
    }
    @include md {
      margin-top: 0;
    }
  }
}
</style>