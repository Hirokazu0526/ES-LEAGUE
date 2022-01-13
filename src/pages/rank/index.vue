<template>
  <div class="es-League-rank">
    <h2 class="es-League-rank__title">RANKING<br /><span>順位表</span></h2>
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

              <td class="es-League-rank__width">
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

              <td class="es-League-rank__width">
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
      <div class="es-League-rank__btnWrapper">
        <back-button />
        <es-button url="/schedule/result" class="es-League-rank__btn"
          >日程・結果</es-button
        >
      </div>
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
  padding: 80px 0px 40px;
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
  &__contanier {
    padding: 0px 0 30px;
    color: #000;
  }
  &__gender {
    font-size: 24px;
    &.women {
      color: #e0435e;
    }
  }
  &__list {
    text-align: center;
    margin: 10px auto 35px;
    width: 100%;
    font-size: 16px;
    border-collapse: collapse;
    border-spacing: 0;
    thead {
      background: #001229;
      color: #fff;
      font-size: 14px;
      &.women {
        background: #e0435e;
      }
      th {
        border-right: 1px solid #fff;
        &:last-child {
          border-right: none;
        }
      }
    }
    tbody {
      tr {
        color: #000000;
        background: #fff;
        &.men {
          &:nth-child(2n) {
            background: #e4e4e4;
          }
          &:last-child {
            border-bottom: 2px solid #001229;
          }
        }
        &.women {
          &:nth-child(2n) {
            background: #ffe1e7;
          }
          &:last-child {
            border-bottom: 2px solid #e0435e;
          }
        }
        a {
          color: #000000;
          text-decoration: none;
          display: block;
        }
      }
      th {
        font-size: 14px;
      }
      td {
        padding: 5px 2px;
        font-size: 12px;
        font-weight: bold;
      }
    }
    th {
      padding: 8px 8px;
    }
  }
  &__width {
    min-width: 135px;
    text-align: left;
  }
  &__btnWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    justify-items: center;
  }
}
@media screen and (max-width: 374px) {
  .es-League-rank {
    &__list {
      thead {
        font-size: 12px;
      }
      th {
        padding: 8px 5px;
      }
    }
    &__width {
      width: 110px;
    }
  }
}
</style>
