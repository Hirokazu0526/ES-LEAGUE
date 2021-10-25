<template>
  <div>
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
* {
  background-color: #022c60;
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
  background-color: rgb(87, 87, 87);
}
</style>
