<template>
  <section class="es-League-blog">
    <ul class="es-League-blog__list">
      <li v-for="item in blogLists" :key="item.id" class="es-League-blog__item">
        <nuxt-link :to="`/blog/${item.id}`">
          <div class="es-League-blog__title">
            <span>{{ item.date }}</span>
            <h3>{{ item.blogTitle }}</h3>
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
    ...mapGetters(['getBlogList']),
    blogLists() {
      return this.getBlogList.slice(0, 5)
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-blog {
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
