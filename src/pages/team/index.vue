<template>
  <div class="es-League-teamList">
    <h2 class="es-League-teamList__title">TEAM</h2>
    <div class="anime">
      <ul>
        <li
          v-for="item in getTeamList"
          :key="item.id"
          class="es-League-teamList__item"
        >
          <nuxt-link :to="`/team/${item.id}`">
            {{ item.teamName }}
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
  },
}
</script>

<style lang="scss" scoped>
.es-League-teamList {
  margin: 0px 16px;
  padding: 95px 0px;
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
  &__item {
    color: white;
    list-style: none;
    margin: 10px;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 18px;
    }
  }
  &__btn {
    margin: 20px auto 0;
  }
}
</style>
