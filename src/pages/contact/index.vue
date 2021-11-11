<template>
  <div>
    <form class="es-League-form">
      <dl>
        <dt>名前</dt>
        <dd><input v-model="inputData.name" type="text" name="name" /></dd>
        <dt>ふりがな</dt>
        <dd>
          <input v-model="inputData.nameKana" type="text" name="nameKana" />
        </dd>
        <dt>電話番号</dt>
        <dd>
          <input
            v-model="inputData.phoneNumber"
            type="tel"
            name="phoneNumber"
          />
        </dd>
        <dt>メールアドレス</dt>
        <dd><input v-model="inputData.email" type="email" name="email" /></dd>
        <dt>お問い合わせ内容</dt>
        <dd>
          <textarea v-model="inputData.content" name="content"></textarea>
        </dd>
      </dl>
      <button type="submit" @click.prevent="formSubmit">送信</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputData: {
        name: '',
        nameKana: '',
        phoneNumber: '',
        email: '',
        content: '',
      },
    }
  },
  methods: {
    async formSubmit() {
      const apiUrl = process.env.API_URL
      const apiKey = process.env.API_KEY

      await this.$axios
        .$post(`${apiUrl}contact`, this.inputData, {
          headers: {
            'Content-Type': 'application/json',
            'X-MICROCMS-API-KEY': apiKey,
          },
        })
        .then(() => {
          this.inputData = {}
          this.$router.push('/contact/complete')
        })
        .catch(() => {})
    },
    send() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.es-League-form {
  color: #fff;
  text-align: center;
}
</style>
