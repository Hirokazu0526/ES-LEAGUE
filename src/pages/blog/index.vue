<template>
  <section class="es-League-blog">
    <h2 class="es-League-blog__title">ブログ</h2>
    <ul class="es-League-blog__list">
      <li
        v-for="item in getBlogList"
        :key="item.id"
        class="es-League-blog__item"
      >
        <nuxt-link :to="`/blog/${item.id}`">
          <span class="es-League-blog__itemDate">{{ item.date }}</span>
          <p class="es-League-blog__itemTitle">{{ item.blogTitle }}</p>
        </nuxt-link>
      </li>
    </ul>
    <es-button url="/" :border-radius="8" class="es-League-blog__btn team"
      >TOPページへ</es-button
    >
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getBlogList']),
  },
}
</script>

<style lang="scss" scoped>
.es-League-blog {
  padding: 95px 0px 40px;
  &__title {
    margin: 21px 0 45px;
    text-align: center;
    font-size: 24px;
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
