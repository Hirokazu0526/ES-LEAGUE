<template>
  <div class="es-Laegue-mainVisual">
    <img
      src="~/assets/img/thumbnail.png"
      alt=""
      class="es-Laegue-mainVisual__img"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.es-Laegue-mainVisual {
  margin: 0 calc(50% - 50vw);
  &__img {
    width: 100%;
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
