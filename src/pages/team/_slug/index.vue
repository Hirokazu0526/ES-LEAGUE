<template>
  <div class="es-League-team">
    <h2 class="es-League-team__title">{{ teamName }}</h2>

    <img :src="image.url" :alt="teamName" class="es-League-team__uniform" />
    <div class="es-League-team__info">
      <p class="es-League-team__text sponsor">スポンサー：{{ sponsor }}</p>
      <p class="es-League-team__text slogan">スローガン：{{ slogan }}</p>
      <p class="es-League-team__text teamcolor">
        チームカラー：{{ teamcolor }}
      </p>
      <p class="es-League-team__text teamIntroduction">
        チーム紹介：<br />{{ text }}
      </p>
      <div>
        <ul>
          <li v-for="member in temaMember" :key="member.id">
            <nuxt-link :to="`/profile/${member.id}`">
              <img :src="member.image.url" alt="" />
              <p>{{ member.name }}</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <es-button url="/team" :border-radius="8" class="es-League-team__btn team"
      >チーム一覧へ</es-button
    >
    <es-button url="/profile" class="es-League-team__btn player"
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
  color: #fff;

  &__title {
    margin: 21px 0 45px;
    text-align: center;
    font-size: 32px;
    position: relative;
    &:after {
      content: '';
      width: 120px;
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
  &__info {
    padding: 0px 16px;
    text-align: left;
  }
  &__text {
    font-size: 18px;
    margin: 10px 0;
    line-height: 1.5;
  }
  &__btn {
    margin: 15px auto 0;
  }
}
</style>
