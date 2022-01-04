<template>
  <div class="header">
    <div class="header__container">
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
  &__container {
    height: 95px;
    background-color: #000000;
    padding: 12px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

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
