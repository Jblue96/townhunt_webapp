<template>
  <div class="page__mypage">
    <div class="mypage_head">
      <span class="icon_profile icon_large"><img v-attr="src: me.imageUrl"></span>
      <div class="mypage_name">
        <span>{{me.name}}</span>
      </div>
    </div>
    <div class="mypage_table">
        <dl>
            <dt>Email</dt><dd>{{me.email}}</dd>
        </dl>
    </div>
  </div>
</template>

<script lang="babel">
import config from '../../../common/config'

export default {
    data() {
        return {
          me: {}
        }
    },

    components: {
    },

    created() {
      this.me = config.loginUser
    },

    methods: {

    }
}
</script>