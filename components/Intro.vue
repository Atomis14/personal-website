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
            Fullstack Web Developer @
            <a href="https://www.inware.ch" target="_blank">Inware AG</a>
          </div>
          <div>
            Aspiring Computer Science Student @
            <a href="https://www.uzh.ch" target="_blank">
              University of Zurich
            </a>
          </div>
        </div>
      </div>
    </div>
    <nuxt-img src="/images/introbild.jpg" width="600" draggable="false" class="Intro__image" />
    <div class="container Intro__curriculum">
      <IntroEducation />
      <IntroExperience />
      <IntroSkills />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Intro {

  h1 {
    margin-top: 15vh;
    font-size: 6rem;
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

  &__image {
    width: 450px;
    height: 600px;
    max-width: 100%;
    margin-top: -200px;
    background-color: lightblue;
    float: right;
    object-fit: cover;
    object-position: center right;
    z-index: -1;
    position: relative;
    user-select: none;
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

  &__curriculum {
    margin-top: 15vh;
    @include md {
      margin-top: 100px;
    }
    @include xs {
      margin-top: 120px;
    }
  }
}
</style>