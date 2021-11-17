<template>
  <div>
    <keep-alive>
      <form class="es-League-form">
        <dl>
          <dt>名前</dt>
          <dd>
            <input
              v-model="userName"
              type="text"
              name="name"
              :class="{ error: $v.userName.$error, 'form-control': true }"
              @input="$v.userName.$touch()"
            />
            <p v-if="$v.userName.$error">お名前を入力してください</p>
          </dd>
          <dt>ふりがな</dt>
          <dd>
            <input
              v-model="userKana"
              type="text"
              name="nameKana"
              :class="{ error: $v.userKana.$error, 'form-control': true }"
              @input="$v.userKana.$touch()"
            />
            <p v-if="$v.userKana.$error">ふりがなを入力してください</p>
          </dd>
          <dt>電話番号</dt>
          <dd>
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
            <p v-if="$v.userPhoneNumber.$error">電話番号を入力してください</p>
          </dd>
          <dt>メールアドレス</dt>
          <dd>
            <input
              v-model="userEmail"
              type="email"
              name="email"
              placeholder="info@example.com"
              :class="{ error: $v.userEmail.$error, 'form-control': true }"
              @blur="$v.userEmail.$touch()"
            />
            <div v-if="$v.userEmail.$error">
              <span v-if="!$v.userEmail.required"
                >メールドレスが入力されていません。</span
              >
              <span v-if="!$v.userEmail.email"
                >メールアドレスの形式が正しくありません。</span
              >
            </div>
          </dd>
          <dt>お問い合わせ内容</dt>
          <dd>
            <textarea
              v-model="userContent"
              name="content"
              required
              :class="{ error: $v.userContent.$error, 'form-control': true }"
              @input="$v.userContent.$touch()"
            ></textarea>
            <p v-if="$v.userContent.$error">
              お問い合わせ内容を入力してください
            </p>
          </dd>
        </dl>
        <button @click.prevent="confirmation">確認画面へ</button>
        <button type="submit" @click.prevent="cancel">TOPへ</button>
      </form>
    </keep-alive>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

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
    },
    userPhoneNumber: {
      required,
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
.es-League-form {
  color: #fff;
  text-align: center;
}
.error {
  color: #8a0421;
  border-color: #dd0f3b;
  background-color: #ffd9d9;
}
input[type='text'],
input[type='tel'],
input[type='email'],
textarea {
  font-size: 16px;
  transform: scale(0.8);
}
</style>
