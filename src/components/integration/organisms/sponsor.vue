<template>
  <div class="es-League-sponsor">
    <h3 class="es-League-sponsor__title">
      SPONSOR<br /><span>スポンサー</span>
    </h3>
    <div class="es-League-sponsor__list">
      <ul>
        <li
          v-for="item in logoLists"
          :key="item.id"
          class="es-League-sponsor__listItem"
        >
          <img
            :src="item.imgUrl"
            :alt="item.alt"
            :class="item.name"
            class="es-League-sponsor__itemImg"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoLists: [
        {
          id: 1,
          name: 'saraya',
          imgUrl: require('~/assets/img/logo/saraya.svg'),
          alt: 'SARAYA',
        },
        {
          id: 2,
          name: 'libgate',
          imgUrl: require('~/assets/img/logo/libgate.svg'),
          alt: 'LibGate',
        },
        {
          id: 3,
          name: 'bvd',
          imgUrl: require('~/assets/img/logo/bvd.svg'),
          alt: 'BVD',
        },
        {
          id: 4,
          name: 'svolme',
          imgUrl: require('~/assets/img/logo/svolme.svg'),
          alt: 'SVOLME',
        },
        {
          id: 5,
          name: 'xyou',
          imgUrl: require('~/assets/img/logo/xyou.svg'),
          alt: 'XYOU',
        },
        {
          id: 6,
          name: 'liberty',
          imgUrl: require('~/assets/img/logo/liberty.svg'),
          alt: 'リバティーエステート',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.es-League-sponsor {
  padding-top: 20px;
  margin: 0 16px 80px;
  &__title {
    font-weight: bold;
    text-align: center;
    padding: 10px 0;
    font-size: 32px;
    color: #000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
    }
  }

  &__list {
    margin-top: 24px;
  }

  &__listItem {
    margin-bottom: 16px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #999999;
    &:last-child {
      margin-bottom: 0;
    }
  }

  &__itemImg {
    display: block;
  }
}
</style>
