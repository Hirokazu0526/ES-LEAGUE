<template>
  <section class="es-League-news">
    <h2 class="es-League-news__title">お知らせ</h2>
    <ul class="es-League-news__list">
      <li
        v-for="item in getNewsList"
        :key="item.id"
        class="es-League-news__item"
      >
        <nuxt-link :to="`/news/${item.id}`">
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
    margin: 21px 0 45px;
    text-align: center;
    font-size: 32px;
    position: relative;
    color: #fff;
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
