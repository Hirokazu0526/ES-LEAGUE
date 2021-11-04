<template>
  <div class="es-League">
    <main-visual />
    <next-match />
    <live id="live" />
    <about-es />
    <player-card :player-data="getPlayerList" />
    <info-list />
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
  },
  computed: {
    ...mapGetters(['getPlayerList']),
  },
}
</script>

<style scoped lang="scss">
.es-League {
  color: #fff;
}
.block {
  height: 200px;
  background-color: rgb(211, 164, 164);
  p {
    padding-top: 100px;
  }
}
</style>
