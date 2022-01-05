<template>
  <button class="button" @click="$router.go(-1)">戻る</button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.button {
  width: 160px;
  height: 38px;
  padding: 0;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: #666666;
  border-radius: 2px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    width: 4px;
    height: 13px;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 8px;
    background: url(~/assets/img/arrow-left.svg);
  }
}
</style>
