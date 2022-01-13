<template>
  <div class="es-League-contact">
    <h2 class="es-League-contact__title">
      CONTACT<br /><span>お問い合わせ</span>
    </h2>
    <p class="es-League-contact__text">
      ES LEAGUEに関するお問い合わせは<br />下記からお願いたします。
    </p>
    <form class="es-League-contact__form">
      <div class="es-League-contact__container">
        <label class="es-League-contact__label required">名前</label><br />
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
        <label class="es-League-contact__label">ふりがな</label><br />
        <input
          v-model="userKana"
          type="text"
          name="nameKana"
          placeholder="りーぐたろう"
          :class="{ error: $v.userKana.$error, 'form-control': true }"
          @input="$v.userKana.$touch()"
        />
        <!-- <div v-if="$v.userKana.$error">
          <span v-if="!$v.userKana.required" class="error"
            >ふりがなが入力されていません。</span
          >
          <span v-if="!$v.userKana.mustKana" class="error"
            >全角ひらがなで入力してください</span
          >
        </div> -->
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
        <!-- <div v-if="$v.userPhoneNumber.$error">
          <span v-if="!$v.userPhoneNumber.required" class="error"
            >電話番号が入力されていません。</span
          >
          <span v-if="!$v.userPhoneNumber.numeric" class="error"
            >数字で入力してください</span
          >
        </div> -->
      </div>
      <div class="es-League-contact__container">
        <label class="es-League-contact__label required">メールアドレス</label
        ><br />
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
        <p>
          <label for="category">カテゴリー</label>
          <select id="category" v-model="contactCategory">
            <option :value="null" disabled>選択してください</option>
            <option v-for="item in items" :key="item.index" :value="item.value">
              {{ item.text }}
            </option>
          </select>
        </p>
      </div>
      <div class="es-League-contact__container">
        <label class="es-League-contact__label required">お問い合わせ内容</label
        ><br />
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
      <p class="es-League-contact__policyText">
        <nuxt-link to="/policy" target="_blank"
          >個人情報のお取り扱いについて</nuxt-link
        >に同意の上、内容を確認するボタンを押して次に進んでください。
      </p>
      <div class="es-League-contact__container policyBg">
        <input
          id="isCheck"
          v-model="policyChecked"
          type="checkbox"
          :class="{ error: $v.policyChecked.$error, 'form-control': true }"
        />
        <label for="isCheck" class="es-League-contact__label"
          >規約に同意する</label
        >
        <div v-if="$v.policyChecked.$error">
          <span class="error">内容を確認するには同意する必要があります。</span>
        </div>
      </div>
      <button
        class="es-League-contact__submitButton right"
        @click.prevent="confirmation"
      >
        内容を確認する
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
// import { required, email, numeric, helpers } from 'vuelidate/lib/validators'
// const mustKana = helpers.regex('mustKana', /^[あ-ん゛゜ぁ-ぉゃ-ょー「」、]+/)
const isChecked = (value) => {
  return value === true
}

export default {
  data() {
    return {
      items: [
        { text: '一般のお問い合わせ', value: '一般のお問い合わせ' },
        {
          text: 'プレスに関するお問い合わせ',
          value: 'プレスに関するお問い合わせ',
        },
        { text: 'その他', value: 'その他' },
      ],
    }
  },
  computed: {
    ...mapGetters(['getPolicy']),
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
    contactCategory: {
      get() {
        return this.$store.getters.hasContactCategory
      },
      set(value) {
        this.$store.dispatch('getContactCategory', value)
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
    policyChecked: {
      get() {
        return this.$store.getters.isChecked
      },
      set(value) {
        this.$store.dispatch('getIsChecked', value)
      },
    },
  },
  methods: {
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
      // required,
      // mustKana,
    },
    userPhoneNumber: {
      // required,
      // numeric,
    },
    userEmail: {
      required,
      email,
    },
    userContent: {
      required,
    },
    policyChecked: {
      isChecked,
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-contact {
  margin: 0px 16px;
  padding: 80px 0px 40px;

  &__text {
    text-align: center;
    padding: 10px 16px;
    line-height: 1.5;
  }

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
  &__form {
    color: #000;
    text-align: left;
    background: linear-gradient(-45deg, transparent 27px, #fff 20px);
    background-position: bottom right;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 10px 16px;
  }
  &__container {
    margin-bottom: 15px;
    &:last-of-type {
      margin-bottom: 30px;
    }
    &.policyBg {
      background-color: #bbbbbb;
      padding: 10px 5px;
      margin-top: 10px;
    }
  }
  &__label {
    display: inline-block;
    font-size: 18px;
    position: relative;
    &.required::after {
      position: absolute;
      content: '必須';
      display: block;
      bottom: -3px;
      right: -40px;
      font-size: 14px;
      color: #fff;
      background-color: red;
      padding: 2px 5px;
      border-radius: 2px;
    }
  }
  &__submitButton {
    width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    padding: 0;
    margin: 20px auto 0;
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    background-color: #a37b30;
    border-radius: 2px;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      width: 4px;
      height: 13px;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &.right::after {
      right: 8px;
      background: url(~/assets/img/arrow-right.svg);
    }
    &.left::after {
      left: 8px;
      background: url(~/assets/img/arrow-left.svg);
    }
    &:hover {
      cursor: pointer;
    }
    &.navy {
      background-color: #011e43;
    }
    &.gray {
      background-color: #666666;
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
@media screen and (max-width: 374px) {
  .es-League-contact {
    &__text {
      font-size: 14px;
    }
    &__label {
      font-size: 14px;
      &.required::after {
        font-size: 11px;
      }
    }
    &__policyText {
      font-size: 12px;
      line-height: 1.2;
    }
  }
  input[type='text'],
  input[type='tel'],
  input[type='email'] {
    font-size: 13px;
  }
}
</style>
