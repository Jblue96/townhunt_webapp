<template>
    <div class="header_wrap">
        <button class="button_left" v-on="click: toggleMenu">Menu</button>
        <div class="header_title">Booked</div>
        <button class="button_right" v-on="click: login">Login</button>
    </div>
</template>

<script lang="babel">
import config from '../common/config'
import util from '../common/util'

export default {
  data() {
    return {
        isLoggedIn: config.isLoggedIn
    }
  },

  methods: {
    toggleMenu() {
        util.getSlideOut().toggle()
    },

    login() {
      location.href = "/auth/facebook"
    }
  }
}
</script>