<template>
  <ul ref="tabList" class="es-League-TabList">
    <li
      ref="news"
      class="es-League-TabList__tabItem"
      :class="{ selected: tab === 'news' }"
      @click="onClickTab('news')"
    >
      <a>news</a>
    </li>
    <li
      ref="news"
      class="es-League-TabList__tabItem"
      :class="{ selected: tab === 'blog' }"
      @click="onClickTab('blog')"
    >
      <a>blog</a>
    </li>
    <li
      ref="news"
      class="es-League-TabList__tabItem"
      :class="{ selected: tab === 'etc' }"
      @click="onClickTab('etc')"
    >
      <a>etc</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tab: {
      type: String,
      default: 'news',
    },
  },
  methods: {
    onClickTab(tab) {
      this.$emit('onClickTab', tab)
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-TabList {
  position: relative;
  display: flex;
  gap: 1px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  &__tabItem {
    font-size: 14px;
    font-weight: bold;
    width: 90px;
    color: #666666;
    border: 1px solid #3895ff;
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    padding: 10px 20px;
    text-align: center;
    list-style: none;
    background-color: #fff;
    a {
      text-decoration: none;
    }
    &.selected {
      color: #fff;
      background-color: #3895ff;
    }
  }
}
</style>
