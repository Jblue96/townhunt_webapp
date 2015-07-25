<template>
    <div class="header_wrap">
        <a class="button_left {{left.icon}}" v-on="click: leftCallback" v-if="left.icon != 'none'" href="javascript:;">{{{left.label}}}</a>
        <div class="header_title">
          <span v-if="center.title" v-text="center.title"></span>
          <select class="select_title" v-if="!center.title" v-model="countryId">
            <option value="tokyo">Tokyo</option>
            <option value="singapore">Singapore</option>
          </select>
        </div>
        <a class="button_right {{right.icon}}" v-on="click: rightCallback" v-if="right.icon != 'none'" href="javascript:;">{{{right.label}}}</a>
    </div>
</template>

<script lang="babel">
import config from '../common/config'
import cache from '../common/cache'
import util from '../common/util'

export default {

  data() {
    return {
        isLoggedIn: config.isLoggedIn,
        countryId: 'tokyo',
        center: {
          title: ''
        },
        left: {
          label: '',
          icon: '',
          callback: null
        },
        right: {
          label: '',
          icon: '',
          callback: null
        }
    }
  },

  computed: {
    leftCallback() {
      return this.left.callback || function(){}
    },

    rightCallback() {
      return this.right.callback || function(){}
    }
  },

  created() {
    this.$on('onRoute', (componentId) => {
      this.updateHeader(componentId)
    })
  },

  methods: {
    defaultLeft() {
      return {
        icon: 'icon_menu',
        callback: this.toggleMenu
      }
    },

    backToTop() {
      return {
        icon: 'icon_back',
        callback() {
          location.href = '#/'
        }
      }
    },

    defaultRight() {
      if(config.isLoggedIn) {
        // TODO: set login user profile image
        var label = '<img src="http://graph.facebook.com/10152855301715662/picture?type=normal"/>'
        return {
          icon: 'icon_profile',
          label: label,
          callback() {
            location.href = '#/mypage/top'
          }
        }
      }else{
        return {
          label: 'Login',
          callback() {
            location.href = '#/login'
          }
        }
      }
    },

    updateHeader(componentId) {
      switch(componentId){
        case 'page-login':
          this.center = { title: 'Login' }
          this.left = { icon: 'none' }
          this.right = {
            icon: 'icon_close',
            callback: this.back
          }
          break
        case 'page-top':
          this.center = { title: '' }
          this.left = this.defaultLeft()
          this.right = this.defaultRight()
          break
        case 'page-detail':
          this.center = { title: 'Detail Info' }
          this.left = this.defaultLeft()
          this.right = this.defaultRight()
          break
        case 'page-wishlist':
          this.center = { title: 'Wish List' }
          this.left = this.backToTop()
          this.right = this.defaultRight()
          break
        case 'page-mypage-top':
          this.center = { title: 'Account' }
          // this.left = this.defaultLeft()
          this.left = {
            icon: 'icon_back',
            callback: this.back
          }
          this.right = {
            label: 'Edit',
            callback() {
              location.href = '#/mypage/edit'
            }
          }
          break
        case 'page-mypage-edit':
          this.center = { title: 'Account' }
          this.left = {
            icon: 'icon_back',
            callback() {
              location.href = '#/mypage/top'
            }
          }
          this.right = {
            label: 'Save',
            callback: this.onMypageEditSave
          }
          break
        case 'page-payment-order':
          this.center = { title: 'Request Ticket' }
          this.left = {
            icon: 'icon_back',
            callback: this.back
          }
          this.right = this.defaultRight()
          break
        case 'page-payment-success':
          this.center = { title: 'Thank You' }
          this.left = this.defaultLeft()
          this.right = this.defaultRight()
          break
        case 'page-request-list':
          this.center = { title: 'My Bookings' }
          this.left = {
            icon: 'icon_back',
            callback() {
              location.href = '#/'
            }
          }
          this.right = this.defaultRight()
          break
        case 'page-request-detail':
          this.center = { title: 'My Bookings' }
          this.left = {
            icon: 'icon_back',
            callback() {
              location.href = '#/request/list'
            }
          }
          this.right = this.defaultRight()
          break
        default:
            this.center = {}
            this.left = this.defaultLeft()
            this.right = this.defaultRight()
            break
      }
    },

    toggleMenu() {
        util.getSlideOut().toggle()
    },

    back() {
      var histories = cache.get('histories')
      // remove current url from history
      histories.pop()
      var url = histories.pop()
      // skip login screen for back
      while(url == '#/login'){
        url = histories.pop()
      }
      location.href = url
    },

    onChangeCountry() {
      this.$dispatch('onChangeCountry', this.countryId)
    },

    onMypageEditSave() {
      this.$dispatch('onMypageEditSave')
    }
  }
}
</script>