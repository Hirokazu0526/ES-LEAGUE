<template>
  <div>
    <p>お探しのページは存在しません</p>
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
      default() {
        return {}
      },
    },
  },
}
</script>
