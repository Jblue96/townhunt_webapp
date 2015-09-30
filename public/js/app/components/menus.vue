<template>
    <div class="component__menus" v-show="initialized">
        <div class="menu_tab_bar">
          <span class="menu_tab_bar_item" v-repeat="menus" v-class="selected: selectedMenuType == menu_type">
            <span class="menu_tab_bar_separator" v-if="$index > 0"></span>
            <a href="javascript:;" v-on="click: onClickMenuType(menu_type)">
              {{menu_name_en}}
            </a>
          </span>
        </div>
        <div class="menu_main" v-if="selectedMenu">
          <div class="menu_section_wrap" v-repeat="selectedMenu.section_items">
            <div class="menu_section_name">{{section_name_en}} / {{section_name_ja}}</div>
            <div class="menu_content_wrap" v-repeat="contents">
              <component-menu-item item="{{$data}}" currency="{{selectedMenu.currency}}"></component-menu-item>
            </div>
          </div>
        </div>
    </div>
</template>

<script lang="babel">
import constants from '../../../../controllers/constants'
import util from '../../common/util'
import filter from '../filters/filter'
import componentMenuItem from './menuItem.vue'

   // "menus": [
   //    {  
   //       "currency": {
   //          "name":"JPY",
   //          "symbol":"¥"
   //       },
   //       "menu_type": "dinner",
   //       "section_items": [
   //          {
   //             "section_type": "",
   //             "contents": []
   //          }
   //       ],
   //       "option_groups": []
   //    }
   // ],
export default {

  props: ['menus'],

  data() {
    return {
      initialized: false,
      selectedMenuType: '',  
      menus: []
    }
  },

  components: {
    'component-menu-item': componentMenuItem
  },

  computed: {
    selectedMenu() {
      if (!this.selectedMenuType) {
        return null
      }
      var result = util.detect(this.menus, (menu) => {
        return this.selectedMenuType === menu.menu_type
      })
      return result
    }
  },

  attached() {
    this.selectedMenuType = this.menus[0] && this.menus[0].menu_type || ''
    this.initialized = true
  },

  detached() {
    this.initialized = false
  },

  methods: {

    onClickMenuType(menuType) {
      this.selectedMenuType = menuType
    }

  }
}
</script>