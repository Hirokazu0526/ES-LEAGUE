<template>
  <div class="header">
    <nuxt-link to="/">
      <img
        id="logo"
        class="header__logo"
        src="~/assets/img/site-logo.png"
        alt="ロゴ"
      />
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
  height: 80px;
  background-color: #030012;
  padding: 12px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  &__logo {
    width: 35px;
    height: 35px;
  }
  &__btn {
    display: block;
  }
}
</style>
