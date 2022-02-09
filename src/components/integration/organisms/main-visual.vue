<template>
  <div class="es-Laegue-mainVisual">
    <picture>
      <source
        :srcset="require('~/assets/img/top/thumbnail.jpg?webp')"
        type="image/webp"
        class="es-Laegue-mainVisual__img"
        alt="ES LEAGUEメインビジュアル"
        width="750"
        height="422"
      />
      <img
        src="~/assets/img/top/thumbnail.jpg"
        alt="ES LEAGUEメインビジュアル"
        class="es-Laegue-mainVisual__img"
        width="750"
        height="422"
      />
    </picture>
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
