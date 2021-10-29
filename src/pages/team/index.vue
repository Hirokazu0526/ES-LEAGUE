<template>
  <div class="es-League-teamList">
    <h3 class="es-League-teamList__title">TEAM</h3>
    <div class="anime">
      <ul>
        <li
          v-for="teamList in teamLists"
          :key="teamList.id"
          class="es-League-teamList__item"
        >
          <nuxt-link :to="`/team/${teamList.id}`">
            {{ teamList.teamName }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <es-button url="/" class="es-League-teamList__btn">Home</es-button>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const teamList = await $microcms.get({ endpoint: 'team-details' })
    return { teamLists: teamList.contents }
  },
}
</script>

<style lang="scss" scoped>
.es-League-teamList {
  margin: 0px 16px;
  padding: 80px 0px;
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
