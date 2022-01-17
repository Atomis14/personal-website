<template>
  <div class="SmallProject" :class="`SmallProject--${type}`">
    <a
      :href="project.link"
      v-if="project.link"
      class="SmallProject__open"
      target="_blank"
    >
      <img src="/icons/open.svg" alt="open" />
    </a>
    <div class="SmallProject__content">
      <div class="SmallProject__titleContainer">
        <span class="SmallProject__title">{{ project.title }}</span>
        <span class="SmallProject__organization">{{
          project.organization
        }}</span>
      </div>
      <h2 class="SmallProject__name">{{ project.name }}</h2>
      <div class="SmallProject__description">{{ project.description }}</div>
      <div class="SmallProject__bottomContainer">
        <div class="SmallProject__year">{{ project.year }}</div>
        <div class="SmallProject__skills">{{ project.skills }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project', 'type']
};
</script>

<style lang="scss" scoped>
.SmallProject {
  position: relative;
  background-color: rgba($color: white, $alpha: 0.7);
  backdrop-filter: blur(30px);
  border-radius: 8px;
  box-shadow: $box-shadow-big;
  width: 100%;
  padding: 30px;
  @include sm {
    padding: 20px;
  }
  &--big {
    max-width: 600px;
    .SmallProject__title {
      margin-top: 1px;
    }
    @include md {
      max-width: none;
      width: calc(100% - #{$gutter * 2});
      margin: 0 auto;
      .SmallProject__title {
        margin-top: 0;
      }
    }
  }
  &--small {
    width: 48%;
    margin-top: 60px;
    @include md {
      width: 100%;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__open {
    position: absolute;
    right: 25px;
    top: 25px;
    opacity: 0.8;
    @include sm {
      right: 22px;
      top: 22px;
    }
    img {
      width: 25px;
      height: 25px;
      @include sm {
        width: 22px;
        height: 22px;
      }
    }
  }

  &__titleContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    margin-right: 40px;
    @include xs {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &__title {
    font-family: $font-family-serif;
    font-size: 1.1rem;
    margin-right: 5px;
  }
  &__organization {
    display: inline-block;
    font-family: $font-family-sans;
    font-size: 0.8rem;
    margin-bottom: 1px;
    @include xs {
      margin-top: 3px;
    }
  }

  &__name {
    font-size: 1.7rem;
    margin-bottom: 0;
    padding-top: 5px;
    margin-top: 0;
    @include md {
      padding-top: 6px;
    }
  }

  &__description {
    margin: 15px 0;
  }

  &__bottomContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: auto;
  }
  &__year {
    font-family: $font-family-serif;
    margin-right: 15px;
  }
  &__skills {
    font-size: 0.9rem;
    margin-top: 5px;
  }
}

@supports not (backdrop-filter: none) {
  .SmallProject {
    opacity: 1;
    background-color: white;
  }
}
</style>