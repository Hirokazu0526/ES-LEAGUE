<template>
  <div class="es-League-contact">
    <h2 class="es-League-contact__title">お問い合わせ</h2>
    <form class="es-League-contact__form">
      <div class="es-League-contact__container">
        <label class="es-League-contact__label">名前</label><br />
        <input
          v-model="userName"
          type="text"
          name="name"
          :class="{ error: $v.userName.$error, 'form-control': true }"
          @input="$v.userName.$touch()"
        />
        <p v-if="$v.userName.$error" class="error">お名前を入力してください</p>
      </div>
      <div class="es-League-contact__container">
        <label class="es-League-contact__label">ふりがな(全角ひらがな)</label
        ><br />
        <input
          v-model="userKana"
          type="text"
          name="nameKana"
          placeholder="りーぐたろう"
          :class="{ error: $v.userKana.$error, 'form-control': true }"
          @input="$v.userKana.$touch()"
        />
        <div v-if="$v.userKana.$error">
          <span v-if="!$v.userKana.required" class="error"
            >ふりがなが入力されていません。</span
          >
          <span v-if="!$v.userKana.mustKana" class="error"
            >全角ひらがなで入力してください</span
          >
        </div>
      </div>
      <div class="es-League-contact__container">
        <label class="es-League-contact__label"
          >電話番号(ハイフン(-)は不要です)</label
        ><br />
        <input
          v-model="userPhoneNumber"
          type="tel"
          name="phoneNumber"
          placeholder="08012349876"
          :class="{
            error: $v.userPhoneNumber.$error,
            'form-control': true,
          }"
          @input="$v.userPhoneNumber.$touch()"
        />
        <div v-if="$v.userPhoneNumber.$error">
          <span v-if="!$v.userPhoneNumber.required" class="error"
            >電話番号が入力されていません。</span
          >
          <span v-if="!$v.userPhoneNumber.numeric" class="error"
            >数字で入力してください</span
          >
        </div>
      </div>
      <div class="es-League-contact__container">
        <label class="es-League-contact__label">メールアドレス</label><br />
        <input
          v-model="userEmail"
          type="email"
          name="email"
          placeholder="info@example.com"
          :class="{ error: $v.userEmail.$error, 'form-control': true }"
          @blur="$v.userEmail.$touch()"
        />
        <div v-if="$v.userEmail.$error">
          <span v-if="!$v.userEmail.required" class="error"
            >メールドレスが入力されていません。</span
          >
          <span v-if="!$v.userEmail.email" class="error"
            >メールアドレスの形式が正しくありません。</span
          >
        </div>
      </div>
      <div class="es-League-contact__container">
        <label class="es-League-contact__label">お問い合わせ内容</label><br />
        <textarea
          v-model="userContent"
          name="content"
          cols="30"
          rows="10"
          :class="{ error: $v.userContent.$error, 'form-control': true }"
          @blur="$v.userContent.$touch()"
        ></textarea>
        <p v-if="$v.userContent.$error" class="error">
          お問い合わせ内容を入力してください
        </p>
      </div>
      <button class="submitButton gold" @click.prevent="confirmation">
        確認画面へ
      </button>
      <button type="submit" class="submitButton navy" @click.prevent="cancel">
        TOPへ
      </button>
    </form>
  </div>
</template>

<script>
import { required, email, numeric, helpers } from 'vuelidate/lib/validators'
const mustKana = helpers.regex('mustKana', /^[あ-ん゛゜ぁ-ぉゃ-ょー「」、]+/)

export default {
  data() {
    return {}
  },
  computed: {
    userName: {
      get() {
        return this.$store.getters.hasUserName
      },
      set(value) {
        this.$store.dispatch('getUserName', value)
      },
    },
    userKana: {
      get() {
        return this.$store.getters.hasUserKana
      },
      set(value) {
        this.$store.dispatch('getUserKana', value)
      },
    },
    userPhoneNumber: {
      get() {
        return this.$store.getters.hasUserPhoneNumber
      },
      set(value) {
        this.$store.dispatch('getUserPhoneNumber', value)
      },
    },
    userEmail: {
      get() {
        return this.$store.getters.hasUserEmail
      },
      set(value) {
        this.$store.dispatch('getUserEmail', value)
      },
    },
    userContent: {
      get() {
        return this.$store.getters.hasUserContent
      },
      set(value) {
        this.$store.dispatch('getUserContent', value)
      },
    },
    // isChecked() {},
  },
  methods: {
    // isInput() {},
    // checked() {
    //   const obj = this.error
    //   for (const property in obj) {
    //     if (!obj[property]) {
    //       obj[property] = true
    //     }
    //   }
    // },
    confirmation() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$router.push('/contact/confirmation')
      }
    },
    cancel() {
      this.$store.commit('setUserDataClear')
      this.$router.push('/')
    },
  },
  validations: {
    userName: {
      required,
    },
    userKana: {
      required,
      mustKana,
    },
    userPhoneNumber: {
      required,
      numeric,
    },
    userEmail: {
      required,
      email,
    },
    userContent: {
      required,
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-contact {
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
  &__form {
    color: #000;
    text-align: left;
    background: linear-gradient(-45deg, transparent 27px, #fff 20px);
    background-position: bottom right;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 30px 16px 40px;
  }
  &__container {
    margin-bottom: 15px;
    &:last-of-type {
      margin-bottom: 30px;
    }
  }
  &__label {
    display: inline-block;
    font-size: 18px;
    position: relative;
    &::after {
      position: absolute;
      content: '※必須';
      bottom: -1px;
      right: -45px;
      font-size: 14px;
      color: red;
    }
  }
}
.error {
  color: #8a0421;
  border-color: #dd0f3b;
  // background-color: #ffd9d9;
}
input[type='text'],
input[type='tel'],
input[type='email'] {
  margin-top: 5px;
  font-size: 16px;
  width: 100%;
  height: 30px;
}
textarea {
  width: 100%;
  margin-top: 5px;
  font-size: 16px;
  resize: none;
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
