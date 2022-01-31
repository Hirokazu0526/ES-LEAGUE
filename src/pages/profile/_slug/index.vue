<template>
  <div class="es-League-profile">
    <h2 class="es-League-profile__title">
      PLAYER DETAIL<br /><span>選手詳細</span>
    </h2>

    <div
      class="es-League-profile__visualWrapper"
      :class="{
        women: team.gender[0] === 'women',
      }"
    >
      <img
        :src="imageSilhouette.url"
        :alt="name"
        class="es-League-profile__image"
        :class="{
          women: team.gender[0] === 'women',
          ms: isHight,
          ht: english === 'Hogawa Tasuku',
        }"
      />
      <div
        class="es-League-profile__nameWrapper"
        :class="{ women: team.gender[0] === 'women' }"
      >
        <p class="es-League-profile__name">{{ name }}</p>
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
      <div class="es-League-profile__infoWrapper">
        <div class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">誕生日</p>
          <p class="es-League-profile__text">{{ formatData }}</p>
        </div>
        <div class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">身長</p>
          <p class="es-League-profile__text">{{ stature }}cm</p>
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
          <p class="es-League-profile__textTitle">ストロング<br />ポイント</p>
          <p class="es-League-profile__text">{{ playstyle }}</p>
        </div>
        <div class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">尊敬する人</p>
          <p class="es-League-profile__text">{{ respect }}</p>
        </div>
        <div class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">
            競技を<br class="pc" />始めた理由
          </p>
          <p class="es-League-profile__text">{{ reason }}</p>
        </div>
        <div class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">戦歴</p>
          <p class="es-League-profile__text history">{{ history }}</p>
          <!-- <p class="es-League-profile__text history">{{ formatHistory }}</p> -->
        </div>
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
    isHight() {
      if (this.english === 'Masuda Ryo' || this.english === 'Oyama Koki') {
        return true
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-profile {
  margin: 0px 16px;
  padding: 80px 0px;
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
    margin: 24px auto 0;
    height: 365px;
    max-width: 330px;
    &.women {
      height: 330px;
      max-width: 343px;
    }
  }

  &__image {
    position: absolute;
    width: 220px;
    right: 15px;
    bottom: 0;

    &.women {
      width: 200px;
      right: 0px;
    }
  }

  &__nameWrapper {
    position: absolute;
    top: 60px;
    left: 16px;
    text-align: left;
    &.women {
      top: 60px;
    }
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
  &__infoWrapper {
    display: grid;
    grid-template-columns: 1fr;
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
    line-height: 1.2;
  }

  &__text {
    font-size: 14px;
    font-weight: normal;
    text-align: left;
    line-height: 1.4;
    &.history {
      white-space: break-spaces;
    }
    &.pc {
      display: none;
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
@media screen and (max-width: 374px) {
  .es-League-profile {
    &__visualWrapper {
      height: 330px;
      max-width: 288px;
      &.women {
        height: 300px;
      }
    }
    &__image {
      right: 0;
      width: 200px;

      &.women {
        width: 180px;
        right: -10px;
      }
    }
    &__name {
      font-size: 25px;
    }
    &__englishName {
      font-size: 15px;
    }
    &__text {
      font-size: 12px;
    }
    &__profileList {
      column-gap: 5px;
      padding: 10px 5px 10px 5px;
    }
    &__textTitle {
      font-size: 12px;
    }
  }
}
@media screen and (min-width: 768px) {
  .es-League-profile {
    max-width: 700px;
    margin: 0 auto;
    &__title {
      font-size: 45px;
      & span {
        font-size: 24px;
      }
    }
    &__visualWrapper {
      min-height: 580px;
      max-width: 700px;
      &.women {
        max-width: 700px;
      }
    }
    &__image {
      width: 345px;
      bottom: 0;
      right: 70px;

      &.women {
        width: 340px;
      }
    }

    &__nameWrapper {
      top: 120px;
      left: 15%;
      &.women {
        top: 120px;
      }
    }
    &__name {
      font-size: 55px;
      margin-bottom: 10px;
    }
    &__englishName {
      font-size: 35px;
    }
    &__positionWrapper {
      bottom: 50px;
      left: 15%;
    }
    &__uniformNumber {
      font-size: 180px;
    }
    &__position {
      font-size: 40px;
    }
    &__info {
      margin: 0 32px 40px;
    }
    &__infoWrapper {
      grid-template-columns: 1fr 1fr;
    }
    &__text {
      font-size: 14px;
      &.pc {
        display: block;
      }
    }
    &__profileList {
      column-gap: 5px;
      padding: 10px 5px 10px 5px;
      &:nth-last-child(2),
      &:last-child {
        border-bottom: none;
      }
    }
    &__textTitle {
      font-size: 14px;
    }
    &__btnWrapper {
      width: 500px;
      margin: 0 auto;
    }
  }
}
@media screen and (min-width: 950px) {
  .es-League-profile {
    max-width: 850px;
    &__visualWrapper {
      margin: auto;
    }
  }
}
</style>
