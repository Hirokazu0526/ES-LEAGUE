<template>
  <div class="es-League-profile">
    <h2 class="es-League-profile__title">
      PLAYER DETAIL<br /><span>選手詳細</span>
    </h2>

    <div class="es-League-profile__visualWrapper">
      <img
        :src="imageSilhouette.url"
        :alt="name"
        class="es-League-profile__image"
      />
      <div class="es-League-profile__nameWrapper">
        <h1 class="es-League-profile__name">{{ name }}</h1>
        <p class="es-League-profile__englishName">{{ english }}</p>
      </div>
      <div class="es-League-profile__positionWrapper">
        <p
          class="es-League-profile__uniformNumber"
          :class="`${team.teamcolor}`"
        >
          {{ number }}
        </p>
        <p class="es-League-profile__position">{{ position[0] }}</p>
      </div>
    </div>
    <div class="es-League-profile__info">
      <h3 class="es-League-profile__sectionTitle">PROFILE</h3>
      <div class="es-League-profile__profileList">
        <p class="es-League-profile__textTitle">誕生日</p>
        <p class="es-League-profile__text">{{ formatData }}</p>
      </div>
      <div class="es-League-profile__profileList">
        <p class="es-League-profile__textTitle">出身地</p>
        <p class="es-League-profile__text">{{ birthplace }}</p>
      </div>
      <div class="es-League-profile__profileList">
        <p class="es-League-profile__textTitle">出身大学</p>
        <p class="es-League-profile__text">{{ university }}</p>
      </div>
      <div class="es-League-profile__profileList">
        <p class="es-League-profile__textTitle">スタイル</p>
        <p class="es-League-profile__text">{{ playstyle }}</p>
      </div>
      <div class="es-League-profile__profileList">
        <p class="es-League-profile__textTitle">尊敬する人</p>
        <p class="es-League-profile__text">{{ respect }}</p>
      </div>
      <div class="es-League-profile__profileList">
        <p class="es-League-profile__textTitle">競技を始めた理由</p>
        <p class="es-League-profile__text">{{ reason }}</p>
      </div>
      <div class="es-League-profile__profileList">
        <p class="es-League-profile__textTitle">戦歴</p>
        <p class="es-League-profile__text history">{{ history }}</p>
        <!-- <p class="es-League-profile__text history">{{ formatHistory }}</p> -->
      </div>
    </div>
    <div v-if="false" class="es-League-profile__info">
      <h3 class="es-League-profile__sectionTitle">PERSONAL DATA</h3>
      <div class="es-League-profile__profileList">
        <p class="es-League-profile__textTitle">レシーブ成功率</p>
        <p class="es-League-profile__text">75%</p>
      </div>
      <div class="es-League-profile__profileList">
        <p class="es-League-profile__textTitle">サービス成功率</p>
        <p class="es-League-profile__text">75%</p>
      </div>
      <div class="es-League-profile__profileList">
        <p class="es-League-profile__textTitle">サービスエース</p>
        <p class="es-League-profile__text">75%</p>
      </div>
      <div class="es-League-profile__profileList">
        <p class="es-League-profile__textTitle">アタックレシーブ</p>
        <p class="es-League-profile__text">75%</p>
      </div>
    </div>

    <div class="es-League-profile__btnWrapper">
      <back-button />
      <es-button url="/team" class="es-League-team__btn">チーム一覧</es-button>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
export default {
  async asyncData({ params, $microcms, error }) {
    try {
      const data = await $microcms.get({
        endpoint: `player-details/${params.slug}`,
      })
      return data
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      })
    }
  },
  computed: {
    formatData() {
      return moment(this.birth).format('YYYY年M月D日')
    },
    // formatHistory() {
    //   return this.history.split(' ').join('\n')
    // },
  },
}
</script>

<style lang="scss" scoped>
.es-League-profile {
  margin: 0px 16px;
  padding: 95px 0px;
  text-align: center;
  color: #000;

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

  &__visualWrapper {
    position: relative;
    margin: 24px 0 0;
    height: 365px;
    overflow: hidden;
  }

  &__image {
    position: absolute;
    width: 160px;
    right: 16px;
  }

  &__nameWrapper {
    position: absolute;
    top: 40px;
    left: 16px;
    text-align: left;
  }
  &__name {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 4px;
  }
  &__englishName {
    font-size: 18px;
    font-weight: normal;
  }
  &__positionWrapper {
    position: absolute;
    bottom: 40px;
    left: 16px;
  }
  &__uniformNumber {
    font-size: 80px;
    font-family: 'HNewYork';
    &.green {
      color: #00a39c;
    }
    &.red {
      color: #7a0100;
    }
    &.blue {
      color: #16409c;
    }
    &.black {
      color: #241816;
    }
    &.yellow {
      color: #ebeb24;
    }
    &.orange {
      color: #e77427;
    }
    &.pink {
      color: #dc3773;
    }
    &.skyblue {
      color: #a0c8d8;
    }
  }
  &__position {
    font-size: 20px;
    font-family: 'HNewYork';
  }

  &__info {
    margin-bottom: 40px;
  }

  &__sectionTitle {
    font-size: 22px;
    padding: 10px 0;
    text-align: center;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
  }
  &__profileList {
    display: grid;
    grid-template-columns: 112px 1fr;
    column-gap: 21px;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 10px 16px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px dashed #000;
    &:last-child {
      border-bottom: none;
    }
    span {
      font-weight: normal;
    }
  }
  &__textTitle {
    font-size: 14px;
    font-weight: bold;
    text-align: left;
  }

  &__text {
    font-size: 14px;
    font-weight: normal;
    text-align: left;
    line-height: 1.4;
    &.history {
      white-space: break-spaces;
    }
  }
  &__btn {
    margin: 15px auto 0;
  }
  &__btnWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    justify-items: center;
  }
}
</style>
