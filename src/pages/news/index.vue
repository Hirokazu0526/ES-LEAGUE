<template>
  <section class="es-League-news">
    <h2 class="es-League-news__title">
      INFOMATION<br />
      <span>お知らせ</span>
    </h2>
    <ul class="es-League-news__list">
      <li
        v-for="item in getNewsList"
        :key="item.id"
        class="es-League-news__item"
      >
        <nuxt-link :to="`/news/${item.categoryId[0]}/${item.id}`">
          <span class="es-League-news__itemDate">{{ item.date }}</span>
          <p class="es-League-news__itemTitle">{{ item.newsTitle }}</p>
        </nuxt-link>
      </li>
    </ul>
    <es-button url="/" :border-radius="8" class="es-League-news__btn team"
      >TOPページへ</es-button
    >
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getNewsList']),
  },
}
</script>

<style lang="scss" scoped>
.es-League-news {
  padding: 95px 0px 40px;
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
    }
  }
  &__list {
    margin: 0 16px;
  }
  &__item {
    list-style: none;
    padding: 8px 0 8px 16px;
    background-color: #bababa;
    &:nth-child(2n) {
      background-color: #fff;
    }
    a {
      text-decoration: none;
      color: #344152;
    }
  }
  &__itemDate {
    font-size: 12px;
    font-weight: bold;
  }
  &__itemTitle {
    font-size: 15px;
    font-weight: bold;
    margin-top: 5px;
  }
  &__btn {
    margin: 40px auto 0;
  }
}
</style>
