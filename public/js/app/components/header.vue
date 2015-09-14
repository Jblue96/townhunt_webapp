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
import labels from '../../common/labels'

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

    updateHeader(componentId) {
      var that = this
      switch(componentId){
        case 'page-login':
          this.center = { title: labels.title_header_login }
          this.left = { icon: 'none' }
          this.right = {
            icon: 'icon_close',
            callback: this.back
          }
          break
        case 'page-top':
          this.center = { title: labels.title_header_top }
          this.left = this.iconDefaultLeft()
          this.right = this.iconMap()
          break
        case 'page-map':
          this.center = { title: labels.title_header_top }
          this.left = this.iconDefaultLeft()
          this.right = this.iconList()
          break
        case 'page-queries':
          this.center = { title: labels.title_header_queries }
          this.left = {
            icon: 'icon_back',
            callback: this.back
          }
          this.right = this.iconNone()
          break
        case 'page-detail':
          this.center = { title: labels.title_header_detail }
          this.left = {
            icon: 'icon_back',
            callback: this.back
          }
          this.right = this.iconNone()
          break
        case 'page-wishlist':
          this.center = { title: labels.title_header_favorites }
          this.left = this.iconDefaultLeft()
          this.right = this.iconNone()
          break
        case 'page-mypage-top':
          this.center = { title: labels.title_header_mypage }
          this.left = this.iconDefaultLeft()
          this.right = {
            label: labels.common_edit,
            callback() {
              location.href = '#/mypage/edit'
            }
          }
          break
        case 'page-mypage-edit':
          this.center = { title: labels.title_header_mypage }
          this.left = {
            icon: 'icon_back',
            callback() {
              location.href = '#/mypage/top'
            }
          }
          this.right = {
            label: labels.common_save,
            callback() {
              that.onSave(componentId)
            }
          }
          break
        case 'page-payment-order':
          this.center = { title: labels.title_header_payment_order }
          this.left = {
            icon: 'icon_back',
            callback: this.back
          }
          this.right = this.iconNone()
          break
        case 'page-payment-success':
          this.center = { title: labels.title_header_success }
          this.left = this.iconDefaultLeft()
          this.right = this.iconNone()
          break
        case 'page-request-list':
          this.center = { title: labels.title_header_request_list }
          this.left = {
            icon: 'icon_back',
            callback() {
              location.href = '#/'
            }
          }
          this.right = this.iconNone()
          break
        case 'page-request-detail':
          this.center = { title: labels.title_header_request_detail }
          this.left = {
            icon: 'icon_back',
            callback() {
              location.href = '#/request/list'
            }
          }
          this.right = this.iconNone()
          break
        default:
            this.center = {title: labels.title_header_top}
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