<template>
  <div class="Header">
    <div class="Header__bar"></div>
    <div class="container">
      <div class="Header__contactIcons">
        <a href="https://www.linkedin.com/in/michel-sabbatini/" title="LinkedIn" target="_blank">
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Atomis14" title="GitHub" target="_blank">
          <img src="/icons/github.svg" alt="GitHub" />
        </a>
      </div>
      <div class="Header__nav">
        <a href="#projects" class="Header__navLink Header__navLink-projects" @click.prevent="scrollToSecion('projects')">Projects</a>
        <a href="#contact" class="Header__navLink Header__navLink-contact" @click.prevent="scrollToSecion('contact')">Contact</a >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSecion(anchor) {
      document.querySelector('#' + anchor).scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style lang="scss" scoped>
.Header {
  &__bar {
    @include gradient($color-blue, $color-green);
    height: 10px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
      @include gradient($color-green, $color-blue);
      animation-name: Gradient;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    @include md {
      margin-top: 20px;
    }
  }

  &__contactIcons {
    margin-left: -5px;
    a {
      padding: 5px;
      opacity: 0.4;
      transition: .4s opacity ease;
      &:hover {
        opacity: 0.8;
      }
    }
    img {
      width: 30px;
      height: 30px;
    }
  }

  &__nav {
    margin-right: -10px;
  }
  &__navLink {
    font-family: $font-family-serif;
    color: $color-text;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 15px;
    // hover effect
    &::after {
      opacity: 0.8;
    }
    @include hoverEffect(15px, 28px);
    &:hover {
      &::after {
        height: 10px;
      }
    }
    &-projects::after {
      @include gradient($color-blue, $color-green);
    }
    &-contact::after {
      @include gradient($color-green, $color-blue);
    }
  }
}
</style>
