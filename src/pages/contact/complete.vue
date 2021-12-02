<template>
  <div class="es-League-complete">
    <h2 class="es-League-complete__title">お問い合わせ</h2>
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

      <es-button url="/" class="es-League-complete__btn">TOPへ戻る</es-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.es-League-complete {
  margin: 0px 16px;
  padding: 95px 0px;

  &__title {
    margin: 21px 0 45px;
    text-align: center;
    font-size: 32px;
    position: relative;
    color: #fff;
    &:after {
      content: '';
      width: 144px;
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
  &__container {
    color: #000;
    text-align: left;
    background: linear-gradient(-45deg, transparent 27px, #fff 20px);
    background-position: bottom right;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 45px 16px 40px;
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
    font-size: 14px;
    text-align: left;
  }
  &__btn {
    margin: auto;
  }
}
</style>
