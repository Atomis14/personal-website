<template>
  <div class="Intro">
    <div class="container">
      <div class="Intro__text">
        <h1>
          <span>Michel</span>
          <span>Sabbatini</span>
        </h1>
        <div class="Intro__tagline">
          <div>
            Computer Science Student @
            <a href="https://www.uzh.ch" target="_blank">
              University of Zurich
            </a>
          </div>
          <div>Fullstack Web Developer</div>
        </div>
      </div>
    </div>
    <div class="Intro__imageContainer">
      <nuxt-img
        src="/images/introimage.jpg"
        width="600"
        draggable="false"
        class="Intro__image"
        alt="Intro image"
      />
    </div>
    <div class="container Intro__curriculum">
      <IntroEducation />
      <IntroExperience />
      <IntroSkills />
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.Intro {
  h1 {
    margin-top: 15vh;
    font-size: 6rem;
    animation: title 0.8s ease;
    @include md {
      font-size: 5rem;
      margin-top: 100px;
    }
    @include sm {
      font-size: 4rem;
      margin-top: 50px;
    }
    span {
      display: block;
      &:last-child {
        margin-top: -1.5rem;
        @include md {
          margin-top: -1rem;
        }
        @include sm {
          margin-top: -0.5rem;
        }
      }
    }
  }

  &__tagline {
    font-size: 1.3rem;
    margin: 20px 0;
    font-family: $font-family-serif;
    @include sm {
      margin: 10px 0;
    }
    div {
      margin-bottom: 5px;
    }
  }

  &__imageContainer {
    position: relative;
    overflow: hidden;
    width: 450px;
    height: 600px;
    margin-top: -200px;
    max-width: 100%;
    float: right;
    z-index: -1;
    @include md {
      float: none;
      display: block;
      margin-top: -100px;
      margin-left: auto;
    }
    @include sm {
      margin-top: 0;
      margin-top: 60px;
    }
    @include xs {
      width: calc(100% - #{$gutter});
      height: 500px;
    }
  }
  &__image {
    width: 100%;
    height: 100%;
    background-color: lightblue;
    object-fit: cover;
    object-position: center right;
    position: relative;
    user-select: none;
  }

  &__curriculum {
    margin-top: 15vh;
    @include md {
      margin-top: 100px;
    }
    @include xs {
      margin-top: 70px;
    }
  }
}
</style>