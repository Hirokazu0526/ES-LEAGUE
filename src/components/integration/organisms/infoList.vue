<template>
  <div class="es-League-info">
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
</template>

<script>
import tabList from '~/components/integration/organisms/tabList.vue'
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
  margin: 10px 16px 10px;
  &__tabContents {
    background-color: #8b8b8b;
    color: #fff;
  }
}
</style>
