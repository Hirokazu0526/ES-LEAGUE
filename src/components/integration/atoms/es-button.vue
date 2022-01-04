<template>
  <div class="button">
    <nuxt-link
      :to="url"
      :class="[color, arrow]"
      class="button__link"
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
      default: 'right',
    },
    arrow: {
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
      default: 160,
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  text-align: center;
  width: 160px;
  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 38px;
    padding: 0;
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    background-color: #a37b30;
    border-radius: 2px;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      width: 4px;
      height: 13px;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &.right::after {
      right: 8px;
      background: url(~/assets/img/arrow-right.svg);
    }
    &.left::after {
      left: 8px;
      background: url(~/assets/img/arrow-left.svg);
    }
    &:hover {
      cursor: pointer;
    }
    &.navy {
      background-color: #011e43;
    }
    &.gray {
      background-color: #666666;
    }
  }
}
</style>
