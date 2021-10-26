<template>
  <div class="es-League">
    <main-visual />
    <div class="es-League__profileLink">
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
    <div class="block">
      <p id="live">Live</p>
      <nuxt-link v-scroll-to="{ el: '#logo', offset: -30 }" to>
        <span>Topへ移動</span>
      </nuxt-link>
    </div>
    <div v-if="isDay6">trueです</div>

    <info-list />
    <sponsor />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import infoList from '~/components/integration/organisms/infoList.vue'
import Sponsor from '~/components/integration/organisms/sponsor.vue'
import MainVisual from '~/components/integration/organisms/main-visual.vue'

export default {
  components: { infoList, Sponsor, MainVisual },
  async asyncData({ $microcms }) {
    // const [playersList, teamList] = await Promise.all([
    //   $microcms.get({ endpoint: 'player-details' }),
    //   $microcms.get({ endpoint: 'team-details' }),
    // ])
    // return { playersList: playersList.contents, teamList: teamList.contents }
    const teamList = await $microcms.get({ endpoint: 'team-details' })
    return { teamList: teamList.contents }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isDay6']),
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss">
.es-League {
  color: #fff;
  &__profileLink {
    margin: 10px 0;
    a {
      padding: 5px;
      color: #fff;
      background-color: dimgray;
    }
  }
}
.esleague-playerList {
  &__item {
    color: white;
    list-style: none;
  }
}
.block {
  height: 200px;
  background-color: rgb(211, 164, 164);
  p {
    padding-top: 100px;
  }
}
</style>
