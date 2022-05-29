<template>
  <div class="es-League-news">
    <h2 class="es-League-news__title">
      INFORMATION<br />
      <span>お知らせ</span>
    </h2>
    <div class="es-League-news__contanier">
      <p class="es-League-news__date">
        {{ formatData }}<span>{{ category }}</span>
      </p>
      <h3 class="es-League-news__newsTitle">{{ data.newsTitle }}</h3>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="es-League-news__newsText" v-html="data.newsText"></div>
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
  data() {
    return {
      data: {},
      category: '',
      // newsText: '',
      // date: '',
    }
  },
  computed: {
    formatData() {
      return moment(this.date).format('YYYY/MM/DD')
    },
  },
  async created() {
    const path = this.$route.query.id
    const draftKey = this.$route.query.draftKey
    const res = await this.$axios.$get(
      `https://es-league.microcms.io/api/v1/news/${path}?draftKey=${draftKey}`,
      {
        headers: {
          'X-MICROCMS-API-KEY': '6f5f8298ae11472da2dee970abc8407d9cdf',
        },
      }
    )
    this.data = res
    this.category = res.category[0]
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/news_detail';
</style>
