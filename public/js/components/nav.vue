<template>
  <div class="nav_logo">
    LOGO
  </div>
  <div class="nav_menu">
    <ul>
      <li><a href="#">Explore</a></li>
      <li><a href="#">Wish List</a></li>
      <li><a href="#">Earn Credit</a><span>$0.00</span></li>
      <li><a href="#">Settings</a></li>
    </ul>
  </div>
  <div class="nav_bookings">
    <div>My Bookings</div>
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