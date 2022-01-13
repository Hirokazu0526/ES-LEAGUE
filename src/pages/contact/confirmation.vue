<template>
  <div class="es-League-confirmation">
    <h2 class="es-League-confirmation__title">
      CONTACT<br /><span>お問い合わせ</span>
    </h2>
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
        <h3 class="es-League-confirmation__subject">カテゴリー</h3>
        <p class="es-League-confirmation__content">{{ contactCategory }}</p>
        <h3 class="es-League-confirmation__subject">お問い合わせ内容</h3>
        <p class="es-League-confirmation__content">{{ userContent }}</p>
        <h3 class="es-League-confirmation__subject">
          プライバシーポリシーに同意する
        </h3>
        <p class="es-League-confirmation__content">{{ policy }}</p>
      </div>
    </div>
    <p class="es-League-confirmation__caution">
      内容を確認し<br />問題なければ送信してください。
    </p>
    <div class="es-League-confirmation__btnWrapper">
      <button
        class="es-League-confirmation__submitButton left gray"
        @click="back"
      >
        修正する
      </button>
      <button
        class="es-League-confirmation__submitButton right"
        :class="{ isProcessing: processing }"
        type="submit"
        :disabled="isProcessing()"
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
  data() {
    return {
      processing: false,
    }
  },
  computed: {
    ...mapState([
      'userName',
      'userKana',
      'userPhoneNumber',
      'userEmail',
      'contactCategory',
      'userContent',
      'isChecked',
    ]),
    policy() {
      if (this.isChecked) {
        return '同意する'
      } else {
        return ''
      }
    },
  },
  methods: {
    async formSubmit() {
      this.startProcessing()
      const apiUrl = process.env.API_URL
      const apiKey = process.env.API_KEY
      const inputData = {
        name: this.userName,
        nameKana: this.userKana,
        phoneNumber: this.userPhoneNumber,
        email: this.userEmail,
        category: this.contactCategory,
        content: this.userContent,
        isChecked: this.policy,
      }

      await this.$axios
        .$post(`${apiUrl}contact`, inputData, {
          headers: {
            'Content-Type': 'application/json',
            'X-MICROCMS-API-KEY': apiKey,
          },
        })
        .then(() => {
          this.endProcessing()
          this.inputData = {}
          this.$store.commit('setUserDataClear')
          this.$router.push('/contact/complete')
        })
        .catch(() => {})
    },
    startProcessing() {
      this.processing = true
    },
    endProcessing() {
      this.processing = false
    },
    isProcessing() {
      return this.processing
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
    padding: 10px 16px;
  }
  &__subject {
    font-size: 18px;
  }
  &__content {
    font-size: 18px;
    min-height: 18px;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  &__caution {
    margin: 10px 16px 30px;
    text-align: center;
    line-height: 1.5;
  }

  &__btnWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    justify-items: center;
    margin-bottom: 10px;
  }

  &__submitButton {
    width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    padding: 0;
    margin: 0 auto;
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    background-color: #a37b30;
    border-radius: 2px;
    position: relative;
    &.isProcessing {
      background-color: #857a67;
    }
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
@media screen and (max-width: 374px) {
  .es-League-confirmation {
    &__subject {
      font-size: 14px;
    }
    &__content {
      font-size: 14px;
    }
    &__submitButton {
      width: 130px;
    }
  }
}
</style>
