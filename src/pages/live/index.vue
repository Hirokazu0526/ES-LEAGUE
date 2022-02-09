<template>
  <section class="es-League-live">
    <h2 class="es-League-live__title">
      LIVE STREAMING<br />
      <span>ライブ配信</span>
    </h2>
    <div class="es-League-live__wrapper">
      <div class="es-League-live__info">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1EP55eCL--4"
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
          src="https://www.youtube.com/embed/WJcVpsYG7u8"
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
          src="https://www.youtube.com/embed/t5MSmq312WY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <es-button url="/" class="es-League-live__btn">TOPページへ</es-button>
  </section>
</template>

<style lang="scss" scoped>
.es-League-live {
  padding: 80px 0px 40px;
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
  &__btn {
    margin: 30px auto 0;
  }
}
@media screen and (min-width: 768px) {
  .es-League-live {
    max-width: 600px;
    margin: 0 auto;
    &__title {
      font-size: 45px;
      margin-bottom: 35px;
      & span {
        font-size: 24px;
      }
    }
    &__btn {
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }
}
</style>
