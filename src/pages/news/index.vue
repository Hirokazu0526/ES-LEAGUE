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
          <div class="es-League-news__itemWrapper">
            <img
              src="~/assets/img/news-logo.png"
              class="es-League-news__itemImage"
              alt=""
            />
            <div class="es-League-news__dateInfo">
              <p class="es-League-news__date">
                {{ item.date
                }}<span class="es-League-news__category">{{
                  item.category[0]
                }}</span>
              </p>

              <h3 class="es-League-news__itemTitle">{{ item.newsTitle }}</h3>
            </div>
            <link-arrow class="es-League-news__linkArrow" />
          </div>
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
import linkArrow from '~/components/integration/atoms/link-arrow.vue'

export default {
  components: { linkArrow },
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
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
    }
  }
  &__list {
    margin: 0 16px;
  }
  &__itemWrapper {
    display: grid;
    grid-template-columns: 64px 1fr 20px;
    gap: 7px;
  }
  &__item {
    list-style: none;
    padding: 5px 10px;
    line-height: 30px;
    background-color: #eeeeee;
    margin-bottom: 2px;
    a {
      text-decoration: none;
      color: #030012;
    }
  }
  &__itemImage {
    width: 64px;
    height: 64px;
  }
  &__dateInfo {
    padding-top: 5px;
  }
  &__date {
    font-size: 12px;
    margin-bottom: 10px;
  }
  &__itemTitle {
    font-size: 12px;
    font-weight: normal;
    line-height: 12px;
    word-break: break-all;
  }
  &__category {
    background-color: #fff;
    color: #a37b30;
    padding: 3px 8px;
    border: 1px solid #a37b30;
    font-size: 12px;
    margin-left: 5px;
  }
  &__linkArrow {
    margin: auto 0;
  }
  &__btn {
    margin: 40px auto 0;
  }
}
</style>
