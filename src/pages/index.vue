<template>
  <div>
    <div>
      <nuxt-link to="/profile">profile</nuxt-link>
    </div>

    <div>
      <ul class="esleague-playerList">
        <li
          v-for="list in teamList"
          :key="list.id"
          class="esleague-playerList__item"
        >
          <p>{{ list.teamName }}</p>
          <div v-html="list.text">></div>
          <br />
        </li>
      </ul>
    </div>
    <div v-if="isDay6">trueです</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ $microcms }) {
    // const [playersList, teamList] = await Promise.all([
    //   $microcms.get({ endpoint: 'player-details' }),
    //   $microcms.get({ endpoint: 'team-details' }),
    // ])
    // return { playersList: playersList.contents, teamList: teamList.contents }
    const teamList = await $microcms.get({ endpoint: 'team-details' })
    return { teamList: teamList.contents }
  },
  computed: {
    ...mapGetters(['isDay6']),
  },
  // created() {
  //   this.$store.dispatch('getPlayersList')
  // },
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss">
.esleague-playerList {
  &__item {
    list-style: none;
  }
}
</style>
