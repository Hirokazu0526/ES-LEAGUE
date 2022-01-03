<template>
  <div v-if="isThisWeek" class="es-League-schedule">
    <h3 class="es-League-schedule__title">
      NEXT MATCH<br /><span>試合予定</span>
    </h3>
    <div class="es-League-schedule__contanier">
      <h3 class="es-League-schedule__matchDate">
        <span class="left">{{ isThisWeek.clause }}</span
        >{{ isThisWeek.date
        }}<span class="right">{{ isThisWeek.startTime }}</span>
      </h3>
      <p class="es-League-schedule__stadium">
        {{ isThisWeek.stadium }}(<a :href="isThisWeek.access" target="_blank"
          >会場アクセス<img
            src="~/assets/img/external-link.svg"
            alt=""
            class="es-League-schedule__linkImg"
          /> </a
        >)
      </p>

      <div class="es-League-schedule__resultList">
        <ul class="es-League-schedule__list">
          <li class="es-League-schedule__item">
            <div class="es-League-schedule__teamInfo">
              <div class="es-League-schedule__team">
                <img
                  :src="coat1HImage"
                  alt=""
                  class="es-League-schedule__teamImage"
                />
                <p class="es-League-schedule__temaName">
                  {{ isThisWeek.competition.coat1H }}
                </p>
              </div>
              <div class="es-League-schedule__team">
                <img
                  :src="coat1AImage"
                  alt=""
                  class="es-League-schedule__teamImage"
                />
                <p class="es-League-schedule__temaName">
                  {{ isThisWeek.competition.coat1A }}
                </p>
              </div>
            </div>
            <div></div>
            <link-arrow
              :url="`/match/${isThisWeek.id}?fields=coat1`"
              class="es-League-schedule__linkArrow"
            />
          </li>
          <li class="es-League-schedule__item">
            <div class="es-League-schedule__teamInfo">
              <div class="es-League-schedule__team">
                <img
                  :src="coat2HImage"
                  alt=""
                  class="es-League-schedule__teamImage"
                />
                <p class="es-League-schedule__temaName">
                  {{ isThisWeek.competition.coat2H }}
                </p>
              </div>
              <div class="es-League-schedule__team">
                <img
                  :src="coat2AImage"
                  alt=""
                  class="es-League-schedule__teamImage"
                />
                <p class="es-League-schedule__temaName">
                  {{ isThisWeek.competition.coat2A }}
                </p>
              </div>
            </div>
            <div></div>
            <link-arrow
              :url="`/match/${isThisWeek.id}?fields=coat2`"
              class="es-League-schedule__linkArrow"
            />
          </li>
          <li class="es-League-schedule__item">
            <div class="es-League-schedule__teamInfo">
              <div class="es-League-schedule__team">
                <img
                  :src="coat3HImage"
                  alt=""
                  class="es-League-schedule__teamImage"
                />
                <p class="es-League-schedule__temaName">
                  {{ isThisWeek.competition.coat3H }}
                </p>
              </div>
              <div class="es-League-schedule__team">
                <img
                  :src="coat3AImage"
                  alt=""
                  class="es-League-schedule__teamImage"
                />
                <p class="es-League-schedule__temaName">
                  {{ isThisWeek.competition.coat3A }}
                </p>
              </div>
            </div>
            <div></div>
            <link-arrow
              :url="`/match/${isThisWeek.id}?fields=coat3`"
              class="es-League-schedule__linkArrow"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import linkArrow from '~/components/integration/atoms/link-arrow.vue'

export default {
  components: { linkArrow },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'getCompetitionList',
      'firstWeek',
      'secondWeek',
      'thirdWeek',
      'fourthWeek',
      'fifthWeek',
      'getTeamList',
    ]),
    isThisWeek() {
      if (this.firstWeek) {
        return this.getCompetitionList[0]
      } else if (!this.secondWeek) {
        return this.getCompetitionList[1]
      } else if (this.thirdWeek) {
        return this.getCompetitionList[2]
      } else if (this.fourthWeek) {
        return this.getCompetitionList[3]
      } else if (this.fifthWeek) {
        return this.getCompetitionList[4]
      }
      return ''
    },
    coat1HImage() {
      const teamLists = this.getTeamList
      const imageList = teamLists.filter((list) => {
        return list.teamName === this.isThisWeek.competition.coat1H
      })
      return imageList[0].image.url
    },
    coat1AImage() {
      const teamLists = this.getTeamList
      const imageList = teamLists.filter((list) => {
        return list.teamName === this.isThisWeek.competition.coat1A
      })
      return imageList[0].image.url
    },
    coat2HImage() {
      const teamLists = this.getTeamList
      const imageList = teamLists.filter((list) => {
        return list.teamName === this.isThisWeek.competition.coat2H
      })
      return imageList[0].image.url
    },
    coat2AImage() {
      const teamLists = this.getTeamList
      const imageList = teamLists.filter((list) => {
        return list.teamName === this.isThisWeek.competition.coat2A
      })
      return imageList[0].image.url
    },
    coat3HImage() {
      const teamLists = this.getTeamList
      const imageList = teamLists.filter((list) => {
        return list.teamName === this.isThisWeek.competition.coat3H
      })
      return imageList[0].image.url
    },
    coat3AImage() {
      const teamLists = this.getTeamList
      const imageList = teamLists.filter((list) => {
        return list.teamName === this.isThisWeek.competition.coat3A
      })
      return imageList[0].image.url
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-schedule {
  padding-top: 20px;
  margin-bottom: 34px;
  &__title {
    text-align: center;
    font-size: 32px;
    color: #000000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 16px;
      font-family: 'YuGothic', '游ゴシック';
    }
  }
  &__contanier {
    padding: 24px 16px 0px;
    color: #000;
    text-align: center;
  }
  &__matchDate {
    font-size: 16px;
    font-weight: medium;
    span.left {
      margin-right: 10px;
    }
    span.right {
      margin-left: 10px;
    }
  }
  &__stadium {
    display: block;
    font-size: 12px;
    font-weight: normal;
    text-decoration: none;
    color: #000;
    margin-top: 6px;
    a {
      color: #0033cc;
      position: relative;
    }
  }
  &__linkImg {
    width: 13px;
    height: 13px;
    vertical-align: top;
    margin: 0 2px;
  }
  &__resultList {
    margin-top: 15px;
  }
  &__list {
    list-style: none;
  }
  &__item {
    display: grid;
    grid-template-columns: 1fr 50px 20px;
    padding: 8px 9px 8px 16px;
    background-color: #eeeeee;
    margin-bottom: 2px;
  }
  &__teamInfo {
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 8px;
  }
  &__team {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__teamImage {
    width: 31px;
    height: 28px;
    margin-right: 8px;
  }

  &__temaName {
    font-size: 14px;
    font-weight: bold;
  }
  &__linkArrow {
    margin: auto 0;
  }
}
</style>
