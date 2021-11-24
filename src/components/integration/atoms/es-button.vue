<template>
  <div class="button">
    <nuxt-link
      :to="url"
      :class="color"
      :style="[{ height: `${height}px` }, { width: `${width}px` }]"
    >
      <slot />
    </nuxt-link>
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
    height: {
      type: Number,
      required: false,
      default: 38,
    },
    width: {
      type: Number,
      required: false,
      default: 150,
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  text-align: center;
  width: 150px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 38px;
    position: relative;
    margin-left: 10px;
    padding: 0 15px 0 0;
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    background: linear-gradient(-45deg, transparent 27px, #a37b30 20px);
    background-position: bottom right;
    background-size: 100%;
    background-repeat: no-repeat;
    &:hover {
      color: #fff;
    }
    &.navy {
      background: linear-gradient(-45deg, transparent 27px, #011e43 20px);
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
