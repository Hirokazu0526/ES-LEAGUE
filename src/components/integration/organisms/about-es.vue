<template>
  <div class="es-League-aboutEs">
    <div class="es-League-aboutEs__container">
      <img
        id="logo"
        class="es-League-aboutEs__logo"
        src="~/assets/img/es_logo.svg"
        alt="ES LEAGUE LOGO"
      />
      <p class="es-League-aboutEs__text">
        <nuxt-link to="/about">
          <span class="es-League-aboutEs__title">ES LEAGUE</span> に<br />
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
    font-size: 32px;
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
    }
  }
  &__container {
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  }
  &__text {
    font-size: 24px;
    font-weight: 800;
    font-family: 'Noto Serif JP', serif;
    text-indent: -1em;
    padding-left: 2em;
    line-height: 30px;
    a {
      color: #030012;
      text-decoration: none;
    }
  }
  &__title {
    font-size: 28px;
    font-family: 'HNewYork';
  }

  &__logo {
    width: 53px;
  }
}
</style>
