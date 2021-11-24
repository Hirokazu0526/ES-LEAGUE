<template>
  <div class="es-League-schedule-result">
    <h2 class="es-League-schedule-result__title">日程・結果</h2>
    <div class="es-League-schedule-result__contanier">
      <h3 class="es-League-schedule-result__matchDate">2022.02.11 Sat.</h3>
      <nuxt-link to="/stadium" class="es-League-schedule-result__stadium"
        >墨田区総合体育館</nuxt-link
      >
      <div class="es-League-schedule-result__resultList">
        <ul class="es-League-schedule-result__list">
          <li
            v-for="list in resultList"
            :key="list.id"
            class="es-League-schedule-result__item"
          >
            <div class="es-League-schedule-result__team">
              <p class="es-League-schedule-result__temaName">
                {{ list.team1 }}
              </p>
              <p class="es-League-schedule-result__score">{{ list.score1 }}</p>
            </div>
            <div class="es-League-schedule-result__decoration">
              <p class="es-League-schedule-result__versus">VS</p>
              <nuxt-link :to="list.url" class="es-League-schedule-result__link"
                >試合詳細</nuxt-link
              >
            </div>
            <div class="es-League-schedule-result__team">
              <p class="es-League-schedule-result__temaName">
                {{ list.team2 }}
              </p>
              <p class="es-League-schedule-result__score">{{ list.score2 }}</p>
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
          v-for="item in matchSchedule"
          :key="item.id"
          class="es-League-schedule-result__scheduleList"
        >
          <h3 class="es-League-schedule-result__matchDate">{{ item.date }}</h3>
          <nuxt-link :to="item.url" class="es-League-schedule-result__stadium"
            >{{ item.stadium }} >></nuxt-link
          >
          <div class="es-League-schedule-result__matchInfo">
            <ul>
              <li class="es-League-schedule-result__matchList">
                <p class="es-League-schedule-result__temaName">
                  {{ item.team1 }}
                </p>
                <p class="es-League-schedule-result__versus">VS</p>
                <p class="es-League-schedule-result__temaName">
                  {{ item.team2 }}
                </p>
              </li>
              <li class="es-League-schedule-result__matchList">
                <p class="es-League-schedule-result__temaName">
                  {{ item.team3 }}
                </p>
                <p class="es-League-schedule-result__versus">VS</p>
                <p class="es-League-schedule-result__temaName">
                  {{ item.team4 }}
                </p>
              </li>
              <li class="es-League-schedule-result__matchList">
                <p class="es-League-schedule-result__temaName">
                  {{ item.team5 }}
                </p>
                <p class="es-League-schedule-result__versus">VS</p>
                <p class="es-League-schedule-result__temaName">
                  {{ item.team6 }}
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
export default {
  data() {
    return {
      resultList: [
        {
          id: 1,
          team1: 'TEAM A',
          score1: 3,
          team2: 'TEAM B',
          score2: 1,
          url: '/',
        },
        {
          id: 2,
          team1: 'TEAM C',
          score1: 2,
          team2: 'TEAM D',
          score2: 2,
          url: '/',
        },
        {
          id: 3,
          team1: 'TEAM a',
          score1: 1,
          team2: 'TEAM b',
          score2: 3,
          url: '/',
        },
      ],
      matchSchedule: [
        {
          id: 1,
          date: '2022.03.19 Sat.',
          stadium: '墨田区総合体育館',
          team1: 'TEAM A',
          team2: 'TEAM B',
          team3: 'TEAM C',
          team4: 'TEAM D',
          team5: 'TEAM a',
          team6: 'TEAM b',
          url: '/',
        },
        {
          id: 2,
          date: '2022.04.19 Sat.',
          stadium: '墨田区総合体育館',
          team1: 'TEAM B',
          team2: 'TEAM C',
          team3: 'TEAM D',
          team4: 'TEAM E',
          team5: 'TEAM b',
          team6: 'TEAM c',
          url: '/',
        },
        {
          id: 3,
          date: '2022.05.19 Sat.',
          stadium: '墨田区総合体育館',
          team1: 'TEAM A',
          team2: 'TEAM C',
          team3: 'TEAM B',
          team4: 'TEAM E',
          team5: 'TEAM a',
          team6: 'TEAM c',
          url: '/',
        },
        {
          id: 4,
          date: '2022.06.19 Sat.',
          stadium: '墨田区総合体育館',
          team1: 'TEAM A',
          team2: 'TEAM D',
          team3: 'TEAM C',
          team4: 'TEAM E',
          team5: 'TEAM a',
          team6: 'TEAM b',
          url: '/',
        },
        {
          id: 5,
          date: '2022.07.19 Sat.',
          stadium: '墨田区総合体育館',
          team1: 'TEAM A',
          team2: 'TEAM E',
          team3: 'TEAM B',
          team4: 'TEAM D',
          team5: 'TEAM a',
          team6: 'TEAM c',
          url: '/',
        },
      ],
    }
  },
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
    font-size: 24px;
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
    font-size: 24px;
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
    grid-template-columns: 1fr 1fr 1fr;
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

  &__score {
    margin-top: 8px;
  }
  &__link {
    display: block;
    color: #000;
    text-decoration: none;
    margin-top: 8px;
  }

  &__scheduleList {
    list-style: none;
    margin-bottom: 30px;
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
