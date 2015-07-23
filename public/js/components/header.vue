<template>
    <div class="header_wrap">
        <a class="button_left" v-on="click: leftCallback" v-if="leftType != 'none'" v-attr="href: leftLink">{{{leftLabel}}}</a>
        <div class="header_title" v-text="displayTitle"></div>
        <a class="button_right" v-on="click: rightCallback" v-if="rightType != 'none'" v-attr="href: rightLink">{{{rightLabel}}}</a>
    </div>
</template>

<script lang="babel">
import config from '../common/config'
import util from '../common/util'

export default {

  props: ['title', 'leftType', 'rightType'],

  data() {
    return {
        isLoggedIn: config.isLoggedIn
    }
  },

  computed: {
    displayTitle: function(){
      return this.title || 'Booked'
    },

    leftLabel: function () {
      return this.getAction(this.leftType).label
    },

    rightLabel: function() {
      return this.getAction(this.rightType).label
    },

    leftLink: function(){
      return this.getAction(this.leftType).link || 'javascript:;'
    },

    rightLink: function(){
      return this.getAction(this.rightType).link || 'javascript:;'
    }
  },

  methods: {
    getAction(type) {
      var action
      switch(type){
        case 'menu':
          action = {
            label: 'Menu',
            callback: this.toggleMenu
          }
          break
        case 'login':
          action = {
            label: 'Login',
            callback: this.login
          }
          break
        case 'back':
          action = {
            label: 'back',
            callback: this.back
          }
          break
        case 'mypage':
          action = {
            label: 'mypage',
            callback: function(){},
            link: '#/mypage/top'
          }
          break
        case 'mypageEdit':
          action = {
            label: 'edit',
            callback: function(){},
            link: '#/mypage/edit'
          }
          break
        default:
          action = {
            label: '',
            callback: function(){}
          }
          break
      }
      return action
    },

    leftCallback() {
      this.getAction(this.leftType).callback()
    },

    rightCallback() {
      this.getAction(this.rightType).callback()
    },

    toggleMenu() {
        util.getSlideOut().toggle()
    },

    login() {
      location.href = "/auth/facebook"
    },

    back() {
      history.back()
    }
  }
}
</script>