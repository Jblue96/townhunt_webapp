<template>
  <div class="page__logout"></div>
</template>

<script lang="babel">
import config from '../../common/config'
import cache from '../../common/cache'

export default {
    data() {
        return {}
    },

    created() {
      // TODO: use API to logout
      config.loginUser = null
      // redirect to top
      location.href = '#/'
    }
}
</script>