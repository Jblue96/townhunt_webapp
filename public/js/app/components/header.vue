<template>
    <div class="header_wrap">
        <a class="button_left {{left.icon}}" v-on="click: leftCallback" v-if="left.icon != 'none'" href="javascript:;">{{{left.label}}}</a>
        <div class="header_title" v-on="click: scrollTop">
          <span v-if="center.title" v-text="center.title"></span>
        </div>
        <a class="button_right {{right.icon}}" v-on="click: rightCallback" v-if="right.icon != 'none'" href="javascript:;">{{{right.label}}}</a>
    </div>
</template>

<script lang="babel">
import config from '../../common/config'
import cache from '../../common/cache'
import util from '../../common/util'

export default {

  data() {
    return {
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
    this.$on('onRoute', (options) => {
      this.updateHeader(options.componentId)
    })
  },

  methods: {
    iconDefaultLeft() {
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

    iconNone() {
      return {
        icon: 'none'
      }
    },

    iconMap() {
      return {
        icon: 'icon_map',
        callback() {
          location.href = '#/map'
        }
      }
    },

    iconList() {
      return {
        icon: 'icon_list',
        callback() {
          location.href = '#/'
        }
      }
    },

    // iconDefaultRight() {
    //   if(config.loginUser) {
    //     // set login user profile image
    //     var me = cache.get('me')
    //     var label = `<img src="${me.imageUrl}"/>`
    //     return {
    //       icon: 'icon_profile',
    //       label: label,
    //       callback() {
    //         location.href = '#/mypage/top'
    //       }
    //     }
    //   }else{
    //     return {
    //       label: 'Login',
    //       callback() {
    //         location.href = '#/login'
    //       }
    //     }
    //   }
    // },

    updateHeader(componentId) {
      var that = this
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
          this.center = { title: 'Tokyo' }
          this.left = this.iconDefaultLeft()
          this.right = this.iconMap()
          break
        case 'page-map':
          this.center = { title: 'Tokyo' }
          this.left = this.iconDefaultLeft()
          this.right = this.iconList()
          break
        case 'page-queries':
          this.center = { title: 'Filter' }
          this.left = {
            icon: 'icon_back',
            callback: this.back
          }
          this.right = this.iconNone()
          break
        case 'page-detail':
          this.center = { title: 'Detail Info' }
          // this.left = this.iconDefaultLeft()
          this.left = {
            icon: 'icon_back',
            callback: this.back
          }
          this.right = this.iconNone()
          break
        case 'page-wishlist':
          this.center = { title: 'My Favorites' }
          this.left = this.iconDefaultLeft()
          this.right = this.iconNone()
          break
        case 'page-mypage-top':
          this.center = { title: 'Account' }
          this.left = this.iconDefaultLeft()
          // this.left = {
          //   icon: 'icon_back',
          //   callback: this.back
          // }
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
            callback() {
              that.onSave(componentId)
            }
          }
          break
        case 'page-payment-order':
          this.center = { title: 'Request Ticket' }
          this.left = {
            icon: 'icon_back',
            callback: this.back
          }
          this.right = this.iconNone()
          break
        case 'page-payment-success':
          this.center = { title: 'Thank You' }
          this.left = this.iconDefaultLeft()
          this.right = this.iconNone()
          break
        case 'page-request-list':
          this.center = { title: 'My Bookings' }
          this.left = {
            icon: 'icon_back',
            callback() {
              location.href = '#/'
            }
          }
          this.right = this.iconNone()
          break
        case 'page-request-detail':
          this.center = { title: 'My Bookings' }
          this.left = {
            icon: 'icon_back',
            callback() {
              location.href = '#/request/list'
            }
          }
          this.right = this.iconNone()
          break
        default:
            this.center = {title: 'Tokyo'}
            this.left = this.iconDefaultLeft()
            this.right = this.iconNone()
            break
      }
    },

    toggleMenu() {
        var slideout = util.getSlideOut()
        slideout.toggle()
        this.$dispatch('toggleMenu', slideout.isOpen())
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

    onSave(componentId) {
      this.$dispatch('onSave', componentId)
    },

    scrollTop() {
      util.scrollTo(document.body, 0, 200)
    }
  }
}
</script>