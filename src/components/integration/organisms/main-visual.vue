<template>
  <div class="es-Laegue-mainVisual">
    <img
      src="~/assets/img/top/nagoya_esl_kv.png"
      alt="ES LEAGUE IN 名古屋"
      class="es-Laegue-mainVisual__img"
      width="750"
      height="422"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.es-Laegue-mainVisual {
  margin: 0 calc(50% - 50vw) 34px;
  &__img {
    width: 100%;
    height: auto;
    display: block;
  }
}
@media screen and (min-width: 950px) {
  .es-Laegue-mainVisual {
    &__img {
      width: 950px;
      margin: 0 auto;
    }
  }
}
</style>
