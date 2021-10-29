<template>
  <div class="esleague-playerList">
    <div>profile</div>
    <div class="anime">
      <ul>
        <li
          v-for="content in contents"
          :key="content.id"
          class="esleague-playerList__item"
        >
          <nuxt-link :to="`/profile/${content.id}`">
            {{ content.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <es-button url="/" :arrow="true" class="esleague-playerList__btn"
      >Home</es-button
    >
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const Data = await $microcms.get({
      endpoint: 'player-details',
    })
    return Data
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
    margin-bottom: 10px;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  &__btn {
    margin: 10px auto;
  }
}
</style>
