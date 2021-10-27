<template>
  <div class="button">
    <nuxt-link
      :to="url"
      :class="[color, { arrow: arrow }, { border: border }]"
      :style="[
        { height: `${height}px` },
        { width: `${width}px` },
        { borderRadius: `${borderRadius}px` },
      ]"
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
    border: {
      type: Boolean,
      required: false,
      default: false,
    },
    arrow: {
      type: Boolean,
      required: false,
      default: false,
    },
    height: {
      type: Number,
      required: false,
      default: 38,
    },
    width: {
      type: Number,
      required: false,
      default: 120,
    },
    borderRadius: {
      type: Number,
      required: false,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  text-align: center;
  width: 120px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 38px;
    position: relative;
    margin: 0 auto;
    background-color: #344152;
    border-radius: 0px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
    &.arrow {
      &:after {
        content: '>';
        width: 14px;
        height: 14px;
        position: absolute;
        top: 0px;
        right: 10px;
        bottom: 0px;
        margin: auto;
        margin-left: 5px;
        font-size: 14px;
        line-height: 14px;
      }
    }
    &.border {
      border: 1px solid #3895ff;
    }
    &.white {
      color: rgb(28, 38, 61);
      background-color: #fff;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
