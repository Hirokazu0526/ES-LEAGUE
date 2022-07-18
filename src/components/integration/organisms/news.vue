<template>
  <section class="es-League-news">
    <ul class="es-League-news__list">
      <li v-for="item in newsData" :key="item.id" class="es-League-news__item">
        <nuxt-link :to="`/news/${item.categoryId[0]}/${item.id}`">
          <div class="es-League-news__itemWrapper">
            <img
              :src="item.image === undefined ? defaultImg : item.image.url"
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

              <h3 class="es-League-news__title">{{ item.newsTitle }}</h3>
            </div>
            <link-arrow class="es-League-news__linkArrow" />
          </div>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
// import moment from 'moment-timezone'
// import { mapGetters } from 'vuex'
import linkArrow from '~/components/integration/atoms/link-arrow.vue'

export default {
  components: { linkArrow },
  props: {
    newsData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      defaultImg: require('~/assets/img/news-logo.png'),
    }
  },
  // computed: {
  // ...mapGetters(['getNewsList']),
  // newsLists() {
  //   return this.getNewsList.slice(0, 5)
  // },
  // formatDate() {
  //   return moment(this.date).format('YYYY年M月D日')
  // },
  // },
}
</script>

<style lang="scss" scoped>
.es-League-news {
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
  &__title {
    font-size: 12px;
    font-weight: normal;
    line-height: 1.2;
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
}
@media screen and (max-width: 374px) {
  .es-League-news {
    &__itemWrapper {
      grid-template-columns: 40px 1fr 20px;
    }
    &__itemImage {
      width: 40px;
      height: 40px;
    }
    &__date {
      font-size: 10px;
    }
    &__category {
      font-size: 10px;
    }
  }
}
@media screen and (min-width: 768px) {
  .es-League-news {
    &__itemWrapper {
      grid-template-columns: 85px 1fr 20px;
      gap: 10px;
    }
    &__itemImage {
      width: 85px;
      height: 85px;
    }
    &__date {
      font-size: 16px;
      margin-bottom: 15px;
    }
    &__category {
      padding: 5px 8px;
      font-size: 15px;
    }
    &__title {
      font-size: 18px;
    }
  }
}
</style>
