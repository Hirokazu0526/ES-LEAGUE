<template>
  <div class="__nuxt-error-page">
    <div class="error">
      <div class="title">{{ message }}</div>
      <NuxtLink class="error-link" :to="link.to">{{ link.name }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        },
      ],
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      if (this.error.statusCode === 404) {
        return 'このページは存在しません。'
      }
      return this.error.message || `エラーが発生しました。`
    },
    link() {
      if (this.error.statusCode === 403) {
        return { to: '/login', name: 'ログイン画面へ戻る' }
      } else if (this.error.statusCode === 404) {
        return { to: '/', name: 'トップへ戻る' }
      } else {
        return { to: '/', name: 'トップへ戻る' }
      }
    },
  },
}
</script>

<style>
.__nuxt-error-page {
  padding: 1rem;
  background: #f7f8fb;
  color: #47494e;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 100 !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.__nuxt-error-page .error {
  max-width: 100%;
}
.__nuxt-error-page .title {
  font-size: 1.5rem;
  margin-top: 15px;
  color: #47494e;
  margin-bottom: 8px;
}
.__nuxt-error-page .description {
  color: #7f828b;
  line-height: 21px;
  margin-bottom: 10px;
}
.__nuxt-error-page a {
  color: #7f828b !important;
  text-decoration: none;
}
.__nuxt-error-page .logo {
  position: fixed;
  left: 12px;
  bottom: 12px;
}
</style>
