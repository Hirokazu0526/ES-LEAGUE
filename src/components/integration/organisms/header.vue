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
    </div>
  </div>
</template>

<script>
import globalNav from '~/components/integration/organisms/global-nav.vue'
export default {
  components: {
    globalNav,
  },
}
</script>

<style lang="scss" scoped>
.header {
  &__container {
    height: 80px;
    background-color: #000000;
    padding: 5px 5px 5px 10px;
    display: grid;
    grid-template-columns: 40px 1fr;
    justify-items: stretch;
    align-items: center;
  }

  &__logo {
    width: 34px;
    height: 61px;
  }
  &__btn {
    display: block;
  }
}
</style>
