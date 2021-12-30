<template>
  <div class="es-League-profile">
    <h2 class="es-League-profile__title">PLAYERS</h2>

    <img :src="imageSquare.url" :alt="name" class="es-League-profile__name" />
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

    <button @click="$router.go(-1)">戻る</button>
    <es-button :url="`/team/${team.id}`" class="es-League-profile__btn team"
      >チーム情報</es-button
    >
    <es-button url="/" color="navy" class="es-League-profile__btn team"
      >TOPへ</es-button
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
      return moment(this.birth).format('YYYY年M月D日')
    },
  },
  mounted() {
    this.setAnimation()
  },
  methods: {
    setAnimation() {
      this.$anime({
        targets: '.es-League-profile__ability',
        scale: 1.5,
        duration: 2000,
        easing: 'easeInOutQuad',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-profile {
  margin: 0px 16px;
  padding: 95px 0px;
  text-align: center;
  color: #000;

  &__title {
    margin: 21px 0 45px;
    text-align: center;
    font-size: 32px;
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
  &__ability {
    background-image: url(~/assets/img/pentagon.svg);
    background-repeat: no-repeat;
    background-size: 100%;
    width: 53px;
    height: 51px;
    display: block;
    margin: 10px auto;
  }
  &__info {
    margin: 40px 0 0;
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
  &__back {
    text-align: center;
    width: 150px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 38px;
      position: relative;
      margin-left: 10px;
      padding: 0 15px 0 0;
      color: white;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      background: linear-gradient(-45deg, transparent 27px, #a37b30 20px);
      background-position: bottom right;
      background-size: 100%;
      background-repeat: no-repeat;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
