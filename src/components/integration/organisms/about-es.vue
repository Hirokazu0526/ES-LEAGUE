<template>
  <div class="es-League-aboutEs">
    <div class="es-League-aboutEs__logo">
      <img src="" alt="" />
      <p class="es-League-aboutEs__text">
        <nuxt-link to="/about">
          ES LEAGUE に<br />
          込められた想い >>
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.es-League-aboutEs {
  margin-top: 40px;
  padding: 20px 0;
  background-color: #fff;
  &__title {
    text-align: center;
    font-size: 24px;
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
    }
  }
  &__logo {
    height: 125px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: center;
    align-items: center;
  }
  &__text {
    font-size: 18px;
    font-weight: bold;
    text-indent: -1em;
    padding-left: 2em;
    line-height: 30px;
    a {
      color: #030012;
      text-decoration: none;
    }
  }
}
</style>
