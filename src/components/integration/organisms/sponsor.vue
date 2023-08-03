<template>
  <div class="es-League-sponsor">
    <h3 class="es-League-sponsor__title">
      LEAGUE PARTNERS<br /><span>リーグパートナー</span>
    </h3>
    <!-- <div class="es-League-sponsor__list">
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
    </div> -->
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
      <h4 class="es-League-sponsor__partnerTitle">Official Supplier</h4>
      <ul class="es-League-sponsor__listWrapper">
        <li
          v-for="item in OfficialSupplier"
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
      // titlePartner: {
      //   name: 'saraya',
      //   imgUrl: require('~/assets/img/logo/saraya.svg'),
      //   alt: 'SARAYA',
      //   url: 'https://www.saraya.com/',
      // },
      // streamingPartner: {
      //   name: 'xyou',
      //   imgUrl: require('~/assets/img/logo/xyou.svg'),
      //   alt: 'XYOU',
      //   url: 'https://xyou.co.jp/',
      // },
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
          name: '文化シヤッター',
          imgUrl: require('~/assets/img/logo/bunkashata.svg'),
          alt: '文化シヤッター',
          url: 'https://www.bunka-s.co.jp/',
        },
        {
          id: 3,
          name: 'setagaya',
          imgUrl: require('~/assets/img/logo/setagaya.svg'),
          alt: '世田谷自然食品',
          url: 'https://www.shizensyokuhin.jp/',
        },
        {
          id: 4,
          name: 'isuzu',
          imgUrl: require('~/assets/img/logo/isuzu.svg'),
          alt: 'いすゞ自動車首都圏株式会社',
          url: 'https://www.isuzu-syutoken.co.jp/',
        },
        {
          id: 5,
          name: 'saraya',
        imgUrl: require('~/assets/img/logo/saraya.svg'),
        alt: 'SARAYA',
        url: 'https://www.saraya.com/',
        },
        {
          id: 6,
          name: 'pal-yakyoku',
        imgUrl: require('~/assets/img/logo/pal.svg'),
        alt: 'パル薬局',
        url: 'http://www.palhonest.co.jp/',
        },
        {
          id: 7,
          name: 'svolme',
          imgUrl: require('~/assets/img/logo/svolme.svg'),
          alt: 'SVOLME',
          url: 'https://www.svolme.net/',
        },
        {
          id: 8,
          name: 'bvd',
          imgUrl: require('~/assets/img/logo/bvd.svg'),
          alt: 'B.V.D.',
          url: 'https://www.bvd.jp/',
        },
        {
          id: 9,
          name: 'anytimefitness',
          imgUrl: require('~/assets/img/logo/anytime.svg'),
          alt: 'エニタイムフィットネス',
          url: 'https://www.anytimefitness.co.jp/',
        },
        {
          id: 10,
          name: 'shintaka',
          imgUrl: require('~/assets/img/logo/shintaka.svg'),
          alt: 'Shintaka Co.,Ltd.',
          url: 'http://www.shinsuke-koi.com/',
        },
        {
          id: 11,
          name: '阪神酒販',
          imgUrl: require('~/assets/img/logo/hanshin.svg'),
          alt: '阪神酒販',
          url: 'https://hanshinshuhan.co.jp/',
        },
      ],
      OfficialSupplier: [
        {
          id: 1,
          name: 'ZAMST',
          imgUrl: require('~/assets/img/logo/zamst.svg'),
          alt: 'ZAMST',
          url: 'https://www.zamst-online.jp/',
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
