<template>
  <div class="page__login">
      <h2>Login</h2>
      <div class="btn_large" v-on="click: onClickLogin">Login</div>

  </div>
</template>

<script lang="babel">
import config from '../common/config'
import cache from '../common/cache'

export default {
    data() {
        return {
          username: '',
          email: ''
        }
    },

    components: {
    },

    created() {
    },

    methods: {
      onClickLogin() {
        // TODO: temp
        config.isLoggedIn = true
        location.href = cache.get('loginCallbackUrl') || '#/'
      }
    }
}
</script>