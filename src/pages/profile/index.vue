<template>
  <div>
    <div>profile</div>
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
    <es-button url="/" :arrow="true" class="esleague-playerList__btn"
      >Home</es-button
    >
  </div>
</template>

<script>
import esButton from '~/components/integration/atoms/es-button.vue'

export default {
  components: {
    esButton,
  },
  async asyncData({ $microcms }) {
    const playersList = await $microcms.get({
      endpoint: 'player-details',
    })
    return { playersList: playersList.contents }
  },
  mounted() {
    this.setAnimation()
  },
  methods: {
    setAnimation() {
      this.$anime({
        targets: '.anime',
        translateX: 50,
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
  &__btn {
    margin: 10px auto;
  }
}
</style>
