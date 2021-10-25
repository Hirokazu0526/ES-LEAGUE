<template>
  <section class="es-League-blog">
    <ul class="es-League-blog__list">
      <li v-for="item in items" :key="item.id" class="es-League-blog__item">
        <nuxt-link :to="item.url">
          <div class="es-League-blog__title">
            <span>{{ item.date }}</span>
            <h3>{{ item.title }}</h3>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          date: '2021年12月15日',
          title: '最新のブログ1',
          url: '/blog',
        },
        {
          id: 2,
          date: '2021年12月15日',
          title: '最新のブログ2',
          url: '/blog',
        },
        {
          id: 3,
          date: '2021年12月15日',
          title: '最新のブログ3',
          url: '/blog',
        },
        {
          id: 4,
          date: '2021年12月15日',
          title: '最新のブログ4',
          url: '/blog',
        },
        {
          id: 5,
          date: '2021年12月15日',
          title: '最新のブログ5',
          url: '/blog',
        },
      ],
    }
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
