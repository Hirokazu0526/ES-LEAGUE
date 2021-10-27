<template>
  <div class="es-League">
    <esLeaguHeader class="header" />
    <Nuxt class="nuxt" />
    <div class="footer">footer</div>
  </div>
</template>

<script>
import esLeaguHeader from '~/components/integration/organisms/header.vue'

export default {
  components: {
    esLeaguHeader,
  },
}
</script>

<style lang="scss" scoped>
.es-League {
  background: linear-gradient(#000d1d, #022c60);
}
.header {
  position: fixed;
  width: 100vw;
}
.nuxt {
  padding-top: 80px;
}
.footer {
  height: 80px;
  background-color: #000d1d;
  color: #fff;
}
</style>
