<template>
  <div class="es-League-sns">
    <h3 class="es-League-sns__title">
      SNS<br />
      <span>公式アカウント</span>
    </h3>
    <div class="es-League-sns__list">
      <a
        href="https://twitter.com/es_league_japan"
        target="_blank"
        class="es-League-sns__icon twitter"
      ></a>
      <a href="" class="es-League-sns__icon facebook"></a>
      <a
        href="https://www.instagram.com/es_league_japan/"
        target="_blank"
        class="es-League-sns__icon instagram"
      ></a>
      <a
        href="https://www.tiktok.com/@es_league?lang=ja"
        target="_blank"
        class="es-League-sns__icon tiktok"
      ></a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.es-League-sns {
  padding: 40px 0;
  background-color: #00091a;
  &__title {
    text-align: center;
    font-size: 32px;
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
    }
  }
  &__list {
    margin: 20px 16px;
    text-align: center;
  }
  &__icon {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 0 5px;
    background-size: contain;
    background-repeat: no-repeat;
    &.twitter {
      background-image: url('~/assets/img/twitter_icon.svg');
    }
    &.facebook {
      background-image: url('~/assets/img/facebook_icon.png');
    }
    &.instagram {
      background-image: url('~/assets/img/instagram_icon.png');
    }
    &.tiktok {
      background-image: url('~/assets/img/tiktok_icon.svg');
    }
  }
}
</style>
