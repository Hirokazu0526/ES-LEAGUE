<template>
  <div class="es-League-footer">
    <ul class="es-League-footer__list">
      <li class="es-League-footer__listItem">
        <nuxt-link to="/contact">
          <p class="es-League-footer__listTitle">お問い合わせ</p>
        </nuxt-link>
      </li>
      <li class="es-League-footer__listItem">
        <nuxt-link to="/">
          <p class="es-League-footer__listTitle">プライバシーポリシー</p>
        </nuxt-link>
      </li>
      <li class="es-League-footer__listItem">
        <nuxt-link to="/contact">
          <p class="es-League-footer__listTitle">体験しよう！</p>
        </nuxt-link>
      </li>
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
    <div class="es-League-footer__copyRight">
      <small>© 2022 ES LEAGUE All Rights Reserved.</small>
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
  width: 100%;
  height: 240px;
  background: url(~/assets/img/background-footer.png) 0% 0% no-repeat;
  background-size: 100%;
  padding: 40px 16px 20px;
  &__list {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 15px;
  }
  &__listItem {
    text-align: left;
    font-size: 18px;
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
  &__copyRight {
    color: #fff;
    text-align: center;
    margin: 50px 0 0;
  }
}
</style>
