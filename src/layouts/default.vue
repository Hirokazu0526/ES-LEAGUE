<template>
  <div class="es-League">
    <esLeaguHeader class="header" />
    <Nuxt class="nuxt" />
    <esLeaguFooter />
  </div>
</template>

<script>
import esLeaguHeader from '~/components/integration/organisms/header.vue'
import esLeaguFooter from '~/components/integration/organisms/footer.vue'

export default {
  components: {
    esLeaguHeader,
    esLeaguFooter,
  },
}
</script>

<style lang="scss" scoped>
.es-League {
  background-color: #00091a;
}
.header {
  position: fixed;
  width: 100vw;
  z-index: 100;
}
.nuxt {
  padding-top: 95px;
  position: relative;
  background: url(~/assets/img/background-line.png) 0% 20%;
  background-size: 100%;
  z-index: 10;
}
.footer {
  height: 80px;
  background-color: #000d1d;
  color: #fff;
}
</style>
