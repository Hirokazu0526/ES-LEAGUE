<template>
  <div class="es-League-news">
    <h2 class="es-League-news__title">
      EVENT<br />
      <span>イベント</span>
    </h2>
    <div class="es-League-news__contanier">
      <p class="es-League-news__date">{{ formatData }}</p>
      <h3 class="es-League-news__newsTitle">{{ newsTitle }}</h3>
      <!-- eslint-disable-next-line vue/no-v-html -->
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
  head() {
    return {
      title: `${this.newsTitle} | イベント`,
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
@import '~/assets/styles/news_detail';
</style>
