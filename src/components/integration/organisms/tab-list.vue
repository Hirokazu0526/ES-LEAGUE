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
  display: grid;
  gap: 1px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  &__tabItem {
    font-size: 14px;
    font-weight: bold;
    color: #666666;
    padding: 10px 20px;
    text-align: center;
    list-style: none;
    background: linear-gradient(135deg, transparent 25px, #b6b6b6 20px);
    background-position: bottom right;
    background-size: 100%;
    background-repeat: no-repeat;
    a {
      text-decoration: none;
      margin-left: 10px;
    }
    &.selected {
      color: #fff;
      background: linear-gradient(135deg, transparent 25px, #030012 20px);
      background-position: bottom right;
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
}
</style>
