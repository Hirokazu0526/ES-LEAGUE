<template>
  <section class="es-League-movie">
    <h2 class="es-League-movie__title">
      MOVIE<br />
      <span>動画</span>
    </h2>
    <div class="es-League-movie__wrapper">
      <div class="es-League-movie__infoContainer">
        <div class="es-League-movie__info">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EKeycdY0-ww"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p class="es-League-movie__infoText">
          【ES LEAGUE 2022 supported by SARAYA】
        </p>
      </div>
      <div class="es-League-movie__infoContainer">
        <div class="es-League-movie__info">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xdNQ7SD4Eqk?loop=1&playlist=xdNQ7SD4Eqk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p class="es-League-movie__infoText">
          【ES LEAGUE 〜Extreme Sepaktakraw LEAGUE〜】
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.es-League-movie {
  padding: 80px 0px 80px;
  &__title {
    margin: 24px 0;
    text-align: center;
    font-size: 32px;
    color: #000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
      color: #030012;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
    }
  }

  &__wrapper {
    margin: 0 16px;
  }
  &__info {
    margin-top: 40px;
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
  &__infoText {
    margin-top: 10px;
    font-size: 13px;
  }
  &__btn {
    margin: 16px auto 0;
  }
}
@media screen and (max-width: 374px) {
  .es-League-movie {
    &__infoText {
      font-size: 11px;
    }
  }
}
@media screen and (min-width: 768px) {
  .es-League-movie {
    max-width: 600px;
    margin: 0 auto;
    &__title {
      font-size: 45px;
      margin-bottom: 35px;
      & span {
        font-size: 24px;
      }
    }
    &__infoText {
      font-size: 18px;
    }
    &__btn {
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }
}
</style>
