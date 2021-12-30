<template>
  <div v-if="isThisWeek" class="es-League-schedule">
    <h3 class="es-League-schedule__title">
      NEXT MATCH<br /><span>試合予定</span>
    </h3>
    <div class="es-League-schedule__contanier">
      <h3 class="es-League-schedule__matchDate">
        {{ isThisWeek.date }}
      </h3>
      <nuxt-link to="/stadium" class="es-League-schedule__stadium">{{
        isThisWeek.stadium
      }}</nuxt-link>
      <div class="es-League-schedule__resultList">
        <ul class="es-League-schedule__list">
          <li class="es-League-schedule__item">
            <div class="es-League-schedule__team">
              <p class="es-League-schedule__temaName">
                {{ isThisWeek.competition.coat1H }}
              </p>
            </div>
            <div class="es-League-schedule__decoration">
              <p class="es-League-schedule__versus">VS</p>
            </div>
            <div class="es-League-schedule__team">
              <p class="es-League-schedule__temaName">
                {{ isThisWeek.competition.coat1A }}
              </p>
            </div>
          </li>
          <li class="es-League-schedule__item">
            <div class="es-League-schedule__team">
              <p class="es-League-schedule__temaName">
                {{ isThisWeek.competition.coat2H }}
              </p>
            </div>
            <div class="es-League-schedule__decoration">
              <p class="es-League-schedule__versus">VS</p>
            </div>
            <div class="es-League-schedule__team">
              <p class="es-League-schedule__temaName">
                {{ isThisWeek.competition.coat2A }}
              </p>
            </div>
          </li>
          <li class="es-League-schedule__item">
            <div class="es-League-schedule__team">
              <p class="es-League-schedule__temaName">
                {{ isThisWeek.competition.coat3H }}
              </p>
            </div>
            <div class="es-League-schedule__decoration">
              <p class="es-League-schedule__versus">VS</p>
            </div>
            <div class="es-League-schedule__team">
              <p class="es-League-schedule__temaName">
                {{ isThisWeek.competition.coat3A }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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
      if (!this.firstWeek) {
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
  },
}
</script>

<style lang="scss" scoped>
.es-League-schedule {
  padding-top: 20px;
  &__title {
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
  &__contanier {
    padding: 10px 16px 30px;
    color: #000;
    text-align: center;
  }
  &__matchDate {
    font-size: 28px;
    font-weight: bold;
  }
  &__stadium {
    display: block;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    color: #000;
  }
  &__resultList {
    margin-top: 15px;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
  }
  &__list {
    list-style: none;
  }
  &__item {
    display: grid;
    grid-template-columns: 1fr 110px 1fr;
    padding: 10px 0;
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
}
</style>
