<template>
  <div class="link-arrow">
    <nuxt-link :to="url" :class="color"> </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: '',
    },
    color: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.link-arrow {
  text-align: center;
  width: 20px;
  height: 20px;
  background-color: #a37b30;
  border-radius: 2px;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    width: 4px;
    height: 13px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(~/assets/img/arrow-right.svg);
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
