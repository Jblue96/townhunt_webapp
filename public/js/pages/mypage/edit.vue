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
import cache from '../../common/cache'

export default {
    data() {
        return {
        }
    },

    components: {
    },

    created() {
      this.me = cache.get('me')
      this.$on('onSave:page-mypage-edit', () => {
        alert('saved')
        // TODO: validation

        // TODO: update info via POST API

        // move back to mypage
        location.href = "#/mypage/top"
      })
    },

    methods: {
    }
}
</script>