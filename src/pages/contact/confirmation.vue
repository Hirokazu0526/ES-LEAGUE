<template>
  <div class="es-League-confirmation" style="color: #fff">
    <h2 class="es-League-confirmation__title">お問い合わせ</h2>
    <div class="es-League-confirmation__container">
      <div class="es-League-confirmation__contents">
        <h3 class="es-League-confirmation__subject">お名前</h3>
        <p class="es-League-confirmation__content">{{ userName }}</p>
        <h3 class="es-League-confirmation__subject">ふりがな</h3>
        <p class="es-League-confirmation__content">{{ userKana }}</p>
        <h3 class="es-League-confirmation__subject">電話番号</h3>
        <p class="es-League-confirmation__content">{{ userPhoneNumber }}</p>
        <h3 class="es-League-confirmation__subject">メールアドレス</h3>
        <p class="es-League-confirmation__content">{{ userEmail }}</p>
        <h3 class="es-League-confirmation__subject">お問い合わせ内容</h3>
        <p class="es-League-confirmation__content">{{ userContent }}</p>
      </div>

      <button class="submitButton gold" @click="back">戻る</button>
      <button
        class="submitButton navy"
        type="submit"
        @click.prevent="formSubmit"
      >
        送信
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'userName',
      'userKana',
      'userPhoneNumber',
      'userEmail',
      'userContent',
    ]),
  },
  methods: {
    async formSubmit() {
      const apiUrl = process.env.API_URL
      const apiKey = process.env.API_KEY
      const inputData = {
        name: this.userName,
        nameKana: this.userKana,
        phoneNumber: this.userPhoneNumber,
        email: this.userEmail,
        content: this.userContent,
      }

      await this.$axios
        .$post(`${apiUrl}contact`, inputData, {
          headers: {
            'Content-Type': 'application/json',
            'X-MICROCMS-API-KEY': apiKey,
          },
        })
        .then(() => {
          this.inputData = {}
          this.$store.commit('setUserDataClear')
          this.$router.push('/contact/complete')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    back() {
      history.back()
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-confirmation {
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
    padding: 30px 16px 40px;
  }
  &__contents {
    margin-bottom: 30px;
  }
  &__subject {
    font-size: 18px;
  }
  &__content {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 15px;
  }
}

.submitButton {
  display: block;
  text-align: center;
  width: 150px;
  height: 38px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 15px 10px 0;
  background-position: bottom right;
  background-size: 100%;
  background-repeat: no-repeat;
  border: none;
  margin: auto;
  &.gold {
    background: linear-gradient(-45deg, transparent 27px, #a37b30 20px);
  }
  &.navy {
    margin-top: 15px;
    background: linear-gradient(-45deg, transparent 27px, #011e43 20px);
  }
}
</style>
