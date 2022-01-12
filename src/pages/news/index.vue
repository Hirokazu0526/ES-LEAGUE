<template>
  <section class="es-League-newsInfomation">
    <h2 class="es-League-newsInfomation__title">
      NEWS<br />
      <span>ニュース</span>
    </h2>
    <div class="es-League-newsInfomation__contents">
      <news :news-data="getNewsList" />
    </div>
    <div class="es-League-newsInfomation__categoryLists">
      <p class="es-League-newsInfomation__categoryTitle">カテゴリ</p>
      <div class="es-League-newsInfomation__categoryWrapper">
        <es-button
          v-if="infoLinkBtn.length"
          url="/news/info"
          color="gray"
          arrow="right"
          class="es-League-newsInfomation__categoryBtn"
          >お知らせ</es-button
        >
        <es-button
          v-if="reportLinkBtn.length"
          url="/news/report"
          color="gray"
          arrow="right"
          class="es-League-newsInfomation__categoryBtn"
          >試合レポート</es-button
        >
        <es-button
          v-if="eventLinkBtn.length"
          url="/news/event-info"
          color="gray"
          arrow="right"
          class="es-League-newsInfomation__categoryBtn"
          >イベント</es-button
        >
      </div>
    </div>
    <es-button url="/" class="es-League-newsInfomation__btn team"
      >TOPページへ</es-button
    >
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import news from '~/components/integration/organisms/news.vue'

export default {
  components: { news },
  computed: {
    ...mapGetters(['getNewsList']),
    infoLinkBtn() {
      // レポートのリストを抽出
      const lists = this.getNewsList
      const categoryList = lists.filter((list) => {
        return list.category[0] === 'お知らせ'
      })
      return categoryList
    },
    reportLinkBtn() {
      // レポートのリストを抽出
      const lists = this.getNewsList
      const categoryList = lists.filter((list) => {
        return list.category[0] === '試合レポート'
      })
      return categoryList
    },
    eventLinkBtn() {
      // レポートのリストを抽出
      const lists = this.getNewsList
      const categoryList = lists.filter((list) => {
        return list.category[0] === 'イベント'
      })
      return categoryList
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-newsInfomation {
  padding: 80px 0px 40px;
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
  &__contents {
    margin: 0 16px;
  }
  &__category {
    background-color: #fff;
    color: #a37b30;
    padding: 3px 8px;
    border: 1px solid #a37b30;
    font-size: 12px;
    margin-left: 5px;
  }
  &__categoryLists {
    margin: 50px 16px;
  }
  &__categoryTitle {
    font-size: 16px;
    font-weight: bold;
    border-bottom: 2px solid #000;
    padding-bottom: 7px;
  }
  &__categoryWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    justify-items: center;
    align-items: center;
    margin-top: 10px;
  }

  &__btn {
    margin: 40px auto 0;
  }
}
</style>
