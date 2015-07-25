<template>
  <div class="nav_logo">
    LOGO
  </div>
  <div class="nav_menu">
    <ul>
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
    </ul>
  </div>
</template>

<script lang="babel">
import config from '../common/config'
import util from '../common/util'

export default {
  data() {
    return {
        isLoggedIn: config.isLoggedIn,
        bookings: []
    }
  },

  created() {

  },

  methods: {
    move(href) {
      util.getSlideOut().close()
      location.href = href
    }
  }
}
</script>