<template>
  <div class="es-League-sponsor">
    <h3 class="es-League-sponsor__title">SPONSOR</h3>
    <div class="es-League-sponsor__list">
      <div class="es-League-sponsor__items gold">
        <h4 class="es-League-sponsor__logo">SARAYA</h4>
      </div>
      <div class="es-League-sponsor__items silver">
        <h4 class="es-League-sponsor__logo">LibGate</h4>
        <h4 class="es-League-sponsor__logo">SVOLME</h4>
        <h4 class="es-League-sponsor__logo">世田谷自然食品</h4>
        <h4 class="es-League-sponsor__logo">BVD</h4>
        <h4 class="es-League-sponsor__logo">ANYTIME<br />FITNESS</h4>
      </div>
      <div class="es-League-sponsor__items bronze">
        <h4 class="es-League-sponsor__logo">XYOU</h4>
        <h4 class="es-League-sponsor__logo">リバティー<br />エステート</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.es-League-sponsor {
  background-color: #fff;
  margin: 0 calc(50% - 50vw);
  width: 100vw;
  padding: 40px 0;
  &__title {
    color: #666666;
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
    font-size: 24px;
  }
  &__items {
    display: grid;
    gap: 10px;
    margin-bottom: 10px;
    &.gold {
      grid-template-columns: 1fr;
    }
    &.silver {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto auto;
    }
    &.bronze {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto auto;
      margin-bottom: 0px;
    }
  }
  &__logo {
    text-align: center;
    color: #666666;
    padding: 5px 10px;
  }
}
</style>
