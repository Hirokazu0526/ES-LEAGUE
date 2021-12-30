<template>
  <div class="es-League-team">
    <h2 class="es-League-team__title">TEAM</h2>

    <div class="es-League-team__info">
      <img :src="image.url" :alt="teamName" class="es-League-team__uniform" />
      <p class="es-League-team__teamName">{{ teamName }}</p>
      <p class="es-League-team__text slogan">スローガン：{{ slogan }}</p>
      <p class="es-League-team__text teamcolor">
        チームカラー：{{ teamcolor }}
      </p>
      <p class="es-League-team__text teamIntroduction">
        チーム紹介：<br />{{ text }}
      </p>
      <div class="es-League-team__memberInfo">
        <h3 class="es-League-team__infoTitle">MEMBER</h3>
        <ul class="es-League-team__memberList">
          <li
            v-for="member in temaMember"
            :key="member.id"
            class="es-League-team__memberItem"
          >
            <nuxt-link
              :to="`/profile/${member.id}`"
              class="es-League-team__link"
            >
              <img
                :src="member.imageSquare.url"
                :alt="member.name"
                class="es-League-team__memberImg"
              />
              <p class="es-League-team__memberName">{{ member.name }}</p>
            </nuxt-link>
          </li>
        </ul>
        <h3 class="es-League-team__infoTitle">SPONSOR</h3>
        <div
          class="es-League-team__sponsorArea"
          :class="{ bvd: sponsor === 'BVD' }"
        >
          <img
            :src="sponsorLogo.url"
            :alt="sponsor"
            class="es-League-team__sponsorImg"
          />
        </div>
      </div>
    </div>

    <button @click="$router.go(-1)">戻る</button>
    <es-button url="/team" :border-radius="8" class="es-League-team__btn team"
      >チーム一覧へ</es-button
    >
    <es-button url="/profile" color="navy" class="es-League-team__btn player"
      >選手一覧へ</es-button
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: `team-details/${params.slug}`,
    })
    return data
  },
  computed: {
    ...mapGetters(['getPlayerList']),
    temaMember() {
      // チーム名とプレーヤーリストを比べて選手を抽出
      const members = this.getPlayerList
      const memberInfo = members.filter((member) => {
        return member.team.teamName === this.teamName
      })
      return memberInfo
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-team {
  margin: 0px 16px;
  padding: 95px 0px;
  text-align: center;
  color: #000;

  &__title {
    margin: 21px 0 45px;
    text-align: center;
    font-size: 32px;
    position: relative;
    &:after {
      content: '';
      width: 159px;
      height: 2px;
      background-color: #fff;
      display: block;
      position: absolute;
      bottom: -10px;
      left: 0px;
      right: 0px;
      margin: 0 auto;
    }
  }
  &__uniform {
    margin: 0 auto;
    display: block;
  }
  &__teamName {
    font-size: 45px;
    text-align: center;
    margin: 10px 0;
  }
  &__info {
    padding: 0px 16px;
    text-align: left;
  }
  &__text {
    font-size: 18px;
    margin: 10px 0;
    line-height: 1.5;
  }
  &__memberInfo {
    margin: 30px 0 50px;
  }
  &__infoTitle {
    font-size: 30px;
    text-align: center;
  }
  &__memberList {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 15px 0 30px;
  }

  &__memberItem {
    margin: 0 auto;
  }
  &__link {
    color: #000;
    text-decoration: none;
  }
  &__memberImg {
    width: 110px;
  }
  &__memberName {
    margin-top: 10px;
    text-align: center;
  }
  &__sponsorArea {
    width: 310px;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    &.bvd {
      height: 110px;
    }
  }
  &__btn {
    margin: 15px auto 0;
  }
}
</style>
