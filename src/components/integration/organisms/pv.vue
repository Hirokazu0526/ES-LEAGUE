<template>
  <div class="es-League-pv">
    <h3 class="es-League-pv__title">OFFICAL PV<br /><span>公式動画</span></h3>
    <div class="es-League-pv__info">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xdNQ7SD4Eqk"
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
.es-League-pv {
  padding: 0px 16px;
  &__title {
    text-align: center;
    font-size: 32px;
    color: #000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 16px;
      font-family: '游ゴシック体', 'YuGothic';
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
  &__btn {
    margin: 15px auto 0;
  }
}
</style>
