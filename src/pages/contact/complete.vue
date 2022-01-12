<template>
  <div class="es-League-complete">
    <h2 class="es-League-complete__title">
      CONTACT<br /><span>お問い合わせ</span>
    </h2>
    <div class="es-League-complete__container">
      <div class="es-League-complete__contents">
        <h3 class="es-League-complete__message">送信完了</h3>
        <p class="es-League-complete__text">
          お問い合わせいただき<br class="sp" />ありがとうございました
        </p>
        <p class="es-League-complete__attention">
          内容を確認次第、ご入力いただきました<br
            class="sp"
          />メールアドレス宛にご連絡いたします。
        </p>
      </div>

      <es-button url="/" class="es-League-complete__btn" arrow="right"
        >TOPへ戻る</es-button
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.es-League-complete {
  margin: 0px 16px;
  padding: 80px 0px 40px;

  &__title {
    margin: 24px 0;
    text-align: center;
    font-size: 32px;
    color: #000000;
    font-family: 'HNewYork';
    & span {
      margin-top: 5px;
      display: block;
      font-size: 18px;
      font-family: '游ゴシック', 'Yu Gothic', '游ゴシック体', YuGothic,
        sans-serif;
    }
  }
  &__container {
    color: #000;
    text-align: left;
    background: linear-gradient(-45deg, transparent 27px, #fff 20px);
    background-position: bottom right;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 0px 16px;
    text-align: center;
  }
  &__contents {
    margin-bottom: 40px;
  }
  &__message {
    font-size: 24px;
  }
  &__text {
    margin-top: 20px;
    font-size: 18px;
  }
  &__attention {
    display: inline-block;
    margin: 20px auto 0;
    font-size: 16px;
    text-align: left;
    line-height: 1.5;
  }
  &__btn {
    margin: auto;
  }
}
</style>
