<template>
  <div class="es-League-teamList">
    <h2 class="es-League-teamList__title">TEAM<br /><span>チーム</span></h2>
    <div class="es-League-teamList__wrapper">
      <h3 class="es-League-teamList__gender">MEN</h3>
      <ul>
        <li
          v-for="item in menTeamLists"
          :key="item.id"
          class="es-League-teamList__item"
        >
          <nuxt-link :to="`/team/${item.id}`" class="es-League-teamList__link">
            <img
              :src="item.image.url"
              class="es-League-teamList__image"
              :alt="item.teamName"
            />
            <p class="es-League-teamList__teamName">{{ item.teamName }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="es-League-teamList__wrapper">
      <h3 class="es-League-teamList__gender pink">WOMEN</h3>
      <ul>
        <li
          v-for="item in womenTeamLists"
          :key="item.id"
          class="es-League-teamList__item"
        >
          <nuxt-link :to="`/team/${item.id}`" class="es-League-teamList__link">
            <img
              :src="item.image.url"
              class="es-League-teamList__image"
              :alt="item.teamName"
            />
            <p class="es-League-teamList__teamName">{{ item.teamName }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>

    <es-button url="/" class="es-League-teamList__btn">Home</es-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getTeamList']),
    menTeamLists() {
      const res = this.getTeamList.filter((list) => {
        return list.gender[0] === 'men'
      })
      return res
    },
    womenTeamLists() {
      const res = this.getTeamList.filter((list) => {
        return list.gender[0] === 'women'
      })
      return res
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-teamList {
  margin: 0px 16px;
  padding: 80px 0px;
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
      font-size: 18px;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
    }
  }

  &__wrapper {
    margin: 33px 16px;
    &:first-of-type {
      margin-top: 0;
    }
  }

  &__item {
    list-style: none;
    margin: 15px 0;
  }
  &__link {
    display: grid;
    grid-template-columns: 62px 1fr;
    gap: 10px;
    justify-items: start;
    align-items: center;
    color: #000;
    text-decoration: none;
  }

  &__gender {
    font-size: 22px;
    padding: 10px 0;
    text-align: center;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    &.pink {
      color: #e0435e;
      border-top: 2px solid #e0435e;
      border-bottom: 2px solid #e0435e;
    }
  }

  &__image {
    width: 62px;
  }

  &__teamName {
    font-size: 19px;
    font-weight: bold;
  }
  &__btn {
    margin: 20px auto 0;
  }
}
</style>
