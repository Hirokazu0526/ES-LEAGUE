<template>
  <div class="es-League-card">
    <h3 class="es-League-card__title">
      PICK UP PLAYER<br /><span>注目選手</span>
    </h3>
    <div class="es-League-card__listWrapper">
      <ul class="es-League-card__list">
        <li class="es-League-card__item">
          <nuxt-link to="/profile/ltex82bj2">
            <img
              src="~/assets/img/takano.jpg"
              alt=""
              class="es-League-card__img"
            />
            <h4 class="es-League-card__playerName">高野征也</h4>
            <p class="es-League-card__text">
              セパタクロー日本代表キャプテン。闘志あふれるプレーでチームを引っ張り、安定感抜群の大黒柱。高野のプレーを見逃すな。
            </p>
          </nuxt-link>
        </li>
        <li class="es-League-card__item">
          <nuxt-link to="/profile">
            <img
              src="~/assets/img/takano.jpg"
              alt=""
              class="es-League-card__img"
            />
            <h4 class="es-League-card__playerName">高野征也</h4>
            <p class="es-League-card__text">
              セパタクロー日本代表キャプテン。闘志あふれるプレーでチームを引っ張り、安定感抜群の大黒柱。高野のプレーを見逃すな。
            </p>
          </nuxt-link>
        </li>
        <li class="es-League-card__item">
          <nuxt-link to="/profile">
            <img
              src="~/assets/img/takano.jpg"
              alt=""
              class="es-League-card__img"
            />
            <h4 class="es-League-card__playerName">高野征也</h4>
            <p class="es-League-card__text">
              セパタクロー日本代表キャプテン。闘志あふれるプレーでチームを引っ張り、安定感抜群の大黒柱。高野のプレーを見逃すな。
            </p>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <es-button url="/profile" class="es-League-card__btn">選手一覧</es-button>
  </div>
</template>

<script>
import esButton from '../atoms/es-button.vue'
export default {
  components: { esButton },
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
  margin: 0 16px;
  padding: 40px 0;
  &__title {
    text-align: center;
    font-size: 32px;
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
    }
  }
  &__listWrapper {
    margin-top: 22px;
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding-bottom: 10px;
    color: #000;
    a {
      color: #000;
      text-decoration: none;
    }
  }
  &__img {
    width: 100%;
  }
  &__playerName {
    padding: 0 9px;
    font-size: 14px;
    margin-top: 5px;
    text-align: center;
  }
  &__text {
    font-size: 10px;
    padding: 0 9px;
    margin-top: 5px;
    word-break: break-all;
  }
  &__btn {
    margin: 15px auto 0;
  }
}
</style>
