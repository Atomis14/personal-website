<template>
  <div class="Footer" id="contact">
    <div class="container">
      <div class="Footer__icons">
        <a href="https://www.linkedin.com/in/michel-sabbatini/" title="LinkedIn" target="_blank">
          <img src="/icons/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://github.com/Atomis14" title="GitHub" target="_blank">
          <img src="/icons/github.svg" alt="github" />
        </a>
      </div>
      <a href="mailto:me@msabbatini.ch" class="Footer__mail">
        me@msabbatini.ch
      </a>
      <div class="Footer__copyright">
        &copy; 2021 Michel Sabbatini | Built with
        <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>
      </div>
    </div>
    <div class="Footer__bar"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 150px;
  clear: both;
  @include md {
    margin-top: 100px;
  }

  &__icons {
    a {
      display: inline-block;
      padding: 10px;
      opacity: 0.4;
      transition: .4s opacity ease;
      &:hover {
        opacity: 0.8;
      }
    }
    img {
      width: 50px;
      height: 50px;
      @include md {
        width: 40px;
        height: 40px;
      }
    }
  }

  &__mail {
    display: inline-block;
    text-align: center;
    font-size: 1.5rem;
    font-family: $font-family-serif;
    margin: 15px 0 30px;
    // hover effect
    &::after {
      opacity: 0.6;
    }
    @include hoverEffect();
    &::after {
      @include gradient($color-orange, $color-purple);
    }
  }

  &__copyright {
    margin: 20px 0;
    color: $color-text-light;
    a {
      color: $color-text-light;
    }
  }

  &__bar {
    position: relative;
    width: 100%;
    height: 10px;
    @include gradient($color-orange, $color-purple);
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
      @include gradient($color-purple, $color-orange);
      animation-name: Gradient;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
}
</style>