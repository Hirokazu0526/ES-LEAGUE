<template>
  <div class="es-League">
    <main-visual />
    <live id="live" />
    <next-match />
    <player-card :player-data="getPlayerList" />
    <!-- <live v-if="!isToday" id="live" /> -->
    <pv />
    <!-- <about-es /> -->
    <info-list />
    <!-- <movie /> -->
    <sponsor />
    <!-- <sns /> -->
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
// import aboutEs from '~/components/integration/organisms/about-es.vue'
// import sns from '~/components/integration/organisms/sns.vue'
// import movie from '~/components/integration/organisms/movie.vue'
import pv from '~/components/integration/organisms/pv.vue'

export default {
  components: {
    infoList,
    sponsor,
    mainVisual,
    nextMatch,
    live,
    playerCard,
    // aboutEs,
    // sns,
    // movie,
    pv,
  },
  computed: {
    ...mapGetters(['getPlayerList', 'isToday', 'firstWeek']),
  },
  mounted() {
    // ここから追加
    const hash = this.$route.hash
    if (hash && hash.match(/^#.+$/)) {
      this.$scrollTo(hash, 0, { offset: -80 })
    }
    // ここまで追加
  },
}
</script>

<style scoped lang="scss">
.es-League {
  color: #fff;
  padding-top: 80px;
}
@media screen and (min-width: 768px) {
  .es-League {
    max-width: 600px;
    margin: 0 auto 34px;
  }
}
</style>
