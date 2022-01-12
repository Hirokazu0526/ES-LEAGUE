<template>
  <div class="es-League-Accordion">
    <div class="es-League-Accordion__title" @click="toggle">
      <slot name="title"></slot>
      <link-arrow
        class="es-League-Accordion__linkArrow"
        :class="{ open: isOpen }"
      />
    </div>
    <div v-if="isOpen" class="es-League-Accordion__body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
import linkArrow from '~/components/integration/atoms/link-arrow.vue'
export default {
  components: { linkArrow },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
    beforeEnter(el) {
      el.style.height = '0'
    },
    enter(el) {
      el.style.height = el.scroolHeight + 'px'
    },
    beforeLeave(el) {
      el.style.height = el.scroolHeight + 'px'
    },
    leave(el) {
      el.style.height = '0'
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-Accordion {
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 16px;
    background-color: #eeeeee;
    width: 100%;
    margin-bottom: 16px;
  }
  &__body {
    overflow: hidden;
    transition: height 0.2s ease-in-out;
    margin-bottom: 16px;
    padding: 0 16px;
  }
  &__linkArrow {
    transform: rotate(90deg);
    &.open {
      transform: rotate(270deg);
    }
  }
}
</style>
