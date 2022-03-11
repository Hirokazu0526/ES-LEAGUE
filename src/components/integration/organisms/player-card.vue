<template>
  <div class="es-League-card">
    <h3 class="es-League-card__title">
      PICK UP PLAYER<br /><span>注目選手</span>
    </h3>
    <div class="es-League-card__listWrapper">
      <ul class="es-League-card__list">
        <li class="es-League-card__item">
          <nuxt-link to="/profile/952">
            <img
              src="https://images.microcms-assets.io/assets/49c6e1c4f8404f8a83a7cf07531f0cdc/d9a731adc3f548aba6cec987974017a8/ichikawa_B.png"
              alt=""
              class="es-League-card__img"
            />
            <span class="es-League-card__playerNumber">1</span>
            <p class="es-League-card__playerPosition">アタッカー</p>
            <h4 class="es-League-card__playerName">市川 遥太</h4>
            <p class="es-League-card__playerKana">Ichikawa Yota</p>
          </nuxt-link>
        </li>
        <li class="es-League-card__item">
          <nuxt-link to="/profile/442">
            <img
              src="https://images.microcms-assets.io/assets/49c6e1c4f8404f8a83a7cf07531f0cdc/ca3c0f02010e48ec8602df0212dac78d/tanaka_B.png"
              alt=""
              class="es-League-card__img"
            />
            <span class="es-League-card__playerNumber">2</span>
            <p class="es-League-card__playerPosition">サーバー</p>
            <h4 class="es-League-card__playerName">田中 結理</h4>
            <p class="es-League-card__playerKana">Tanaka Yuri</p>
          </nuxt-link>
        </li>
        <li class="es-League-card__item">
          <nuxt-link to="/profile/550">
            <img
              src="https://images.microcms-assets.io/assets/49c6e1c4f8404f8a83a7cf07531f0cdc/7c5aa22459294d58949b86269088c299/masuda_B.png"
              alt=""
              class="es-League-card__img"
            />
            <span class="es-League-card__playerNumber">1</span>
            <p class="es-League-card__playerPosition">サーバー</p>
            <h4 class="es-League-card__playerName">増田 稜</h4>
            <p class="es-League-card__playerKana">Masuda Ryo</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <!-- <es-button url="/profile" arrow="right" class="es-League-card__btn"
      >選手一覧</es-button
    > -->
  </div>
</template>

<script>
export default {
  props: {
    resData: {
      type: Object,
      require: false,
      default: undefined,
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-card {
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
    }
  }
  &__listWrapper {
    margin-top: 22px;
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    justify-content: center;
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    color: #000;
    border: 1px solid #bebebe;
    text-align: center;
    position: relative;
    &:after {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      border-left: 15px solid transparent;
      border-bottom: 15px solid #a37b30;
      content: '';
    }
    a {
      display: block;
      color: #000;
      text-decoration: none;
      padding-bottom: 10px;
    }
  }
  &__img {
    width: 100%;
  }
  &__playerNumber {
    font-size: 30px;
    font-family: 'HNewYork';
  }
  &__playerPosition {
    font-size: 10px;
    font-weight: medium;
    margin-bottom: 5px;
  }
  &__playerName {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 3px;
  }
  &__playerKana {
    font-size: 10px;
    font-weight: medium;
  }
  &__btn {
    margin: 16px auto 0;
  }
}

@media screen and (max-width: 374px) {
  .es-League-card {
    &__playerNumber {
      font-size: 25px;
    }
    &__playerName {
      font-size: 14px;
    }
    &__item {
      &:after {
        border-left: 10px solid transparent;
        border-bottom: 10px solid #a37b30;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .es-League-card {
    max-width: 600px;
    margin: 0 auto 34px;
    &__title {
      margin-top: 50px;
      font-size: 45px;
      & span {
        font-size: 24px;
      }
    }
  }
}
</style>
