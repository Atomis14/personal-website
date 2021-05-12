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
    <div class="Intro__image"></div>
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
    background: url('~static/images/introbild.jpg');
    background-size: cover;
    background-position: center right;
    @include md {
      float: none;
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