<template>
  <div class="es-League-live">
    <h3 class="es-League-live__title">
      LIVE STREAMING<br /><span>ライブ配信</span>
    </h3>
    <div class="es-League-live__info">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/b5K1rJdY5nI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.es-League-live {
  padding: 20px 16px 0;
  &__title {
    text-align: center;
    font-size: 24px;
    color: #ff1d1d;
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
      color: #ff1d1d;
    }
  }
  &__info {
    margin-top: 15px;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0px;
    position: relative;
    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
