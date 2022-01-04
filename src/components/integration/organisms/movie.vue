<template>
  <div class="es-League-movie">
    <h3 class="es-League-movie__title">MOVIE<br /><span>動画</span></h3>
    <div class="es-League-movie__item">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BKWBfzJoRWs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <es-button class="es-League-movie__btn">動画一覧</es-button>
  </div>
</template>

<script>
import esButton from '../atoms/es-button.vue'
export default {
  components: { esButton },
}
</script>

<style lang="scss" scoped>
.es-League-movie {
  padding: 0px 16px 40px;
  &__title {
    text-align: center;
    font-size: 32px;
    color: #000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 16px;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
    }
  }
  &__item {
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
    margin: 20px auto 0;
  }
}
</style>
