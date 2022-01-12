<template>
  <div class="es-League-footer">
    <div class="es-League-footer__bg">
      <ul class="es-League-footer__list">
        <li class="es-League-footer__listItem">
          <nuxt-link to="/contact">
            <p class="es-League-footer__listTitle">お問い合わせ</p>
          </nuxt-link>
        </li>
        <!-- <li class="es-League-footer__listItem">
          <nuxt-link to="/contact">
            <p class="es-League-footer__listTitle">体験しよう！</p>
          </nuxt-link>
        </li> -->
        <li class="es-League-footer__listItem">
          <nuxt-link to="/">
            <p class="es-League-footer__listTitle">??????????</p>
          </nuxt-link>
        </li>
        <li class="es-League-footer__listItem">
          <a href="http://jstaf.jp/" target="_blank">
            <p class="es-League-footer__listTitle">
              一般社団法人<br />日本セパタクロー協会
            </p>
          </a>
        </li>
      </ul>
      <div class="es-League-footer__snsList">
        <a
          href="https://twitter.com/es_league_japan"
          target="_blank"
          class="es-League-footer__icon twitter"
        ></a>
        <a href="" class="es-League-footer__icon facebook"></a>
        <a
          href="https://www.instagram.com/es_league_japan/"
          target="_blank"
          class="es-League-footer__icon instagram"
        ></a>
        <a
          href="https://www.tiktok.com/@es_league?lang=ja"
          target="_blank"
          class="es-League-footer__icon tiktok"
        ></a>
      </div>
      <div class="es-League-footer__copyRight">
        <small>© 2022 ES LEAGUE All Rights Reserved.</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.es-League-footer {
  background-color: #000000;
  color: #fff;
  &__bg {
    display: grid;
    grid-template-rows: 1fr 110px 40px;
    width: 100%;
    height: 370px;
    background: url(~/assets/img/esleague_long_white.svg) 0% -70px no-repeat;
    background-size: 70%;
    padding: 27px 16px 20px;
  }
  &__list {
    list-style: none;
  }
  &__listItem {
    text-align: right;
    font-size: 14px;
    margin-bottom: 18px;
    a {
      text-decoration: none;
      color: #fff;
    }
    &:nth-child(2n + 1) {
      margin-left: 10px;
    }
    &:nth-child(5) {
      white-space: nowrap;
    }
  }
  &__listTitle {
    display: inline-block;
  }
  &__snsList {
    margin: 50px 0px 20px;
    text-align: right;
  }
  &__icon {
    display: inline-block;
    width: 38px;
    height: 38px;
    margin: 0 10px;
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
      margin-right: 0;
    }
  }
  &__copyRight {
    color: #fff;
    text-align: right;
    margin: 20px 0 0;
  }
}
</style>
