<template>
  <div class="es-League-sponsor">
    <h3 class="es-League-sponsor__title">
      LEAGUE PARTNERS<br /><span>リーグパートナー</span>
    </h3>
    <div class="es-League-sponsor__list">
      <h4 class="es-League-sponsor__partnerTitle">Title Partner</h4>
      <div class="es-League-sponsor__listItem center">
        <a :href="titlePartner.url" target="_blank">
          <img
            :src="titlePartner.imgUrl"
            :alt="titlePartner.alt"
            :class="titlePartner.name"
            class="es-League-sponsor__itemImg"
          />
        </a>
      </div>
    </div>
    <div class="es-League-sponsor__list">
      <h4 class="es-League-sponsor__partnerTitle">Live Streaming Partner</h4>
      <div class="es-League-sponsor__listItem center">
        <a :href="streamingPartner.url" target="_blank">
          <img
            :src="streamingPartner.imgUrl"
            :alt="streamingPartner.alt"
            :class="streamingPartner.name"
            class="es-League-sponsor__itemImg"
          />
        </a>
      </div>
    </div>
    <div class="es-League-sponsor__list">
      <h4 class="es-League-sponsor__partnerTitle">Official Partner</h4>
      <ul class="es-League-sponsor__listWrapper">
        <li
          v-for="item in officalPartner"
          :key="item.id"
          class="es-League-sponsor__listItem"
        >
          <a :href="item.url" target="_blank">
            <img
              :src="item.imgUrl"
              :alt="item.alt"
              :class="item.name"
              class="es-League-sponsor__itemImg"
            />
          </a>
        </li>
      </ul>
    </div>
    <div class="es-League-sponsor__list">
      <h4 class="es-League-sponsor__partnerTitle">Media Partner</h4>
      <ul class="es-League-sponsor__listWrapper">
        <li
          v-for="item in MediaPartner"
          :key="item.id"
          class="es-League-sponsor__listItem"
        >
          <a :href="item.url" target="_blank">
            <img
              :src="item.imgUrl"
              :alt="item.alt"
              :class="item.name"
              class="es-League-sponsor__itemImg"
            />
          </a>
        </li>
      </ul>
    </div>
    <div class="es-League-sponsor__list">
      <h4 class="es-League-sponsor__partnerTitle">Wellness Partner</h4>
      <ul class="es-League-sponsor__listWrapper">
        <li
          v-for="item in WellnessPartner"
          :key="item.id"
          class="es-League-sponsor__listItem center"
        >
          <a :href="item.url" target="_blank">
            <img
              :src="item.imgUrl"
              :alt="item.alt"
              :class="item.name"
              class="es-League-sponsor__itemImg"
            />
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
      titlePartner: {
        name: 'saraya',
        imgUrl: require('~/assets/img/logo/saraya.svg'),
        alt: 'SARAYA',
        url: 'https://www.saraya.com/',
      },
      streamingPartner: {
        name: 'xyou',
        imgUrl: require('~/assets/img/logo/xyou.svg'),
        alt: 'XYOU',
        url: 'https://xyou.co.jp/',
      },
      officalPartner: [
        {
          id: 1,
          name: 'libgate',
          imgUrl: require('~/assets/img/logo/libgate.svg'),
          alt: 'LibGate',
          url: 'https://lib-gate.co.jp/',
        },
        {
          id: 2,
          name: 'bvd',
          imgUrl: require('~/assets/img/logo/bvd.svg'),
          alt: 'B.V.D.',
          url: 'https://www.bvd.jp/',
        },
        {
          id: 3,
          name: 'svolme',
          imgUrl: require('~/assets/img/logo/svolme.svg'),
          alt: 'SVOLME',
          url: 'https://www.svolme.net/',
        },
        {
          id: 4,
          name: 'liberty',
          imgUrl: require('~/assets/img/logo/liberty.svg'),
          alt: 'リバティーエステート',
          url: 'https://www.liberty-estate.co.jp/',
        },
        {
          id: 5,
          name: '阪神酒販',
          imgUrl: require('~/assets/img/logo/hanshin.svg'),
          alt: '阪神酒販',
          url: 'https://hanshinshuhan.co.jp/',
        },
        {
          id: 6,
          name: 'parksports',
          imgUrl: require('~/assets/img/logo/parksports.svg'),
          alt: 'PARKSPORTS',
          url: 'https://parksports.co.jp/',
        },
      ],
      MediaPartner: [
        {
          id: 1,
          name: 'athkatsu',
          imgUrl: require('~/assets/img/logo/athkatsu.svg'),
          alt: 'ATHKATSU',
          url: 'https://athkatsu.com/',
        },
        {
          id: 2,
          name: 'mysports',
          imgUrl: require('~/assets/img/logo/mysports.svg'),
          alt: 'MYSPORTS',
          url: 'https://sportsvektor.com/',
        },
      ],
      WellnessPartner: [
        {
          id: 1,
          name: 'basefood',
          imgUrl: require('~/assets/img/logo/basefood.svg'),
          alt: 'BASEFOOD',
          url: 'https://basefood.co.jp/',
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

  &__partnerTitle {
    color: #000;
    font-size: 24px;
    font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic, sans-serif;
    text-align: center;
    margin-bottom: 20px;
  }

  &__list {
    margin-top: 40px;
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
      max-width: 280px;
      min-width: 280px;
      &:nth-child(2n-1) {
        margin-right: 5px;
      }
      &.center {
        margin: 0 auto;
      }
    }
    &__title {
      font-size: 45px;
      & span {
        font-size: 24px;
      }
    }
    &__itemImg {
      &.basefood {
        width: 90%;
      }
    }
  }
}
@media screen and (max-width: 374px) {
  .es-League-sponsor {
    &__itemImg {
      &.basefood {
        width: 90%;
      }
    }
  }
}
</style>
