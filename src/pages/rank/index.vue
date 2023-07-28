<template>
  <div class="es-League-rank">
    <h2 class="es-League-rank__title">RANKING<br /><span>順位表</span></h2>
    <div class="es-League-rank__contanier">
      <div class="es-League-rank__menInfo">
        <table class="es-League-rank__list">
          <thead>
            <tr>
              <th>順位</th>
              <th>チーム</th>
              <th>得失セット</th>
              <th>ポイント</th>
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
        <!-- <p class="es-League-rank__caution">
          ※2〜4位に関しては同ポイント同得失セットのため、得失点差にて順位を決定
        </p> -->
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
  head() {
    return {
      title: '順位表',
    }
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
  &__menInfo,
  &__womenInfo {
    margin-bottom: 35px;
  }
  &__gender {
    font-size: 24px;
    &.women {
      color: #e0435e;
    }
  }
  &__list {
    text-align: center;
    margin: 10px auto 5px;
    width: 100%;
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
        font-size: 12px;
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
      padding: 8px 4px;
    }
  }
  &__caution {
    font-size: 12px;
    text-align: left;
    line-height: 1.2;
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
        font-size: 11px;
      }
      th {
        padding: 8px 3px;
      }
    }
    &__width {
      width: 110px;
    }
  }
}
@media screen and (min-width: 768px) {
  .es-League-rank {
    max-width: 600px;
    margin: 0 auto;
    &__title {
      font-size: 45px;
      margin-bottom: 35px;
      & span {
        font-size: 24px;
      }
    }

    &__gender {
      font-size: 32px;
    }

    &__list {
      thead {
        th {
          font-size: 20px;
        }
      }
      tbody {
        th {
          font-size: 24px;
        }
        td {
          padding: 10px 2px 10px 5px;
          font-size: 24px;
        }
      }
    }
    &__width {
      width: 320px;
    }
    &__caution {
      font-size: 14px;
    }
  }
}
</style>
