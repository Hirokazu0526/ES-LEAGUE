<template>
  <section class="es-League-etc">
    <ul class="es-League-etc__list">
      <li v-for="item in items" :key="item.id" class="es-League-etc__item">
        <nuxt-link :to="item.url">
          <div class="es-League-etc__title">
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
          title: '最新のETC1',
          url: '/news',
        },
        {
          id: 2,
          date: '2021年12月15日',
          title: '最新のETC2',
          url: '/news',
        },
        {
          id: 3,
          date: '2021年12月15日',
          title: '最新のETC3',
          url: '/news',
        },
        {
          id: 4,
          date: '2021年12月15日',
          title: '最新のETC4',
          url: '/news',
        },
        {
          id: 5,
          date: '2021年12月15日',
          title: '最新のETC5',
          url: '/news',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.es-League-etc {
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
