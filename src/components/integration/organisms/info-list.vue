<template>
  <div class="es-League-info">
    <h2 class="es-League-info__title">
      NEWS<br />
      <span>ニュース</span>
    </h2>
    <div class="es-League-info__wrapper">
      <div class="es-League-info__contents">
        <news :news-data="newsLists" />
      </div>
      <es-button url="/news" arrow="right" class="es-League-info__btn"
        >ニュース一覧</es-button
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import news from '~/components/integration/organisms/news.vue'

export default {
  components: { news },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getNewsList']),
    newsLists() {
      return this.getNewsList.slice(0, 5)
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-info {
  margin: 0 16px 34px;
  &__title {
    text-align: center;
    font-size: 32px;
    color: #000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 16px;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
      color: #030012;
    }
  }
  &__wrapper {
    margin-top: 24px;
  }
  &__btn {
    margin: 16px auto 0;
  }
}
@media screen and (min-width: 768px) {
  .es-League-info {
    &__title {
      margin-top: 50px;
      font-size: 45px;
      & span {
        font-size: 24px;
      }
    }
    &__btn {
      margin: 30px auto 0;
    }
  }
}
</style>
