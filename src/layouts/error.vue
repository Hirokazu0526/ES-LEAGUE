<template>
  <div class="error">
    <p v-if="error.statusCode === 404">お探しのページは存在しません</p>
    <p v-else>エラーが発生しました</p>
    <es-button url="/" arrow="right" color="gray">TOPへ戻る</es-button>
    <!-- <p>ステータスコード：{{ error.statusCode }}</p>
    <p>メッセージ：{{ error.message }}</p> -->
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.error {
  min-height: 600px;
}
</style>
