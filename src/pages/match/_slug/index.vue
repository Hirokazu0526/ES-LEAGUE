<template>
  <div class="es-League-match-result">
    <h2 class="es-League-match-result__title">
      MATCH DETAIL<br /><span>試合結果</span>
    </h2>

    <div class="es-League-match-result__container">
      <p class="es-League-match-result__clause">{{ clause }}</p>
      <h3 class="es-League-match-result__date">{{ formatData }}</h3>
      <p class="es-League-match-result__stadium">{{ stadium }}</p>
      <div class="es-League-match-result__matchInfo">
        <div class="es-League-match-result__team">
          <div class="es-League-match-result__teamInfo">
            <nuxt-link :to="homeTeamUrl">
              <img
                :src="homeTeamImage"
                alt=""
                class="es-League-match-result__teamImage"
              />
            </nuxt-link>
            <p class="es-League-match-result__teamName">{{ homeTeam }}</p>
          </div>
          <div class="es-League-match-result__versus"><span>VS</span></div>
          <div class="es-League-match-result__teamInfo">
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
          <div>
            <p class="es-League-match-result__totalScore">
              {{ matchData.getSet_H }}
            </p>
          </div>
          <div class="es-League-match-result__hyphen">ー</div>
          <div>
            <p class="es-League-match-result__totalScore">
              {{ matchData.getSet_A }}
            </p>
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
          <div
            class="es-League-match-result__score"
          >
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
                  <p class="es-League-match-result__playerName" :class="{ textLeft: member.name === 'SIENES WARLITO JR.'}"
                  >
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
      <div class="es-League-match-result__btnWrapper">
        <back-button />
        <es-button url="/rank" class="es-League-match-result__btn"
          >順位表</es-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment-timezone'
import { mapGetters } from 'vuex'

export default {
  async asyncData({ params, $microcms, error }) {
    try {
      const data = await $microcms.get({
        endpoint: `schedule_result/${params.slug}`,
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
    ...mapGetters(['getPlayerList', 'getTeamList']),
    formatData() {
      // 日付を修正
      moment.locale('ja')
      return moment(this.date).format('YYYY.MM.DD(ddd)')
    },
    matchData() {
      // URLパラメータを見て試合データを取得
      if (this.$route.query.fields === 'game1') {
        return this.results.game1
      } else if (this.$route.query.fields === 'game2') {
        return this.results.game2
      } else if (this.$route.query.fields === 'game3') {
        return this.results.game3
      } else {
        return this.results.game4
      }
    },
    homeTeam() {
      // URLパラメータを見てhomeチーム名を取得
      if (this.$route.query.fields === 'game1') {
        const res = this.competition.game1H.teamName
        return res
      } else if (this.$route.query.fields === 'game2') {
        const res = this.competition.game2H.teamName
        return res
      } else if (this.$route.query.fields === 'game3') {
        const res = this.competition.game3H.teamName
        return res
      } else {
        const res = this.competition.game4H.teamName
        return res
      }
    },
    awayTeam() {
      // URLパラメータを見てawayチーム名を取得
      if (this.$route.query.fields === 'game1') {
        return this.competition.game1A.teamName
      } else if (this.$route.query.fields === 'game2') {
        return this.competition.game2A.teamName
      } else if (this.$route.query.fields === 'game3') {
        return this.competition.game3A.teamName
      } else {
        return this.competition.game4A.teamName
      }
    },
    homeTeamMember() {
      // プレーヤーリストを参照してhomeチームのメンバーを抽出
      const members = this.getPlayerList
      const memberInfo = members.filter((member) => {
        return member.team.teamName === this.homeTeam.split('\n').join(' ')
      })
      return memberInfo
    },
    awayTeamMember() {
      // プレーヤーリストを参照してawayチームのメンバーを抽出
      const members = this.getPlayerList
      const memberInfo = members.filter((member) => {
        return member.team.teamName === this.awayTeam.split('\n').join(' ')
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
  padding: 80px 0px 60px;
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

  &__container {
    padding: 20px 0 0;
    color: #000;
  }

  &__clause {
    display: inline-block;
    padding: 4px 21px;
    border: 1px solid #000000;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  &__date {
    font-size: 24px;
    font-weight: bold;
  }

  &__stadium {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
    color: #000;
    text-decoration: none;
  }

  &__matchInfo {
    margin-top: 30px;
  }

  &__team {
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    padding: 0 29px;
  }

  &__teamInfo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    min-height: 150px;
  }

  &__teamImage {
    width: 96px;
  }

  &__versus {
    margin-bottom: 40px;
    span {
      font-size: 24px;
      font-family: 'HNewYork';
    }
  }

  &__teamName {
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.2;
    white-space: break-spaces;
  }

  &__totalScore {
    font-size: 48px;
    font-family: 'HNewYork';
  }

  &__hyphen {
    font-size: 20px;
    font-weight: bold;
  }

  &__teamScore {
    margin-top: 30px;
  }

  &__sectionTitle {
    font-size: 22px;
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

  &__member {
    margin: 15px 0;
  }

  &__teamMember {
    display: grid;
    grid-template-columns: 1fr 16px 1fr;
    align-items: start;
    justify-content: center;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      width: 1px;
      height: 95%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
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
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    color: #000;
    padding-left: 16px;
    margin-bottom: 14px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  &__playerNumber {
    text-align: left;
    font-size: 18px;
    font-weight: bold;
  }
  &__playerName {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
    &.textLeft {
      text-align: left;
    }
  }
  &__btnWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    column-gap: 16px;
  }
}
@media screen and (max-width: 374px) {
  .es-League-match-result {
    &__playerName {
      font-size: 15px;
    }
  }
}
@media screen and (min-width: 768px) {
  .es-League-match-result {
    max-width: 700px;
    margin: 0 auto;

    &__title {
      font-size: 45px;
      & span {
        font-size: 24px;
      }
    }

    &__teamImage {
      width: 200px;
    }

    &__teamMemberLink {
      padding-left: 100px;
    }
    &__member {
      margin-bottom: 30px;
    }

    &__teamName {
      font-size: 21px;
    }

    &__versus {
      span {
        font-size: 32px;
      }
    }
  }
}
</style>
