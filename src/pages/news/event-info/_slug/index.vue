<template>
  <div class="es-League-news">
    <h2 class="es-League-news__title">
      EVENT<br />
      <span>イベント</span>
    </h2>
    <div class="es-League-news__contanier">
      <p class="es-League-news__date">{{ formatData }}</p>
      <h3 class="es-League-news__newsTitle">{{ newsTitle }}</h3>
      <div class="es-League-news__newsText" v-html="newsText"></div>
    </div>
    <div class="es-League-news__btnWrapper">
      <back-button />
      <es-button url="/news">ニュース一覧へ</es-button>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
export default {
  async asyncData({ params, $microcms, error }) {
    try {
      const data = await $microcms.get({
        endpoint: `news/${params.slug}`,
      })
      return data
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      })
    }
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
    margin: 24px 0;
    text-align: center;
    font-size: 32px;
    color: #000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
      color: #030012;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
    }
  }
  &__contanier {
    padding: 0 16px 30px;
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
  &__btnWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    justify-items: center;
  }
}
</style>
