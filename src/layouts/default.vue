<template>
  <div>
    <div class="header">
      header
      <humberger class="header__btn" />
    </div>

    <Nuxt />
    <div class="footer">footer</div>
  </div>
</template>

<script>
import humberger from '~/components/integration/atoms/humberger.vue'
export default {
  components: {
    humberger,
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 80px;
  background-color: rgb(87, 87, 87);
  position: relative;
  &__btn {
    position: absolute;
    top: 10px;
    right: 10px;
    display: block;
  }
}
.footer {
  height: 80px;
  background-color: rgb(87, 87, 87);
}
</style>
