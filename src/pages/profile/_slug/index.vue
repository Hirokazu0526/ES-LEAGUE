<template>
  <div class="es-League-profile">
    <h3 class="es-League-profile__title">PLAYERS</h3>

    <img :src="image.url" :alt="name" class="es-League-profile__name" />
    <h1 class="es-League-profile__name">{{ name }}</h1>
    <div class="es-League-profile__info">
      <p class="es-League-profile__text position">
        ポジション：{{ position[0] }}
      </p>
      <p class="es-League-profile__text number">背番号：{{ number }}</p>
      <p class="es-League-profile__text birth">誕生日：{{ formatData }}</p>
      <p class="es-League-profile__text birthplace">出身地：{{ birthplace }}</p>
      <p class="es-League-profile__text playstyle">
        プレースタイル：{{ playstyle }}
      </p>
      <p class="es-League-profile__text respect">尊敬する人：{{ respect }}</p>
      <p class="es-League-profile__text reason">
        セパタクローを始めたきっかけ：<br />{{ reason }}
      </p>
    </div>

    <es-button
      url="/profile"
      color="white"
      :border-radius="8"
      class="es-League-profile__btn player"
      >選手一覧へ</es-button
    >
    <es-button
      url="/team"
      :border-radius="8"
      class="es-League-profile__btn team"
      >チーム一覧へ</es-button
    >
  </div>
</template>

<script>
import moment from 'moment-timezone'
export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: `player-details/${params.slug}`,
    })
    return data
  },
  computed: {
    formatData() {
      return moment(this.birth).format('YYYY/MM/DD')
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-profile {
  margin: 0px 16px;
  padding: 80px 0px;
  text-align: center;
  color: #fff;

  &__title {
    margin: 21px 0 45px;
    text-align: center;
    font-size: 24px;
    position: relative;
    &:after {
      content: '';
      width: 120px;
      height: 2px;
      background-color: #fff;
      display: block;
      position: absolute;
      bottom: -10px;
      left: 0px;
      right: 0px;
      margin: 0 auto;
    }
  }
  &__info {
    padding: 0px 16px;
    text-align: left;
  }
  &__text {
    font-size: 18px;
    margin: 10px 0;
  }
  &__btn {
    margin: 15px auto 0;
  }
}
</style>
