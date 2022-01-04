<template>
  <div class="es-League">
    <esLeaguHeader class="header" />
    <Nuxt class="nuxt" />
    <esLeaguFooter class="footer" />
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
  background-color: #fff;
  font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic, sans-serif;
  // font-family: 'HNewYork';
}
.header {
  position: fixed;
  width: 100vw;
  z-index: 100;
}
.nuxt {
  padding-top: 95px;
  position: relative;
  background-color: #fff;
}
.footer {
  background-color: #000d1d;
  color: #fff;
}
</style>
