<template>
  <div class="es-League-info">
    <h2 class="es-League-info__title">
      INFOMATION<br />
      <span>お知らせ</span>
    </h2>
    <div class="es-League-info__wrapper">
      <div class="es-League-info__contents">
        <news />
      </div>
    </div>
  </div>
</template>

<script>
import news from '~/components/integration/organisms/news.vue'

export default {
  components: { news },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.es-League-info {
  margin: 0 16px 34px;
  &__title {
    text-align: center;
    font-size: 32px;
    color: #000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 16px;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
      color: #030012;
    }
  }
  &__wrapper {
    margin-top: 24px;
    min-height: 386px;
  }
}
</style>
