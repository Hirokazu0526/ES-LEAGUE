<template>
  <div class="es-League-profile">
    <h3 class="es-League-profile__title">PLAYERS</h3>

    <img :src="url" :alt="name" class="es-League-profile__name" />
    <h1 class="es-League-profile__name">{{ data.name }}</h1>
    <div class="es-League-profile__info">
      <p class="es-League-profile__text position">ポジション：{{ position }}</p>
      <p class="es-League-profile__text number">背番号：{{ data.number }}</p>
      <p class="es-League-profile__text birth">誕生日：{{ formatData }}</p>
      <p class="es-League-profile__text birthplace">
        出身地：{{ data.birthplace }}
      </p>
      <p class="es-League-profile__text playstyle">
        プレースタイル：{{ data.playstyle }}
      </p>
      <p class="es-League-profile__text respect">
        尊敬する人：{{ data.respect }}
      </p>
      <p class="es-League-profile__text reason">
        セパタクローを始めたきっかけ：<br />{{ data.reason }}
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
export default {
  data() {
    return {
      data: {},
      url: '',
      position: '',
    }
  },
  computed: {
    formatData() {
      return moment(this.birth).format('YYYY/MM/DD')
    },
  },
  async created() {
    const path = this.$route.query.id
    const draftKey = this.$route.query.draftKey
    const res = await this.$axios.$get(
      `https://es-league.microcms.io/api/v1/player-details/${path}?draftKey=${draftKey}`,
      {
        headers: {
          'X-MICROCMS-API-KEY': '6f5f8298ae11472da2dee970abc8407d9cdf',
        },
      }
    )
    this.data = res
    this.url = res.image.url
    this.position = res.position[0]
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
