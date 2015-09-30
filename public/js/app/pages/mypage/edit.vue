<template>
  <div class="page__mypage isEdit">
    <div class="mypage_head">
      <span class="icon_profile icon_large"><img v-attr="src: me.imageUrl"></span>
      <div class="mypage_name">
        <input type="text" v-model="me.name">
      </div>
    </div>
    <div class="mypage_table">
        <dl>
            <dt>Email</dt><dd><input type="text" v-model="me.email"></dd>
        </dl>
    </div>
  </div>
</template>

<script lang="babel">
import config from '../../../common/config'
import util from '../../../common/util'

export default {
    data() {
        return {
        }
    },

    components: {
    },

    created() {
      this.me = config.loginUser
      this.$on('onSave:page-mypage-edit', () => {
        alert('saved')
        // TODO: validation

        // TODO: update info via POST API

        // move back to mypage
        util.redirect('#/mypage/top')
      })
    },

    methods: {
    }
}
</script>