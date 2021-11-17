<template>
  <div class="es-League-live">
    <h3 class="es-League-live__title live">
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
    <h3 class="es-League-live__title howto">
      HOW TO WATCH<br /><span>観戦方法</span>
    </h3>
    <es-button url="/howto" class="es-League-live__btn">詳しく見る</es-button>
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
    color: #fff;
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
      color: #fff;
    }
    &.live {
      color: #ff1d1d;
      & span {
        color: #ff1d1d;
      }
    }
    &.howto {
      margin-top: 37px;
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
