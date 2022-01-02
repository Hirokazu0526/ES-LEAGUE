<template>
  <div class="es-League-match-result">
    <h2 class="es-League-match-result__title">
      Match Results<br /><span>試合結果</span>
    </h2>

    <div class="es-League-match-result__container">
      <h3 class="es-League-match-result__date">{{ formatData }}</h3>
      <nuxt-link to="/stadium" class="es-League-match-result__stadium">{{
        stadium
      }}</nuxt-link>
      <div class="es-League-match-result__teamInfo">
        <div class="es-League-match-result__team">
          <div class="es-League-match-result__homeTeamImage">
            <nuxt-link :to="homeTeamUrl">
              <img
                :src="homeTeamImage"
                alt=""
                class="es-League-match-result__teamImage"
              />
            </nuxt-link>
            <p class="es-League-match-result__teamName">{{ homeTeam }}</p>
          </div>
          <div><span class="es-League-match-result__versus">VS</span></div>
          <div class="es-League-match-result__awayTeamImage">
            <nuxt-link :to="awayTeamUrl">
              <img
                :src="awayTeamImage"
                alt=""
                class="es-League-match-result__teamImage"
              />
            </nuxt-link>
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
        </div>

        <div class="es-League-match-result__member">
          <h3 class="es-League-match-result__sectionTitle">MEMBER</h3>
          <div class="es-League-match-result__teamMember">
            <ul class="es-League-match-result__teamMemberList">
              <li
                v-for="member in homeTeamMember"
                :key="member.id"
                class="es-League-match-result__teamMemberItem"
              >
                <nuxt-link
                  :to="`/profile/${member.id}`"
                  class="es-League-match-result__teamMemberLink"
                >
                  <span class="es-League-match-result__playerNumber">{{
                    member.number
                  }}</span>
                  <p class="es-League-match-result__playerName">
                    {{ member.name }}
                  </p>
                </nuxt-link>
              </li>
            </ul>
            <div></div>
            <ul class="es-League-match-result__teamMemberList">
              <li
                v-for="member in awayTeamMember"
                :key="member.id"
                class="es-League-match-result__teamMemberItem"
              >
                <nuxt-link
                  :to="`/profile/${member.id}`"
                  class="es-League-match-result__teamMemberLink"
                >
                  <span class="es-League-match-result__playerNumber">{{
                    member.number
                  }}</span>
                  <p class="es-League-match-result__playerName">
                    {{ member.name }}
                  </p>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <es-button url="/rank" class="es-League-match-result__btn"
        >順位表</es-button
      >
      <es-button
        url="/schedule/result"
        color="navy"
        class="es-League-match-result__btn"
        >戻る</es-button
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
    homeTeamMember() {
      // プレーヤーリストを参照してhomeチームのメンバーを抽出
      const members = this.getPlayerList
      const memberInfo = members.filter((member) => {
        return member.team.teamName === this.homeTeam
      })
      return memberInfo
    },
    awayTeamMember() {
      // プレーヤーリストを参照してawayチームのメンバーを抽出
      const members = this.getPlayerList
      const memberInfo = members.filter((member) => {
        return member.team.teamName === this.awayTeam
      })
      return memberInfo
    },
    homeTeamImage() {
      // homeチームメンバーの情報からチームユニを抽出
      return this.homeTeamMember[0].team.image.url
    },
    awayTeamImage() {
      // awayチームメンバーの情報からチームユニを抽出
      return this.awayTeamMember[0].team.image.url
    },
    homeTeamUrl() {
      const id = this.homeTeamMember[0].team.id
      return `/team/${id}`
    },
    awayTeamUrl() {
      const id = this.awayTeamMember[0].team.id
      return `/team/${id}`
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-match-result {
  margin: 0px 16px;
  padding: 95px 0px;
  text-align: center;
  color: #000;

  &__title {
    margin: 20px 0;
    text-align: center;
    font-size: 32px;
    color: #000000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
    }
  }

  &__container {
    padding: 20px 16px 30px;
    color: #000;
  }

  &__date {
    font-size: 32px;
  }

  &__stadium {
    display: block;
    font-size: 14px;
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
    grid-template-columns: 1fr 100px 1fr;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }

  &__teamImage {
    width: 120px;
  }

  &__versus {
    font-size: 32px;
  }

  &__teamName {
    margin-top: 10px;
    font-size: 32px;
  }

  &__totalScore {
    font-size: 30px;
  }

  &__teamScore {
    margin-top: 30px;
  }

  &__sectionTitle {
    font-size: 32px;
    padding: 10px 0;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
  }

  &__score {
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    font-size: 32px;
    border-bottom: 1px dashed #000;
    &:last-child {
      border-bottom: none;
    }
  }

  &__member {
    margin: 30px 0;
  }

  &__teamMember {
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
    align-items: center;
    justify-content: center;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      width: 1px;
      height: 70%;
      left: 50%;
      transform: translateX(-50%);
      background: #000;
    }
  }

  &__teamMemberList {
    list-style: none;
    text-decoration: none;
    color: #000;
  }
  &__teamMemberItem {
    padding: 15px 0;
  }
  &__teamMemberLink {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    color: #000;
  }

  &__playerNumber {
    text-align: left;
  }
  &__playerName {
    display: inline-block;
  }

  &__btn {
  }
}
</style>
