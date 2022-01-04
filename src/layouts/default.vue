<template>
  <div>
    <esLeaguHeader class="header" />
    <Nuxt />
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
.header {
  position: fixed;
  width: 100vw;
  z-index: 100;
}
</style>
