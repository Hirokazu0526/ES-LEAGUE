<template>
  <div class="es-League-live">
    <h3 class="es-League-live__title">
      LIVE STREAMING<br /><span>ライブ配信</span>
    </h3>
    <div v-if="firstGame" class="es-League-live__info">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1EP55eCL--4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div v-else-if="secondGame" class="es-League-live__info">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/WJcVpsYG7u8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div v-else-if="thirdGame" class="es-League-live__info">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/t5MSmq312WY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <es-button url="/live" arrow="right" class="es-League-live__btn"
      >本日の配信一覧</es-button
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['firstGame', 'secondGame', 'thirdGame']),
  },
}
</script>

<style lang="scss" scoped>
.es-League-live {
  margin: 0 16px 34px;
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
      color: #000;
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
    margin: 16px auto 0;
  }
}
</style>
