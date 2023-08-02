<template>
  <div class="es-League-profile">
    <h2 class="es-League-profile__title">
      PLAYER DETAIL<br /><span>選手詳細</span>
    </h2>

    <div
      class="es-League-profile__visualWrapper"
    >
      <img
        :src="playerData.imageSilhouette.url"
        :alt="playerData.name"
        class="es-League-profile__image"
      />
      <div
        class="es-League-profile__nameWrapper"
      >
        <p class="es-League-profile__name" :class="{ prewarp: name === 'SIENES WARLITO JR.' }">{{ formatName }}</p>
        <p class="es-League-profile__englishName">{{ english }}</p>
      </div>
      <div class="es-League-profile__positionWrapper">
        <p
          class="es-League-profile__uniformNumber"
          :class="`${playerData.team.teamcolor}`"
        >
          {{ playerData.number }}
        </p>
        <p class="es-League-profile__position">{{ playerData.position[0] }}</p>
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
          <p class="es-League-profile__text">{{ playerData.stature }}cm</p>
        </div>
        <div v-if="false" class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">出身地</p>
          <p class="es-League-profile__text">{{ playerData.birthplace }}</p>
        </div>
        <div v-if="false" class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">出身校</p>
          <p class="es-League-profile__text">{{ university }}</p>
        </div>
        <div v-if="false" class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">ストロング<br />ポイント</p>
          <p class="es-League-profile__text">{{ playerData.playstyle }}</p>
        </div>
        <div v-if="false" class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">尊敬する人</p>
          <p class="es-League-profile__text">{{ playerData.respect }}</p>
        </div>
        <div v-if="false" class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">
            競技を<br class="pc" />始めた理由
          </p>
          <p class="es-League-profile__text">{{ playerData.reason }}</p>
        </div>
        <div v-if="false" class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">戦歴</p>
          <p class="es-League-profile__text history">
            {{ playerData.history }}
          </p>
          <!-- <p class="es-League-profile__text history">{{ formatHistory }}</p> -->
        </div>
      </div>
    </div>
    <div v-if="true" class="es-League-profile__info stats">
      <h3 class="es-League-profile__sectionTitle">PERSONAL DATA</h3>
      <!-- <stats :player-data="playerData" /> -->
      <div ref="stats" class="es-League-profile__statsWrapper">
        <img :src="statsBaseUrl" class="es-League-profile__img" alt="" />
        <img
          :src="playerData.stats.url"
          class="es-League-profile__img anime"
          alt=""
        />
      </div>
      <div class="es-League-profile__infoWrapper">
        <div class="es-League-profile__profileList first">
          <p class="es-League-profile__textTitle">レシーブ成功率</p>
          <p class="es-League-profile__text stats">75%</p>
        </div>
        <div class="es-League-profile__profileList second">
          <p class="es-League-profile__textTitle">サービス成功率</p>
          <p class="es-League-profile__text stats">75%</p>
        </div>
        <div class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">サービスエース</p>
          <p class="es-League-profile__text stats">75%</p>
        </div>
        <div class="es-League-profile__profileList">
          <p class="es-League-profile__textTitle">アタックレシーブ</p>
          <p class="es-League-profile__text stats">75%</p>
        </div>
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
      return { playerData: data }
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      })
    }
  },
  data() {
    return {
      animeFlag: false,
      isClient: process.client,
    }
  },
  computed: {
    formatData() {
      return moment(this.playerData.birth).format('YYYY年M月D日')
    },
    // formatHistory() {
    //   return this.history.split(' ').join('\n')
    // },
    // isHight() {
    //   if (this.english === 'Masuda Ryo' || this.english === 'Oyama Koki') {
    //     return true
    //   }
    //   return false
    // },
    formatName() {
      if(this.name === 'SIENES WARLITO JR.') {
        const nameArray = this.name.split(' ');
        let formattedName = nameArray[0]; // 最初の単語はそのまま残す

        for (let i = 1; i < nameArray.length; i++) {
        // 2つ目以降の単語は、前にスペースを付けた上で改行に置き換える
          formattedName += ' ' + (i === 2 ? nameArray[i] : '\n' + nameArray[i]);
        }
        return formattedName;
      } else {
        return this.name
      }
    }
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
  }

  &__image {
    position: absolute;
    width: 170px;
    right: 15px;
    bottom: 0;
  }

  &__nameWrapper {
    position: absolute;
    top: 60px;
    left: 16px;
    text-align: left;
  }
  &__name {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 4px;

    &.prewarp {
      white-space: pre-wrap;
    }
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
    &.stats {
      margin-bottom: 40px;
    }
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
    &.first {
      border-top: 1px dashed #000;
    }
    &:last-child {
      border-bottom: none;
    }
    span {
      font-weight: normal;
    }
  }
  &__statsWrapper {
    width: 300px;
    height: 270px;
    margin: 0 auto;
    position: relative;
  }
  &__img {
    display: block;
    line-height: 0;
    width: 100%;
    height: 100%;
    &.anime {
      position: absolute;
      top: 0;
      opacity: 0;
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
    &.stats {
      padding-left: 50px;
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
    }
    &__image {
      right: 0;
      width: 150px;
    }
    &__name {
      font-size: 25px;
    }
    &__englishName {
      font-size: 15px;
    }
    &__statsWrapper {
      width: 280px;
      height: 270px;
      margin: 0 auto;
      position: relative;
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
    }
    &__image {
      width: 255px;
      bottom: 0;
      right: 70px;
    }

    &__nameWrapper {
      top: 120px;
      left: 15%;
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
      &.second {
        border-top: 1px dashed #000;
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
