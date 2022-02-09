<template>
  <nav id="global_nav" class="es-League__nav">
    <!-- sp用グローバルナビ -->
    <ul class="es-League__navList sp">
      <li class="es-League__item">
        <nuxt-link to="/schedule/result" class="es-League__link">
          <picture>
            <source
              :srcset="require('~/assets/img/header/calendar.svg')"
              type="image/webp"
              class="es-League__icon"
              alt="カレンダー"
            />
            <img
              class="es-League__icon"
              :src="require('~/assets/img/header/calendar.svg')"
              alt="カレンダー"
            />
          </picture>
          日程・結果
        </nuxt-link>
      </li>
      <li class="es-League__item">
        <!-- <nuxt-link v-scroll-to="'#live'" to="/#live" class="es-League__link"> -->
        <nuxt-link to="/team" class="es-League__link">
          <picture>
            <source
              :srcset="require('~/assets/img/header/shorts.svg')"
              type="image/webp"
              class="es-League__icon"
              alt="ユニフォーム"
            />
            <img
              class="es-League__icon"
              :src="require('~/assets/img/header/shorts.svg')"
              alt="ユニフォーム"
            />
          </picture>
          チーム紹介
        </nuxt-link>
      </li>
      <li class="es-League__item">
        <nuxt-link to="/about" class="es-League__link">
          <picture>
            <source
              :srcset="require('~/assets/img/header/site-logo.svg')"
              type="image/webp"
              class="es-League__icon"
              alt="セパタクローボール"
            />
            <img
              class="es-League__icon"
              :src="require('~/assets/img/header/site-logo.svg')"
              alt="セパタクローボール"
            />
          </picture>
          セパタクローとは
        </nuxt-link>
      </li>
    </ul>
    <!-- pc用グローバルナビ -->
    <ul class="es-League__navList pc">
      <li class="es-League__item">
        <nuxt-link to="/schedule/result" class="es-League__link">
          <picture>
            <source
              :srcset="require('~/assets/img/header/calendar.svg')"
              type="image/webp"
              class="es-League__icon"
              alt="カレンダー"
            />
            <img
              class="es-League__icon"
              :src="require('~/assets/img/header/calendar.svg')"
              alt="カレンダー"
            />
          </picture>
          日程・結果
        </nuxt-link>
      </li>
      <li class="es-League__item">
        <nuxt-link to="/rank" class="es-League__link">
          <picture>
            <source
              :srcset="require('~/assets/img/header/trophy.svg')"
              type="image/webp"
              class="es-League__icon"
              alt="トロフィー"
            />
            <img
              class="es-League__icon"
              :src="require('~/assets/img/header/trophy.svg')"
              alt="トロフィー"
            />
          </picture>
          順位表
        </nuxt-link>
      </li>
      <li class="es-League__item">
        <!-- <nuxt-link v-scroll-to="'#live'" to="/#live" class="es-League__link"> -->
        <nuxt-link to="/team" class="es-League__link">
          <picture>
            <source
              :srcset="require('~/assets/img/header/shorts.svg')"
              type="image/webp"
              class="es-League__icon"
              alt="ユニフォーム"
            />
            <img
              class="es-League__icon"
              :src="require('~/assets/img/header/shorts.svg')"
              alt="ユニフォーム"
            />
          </picture>
          チーム紹介
        </nuxt-link>
      </li>
      <li class="es-League__item">
        <nuxt-link to="/esleague" class="es-League__link">
          <picture>
            <source
              :srcset="require('~/assets/img/header/es_logo-white.svg')"
              type="image/webp"
              class="es-League__icon"
              alt="esleagueロゴ"
            />
            <img
              class="es-League__icon es"
              :src="require('~/assets/img/header/es_logo-white.svg')"
              alt="esleagueロゴ"
            />
          </picture>
          ES LEAGUEとは
        </nuxt-link>
      </li>
      <li class="es-League__item">
        <nuxt-link to="/news" class="es-League__link">
          <picture>
            <source
              :srcset="require('~/assets/img/header/news.svg')"
              type="image/webp"
              class="es-League__icon"
              alt="ニュース"
            />
            <img
              class="es-League__icon"
              :src="require('~/assets/img/header/news.svg')"
              alt="ニュース"
            />
          </picture>
          NEWS
        </nuxt-link>
      </li>
      <li class="es-League__item">
        <nuxt-link to="/about" class="es-League__link">
          <picture>
            <source
              :srcset="require('~/assets/img/header/site-logo.svg')"
              type="image/webp"
              class="es-League__icon"
              alt="セパタクローボール"
            />
            <img
              class="es-League__icon"
              :src="require('~/assets/img/header/site-logo.svg')"
              alt="セパタクローボール"
            />
          </picture>
          セパタクローとは
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.es-League {
  &__navList {
    display: grid;
    grid-template-columns: 65px 65px 107px;
    gap: 20px;
    justify-items: stretch;
    align-items: center;
    &.pc {
      display: none;
    }
  }
  &__item {
    display: block;
    text-align: center;
  }
  &__link {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;
    font-size: 13px;
  }
  &__icon {
    width: 24px;
    height: 24px;
    margin-bottom: 5px;
  }
}
@media screen and (min-width: 768px) {
  .es-League {
    &__navList {
      &.sp {
        display: none;
      }
      &.pc {
        display: grid;
        grid-template-columns: 65px 50px 65px 120px 50px 107px;
      }
    }
    &__icon {
      &.es {
        width: 30px;
        height: 30px;
        margin-bottom: 1px;
      }
    }
  }
}
@media screen and (max-width: 374px) {
  .es-League {
    &__navList {
      gap: 10px;
    }
  }
}
</style>
