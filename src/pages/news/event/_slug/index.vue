<template>
  <div class="es-League-news">
    <h2 class="es-League-news__title">お知らせ</h2>
    <div class="es-League-news__contanier">
      <p class="es-League-news__date">{{ formatData }}</p>
      <h3 class="es-League-news__newsTitle">{{ newsTitle }}</h3>
      <div class="es-League-news__newsText" v-html="newsText"></div>

      <es-button url="/news" class="es-League-news__btn"
        >ニュース一覧へ</es-button
      >
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: `news/${params.slug}`,
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
.es-League-news {
  margin: 0px 16px;
  padding: 95px 0px 40px;
  text-align: center;
  color: #000;

  &__title {
    margin: 21px 0 45px;
    text-align: center;
    font-size: 32px;
    position: relative;
    &:after {
      content: '';
      width: 96px;
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
  &__contanier {
    padding: 20px 16px 30px;
    color: #000;
    background: linear-gradient(-45deg, transparent 27px, #fff 20px);
    background-position: bottom right;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  &__date {
    text-align: left;
    font-size: 12px;
  }
  &__newsTitle {
    font-size: 20px;
    margin: 20px 0 0;
  }
  &__newsText {
    margin-top: 20px;
    font-size: 16px;
    text-align: left;
  }
  &__btn {
    margin: 30px auto 0;
  }
}
</style>
