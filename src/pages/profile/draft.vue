<template>
  <div class="es-League-profile">
    <h2 class="es-League-profile__title">
      PLAYER DETAIL<br /><span>選手詳細</span>
    </h2>

    <div
      class="es-League-profile__visualWrapper"
      :class="{
        women: gender === 'women',
      }"
    >
      <picture>
        <source
          :srcset="`${silhouette}?webp')`"
          type="image/webp"
          :alt="data.name"
          class="es-League-profile__image"
          :class="{
            women: gender === 'women',
          }"
        />
        <img
          :src="silhouette"
          :alt="data.name"
          class="es-League-profile__image"
          :class="{
            women: gender === 'women',
          }"
        />
      </picture>

      <div
        class="es-League-profile__nameWrapper"
        :class="{ women: gender === 'women' }"
      >
        <p class="es-League-profile__name">{{ data.name }}</p>
        <p class="es-League-profile__englishName">{{ data.english }}</p>
      </div>
      <div class="es-League-profile__positionWrapper">
        <p class="es-League-profile__uniformNumber" :class="`${color}`">
          {{ data.number }}
        </p>
        <p class="es-League-profile__position">{{ position }}</p>
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
          <p class="es-League-profile__text">{{ data.stature }}cm</p>
        </div>
        <div class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">出身地</p>
          <p class="es-League-profile__text">{{ data.birthplace }}</p>
        </div>
        <div class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">出身大学</p>
          <p class="es-League-profile__text">{{ data.university }}</p>
        </div>
        <div class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">ストロング<br />ポイント</p>
          <p class="es-League-profile__text">{{ data.playstyle }}</p>
        </div>
        <div class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">尊敬する人</p>
          <p class="es-League-profile__text">{{ data.respect }}</p>
        </div>
        <div class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">
            競技を<br class="pc" />始めた理由
          </p>
          <p class="es-League-profile__text">{{ data.reason }}</p>
        </div>
        <div class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">戦歴</p>
          <p class="es-League-profile__text history">{{ data.history }}</p>
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
  data() {
    return {
      data: {},
      silhouette: '',
      position: '',
      gender: '',
      color: '',
    }
  },
  computed: {
    formatData() {
      return moment(this.birth).format('YYYY/MM/DD')
    },
  },
  async created() {
    const path = this.$route.query.id
    const draftKey = this.$route.query.draftKey
    const res = await this.$axios.$get(
      `https://es-league.microcms.io/api/v1/player-details/${path}?draftKey=${draftKey}`,
      {
        headers: {
          'X-MICROCMS-API-KEY': '6f5f8298ae11472da2dee970abc8407d9cdf',
        },
      }
    )
    this.data = res
    this.silhouette = res.imageSilhouette.url
    this.position = res.position[0]
    this.gender = res.team.gender[0]
    this.color = res.team.teamcolor
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
    margin: 24px 0 0;
    height: 365px;
    overflow: hidden;
  }

  &__image {
    position: absolute;
    width: 160px;
    right: 16px;
    bottom: 0;
    &.women {
      width: 220px;
      right: -5px;
      bottom: -5px;
    }
    &.ms {
      width: 183px;
    }
    &.ht {
      width: 180px;
    }
  }

  &__nameWrapper {
    position: absolute;
    top: 40px;
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
      &.women {
        height: 300px;
      }
    }
    &__image {
      right: 0;
      width: 145px;
      &.women {
        width: 180px;
      }
      &.ms {
        width: 168px;
      }
      &.ht {
        width: 160px;
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
      height: 580px;
    }
    &__image {
      width: 250px;
      top: 0;
      &.women {
        width: 340px;
      }
      &.ms {
        width: 295px;
      }
      &.ht {
        width: 290px;
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
</style>
