<template>
  <div class="header">
    <div class="header__container">
      <nuxt-link to="/">
        <h1>
          <img
            id="logo"
            class="header__logo"
            src="~/assets/img/logo/es_logo.svg"
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
    padding: 5px 0px 5px 15px;
    display: grid;
    grid-template-columns: 40px 1fr;
    justify-items: center;
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
@media screen and (min-width: 950px) {
  .header {
    &__container {
      max-width: 950px;
      margin: 0 auto;
    }
  }
}
@media screen and (max-width: 374px) {
  .header {
    &__container {
      padding: 5px 10px;
      gap: 10px;
    }
  }
}
</style>
