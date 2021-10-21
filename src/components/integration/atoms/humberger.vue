<template>
  <div>
    <div
      class="burger-btn"
      :class="{ 'is-active': open }"
      @click="open = !open"
    >
      <template v-if="!open">
        <span class="bar bar_top--open"></span>
        <span class="bar bar_mid--open"></span>
        <span class="bar bar_bottom--open"></span>
      </template>
      <template v-else>
        <span class="bar--close">×</span>
      </template>
    </div>
    <div class="menu" :class="{ 'is-active': open }">
      <div class="menu__item">TOP</div>
      <div class="menu__item">ABOUT</div>
      <div class="menu__item">BLOG</div>
      <div class="menu__item">CONTACT</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.burger-btn {
  display: block;
  width: 39px;
  height: 39px;
  position: relative;
  z-index: 3;
  border: none;
}
.bar {
  width: 20px;
  height: 1px;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  &_top--open {
    top: 10px;
  }
  &_mid--open {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &_bottom--open {
    bottom: 10px;
  }
  &--close {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 200px;
    font-weight: bold;
    color: #fff;
  }
}
.menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #555;
}
.menu__item {
  width: 100%;
  height: auto;
  padding: 0.5em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}

/*----------------------------
* アニメーション部分
*----------------------------*/

/* アニメーション前のメニューの状態 */
.menu {
  transform: translateX(100vw);
  transition: all 0.3s linear;
}
/* アニメーション後のメニューの状態 */
.menu.is-active {
  transform: translateX(0);
}
</style>
