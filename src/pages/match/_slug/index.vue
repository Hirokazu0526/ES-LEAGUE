<template>
  <div class="es-League-match-result">
    <h2 class="es-League-match-result__title">試合詳細</h2>

    <div class="es-League-match-result__container">
      <h3 class="es-League-match-result__date">{{ formatData }}</h3>
      <nuxt-link to="/stadium" class="es-League-match-result__stadium">{{
        stadium
      }}</nuxt-link>
      <div class="es-League-match-result__teamInfo">
        <div class="es-League-match-result__team">
          <div class="es-League-match-result__homeTeamImage">
            <img
              :src="homeTeamImage"
              alt=""
              class="es-League-match-result__teamImage"
            />
            <p class="es-League-match-result__teamName">{{ homeTeam }}</p>
          </div>
          <div><span class="es-League-match-result__versus">VS</span></div>
          <div class="es-League-match-result__awayTeamImage">
            <img
              :src="awayTeamImage"
              alt=""
              class="es-League-match-result__teamImage"
            />
            <p class="es-League-match-result__teamName">{{ awayTeam }}</p>
          </div>
        </div>

        <div class="es-League-match-result__team">
          <div class="es-League-match-result__totalScore">
            <p>{{ matchData.getSet_H }}</p>
          </div>
          <div></div>
          <div class="es-League-match-result__totalScore">
            <p>{{ matchData.getSet_A }}</p>
          </div>
        </div>

        <div class="es-League-match-result__teamScore">
          <h3 class="es-League-match-result__sectionTitle">SCORE</h3>
          <div class="es-League-match-result__score">
            <p>{{ matchData.firstSet_H }}</p>
            <span>1st</span>
            <p>{{ matchData.firstSet_A }}</p>
          </div>
          <div class="es-League-match-result__score">
            <p>{{ matchData.secondSet_H }}</p>
            <span>2nd</span>
            <p>{{ matchData.secondSet_A }}</p>
          </div>
          <div class="es-League-match-result__score">
            <p>{{ matchData.thirdSet_H }}</p>
            <span>3rd</span>
            <p>{{ matchData.thirdSet_A }}</p>
          </div>
          <div class="es-League-match-result__score">
            <p>{{ matchData.fourthSet_H }}</p>
            <span>4th</span>
            <p>{{ matchData.fourthSet_A }}</p>
          </div>
        </div>

        <div class="es-League-match-result__member">
          <h3 class="es-League-match-result__sectionTitle">MEMBER</h3>
          <div class="es-League-match-result__temaMember">
            <ul class="es-League-match-result__temaMemberList">
              <li v-for="member in homeTemaMember" :key="member.id">
                <nuxt-link :to="`/profile/${member.id}`">
                  <img
                    :src="member.image.url"
                    alt=""
                    class="es-League-match-result__memberImage"
                  />
                </nuxt-link>
              </li>
            </ul>
            <div></div>
            <ul class="es-League-match-result__temaMemberList">
              <li v-for="member in awayTemaMember" :key="member.id">
                <nuxt-link :to="`/profile/${member.id}`">
                  <img
                    :src="member.image.url"
                    alt=""
                    class="es-League-match-result__memberImage"
                  />
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <es-button url="/schedule/result" class="es-League-match-result__btn team"
        >日程・結果</es-button
      >
      <es-button
        url="/rank"
        color="navy"
        class="es-League-match-result__btn team"
        >順位表</es-button
      >
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
import { mapGetters } from 'vuex'

export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: `schedule_result/${params.slug}`,
    })
    return data
  },
  computed: {
    ...mapGetters(['getPlayerList', 'getTeamList']),
    formatData() {
      // 日付を修正
      return moment(this.date).format('YYYY.MM.DD ddd.')
    },
    matchData() {
      // URLパラメータを見て試合データを取得
      if (this.$route.query.fields === 'coat1') {
        return this.results.coat1
      } else if (this.$route.query.fields === 'coat2') {
        return this.results.coat2
      } else {
        return this.results.coat3
      }
    },
    homeTeam() {
      // URLパラメータを見てhomeチーム名を取得
      if (this.$route.query.fields === 'coat1') {
        return this.competition.coat1H
      } else if (this.$route.query.fields === 'coat2') {
        return this.competition.coat2H
      } else {
        return this.competition.coat3H
      }
    },
    awayTeam() {
      // URLパラメータを見てawayチーム名を取得
      if (this.$route.query.fields === 'coat1') {
        return this.competition.coat1A
      } else if (this.$route.query.fields === 'coat2') {
        return this.competition.coat2A
      } else {
        return this.competition.coat3A
      }
    },
    homeTemaMember() {
      // プレーヤーリストを参照してhomeチームのメンバーを抽出
      const members = this.getPlayerList
      const memberInfo = members.filter((member) => {
        return member.team.teamName === this.homeTeam
      })
      return memberInfo
    },
    awayTemaMember() {
      // プレーヤーリストを参照してawayチームのメンバーを抽出
      const members = this.getPlayerList
      const memberInfo = members.filter((member) => {
        return member.team.teamName === this.awayTeam
      })
      return memberInfo
    },
    homeTeamImage() {
      // homeチームメンバーの情報からチームユニを抽出
      return this.homeTemaMember[0].team.image.url
    },
    awayTeamImage() {
      // awayチームメンバーの情報からチームユニを抽出
      return this.awayTemaMember[0].team.image.url
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-match-result {
  margin: 0px 16px;
  padding: 95px 0px;
  text-align: center;
  color: #fff;

  &__title {
    margin: 21px 0 45px;
    text-align: center;
    font-size: 24px;
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

  &__container {
    padding: 20px 16px 30px;
    color: #000;
    background: linear-gradient(-45deg, transparent 27px, #fff 20px);
    background-position: bottom right;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  &__date {
    font-size: 24px;
    font-weight: bold;
  }

  &__stadium {
    display: block;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    color: #000;
    text-decoration: none;
  }

  &__teamInfo {
    margin-top: 30px;
  }

  &__team {
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }

  &__teamImage {
    width: 120px;
  }

  &__versus {
    font-size: 24px;
    font-weight: bold;
  }

  &__teamName {
    margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
  }

  &__totalScore {
    font-size: 30px;
    font-weight: bold;
  }

  &__teamScore {
    margin-top: 30px;
  }

  &__sectionTitle {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  &__score {
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: bold;
  }

  &__member {
    margin: 30px 0;
  }

  &__temaMember {
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
    align-items: center;
    justify-content: center;
  }

  &__temaMemberList {
    list-style: none;
    text-decoration: none;
    color: #fff;
  }

  &__memberImage {
    width: 120px;
  }

  &__btn {
    margin: 15px auto 0;
  }
}
</style>
