<template>
  <section>
    <ul>
      <li><nuxt-link to="/blog">blog1</nuxt-link></li>
      <li><nuxt-link to="/blog">blog2</nuxt-link></li>
      <li><nuxt-link to="/blog">blog3</nuxt-link></li>
      <li><nuxt-link to="/blog">blog4</nuxt-link></li>
      <li><nuxt-link to="/blog">blog5</nuxt-link></li>
    </ul>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  a {
    text-decoration: none;
  }
}
</style>
