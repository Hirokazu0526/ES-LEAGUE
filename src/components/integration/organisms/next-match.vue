<template>
  <div v-if="isThisWeek" class="es-League-schedule">
    <!-- <h3 class="es-League-schedule__title">
      TODAY MATCH<br /><span>本日の試合</span>
    </h3> -->
    <h3 class="es-League-schedule__title">
      MATCH RESULT<br /><span>試合結果</span>
    </h3>
    <!-- <h3 class="es-League-schedule__title">
      NEXT MATCH<br /><span>試合予定</span>
    </h3> -->

    <div class="es-League-schedule__contanier">
      <h3 class="es-League-schedule__matchDate">
        <span class="left">{{ isThisWeek.clause }}</span
        >{{ $formatDate(isThisWeek.date)
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
          <li>
            <nuxt-link
              :to="`/match/${isThisWeek.id}?fields=game1`"
              class="es-League-schedule__item"
            >
              <div class="es-League-schedule__teamInfo">
                <div class="es-League-schedule__team">
                  <img
                    :src="isThisWeek.competition.game1H.image.url"
                    alt=""
                    class="es-League-schedule__teamImage"
                  />
                  <p class="es-League-schedule__temaName">
                    {{ isThisWeek.competition.game1H.teamName }}
                  </p>
                </div>
                <div class="es-League-schedule__team">
                  <img
                    :src="isThisWeek.competition.game1A.image.url"
                    alt=""
                    class="es-League-schedule__teamImage"
                  />
                  <p class="es-League-schedule__temaName">
                    {{ isThisWeek.competition.game1A.teamName }}
                  </p>
                </div>
              </div>
              <div></div>
              <link-arrow class="es-League-schedule__linkArrow" />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="`/match/${isThisWeek.id}?fields=game2`"
              class="es-League-schedule__item"
            >
              <div class="es-League-schedule__teamInfo">
                <div class="es-League-schedule__team">
                  <img
                    :src="isThisWeek.competition.game2H.image.url"
                    alt=""
                    class="es-League-schedule__teamImage"
                  />
                  <p class="es-League-schedule__temaName">
                    {{ isThisWeek.competition.game2H.teamName }}
                  </p>
                </div>
                <div class="es-League-schedule__team">
                  <img
                    :src="isThisWeek.competition.game2A.image.url"
                    alt=""
                    class="es-League-schedule__teamImage"
                  />
                  <p class="es-League-schedule__temaName">
                    {{ isThisWeek.competition.game2A.teamName }}
                  </p>
                </div>
              </div>
              <div></div>
              <link-arrow class="es-League-schedule__linkArrow" />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="`/match/${isThisWeek.id}?fields=game3`"
              class="es-League-schedule__item"
            >
              <div class="es-League-schedule__teamInfo">
                <div class="es-League-schedule__team">
                  <img
                    :src="isThisWeek.competition.game3H.image.url"
                    alt=""
                    class="es-League-schedule__teamImage"
                  />
                  <p class="es-League-schedule__temaName">
                    {{ isThisWeek.competition.game3H.teamName }}
                  </p>
                </div>
                <div class="es-League-schedule__team">
                  <img
                    :src="isThisWeek.competition.game3A.image.url"
                    alt=""
                    class="es-League-schedule__teamImage"
                  />
                  <p class="es-League-schedule__temaName">
                    {{ isThisWeek.competition.game3A.teamName }}
                  </p>
                </div>
              </div>
              <div></div>
              <link-arrow class="es-League-schedule__linkArrow" />
            </nuxt-link>
          </li>
          <li v-if="isThisWeek.competition.game4H !== null">
            <nuxt-link
              :to="`/match/${isThisWeek.id}?fields=game4`"
              class="es-League-schedule__item"
            >
              <div class="es-League-schedule__teamInfo">
                <div class="es-League-schedule__team">
                  <img
                    :src="isThisWeek.competition.game4H.image.url"
                    alt=""
                    class="es-League-schedule__teamImage"
                  />
                  <p class="es-League-schedule__temaName">
                    {{ isThisWeek.competition.game4H.teamName }}
                  </p>
                </div>
                <div class="es-League-schedule__team">
                  <img
                    :src="isThisWeek.competition.game4A.image.url"
                    alt=""
                    class="es-League-schedule__teamImage"
                  />
                  <p class="es-League-schedule__temaName">
                    {{ isThisWeek.competition.game4A.teamName }}
                  </p>
                </div>
              </div>
              <div></div>
              <link-arrow class="es-League-schedule__linkArrow" />
            </nuxt-link>
          </li>
          <li v-if="isThisWeek.competition.game5H !== null">
            <nuxt-link
              :to="`/match/${isThisWeek.id}?fields=game5`"
              class="es-League-schedule__item"
            >
              <div class="es-League-schedule__teamInfo">
                <div class="es-League-schedule__team">
                  <img
                    :src="isThisWeek.competition.game5H.image.url"
                    alt=""
                    class="es-League-schedule__teamImage"
                  />
                  <p class="es-League-schedule__temaName">
                    {{ isThisWeek.competition.game5H.teamName }}
                  </p>
                </div>
                <div class="es-League-schedule__team">
                  <img
                    :src="isThisWeek.competition.game5A.image.url"
                    alt=""
                    class="es-League-schedule__teamImage"
                  />
                  <p class="es-League-schedule__temaName">
                    {{ isThisWeek.competition.game5A.teamName }}
                  </p>
                </div>
              </div>
              <div></div>
              <link-arrow class="es-League-schedule__linkArrow" />
            </nuxt-link>
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
      'isToday',
      'firstWeek',
      'secondWeek',
      'thirdWeek',
      'fourthWeek',
      'fifthWeek',
      'sixthWeek',
      'isAfterGames',
    ]),
    isThisWeek() {
      if (this.secondWeek) {
        return this.getCompetitionList[1]
      } else if (this.thirdWeek) {
        return this.getCompetitionList[2]
      } else if (this.fifthWeek) {
        return this.getCompetitionList[4]
      } else if (this.sixthWeek) {
        return this.getCompetitionList[5]
      } else {
        return this.getCompetitionList[0]
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-schedule {
  margin: 0 16px 34px;
  &__title {
    text-align: center;
    font-size: 32px;
    color: #000000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 16px;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
    }
  }
  &__contanier {
    padding: 24px 0px 0px;
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
    text-decoration: none;
    color: #000;
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

@media screen and (max-width: 374px) {
  .es-League-schedule {
    &__temaName {
      font-size: 12px;
    }
  }
}
@media screen and (min-width: 768px) {
  .es-League-schedule {
    max-width: 600px;
    margin: 0 auto 34px;
    &__title {
      margin-top: 30px;
      font-size: 45px;
      & span {
        font-size: 24px;
      }
    }
  }
}
</style>
