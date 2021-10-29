<template>
  <div class="es-League-team">
    <h2 class="es-League-team__title">{{ teamName }}</h2>

    <img :src="image.url" :alt="teamName" class="es-League-team__uniform" />
    <div class="es-League-team__info">
      <p class="es-League-team__text sponsor">スポンサー：{{ sponsor }}</p>
      <p class="es-League-team__text slogan">スローガン：{{ slogan }}</p>
      <p class="es-League-team__text teamcolor">
        チームカラー：{{ teamcolor }}
      </p>
      <p class="es-League-team__text teamIntroduction">
        チーム紹介：<br />{{ text }}
      </p>
    </div>

    <es-button url="/team" :border-radius="8" class="es-League-team__btn team"
      >チーム一覧へ</es-button
    >
    <es-button
      url="/profile"
      color="white"
      :border-radius="8"
      class="es-League-team__btn player"
      >選手一覧へ</es-button
    >
  </div>
</template>

<script>
export default {
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: `team-details/${params.slug}`,
    })
    return data
  },
}
</script>

<style lang="scss" scoped>
.es-League-team {
  margin: 0px 16px;
  padding: 80px 0px;
  text-align: center;
  color: #fff;

  &__title {
    margin: 21px 0 45px;
    text-align: center;
    font-size: 24px;
    position: relative;
    &:after {
      content: '';
      width: 120px;
      height: 2px;
      background-color: #fff;
      display: block;
      position: absolute;
      bottom: -10px;
      left: 0px;
      right: 0px;
      margin: 0 auto;
    }
  }
  &__info {
    padding: 0px 16px;
    text-align: left;
  }
  &__text {
    font-size: 18px;
    margin: 10px 0;
    line-height: 1.5;
  }
  &__btn {
    margin: 15px auto 0;
  }
}
</style>
