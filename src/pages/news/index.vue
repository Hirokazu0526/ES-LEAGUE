<template>
  <section>
    <ul>
      <li><nuxt-link to="/news">news1</nuxt-link></li>
      <li><nuxt-link to="/news">news2</nuxt-link></li>
      <li><nuxt-link to="/news">news3</nuxt-link></li>
      <li><nuxt-link to="/news">news4</nuxt-link></li>
      <li><nuxt-link to="/news">news5</nuxt-link></li>
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
