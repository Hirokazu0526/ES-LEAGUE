<template>
  <nav id="global_nav" class="es-League__nav">
    <ul class="es-League__navList">
      <li class="es-League__item">
        <nuxt-link to="/schedule/result" class="es-League__link">
          <img
            class="es-League__icon"
            src="~/assets/img/site-logo.png"
            alt="セパタクローボール"
          />
          Schedule<br />Result
        </nuxt-link>
      </li>
      <li class="es-League__item">
        <nuxt-link
          v-scroll-to="{ el: '#live', offset: -80 }"
          to
          class="es-League__link"
        >
          <img
            class="es-League__icon"
            src="~/assets/img/site-logo.png"
            alt="セパタクローボール"
          />
          Live<br />Streaming
        </nuxt-link>
      </li>
      <li class="es-League__item">
        <nuxt-link to="/about" class="es-League__link">
          <img
            class="es-League__icon"
            src="~/assets/img/site-logo.png"
            alt="セパタクローボール"
          />
          What's<br />Sepaktakraw
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.es-League {
  &__navList {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }
  &__item {
    display: block;
    text-align: center;
  }
  &__link {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
  }
  &__icon {
    width: 24px;
    height: 24px;
    margin-bottom: 5px;
  }
}
</style>
