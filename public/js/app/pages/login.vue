<template>
  <div class="page__login">
    <div class="login_titleWrap">
      <h2 class="login_title">Join TownHunt</h2>
      <div>and never miss the best things to do for your trip.</div>
    </div>
    <div class="login_content">
      <div class="login_description">
      We will never post anything without your permission
      </div>
      <div class="login_btnWrap">
        <div>
          <a class="TownHuntBtn" v-on="click: onClickLogin">
            <div class="TownHuntBtnLabel">Login</div>
          </a>
        </div>
        <div>
          <a class="FbBtn" v-on="click: onClickLogin">
             <div class="FbBtnLabel">Login with Facebook</div>
          </a>
        </div>
      <div>
    </div>
  </div>
</template>

<script lang="babel">
import config from '../../common/config'
import cache from '../../common/cache'

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
        // TODO: temp callback
        config.isLoggedIn = true
        // TODO: call API
        this.$root.fetchMe().then(() => {
          // TODO: set sessionToken
          location.href = cache.get('loginCallbackUrl') || '#/'
        }, () => {
          config.isLoggedIn = false
        })
      }
    }
}
</script>