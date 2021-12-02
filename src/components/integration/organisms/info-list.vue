<template>
  <div class="es-League-info">
    <h2 class="es-League-info__title">
      NEWS<br />
      <span>お知らせ</span>
    </h2>
    <div class="es-League-info__wrapper">
      <tab-list
        :tab="tab"
        class="es-League-info__tab"
        @onClickTab="updateTabContents"
      />
      <div class="es-League-info__tabContents">
        <news v-if="tab === 'news'" />
        <blog v-else-if="tab === 'blog'" />
        <etc v-else-if="tab === 'etc'" />
      </div>
    </div>
  </div>
</template>

<script>
import tabList from '~/components/integration/organisms/tab-list.vue'
import news from '~/components/integration/organisms/news.vue'
import blog from '~/components/integration/organisms/blog.vue'
import etc from '~/components/integration/organisms/etc.vue'

const TAB_QUERY_LIST = ['news', 'blog', 'etc']

export default {
  components: { tabList, news, blog, etc },
  data() {
    return {
      tab: 'news',
    }
  },
  watch: {
    $route(after, before) {
      const tabQuery = after.query.tab
      if (TAB_QUERY_LIST.find((el) => el === tabQuery)) {
        this.tab = tabQuery
      }
    },
  },
  created() {
    const tab = this.$route.query.tab
    if (TAB_QUERY_LIST.find((el) => el === tab)) {
      this.tab = tab
    }
  },
  mounted() {},
  methods: {
    updateTabContents(selectedTab) {
      this.tab = selectedTab
      this.$router.push({
        ...this.$route.query,
        tab: selectedTab,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-info {
  padding: 40px 0;
  background-color: #fff;
  &__title {
    text-align: center;
    font-size: 32px;
    color: #030012;
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
      color: #030012;
    }
  }
  &__wrapper {
    margin: 20px 16px;
  }
  &__tabContents {
    background-color: #8b8b8b;
    color: #fff;
  }
}
</style>
