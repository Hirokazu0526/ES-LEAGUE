<template>
  <div class="es-League-rank">
    <h2 class="es-League-rank__title">RANKING</h2>
    <div class="es-League-rank__contanier">
      <div class="es-League-rank__menInfo">
        <h3 class="es-League-rank__gender">MEN</h3>
        <table class="es-League-rank__list">
          <thead>
            <tr>
              <th>順位</th>
              <th>チーム</th>
              <th>得失セット</th>
              <th>勝ち点</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in getMenRankingData" :key="item.index" class="men">
              <th>{{ item.ranking }}</th>

              <td>
                <nuxt-link :to="`/team/${item.teamInfo.id}`">{{
                  item.team
                }}</nuxt-link>
              </td>

              <td>{{ item.getSet - item.lostSet }}</td>
              <td>{{ item.winningPoint }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="es-League-rank__womenInfo">
        <h3 class="es-League-rank__gender women">WOMEN</h3>
        <table class="es-League-rank__list">
          <thead class="women">
            <tr>
              <th>順位</th>
              <th>チーム</th>
              <th>得失セット</th>
              <th>勝ち点</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in getWomenRankingData"
              :key="item.index"
              class="women"
            >
              <th>{{ item.ranking }}</th>

              <td>
                <nuxt-link :to="`/team/${item.teamInfo.id}`"
                  >{{ item.team }}
                </nuxt-link>
              </td>

              <td>{{ item.getSet - item.lostSet }}</td>
              <td>{{ item.winningPoint }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <es-button url="/schedule/result" class="es-League-rank__btn"
        >日程・結果</es-button
      >
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
    ...mapGetters(['getMenRankingData', 'getWomenRankingData']),
  },
}
</script>

<style lang="scss" scoped>
.es-League-rank {
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
  }
  &__gender {
    font-size: 24px;
    &.women {
      color: #e0435e;
    }
  }
  &__list {
    text-align: center;
    margin: 10px auto 20px;
    width: 100%;
    font-size: 16px;
    border-collapse: collapse;
    border-spacing: 0;
    thead {
      background: #001229;
      color: #fff;
      &.women {
        background: #e0435e;
      }
    }
    tbody {
      tr {
        color: #000000;
        background: #fff;
        &.men {
          &:nth-child(2n) {
            background: #9aa3af;
          }
          &:last-child {
            border-bottom: 2px solid #001229;
          }
        }
        &.women {
          &:nth-child(2n) {
            background: #ffa5b5;
          }
          &:last-child {
            border-bottom: 2px solid #e0435e;
          }
        }
        a {
          color: #000000;
          text-decoration: none;
        }
      }
      th {
        font-size: 18px;
      }
      td {
        padding: 5px;
        font-size: 18px;
      }
    }
    th {
      padding: 8px 10px;
    }
  }
  &__btn {
    margin: 15px auto 0;
  }
}
</style>
