<template>
  <div class="header">
    <nuxt-link to="/">
      <h1>
        <img
          id="logo"
          class="header__logo"
          src="~/assets/img/es_logo.svg"
          alt="ES LEAGUE LOGO"
        />
      </h1>
    </nuxt-link>
    <global-nav />
    <humberger class="header__btn" />
  </div>
</template>

<script>
import humberger from '~/components/integration/atoms/humberger.vue'
import globalNav from '~/components/integration/organisms/global-nav.vue'
export default {
  components: {
    humberger,
    globalNav,
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 95px;
  background-color: #000d1d;
  padding: 12px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;

  h1 {
    margin: 3px 0 0;
  }
  &__logo {
    width: 48px;
    height: 84px;
  }
  &__btn {
    display: block;
  }
}
</style>
