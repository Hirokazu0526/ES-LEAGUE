<template>
  <div class="es-League-schedule-result">
    <h2 v-if="isThisWeek" class="es-League-schedule-result__title">
      日程・結果
    </h2>
    <div v-if="isThisWeek" class="es-League-schedule-result__contanier">
      <h3 class="es-League-schedule-result__matchDate">
        {{ isThisWeek.date }}
      </h3>
      <nuxt-link to="/stadium" class="es-League-schedule-result__stadium">{{
        isThisWeek.stadium
      }}</nuxt-link>
      <div class="es-League-schedule-result__resultList">
        <ul class="es-League-schedule-result__list">
          <li class="es-League-schedule-result__item">
            <div class="es-League-schedule-result__team">
              <p class="es-League-schedule-result__temaName">
                {{ isThisWeek.competition.coat1H }}
              </p>
              <p class="es-League-schedule-result__score">
                {{ isThisWeek.results.coat1.getSet_H }}
              </p>
            </div>
            <div class="es-League-schedule-result__decoration">
              <p class="es-League-schedule-result__versus">VS</p>
              <nuxt-link
                :to="`/match/${isThisWeek.id}?fields=coat1`"
                class="es-League-schedule-result__link"
                >詳細</nuxt-link
              >
            </div>
            <div class="es-League-schedule-result__team">
              <p class="es-League-schedule-result__temaName">
                {{ isThisWeek.competition.coat1A }}
              </p>
              <p class="es-League-schedule-result__score">
                {{ isThisWeek.results.coat1.getSet_A }}
              </p>
            </div>
          </li>
          <li class="es-League-schedule-result__item">
            <div class="es-League-schedule-result__team">
              <p class="es-League-schedule-result__temaName">
                {{ isThisWeek.competition.coat2H }}
              </p>
              <p class="es-League-schedule-result__score">
                {{ isThisWeek.results.coat2.getSet_H }}
              </p>
            </div>
            <div class="es-League-schedule-result__decoration">
              <p class="es-League-schedule-result__versus">VS</p>
              <nuxt-link
                :to="`/match/${isThisWeek.id}?fields=coat2`"
                class="es-League-schedule-result__link"
                >詳細</nuxt-link
              >
            </div>
            <div class="es-League-schedule-result__team">
              <p class="es-League-schedule-result__temaName">
                {{ isThisWeek.competition.coat2A }}
              </p>
              <p class="es-League-schedule-result__score">
                {{ isThisWeek.results.coat2.getSet_A }}
              </p>
            </div>
          </li>
          <li class="es-League-schedule-result__item">
            <div class="es-League-schedule-result__team">
              <p class="es-League-schedule-result__temaName">
                {{ isThisWeek.competition.coat3H }}
              </p>
              <p class="es-League-schedule-result__score">
                {{ isThisWeek.results.coat3.getSet_H }}
              </p>
            </div>
            <div class="es-League-schedule-result__decoration">
              <p class="es-League-schedule-result__versus">VS</p>
              <nuxt-link
                :to="`/match/${isThisWeek.id}?fields=coat3`"
                class="es-League-schedule-result__link"
                >詳細</nuxt-link
              >
            </div>
            <div class="es-League-schedule-result__team">
              <p class="es-League-schedule-result__temaName">
                {{ isThisWeek.competition.coat3A }}
              </p>
              <p class="es-League-schedule-result__score">
                {{ isThisWeek.results.coat3.getSet_A }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <h3 class="es-League-schedule-result__newsTitle"></h3>

      <es-button url="/news" class="es-League-schedule-result__btn"
        >順位表</es-button
      >
    </div>
    <h2 class="es-League-schedule-result__title">スケジュール</h2>
    <div class="es-League-schedule-result__contanier transparency">
      <ul>
        <li
          v-for="item in getCompetitionList"
          :key="item.id"
          class="es-League-schedule-result__scheduleList"
        >
          <h3 class="es-League-schedule-result__matchDate">{{ item.date }}</h3>
          <nuxt-link to="/stadium" class="es-League-schedule-result__stadium"
            >{{ item.stadium }} >></nuxt-link
          >
          <div class="es-League-schedule-result__matchInfo">
            <ul>
              <li class="es-League-schedule-result__matchList">
                <p class="es-League-schedule-result__temaName">
                  {{ item.competition.coat1H }}
                </p>
                <p class="es-League-schedule-result__versus">VS</p>
                <p class="es-League-schedule-result__temaName">
                  {{ item.competition.coat1A }}
                </p>
              </li>
              <li class="es-League-schedule-result__matchList">
                <p class="es-League-schedule-result__temaName">
                  {{ item.competition.coat2H }}
                </p>
                <p class="es-League-schedule-result__versus">VS</p>
                <p class="es-League-schedule-result__temaName">
                  {{ item.competition.coat2A }}
                </p>
              </li>
              <li class="es-League-schedule-result__matchList">
                <p class="es-League-schedule-result__temaName">
                  {{ item.competition.coat3H }}
                </p>
                <p class="es-League-schedule-result__versus">VS</p>
                <p class="es-League-schedule-result__temaName">
                  {{ item.competition.coat3A }}
                </p>
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

export default {
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
  &__contanier {
    padding: 20px 16px 30px;
    color: #000;
    background: linear-gradient(-45deg, transparent 27px, #fff 20px);
    background-position: bottom right;
    background-size: 100%;
    background-repeat: no-repeat;
    &.transparency {
      background: none;
      color: #fff;
      a {
        color: #fff;
      }
    }
  }
  &__matchDate {
    font-size: 32px;
    font-weight: bold;
  }
  &__stadium {
    display: block;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    color: #000;
    cursor: pointer;
    margin-top: 10px;
  }
  &__resultList {
    margin-top: 30px;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
  }
  &__list {
    list-style: none;
  }
  &__item {
    display: grid;
    grid-template-columns: 1fr 110px 1fr;
    padding: 20px 0;
    border-bottom: 1px solid #000;
    &:last-child {
      border-bottom: none;
    }
  }

  &__temaName {
    font-size: 23px;
    font-weight: bold;
  }
  &__versus {
    font-size: 23px;
    font-weight: bold;
  }

  &__score {
    margin-top: 8px;
    font-size: 23px;
    font-weight: bold;
  }
  &__link {
    display: block;
    width: 90px;
    font-size: 14px;
    color: #fff;
    text-decoration: none;
    padding: 5px 22px 5px 0px;
    margin: 8px 0 0 20px;
    background: linear-gradient(-45deg, transparent 27px, #011e43 20px);
    background-position: bottom right;
    background-size: 100%;
    background-repeat: no-repeat;
  }

  &__scheduleList {
    list-style: none;
    margin-bottom: 50px;
  }

  &__matchInfo {
    margin-top: 20px;
  }
  &__matchList {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    padding: 10px 0;
    border-bottom: 1px solid #fff;
  }

  &__btn {
    margin: 30px auto 0;
  }
}
</style>
