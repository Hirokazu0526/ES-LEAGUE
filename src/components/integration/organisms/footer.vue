<template>
  <div class="es-League-footer">
    <div class="es-League-footer__wrapper">
      <img
        src="~/assets/img/logo/esleague_long_white.svg"
        class="es-League-footer__bgImg"
        alt="ES LEAGUE LOGO"
      />
      <div class="es-League-footer__container">
        <!-- sp版フッター -->
        <ul class="es-League-footer__list sp">
          <li class="es-League-footer__listItem">
            <nuxt-link to="/esleague">
              <p class="es-League-footer__listTitle">ES LEAGUEとは</p>
            </nuxt-link>
          </li>
          <li class="es-League-footer__listItem">
            <nuxt-link to="/news">
              <p class="es-League-footer__listTitle">NEWS</p>
            </nuxt-link>
          </li>
          <li class="es-League-footer__listItem">
            <nuxt-link to="/rank">
              <p class="es-League-footer__listTitle">順位表</p>
            </nuxt-link>
          </li>
          <li class="es-League-footer__listItem">
            <nuxt-link to="/spectating">
              <p class="es-League-footer__listTitle">観戦ガイドライン</p>
            </nuxt-link>
          </li>
          <li class="es-League-footer__listItem">
            <a href="https://esleague0312.peatix.com/" target="_blank">
              <p class="es-League-footer__listTitle">
                観戦のお申し込み<br />(外部リンク)
              </p>
            </a>
          </li>
          <li class="es-League-footer__listItem">
            <nuxt-link to="/contact">
              <p class="es-League-footer__listTitle">お問い合わせ</p>
            </nuxt-link>
          </li>
          <li class="es-League-footer__listItem pc">
            <a href="http://jstaf.jp/" target="_blank">
              <p class="es-League-footer__listTitle">
                一般社団法人<br />日本セパタクロー協会
              </p>
            </a>
          </li>
        </ul>
        <!-- pc版のフッター -->
        <ul class="es-League-footer__list pc">
          <li class="es-League-footer__listItem">
            <nuxt-link to="/spectating">
              <p class="es-League-footer__listTitle">観戦ガイドライン</p>
            </nuxt-link>
          </li>
          <li class="es-League-footer__listItem">
            <a href="https://esleague2022.peatix.com/" target="_blank">
              <p class="es-League-footer__listTitle">
                観戦のお申し込み(外部リンク)
              </p>
            </a>
          </li>
          <li class="es-League-footer__listItem">
            <nuxt-link to="/contact">
              <p class="es-League-footer__listTitle">お問い合わせ</p>
            </nuxt-link>
          </li>
          <li class="es-League-footer__listItem">
            <a href="http://jstaf.jp/" target="_blank">
              <p class="es-League-footer__listTitle">
                一般社団法人 日本セパタクロー協会
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
          <a
            href="https://www.facebook.com/es.league.japan/"
            target="_blank"
            class="es-League-footer__icon facebook"
          ></a>
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
          <a
            href="https://liff.line.me/1645278921-kWRPP32q/?accountId=533aczqy"
            target="_blank"
            class="es-League-footer__icon line"
          ></a>
        </div>
        <div class="es-League-footer__copyRight">
          <small>© 2022 ES LEAGUE All Rights Reserved.</small>
        </div>
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
  &__wrapper {
    position: relative;
    padding: 20px 16px 20px 0;
    overflow: hidden;
    max-width: 950px;
    margin: 0 auto;
  }
  &__bgImg {
    position: absolute;
    top: -10px;
    left: 0;
    width: 210px;
  }
  &__bg {
    display: grid;
    grid-template-rows: 1fr 110px 40px;
    width: 100%;
    height: 370px;
    padding: 27px 16px 20px;
  }

  &__container {
    display: grid;
  }

  &__list {
    &.sp {
      list-style: none;
    }
    &.pc {
      display: none;
    }
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
    margin: 20px 0px 20px;
    text-align: right;
    position: relative;
    z-index: 10;
  }
  &__icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 0 5px;
    background-size: contain;
    background-repeat: no-repeat;
    &.twitter {
      background-image: url('~/assets/img/logo/twitter_icon.svg');
    }
    &.facebook {
      background-image: url('~/assets/img/logo/facebook_icon.png');
    }
    &.instagram {
      background-image: url('~/assets/img/logo/instagram_icon.png');
    }
    &.tiktok {
      background-image: url('~/assets/img/logo/tiktok_icon.svg');
      margin-right: 0;
    }
    &.line {
      background-image: url('~/assets/img/logo/line.png');
      margin-right: 0;
    }
  }
  &__copyRight {
    color: #fff;
    text-align: right;
    margin: 20px 0 0;
  }
}
@media screen and (max-width: 374px) {
  .es-League-footer {
    &__bgImg {
      width: 180px;
    }
    &__copyRight {
      font-size: 12px;
    }
  }
}
@media screen and (min-width: 768px) {
  .es-League-footer {
    height: 295px;
    &__wrapper {
      padding: 30px 10px 20px 0;
    }
    &__bgImg {
      top: -20px;
    }
    &__list {
      &.sp {
        display: none;
      }
      &.pc {
        padding-left: 145px;
        display: block;
        // grid-template-columns: 0.8fr 1fr;
        // justify-items: start;
        width: 600px;
        margin: 0 auto 0;
        // align-items: center;
        list-style: none;
      }
    }
    &__listItem {
      text-align: right;
      &:nth-child(2n + 1) {
        margin-left: 0px;
      }
    }
    &__snsList {
      text-align: center;
    }
    &__copyRight {
      font-size: 14px;
      text-align: center;
    }
    &__icon {
      margin: 0 10px;
    }
  }
}
</style>
