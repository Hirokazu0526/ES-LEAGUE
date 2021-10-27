<template>
  <div class="es-League">
    <main-visual />
    <next-match />
    <live id="live" />
    <about-es />
    <player-card />
    <div class="es-League__profileLink">
      <nuxt-link to="/profile">profile</nuxt-link>
    </div>

    <div class="block">
      <p>Live</p>
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
import infoList from '~/components/integration/organisms/info-list.vue'
import sponsor from '~/components/integration/organisms/sponsor.vue'
import mainVisual from '~/components/integration/organisms/main-visual.vue'
import nextMatch from '~/components/integration/organisms/next-match.vue'
import live from '~/components/integration/organisms/live.vue'
import playerCard from '~/components/integration/organisms/player-card.vue'
import aboutEs from '~/components/integration/organisms/about-es.vue'

export default {
  components: {
    infoList,
    sponsor,
    mainVisual,
    nextMatch,
    live,
    playerCard,
    aboutEs,
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
.block {
  height: 200px;
  background-color: rgb(211, 164, 164);
  p {
    padding-top: 100px;
  }
}
</style>
