<template>
  <div style="color: #fff">
    {{ userName }} <br />
    {{ userKana }} <br />
    {{ userPhoneNumber }} <br />
    {{ userEmail }} <br />
    {{ userContent }} <br />
    <br />
    <!-- <input value="もどる" type="button" @click="back" /> -->
    <button @click="back">戻る</button>
    <button type="submit" @click.prevent="formSubmit">送信</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    historyState: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
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
        .catch(() => {})
    },
    back() {
      history.back()
    },
  },
}
</script>

<style></style>
