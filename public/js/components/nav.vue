<template>
  <div class="nav_logo">
    LOGO
  </div>
  <div class="nav_menu">
    <ul>
      <li><a v-attr="href:'/'">Explore</a></li>
      <li><a v-attr="href:'/wishlist'">Wish List</a></li>
      <!-- <li><a v-attr="href:'#'">Earn Credit</a><span>$0.00</span></li> -->
      <!-- <li><a v-attr="href:'#'">Settings</a></li> -->
    </ul>
  </div>
  <div class="nav_bookings">
    <div>
      <a v-attr="href: '/mybookings'">My Bookings</a>
    </div>
    <div v-repeat="bookings"></div>
  </div>
</template>

<script lang="babel">
import config from '../common/config'

export default {
  data() {
    return {
        isLoggedIn: config.isLoggedIn,
        bookings: []
    }
  },

  methods: {
  }
}
</script>