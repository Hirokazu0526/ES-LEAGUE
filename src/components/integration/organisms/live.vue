<template>
  <div class="es-League-live">
    <h3 v-if="true" class="es-League-live__title">
      SEASON 2022 ARCHIVE<br /><span>2022 シーズン アーカイブ</span>
    </h3>
    <h3 v-else class="es-League-live__title">
      ARCHIVING<br /><span>アーカイブ配信</span>
    </h3>
    <!-- <div class="es-League-live__info">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4DgGr29jCJE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="es-League-live__info">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/20DSU5SFodk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="es-League-live__info">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lxwBY8H9bUg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div> -->
    <es-button url="/live" arrow="right" class="es-League-live__btn"
      >配信一覧</es-button
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['firstGame', 'secondGame', 'thirdGame', 'fourthGame']),
  },
}
</script>

<style lang="scss" scoped>
.es-League-live {
  margin: 0 16px 34px;
  &__title {
    text-align: center;
    font-size: 32px;
    color: #000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 16px;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
      color: #000;
    }
  }
  &__info {
    margin-top: 15px;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0px;
    position: relative;
    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  &__btn {
    margin: 16px auto 0;
  }
}
@media screen and (min-width: 768px) {
  .es-League-live {
    max-width: 600px;
    margin: 0 auto 34px;
    &__title {
      margin-top: 30px;
      font-size: 45px;
      & span {
        font-size: 24px;
      }
    }
  }
}
</style>
