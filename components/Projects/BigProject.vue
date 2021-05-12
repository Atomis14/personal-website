<template>
  <div class="BigProject">
    <div class="BigProject__content">
      <nuxt-img
        :src="`/images/projects/${project.slug}.png`"
        width="600px"
        class="BigProject__image"
        draggable="false"
        :alt="project.name"
        loading="lazy"
      />
      <ProjectsSmallProject :project="project" type="big" />
    </div>
    <div
      class="BigProject__number"
      :style="`background-image: url('/icons/${index + 1}.svg');`"
      :class="`BigProject__number--${index + 1}`"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['project', 'index'],
};
</script>

<style lang="scss" scoped>
.BigProject {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &:not(:first-child) {
    margin-top: -150px;
    @include xl {
      margin-top: -50px;
    }
    @include md {
      margin-top: 80px;
    }
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;
    align-self: flex-end;
    .BigProject__image {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      align-self: flex-end;
    }
    .SmallProject {
      transform: translate(-30%, -50%);
    }
  }
  &:nth-child(even) {
    flex-direction: row;
    align-self: flex-start;
    .BigProject__image {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    .SmallProject {
      transform: translate(30%, -50%);
    }
  }
  .SmallProject {
    @include md {
      transform: none !important;
      margin-top: -80px !important;
    }
    @include xs {
      margin-top: -40px !important;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    @include md {
      width: 100%;
    }
  }

  &__image {
    width: 600px;
    height: 400px;
    object-fit: cover;
    background-color: lightgrey;
    box-shadow: rgba($color: #000000, $alpha: 0.2) 0px 2px 5px;
    user-select: none;
    @include md {
      width: 80%;
    }
    @include sm {
      width: 85%;
      height: 400px;
    }
    @include xs {
      height: 220px;
    }
  }

  &__number {
    width: 150px;
    height: 150px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    margin-bottom: 150px;
    @include lg {
      width: 110px;
      height: 110px;
    }
    &--1 {
      opacity: 0.7;
    }
    &--2 {
      opacity: 0.6;
    }
    &--3 {
      opacity: 0.5;
    }
    @include md {
      display: none;
    }
  }
}
</style>