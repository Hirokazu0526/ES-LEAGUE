<template>
  <div class="es-League-policy">
    <h2 class="es-League-policy__title">
      POLICY<br /><span>プライバシーポリシー</span>
    </h2>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="getPolicy"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getPolicy']),
  },
}
</script>

<style lang="scss" scoped>
.es-League-policy {
  margin: 0px 16px;
  padding: 80px 0px 40px;

  &__text {
    text-align: center;
    padding: 10px 16px;
    line-height: 1.5;
  }

  &__title {
    margin: 24px 0;
    text-align: center;
    font-size: 32px;
    color: #000000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
    }
  }
}
::v-deep {
  h4 {
    margin: 10px 0;
  }
}
@media screen and (min-width: 768px) {
  .es-League-policy {
    max-width: 700px;
    margin: 0 auto;
    &__title {
      font-size: 45px;
      & span {
        font-size: 24px;
      }
    }
  }
}
</style>
