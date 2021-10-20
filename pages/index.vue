<template>
  <div>
    <div class="anime">
      <ul class="esleague-playerList">
        <li
          v-for="list in playersList"
          :key="list.id"
          class="esleague-playerList__item"
        >
          氏名：{{ list.name }}<br />
          ポシション：{{ list.position[0] }}<br />
          誕生日：{{ list.birth }}
        </li>
      </ul>
    </div>
    <div>
      <ul class="esleague-playerList">
        <li
          v-for="list in teamList"
          :key="list.id"
          class="esleague-playerList__item"
        >
          <p>{{ list.teamName }}</p>
          <p v-html="list.text">></p>
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
    const [playersList, teamList] = await Promise.all([
      $microcms.get({ endpoint: 'player-details' }),
      $microcms.get({ endpoint: 'team-details' }),
    ])
    return { playersList: playersList.contents, teamList: teamList.contents }
  },
  computed: {
    ...mapGetters(['isDay6']),
  },
  // created() {
  //   this.$store.dispatch('getPlayersList')
  // },
  mounted() {
    this.setAnimation()
  },
  methods: {
    setAnimation() {
      this.$anime({
        targets: '.anime',
        translateX: 250,
        duration: 800,
        easing: 'easeInOutSine',
      })
    },
  },
}
</script>

<style scoped lang="scss">
.esleague-playerList {
  &__item {
    list-style: none;
  }
}
</style>
