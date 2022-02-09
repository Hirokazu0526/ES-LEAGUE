<template>
  <div class="es-League-sponsor">
    <h3 class="es-League-sponsor__title">
      SPONSOR<br /><span>スポンサー</span>
    </h3>
    <div class="es-League-sponsor__list">
      <ul class="es-League-sponsor__listWrapper">
        <li
          v-for="item in logoLists"
          :key="item.id"
          class="es-League-sponsor__listItem"
        >
          <a :href="item.url" target="_blank">
            <picture>
              <source
                :srcset="`${item.imgUrl}?webp')`"
                type="image/webp"
                :alt="item.alt"
                :class="item.name"
                class="es-League-sponsor__itemImg"
              />
              <img
                :src="item.imgUrl"
                :alt="item.alt"
                :class="item.name"
                class="es-League-sponsor__itemImg"
              />
            </picture>
          </a>
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
          url: 'https://www.saraya.com/',
        },
        {
          id: 2,
          name: 'libgate',
          imgUrl: require('~/assets/img/logo/libgate.svg'),
          alt: 'LibGate',
          url: 'https://lib-gate.co.jp/',
        },
        {
          id: 3,
          name: 'bvd',
          imgUrl: require('~/assets/img/logo/bvd.svg'),
          alt: 'B.V.D.',
          url: 'https://www.bvd.jp/',
        },
        {
          id: 4,
          name: 'svolme',
          imgUrl: require('~/assets/img/logo/svolme.svg'),
          alt: 'SVOLME',
          url: 'https://www.svolme.net/',
        },
        {
          id: 5,
          name: 'xyou',
          imgUrl: require('~/assets/img/logo/xyou.svg'),
          alt: 'XYOU',
          url: 'https://xyou.co.jp/',
        },
        {
          id: 6,
          name: 'liberty',
          imgUrl: require('~/assets/img/logo/liberty.svg'),
          alt: 'リバティーエステート',
          url: 'https://www.liberty-estate.co.jp/',
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
    border: 1px solid #999999;
    line-height: 0; //svgによるずれを修正
    &:last-child {
      margin-bottom: 0;
    }
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }

  &__itemImg {
    display: block;
  }
}
@media screen and (min-width: 768px) {
  .es-League-sponsor {
    &__listWrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    &__listItem {
      flex: 1;
      min-width: 280px;
      &:nth-child(2n-1) {
        margin-right: 5px;
      }
    }
    &__title {
      font-size: 45px;
      & span {
        font-size: 24px;
      }
    }
  }
}
</style>
