<template>
  <div class="es-League">
    <main-visual />
    <next-match />
    <pv />
    <live v-if="!firstWeek" id="live" />
    <about-es />
    <player-card :player-data="getPlayerList" />
    <info-list />
    <movie />
    <sponsor />
    <sns />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import infoList from '~/components/integration/organisms/info-list.vue'
import sponsor from '~/components/integration/organisms/sponsor.vue'
import mainVisual from '~/components/integration/organisms/main-visual.vue'
import nextMatch from '~/components/integration/organisms/next-match.vue'
import live from '~/components/integration/organisms/live.vue'
import playerCard from '~/components/integration/organisms/player-card.vue'
import aboutEs from '~/components/integration/organisms/about-es.vue'
import sns from '~/components/integration/organisms/sns.vue'
import movie from '~/components/integration/organisms/movie.vue'
import pv from '~/components/integration/organisms/pv.vue'

export default {
  components: {
    infoList,
    sponsor,
    mainVisual,
    nextMatch,
    live,
    playerCard,
    aboutEs,
    sns,
    movie,
    pv,
  },
  computed: {
    ...mapGetters(['getPlayerList', 'firstWeek']),
  },
}
</script>

<style scoped lang="scss">
.es-League {
  color: #fff;
}
</style>
