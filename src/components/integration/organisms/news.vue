<template>
  <section class="es-League-news">
    <ul class="es-League-news__list">
      <li v-for="item in newsLists" :key="item.id" class="es-League-news__item">
        <nuxt-link :to="`/news/${item.id}`">
          <div class="es-League-news__title">
            <span>{{ item.date }}</span>
            <h3>{{ item.newsTitle }}</h3>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
.es-League-news {
  &__item {
    list-style: none;
    padding: 5px 10px;
    line-height: 30px;
    &:nth-child(2n-1) {
      background-color: #3895ff;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>
