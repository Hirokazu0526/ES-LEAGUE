<template>
  <div class="es-League-card">
    <h3 class="es-League-card__title">
      PICK UP PLAYER<br /><span>注目選手</span>
    </h3>
    <div class="es-League-card__listWrapper">
      <ul class="es-League-card__list">
        <li class="es-League-card__item">
          <nuxt-link to="/profile/435">
            <img
              src="https://images.microcms-assets.io/assets/49c6e1c4f8404f8a83a7cf07531f0cdc/15e556fed28b423baa67edcf5903c864/fukai_B.png"
              alt="深井翔太"
              class="es-League-card__img"
            />
            <span class="es-League-card__playerNumber">4</span>
            <p class="es-League-card__playerPosition">サーバー</p>
            <h4 class="es-League-card__playerName">深井 翔太</h4>
            <p class="es-League-card__playerKana">Fukai Shota</p>
          </nuxt-link>
        </li>
        <li class="es-League-card__item">
          <nuxt-link to="/profile/184">
            <img
              src="https://images.microcms-assets.io/assets/49c6e1c4f8404f8a83a7cf07531f0cdc/f2192c4ad0df4fbe9f9a0638ceb61182/saegusa_B.png"
              alt="三枝千夏"
              class="es-League-card__img"
            />
            <span class="es-League-card__playerNumber">3</span>
            <p class="es-League-card__playerPosition">トサー</p>
            <h4 class="es-League-card__playerName">三枝 千夏</h4>
            <p class="es-League-card__playerKana">Saegusa Chinatsu</p>
          </nuxt-link>
        </li>
        <li class="es-League-card__item">
          <nuxt-link to="/profile/341">
            <img
              src="https://images.microcms-assets.io/assets/49c6e1c4f8404f8a83a7cf07531f0cdc/7a2b383fd1d44f73be9783e7b87e5a92/narawa_B.png"
              alt="奈良輪航"
              class="es-League-card__img"
            />
            <span class="es-League-card__playerNumber">4</span>
            <p class="es-League-card__playerPosition">サーバー</p>
            <h4 class="es-League-card__playerName">奈良輪 航</h4>
            <p class="es-League-card__playerKana">Narawa Wataru</p>
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
