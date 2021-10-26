<template>
  <div>
    <ul class="es-league-playerList">
      <li
        v-for="list in teamList"
        :key="list.id"
        class="es-league-playerList__item"
      >
        <p>{{ list.teamName }}</p>
        <div v-html="list.text">></div>
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const teamList = await $microcms.get({ endpoint: 'team-details' })
    return { teamList: teamList.contents }
  },
}
</script>

<style lang="scss" scoped>
.es-league-playerList {
  &__item {
    color: white;
    list-style: none;
  }
}
</style>
