<template>
  <div class="es-League-schedule-result">
    <h2 v-if="isThisWeek" class="es-League-schedule-result__title">
      result<br /><span>試合結果</span>
    </h2>
    <div v-if="isThisWeek" class="es-League-schedule-result__contanier">
      <h3 class="es-League-schedule-result__matchDate">
        <span class="left">{{ isThisWeek.clause }}</span
        >{{ $formatDate(isThisWeek.date) 
        }}<span class="right">{{ isThisWeek.startTime }}</span>
      </h3>
      <p class="es-League-schedule-result__stadium">
        {{ isThisWeek.stadium }}(<a :href="isThisWeek.access" target="_blank"
          >会場アクセス<img
            src="~/assets/img/external-link.svg"
            alt=""
            class="es-League-schedule-result__linkImg"
          /> </a
        >)
      </p>
      <div class="es-League-schedule-result__resultList">
        <ul class="es-League-schedule-result__list">
          <li>
            <nuxt-link
              class="es-League-schedule-result__item"
              :to="`/match/${isThisWeek.id}?fields=game1`"
            >
              <div class="es-League-schedule-result__teamInfo">
                <div class="es-League-schedule-result__team">
                  <img
                    :src="
                      isThisWeek.competition.game1H === null
                        ? noImage
                        : isThisWeek.competition.game1H.image.url
                    "
                    alt=""
                    class="es-League-schedule-result__teamImage"
                  />
                  <p class="es-League-schedule-result__temaName">
                    {{ isThisWeek.competition.game1H.teamName }}
                  </p>
                  <div class="es-League-schedule-result__scoreWrapper">
                    <span class="es-League-schedule-result__score">{{
                      isThisWeek.results.game1.getSet_H
                    }}</span>
                  </div>
                </div>
                <div class="es-League-schedule-result__team">
                  <img
                    :src="
                      isThisWeek.competition.game1A === null
                        ? noImage
                        : isThisWeek.competition.game1A.image.url
                    "
                    alt=""
                    class="es-League-schedule-result__teamImage"
                  />
                  <p class="es-League-schedule-result__temaName">
                    {{ isThisWeek.competition.game1A.teamName }}
                  </p>
                  <div class="es-League-schedule-result__scoreWrapper">
                    <span class="es-League-schedule-result__score">{{
                      isThisWeek.results.game1.getSet_A
                    }}</span>
                  </div>
                </div>
              </div>
              <link-arrow class="es-League-schedule-result__linkArrow" />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="es-League-schedule-result__item"
              :to="`/match/${isThisWeek.id}?fields=game2`"
            >
              <div class="es-League-schedule-result__teamInfo">
                <div class="es-League-schedule-result__team">
                  <img
                    :src="
                      isThisWeek.competition.game2H === null
                        ? noImage
                        : isThisWeek.competition.game2H.image.url
                    "
                    alt=""
                    class="es-League-schedule-result__teamImage"
                  />
                  <p class="es-League-schedule-result__temaName">
                    {{ isThisWeek.competition.game2H.teamName }}
                  </p>
                  <div class="es-League-schedule-result__scoreWrapper">
                    <span class="es-League-schedule-result__score">{{
                      isThisWeek.results.game2.getSet_H
                    }}</span>
                  </div>
                </div>
                <div class="es-League-schedule-result__team">
                  <img
                    :src="
                      isThisWeek.competition.game2A === null
                        ? noImage
                        : isThisWeek.competition.game2A.image.url
                    "
                    alt=""
                    class="es-League-schedule-result__teamImage"
                  />
                  <p class="es-League-schedule-result__temaName">
                    {{ isThisWeek.competition.game2A.teamName }}
                  </p>
                  <div class="es-League-schedule-result__scoreWrapper">
                    <span class="es-League-schedule-result__score">{{
                      isThisWeek.results.game2.getSet_A
                    }}</span>
                  </div>
                </div>
              </div>
              <link-arrow class="es-League-schedule-result__linkArrow" />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="es-League-schedule-result__item"
              :to="`/match/${isThisWeek.id}?fields=game3`"
            >
              <div class="es-League-schedule-result__teamInfo">
                <div class="es-League-schedule-result__team">
                  <img
                    :src="
                      isThisWeek.competition.game3H === null
                        ? noImage
                        : isThisWeek.competition.game3H.image.url
                    "
                    alt=""
                    class="es-League-schedule-result__teamImage"
                  />
                  <p class="es-League-schedule-result__temaName">
                    {{ isThisWeek.competition.game3H.teamName }}
                  </p>
                  <div class="es-League-schedule-result__scoreWrapper">
                    <span class="es-League-schedule-result__score">{{
                      isThisWeek.results.game3.getSet_H
                    }}</span>
                  </div>
                </div>
                <div class="es-League-schedule-result__team">
                  <img
                    :src="
                      isThisWeek.competition.game3A === null
                        ? noImage
                        : isThisWeek.competition.game3A.image.url
                    "
                    alt=""
                    class="es-League-schedule-result__teamImage"
                  />
                  <p class="es-League-schedule-result__temaName">
                    {{ isThisWeek.competition.game3A.teamName }}
                  </p>
                  <div class="es-League-schedule-result__scoreWrapper">
                    <span class="es-League-schedule-result__score">{{
                      isThisWeek.results.game3.getSet_A
                    }}</span>
                  </div>
                </div>
              </div>
              <link-arrow class="es-League-schedule-result__linkArrow" />
            </nuxt-link>
          </li>
          <li v-if="isThisWeek.competition.game4H !== null ">
            <nuxt-link
              class="es-League-schedule-result__item"
              :to="`/match/${isThisWeek.id}?fields=game4`"
            >
              <div class="es-League-schedule-result__teamInfo">
                <div class="es-League-schedule-result__team">
                  <img
                    :src="
                      isThisWeek.competition.game4H === null
                        ? noImage
                        : isThisWeek.competition.game4H.image.url
                    "
                    alt=""
                    class="es-League-schedule-result__teamImage"
                  />
                  <p class="es-League-schedule-result__temaName">
                    {{ isThisWeek.competition.game4H.teamName }}
                  </p>
                  <div class="es-League-schedule-result__scoreWrapper">
                    <span class="es-League-schedule-result__score">{{
                      isThisWeek.results.game4.getSet_H
                    }}</span>
                  </div>
                </div>
                <div class="es-League-schedule-result__team">
                  <img
                    :src="
                      isThisWeek.competition.game4A === null
                        ? noImage
                        : isThisWeek.competition.game4A.image.url
                    "
                    alt=""
                    class="es-League-schedule-result__teamImage"
                  />
                  <p class="es-League-schedule-result__temaName">
                    {{ isThisWeek.competition.game4A.teamName }}
                  </p>
                  <div class="es-League-schedule-result__scoreWrapper">
                    <span class="es-League-schedule-result__score">{{
                      isThisWeek.results.game4.getSet_A
                    }}</span>
                  </div>
                </div>
              </div>
              <link-arrow class="es-League-schedule-result__linkArrow" />
            </nuxt-link>
              </li>
        </ul>
      </div>
      <h3 class="es-League-schedule-result__newsTitle"></h3>

      <es-button url="/rank" class="es-League-schedule-result__btn"
        >順位表</es-button
      >
    </div>
    <h2 class="es-League-schedule-result__title">
      schedule<br /><span>日程</span>
    </h2>
    <div class="es-League-schedule-result__contanier transparency">
      <ul>
        <li
          v-for="item in getCompetitionList"
          :key="item.id"
          class="es-League-schedule-result__scheduleList"
        >
          <h3 class="es-League-schedule-result__matchDate">
            <span class="left">{{ item.clause }}</span
            >{{ $formatDate(item.date) }}<span class="right">{{
              item.startTime === '未定' ? '予定' : item.startTime
            }}</span>
          </h3>
          <p
            class="es-League-schedule-result__stadium"
          >
            {{ item.stadium }}
            <template v-if="item.access">(<a :href="item.access" target="_blank"
              >会場アクセス<img
                src="~/assets/img/external-link.svg"
                alt=""
                class="es-League-schedule-result__linkImg"
              /> </a
            >)</template>
          </p>
          <div class="es-League-schedule-result__matchInfo">
            <ul class="es-League-schedule-result__list">
              <li>
                <nuxt-link
                  class="es-League-schedule-result__item"
                  :class="{ 'is-disabled': item.date > nowDate }"
                  :to="`/match/${item.id}?fields=game1`"
                >
                  <div class="es-League-schedule-result__teamInfo">
                    <div class="es-League-schedule-result__team">
                      <img
                        :src="
                          item.competition.game1H === null
                            ? noImage
                            : item.competition.game1H.image.url
                        "
                        alt=""
                        class="es-League-schedule-result__teamImage"
                      />
                      <p class="es-League-schedule-result__temaName">
                        {{
                          item.competition.game1H !== null
                            ? item.competition.game1H.teamName
                            : ''
                        }}
                      </p>
                      <div
                        v-show="item.date < nowDate"
                        class="es-League-schedule-result__scoreWrapper"
                      >
                        <span class="es-League-schedule-result__score">{{
                          item.results.game1.getSet_H
                        }}</span>
                      </div>
                    </div>
                    <div class="es-League-schedule-result__team">
                      <img
                        :src="
                          item.competition.game1A === null
                            ? noImage
                            : item.competition.game1A.image.url
                        "
                        alt=""
                        class="es-League-schedule-result__teamImage"
                      />
                      <p class="es-League-schedule-result__temaName">
                        {{
                          item.competition.game1A !== null
                            ? item.competition.game1A.teamName
                            : ''
                        }}
                      </p>
                      <div
                        v-show="item.date < nowDate"
                        class="es-League-schedule-result__scoreWrapper"
                      >
                        <span class="es-League-schedule-result__score">{{
                          item.results.game1.getSet_A
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <link-arrow
                    v-show="item.date < nowDate"
                    class="es-League-schedule-result__linkArrow"
                  />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  class="es-League-schedule-result__item"
                  :class="{ 'is-disabled': item.date > nowDate }"
                  :to="`/match/${item.id}?fields=game2`"
                >
                  <div class="es-League-schedule-result__teamInfo">
                    <div class="es-League-schedule-result__team">
                      <img
                        :src="
                          item.competition.game2H === null
                            ? noImage
                            : item.competition.game2H.image.url
                        "
                        alt=""
                        class="es-League-schedule-result__teamImage"
                      />
                      <p class="es-League-schedule-result__temaName">
                        {{
                          item.competition.game2H !== null
                            ? item.competition.game2H.teamName
                            : '女子 リーグ順位1位'
                        }}
                      </p>
                      <div
                        v-show="item.date < nowDate"
                        class="es-League-schedule-result__scoreWrapper"
                      >
                        <span class="es-League-schedule-result__score">{{
                          item.results.game2.getSet_H
                        }}</span>
                      </div>
                    </div>
                    <div class="es-League-schedule-result__team">
                      <img
                        :src="
                          item.competition.game2A === null
                            ? noImage
                            : item.competition.game2A.image.url
                        "
                        alt=""
                        class="es-League-schedule-result__teamImage"
                      />
                      <p class="es-League-schedule-result__temaName">
                        {{
                          item.competition.game2A !== null
                            ? item.competition.game2A.teamName
                            : '女子 第4節勝者'
                        }}
                      </p>
                      <div
                        v-show="item.date < nowDate"
                        class="es-League-schedule-result__scoreWrapper"
                      >
                        <span class="es-League-schedule-result__score">{{
                          item.results.game2.getSet_A
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <link-arrow
                    v-show="item.date < nowDate"
                    class="es-League-schedule-result__linkArrow"
                  />
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  class="es-League-schedule-result__item"
                  :class="{ 'is-disabled': item.date > nowDate }"
                  :to="`/match/${item.id}?fields=game3`"
                >
                  <div class="es-League-schedule-result__teamInfo">
                    <div class="es-League-schedule-result__team">
                      <img
                        :src="
                          item.competition.game3H === null
                            ? noImage
                            : item.competition.game3H.image.url
                        "
                        alt=""
                        class="es-League-schedule-result__teamImage"
                      />
                      <p class="es-League-schedule-result__temaName">
                        {{
                          item.competition.game3H !== null
                            ? item.competition.game3H.teamName
                            : ''
                        }}
                      </p>
                      <div
                        v-show="item.date < nowDate"
                        class="es-League-schedule-result__scoreWrapper"
                      >
                        <span class="es-League-schedule-result__score">{{
                          item.results.game3.getSet_H
                        }}</span>
                      </div>
                    </div>
                    <div class="es-League-schedule-result__team">
                      <img
                        :src="
                          item.competition.game3A === null
                            ? noImage
                            : item.competition.game3A.image.url
                        "
                        alt=""
                        class="es-League-schedule-result__teamImage"
                      />
                      <p class="es-League-schedule-result__temaName">
                        {{
                          item.competition.game3A !== null
                            ? item.competition.game3A.teamName
                            : ''
                        }}
                      </p>
                      <div
                        v-show="item.date < nowDate"
                        class="es-League-schedule-result__scoreWrapper"
                      >
                        <span class="es-League-schedule-result__score">{{
                          item.results.game3.getSet_A
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <link-arrow
                    v-show="item.date < nowDate"
                    class="es-League-schedule-result__linkArrow"
                  />
                </nuxt-link>
              </li>
              <li v-if="item.competition.game4H !== null">
                <nuxt-link
                  class="es-League-schedule-result__item"
                  :class="{ 'is-disabled': item.date > nowDate }"
                  :to="`/match/${item.id}?fields=game4`"
                >
                  <div class="es-League-schedule-result__teamInfo">
                    <div class="es-League-schedule-result__team">
                      <img
                        :src="
                          item.competition.game4H === null
                            ? noImage
                            : item.competition.game4H.image.url
                        "
                        alt=""
                        class="es-League-schedule-result__teamImage"
                      />
                      <p class="es-League-schedule-result__temaName">
                        {{
                          item.competition.game4H !== null
                            ? item.competition.game4H.teamName
                            : ''
                        }}
                      </p>
                      <div
                        v-show="item.date < nowDate"
                        class="es-League-schedule-result__scoreWrapper"
                      >
                        <span class="es-League-schedule-result__score">{{
                          item.results.game4.getSet_H
                        }}</span>
                      </div>
                    </div>
                    <div class="es-League-schedule-result__team">
                      <img
                        :src="
                          item.competition.game4A === null
                            ? noImage
                            : item.competition.game4A.image.url
                        "
                        alt=""
                        class="es-League-schedule-result__teamImage"
                      />
                      <p class="es-League-schedule-result__temaName">
                        {{
                          item.competition.game4A !== null
                            ? item.competition.game4A.teamName
                            : ''
                        }}
                      </p>
                      <div
                        v-show="item.date < nowDate"
                        class="es-League-schedule-result__scoreWrapper"
                      >
                        <span class="es-League-schedule-result__score">{{
                          item.results.game4.getSet_A
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <link-arrow
                    v-show="item.date < nowDate"
                    class="es-League-schedule-result__linkArrow"
                  />
                </nuxt-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment-timezone'
import linkArrow from '~/components/integration/atoms/link-arrow.vue'

export default {
  components: { linkArrow },
  data() {
    return {
      noImage: require('~/assets/img/news-logo.png'),
    }
  },
  head() {
    return {
      title: '日程・結果',
    }
  },
  computed: {
    ...mapGetters([
      'getCompetitionList',
      'firstWeek',
      'secondWeek',
      'thirdWeek',
      'fourthWeek',
      'fifthWeek',
      'isAfterGames',
    ]),
    isThisWeek() {
      if (this.firstWeek) {
        return this.getCompetitionList[0]
      } else if (this.secondWeek) {
        return this.getCompetitionList[1]
      } else if (this.thirdWeek) {
        return this.getCompetitionList[2]
      } else if (this.fourthWeek) {
        return this.getCompetitionList[3]
      } else if (this.fifthWeek) {
        return this.getCompetitionList[4]
      } else if (this.sixthWeek) {
        return this.getCompetitionList[5]
      }
      return ''
    },
    nowDate() {
      moment.locale('ja')
      const now = new Date()
      const itemDate = moment(now.date)
      return itemDate
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.es-League-schedule-result {
  margin: 0px 16px;
  padding: 80px 0px 40px;
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
      font-size: 16px;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
      font-weight: medium;
    }
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
  &__teamInfo {
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 8px;
  }

  &__item {
    display: grid;
    grid-template-columns: 1fr 20px;
    padding: 8px 9px 8px 16px;
    background-color: #eeeeee;
    margin-bottom: 2px;
    text-decoration: none;
    color: #000;
    &.is-disabled {
      pointer-events: none;
    }
  }

  &__team {
    display: grid;
    grid-template-columns: 31px 1fr 28px;
    align-items: center;
    column-gap: 5px;
    margin-right: 16px;
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
    max-width: 210px;
    text-align: left;
  }

  &__scoreWrapper {
    background-color: #000000;
    position: relative;
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      border-left: 4px solid transparent;
      border-bottom: 4px solid #eeeeee;
      content: '';
    }
  }

  &__score {
    font-family: 'HNewYork';
    color: #fff;
    font-size: 22px;
  }
  &__linkArrow {
    margin: auto 0;
  }

  &__scheduleList {
    list-style: none;
    margin-bottom: 30px;
  }

  &__matchInfo {
    margin-top: 14px;
  }
  &__matchList {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    padding: 10px 0;
    border-bottom: 1px solid #000;
    &:first-child {
      border-top: 1px solid #000;
    }
  }

  &__btn {
    margin: 30px auto 60px;
  }
}
@media screen and (max-width: 374px) {
  .es-League-schedule-result {
    &__temaName {
      font-size: 12px;
    }
  }
}
@media screen and (min-width: 768px) {
  .es-League-schedule-result {
    max-width: 500px;
    margin: 0 auto;
    &__title {
      font-size: 45px;
      margin-bottom: 45px;
      & span {
        font-size: 24px;
      }
    }
  }
}
</style>
