<template>
  <div class="nav_logo">
    LOGO
  </div>
  <div class="nav_menu">
    <ul>
      <li v-if="me" class="nav_profile">
          <a class="icon_profile" v-on="click: move('#/mypage/top')" href="javascript:;">
            <img v-attr="src: me.imageUrl"/>
            <span>{{me.name}}</span>
          </a>
      </li>
      <li v-if="!me"><a v-on="click: move('#/login')">Login</a></li>
      <li><a v-on="click: move('#/')">Explore</a></li>
      <li><a v-on="click: move('#/wishlist')">Wish List</a></li>
      <!-- <li><a v-on="click: move('#')">Earn Credit</a><span>$0.00</span></li> -->
      <!-- <li><a v-on="click: move('#')">Settings</a></li> -->
      <li>
        <a v-on="click: move('#/request/list')">My Bookings</a>
        <div class="nav_bookings">
          <div v-repeat="bookings"></div>
        </div>
      </li>
      <li v-if="me"><a v-on="click: move('#/logout')">Logout</a></li>
    </ul>
  </div>
</template>

<script lang="babel">
import config from '../../common/config'
import cache from '../../common/cache'
import util from '../../common/util'

export default {
  data() {
    return {
        me: null,
        bookings: []
    }
  },

  created() {
    this.$on('onRoute', (componentId) => {
      this.me = cache.get('me')
    })
  },

  methods: {
    move(href) {
      util.getSlideOut().close()
      location.href = href
    }
  }
}
</script>