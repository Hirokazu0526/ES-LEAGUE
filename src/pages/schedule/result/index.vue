<template>
  <div class="es-League-schedule-result">
    <h2 v-if="isThisWeek" class="es-League-schedule-result__title">
      result<br /><span>試合結果</span>
    </h2>
    <div v-if="isThisWeek" class="es-League-schedule-result__contanier">
      <h3 class="es-League-schedule-result__matchDate">
        <span class="left">{{ isThisWeek.clause }}</span
        >{{ isThisWeek.date
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
          <li class="es-League-schedule-result__item">
            <div class="es-League-schedule-result__teamInfo">
              <div class="es-League-schedule-result__team">
                <img
                  :src="isThisWeek.competition.coat1H.image.url"
                  alt=""
                  class="es-League-schedule-result__teamImage"
                />
                <p class="es-League-schedule-result__temaName">
                  {{ isThisWeek.competition.coat1H.teamName }}
                </p>
                <div class="es-League-schedule-result__scoreWrapper">
                  <span class="es-League-schedule-result__score">{{
                    isThisWeek.results.coat1.getSet_H
                  }}</span>
                </div>
              </div>
              <div class="es-League-schedule-result__team">
                <img
                  :src="isThisWeek.competition.coat1A.image.url"
                  alt=""
                  class="es-League-schedule-result__teamImage"
                />
                <p class="es-League-schedule-result__temaName">
                  {{ isThisWeek.competition.coat1A.teamName }}
                </p>
                <div class="es-League-schedule-result__scoreWrapper">
                  <span class="es-League-schedule-result__score">{{
                    isThisWeek.results.coat1.getSet_A
                  }}</span>
                </div>
              </div>
            </div>
            <link-arrow
              :url="`/match/${isThisWeek.id}?fields=coat1`"
              class="es-League-schedule-result__linkArrow"
            />
          </li>
          <li class="es-League-schedule-result__item">
            <div class="es-League-schedule-result__teamInfo">
              <div class="es-League-schedule-result__team">
                <img
                  :src="isThisWeek.competition.coat2H.image.url"
                  alt=""
                  class="es-League-schedule-result__teamImage"
                />
                <p class="es-League-schedule-result__temaName">
                  {{ isThisWeek.competition.coat2H.teamName }}
                </p>
                <div class="es-League-schedule-result__scoreWrapper">
                  <span class="es-League-schedule-result__score">{{
                    isThisWeek.results.coat2.getSet_H
                  }}</span>
                </div>
              </div>
              <div class="es-League-schedule-result__team">
                <img
                  :src="isThisWeek.competition.coat2A.image.url"
                  alt=""
                  class="es-League-schedule-result__teamImage"
                />
                <p class="es-League-schedule-result__temaName">
                  {{ isThisWeek.competition.coat2A.teamName }}
                </p>
                <div class="es-League-schedule-result__scoreWrapper">
                  <span class="es-League-schedule-result__score">{{
                    isThisWeek.results.coat2.getSet_A
                  }}</span>
                </div>
              </div>
            </div>
            <link-arrow
              :url="`/match/${isThisWeek.id}?fields=coat2`"
              class="es-League-schedule-result__linkArrow"
            />
          </li>
          <li class="es-League-schedule-result__item">
            <div class="es-League-schedule-result__teamInfo">
              <div class="es-League-schedule-result__team">
                <img
                  :src="isThisWeek.competition.coat3H.image.url"
                  alt=""
                  class="es-League-schedule-result__teamImage"
                />
                <p class="es-League-schedule-result__temaName">
                  {{ isThisWeek.competition.coat3H.teamName }}
                </p>
                <div class="es-League-schedule-result__scoreWrapper">
                  <span class="es-League-schedule-result__score">{{
                    isThisWeek.results.coat3.getSet_H
                  }}</span>
                </div>
              </div>
              <div class="es-League-schedule-result__team">
                <img
                  :src="isThisWeek.competition.coat3A.image.url"
                  alt=""
                  class="es-League-schedule-result__teamImage"
                />
                <p class="es-League-schedule-result__temaName">
                  {{ isThisWeek.competition.coat3A.teamName }}
                </p>
                <div class="es-League-schedule-result__scoreWrapper">
                  <span class="es-League-schedule-result__score">{{
                    isThisWeek.results.coat3.getSet_A
                  }}</span>
                </div>
              </div>
            </div>
            <link-arrow
              :url="`/match/${isThisWeek.id}?fields=coat3`"
              class="es-League-schedule-result__linkArrow"
            />
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
            >{{ item.date }}<span class="right">{{ item.startTime }}</span>
          </h3>
          <p class="es-League-schedule-result__stadium">
            {{ item.stadium }}(<a :href="item.access" target="_blank"
              >会場アクセス<img
                src="~/assets/img/external-link.svg"
                alt=""
                class="es-League-schedule-result__linkImg"
              /> </a
            >)
          </p>
          <div class="es-League-schedule-result__matchInfo">
            <ul class="es-League-schedule-result__list">
              <li class="es-League-schedule-result__item">
                <div class="es-League-schedule-result__teamInfo">
                  <div class="es-League-schedule-result__team">
                    <img
                      :src="item.competition.coat1H.image.url"
                      alt=""
                      class="es-League-schedule-result__teamImage"
                    />
                    <p class="es-League-schedule-result__temaName">
                      {{ item.competition.coat1H.teamName }}
                    </p>
                  </div>
                  <div class="es-League-schedule-result__team">
                    <img
                      :src="item.competition.coat1A.image.url"
                      alt=""
                      class="es-League-schedule-result__teamImage"
                    />
                    <p class="es-League-schedule-result__temaName">
                      {{ item.competition.coat1A.teamName }}
                    </p>
                  </div>
                </div>
                <div></div>
              </li>
              <li class="es-League-schedule-result__item">
                <div class="es-League-schedule-result__teamInfo">
                  <div class="es-League-schedule-result__team">
                    <img
                      :src="item.competition.coat2H.image.url"
                      alt=""
                      class="es-League-schedule-result__teamImage"
                    />
                    <p class="es-League-schedule-result__temaName">
                      {{ item.competition.coat2H.teamName }}
                    </p>
                  </div>
                  <div class="es-League-schedule-result__team">
                    <img
                      :src="item.competition.coat2A.image.url"
                      alt=""
                      class="es-League-schedule-result__teamImage"
                    />
                    <p class="es-League-schedule-result__temaName">
                      {{ item.competition.coat2A.teamName }}
                    </p>
                  </div>
                </div>
                <div></div>
              </li>
              <li class="es-League-schedule-result__item">
                <div class="es-League-schedule-result__teamInfo">
                  <div class="es-League-schedule-result__team">
                    <img
                      :src="item.competition.coat3H.image.url"
                      alt=""
                      class="es-League-schedule-result__teamImage"
                    />
                    <p class="es-League-schedule-result__temaName">
                      {{ item.competition.coat3H.teamName }}
                    </p>
                  </div>
                  <div class="es-League-schedule-result__team">
                    <img
                      :src="item.competition.coat3A.image.url"
                      alt=""
                      class="es-League-schedule-result__teamImage"
                    />
                    <p class="es-League-schedule-result__temaName">
                      {{ item.competition.coat3A.teamName }}
                    </p>
                  </div>
                </div>
                <div></div>
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
      }
      return ''
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.es-League-schedule-result {
  margin: 0px 16px;
  padding: 95px 0px 40px;
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
      font-size: 16px;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
      font-weight: medium;
    }
  }
  &__matchDate {
    font-size: 16px;
    font-weight: medium;
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
    width: 210px;
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
</style>
