<template>
  <div class="es-League-team">
    <h2 class="es-League-team__title">
      TEAM DETAIL<br /><span>チーム紹介</span>
    </h2>

    <div class="es-League-team__info">
      <img :src="image.url" :alt="teamName" class="es-League-team__uniform" />
      <p class="es-League-team__teamName">{{ teamName }}</p>
      <!-- <h3 class="es-League-team__sectionTitle">TEAM COLOR</h3>
      <p class="es-League-team__text teamcolor" :class="`${teamcolor}`">
        {{ teamcolor }}
      </p> -->
      <h3 class="es-League-team__sectionTitle">INTRODUCTION</h3>
      <p class="es-League-team__text teamIntroduction">{{ text }}</p>
      <div class="es-League-team__memberInfo">
        <h3 class="es-League-team__sectionTitle">MEMBER</h3>
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
              <p class="es-League-team__memberName" :class="{ preWrap: member.name === 'SIENES\nWARLITO JR.'}">{{ member.name }}</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="es-League-team__btnWrapper">
      <back-button />
      <es-button url="/team" class="es-League-team__btn">チーム一覧</es-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ params, $microcms, error }) {
    try {
      const data = await $microcms.get({
        endpoint: `team-details/${params.slug}`,
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
    ...mapGetters(['getPlayerList',]),
    temaMember() {
      // チーム名とプレーヤーリストを比べて選手を抽出
      const members = this.allMember
      const memberInfo = members.filter((member) => {
        return member.team.teamName === this.teamName
      })
      return memberInfo
    },
    allMember() {
      // チーム名とプレーヤーリストを比べて選手を抽出
      let members = []
      members =  JSON.parse(JSON.stringify(this.getPlayerList))
      const memberInfo = members.map((member) => {
        // チーム名が一致する場合のみ処理を行う
        if (member.team.teamName === this.teamName) {
          if (member.name === 'SIENES WARLITO JR.') {
            const nameArray = member.name.split(' ')
            let formattedName = nameArray[0]; // 最初の単語はそのまま残す

            for (let i = 1; i < nameArray.length; i++) {
              // 2つ目以降の単語は、前にスペースを付けた上で改行に置き換える
              formattedName += (i === 2 ? ' ' : '\n') + nameArray[i]
            }
            member.name = formattedName; // 改行処理した名前を更新
          }
        }
        return member // 処理済みのメンバー情報を返す
      });
      return memberInfo
    }
  },
}
</script>

<style lang="scss" scoped>
.es-League-team {
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

  &__uniform {
    margin: 0 auto;
    display: block;
    width: 147px;
  }
  &__teamName {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0 40px;
  }
  &__info {
    padding: 0px 16px;
    text-align: left;
  }
  &__text {
    font-size: 18px;
    margin: 10px 0;
    line-height: 1.5;
    text-align: center;
    &.teamcolor {
      font-weight: bold;
      color: #fff;
      padding: 3px 0px;
      width: 200px;
      margin: 10px auto;
      &.green {
        background-color: #00a39c;
      }
      &.red {
        background-color: #7a0100;
      }
      &.blue {
        background-color: #16409c;
      }
      &.black {
        background-color: #241816;
      }
      &.yellow {
        background-color: #ebeb24;
      }
      &.orange {
        background-color: #e77427;
      }
      &.pink {
        background-color: #dc3773;
      }
      &.skyblue {
        background-color: #a0c8d8;
      }
    }
    &.teamIntroduction {
      text-align: left;
      white-space: break-spaces;
      line-break: anywhere;
    }
  }
  &__memberInfo {
    margin: 0px 0 50px;
  }
  &__sectionTitle {
    font-size: 22px;
    padding: 10px 0;
    text-align: center;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
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
    height: 195px;
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
    font-weight: bold;

    &.preWrap {
      white-space: pre-wrap;
    }
  }
  &__sponsorArea {
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    &.bvd {
      height: 110px;
    }
  }
  &__btnWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    justify-items: center;
  }
}

@media screen and (min-width: 768px) {
  .es-League-team {
    max-width: 600px;
    margin: 0 auto;
    &__title {
      font-size: 45px;
      margin-bottom: 35px;
      & span {
        font-size: 24px;
      }
    }
    &__uniform {
      width: 180px;
    }
    &__teamName {
      font-size: 32px;
    }
    &__sectionTitle {
      font-size: 24px;
    }
    &__memberList {
      grid-template-columns: 1fr 1fr 1fr;
    }
    &__memberImg {
      width: 130px;
    }
    &__memberName {
      font-size: 18px;
    }
    &__sponsorImg {
      width: 300px;
      &.bvd {
        width: 160px;
      }
    }
    &__sponsorArea {
      height: 100px;
      &.bvd {
        height: 120px;
      }
    }
  }
}
</style>
