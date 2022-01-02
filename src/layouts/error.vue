<template>
  <div class="container">
    <nuxt-error :error="error"></nuxt-error>
  </div>
</template>

<script>
import NuxtError from '~/components/integration/organisms/nuxt-error.vue'

export default {
  components: { NuxtError },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>
