<template>
  <div class="es-League-match-result">
    <h2 class="es-League-match-result__title">
      MATCH DETAIL<br /><span>試合結果</span>
    </h2>

    <div class="es-League-match-result__container">
      <p class="es-League-match-result__clause">{{ data.clause }}</p>
      <h3 class="es-League-match-result__date">{{ formatData }}</h3>
      <p class="es-League-match-result__stadium">{{ data.stadium }}</p>
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
  middleware: 'fetchData',
  // eslint-disable-next-line require-await
  async asyncData({ params }) {
    if(params.slug  === "752") {
      return {
       data: params.data[0]
      }
    } else if (params.slug  === "293") {
      return {
       data: params.data[1]
      }
    } else if (params.slug  === "069") {
      return {
       data: params.data[2]
      }
    } else if (params.slug  === "573") {
      return {
       data: params.data[3]
      }
    } else if (params.slug  === "458") {
      return {
       data: params.data[4]
      }
    } else {
      return {
       data: params.data[5]
      }
    }
  },

  computed: {
    ...mapGetters(['getPlayerList', 'getTeamList']),
    formatData() {
      // 日付を修正
      moment.locale('ja')
      return moment(this.data.date).format('YYYY.MM.DD(ddd)')
    },
    matchData() {
      // URLパラメータを見て試合データを取得
      if (this.$route.query.fields === 'game1') {
        return this.data.results.game1
      } else if (this.$route.query.fields === 'game2') {
        return this.data.results.game2
      } else if (this.$route.query.fields === 'game3') {
        return this.data.results.game3
      } else if (this.$route.query.fields === 'game4') {
        return this.data.results.game4
      } else {
        return this.data.results.game5
      }
    },
    homeTeam() {
      // URLパラメータを見てhomeチーム名を取得
      if (this.$route.query.fields === 'game1') {
        const res = this.data.competition.game1H.teamName
        return res
      } else if (this.$route.query.fields === 'game2') {
        const res = this.data.competition.game2H.teamName
        return res
      } else if (this.$route.query.fields === 'game3') {
        const res = this.data.competition.game3H.teamName
        return res
      } else if (this.$route.query.fields === 'game4') {
        const res = this.data.competition.game4H.teamName
        return res
      } else {
        const res = this.data.competition.game5H ? this.data.competition.game5H.teamName : ''
        return res
      }
    },
    awayTeam() {
      // URLパラメータを見てawayチーム名を取得
      if (this.$route.query.fields === 'game1') {
        return this.data.competition.game1A.teamName
      } else if (this.$route.query.fields === 'game2') {
        return this.data.competition.game2A.teamName
      } else if (this.$route.query.fields === 'game3') {
        return this.data.competition.game3A.teamName
      } else if (this.$route.query.fields === 'game4') {
        return this.data.competition.game4A.teamName
      } else {
        return this.data.competition.game5A ? this.data.competition.game5A.teamName : ''
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
      return this.homeTeamMember.length > 0 ? this.homeTeamMember[0].team.image.url : '';
      // if (this.homeTeamMember && this.homeTeamMember.length > 0 && this.homeTeamMember[0].team) {
      //   return this.homeTeamMember[0].team.image.url
      // }
      // return 'https://images.microcms-assets.io/assets/49c6e1c4f8404f8a83a7cf07531f0cdc/51ae7a80d49b4794859af8a416161914/noimage.png'
    },
    awayTeamImage() {
      // awayチームメンバーの情報からチームユニを抽出
      return this.awayTeamMember.length > 0 ? this.awayTeamMember[0].team.image.url : '';
      // if (this.awayTeamMember && this.awayTeamMember.length > 0 && this.awayTeamMember[0].team) {
      //   return this.awayTeamMember[0].team.image.url
      // }
      // return 'https://images.microcms-assets.io/assets/49c6e1c4f8404f8a83a7cf07531f0cdc/51ae7a80d49b4794859af8a416161914/noimage.png'
    },
    homeTeamUrl() {
      if (this.homeTeamMember && this.homeTeamMember.length > 0 && this.homeTeamMember[0].team) {
        const id = this.homeTeamMember[0].team.id;
        return `/team/${id}`;
      }
      // ここにエラー処理またはデフォルトのURLを提供する処理を追加
      return '/'; // 例: デフォルトのURLを提供
    },
    awayTeamUrl() {
      if (this.awayTeamMember && this.awayTeamMember.length > 0 && this.awayTeamMember[0].team) {
        const id = this.awayTeamMember[0].team.id;
        return `/team/${id}`;
      }
      // ここにエラー処理またはデフォルトのURLを提供する処理を追加
      return '/'; // 例: デフォルトのURLを提供
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
