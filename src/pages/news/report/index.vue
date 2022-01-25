<template>
  <section class="es-League-newsReport">
    <h2 class="es-League-newsReport__title">
      Match Report<br />
      <span>試合レポート</span>
    </h2>
    <div class="es-League-newsReport__contents">
      <news :news-data="reportCategory" />
    </div>
    <div class="es-League-newsReport__categoryLists">
      <p class="es-League-newsReport__categoryTitle">カテゴリ</p>
      <div class="es-League-newsReport__categoryWrapper">
        <es-button
          v-if="infoLinkBtn.length"
          url="/news/info"
          color="gray"
          arrow="right"
          class="es-League-newsReport__categoryBtn"
          >お知らせ</es-button
        >
        <es-button
          v-if="eventLinkBtn.length"
          url="/news/event-info"
          color="gray"
          arrow="right"
          class="es-League-newsReport__categoryBtn"
          >イベント</es-button
        >
      </div>
    </div>
    <es-button url="/news" arrow="right" class="es-League-newsReport__btn"
      >ニュース一覧</es-button
    >
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import news from '~/components/integration/organisms/news.vue'

export default {
  components: { news },
  head() {
    return {
      title: 'ニュース一覧/試合レポート',
    }
  },
  computed: {
    ...mapGetters(['getNewsList']),
    reportCategory() {
      // レポートのリストを抽出
      const lists = this.getNewsList
      const categoryList = lists.filter((list) => {
        return list.category[0] === '試合レポート'
      })
      return categoryList
    },
    infoLinkBtn() {
      // レポートのリストを抽出
      const lists = this.getNewsList
      const categoryList = lists.filter((list) => {
        return list.category[0] === 'お知らせ'
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
.es-League-newsReport {
  padding: 80px 0px 40px;
  &__title {
    margin: 20px 0;
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
@media screen and (min-width: 768px) {
  .es-League-newsReport {
    max-width: 600px;
    margin: 0 auto;
    &__title {
      font-size: 45px;
      margin-bottom: 35px;
      & span {
        font-size: 24px;
      }
    }
    &__contents {
      min-height: 372px;
    }
    &__btn {
      margin-top: 100px;
      margin-bottom: 45px;
    }
  }
}
</style>
