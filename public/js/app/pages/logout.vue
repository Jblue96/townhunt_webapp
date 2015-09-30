<template>
  <div class="page__logout"></div>
</template>

<script lang="babel">
import config from '../../common/config'
import cache from '../../common/cache'
import util from '../../common/util'

export default {
    data() {
        return {}
    },

    created() {
      // TODO: use API to logout
      config.loginUser = null
      // redirect to top
      util.redirect('#/')
    }
}
</script>