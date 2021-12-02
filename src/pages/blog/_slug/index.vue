<template>
  <div class="es-League-profile">
    <h2 class="es-League-profile__title">PLAYERS</h2>

    <p class="es-League-profile__text number">{{ formatData }}</p>
    <h1 class="es-League-profile__name">{{ blogTitle }}</h1>
    <div v-html="blogText"></div>

    <es-button url="/blog" class="es-League-profile__btn player"
      >ブログ一覧へ</es-button
    >
  </div>
</template>

<script>
import moment from 'moment-timezone'
export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: `blog/${params.slug}`,
    })
    return data
  },
  computed: {
    formatData() {
      return moment(this.date).format('YYYY/MM/DD')
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-profile {
  margin: 0px 16px;
  padding: 95px 0px;
  text-align: center;
  color: #fff;

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
